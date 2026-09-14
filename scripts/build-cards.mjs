#!/usr/bin/env node
/**
 * Plan 59 — Datacodex Cards Bridge — build script.
 *
 * Scope of this file as of 2026-09-14 (Ahmed's approval to execute Groups 3-4 only,
 * per docs/audits/52-audit-2026-09-14-plan-59-live-review.md, "Sonnet Execution Entry
 * — Groups 3-4"):
 *
 *   - Group 3: fetch + validate the Datacodex feed contract, apply the failure policy
 *     (plans/59-datacodex-cards-bridge.md, Section 5), build the independent `dist/`
 *     output directory per the Group 2 root inventory (copy-all-plus-exclusions), and
 *     inject sanitized card placeholders into the 10 topic-matched service pages
 *     (Arabic + English) via idempotent marker replacement.
 *   - Group 4: only the two position markers per topic-matched service page — the
 *     actual marker <!-- comments --> live in the tracked HTML source files, added as
 *     one-time source edits (Guarantee 4, Section 6). This script never mutates a
 *     tracked file; it only rewrites the copies already placed in `dist/`.
 *
 * Explicitly OUT of scope for this file right now (forbidden by the current pass):
 *   - Group 5 (final card visual design/CSS) and Group 6 (button copy, nofollow/
 *     target rules, JSON-LD ItemList schema) — the card markup rendered below is a
 *     plain, sanitized PLACEHOLDER only, clearly labelled as such, so the pipeline
 *     (marker injection, sanitization, byte-for-byte determinism, failure policy) can
 *     be proven without pre-empting the visual design decision.
 *   - Group 7 (homepage strip + region pages `data-recovery-makkah` /
 *     `data-recovery-saudi-arabia`, whose selection rule is "latest regardless of
 *     topic", not topic matching) — those two service pages intentionally carry no
 *     markers yet and are not touched by this script.
 *   - Any Cloudflare setting, `_headers`, `_redirects`, `index.html`, `en/index.html`.
 *
 * No external dependencies — Node.js built-ins only (Guarantee-compatible with the
 * "no build tooling" baseline in Section 3).
 */

import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import crypto from 'node:crypto';

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const REPO_ROOT = path.resolve(__dirname, '..');
export const DIST_DIR = path.join(REPO_ROOT, 'dist');
export const CARDS_IMAGE_SUBDIR = path.join('assets', 'images', 'datacodex-cards');

// ---------------------------------------------------------------------------
// Constants — feed contract (plan Section 4)
// ---------------------------------------------------------------------------

export const FEED_URL = 'https://datacodexlab.com/feed.json';
export const REQUIRED_SCHEMA_VERSION = 2;
export const MAX_TOPICS_PER_ITEM = 2;
export const FEED_URL_DOMAIN = 'datacodexlab.com';
export const DEFAULT_TIMEOUT_MS = 15000;
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
export const ALLOWED_IMAGE_CONTENT_TYPES = new Set([
  'image/webp',
  'image/jpeg',
  'image/png',
  'image/avif',
]);
const VALID_LANGS = new Set(['ar', 'en']);
const VALID_TYPES = new Set(['post', 'case', 'service']);

// ---------------------------------------------------------------------------
// Root inventory — Group 2, Section 2.1 (approved by Ahmed 2026-09-14).
// Deny-list ("copy everything except"), not an allowlist (Section 3 rejects allowlists).
// ---------------------------------------------------------------------------

export const EXCLUDE_ROOT_ENTRIES = new Set([
  '.claude',
  '.git',
  '.gitignore',
  '.vite',
  'BUGFIX_v1.0.1.md',
  'BUGFIX_v1.0.2.md',
  'changelog.md',
  'DELIVERY_README.md',
  'DELIVERY_README_v1.0.2.md',
  'DEPLOYMENT.md',
  'dist', // self-exclusion (D07)
  'docs',
  'master-constitution.md',
  'plans',
  'project-context.md',
  'project-key.md',
  'prompts',
  'README.md',
  'reviews',
  'scripts',
  'secrets',
  'TEST_REPORT_v1.0.2.md',
  'VERIFICATION_v1.1.md',
  '_redirects', // Review Entry 03, item 3 — untracked locally, still excluded from dist
]);

export function isExcludedRootEntry(name) {
  return EXCLUDE_ROOT_ENTRIES.has(name) || name.startsWith('.env');
}

// ---------------------------------------------------------------------------
// Topic map — plan Section 4 "خريطة المواضيع إلى صفحات الفارس" (approved, Review 03).
//
// Scope note (Groups 3-4 pass): only these 10 topic-matched service pages are wired.
// Region pages and the homepage strip use "latest regardless of topic" (Group 7),
// out of scope this pass — see file header.
// ---------------------------------------------------------------------------

export const TOPIC_MAP = {
  'hdd-internal': { ar: 'services/hdd-data-recovery.html', en: 'en/services/hdd-data-recovery.html' },
  'hdd-external': { ar: 'services/external-hdd-data-recovery.html', en: 'en/services/external-hdd-data-recovery.html' },
  'ssd-nvme': { ar: 'services/ssd-nvme-data-recovery.html', en: 'en/services/ssd-nvme-data-recovery.html' },
  'laptop-pc': { ar: 'services/laptop-pc-data-recovery.html', en: 'en/services/laptop-pc-data-recovery.html' },
  mac: { ar: 'services/mac-data-recovery.html', en: 'en/services/mac-data-recovery.html' },
  'flash-sd': { ar: 'services/flash-sd-data-recovery.html', en: 'en/services/flash-sd-data-recovery.html' },
  'raid-nas': { ar: 'services/raid-nas-data-recovery.html', en: 'en/services/raid-nas-data-recovery.html' },
  'dvr-nvr': { ar: 'services/dvr-nvr-data-recovery.html', en: 'en/services/dvr-nvr-data-recovery.html' },
  ransomware: { ar: 'services/ransomware-data-recovery.html', en: 'en/services/ransomware-data-recovery.html' },
  'database-erp': { ar: 'services/database-erp-recovery.html', en: 'en/services/database-erp-recovery.html' },
};

// ---------------------------------------------------------------------------
// Position markers (Group 4) — idempotent BEGIN/END comment pairs.
// Two slots per page: "intro" (after the intro paragraph(s), before the first <h2>)
// and "footer" (immediately before the final CTA block, <div class="service-cta">).
// Distribution (Section 7, Group 4): 1 card in "intro", up to 2 cards in "footer".
// ---------------------------------------------------------------------------

export function beginMarker(topicId, slot) {
  return `<!-- datacodex-cards:begin topic="${topicId}" slot="${slot}" -->`;
}
export function endMarker(topicId, slot) {
  return `<!-- datacodex-cards:end topic="${topicId}" slot="${slot}" -->`;
}

function markerRegion(topicId, slot) {
  const begin = beginMarker(topicId, slot).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const end = endMarker(topicId, slot).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(${begin})([\\s\\S]*?)(${end})`);
}

// ---------------------------------------------------------------------------
// Sanitization utilities (Group 3 checklist item — mechanism only; the final visual
// design/copy is Group 5/6, out of scope here).
// ---------------------------------------------------------------------------

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Reject anything but an absolute https:// URL on the expected domain (or a subdomain). */
export function isSafeAbsoluteHttpsUrl(value, domain) {
  if (typeof value !== 'string' || value.length === 0) return false;
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    return false;
  }
  if (parsed.protocol !== 'https:') return false;
  if (parsed.hostname !== domain && !parsed.hostname.endsWith(`.${domain}`)) return false;
  return true;
}

/** JSON-LD-safe serialization utility (mechanism for future Group 6 use; not emitted
 *  into pages by this script — Group 6 schema design is out of scope this pass). */
export function safeJsonLdStringify(value) {
  return JSON.stringify(value).replace(/<\/script/gi, '<\\/script');
}

/**
 * Deterministic, collision-resistant image basename derived from the item's
 * original `id` (Review Entry 06, item 4). The previous approach sanitized the id
 * by replacing every non-alphanumeric run with a single "-", which collapsed
 * distinct ids like "a:b" and "a-b" onto the same filename ("a-b"). Hashing the
 * *raw, unsanitized* id avoids that: any difference in the original id produces a
 * different filename, and the same id always produces the same filename (so
 * repeated builds remain byte-for-byte identical — Guarantee 3).
 */
export function imageBaseNameForId(id) {
  return crypto.createHash('sha256').update(id, 'utf8').digest('hex').slice(0, 24);
}

// ---------------------------------------------------------------------------
// Feed contract validation (Section 4 + Section 5 "سياسة الفشل")
// ---------------------------------------------------------------------------

/**
 * Validates one feed item's *shape* against the contract. Returns null if valid,
 * or a short English reason string if it violates the contract shape (contract
 * violations fail the whole build — Section 5).
 */
export function validateItemShape(item) {
  if (item === null || typeof item !== 'object' || Array.isArray(item)) {
    return 'item is not an object';
  }
  const { id, title, cardSummary, image, url, topics, lang, type, publishedAt, hasVideo } = item;

  if (typeof id !== 'string' || id.length === 0) return 'id: missing or not a non-empty string';
  if (typeof title !== 'string' || title.length === 0) return `id=${id}: title missing or not a non-empty string`;
  if (typeof cardSummary !== 'string' || cardSummary.length === 0) {
    return `id=${id}: cardSummary missing or not a non-empty string`;
  }
  if (!isSafeAbsoluteHttpsUrl(image, FEED_URL_DOMAIN)) {
    return `id=${id}: image must be an absolute https URL on ${FEED_URL_DOMAIN}`;
  }
  if (!isSafeAbsoluteHttpsUrl(url, FEED_URL_DOMAIN)) {
    return `id=${id}: url must be an absolute https URL on ${FEED_URL_DOMAIN}`;
  }
  if (!url.endsWith('/')) return `id=${id}: url must end with a trailing slash`;
  if (!Array.isArray(topics) || topics.length === 0 || topics.length > MAX_TOPICS_PER_ITEM) {
    return `id=${id}: topics must be a non-empty array of at most ${MAX_TOPICS_PER_ITEM} strings`;
  }
  if (!topics.every((t) => typeof t === 'string' && t.trim().length > 0)) {
    return `id=${id}: topics must contain only non-empty strings (whitespace-only rejected)`;
  }
  if (!VALID_LANGS.has(lang)) return `id=${id}: lang must be "ar" or "en"`;
  if (!VALID_TYPES.has(type)) return `id=${id}: type must be one of post/case/service`;
  if (!isStrictIsoUtcTimestamp(publishedAt)) {
    return `id=${id}: publishedAt must be a strict ISO 8601 UTC timestamp ending in "Z" (e.g. 2026-08-30T00:00:00.000Z) — date-only and timezone-offset forms are rejected`;
  }
  if (typeof hasVideo !== 'boolean') return `id=${id}: hasVideo must be a boolean`;

  return null;
}

/**
 * Strict ISO 8601 UTC check (Review Entry 06, item 2; tightened by Review Entry 07).
 * `Date.parse()` alone accepts date-only strings ("2026-08-30") and timezone-offset
 * strings ("...+02:00"), which the contract does not — it requires a full timestamp
 * ending in literal "Z". Milliseconds are optional (1-3 digits) to match real feed
 * examples.
 *
 * `Date.parse()` (and the `Date.UTC()` constructor it's built on) also silently
 * *normalizes* calendar/time values that don't exist — "2026-02-30T00:00:00Z" rolls
 * over to March 2, and "2026-01-01T24:00:00Z" rolls over to January 2 00:00:00 —
 * instead of rejecting them. A regex-shape match plus a bare `Date.parse()` NaN
 * check therefore let impossible values through. Fixed by round-tripping the
 * parsed UTC fields back against the original numeric components: if `Date.UTC()`
 * had to normalize anything, at least one field will no longer match, and the
 * timestamp is rejected (Review Entry 07).
 */
const ISO_UTC_Z_PATTERN = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?Z$/;
export function isStrictIsoUtcTimestamp(value) {
  if (typeof value !== 'string') return false;
  const match = ISO_UTC_Z_PATTERN.exec(value);
  if (!match) return false;

  const [, yearStr, monthStr, dayStr, hourStr, minStr, secStr, msStr] = match;
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);
  const hour = Number(hourStr);
  const minute = Number(minStr);
  const second = Number(secStr);
  // Pad a short fractional part the same way the literal string encodes it
  // ("5" -> 500ms, "05" -> 50ms, "005" -> 5ms) so the round-trip compares like for like.
  const ms = msStr ? Number(msStr.padEnd(3, '0')) : 0;

  const time = Date.UTC(year, month - 1, day, hour, minute, second, ms);
  if (Number.isNaN(time)) return false;

  const roundTrip = new Date(time);
  return (
    roundTrip.getUTCFullYear() === year &&
    roundTrip.getUTCMonth() === month - 1 &&
    roundTrip.getUTCDate() === day &&
    roundTrip.getUTCHours() === hour &&
    roundTrip.getUTCMinutes() === minute &&
    roundTrip.getUTCSeconds() === second &&
    roundTrip.getUTCMilliseconds() === ms
  );
}

/**
 * Validates the full feed payload's *shape* — schemaVersion, root shape, and every
 * item's contract shape (Section 4). Deliberately does NOT check for duplicate
 * `url` values here: that check must run after `dedupeById()` has removed the
 * documented duplicate-`id` exception, otherwise a legitimate duplicate-id/
 * distinct-url pair that collapses through dedupe could be mis-diagnosed, and more
 * importantly a duplicate-id/duplicate-url pair must be dropped by the `id` rule,
 * not fail the whole build as a raw "duplicate url" violation (Review Entry 06,
 * item 1). Call `checkNoDuplicateUrls()` on the post-dedupe survivors instead.
 * Returns { ok: true, items } or { ok: false, reason }. Pure function — no I/O.
 */
export function validateFeedPayload(raw) {
  if (raw === null || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ok: false, reason: 'feed root is not an object' };
  }
  if (raw.schemaVersion !== REQUIRED_SCHEMA_VERSION) {
    return { ok: false, reason: `schemaVersion must equal ${REQUIRED_SCHEMA_VERSION} (got ${JSON.stringify(raw.schemaVersion)})` };
  }
  if (!Array.isArray(raw.items)) {
    return { ok: false, reason: 'items must be an array' };
  }
  for (const item of raw.items) {
    const err = validateItemShape(item);
    if (err) return { ok: false, reason: `contract violation — ${err}` };
  }
  return { ok: true, items: raw.items };
}

/**
 * Fails the build if two *distinct* ids share the same `url` (Section 4: "url
 * مكرر" is a hard contract failure). Must be called AFTER `dedupeById()` — a
 * duplicate id sharing one url is the documented soft-drop exception, not this
 * failure (Review Entry 06, item 1).
 */
export function checkNoDuplicateUrls(items) {
  const urls = new Set();
  for (const item of items) {
    if (urls.has(item.url)) {
      return { ok: false, reason: `duplicate url across distinct ids — this is a contract violation: ${item.url}` };
    }
    urls.add(item.url);
  }
  return { ok: true };
}

/**
 * Drops items with a duplicate `id`, keeping the first occurrence. This is the one
 * documented "drop, don't fail" exception (Section 5). Logs every drop.
 */
export function dedupeById(items, log) {
  const seen = new Set();
  const kept = [];
  for (const item of items) {
    if (seen.has(item.id)) {
      log.duplicateIdsDropped.push(item.id);
      continue;
    }
    seen.add(item.id);
    kept.push(item);
  }
  return kept;
}

/** Records (once per unique id) any well-formed topic id absent from TOPIC_MAP. */
export function recordUnknownTopics(items, log) {
  const known = new Set(Object.keys(TOPIC_MAP));
  const seen = new Set(log.unknownTopicsEncountered);
  for (const item of items) {
    for (const topic of item.topics) {
      if (!known.has(topic) && !seen.has(topic)) {
        seen.add(topic);
        log.unknownTopicsEncountered.push(topic);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Selection + distribution (Section 4 "الترتيب" + Group 4 "التوزيع المثبَّت")
// ---------------------------------------------------------------------------

export function selectForTopicPage(items, topicId, lang) {
  return items
    .filter((item) => item.lang === lang && item.topics.includes(topicId))
    .slice()
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

/** 1 card in "intro", up to 2 in "footer" — zero items in a slot means that slot's
 *  injected content is empty (Section 5.1: absence from source, not display:none). */
export function distributeSlots(sortedItems) {
  return {
    intro: sortedItems.slice(0, 1),
    footer: sortedItems.slice(1, 3),
  };
}

// ---------------------------------------------------------------------------
// Card placeholder rendering — PLACEHOLDER ONLY, see file header. No CSS, no
// JSON-LD, no Group 6 copy rules. Sanitizes every field.
// ---------------------------------------------------------------------------

export function renderCardPlaceholder(item, localImageHref) {
  const title = escapeHtml(item.title);
  const summary = escapeHtml(item.cardSummary);
  const href = escapeAttr(item.url);
  const alt = escapeAttr(item.title);
  const dateIso = escapeAttr(item.publishedAt);
  const dateText = escapeHtml(item.publishedAt.slice(0, 10));
  const imgTag = localImageHref
    ? `<img src="${escapeAttr(localImageHref)}" alt="${alt}" loading="lazy">`
    : '';
  return (
    `<div class="datacodex-card-pending" data-datacodex-id="${escapeAttr(item.id)}">` +
    `<!-- PLACEHOLDER pending Group 5 (visual design) / Group 6 (copy + JSON-LD rules) — ` +
    `content only, for build-pipeline validation. -->` +
    `${imgTag}` +
    `<p class="datacodex-card-title">${title}</p>` +
    `<p class="datacodex-card-summary">${summary}</p>` +
    `<time class="datacodex-card-date" datetime="${dateIso}">${dateText}</time>` +
    `<a class="datacodex-card-link" href="${href}">${title}</a>` +
    `</div>`
  );
}

// ---------------------------------------------------------------------------
// Feed + image fetching, with injectable fetch + fixture support for deterministic,
// offline, byte-for-byte testing (Guarantee 3 / Review Entry 03 item 7).
// ---------------------------------------------------------------------------

async function fetchWithTimeout(fetchImpl, url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetchImpl(url, { signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Resolves the feed payload from a local fixture file (deterministic tests) or by
 * fetching FEED_URL live. Never throws for expected failure modes — returns a
 * { ok, reason } / { ok, raw } shape so the caller applies the failure policy.
 */
export async function resolveFeedRaw({
  fixturePath,
  feedUrl = FEED_URL,
  timeoutMs = DEFAULT_TIMEOUT_MS,
  fetchImpl = fetch,
} = {}) {
  if (fixturePath) {
    try {
      const text = await fs.readFile(fixturePath, 'utf8');
      return { ok: true, raw: JSON.parse(text) };
    } catch (err) {
      return { ok: false, reason: `fixture read/parse failed: ${err.message}` };
    }
  }
  let response;
  try {
    response = await fetchWithTimeout(fetchImpl, feedUrl, timeoutMs);
  } catch (err) {
    return { ok: false, reason: `network error fetching feed: ${err.name === 'AbortError' ? 'request timed out' : err.message}` };
  }
  if (!response.ok) {
    return { ok: false, reason: `feed HTTP ${response.status}` };
  }
  let text;
  try {
    text = await response.text();
  } catch (err) {
    return { ok: false, reason: `failed reading feed response body: ${err.message}` };
  }
  try {
    return { ok: true, raw: JSON.parse(text) };
  } catch {
    return { ok: false, reason: 'feed response is not valid JSON' };
  }
}

/**
 * Resolves one item's image to a local file inside dist. Uses an images fixture
 * manifest (url -> relative filename) when provided; otherwise fetches live.
 * Throws on any failure — the caller must fail the whole build for a valid item
 * (Section 5: "فشل تنزيل أو التحقق من صورة عنصر صالح 🛑 أفشل البناء").
 */
export async function resolveImageToDist({
  url,
  destDir,
  baseName,
  imagesFixtureDir,
  imagesFixtureManifest,
  timeoutMs = DEFAULT_TIMEOUT_MS,
  fetchImpl = fetch,
}) {
  await fs.mkdir(destDir, { recursive: true });

  if (imagesFixtureDir && imagesFixtureManifest) {
    const fixtureFileName = imagesFixtureManifest[url];
    if (!fixtureFileName) throw new Error(`no fixture image mapped for url: ${url}`);
    const srcPath = path.join(imagesFixtureDir, fixtureFileName);
    const buf = await fs.readFile(srcPath); // throws if missing — correct: fails the build
    if (buf.byteLength === 0 || buf.byteLength > MAX_IMAGE_BYTES) {
      throw new Error(`fixture image invalid size for url: ${url}`);
    }
    const ext = path.extname(fixtureFileName) || '.bin';
    const destName = `${baseName}${ext}`;
    await fs.writeFile(path.join(destDir, destName), buf);
    return destName;
  }

  let response;
  try {
    response = await fetchWithTimeout(fetchImpl, url, timeoutMs);
  } catch (err) {
    throw new Error(`image download failed for ${url}: ${err.name === 'AbortError' ? 'timed out' : err.message}`);
  }
  if (!response.ok) throw new Error(`image download HTTP ${response.status} for ${url}`);
  const contentType = (response.headers.get('content-type') || '').split(';')[0].trim();
  if (!ALLOWED_IMAGE_CONTENT_TYPES.has(contentType)) {
    throw new Error(`image content-type not allowed (${contentType}) for ${url}`);
  }
  const buf = Buffer.from(await response.arrayBuffer());
  if (buf.byteLength === 0 || buf.byteLength > MAX_IMAGE_BYTES) {
    throw new Error(`image size invalid (${buf.byteLength} bytes) for ${url}`);
  }
  const ext = contentType === 'image/jpeg' ? '.jpg' : `.${contentType.split('/')[1]}`;
  const destName = `${baseName}${ext}`;
  await fs.writeFile(path.join(destDir, destName), buf);
  return destName;
}

// ---------------------------------------------------------------------------
// dist/ construction — copy-all-plus-exclusions (Group 2, Section 2.1)
// ---------------------------------------------------------------------------

/** Safety-checked removal: only ever deletes a path that resolves to exactly
 *  `<REPO_ROOT>/dist`, never anything else (Guarantee, Review Entry 03 item 2). */
export async function cleanDist() {
  const resolved = path.resolve(DIST_DIR);
  const expected = path.resolve(REPO_ROOT, 'dist');
  if (resolved !== expected) {
    throw new Error(`refusing to clean unexpected path: ${resolved}`);
  }
  await fs.rm(resolved, { recursive: true, force: true });
  await fs.mkdir(resolved, { recursive: true });
}

export async function copyPublicRootIntoDist() {
  const entries = await fs.readdir(REPO_ROOT, { withFileTypes: true });
  const copied = [];
  const excluded = [];
  for (const entry of entries) {
    const name = entry.name;
    if (isExcludedRootEntry(name)) {
      excluded.push(name);
      continue;
    }
    const src = path.join(REPO_ROOT, name);
    const dest = path.join(DIST_DIR, name);
    await fs.cp(src, dest, { recursive: true });
    copied.push(name);
  }
  return { copied, excluded };
}

// ---------------------------------------------------------------------------
// Marker injection (Guarantee 1: idempotent replace between BEGIN/END)
// ---------------------------------------------------------------------------

export async function injectSlot(distFilePath, topicId, slot, html) {
  const original = await fs.readFile(distFilePath, 'utf8');
  const regex = markerRegion(topicId, slot);
  if (!regex.test(original)) {
    throw new Error(`markers not found for topic="${topicId}" slot="${slot}" in ${distFilePath}`);
  }
  const updated = original.replace(regex, (_m, begin, _mid, end) => `${begin}${html}${end}`);
  await fs.writeFile(distFilePath, updated, 'utf8');
}

// ---------------------------------------------------------------------------
// Orchestration
// ---------------------------------------------------------------------------

function newLog() {
  return {
    itemsReceived: 0,
    itemsAfterDedupe: 0,
    duplicateIdsDropped: [],
    unknownTopicsEncountered: [],
    injectedPerPage: {}, // "topicId:lang:slot" -> count
    exclusionReasons: 'see EXCLUDE_ROOT_ENTRIES (Group 2, Section 2.1) — deny-list, not sampled',
    rootCopied: [],
    rootExcluded: [],
    transitionalEmptyFeedUsed: false,
    errors: [],
  };
}

/**
 * Runs the full build: resolves the feed, validates it, builds dist/, injects cards
 * into the 10 topic-matched service pages (AR+EN). Returns a report object.
 *
 * options:
 *   - feedFixturePath, imagesFixtureDir, imagesFixtureManifest: deterministic test inputs
 *   - allowEmptyFeedOnFailure: transitional pre-launch flag (Section 5) — default false
 *   - fetchImpl: injectable for tests
 */
export async function runBuild(options = {}) {
  const {
    feedFixturePath,
    imagesFixtureDir,
    imagesFixtureManifest,
    allowEmptyFeedOnFailure = false,
    fetchImpl = fetch,
    timeoutMs = DEFAULT_TIMEOUT_MS,
  } = options;

  const log = newLog();

  const feedResult = await resolveFeedRaw({
    fixturePath: feedFixturePath,
    timeoutMs,
    fetchImpl,
  });

  let items = [];
  if (!feedResult.ok) {
    if (allowEmptyFeedOnFailure) {
      log.transitionalEmptyFeedUsed = true;
      log.errors.push(`feed fetch failed (transitional flag active, proceeding with 0 items): ${feedResult.reason}`);
      items = [];
    } else {
      throw new Error(`BUILD FAILED — feed fetch/validation error: ${feedResult.reason}`);
    }
  } else {
    const validated = validateFeedPayload(feedResult.raw);
    if (!validated.ok) {
      throw new Error(`BUILD FAILED — feed contract violation: ${validated.reason}`);
    }
    items = validated.items;
  }

  log.itemsReceived = items.length;
  items = dedupeById(items, log);
  log.itemsAfterDedupe = items.length;

  // Duplicate-url check runs AFTER dedupe, on the surviving distinct ids only
  // (Review Entry 06, item 1) — a duplicate id sharing one url must be silently
  // dropped-and-logged above, not reach this hard-failure check at all.
  const urlCheck = checkNoDuplicateUrls(items);
  if (!urlCheck.ok) {
    throw new Error(`BUILD FAILED — feed contract violation: ${urlCheck.reason}`);
  }

  recordUnknownTopics(items, log);

  await cleanDist();
  const copyResult = await copyPublicRootIntoDist();
  log.rootCopied = copyResult.copied;
  log.rootExcluded = copyResult.excluded;

  for (const [topicId, pages] of Object.entries(TOPIC_MAP)) {
    for (const lang of ['ar', 'en']) {
      const pageRelPath = pages[lang];
      const distFilePath = path.join(DIST_DIR, pageRelPath);
      const selected = selectForTopicPage(items, topicId, lang);
      const { intro, footer } = distributeSlots(selected);

      for (const [slot, slotItems] of [['intro', intro], ['footer', footer]]) {
        let html = '';
        const rendered = [];
        for (const item of slotItems) {
          const destDir = path.join(DIST_DIR, CARDS_IMAGE_SUBDIR);
          const baseName = imageBaseNameForId(item.id);
          const localImageName = await resolveImageToDist({
            url: item.image,
            destDir,
            baseName,
            imagesFixtureDir,
            imagesFixtureManifest,
            timeoutMs,
            fetchImpl,
          });
          const localImageHref = `${lang === 'en' ? '../../' : '../'}${CARDS_IMAGE_SUBDIR.replace(/\\/g, '/')}/${localImageName}`;
          rendered.push(renderCardPlaceholder(item, localImageHref));
        }
        html = rendered.join('');
        await injectSlot(distFilePath, topicId, slot, html);
        log.injectedPerPage[`${topicId}:${lang}:${slot}`] = slotItems.length;
      }
    }
  }

  return log;
}

// ---------------------------------------------------------------------------
// CLI entry point
// ---------------------------------------------------------------------------

async function main() {
  const allowEmptyFeedOnFailure = process.env.DATACODEX_ALLOW_EMPTY_FEED === '1';
  const feedFixturePath = process.env.DATACODEX_FEED_FIXTURE || undefined;
  const imagesFixtureDir = process.env.DATACODEX_IMAGES_FIXTURE_DIR || undefined;
  let imagesFixtureManifest;
  if (imagesFixtureDir) {
    const manifestPath = path.join(imagesFixtureDir, 'manifest.json');
    if (existsSync(manifestPath)) {
      imagesFixtureManifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
    }
  }

  try {
    const report = await runBuild({
      feedFixturePath,
      imagesFixtureDir,
      imagesFixtureManifest,
      allowEmptyFeedOnFailure,
    });
    console.log(JSON.stringify({ ok: true, report }, null, 2));
    process.exitCode = 0;
  } catch (err) {
    console.error(JSON.stringify({ ok: false, error: err.message }, null, 2));
    process.exitCode = 1;
  }
}

// Cross-platform "is this the entry module" check (a plain string template with
// process.argv[1] breaks on Windows, whose paths use backslashes and lack a
// leading slash — pathToFileURL normalizes both sides correctly).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}

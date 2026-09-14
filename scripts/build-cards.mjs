#!/usr/bin/env node
/**
 * Plan 59 — Datacodex Cards Bridge — build script.
 *
 * Scope as of 2026-09-14 (Ahmed's approval, per docs/audits/52-audit-2026-09-14-plan-59-
 * live-review.md, "Sonnet Execution Entry — Groups 3-4" through "Entry 11"):
 *
 *   - Group 3: fetch + validate the Datacodex feed contract, apply the failure policy
 *     (plans/59-datacodex-cards-bridge.md, Section 5), build the independent `dist/`
 *     output directory per the Group 2 root inventory (copy-all-plus-exclusions).
 *   - Group 4: the "intro"/"footer" position markers per topic-matched service page —
 *     the actual marker <!-- comments --> live in the tracked HTML source files, added
 *     as one-time source edits (Guarantee 4, Section 6). This script never mutates a
 *     tracked file; it only rewrites the copies already placed in `dist/`.
 *   - Group 5: final card visual design (CSS in assets/css/datacodex-cards.css, a
 *     separate stylesheet by design for rollback isolation — see Section "المجموعة 3"
 *     of the plan and Ahmed's Entry 11 approval; not merged into service-pages.css).
 *   - Group 6: binding copy/link rules (no `rel="nofollow"`, no `target="_blank"`, the
 *     approved CTA/preamble/explore-button copy, video badge instead of a fake play
 *     button, and the JSON-LD `ItemList → ListItem → CreativeWork` schema with
 *     `publisher: Datacodex` and no `author`/`mainEntityOfPage` pointing at Alfares).
 *   - A third per-page marker, `slot="explore"`, added as a one-time source edit to the
 *     same 20 tracked pages (Ahmed's Entry 11 approval): renders the page-wide "explore
 *     the full documentation log" link plus the JSON-LD block, but — per Section 5.1,
 *     extended by Ahmed's explicit Entry 11 rule — only when the page has at least one
 *     rendered card in "intro" or "footer"; otherwise it is fully absent, not even a
 *     comment, exactly like an empty "intro"/"footer" slot.
 *   - Group 7: a homepage strip containing the latest three `case` items per language,
 *     plus the latest three items regardless of topic/type on the two region pages.
 *     The same dist-only marker replacement and empty-state guarantees apply.
 *
 * Explicitly OUT of scope for this file:
 *   - Any Cloudflare setting, `_headers`, or `_redirects`.
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

export const HOMEPAGE_MAP = { ar: 'index.html', en: 'en/index.html' };
export const REGION_PAGE_MAP = {
  'region-makkah': {
    ar: 'services/data-recovery-makkah.html',
    en: 'en/services/data-recovery-makkah.html',
  },
  'region-saudi': {
    ar: 'services/data-recovery-saudi-arabia.html',
    en: 'en/services/data-recovery-saudi-arabia.html',
  },
};

// ---------------------------------------------------------------------------
// Position markers (Group 4 + Entry 11) — idempotent BEGIN/END comment pairs.
// Three slots per page: "intro" (after the intro paragraph(s), before the first <h2>),
// "footer" (immediately before the final CTA block, <div class="service-cta">), and
// "explore" (right after "footer", still before the CTA — the page-wide "explore the
// full log" link + JSON-LD, gated on "intro" or "footer" having rendered a card).
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

// Section 5.1 (empty-state behavior): zero matching items means zero HTML output —
// not even the marker comments themselves survive in dist. This matches the whole
// marker line(s), including the leading indentation before BEGIN and the trailing
// newline after END, so removing it leaves no blank line or stray whitespace behind.
// The tracked source keeps both markers untouched; only the dist copy is stripped.
// Also swallows one immediately-following blank-only line: the tracked source
// wraps every marker pair in a blank line above and below (a normal paragraph
// gap), so consuming only the marker's own line would leave those two blank
// lines sitting adjacent — a double gap that reads as a blank line where the
// markers used to be. Eating one trailing blank line restores the ordinary
// single-blank-line spacing instead.
function markerLineRegion(topicId, slot) {
  const begin = beginMarker(topicId, slot).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const end = endMarker(topicId, slot).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`[ \\t]*${begin}[\\s\\S]*?${end}[ \\t]*\\r?\\n?(?:[ \\t]*\\r?\\n)?`);
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

/** Latest-first selection for surfaces that do not use topic matching (Group 7). */
export function selectLatestItems(items, lang, { type, limit = 3 } = {}) {
  return items
    .filter((item) => item.lang === lang && (type === undefined || item.type === type))
    .slice()
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, limit);
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
// Card rendering (Group 5 visual design + Group 6 binding copy rules).
// Sanitizes every field. Markup/classes correspond to assets/css/datacodex-cards.css.
// ---------------------------------------------------------------------------

/** Approved bilingual copy (Group 6) — every string here is a binding decision from
 *  the plan, not a placeholder. `dateLocale` uses `-u-nu-latn` so Arabic dates print
 *  with Western digits, matching the rest of the site's body copy. */
export const CARD_COPY = {
  ar: {
    preamble: 'من توثيق أعمالنا على Datacodex',
    cta: 'اطّلع على التوثيق الكامل على Datacodex',
    videoBadge: '▶ فيديو على Datacodex',
    groupNote: 'من مدونتنا التقنية — داتا كودكس لاب',
    exploreText: 'استكشف سجل التوثيق الكامل على Datacodex',
    exploreHref: 'https://datacodexlab.com/posts/',
    dateLocale: 'ar-SA-u-nu-latn',
    ariaVideoSuffix: '، يتضمن فيديو',
    ariaDestination: '، التوثيق الكامل على Datacodex',
    homepageTitle: '\u0623\u062d\u062f\u062b \u0645\u0627 \u0648\u062b\u0651\u0642\u0646\u0627\u0647',
  },
  en: {
    preamble: 'From our documented work on Datacodex',
    cta: 'View the full documentation on Datacodex',
    videoBadge: '▶ Video on Datacodex',
    groupNote: 'From our technical blog — Datacodex Lab',
    exploreText: 'Explore the full documentation log on Datacodex',
    exploreHref: 'https://datacodexlab.com/en/posts/',
    dateLocale: 'en-US',
    ariaVideoSuffix: ', includes video',
    ariaDestination: ', full documentation on Datacodex',
    homepageTitle: 'Our latest documented work',
  },
};

function formatCardDate(publishedAtIso, locale) {
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
    .format(new Date(publishedAtIso));
}

/** One "inline reference" card — the approved design (Section "المجموعة 5"):
 *  citation/reference language, not a banner. No `rel="nofollow"`, no
 *  `target="_blank"` (Group 6). A video badge replaces a fake play button; it never
 *  claims playback happens here. The accessible name on the <article> states the
 *  destination is Datacodex and whether a video is involved (Group 6). */
export function renderCard(item, localImageHref, lang, variant = '') {
  const copy = CARD_COPY[lang];
  const title = escapeHtml(item.title);
  const summary = escapeHtml(item.cardSummary);
  const href = escapeAttr(item.url);
  const alt = escapeAttr(item.title);
  const dateIso = escapeAttr(item.publishedAt);
  const dateText = escapeHtml(formatCardDate(item.publishedAt, copy.dateLocale));
  const ariaLabel = escapeAttr(
    `${copy.preamble}${item.hasVideo ? copy.ariaVideoSuffix : ''}${copy.ariaDestination}`
  );
  const videoBadge = item.hasVideo
    ? `<span class="datacodex-card__video-badge" aria-hidden="true">${escapeHtml(copy.videoBadge)}</span>`
    : '';
  const imgTag = localImageHref
    ? `<img class="datacodex-card__image" src="${escapeAttr(localImageHref)}" alt="${alt}" loading="lazy">`
    : '';
  const className = variant === '' ? 'datacodex-card' : `datacodex-card datacodex-card--${variant}`;
  return (
    `<article class="${className}" aria-label="${ariaLabel}">` +
    `<div class="datacodex-card__media">${imgTag}${videoBadge}</div>` +
    `<div class="datacodex-card__content">` +
    `<span class="datacodex-card__preamble">${escapeHtml(copy.preamble)}</span>` +
    `<p class="datacodex-card__title">${title}</p>` +
    `<p class="datacodex-card__summary">${summary}</p>` +
    `<time class="datacodex-card__date" datetime="${dateIso}">${dateText}</time>` +
    `<a class="datacodex-card__cta" href="${href}">${escapeHtml(copy.cta)}</a>` +
    `</div>` +
    `</article>`
  );
}

/** Wraps one slot's concatenated card(s) with the small trailing group note
 *  (Group 6: "سطر صغير أسفل كل مجموعة"). Empty input stays empty — Section 5.1
 *  applies to the group as a whole, not just the individual cards inside it. */
export function renderCardGroup(cardsHtml, lang) {
  if (cardsHtml === '') return '';
  const copy = CARD_COPY[lang];
  return (
    `<div class="datacodex-card-group">${cardsHtml}` +
    `<p class="datacodex-card-group__note">${escapeHtml(copy.groupNote)}</p>` +
    `</div>`
  );
}

/** The page-wide "explore the full log" link + JSON-LD (Group 6). Gated by the
 *  caller on "at least one card rendered anywhere on the page" (Ahmed's Entry 11
 *  rule extending Section 5.1 to this slot): an empty `items` array here must never
 *  happen in practice, but returns '' defensively so the marker still gets stripped
 *  like any other empty slot rather than ever emitting a dead link with no context. */
function renderItemListJsonLd(items) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: item.title,
        url: item.url,
        image: item.image,
        datePublished: item.publishedAt,
        publisher: { '@type': 'Organization', name: 'Datacodex' },
      },
    })),
  };
  return `<script type="application/ld+json">${safeJsonLdStringify(jsonLd)}</script>`;
}

export function renderExploreBlock(items, lang) {
  if (items.length === 0) return '';
  const copy = CARD_COPY[lang];
  return (
    renderItemListJsonLd(items) +
    `<div class="datacodex-explore">` +
    `<a class="datacodex-explore__link" href="${escapeAttr(copy.exploreHref)}">${escapeHtml(copy.exploreText)}</a>` +
    `</div>`
  );
}

/** Homepage-only wrapper. It reuses the approved card DOM and adds only layout and
 *  section framing. Empty input removes the complete marker pair from dist. */
export function renderHomepageStrip(cardsHtml, items, lang) {
  if (items.length === 0 || cardsHtml === '') return '';
  const copy = CARD_COPY[lang];
  return (
    `${renderItemListJsonLd(items)}<section class="datacodex-homepage-strip section" aria-labelledby="datacodex-latest-title">` +
    `<div class="container">` +
    `<header class="datacodex-homepage-strip__header">` +
    `<h2 class="datacodex-homepage-strip__title" id="datacodex-latest-title">${escapeHtml(copy.homepageTitle)}</h2>` +
    `<p class="datacodex-homepage-strip__source">${escapeHtml(copy.groupNote)}</p>` +
    `</header>` +
    `<div class="datacodex-homepage-strip__grid">${cardsHtml}</div>` +
    `<footer class="datacodex-homepage-strip__footer">` +
    `<a class="datacodex-homepage-strip__cta" href="${escapeAttr(copy.exploreHref)}">${escapeHtml(copy.exploreText)}</a>` +
    `</footer>` +
    `</div>` +
    `</section>`
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
  const updated = html === ''
    ? original.replace(markerLineRegion(topicId, slot), '')
    : original.replace(regex, (_m, begin, _mid, end) => `${begin}${html}${end}`);
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

function imageHrefForPage(pageRelPath, localImageName) {
  const directoryDepth = pageRelPath.split('/').length - 1;
  return `${'../'.repeat(directoryDepth)}${CARDS_IMAGE_SUBDIR.replace(/\\/g, '/')}/${localImageName}`;
}

async function renderItemsForPage(items, pageRelPath, lang, variant, imageOptions) {
  const rendered = [];
  for (const item of items) {
    const destDir = path.join(DIST_DIR, CARDS_IMAGE_SUBDIR);
    const baseName = imageBaseNameForId(item.id);
    const localImageName = await resolveImageToDist({
      url: item.image,
      destDir,
      baseName,
      ...imageOptions,
    });
    rendered.push(renderCard(item, imageHrefForPage(pageRelPath, localImageName), lang, variant));
  }
  return rendered.join('');
}

/**
 * Runs the full build: resolves the feed, validates it, builds dist/, injects cards
 * into the topic-matched service pages, homepage strip, and region pages (AR+EN).
 * Returns a report object.
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

  const imageOptions = {
    imagesFixtureDir,
    imagesFixtureManifest,
    timeoutMs,
    fetchImpl,
  };

  for (const [topicId, pages] of Object.entries(TOPIC_MAP)) {
    for (const lang of ['ar', 'en']) {
      const pageRelPath = pages[lang];
      const distFilePath = path.join(DIST_DIR, pageRelPath);
      const selected = selectForTopicPage(items, topicId, lang);
      const { intro, footer } = distributeSlots(selected);

      for (const [slot, slotItems] of [['intro', intro], ['footer', footer]]) {
        const cardsHtml = await renderItemsForPage(slotItems, pageRelPath, lang, '', imageOptions);
        const html = renderCardGroup(cardsHtml, lang);
        await injectSlot(distFilePath, topicId, slot, html);
        log.injectedPerPage[`${topicId}:${lang}:${slot}`] = slotItems.length;
      }

      // "explore" (Entry 11): page-wide link + JSON-LD, gated on at least one
      // rendered card anywhere on the page — never on "intro" or "footer" alone.
      const allSelected = [...intro, ...footer];
      const exploreHtml = renderExploreBlock(allSelected, lang);
      await injectSlot(distFilePath, topicId, 'explore', exploreHtml);
      log.injectedPerPage[`${topicId}:${lang}:explore`] = allSelected.length > 0 ? 1 : 0;
    }
  }

  for (const lang of ['ar', 'en']) {
    const pageRelPath = HOMEPAGE_MAP[lang];
    const selected = selectLatestItems(items, lang, { type: 'case', limit: 3 });
    const cardsHtml = await renderItemsForPage(selected, pageRelPath, lang, 'homepage', imageOptions);
    const stripHtml = renderHomepageStrip(cardsHtml, selected, lang);
    await injectSlot(path.join(DIST_DIR, pageRelPath), 'homepage', 'latest', stripHtml);
    log.injectedPerPage[`homepage:${lang}:latest`] = selected.length;
  }

  for (const [pageId, pages] of Object.entries(REGION_PAGE_MAP)) {
    for (const lang of ['ar', 'en']) {
      const pageRelPath = pages[lang];
      const selected = selectLatestItems(items, lang, { limit: 3 });
      const { intro, footer } = distributeSlots(selected);

      for (const [slot, slotItems] of [['intro', intro], ['footer', footer]]) {
        const cardsHtml = await renderItemsForPage(slotItems, pageRelPath, lang, '', imageOptions);
        await injectSlot(path.join(DIST_DIR, pageRelPath), pageId, slot, renderCardGroup(cardsHtml, lang));
        log.injectedPerPage[`${pageId}:${lang}:${slot}`] = slotItems.length;
      }

      await injectSlot(
        path.join(DIST_DIR, pageRelPath),
        pageId,
        'explore',
        renderExploreBlock(selected, lang),
      );
      log.injectedPerPage[`${pageId}:${lang}:explore`] = selected.length > 0 ? 1 : 0;
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

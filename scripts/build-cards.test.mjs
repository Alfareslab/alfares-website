/**
 * Permanent, dependency-free test suite for scripts/build-cards.mjs.
 *
 * Run with:
 *   node --test scripts/build-cards.test.mjs
 *
 * Uses only Node.js built-ins (node:test, node:assert/strict, node:fs, node:path,
 * node:os, node:crypto, node:child_process) — no external packages, matching the
 * plan's "no build tooling" baseline (Section 3) and the build script itself.
 *
 * All fixtures (feed.json + placeholder images) are generated into a temporary
 * directory at test time and removed afterward — nothing here is committed as a
 * binary/data fixture file. Every test that touches the shared `dist/` output
 * directory cleans it up in a `finally` block so a failing assertion never leaves
 * `dist/` behind (it must never be committed — Guarantee 4).
 */

import { test, describe, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import {
  REPO_ROOT,
  DIST_DIR,
  TOPIC_MAP,
  HOMEPAGE_MAP,
  REGION_PAGE_MAP,
  validateItemShape,
  validateFeedPayload,
  checkNoDuplicateUrls,
  dedupeById,
  recordUnknownTopics,
  isStrictIsoUtcTimestamp,
  imageBaseNameForId,
  escapeHtml,
  escapeAttr,
  isSafeAbsoluteHttpsUrl,
  safeJsonLdStringify,
  selectForTopicPage,
  selectLatestItems,
  distributeSlots,
  resolveFeedRaw,
  resolveImageToDist,
  runBuild,
  beginMarker,
  endMarker,
} from './build-cards.mjs';

const SCRIPT_PATH = path.join(REPO_ROOT, 'scripts', 'build-cards.mjs');

// ---------------------------------------------------------------------------
// Shared fixtures — generated once, in a temp directory, cleaned up at the end.
// ---------------------------------------------------------------------------

let fixtureDir;
let feedFixturePath;
let imagesFixtureDir;
let imagesFixtureManifest;

const baseItem = {
  id: 'x',
  title: 't',
  cardSummary: 's',
  image: 'https://datacodexlab.com/i.png',
  url: 'https://datacodexlab.com/p/',
  topics: ['hdd-internal'],
  lang: 'ar',
  type: 'post',
  publishedAt: '2026-09-10T00:00:00.000Z',
  hasVideo: false,
};

async function writePlaceholderImage(destPath, byte) {
  // Fixture-mode image resolution only checks non-empty / <= MAX_IMAGE_BYTES; it
  // never inspects real image bytes, so a tiny deterministic buffer is sufficient.
  await fs.writeFile(destPath, Buffer.from([byte, byte, byte, byte]));
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function countFiles(dir) {
  let n = 0;
  async function walk(d) {
    const entries = await fs.readdir(d, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory()) await walk(path.join(d, e.name));
      else n++;
    }
  }
  await walk(dir);
  return n;
}

async function hashDirRecursive(dir) {
  const hash = crypto.createHash('sha256');
  async function walk(d, rel) {
    const entries = (await fs.readdir(d, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name));
    for (const e of entries) {
      const abs = path.join(d, e.name);
      const relPath = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) {
        await walk(abs, relPath);
      } else {
        const buf = await fs.readFile(abs);
        hash.update(relPath.replace(/\\/g, '/'));
        hash.update(buf);
      }
    }
  }
  await walk(dir, '');
  return hash.digest('hex');
}

/** Always safe to call even if dist/ never existed. */
async function removeDist() {
  await fs.rm(DIST_DIR, { recursive: true, force: true });
}

before(async () => {
  fixtureDir = await fs.mkdtemp(path.join(os.tmpdir(), 'plan59-build-cards-test-'));
  imagesFixtureDir = path.join(fixtureDir, 'images');
  await fs.mkdir(imagesFixtureDir, { recursive: true });

  const items = [
    { id: 'post:ar:hdd-1', title: 'عنوان تجريبي 1', cardSummary: 'ملخص 1', image: 'https://datacodexlab.com/fixtures/hdd-1.png', url: 'https://datacodexlab.com/ar/posts/hdd-1/', topics: ['hdd-internal'], lang: 'ar', type: 'post', publishedAt: '2026-09-10T00:00:00.000Z', hasVideo: false },
    { id: 'post:ar:hdd-2', title: 'عنوان تجريبي 2', cardSummary: 'ملخص 2', image: 'https://datacodexlab.com/fixtures/hdd-2.png', url: 'https://datacodexlab.com/ar/posts/hdd-2/', topics: ['hdd-internal'], lang: 'ar', type: 'post', publishedAt: '2026-09-08T00:00:00.000Z', hasVideo: false },
    { id: 'post:ar:hdd-3', title: 'عنوان تجريبي 3', cardSummary: 'ملخص 3', image: 'https://datacodexlab.com/fixtures/hdd-3.png', url: 'https://datacodexlab.com/ar/posts/hdd-3/', topics: ['hdd-internal'], lang: 'ar', type: 'post', publishedAt: '2026-09-06T00:00:00.000Z', hasVideo: false },
    { id: 'post:ar:hdd-4', title: 'عنوان تجريبي 4', cardSummary: 'ملخص 4', image: 'https://datacodexlab.com/fixtures/hdd-4.png', url: 'https://datacodexlab.com/ar/posts/hdd-4/', topics: ['hdd-internal'], lang: 'ar', type: 'post', publishedAt: '2026-09-04T00:00:00.000Z', hasVideo: false },
    { id: 'post:en:multi-1', title: 'Multi Topic Title <b>&amp;</b>', cardSummary: 'Summary with "quotes" & <tags>', image: 'https://datacodexlab.com/fixtures/multi-1.png', url: 'https://datacodexlab.com/en/posts/multi-1/', topics: ['hdd-internal', 'ssd-nvme'], lang: 'en', type: 'case', publishedAt: '2026-09-12T00:00:00.000Z', hasVideo: true },
    { id: 'post:en:ssd-1', title: 'SSD fixture title', cardSummary: 'SSD fixture summary', image: 'https://datacodexlab.com/fixtures/ssd-1.png', url: 'https://datacodexlab.com/en/posts/ssd-1/', topics: ['ssd-nvme'], lang: 'en', type: 'post', publishedAt: '2026-09-05T00:00:00.000Z', hasVideo: false },
    { id: 'post:ar:unknown-1', title: 'موضوع غير معروف', cardSummary: 'ملخص', image: 'https://datacodexlab.com/fixtures/unknown-1.png', url: 'https://datacodexlab.com/ar/posts/unknown-1/', topics: ['unknown-topic-xyz'], lang: 'ar', type: 'post', publishedAt: '2026-09-11T00:00:00.000Z', hasVideo: false },
    { id: 'post:ar:database-1', title: 'عنوان قاعدة بيانات', cardSummary: 'ملخص قاعدة بيانات', image: 'https://datacodexlab.com/fixtures/database-1.png', url: 'https://datacodexlab.com/ar/posts/database-1/', topics: ['database-erp'], lang: 'ar', type: 'post', publishedAt: '2026-09-09T00:00:00.000Z', hasVideo: false },
    { id: 'case:ar:latest-1', title: 'Case fixture 1', cardSummary: 'Case summary 1', image: 'https://datacodexlab.com/fixtures/case-ar-1.png', url: 'https://datacodexlab.com/ar/posts/case-ar-1/', topics: ['homepage-case'], lang: 'ar', type: 'case', publishedAt: '2026-09-14T00:00:00.000Z', hasVideo: false },
    { id: 'case:ar:latest-2', title: 'Case fixture 2', cardSummary: 'Case summary 2', image: 'https://datacodexlab.com/fixtures/case-ar-2.png', url: 'https://datacodexlab.com/ar/posts/case-ar-2/', topics: ['homepage-case'], lang: 'ar', type: 'case', publishedAt: '2026-09-13T00:00:00.000Z', hasVideo: false },
    { id: 'case:ar:latest-3', title: 'Case fixture 3', cardSummary: 'Case summary 3', image: 'https://datacodexlab.com/fixtures/case-ar-3.png', url: 'https://datacodexlab.com/ar/posts/case-ar-3/', topics: ['homepage-case'], lang: 'ar', type: 'case', publishedAt: '2026-09-12T00:00:00.000Z', hasVideo: false },
    { id: 'case:ar:latest-4', title: 'Case fixture 4', cardSummary: 'Case summary 4', image: 'https://datacodexlab.com/fixtures/case-ar-4.png', url: 'https://datacodexlab.com/ar/posts/case-ar-4/', topics: ['homepage-case'], lang: 'ar', type: 'case', publishedAt: '2026-09-01T00:00:00.000Z', hasVideo: false },
  ];
  feedFixturePath = path.join(fixtureDir, 'feed.json');
  await fs.writeFile(feedFixturePath, JSON.stringify({ schemaVersion: 2, items }, null, 2));

  imagesFixtureManifest = {};
  let n = 1;
  for (const item of items) {
    const fname = `img-${n}.png`;
    await writePlaceholderImage(path.join(imagesFixtureDir, fname), n);
    imagesFixtureManifest[item.image] = fname;
    n++;
  }
  await fs.writeFile(path.join(imagesFixtureDir, 'manifest.json'), JSON.stringify(imagesFixtureManifest, null, 2));
});

after(async () => {
  await removeDist();
  if (fixtureDir) await fs.rm(fixtureDir, { recursive: true, force: true });
});

// ---------------------------------------------------------------------------
// 1. Contract validation (the previously reported suite)
// ---------------------------------------------------------------------------

describe('feed contract validation', () => {
  test('schemaVersion wrong value fails', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 1, items: [] }).ok, false);
  });
  test('schemaVersion string "2" fails (must be integer 2)', () => {
    assert.equal(validateFeedPayload({ schemaVersion: '2', items: [] }).ok, false);
  });
  test('missing items array fails', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2 }).ok, false);
  });
  test('root not object fails', () => {
    assert.equal(validateFeedPayload([]).ok, false);
  });
  test('valid empty feed passes', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [] }).ok, true);
  });
  test('fully valid item passes', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [baseItem] }).ok, true);
  });
  test('missing title fails', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, title: undefined }] }).ok, false);
  });
  test('image wrong domain fails', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, image: 'https://evil.com/i.png' }] }).ok, false);
  });
  test('image non-https fails', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, image: 'http://datacodexlab.com/i.png' }] }).ok, false);
  });
  test('url without trailing slash fails', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, url: 'https://datacodexlab.com/p' }] }).ok, false);
  });
  test('topics empty array fails', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, topics: [] }] }).ok, false);
  });
  test('topics 3 items fails (max 2)', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, topics: ['a', 'b', 'c'] }] }).ok, false);
  });
  test('bad lang fails', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, lang: 'fr' }] }).ok, false);
  });
  test('bad type fails', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, type: 'article' }] }).ok, false);
  });
  test('hasVideo non-boolean fails', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, hasVideo: 'false' }] }).ok, false);
  });
});

// ---------------------------------------------------------------------------
// 2. Regression — duplicate id must be dropped BEFORE duplicate-url check runs
//    (Review Entry 06, item 1)
// ---------------------------------------------------------------------------

describe('regression: duplicate-id precedence over duplicate-url', () => {
  test('same id + different url: passes contract, dedupe drops the second, no url failure', () => {
    const items = [
      { ...baseItem, id: 'dup', url: 'https://datacodexlab.com/a/' },
      { ...baseItem, id: 'dup', url: 'https://datacodexlab.com/b/' },
    ];
    const validated = validateFeedPayload({ schemaVersion: 2, items });
    assert.equal(validated.ok, true, 'shape validation must not reject this — each item is individually valid');
    const log = { duplicateIdsDropped: [] };
    const kept = dedupeById(validated.items, log);
    assert.equal(kept.length, 1);
    assert.equal(kept[0].url, 'https://datacodexlab.com/a/', 'first occurrence kept');
    assert.deepEqual(log.duplicateIdsDropped, ['dup']);
    const urlCheck = checkNoDuplicateUrls(kept);
    assert.equal(urlCheck.ok, true, 'post-dedupe survivors must not trip the duplicate-url check');
  });

  test('same id + same url (fully duplicate item): dedupe drops it, still no url failure — this is the bug this fix targets', () => {
    const items = [
      { ...baseItem, id: 'dup2', url: 'https://datacodexlab.com/same/' },
      { ...baseItem, id: 'dup2', url: 'https://datacodexlab.com/same/' },
    ];
    const validated = validateFeedPayload({ schemaVersion: 2, items });
    assert.equal(validated.ok, true);
    const log = { duplicateIdsDropped: [] };
    const kept = dedupeById(validated.items, log);
    assert.equal(kept.length, 1);
    const urlCheck = checkNoDuplicateUrls(kept);
    assert.equal(urlCheck.ok, true, 'must be dropped-and-logged by the id rule, not fail as a raw duplicate url');
  });

  test('different ids + same url: still a hard contract failure after dedupe (real duplicate-url case)', () => {
    const items = [
      { ...baseItem, id: 'id-a', url: 'https://datacodexlab.com/shared/' },
      { ...baseItem, id: 'id-b', url: 'https://datacodexlab.com/shared/' },
    ];
    const validated = validateFeedPayload({ schemaVersion: 2, items });
    assert.equal(validated.ok, true);
    const log = { duplicateIdsDropped: [] };
    const kept = dedupeById(validated.items, log);
    assert.equal(kept.length, 2, 'distinct ids are not touched by id-dedupe');
    const urlCheck = checkNoDuplicateUrls(kept);
    assert.equal(urlCheck.ok, false, 'two distinct ids sharing one url must still fail the build');
  });
});

// ---------------------------------------------------------------------------
// 3. Regression — strict ISO 8601 UTC "Z" timestamp (Review Entry 06, item 2)
// ---------------------------------------------------------------------------

describe('regression: strict ISO 8601 UTC publishedAt', () => {
  test('valid full timestamp with milliseconds and Z accepted', () => {
    assert.equal(isStrictIsoUtcTimestamp('2026-08-30T00:00:00.000Z'), true);
  });
  test('valid full timestamp without milliseconds and Z accepted', () => {
    assert.equal(isStrictIsoUtcTimestamp('2026-08-30T00:00:00Z'), true);
  });
  test('date-only string rejected', () => {
    assert.equal(isStrictIsoUtcTimestamp('2026-08-30'), false);
  });
  test('timezone-offset string rejected, even +00:00', () => {
    assert.equal(isStrictIsoUtcTimestamp('2026-08-30T00:00:00+02:00'), false);
    assert.equal(isStrictIsoUtcTimestamp('2026-08-30T00:00:00+00:00'), false);
  });
  test('lowercase z rejected (must be literal Z)', () => {
    assert.equal(isStrictIsoUtcTimestamp('2026-08-30T00:00:00z'), false);
  });
  test('garbage string rejected', () => {
    assert.equal(isStrictIsoUtcTimestamp('not-a-date'), false);
  });
  test('non-string input rejected', () => {
    assert.equal(isStrictIsoUtcTimestamp(1756512000000), false);
    assert.equal(isStrictIsoUtcTimestamp(undefined), false);
  });
  test('item-level: date-only publishedAt fails contract', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, publishedAt: '2026-08-30' }] }).ok, false);
  });
  test('item-level: offset publishedAt fails contract', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, publishedAt: '2026-08-30T00:00:00+02:00' }] }).ok, false);
  });
  test('item-level: valid Z publishedAt passes contract', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, publishedAt: '2026-08-30T00:00:00.000Z' }] }).ok, true);
  });

  // Review Entry 07 — Date.parse()/Date.UTC() silently normalize impossible
  // calendar/time values instead of rejecting them; the regex-shape check alone
  // let these through. Each case below round-trips through the fixed validator.
  test('normalized impossible date rejected: 2026-02-30 (February has no 30th)', () => {
    assert.equal(isStrictIsoUtcTimestamp('2026-02-30T00:00:00Z'), false);
  });
  test('normalized impossible time rejected: 24:00:00 (hour must be 00-23)', () => {
    assert.equal(isStrictIsoUtcTimestamp('2026-01-01T24:00:00Z'), false);
  });
  test('normalized impossible leap day rejected: 2027-02-29 (2027 is not a leap year)', () => {
    assert.equal(isStrictIsoUtcTimestamp('2027-02-29T00:00:00Z'), false);
  });
  test('genuine leap day accepted: 2028-02-29 (2028 is a leap year)', () => {
    assert.equal(isStrictIsoUtcTimestamp('2028-02-29T00:00:00Z'), true);
  });
  test('item-level: normalized impossible date fails contract', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, publishedAt: '2026-02-30T00:00:00Z' }] }).ok, false);
  });
  test('item-level: genuine leap day passes contract', () => {
    assert.equal(validateFeedPayload({ schemaVersion: 2, items: [{ ...baseItem, publishedAt: '2028-02-29T00:00:00Z' }] }).ok, true);
  });
});

// ---------------------------------------------------------------------------
// 4. Regression — whitespace-only topics rejected (Review Entry 06, item 3)
// ---------------------------------------------------------------------------

describe('regression: whitespace-only topics rejected', () => {
  test('single whitespace-only topic fails', () => {
    const err = validateItemShape({ ...baseItem, topics: ['   '] });
    assert.ok(err, 'expected a validation error');
  });
  test('mix of valid and whitespace-only topics fails (all must be genuinely non-empty)', () => {
    const err = validateItemShape({ ...baseItem, topics: ['hdd-internal', '  \t '] });
    assert.ok(err);
  });
  test('topic with meaningful surrounding whitespace still passes (not empty after trim)', () => {
    const err = validateItemShape({ ...baseItem, topics: [' hdd-internal '] });
    assert.equal(err, null);
  });
  test('genuinely empty string topic still fails (pre-existing behavior preserved)', () => {
    const err = validateItemShape({ ...baseItem, topics: [''] });
    assert.ok(err);
  });
});

// ---------------------------------------------------------------------------
// 5. Regression — collision-resistant image basenames (Review Entry 06, item 4)
// ---------------------------------------------------------------------------

describe('regression: collision-resistant image basenames', () => {
  test('previously-colliding ids "a:b" and "a-b" now produce different basenames', () => {
    const a = imageBaseNameForId('a:b');
    const b = imageBaseNameForId('a-b');
    assert.notEqual(a, b);
  });
  test('same id always produces the same basename (determinism preserved)', () => {
    assert.equal(imageBaseNameForId('post:ar:klevv-neo-n400-ssd-recovery'), imageBaseNameForId('post:ar:klevv-neo-n400-ssd-recovery'));
  });
  test('basename is a fixed-length lowercase hex string, safe as a filename', () => {
    const name = imageBaseNameForId('post:ar:example/with?odd\\chars');
    assert.match(name, /^[0-9a-f]+$/);
    assert.equal(name.length, 24);
  });
});

// ---------------------------------------------------------------------------
// 6. Sanitization
// ---------------------------------------------------------------------------

describe('sanitization', () => {
  test('escapeHtml escapes <script>', () => {
    assert.equal(escapeHtml('<script>alert(1)</script>'), '&lt;script&gt;alert(1)&lt;/script&gt;');
  });
  test('escapeHtml escapes ampersand', () => {
    assert.equal(escapeHtml('A & B'), 'A &amp; B');
  });
  test('escapeAttr escapes double and single quotes', () => {
    assert.match(escapeAttr('x" onmouseover="y'), /&quot;/);
    assert.match(escapeAttr("x' y"), /&#39;/);
  });
  test('javascript: url rejected', () => {
    assert.equal(isSafeAbsoluteHttpsUrl('javascript:alert(1)', 'datacodexlab.com'), false);
  });
  test('non-https and wrong-domain urls rejected', () => {
    assert.equal(isSafeAbsoluteHttpsUrl('http://datacodexlab.com/x', 'datacodexlab.com'), false);
    assert.equal(isSafeAbsoluteHttpsUrl('https://evil.com/x', 'datacodexlab.com'), false);
  });
  test('subdomain and exact-domain https urls accepted', () => {
    assert.equal(isSafeAbsoluteHttpsUrl('https://cdn.datacodexlab.com/x', 'datacodexlab.com'), true);
    assert.equal(isSafeAbsoluteHttpsUrl('https://datacodexlab.com/x', 'datacodexlab.com'), true);
  });
  test('safeJsonLdStringify neutralizes </script', () => {
    const ld = safeJsonLdStringify({ a: '</script><script>alert(1)</script>' });
    assert.equal(ld.includes('</script'), false);
  });
});

// ---------------------------------------------------------------------------
// 7. Network / build failure policy
// ---------------------------------------------------------------------------

describe('network and build failure policy', () => {
  test('network error surfaces as ok:false', async () => {
    const failingFetch = async () => { throw new Error('simulated network down'); };
    const result = await resolveFeedRaw({ fetchImpl: failingFetch, timeoutMs: 500 });
    assert.equal(result.ok, false);
    assert.match(result.reason, /network error/);
  });
  test('non-2xx HTTP surfaces as ok:false', async () => {
    const http500Fetch = async () => ({ ok: false, status: 500 });
    const result = await resolveFeedRaw({ fetchImpl: http500Fetch, timeoutMs: 500 });
    assert.equal(result.ok, false);
    assert.match(result.reason, /HTTP 500/);
  });
  test('malformed JSON surfaces as ok:false', async () => {
    const badJsonFetch = async () => ({ ok: true, status: 200, text: async () => '{not valid json' });
    const result = await resolveFeedRaw({ fetchImpl: badJsonFetch, timeoutMs: 500 });
    assert.equal(result.ok, false);
    assert.match(result.reason, /not valid JSON/);
  });
  // Group 8 (post-launch): the transitional empty-feed flag is gone entirely — a
  // failing or unreachable feed must always fail the build, with no fallback path
  // that would silently publish a live site with zero cards.
  test('runBuild throws on feed network failure — no empty-feed fallback', async () => {
    const failingFetch = async () => { throw new Error('down'); };
    await assert.rejects(() => runBuild({ fetchImpl: failingFetch, timeoutMs: 500 }));
    await removeDist();
  });
  test('runBuild throws on non-2xx feed response — no empty-feed fallback', async () => {
    const http500Fetch = async () => ({ ok: false, status: 500 });
    await assert.rejects(() => runBuild({ fetchImpl: http500Fetch, timeoutMs: 500 }));
    await removeDist();
  });
  test('runBuild throws on malformed feed JSON — no empty-feed fallback', async () => {
    const badJsonFetch = async () => ({ ok: true, status: 200, text: async () => '{not valid json' });
    await assert.rejects(() => runBuild({ fetchImpl: badJsonFetch, timeoutMs: 500 }));
    await removeDist();
  });
  test('runBuild throws when a selected item image cannot be resolved', async () => {
    const badManifest = { 'https://datacodexlab.com/fixtures/hdd-1.png': 'DOES-NOT-EXIST.png' };
    try {
      await assert.rejects(() =>
        runBuild({
          feedFixturePath,
          imagesFixtureDir,
          imagesFixtureManifest: badManifest,
        })
      );
    } finally {
      await removeDist();
    }
  });
  test('image content-type/size validation (mocked live fetch)', async () => {
    const destDir = path.join(fixtureDir, 'tmp-image-tests');
    await fs.rm(destDir, { recursive: true, force: true });
    try {
      const okFetch = async () => ({ ok: true, headers: { get: () => 'image/webp' }, arrayBuffer: async () => new Uint8Array([1, 2, 3, 4]).buffer });
      const name = await resolveImageToDist({ url: 'https://datacodexlab.com/x.webp', destDir, baseName: 'ok-item', fetchImpl: okFetch });
      assert.equal(name, 'ok-item.webp');

      const badTypeFetch = async () => ({ ok: true, headers: { get: () => 'text/html' }, arrayBuffer: async () => new Uint8Array([1]).buffer });
      await assert.rejects(() => resolveImageToDist({ url: 'https://datacodexlab.com/x.html', destDir, baseName: 'bad-type', fetchImpl: badTypeFetch }));

      const tooLargeFetch = async () => ({ ok: true, headers: { get: () => 'image/png' }, arrayBuffer: async () => new Uint8Array(6 * 1024 * 1024).buffer });
      await assert.rejects(() => resolveImageToDist({ url: 'https://datacodexlab.com/big.png', destDir, baseName: 'too-big', fetchImpl: tooLargeFetch }));

      const http404Fetch = async () => ({ ok: false, status: 404 });
      await assert.rejects(() => resolveImageToDist({ url: 'https://datacodexlab.com/missing.png', destDir, baseName: 'missing', fetchImpl: http404Fetch }));
    } finally {
      await fs.rm(destDir, { recursive: true, force: true });
    }
  });
});

// ---------------------------------------------------------------------------
// 8. Full build — root copy vs. Group 2 inventory, card distribution, escaping
// ---------------------------------------------------------------------------

describe('full build — dist/ contract and card selection', () => {
  let report;

  test('runBuild succeeds against fixtures', async () => {
    report = await runBuild({ feedFixturePath, imagesFixtureDir, imagesFixtureManifest });
    assert.ok(report);
  });

  test('Public inventory entries present in dist/', async () => {
    const publicPaths = [
      'index.html', 'en', 'services', 'en/services', 'assets', 'lang/ar.json', 'lang/en.json',
      '_headers', 'robots.txt', 'sitemap.xml', 'manifest.json', 'alfares_logo.png', '404.html',
      'about-lab.html', 'privacy-policy.html', 'llms.txt', 'seo/structured-data.json',
      'service-page-premium-compare.html',
    ];
    for (const p of publicPaths) {
      assert.ok(await fileExists(path.join(DIST_DIR, ...p.split('/'))), `expected dist/${p} to exist`);
    }
  });

  test('Excluded inventory entries absent from dist/', async () => {
    const excludedPaths = [
      'plans', 'docs', 'scripts', 'reviews', 'prompts', 'secrets', '.claude', '.git',
      '.env.example', '_redirects', 'master-constitution.md', 'project-context.md',
      'project-key.md', 'changelog.md', 'README.md', 'dist',
    ];
    for (const p of excludedPaths) {
      assert.equal(await fileExists(path.join(DIST_DIR, p)), false, `expected dist/${p} to be absent`);
    }
  });

  test('root copy counts match the approved Group 2 inventory (16 public, 25 excluded)', () => {
    assert.equal(report.rootCopied.length, 16);
    assert.equal(report.rootExcluded.length, 25);
  });

  test('card distribution: 1 intro + up to 2 footer cap, extra items dropped', () => {
    assert.equal(report.injectedPerPage['hdd-internal:ar:intro'], 1);
    assert.equal(report.injectedPerPage['hdd-internal:ar:footer'], 2, '4 eligible items — only 3 shown total, 4th dropped');
  });

  test('homepage selection is latest-first, case-only, and capped at three', () => {
    assert.equal(report.injectedPerPage['homepage:ar:latest'], 3);
    assert.equal(report.injectedPerPage['homepage:en:latest'], 1);
  });

  test('homepage strip renders the approved wrapper, localized heading, and only case cards', async () => {
    const html = await fs.readFile(path.join(DIST_DIR, HOMEPAGE_MAP.ar), 'utf8');
    const markerContent = html.match(/<!-- datacodex-cards:begin topic="homepage" slot="latest" -->([\s\S]*?)<!-- datacodex-cards:end topic="homepage" slot="latest" -->/);
    assert.ok(markerContent?.[1].includes('datacodex-homepage-strip'));
    assert.equal((markerContent[1].match(/datacodex-card--homepage/g) || []).length, 3);
    assert.ok(markerContent[1].includes('Case fixture 1'));
    assert.equal(markerContent[1].includes('Case fixture 4'), false, 'the fourth case must be dropped by the cap');
    const englishHtml = await fs.readFile(path.join(DIST_DIR, HOMEPAGE_MAP.en), 'utf8');
    assert.equal(englishHtml.includes('SSD fixture title'), false, 'post items must not enter the homepage strip');
    assert.ok(markerContent[1].includes('assets/images/datacodex-cards/'), 'root homepage image href must be root-relative by depth');
  });

  test('region pages use latest content regardless of topic or type, capped and distributed 1+2', async () => {
    assert.equal(report.injectedPerPage['region-makkah:ar:intro'], 1);
    assert.equal(report.injectedPerPage['region-makkah:ar:footer'], 2);
    assert.equal(report.injectedPerPage['region-saudi:en:intro'], 1);
    assert.equal(report.injectedPerPage['region-saudi:en:footer'], 1);
    const html = await fs.readFile(path.join(DIST_DIR, REGION_PAGE_MAP['region-makkah'].ar), 'utf8');
    assert.ok(html.includes('Case fixture 1'));
    assert.ok(html.includes('Case fixture 2'));
    assert.ok(html.includes('Case fixture 3'));
    assert.equal(html.includes('Case fixture 4'), false);
  });

  test('multi-topic item appears on both of its topic pages', () => {
    assert.equal(report.injectedPerPage['hdd-internal:en:intro'], 1);
    assert.equal(report.injectedPerPage['ssd-nvme:en:intro'], 1);
  });

  test('single-item page: intro filled, footer empty', () => {
    assert.equal(report.injectedPerPage['database-erp:ar:intro'], 1);
    assert.equal(report.injectedPerPage['database-erp:ar:footer'], 0);
  });

  test('no-match page: both slots empty (Section 5.1)', () => {
    assert.equal(report.injectedPerPage['laptop-pc:ar:intro'], 0);
    assert.equal(report.injectedPerPage['laptop-pc:ar:footer'], 0);
    assert.equal(report.injectedPerPage['laptop-pc:en:intro'], 0);
    assert.equal(report.injectedPerPage['laptop-pc:en:footer'], 0);
  });

  test('unknown topic recorded by name', () => {
    assert.ok(report.unknownTopicsEncountered.includes('unknown-topic-xyz'));
  });

  test('empty slot (Section 5.1): the whole marker pair is removed from dist — no begin, no end, no residue', async () => {
    const html = await fs.readFile(path.join(DIST_DIR, 'services', 'laptop-pc-data-recovery.html'), 'utf8');
    assert.equal(html.includes(beginMarker('laptop-pc', 'intro')), false);
    assert.equal(html.includes(endMarker('laptop-pc', 'intro')), false);
    assert.equal(html.includes(beginMarker('laptop-pc', 'footer')), false);
    assert.equal(html.includes(endMarker('laptop-pc', 'footer')), false);
    assert.equal(/\n[ \t]*\n[ \t]*\n/.test(html), false, 'removing the markers must not leave a doubled blank line behind');
  });

  test('filled slot: begin/end markers and rendered card content survive intact in dist', async () => {
    const html = await fs.readFile(path.join(DIST_DIR, 'services', 'hdd-data-recovery.html'), 'utf8');
    assert.ok(html.includes(beginMarker('hdd-internal', 'intro')));
    assert.ok(html.includes(endMarker('hdd-internal', 'intro')));
    const region = html.match(/<!-- datacodex-cards:begin topic="hdd-internal" slot="intro" -->([\s\S]*?)<!-- datacodex-cards:end topic="hdd-internal" slot="intro" -->/);
    assert.ok(region[1].trim().length > 0, 'a filled slot must keep non-empty content between its markers');
  });

  test('tracked source still carries all three markers after the build ran (source untouched — Guarantee 4)', async () => {
    const trackedPath = path.join(REPO_ROOT, 'services', 'laptop-pc-data-recovery.html');
    const trackedContent = await fs.readFile(trackedPath, 'utf8');
    for (const slot of ['intro', 'footer', 'explore']) {
      assert.ok(trackedContent.includes(beginMarker('laptop-pc', slot)), `tracked source must still contain the begin marker for ${slot}`);
      assert.ok(trackedContent.includes(endMarker('laptop-pc', slot)), `tracked source must still contain the end marker for ${slot}`);
    }
  });

  test('page with zero matching items on every slot: zero datacodex-cards trace anywhere in its dist output, including "explore" (Ahmed Entry 11 rule)', async () => {
    const html = await fs.readFile(path.join(DIST_DIR, 'services', 'laptop-pc-data-recovery.html'), 'utf8');
    // Note: the page's own <link ... href="assets/css/datacodex-cards.css"> legitimately
    // contains the substring "datacodex-cards" (the stylesheet is unconditional, per
    // Ahmed's Entry 11 approval), so the assertion below checks the marker syntax
    // ("datacodex-cards:begin"/"...:end") specifically, not the bare substring.
    for (const slot of ['intro', 'footer', 'explore']) {
      assert.equal(html.includes(beginMarker('laptop-pc', slot)), false, `no begin marker for ${slot} may survive`);
      assert.equal(html.includes(endMarker('laptop-pc', slot)), false, `no end marker for ${slot} may survive`);
    }
    assert.equal(html.includes('datacodex-explore'), false, 'the explore link/JSON-LD must not render when the page has zero cards');
    assert.equal(html.includes('"CreativeWork"'), false, 'no card JSON-LD should exist on a page with zero cards (the page keeps its own unrelated BreadcrumbList schema)');
  });

  test('page with at least one card: "explore" link renders once, before the final CTA, with no nofollow/target', async () => {
    const html = await fs.readFile(path.join(DIST_DIR, 'services', 'hdd-data-recovery.html'), 'utf8');
    assert.ok(html.includes(beginMarker('hdd-internal', 'explore')));
    assert.ok(html.includes(endMarker('hdd-internal', 'explore')));
    const exploreIdx = html.indexOf('datacodex-explore__link');
    const ctaIdx = html.indexOf('class="service-cta"');
    assert.ok(exploreIdx > -1 && ctaIdx > -1 && exploreIdx < ctaIdx, 'the explore link must sit before the final CTA block');
    const linkMatch = html.match(/<a class="datacodex-explore__link" href="[^"]*">[^<]*<\/a>/);
    assert.ok(linkMatch, 'explore link markup must be present');
    assert.equal(linkMatch[0].includes('rel="nofollow"'), false);
    assert.equal(linkMatch[0].includes('target="_blank"'), false);
  });

  test('JSON-LD: ItemList/ListItem/CreativeWork shape, publisher is Datacodex, no author or mainEntityOfPage pointing at Alfares', async () => {
    const html = await fs.readFile(path.join(DIST_DIR, 'services', 'hdd-data-recovery.html'), 'utf8');
    // The page already carries its own (pre-existing, unrelated) JSON-LD blocks —
    // including a BreadcrumbList that also uses "itemListElement" — so find the one
    // this build emits by its distinctive "CreativeWork" type instead.
    const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    const match = scripts.map(m => m[1]).find(text => text.includes('"CreativeWork"'));
    assert.ok(match, 'expected a card ItemList JSON-LD script block on a page with at least one card');
    const data = JSON.parse(match);
    assert.equal(data['@type'], 'ItemList');
    assert.ok(Array.isArray(data.itemListElement) && data.itemListElement.length > 0);
    for (const listItem of data.itemListElement) {
      assert.equal(listItem['@type'], 'ListItem');
      assert.equal(listItem.item['@type'], 'CreativeWork');
      assert.equal(listItem.item.publisher.name, 'Datacodex');
    }
    assert.equal(match.includes('"author"'), false, 'must never assert Alfares (or anyone) as author of Datacodex content');
    assert.equal(match.includes('mainEntityOfPage'), false, 'must never point mainEntityOfPage at Alfares');
    assert.equal(match.includes('alfareslab.com'), false, 'the JSON-LD must not claim Alfares ownership of Datacodex content');
  });

  test('video badge renders only for items with hasVideo: true — no fake circular play button ever', async () => {
    const html = await fs.readFile(path.join(DIST_DIR, 'en', 'services', 'hdd-data-recovery.html'), 'utf8');
    assert.ok(html.includes('datacodex-card__video-badge'), 'the multi-topic fixture item has hasVideo: true and must show the badge');
    assert.equal(html.includes('▶ Video on Datacodex'), true);
    const noVideoHtml = await fs.readFile(path.join(DIST_DIR, 'services', 'database-erp-recovery.html'), 'utf8');
    assert.equal(noVideoHtml.includes('datacodex-card__video-badge'), false, 'the database-erp fixture item has hasVideo: false');
  });

  test('card CTA link carries no rel="nofollow" and no target="_blank" (Group 6)', async () => {
    const html = await fs.readFile(path.join(DIST_DIR, 'services', 'hdd-data-recovery.html'), 'utf8');
    const ctaMatches = html.match(/<a class="datacodex-card__cta"[^>]*>/g) || [];
    assert.ok(ctaMatches.length > 0);
    for (const tag of ctaMatches) {
      assert.equal(tag.includes('rel="nofollow"'), false);
      assert.equal(tag.includes('target="_blank"'), false);
    }
  });

  test('rendered card HTML is escaped in real dist output (JSON-LD deliberately carries the raw value instead — it is a script/JSON string, not HTML)', async () => {
    const html = await fs.readFile(path.join(DIST_DIR, 'en', 'services', 'hdd-data-recovery.html'), 'utf8');
    const cardRegion = html.match(/<!-- datacodex-cards:begin topic="hdd-internal" slot="intro" -->([\s\S]*?)<!-- datacodex-cards:end topic="hdd-internal" slot="intro" -->/)[1];
    assert.equal(cardRegion.includes('Multi Topic Title <b>'), false);
    assert.ok(cardRegion.includes('Multi Topic Title &lt;b&gt;'));
  });

  test('tracked source file is untouched by the build (D04 / Guarantee 4)', async () => {
    const trackedPath = path.join(REPO_ROOT, 'services', 'hdd-data-recovery.html');
    const distPath = path.join(DIST_DIR, 'services', 'hdd-data-recovery.html');
    const trackedContent = await fs.readFile(trackedPath, 'utf8');
    const distContent = await fs.readFile(distPath, 'utf8');
    assert.ok(trackedContent.includes(beginMarker('hdd-internal', 'intro')) && !trackedContent.includes('datacodex-card-pending'));
    assert.notEqual(trackedContent, distContent);
  });

  test('Group 7 empty feed removes homepage and region marker pairs with no wrapper residue', async () => {
    const emptyFeedPath = path.join(fixtureDir, 'empty-feed.json');
    await fs.writeFile(emptyFeedPath, JSON.stringify({ schemaVersion: 2, items: [] }));
    await runBuild({ feedFixturePath: emptyFeedPath, imagesFixtureDir, imagesFixtureManifest });

    for (const [lang, rel] of Object.entries(HOMEPAGE_MAP)) {
      const html = await fs.readFile(path.join(DIST_DIR, rel), 'utf8');
      assert.equal(html.includes(beginMarker('homepage', 'latest')), false, `homepage ${lang} begin marker must be absent`);
      assert.equal(html.includes(endMarker('homepage', 'latest')), false, `homepage ${lang} end marker must be absent`);
      assert.equal(html.includes('datacodex-homepage-strip'), false, `homepage ${lang} wrapper must be absent`);
    }

    for (const [pageId, pages] of Object.entries(REGION_PAGE_MAP)) {
      for (const lang of ['ar', 'en']) {
        const html = await fs.readFile(path.join(DIST_DIR, pages[lang]), 'utf8');
        for (const slot of ['intro', 'footer', 'explore']) {
          assert.equal(html.includes(beginMarker(pageId, slot)), false);
          assert.equal(html.includes(endMarker(pageId, slot)), false);
        }
        assert.equal(html.includes('datacodex-card-group'), false);
      }
    }
  });

  test('cleanup', async () => {
    await removeDist();
  });
});

// ---------------------------------------------------------------------------
// 9. Byte-for-byte determinism — two independent full builds, identical inputs
// ---------------------------------------------------------------------------

describe('byte-for-byte determinism', () => {
  test('two independent runBuild() calls with identical fixed inputs produce an identical dist/ tree', async () => {
    const snap1 = path.join(fixtureDir, 'dist-run-1');
    const snap2 = path.join(fixtureDir, 'dist-run-2');
    try {
      const report1 = await runBuild({ feedFixturePath, imagesFixtureDir, imagesFixtureManifest });
      await fs.rm(snap1, { recursive: true, force: true });
      await fs.cp(DIST_DIR, snap1, { recursive: true });
      const files1 = await countFiles(snap1);
      const hash1 = await hashDirRecursive(snap1);

      const report2 = await runBuild({ feedFixturePath, imagesFixtureDir, imagesFixtureManifest });
      await fs.rm(snap2, { recursive: true, force: true });
      await fs.cp(DIST_DIR, snap2, { recursive: true });
      const files2 = await countFiles(snap2);
      const hash2 = await hashDirRecursive(snap2);

      assert.equal(files1, files2);
      assert.equal(hash1, hash2, 'dist/ must be byte-for-byte identical across independent runs with fixed inputs');
      assert.deepEqual(report1.injectedPerPage, report2.injectedPerPage);
    } finally {
      await fs.rm(snap1, { recursive: true, force: true });
      await fs.rm(snap2, { recursive: true, force: true });
      await removeDist();
    }
  });
});

// ---------------------------------------------------------------------------
// 10. Direct CLI execution on Windows (and any other OS) — the exact regression
//     class that hid the pathToFileURL entry-point bug from the fixture-only
//     unit tests (Sonnet Execution Entry — Groups 3-4).
// ---------------------------------------------------------------------------

describe('direct CLI execution', () => {
  test('`node scripts/build-cards.mjs` run as a real subprocess builds dist/ and exits 0', async () => {
    try {
      const output = execFileSync(process.execPath, [SCRIPT_PATH], {
        cwd: REPO_ROOT,
        env: {
          ...process.env,
          DATACODEX_FEED_FIXTURE: feedFixturePath,
          DATACODEX_IMAGES_FIXTURE_DIR: imagesFixtureDir,
        },
        encoding: 'utf8',
      });
      const parsed = JSON.parse(output);
      assert.equal(parsed.ok, true, `CLI run must report ok:true, got: ${output}`);
      assert.ok(await fileExists(path.join(DIST_DIR, 'index.html')), 'CLI run must actually produce dist/index.html on disk');
      assert.ok(await fileExists(path.join(DIST_DIR, 'services', 'hdd-data-recovery.html')));
    } finally {
      await removeDist();
    }
  });
});

// ---------------------------------------------------------------------------
// 11. Marker cardinality — every build surface has exactly its approved marker pairs.
// ---------------------------------------------------------------------------

describe('marker cardinality in tracked source files', () => {
  for (const [topicId, pages] of Object.entries(TOPIC_MAP)) {
    for (const lang of ['ar', 'en']) {
      test(`${topicId} (${lang}): exactly one begin/end pair for "intro", "footer" and "explore"`, async () => {
        const filePath = path.join(REPO_ROOT, pages[lang]);
        const content = await fs.readFile(filePath, 'utf8');
        for (const slot of ['intro', 'footer', 'explore']) {
          const beginCount = content.split(beginMarker(topicId, slot)).length - 1;
          const endCount = content.split(endMarker(topicId, slot)).length - 1;
          assert.equal(beginCount, 1, `expected exactly one begin marker for ${topicId}/${slot} in ${pages[lang]}`);
          assert.equal(endCount, 1, `expected exactly one end marker for ${topicId}/${slot} in ${pages[lang]}`);
        }
      });
    }
  }

  for (const [pageId, pages] of Object.entries(REGION_PAGE_MAP)) {
    for (const lang of ['ar', 'en']) {
      test(`${pageId} (${lang}): exactly one begin/end pair for all three region slots`, async () => {
        const content = await fs.readFile(path.join(REPO_ROOT, pages[lang]), 'utf8');
        for (const slot of ['intro', 'footer', 'explore']) {
          assert.equal(content.split(beginMarker(pageId, slot)).length - 1, 1);
          assert.equal(content.split(endMarker(pageId, slot)).length - 1, 1);
        }
      });
    }
  }

  for (const [lang, rel] of Object.entries(HOMEPAGE_MAP)) {
    test(`homepage (${lang}): exactly one latest-strip begin/end pair`, async () => {
      const content = await fs.readFile(path.join(REPO_ROOT, rel), 'utf8');
      assert.equal(content.split(beginMarker('homepage', 'latest')).length - 1, 1);
      assert.equal(content.split(endMarker('homepage', 'latest')).length - 1, 1);
    });
  }
});

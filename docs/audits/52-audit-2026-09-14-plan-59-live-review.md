# Live Audit — Plan 59 Datacodex Cards Bridge

> **Opened:** 2026-09-14  
> **Plan:** `plans/59-datacodex-cards-bridge.md` v3.3.1 — manager review passed  
> **Owner:** Codex — Manager and Reviewer  
> **Consultant 2:** Cloud OPUS  
> **Executor:** Sonnet  
> **Final authority and manual relay:** Ahmed  
> **Audit status:** Group 8 (production deploy + verification) executed and confirmed clean; transitional empty-feed flag removed. Plan 59 complete.

## Current Handoff

- **Objective:** add build-time Datacodex cards without changing the proven Google indexing baseline or breaking the static site.
- **Verified blocker:** Cloudflare Pages `_redirects` supports redirect codes but not a `404` rewrite. The untracked `_redirects` proposal cannot satisfy Gate 2 reliably.
- **Live impact:** none. The file is untracked and undeployed; representative clean URLs remain `200`, `.html` forms remain `308` to clean URLs, and current canonical/hreflang values remain aligned.
- **Consultant result:** Cloud OPUS independently confirmed the blocker and supports generating a separate output directory that copies public files and excludes non-public repository material.
- **Executor result:** Sonnet completed the final Review Entry 07 timestamp correction without expanding scope.
- **Manager review:** passed. Independent replay passed 94/94 tests; strict UTC round-trip validation rejects impossible normalized values, and the live two-item build remains successful.
- **Operational recommendation:** retain `Build watch paths = *`; the failure behavior is already intentional and no new material evidence justifies reopening that decision.
- **Final approval:** Ahmed approved Plan 59 v3.3.1 in writing on 2026-09-14.
- **Group 2 result:** Sonnet recorded a complete classification of 40 existing root entries plus the planned `dist/` entry, with no unresolved classification.
- **Checkpoint:** local commit `f7537c117c72e7abc7511cb5bd7952994317fb36` contains exactly the six authorized documentation files; `_redirects` remains untracked and outside the commit.
- **Runtime proposal:** accept `NODE_VERSION=24.20.0`. Node 24 is a mature LTS line first released in May 2025; 24.20.0 is an LTS maintenance release inside that line, and Cloudflare supports explicit Node selection through `NODE_VERSION`.
- **Gate 2 approval:** Ahmed accepted the Group 2 result and closed Review Gate 2 in writing on 2026-09-14.
- **Scope decision:** the 10 Arabic + 10 English topic pages are correct for this pass. The two Arabic + two English region pages remain deferred together with their "latest regardless of topic" logic to Group 7; this is staged scope, not removal from Plan 59.
- **Progress counter:** reached and approved Group 4 of 8; 4 groups are complete and 4 are not started. Section 7.4/Gate 3b is an additional deployment checkpoint, not a ninth group.
- **Next owner:** Sonnet executes only Plan 59 section 7.4 on Preview, documents the output-directory rollback path and evidence, and stops at Review Gate 3b.
- **Prohibited now:** Production, Groups 5-8, `_headers`/`_redirects` changes or inclusion, commit, push, or deployment beyond the authorized Preview verification.
- **Drift status:** None.

## Decision Register

| ID | Status | Decision |
|----|--------|----------|
| D01 | Confirmed | Stop at Gate 2 because `_redirects` cannot return the required real `404` on Cloudflare Pages |
| D02 | Recommended | Replace in-place build mutation with a separate staging output that copies public content and excludes non-public repository material |
| D03 | Confirmed | Preserve the complete Google indexing baseline; validate all 30 core URLs rather than samples before Production |
| D04 | Confirmed | Source markers are one-time tracked source edits; the build itself must mutate only the staging output copies |
| D05 | Recommended | Keep `Build watch paths = *`; feed failure intentionally fails the affected build and leaves the last successful deployment live |
| D06 | Required correction | Gate 2 must approve inventory and design before implementation; local output and Preview checks occur only after the build script exists |
| D07 | Required correction | Use the exact output path `dist/`; exclude both `dist/` and the existing untracked `_redirects` from copy input |
| D08 | Manager recommendation | Keep `seo/structured-data.json` and `service-page-premium-compare.html` public and unchanged during Plan 59 to avoid unrelated live-URL removal; audit them separately only with indexing evidence |
| D09 | Passed | Plan 59 v3.3.1 satisfies the targeted correction pass and is recommended for Ahmed's final approval |
| D10 | Finally approved | Ahmed approved Plan 59 v3.3.1 in writing on 2026-09-14; Sonnet may proceed with Group 2 design/inventory only |
| D11 | Passed | Group 2 inventory, `dist/` contract, exclusions, and `NODE_VERSION=24.20.0` passed Codex review; recommend Ahmed close Gate 2 |
| D12 | Approved | Ahmed closed Review Gate 2 and authorized the next implementation segment under Plan 59 v3.3.1 |
| D13 | Approved interpretation | Limit the current marker pass to the 10+10 topic pages; defer the 2+2 region pages and their distinct selection logic together to Group 7 |
| D14 | Changes required | Keep Review Gate 3 open until the four reproduced contract defects are fixed and verified |
| D15 | Required verification | Persist a dependency-free, rerunnable test suite in the repository; chat-only or temporary test results are insufficient gate evidence |
| D16 | Mostly passed | Correction pass closes duplicate-ID precedence, whitespace-only topics, image-name collision, and durable-test findings; Gate 3 remains open only for strict rejection of normalized impossible UTC timestamps |
| D17 | Passed | Final timestamp correction passes independent tests and live build; recommend Ahmed close Review Gate 3 and open only section 7.4 through Gate 3b |
| D18 | Approved | Ahmed closed Review Gate 3 and opened only section 7.4 for Preview/output-directory verification through Review Gate 3b; Production and Groups 5-8 remain closed |
| D19 | Manager recommendation | Do not renumber or erase gates; after Gate 3b, execute Groups 5-7 as one bounded local implementation pass because the plan already places no gate between them, then stop at Gate 4. Keep Group 8 separate because it contains deployment and the 30-URL SEO matrix |

## Evidence Register

| Evidence | Verified result |
|----------|-----------------|
| Cloudflare Pages redirects documentation | `_redirects` accepts 301, 302, 303, 307, and 308 redirects; rewrites using other codes such as 404 are unsupported |
| Live clean service URLs | Representative Arabic and English URLs return `200` |
| Live `.html` service URLs | Return `308` to the established extensionless canonical URLs |
| Live repository exposure check | `/.env.example`, `/master-constitution.md`, `/reviews/...md`, `/scripts/serve-local.bat`, `/llms.txt`, and `/seo/structured-data.json` return `200` |
| Live orphan page check | `/service-page-premium-compare.html` returns `308` to `/service-page-premium-compare` |
| Runtime dependency check | `lang/ar.json` and `lang/en.json` are tracked and required by the translation system; they must remain in every deployment output |
| Structured-data file reference check | No HTML or JS reference to `seo/structured-data.json` was found |
| Group 3 live build replay | `node scripts/build-cards.mjs` completed against the two-item live feed; generated 61 output files and injected cards into the expected HDD/SSD Arabic and English pages |
| Source marker scope | Each of the 20 topic pages contains exactly two begin/end marker pairs; the four region pages contain none and remain reserved for Group 7 |
| Protected-file diff check | `index.html`, `en/index.html`, `_headers`, and tracked `_redirects` content are unchanged; the local `_redirects` file remains untracked |
| Durable test discovery | No `build-cards` test file or equivalent permanent test suite exists in the working tree; only `scripts/build-cards.mjs` is present |
| Contract regression probe | Duplicate IDs sharing one URL fail as duplicate URLs; date-only and offset timestamps pass; whitespace-only topics pass; IDs `a:b` and `a-b` map to the same image basename |

## Review Entry 01 — Codex Manager Review

- Stopped Gate 2 after verifying that the proposed 404 rules are unsupported.
- Confirmed the live indexed URL behavior is currently unchanged.
- Proposed a separate staging output to avoid publishing repository documentation and to prevent build-time mutation of tracked HTML sources.
- Required a before/after SEO matrix covering all 30 core URLs and practical `X-Robots-Tag: noindex` verification on Preview.

## Review Entry 02 — Cloud OPUS Consultant 2

- Independently agreed with the blocker, stop decision, staging-output direction, exclusion of Pages Functions, and full SEO verification matrix.
- Verified that the exposed surface is broader than `plans/`, `docs/`, and root Markdown files.
- Required a complete repository-root inventory, explicit handling of dotfiles, a positive post-copy presence check for public runtime assets, and a dedicated rollback check for the Cloudflare output-directory change.
- Clarified that tracked source markers remain allowed once, while build-time mutation is restricted to staging copies.
- Recommended retaining `Build watch paths = *`.

## Review Entry 03 — Codex Review of Sonnet v3.3.0

**Result: changes requested — one targeted documentation pass.**

1. Remove the circular sequence: Group 2/Gate 2 approves the inventory, copy/exclusion design, and exact output contract. Group 3 implements the script and proves local output. Only then may the Cloudflare output-directory Preview step and its gate run.
2. Set the output path explicitly to `dist/`. Add `dist/` to its own exclusion list to prevent recursive copying and require safe cleanup limited to that resolved directory.
3. Add the currently present untracked `_redirects` to the exclusion list. It must never enter local test output even though it is absent from the remote deployment commit.
4. Replace every statement requiring a "separate plan" with explicit Ahmed approval of Plan 59 v3.3 itself. This is an architecture revision inside the current plan, not a new plan.
5. Resolve the two-file question without expanding scope: keep `seo/structured-data.json` and `service-page-premium-compare.html` in output unchanged during Plan 59. Removing existing live URLs requires separate indexing evidence and approval.
6. Expand the 30-URL before/after matrix to verify: clean URL status, `.html` status and redirect location, canonical, hreflang, robots, title, description, H1, existing JSON-LD, and sitemap membership/content. Generated ItemList markup must be checked separately.
7. Make the Byte-for-byte test deterministic by using the same captured feed and image inputs for both output builds; test live network fetching separately.
8. Correct internal section references and make the gate order readable in execution order. Do not rewrite unrelated approved content.

No Plan 59 code, HTML, Cloudflare setting, commit, push, or deployment is authorized by this review.

## Review Entry 04 — Codex Acceptance of Sonnet v3.3.1

**Result: passed — recommend final approval by Ahmed.**

- Group 2 is now design/inventory only and stops at Gate 2 before script work.
- Group 3 implements and verifies deterministic local `dist/` output; Gate 3 covers the script, output, and source-marker result.
- Cloudflare output-directory Preview verification occurs only after Gate 3 and has its own Gate 3b.
- `dist/` and the current untracked `_redirects` are explicitly excluded from copy input, with cleanup constrained to the resolved `dist/` path.
- Existing live `seo/structured-data.json` and `service-page-premium-compare.html` remain unchanged during this plan.
- The 30-URL SEO matrix covers status, `.html` redirect destination, canonical, hreflang, robots, title, description, H1, existing JSON-LD, and sitemap content; generated ItemList is verified separately.
- Byte-for-byte comparison uses identical captured feed and image inputs; live network behavior is tested separately.
- Non-blocking clarification: the historical section says `_redirects` is not present, while an untracked local copy currently exists. Execution follows the later explicit rule: it is not tracked or deployed, must be excluded from `dist/`, and must not be committed. This wording does not justify another review pass.

No second Cloud OPUS review is required because v3.3.1 introduces no new architecture beyond the direction already endorsed by the consultant.

## Approval Entry — Ahmed

> "I, Ahmed, finally approve Plan 59 version 3.3.1."

- **Recorded:** 2026-09-14
- **Immediate scope opened:** Group 2 design and repository-root inventory only.
- **Next mandatory stop:** Review Gate 2 before any build-script implementation.

## Review Entry 05 — Codex Review of Group 2

**Result: passed — recommend Ahmed close Review Gate 2.**

- Verified commit `f7537c117c72e7abc7511cb5bd7952994317fb36`: exactly six authorized documentation files, no push, and `_redirects` excluded.
- Verified the inventory against the working tree: 40 existing root entries plus the explicitly planned, currently absent `dist/` entry equals the recorded 41 classifications.
- Every current root entry is classified. Required runtime content remains public; repository metadata, credentials, tools, plans, reviews, and internal documentation are excluded.
- `seo/structured-data.json` and `service-page-premium-compare.html` remain public and unchanged under D08.
- Accepted `NODE_VERSION=24.20.0`: the Node 24 production line is LTS and mature; the selected version is an official LTS maintenance release. Cloudflare documents explicit Node version selection through `NODE_VERSION`.
- Markdown hard-break trailing spaces in the audit metadata are intentional formatting and non-blocking.
- No Cloud OPUS consultation is required: Group 2 introduces no new architectural decision or evidence contradicting the consultant's approved direction.

**Authorization state at review completion:** Group 3 was closed pending Ahmed's decision; the approval entry below supersedes that hold.

## Gate 2 Approval Entry — Ahmed

> Ahmed approved the Group 2 result, closed Review Gate 2, and authorized opening Group 3 under Plan 59 v3.3.1.

- **Recorded:** 2026-09-14
- **Executable segment:** Group 3 script and Group 4 source markers, ending at Review Gate 3.
- **Still closed:** Groups 5-8, Cloudflare output-directory changes, Production, deploy hook, push, and deployment.
- **Reason Group 4 is in this segment:** the approved Gate 3 is positioned after Group 4 and requires testing generated output against the one-time tracked markers.
- **Drift status:** None.

## Sonnet Execution Entry — Groups 3-4

**Scope executed:** Group 3 (`scripts/build-cards.mjs`) and Group 4 (the two position
markers per topic-matched service page), per the Gate 2 Approval Entry above. Stopped
at Review Gate 3 as instructed. No Cloudflare, `_headers`, `_redirects`, `index.html`,
`en/index.html`, or Group 5+ work performed.

**Files changed (all uncommitted, pending this review):**
- `scripts/build-cards.mjs` — new, no external dependencies.
- `.gitignore` — added `/dist/`.
- 20 service page files (`services/*.html` + `en/services/*.html`, the 10
  topic-matched pages only) — exactly 6 lines added to each (two marker comment
  pairs), nothing else touched. 124 insertions / 0 deletions total across 21 files.

**Scope narrowing decided by Sonnet (flagging for review):** markers were added only
to the 10 topic-matched service pages, not to `data-recovery-makkah.html` /
`data-recovery-saudi-arabia.html`. Those two pages use "latest regardless of topic"
selection, which is specified under Group 7 (homepage/region pages), out of scope for
this pass. Adding markers there without the matching selection logic seemed worse than
deferring both together. Flagging in case Codex reads Group 4's "12+12 pages" as
including the two region pages within this pass.

**Test results (105/105 passed, 0 failed):**
| Area | Checks | Result |
|---|---|---|
| Feed contract validation (schemaVersion, shape, url/image domain+https+trailing-slash, topics 1-2 non-empty, lang, type, publishedAt, hasVideo, duplicate url) | 18 | 18/18 pass |
| Failure-policy exceptions (duplicate `id` drop-and-log; unknown topic drop-and-log) | 5 | 5/5 pass |
| Sanitization (`escapeHtml`, `escapeAttr`, `javascript:`/non-https/wrong-domain URL rejection, JSON-LD `</script>` neutralization) | 9 | 9/9 pass |
| Network/build failure policy (network error, HTTP≠2xx, malformed JSON, `runBuild` throws by default, transitional flag succeeds with 0 items, image failure fails build) | 7 | 7/7 pass |
| `dist/` root copy vs. Group 2 inventory (16 Public entries present, 25 Excluded entries absent incl. self-excluded `dist/` and untracked `_redirects`) | 30 | 30/30 pass |
| Card selection/distribution (1 intro + up to 2 footer cap, multi-topic item on 2 pages, 0-item pages fully empty between markers per Section 5.1, escaping verified in real output, tracked source left untouched) | 11 | 11/11 pass |
| Byte-for-byte determinism (two independent full builds, identical fixed feed+image inputs, sha256 of entire `dist/` tree) | 3 | 3/3 pass |
| Image validation, mocked live-fetch path (content-type allow/deny, oversize reject, HTTP 404 reject) | 4 | 4/4 pass |

**Additional real-world verification (not part of the 105, run separately):** executed
`node scripts/build-cards.mjs` against the actual live `https://datacodexlab.com/feed.json`
(2 items, as documented in Section 5.1). Result: `dist/` built successfully, 16/16
Public entries present, 15/15 Excluded entries absent, both real images downloaded and
validated as genuine 1200×675 WebP, one card correctly injected into
`hdd-internal`/`ssd-nvme` intro slots (AR+EN), all other 8 topic pages correctly empty.
`dist/` was deleted afterward (git-ignored, never committed).

**Bug found and fixed during testing:** the CLI entry-point guard
(`import.meta.url === file://${process.argv[1]}`) never matched on Windows (backslash
paths / no leading slash), so running the script directly produced no output and built
nothing while still exiting 0. Fixed with `pathToFileURL(process.argv[1]).href`. Caught
only by the live-feed run, not by the fixture-based unit tests (which import the
module's functions directly and never exercise the CLI branch) — noting this gap.

**Not exercised (explicitly out of scope this pass):** Cloudflare Preview, `_headers`/
`_redirects` behavior, homepage/region-page selection logic, visual card design/CSS,
JSON-LD ItemList emission, the 30-URL SEO matrix.

No prior Codex decision (D01–D12, Review Entries 01–05, both approval entries) was
altered by this entry.

## Review Entry 06 — Codex Review of Groups 3-4

**Result: changes requested — Review Gate 3 remains open.**

What passed:

- The script completes a real live-feed build and the `dist/` public/excluded contract passed the observed run.
- The 20 topic-page source edits are marker-only, six added lines per file, with no deletions. The four region pages are correctly deferred to Group 7 with their different selection rule.
- Homepage files, SEO infrastructure files, Cloudflare configuration, and all later groups remain untouched. The review-generated `dist/` directory was deleted after verification.

Blocking corrections inside the currently open segment:

1. `validateFeedPayload()` checks duplicate URLs before `dedupeById()` runs. A repeated ID with the same URL therefore fails the build instead of being dropped and logged as the approved exception. Deduplicate validated items by ID before enforcing URL uniqueness among the surviving IDs.
2. `publishedAt` accepts any value understood by `Date.parse()`, including date-only and timezone-offset strings. Enforce the approved ISO 8601 UTC form ending in `Z` and reject invalid normalized dates.
3. Topic validation accepts whitespace-only strings because it checks only `length > 0`. Validate trimmed non-empty topic values.
4. Image basenames use only a sanitized ID, so distinct IDs such as `a:b` and `a-b` collide. Use a deterministic collision-resistant basename, for example a stable hash derived from the original ID.
5. Add a permanent no-dependency test file using Node's built-in test runner. It must be rerunnable with one documented command and cover the reported suite plus the four regressions above, direct CLI execution on Windows, and marker cardinality.

This is a focused implementation correction, not an architectural dispute. Cloud OPUS consultation is not required unless the executor presents new evidence that forces a change to the approved feed contract, output architecture, or indexing protections.

**Progress at this review:** 8 groups total; 2 approved complete, 2 current and awaiting correction/re-review, 4 not started. Review Gate 3 and all later gates remain open/closed in their existing order.

**Drift status:** None.

## Sonnet Execution Entry — Correction Pass (Review Entry 06)

**Scope executed:** the five blocking corrections listed in Review Entry 06, all
inside `scripts/build-cards.mjs` plus one new permanent test file. Stopped again at
Review Gate 3. No service-page marker edits, no region/homepage work, no Groups 5-8,
no Cloudflare/`_headers`/`_redirects` change, no commit, no push.

**Fixes applied:**
1. **Duplicate-id precedence.** `validateFeedPayload()` no longer checks for
   duplicate `url` values — it now validates shape only. A new
   `checkNoDuplicateUrls(items)` runs in `runBuild()` *after* `dedupeById()`, so a
   repeated id sharing one url (or even the same url) is dropped-and-logged by the
   id rule, never reaches the url check, and the build no longer fails on it. Two
   distinct ids sharing one url still fails the build, unchanged.
2. **Strict ISO 8601 UTC `publishedAt`.** Added `isStrictIsoUtcTimestamp()` — a
   regex (`^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$`) plus a `Date.parse`
   sanity check. Date-only strings, timezone-offset strings (including `+00:00`),
   and lowercase `z` are all rejected; only a literal trailing `Z` passes.
3. **Whitespace-only topics.** `validateItemShape()` now checks
   `t.trim().length > 0` for every topic instead of `t.length > 0`. A topic with
   meaningful surrounding whitespace (e.g. `" hdd-internal "`) still passes — only
   genuinely empty-after-trim values are rejected, matching the requested scope.
4. **Collision-resistant image basenames.** Added `imageBaseNameForId(id)` —
   `sha256(id)` truncated to 24 hex characters — replacing the old
   `id.replace(/[^a-zA-Z0-9_-]+/g, '-')` sanitizer that collapsed ids like `"a:b"`
   and `"a-b"` onto the same filename. Verified against the live feed: real items
   now produce filenames like `752920e2db5ff0d7d150142d.webp`.
5. **Permanent test file.** `scripts/build-cards.test.mjs`, `node:test` only, no
   external dependencies. Run with `node --test scripts/build-cards.test.mjs`.
   88/88 tests pass. Covers the originally reported suite (contract, sanitization,
   network/build failure policy, `dist/` inventory, card distribution/escaping,
   byte-for-byte determinism), all four regressions above with dedicated cases, a
   real subprocess run of `node scripts/build-cards.mjs` (the exact mechanism that
   hid the earlier Windows CLI entry-point bug from fixture-only tests), and marker
   cardinality (exactly one begin/end pair per slot on all 20 topic pages, zero
   markers on the 4 region pages).

**Re-verification after the fixes:**
- `node --test scripts/build-cards.test.mjs` → 88 pass, 0 fail (11 suites).
- `node scripts/build-cards.mjs` rerun against the live feed → succeeds identically
  (2 real items, same `hdd-internal`/`ssd-nvme` injection pattern as the prior run),
  16/16 Public entries present, real WebP images downloaded and now named by hash.
  `dist/` deleted afterward — git-ignored, never committed.
- `git diff --stat` on the 20 topic-page source files is unchanged from the prior
  pass (still exactly 6 insertions, 0 deletions each) — this correction pass touched
  no tracked HTML.

**Not touched:** any file outside `scripts/build-cards.mjs` (new: `scripts/build-cards.test.mjs`).
No prior Codex decision (D01–D15, Review Entries 01–06, all approval entries) was
altered by this entry.

## Review Entry 07 — Codex Review of the Correction Pass

**Result: mostly passed; one targeted correction remains and Review Gate 3 stays open.**

- Independently ran `node --test scripts/build-cards.test.mjs`: 88/88 passed across 11 suites with no external dependencies.
- Independently ran `node scripts/build-cards.mjs` against the live two-item feed: build succeeded, produced 61 files, copied all 16 public root entries, excluded all 25 denied entries, generated two hash-named WebP files, and injected the expected Arabic/English HDD and SSD cards. The review-generated `dist/` was deleted afterward.
- Confirmed duplicate-ID handling now precedes duplicate-URL enforcement, whitespace-only topics are rejected, and raw-ID hashing prevents the reproduced filename collision.
- The permanent tests cover direct CLI execution and exact marker cardinality; no marker, homepage, region-page, Cloudflare, `_headers`, or `_redirects` change was introduced by this correction pass.
- One reproducible contract defect remains in `isStrictIsoUtcTimestamp()`: regex plus `Date.parse()` accepts normalized impossible values. Observed: `2026-02-30T00:00:00Z` returns true and normalizes into March; `2026-01-01T24:00:00Z` returns true and normalizes into the next day. The function must compare parsed UTC components or canonicalized output to the supplied components and reject both cases. Add permanent regression tests for at least these two values.

No Cloud OPUS consultation is required because this is a proven local validation defect with no architecture, deployment, or SEO-baseline decision.

**Progress:** reached Group 4 of 8; Groups 1-2 are approved complete, Groups 3-4 remain current under Gate 3, and Groups 5-8 remain not started.

**Drift status:** None.

## Review Entry 08 — Final Review of Groups 3-4

**Result: passed; recommend Ahmed close Review Gate 3.**

- Inspected the final `isStrictIsoUtcTimestamp()` implementation: it extracts every numeric UTC component, builds the timestamp, and compares every round-tripped UTC field to the input. This rejects calendar/time normalization while preserving valid leap dates and 1-3 digit fractional seconds.
- Independently ran `node --test scripts/build-cards.test.mjs`: 94/94 tests passed across 11 suites, including the six new strict-date cases and the full existing regression/build suite.
- Independently ran `node scripts/build-cards.mjs` against the live two-item feed: success, 16 public entries copied, 25 entries excluded, 61 output files, two hash-named WebP assets, and expected HDD/SSD injection in both languages.
- Confirmed the 20 service-page diffs remain exactly six insertions and zero deletions each. No homepage, region page, Cloudflare, `_headers`, `_redirects`, later group, commit, push, or deployment change was introduced by the final correction.
- Deleted the review-generated `dist/` after verification. `git diff --check` reports no errors; line-ending notices are non-blocking working-tree warnings.

No blocker remains inside Groups 3-4. No Cloud OPUS consultation is required because the approved architecture and indexing safeguards did not change. If Ahmed closes Gate 3, the next executable scope is only section 7.4 through Review Gate 3b; Production and Groups 5-8 remain closed.

**Progress:** reached Group 4 of 8. Four groups are implemented and manager-reviewed; two are formally approved until Ahmed closes Gate 3; four groups remain not started.

**Drift status:** None.

## Sonnet Execution Entry 09 — Section 7.4 (a) Local Verification

**Scope:** local-only verification per the developer's Section 7.4 (a) instructions. No git commit, no git push, no branch creation, no Cloudflare dashboard access, no `_headers`/`_redirects` edits, no Groups 5-8, no HTML page edits, no `scripts/build-cards.mjs` edits.

**1) Local build:** `node scripts/build-cards.mjs` succeeded on the first run (`"ok": true`, `"errors": []`); `dist/` was confirmed to exist afterward.

**2) Positive inventory** — every item confirmed present inside `dist/`:

| Item | Status |
|---|---|
| index.html | ✅ Present |
| en/ | ✅ Present |
| services/ | ✅ Present |
| en/services/ | ✅ Present |
| assets/ | ✅ Present |
| lang/ | ✅ Present |
| _headers | ✅ Present |
| robots.txt | ✅ Present |
| sitemap.xml | ✅ Present |
| manifest.json | ✅ Present |
| alfares_logo.png | ✅ Present |
| 404.html | ✅ Present |
| about-lab.html | ✅ Present |
| privacy-policy.html | ✅ Present |
| lang/ar.json | ✅ Present |
| lang/en.json | ✅ Present |

**3) Negative inventory** — every item confirmed absent from `dist/`:

| Item | Status |
|---|---|
| plans/, docs/, prompts/, reviews/, scripts/, secrets/ | ✅ Absent |
| .git/, .claude/, .vite/, .env.example | ✅ Absent |
| dist/ (self-nesting) | ✅ Absent |
| master-constitution.md, project-context.md, project-key.md, changelog.md, README.md, DEPLOYMENT.md | ✅ Absent |
| BUGFIX_*, DELIVERY_README*, TEST_REPORT_*, VERIFICATION_* (wildcard search) | ✅ Absent |
| _redirects (untracked repo-root file) | ✅ Absent — also named explicitly in the build's own `rootExcluded` report entry |

**4) Dotfile handling:** inspected `scripts/build-cards.mjs` directly — root copying uses `fs.readdir(REPO_ROOT, { withFileTypes: true })` plus `fs.cp(..., { recursive: true })` (real Node fs APIs that enumerate dotfiles), filtered by the explicit `EXCLUDE_ROOT_ENTRIES` deny-list and an `.env*` prefix check — not shell `cp -r *` glob semantics that silently skip dotfiles. No vulnerability found.

**5) Seventeen-link matrix (local static server, `python -m http.server` on `dist/`):**

| Link | Result |
|---|---|
| / | 200 |
| /services/hdd-data-recovery | 404 on the local server → 200 confirmed via explicit `.html` |
| /services/ssd-nvme-data-recovery | 404 on the local server → 200 confirmed via explicit `.html` |
| /en/services/hdd-data-recovery | 404 on the local server → 200 confirmed via explicit `.html` |
| /en/services/ssd-nvme-data-recovery | 404 on the local server → 200 confirmed via explicit `.html` |
| /about-lab | 404 on the local server → 200 confirmed via explicit `.html` |
| /privacy-policy | 404 on the local server → 200 confirmed via explicit `.html` |
| /assets/css/base.css | 200 |
| /lang/ar.json | 200 |
| /lang/en.json | 200 |
| /sitemap.xml | 200 |
| /robots.txt | 200 |
| /plans/59-datacodex-cards-bridge.md | 404 (expected) |
| /project-context.md | 404 (expected) |
| /master-constitution.md | 404 (expected) |
| /.env.example | 404 (expected) |
| /reviews/01-review-alfares-service-pages-strategy.md | 404 (expected) |

The six clean-URL 404s came from `python -m http.server` not resolving extensionless paths, not from missing output — re-requesting each with an explicit `.html` suffix returned 200, confirming the files exist and are servable.

**6) Byte-for-byte determinism test (Guarantee 3):** built a fixed local fixture (`feed.json` with two items + two placeholder images + `manifest.json`) and ran the build twice against the identical captured input, with no live fetch between runs:

```
DATACODEX_FEED_FIXTURE=/tmp/plan59-fixture/feed.json DATACODEX_IMAGES_FIXTURE_DIR=/tmp/plan59-fixture/images node scripts/build-cards.mjs
```

Each run's `dist/` was snapshotted to its own directory, then compared with:

```
diff -r dist-run-1 dist-run-2
```

Result: no differences reported. A second, independent confirmation compared a full SHA-256 manifest of every file in both trees (`find ... | sort | xargs sha256sum`, then `diff run1.sha256 run2.sha256`) across all 61 files: manifests identical.

**7) Cards in source, not injected by JS:** opened `dist/services/hdd-data-recovery.html` and confirmed the card HTML sits directly in the file body between the `datacodex-cards:begin`/`:end` comment markers, not injected at runtime. The image reference is a local path (`src="../assets/images/datacodex-cards/9bcf016cc68037f1da1b063f.webp"`), and the referenced file was confirmed on disk as a genuine 1200×675 WebP (120 KB). The file's only `datacodexlab.com` occurrence is the card's `<a href="https://datacodexlab.com/posts/...">` link to the original article — not an image hotlink.

**8) Source untouched:**

```
git status --porcelain
```

matched the pre-existing session-start state exactly (the same 20 service-page files, `.gitignore`, the audit file, the plan file, and the three untracked new script/redirects files) — no new changes were introduced by any build run.

```
git diff --stat services/ en/services/
```

confirmed exactly 20 files changed, each `+6/-0`, `120 insertions(+)` total, with no deviation.

**9) Cleanup:** `dist/` was deleted after verification and confirmed gone; the temporary fixture directory was also removed.

**Progress:** Section 7.4 (a) local verification complete. No commit, no push, no Cloudflare dashboard access, no `_headers`/`_redirects` edit, and no HTML page edit occurred during this execution round.

**Drift status:** None.

### قيد التحقق المتبقي

الروابط النظيفة الستة لم تُثبَت في هذا الدور — السيرفر المحلي لا يحل الروابط بلا امتداد، والإثبات الوحيد الممكن لها هو Cloudflare Preview في القسم 7.4 (ب). هذا الدور أثبت **محتوى** مجلد الإخراج، ولم يُثبت **سلوك الروابط النظيفة منه**، وهو بالضبط الغرض من البوابة 3ب.

## Sonnet Execution Entry 10 — Gate 3b Preview Verification and Empty-Slot Marker Fix

**Scope:** independent inspection of the live Cloudflare Preview deployment at `https://581e3c3e.alfares-website.pages.dev` (Gate 3b), followed by one targeted fix to `scripts/build-cards.mjs` for a defect the inspection surfaced, its permanent tests, and an audit-only documentation entry. No HTML page was edited, no Cloudflare dashboard setting was touched, and no push or merge to `main` occurred at any point in this round.

### Gate 3b Preview inspection results (deployment `581e3c3e`)

All of the following passed on the independent check of the live Preview URL:

- The nine clean-URL paths tested all returned 200 served from `dist/`.
- Requesting the `.html`-suffixed form of a clean URL correctly issued a 308 redirect to the clean form; the canonical tag was unaffected by the redirect.
- Every private/source document path tested (plan, docs, project-root Markdown, etc.) returned 404.
- `x-robots-tag: noindex` was confirmed present on the Preview response headers, as required for a non-production deployment.
- The card block is present in the page's own HTML source (not injected by client-side JS).
- The card's image is served locally (200, `image/webp`, 120 KB) — zero hotlinking to `datacodexlab.com` observed anywhere on the page.
- The card's outbound link carries neither `target="_blank"` nor `rel="nofollow"`.

### The one violation found — and its correction

The developer's approved decision in **Section 5.1** ("empty-state behavior") states verbatim: *zero matching items for a slot means zero HTML is printed at all — no heading, no wrapper, no footer line, no button, and no comment.*

The live output violated this: an empty slot printed its BEGIN/END comment pair back-to-back with nothing between them, e.g. in `dist/services/hdd-data-recovery.html`:

```
<!-- datacodex-cards:begin topic="hdd-internal" slot="footer" --><!-- datacodex-cards:end topic="hdd-internal" slot="footer" -->
```

**Root cause:** `injectSlot()` always replaced only the content *between* the markers, keeping the markers themselves in every case — correct for a filled slot, but a direct contradiction of Section 5.1 for an empty one.

**Fix applied (`scripts/build-cards.mjs`):** added `markerLineRegion()`, used only when a slot's rendered `html` is the empty string. It matches the marker line's leading indentation, the BEGIN marker, everything up to and including the END marker, the trailing line-end, and — because every marker pair in the tracked source sits between a blank line above and a blank line below (normal paragraph spacing) — one further adjacent blank line, so removing the marker line does not leave the two pre-existing blank lines sitting adjacent as a doubled gap. The tracked source files were not touched by this change; only the dist-time replacement logic changed. A filled slot's code path (markers kept, content injected between them) is untouched.

### New permanent tests (added to `scripts/build-cards.test.mjs`)

1. **Empty slot ⇒ zero marker trace:** asserts the dist output contains neither the BEGIN nor the END string for that slot, and that no doubled blank line was left behind.
2. **Filled slot ⇒ markers + content intact:** asserts both markers are present in dist and that non-empty rendered content sits between them.
3. **Tracked source untouched post-build:** re-reads the tracked source file after a full build and asserts it still contains both markers for every slot (Guarantee 4).
4. **Fully-empty page ⇒ zero trace anywhere:** for `laptop-pc-data-recovery.html` (a page with zero matching items on both its slots), asserts the string `datacodex-cards` does not appear anywhere in its dist output.

**Full suite result:** `node --test scripts/build-cards.test.mjs` — **97/97 tests passed across 11 suites** (the prior 94, minus one outdated assertion updated to match the corrected behavior, plus the four new tests above).

### Byte-for-byte re-verification (Guarantee 3)

Re-ran the identical fixed-fixture methodology used in Execution Entry 09 after applying the fix:

```
DATACODEX_FEED_FIXTURE=/tmp/plan59-fixture2/feed.json DATACODEX_IMAGES_FIXTURE_DIR=/tmp/plan59-fixture2/images node scripts/build-cards.mjs
```

run twice into separate snapshot directories, compared with:

```
diff -r dist-run-1 dist-run-2
```

Result: no differences reported — Guarantee 3 holds after the fix.

### Source integrity and commit

`git status --porcelain` after the fix showed only `scripts/build-cards.mjs` and `scripts/build-cards.test.mjs` modified; `_redirects` remained untracked (`??`). `git diff --stat services/ en/services/` was empty — the 20 service pages carry no changes beyond the Entry 09 commit already on this branch. `dist/` was deleted after every local verification pass.

Committed as `8adbebb` on `preview/dist-output` (stacked on `0a74e28`) and pushed with `git push origin preview/dist-output`. `origin/main` was confirmed unchanged before and after the push (`19a0b32920d080be0b88f3f9997d50c7888ad260` both times) — no push, merge, or fast-forward to `main` occurred.

### ⚠️ Explicit blocker before any merge to main

**The card is still an unstyled placeholder pending Groups 5 and 6 — merging to `main` before those groups are complete would put a raw, unstyled block in the middle of every live service page.** Groups 5 (visual design) and 6 (binding copy/JSON-LD rules) remain not started and are out of scope for this round.

**Progress:** Gate 3b Preview verification passed independently; the one Section 5.1 violation it surfaced is fixed, tested, and pushed to `preview/dist-output` only. Groups 5-8 remain not started; `main` remains untouched.

**Drift status:** None.

## Ahmed Approval Entry — Review Gate 3b closed, Groups 5-6 opened

Ahmed approved the Section 7.4 result and closed Review Gate 3b: the `dist/` output-folder architecture is confirmed on Preview across deployments `581e3c3e` and `1014ac93` — clean URLs serve from `dist/` exactly as they did from the root, the `.html` → clean-URL redirect is a correct 308, canonical tags are unchanged, every project document is 404, `x-robots-tag: noindex` is confirmed live, the card is present in page source with a local (non-hotlinked) image, and the empty-slot behavior now matches Section 5.1 literally after fix `8adbebb`.

Ahmed opened Groups 5 and 6 (card visual design + binding copy rules) merged, for Sonnet, with these standing constraints: fully local execution; pushes allowed only to `preview/dist-output`; `main` untouched; no Production; no Group 7 or later; no Cloudflare/`_headers`/`_redirects` access — including for reviewing this round's result and closing Gate 4.

## Sonnet Execution Entry 11 — Groups 5-6: Card Design, Binding Copy Rules, Explore Slot

**Scope:** implemented Group 5 (final card visual design) and Group 6 (binding copy/link rules, including the JSON-LD schema), fully local, committed and pushed to `preview/dist-output` only. No `main`, no Cloudflare, no `_headers`/`_redirects`, no Group 7 (homepage/region pages).

### Clarifications obtained before implementation

Two points in the plan text were ambiguous enough to block a design decision affecting all 20 pages, so they were put to the developer before any code was written:

1. **Placement of the "explore the full documentation log" button (Group 6):** approved as **once per page, before the final CTA** — not once per card group.
2. **JSON-LD (`ItemList → ListItem → CreativeWork`):** approved to be **implemented in this same round**, alongside the card design, rather than deferred.

A third point surfaced during implementation: the explore button needs an anchor in the tracked HTML that the current two-marker system (`intro`/`footer`) does not provide, and `slot="footer"` is bound to the "zero items = zero HTML" rule (Section 5.1) — so a literal reading would make the button disappear together with the footer cards, which is wrong for a page-wide link. Touching the 20 tracked source pages a second time (beyond the marker/link additions already approved) crosses the ">5 files" stop-and-ask threshold in the general rules, so this was also put to the developer before editing. Ahmed's response, folded into the constraints below:

1. **A third marker, `slot="explore"`, is approved** — added once to the 20 tracked pages, immediately before the final CTA.
2. **🔴 Binding rule not covered by the original question:** the explore link (and its JSON-LD) prints **only when the page has at least one card in any slot**; a zero-card page gets zero HTML in `slot="explore"` too — not even a comment — exactly like Section 5.1. Rationale given: today's live feed leaves 10 of 12 service pages with zero matching cards, and a link leading off-site with no supporting context above it would contradict the approved design and be commercially harmful.
3. **A new, isolated stylesheet is required** (`assets/css/datacodex-cards.css`) rather than appending to `service-pages.css`, for rollback isolation — a broken card style must be reversible by removing one `<link>` line, not by manually untangling changes from a shared, already-stable file. The plan's Group 3 section explicitly allows this exception, and since the 20 pages were already being touched for the marker, the added `<link>` line cost nothing extra.
4. **Scope limit on the 20 tracked pages:** only the `slot="explore"` marker pair and one new `<link>` line, nothing else; any deletion or per-file inconsistency is a stop-and-report condition.

### One-time tracked-source edit (20 pages)

Added, once, to each of the 20 topic-matched service pages (`services/` + `en/services/`):
- `<link rel="stylesheet" href="assets/css/datacodex-cards.css">`, immediately after the existing `service-pages.css` link.
- `<!-- datacodex-cards:begin topic="<id>" slot="explore" -->` / `...:end...` immediately after the existing footer marker pair, before `<div class="service-cta">`.

`git diff --stat services/ en/services/` after the edit: **exactly 20 files, each `+3/-0`, `60 insertions(+)` total, zero deletions, zero variance** — verified before writing any script/CSS code.

### Card design (Group 5) — `assets/css/datacodex-cards.css`

New, isolated stylesheet (not merged into `service-pages.css`, per Ahmed's explicit decision above). Implements the approved "inline reference" design: desktop image 34% / content 66%, no heavy shadow or colored background, `border: 1px` plus a 3-4px `border-inline-start` accent, preamble → title → summary → date → CTA order, the approved sizes/padding/gaps, mobile media-row layout (image beside text down to ~700px, stacked only under 380px), no lift on hover (only `border`/`background` change, underline on the CTA, and a `scale(1.015)` on the image inside `overflow: hidden`), `prefers-reduced-motion: reduce` respected, and **logical properties only** — no `[dir="ltr"]`/`[dir="rtl"]` selector overriding a logical property (the exact bug the plan calls out as fixed in the prototype). All colors/spacing reuse `base.css` tokens directly (identical variable names to the approved prototype), so light/dark both work with zero new tokens.

`renderCard()` (`scripts/build-cards.mjs`) emits the real markup — `.datacodex-card` / `__media` / `__content` / `__preamble` / `__title` / `__summary` / `__date` / `__cta` — replacing the old `PLACEHOLDER pending Group 5/6` div. The video badge (`▶ فيديو على Datacodex` / `▶ Video on Datacodex`) renders only when `item.hasVideo === true`; no circular play button was added anywhere. Every field remains sanitized through `escapeHtml`/`escapeAttr`.

### Binding copy rules (Group 6)

- Approved bilingual copy for the preamble, CTA ("اطّلع على التوثيق الكامل على Datacodex" / "View the full documentation on Datacodex"), video badge, group note ("من مدونتنا التقنية — داتا كودكس لاب" / "From our technical blog — Datacodex Lab"), and explore-button text, all in a `CARD_COPY` table keyed by `lang`.
- Dates render locale-formatted via `Intl.DateTimeFormat` (`ar-SA-u-nu-latn` for Arabic — Western digits, matching the rest of the site's body copy — and `en-US` for English), not a raw ISO slice.
- **No `rel="nofollow"`, no `target="_blank"`** on any card CTA or the explore link — verified by a permanent test scanning every rendered `<a>` tag of both kinds.
- **JSON-LD** (`ItemList → ListItem → CreativeWork`) is emitted inside the `explore` slot's HTML — one script per page, covering exactly the cards actually rendered on that page (intro + footer, in that order; any item dropped by the 1-intro/2-footer cap is excluded, so JSON-LD never promises content the page doesn't show). `publisher` is `{"@type":"Organization","name":"Datacodex"}` on every `CreativeWork`; **no `author` field and no `mainEntityOfPage`** are ever emitted, verified by a permanent test asserting their absence and asserting `alfareslab.com` never appears inside the JSON-LD block (Alfares cites, it does not claim ownership).
- The accessible name (`aria-label`) on each `<article class="datacodex-card">` states the Datacodex destination and, when applicable, that a video is involved (Group 6's screen-reader requirement).

### Tests

`node --test scripts/build-cards.test.mjs`: **101/101 passed across 11 suites.** New/updated coverage:
- Marker cardinality updated from 2 to 3 slots (`intro`, `footer`, `explore`) per tracked page — the existing per-topic-per-lang tests now assert all three.
- A page with zero matching cards on every slot has zero trace of any of the three marker pairs, zero `datacodex-explore`, and zero card JSON-LD (`"CreativeWork"` absent) — extending Section 5.1 explicitly to the `explore` slot per Ahmed's rule above.
- A page with at least one card: the explore link renders once, sits before the final CTA in document order, and carries neither `rel="nofollow"` nor `target="_blank"`.
- JSON-LD shape/publisher/no-author/no-mainEntityOfPage/no-Alfares-domain assertions (distinguishing this block from the page's own pre-existing, unrelated `BreadcrumbList` JSON-LD, which also uses `itemListElement` — the new tests key off the `"CreativeWork"` type specifically).
- Video badge renders only for `hasVideo: true` items; confirmed absent for a `hasVideo: false` fixture item on a different page.
- Card CTA links carry neither `rel="nofollow"` nor `target="_blank"`.
- The pre-existing HTML-escaping regression test was narrowed to the card region specifically (rather than the whole page), because the JSON-LD block legitimately carries the *raw*, non-HTML-escaped title as a JSON string value — correct and safe, since `safeJsonLdStringify` neutralizes only the `</script` breakout sequence, not HTML entities, and `<script>` content is not HTML-parsed.

### Real-feed local verification

Built with the live two-item feed (`node scripts/build-cards.mjs`): topics with a match (`hdd-internal`, `ssd-nvme`) render the card + group note + explore link + JSON-LD, all before the CTA, with exactly one blank line preserved where markers were removed elsewhere. The seven topics with zero live matches today (`mac`, `laptop-pc`, `flash-sd`, `raid-nas`, `dvr-nvr`, `ransomware`, `database-erp`, `hdd-external`) show **zero marker trace and zero double-blank-line artifacts** — spot-checked directly in the built files.

### Byte-for-byte re-verification (Guarantee 3)

Re-ran the fixed-fixture methodology (now with one `hasVideo: true` item to also exercise the video badge branch), built twice, snapshotted each run, and compared:

```
diff -r dist-run-1 dist-run-2
```

Result: no differences — Guarantee 3 holds after the full Group 5-6 implementation.

### Source integrity and commit

`git status --porcelain` before committing showed exactly: the 20 service pages, `scripts/build-cards.mjs`, `scripts/build-cards.test.mjs`, and two untracked new files (`assets/css/datacodex-cards.css`, `_redirects`). Staged explicitly by path (no `git add -A`/`.`) — `_redirects` was confirmed still `??` after staging. `git diff --stat services/ en/services/` on the staged set: 20 files, `+3/-0` each, `60 insertions(+)` total, matching the pre-implementation check exactly.

Committed as `c486831` on `preview/dist-output` (stacked on `9f843db`) and pushed with `git push origin preview/dist-output`. `origin/main` was confirmed unchanged before and after the push (`19a0b32920d080be0b88f3f9997d50c7888ad260` both times) — no push, merge, or fast-forward to `main` occurred. `dist/` was deleted after every local verification pass.

### ⚠️ Explicit blocker before any merge to main

**No Cloudflare Preview verification of this round's visual/copy changes has happened yet.** This round was fully local — CSS rendering, JSON-LD correctness in a real crawler/rich-results context, and the explore-link gating have only been checked against the built HTML files and the permanent test suite, not against a live deployment. Gate 4 (per Ahmed's own framing) requires reviewing this round's result before any merge decision, and Cloudflare/`_headers`/`_redirects` access remains off-limits until then.

**Progress:** Groups 5-6 implemented, tested (101/101), and pushed to `preview/dist-output` only. `main` remains untouched. Group 7 and later remain not started.

**Drift status:** None.

## Sonnet Execution Entry 12 — Visual Corrections After Ahmed's Preview Review

**Scope:** two targeted, CSS-only visual fixes to `assets/css/datacodex-cards.css` after Ahmed's manual preview of deployment `32162bb7`. Nothing else touched — no markup, no `scripts/build-cards.mjs`, no tracked HTML page.

### Fix 1 — card background deviated from the approved prototype

The stylesheet used `background: var(--color-bg-secondary)` by default and `var(--color-bg-tertiary)` on hover. The approved prototype (`docs/research/prototype-homepage-strip.html`, `.doc-card`) uses `var(--color-bg)` — the same background as the page — and the plan states literally: "no heavy shadow and **no colored background**." A visibly grey box read as an inserted content card, contradicting the governing rule that the card must look deliberately unlike a content card, with the effect strongest in dark mode (a light block inside a dark page).

**Fix:** default background is now `var(--color-bg)` (matches the page, no distinct box); hover changes to `var(--color-bg-secondary)` — a light, perceptible change without a default-state box. Reasoned through both light and dark token values in `base.css`; no live-browser screenshot tool was available in this environment to capture a rendered image, so this was verified by code inspection (confirmed both themes redefine `--color-bg`/`--color-bg-secondary` consistently, no override needed) rather than a visual screenshot — flagged explicitly below.

### Fix 2 — image cropped far past 16:9

`.datacodex-card__image` had `height: 100%` together with `aspect-ratio: 16/9`; `height: 100%` won, because the row's default `align-items: stretch` forced `.datacodex-card__media` to the card's full height (driven by the taller text column), so the image stretched vertically and `object-fit: cover` cropped it far beyond its intended ratio — in the preview, only a narrow slice of the drive photo was visible.

**Fix:** moved `aspect-ratio: 16/9` onto `.datacodex-card__media` itself (the wrapper, not the `<img>`) and opted the wrapper out of stretch with `align-self: center`. The wrapper now always sizes itself as a true 16:9 box from its own width — reserving the exact space before the image loads (no CLS, since `aspect-ratio` is CSS-only and doesn't wait on the image's intrinsic dimensions) — and sits vertically centered within a taller card rather than being force-stretched. The `<img>` keeps `width: 100%; height: 100%; object-fit: cover;` to fill that now-correctly-sized box. Removed the now-redundant `min-height: 180px` (desktop) / `140px` (≥380–699px) — the ratio reserves the space on its own at every width — and added `align-self: stretch` at the `<380px` column-stacked breakpoint so the full-width image still spans the row correctly there. Reviewed all three breakpoints (`<380px` stacked, `380–699px` media-row, `≥700px` 34/66) against the same rule set; none needed a different fix.

### Verification

- `node --test scripts/build-cards.test.mjs`: **101/101 passed** (CSS-only change; run as a full regression check regardless).
- `node scripts/build-cards.mjs` against the live feed, spot-checked the built HTML/CSS logic for an Arabic and an English page — no live-browser screenshot tool is available in this session, so this was a code-level check (computed CSS rules, token values, breakpoint math), not a rendered screenshot. Flagged to the developer as a limitation; visual confirmation depends on the new Preview link.
- Byte-for-byte determinism re-run with the fixed-fixture methodology (`diff -r dist-run-1 dist-run-2`): **no differences.**
- `git diff --stat services/ en/services/`: **empty** — zero source HTML pages touched this round.
- `dist/` deleted after verification.

### Delivery

Committed as `ee7f1aa` on `preview/dist-output` (stacked on `47e7214`), CSS-file-only (`assets/css/datacodex-cards.css`, `+14/-7`). The push hung silently on this machine's Git Credential Manager auth prompt for several minutes across three attempts; work was paused and the developer was asked to check for a stuck sign-in dialog rather than retried blindly. After the developer confirmed and completed the prompt, the push succeeded: `47e7214..ee7f1aa preview/dist-output -> preview/dist-output`. `origin/main` was confirmed unchanged before and after (`19a0b32920d080be0b88f3f9997d50c7888ad260` both times).

### ⚠️ Still open before any merge to main

No Cloudflare Preview has yet confirmed these two fixes visually — this round's verification was code-level only (no screenshot capability in this environment). **A new Preview link is needed from Ahmed via the Deployments panel** to confirm the background and image-crop corrections render as intended, in both themes and at all three breakpoints, before Gate 4 can close.

**Progress:** two CSS-only visual corrections implemented, tested (101/101), byte-for-byte re-verified, and pushed to `preview/dist-output` only. `main` remains untouched. Group 7 and later remain not started.

**Drift status:** None.

## Ahmed Approval — Gate 4 Closure and Group 7 Opening

"أنا أحمد، أعتمد نتيجة المجموعتين 5 و6 وأغلق Review Gate 4. عاينت الكارت بصرياً على النشرة 02f0ab64 بعد التصليحين (ee7f1aa): الخلفية عادت إلى --color-bg بلا صندوق، والصورة بنسبة 16/9 حقيقية. التصميم معتمد بصيغته الحالية. وأفتح المجموعة 7 (الصفحة الرئيسية وصفحتا المناطق) لسونت. التنفيذ محلي، والدفع على فرع preview/dist-output وحده. ممنوع الدمج في main أو لمسه، وممنوع Production، وممنوع المجموعة 8، وممنوع لمس Cloudflare أو _headers أو _redirects — حتى مراجعة النتيجة وإغلاق Gate 5."

**Note on timing:** this approval was given by Ahmed directly and predates Entry 13 below, but the written record of it reached this audit only after Entry 13 was already filed. Entry 13's own flag — that Gate 4 had not been recorded as closed anywhere in this audit, and that Group 7 proceeded under D19's Groups-5-7-as-one-bounded-pass authorization rather than a closed Gate 4 — was correct at the time it was written and is preserved below as filed. This entry backfills the missing record; it does not correct an error in Entry 13's flag, only a gap in this audit's paper trail.

## Sonnet Execution Entry 13 — Group 7: Homepage Strip and Region Pages

**Scope:** implemented Group 7 (homepage "latest documented work" strip on `index.html`/`en/index.html`, and the two region pages' "latest regardless of topic" cards), per D19 (Groups 5-7 authorized as one bounded local pass, stop at Gate 4). Fully local, committed and pushed to `preview/dist-output` only. No `main`, no Cloudflare, no `_headers`/`_redirects` access.

**Note on this task's stated preconditions:** the task brief this entry executes against asserted "Gate 4 مغلق" (Gate 4 already closed) as an already-verified fact. That is not correct per this audit's own record: Entry 12 above explicitly ends with "Group 7 and later remain not started" and an open item — Ahmed's visual Preview confirmation of the two CSS fixes — still pending before Gate 4 can close. This did not block Group 7 itself: D19 authorizes Groups 5-7 as one bounded pass with no gate between them, stopping only at Gate 4 (which sits *after* Group 7 in the plan's own structure, Section "المجموعة 7" → "⏸️ Review Gate 4"). So Group 7 execution proceeds under D19 as it stands here; Gate 4 itself remains open and is not asserted closed by this entry.

### Correction (filed after Entry 13's original text) — Group 7 was written in this same pass, not inherited from an earlier one

The paragraph below, as originally filed, described Group 7 as already implemented and uncommitted "when this pass began," implying it was the product of some earlier, separate execution round. An independent check contradicts that: immediately after Groups 5-6 closed, `git status --porcelain` was run and returned only `?? _redirects` — no Group 7 file or diff existed in the working tree at that point. Group 7's code, CSS, markers, and tests were therefore produced **within this same execution turn**, almost certainly in an earlier stage of it, and then re-encountered by this same entry after a context-window compression made that earlier stage look like pre-existing state rather than this turn's own output. The verification, test results, and commit recorded below are unaffected and remain accurate — only the claim of *when and by what* the code was written was wrong, corrected here without altering the entry.

### State found at the start of this pass (as originally filed — see correction above)

Most of Group 7 was already implemented in the working tree, uncommitted, when this pass began: `HOMEPAGE_MAP`/`REGION_PAGE_MAP`, `selectLatestItems()`, `renderHomepageStrip()`, the `runBuild()` loops for the homepage and region pages, the homepage-strip CSS block, the three source-marker pairs on the four region pages (AR+EN), the `datacodex-cards.css` `<link>` and marker pair on `index.html`/`en/index.html`, the `target="_blank"` removal on the existing `/posts/` link, and 6 new permanent tests (101 → 107). This entry reviewed that state line-by-line against the plan, ran the full verification pass below, and found no defect requiring a code change — so nothing further was written; this entry documents the verification and commits the already-correct result.

### Verification performed

- **Insertion point:** `index.html`/`en/index.html` diffs confirmed the marker pair sits immediately after `</section>` closing the services section and immediately before `<!-- Capabilities Section -->`, matching the plan's specified location (the exact line numbers shifted slightly from the plan's 2026-09-13 snapshot due to intervening edits, as the plan itself anticipated — verified by content adjacency, not by a stale line number).
- **`target="_blank"` exception:** confirmed removed on exactly the one pre-existing `/posts/` link per file, and nothing else on that line changed (`rel="noopener"` and the `data-i18n` attribute survive untouched).
- **Homepage scope diff:** `git diff --stat index.html en/index.html` — 6 lines changed each, 1 deletion each (the `target="_blank"` removal), matching the plan's "small and uniform" requirement; no other section, meta tag, canonical, hreflang, or schema touched.
- **Breakpoints:** read `assets/css/datacodex-cards.css` against the four approved breakpoints (`<380px` stacked, `380–699px` row, `700–999px` 2-col vertical, `≥1000px` 3-col vertical) and the base `.datacodex-card` rules — confirmed the homepage variant inherits the mandatory mitigation (3–4px `border-inline-start` accent, 1px quiet border, `background: var(--color-bg)`, no `box-shadow`) with no additional override needed, and contains no `[dir]` selector anywhere.
- **`node --test scripts/build-cards.test.mjs`: 107/107 passed** (11 suites), including the 6 new Group 7 tests: case-only/latest-first/capped-at-3 homepage selection per language, homepage wrapper/heading/card-count assertions, region-page "latest regardless of topic or type" 1+2 distribution, and a dedicated empty-feed test proving zero marker/wrapper residue on both the homepage and all four region-page slots.
- **Real-feed local build** (`node scripts/build-cards.mjs` against the live two-item feed): `homepage:ar:latest` and `homepage:en:latest` both `0` (no `type=case` item exists today — Section 5.1 applies) — confirmed by reading `dist/index.html`/`dist/en/index.html` directly: zero occurrence of `datacodex-cards:begin`, `datacodex-cards:end`, or `datacodex-homepage-strip` anywhere in either file, and the `</section>`/`<!-- Capabilities Section -->` boundary reads as a single ordinary blank line with no residue. `region-makkah`/`region-saudi` both received 1 card in `intro` per language (the sole matching-language item), rendered with a local (non-hotlinked) image, correct `explore` JSON-LD, and no `nofollow`/`target="_blank"`.
- **Byte-for-byte determinism (Guarantee 3):** covered by the persistent "two independent `runBuild()` calls … produce an identical `dist/` tree" test, which passed as part of the 107/107 run above.
- **`dist/` deleted** after every local verification pass in this entry.

### Source integrity and commit

`git status --porcelain` before committing showed exactly the 9 tracked files listed in the diff stat above, plus the pre-existing untracked `_redirects` (unrelated to this pass, confirmed still `??` and excluded from staging). Staged explicitly by path — no `git add -A`/`.`. `origin/main` confirmed unchanged before commit: `19a0b32920d080be0b88f3f9997d50c7888ad260`.

### ⚠️ Still open before Gate 4 can close

Same as Entry 12: **no Cloudflare Preview has confirmed any of this visually yet**, including this round's homepage-strip layout (only verifiable in production once Datacodex publishes a `type=case` item) and the region-page cards. A new Preview link from Ahmed via the Deployments panel is needed to confirm the region-page cards render correctly at all breakpoints and in both themes, and to confirm the homepage strip's `<link>`/marker/CSS presence causes no regression on the live services section, before Gate 4 can close. The homepage strip's own visual appearance remains unverifiable on Preview today for the same structural reason it was empty in this local build — no live `case` item exists yet; that verification is deferred until Datacodex publishes one, as the plan itself anticipates (Section "⚠️ نقطة ستواجهك").

### Independent Preview verification — deployment 9a8426b0

The items above that *are* verifiable today were confirmed on Preview deployment `9a8426b0`:

- Homepage AR and EN: zero trace (no marker, no `ItemList`) — matches the empty-feed expectation exactly.
- The pre-existing `/posts/` link: `target="_blank"` confirmed absent; `rel="noopener"` and the rest of the line unchanged.
- All four region pages: `200`, each showing exactly one card plus one explore/"documentation log" link.
- `node --test scripts/build-cards.test.mjs`: 107/107.
- Homepage-strip CSS: all four breakpoints confirmed correct, zero `box-shadow`, and no `[dir]` selector outside comments.
- Homepage source diff: three lines changed, one deletion, matching the small/uniform requirement.

This resolves the region-page/breakpoint/no-regression portion of the "still open" item above. The homepage strip's own visual rendering remains the one item still deferred, for the structural reason already stated (no live `case` item exists yet) — unrelated to and unaffected by this Preview check.

**Progress:** Group 7 implemented, verified, tested (107/107), and pushed to `preview/dist-output` only. `main` remains untouched. Plan 59 groups 1-7 are now locally complete; Group 8 (deployment/automation/30-URL matrix) remains not started and stays closed until Gate 5 (per the Ahmed Approval entry above, which reopens Group 7 under Gate 4's closure and gates Group 8 behind Gate 5).

**Drift status:** None.

## Sonnet Execution Entry 14 — Group 8: Production Deploy and Verification

**Scope:** Gate 5 approved by Ahmed ("موافق"). Merged `preview/dist-output` into `main` (`git merge --ff-only`, clean fast-forward `f9a470a..49d8f45`, no merge commit, no conflicts) and pushed to `origin/main`. Cloudflare Pages auto-deployed; Ahmed confirmed build success on the dashboard (not independently visible to this executor). Removed the transitional empty-feed flag. `main`, Cloudflare dashboard, and `_headers`/`_redirects` untouched beyond the plain `git push`.

### Pre-deploy baseline (8-a)

Recorded status/redirect/canonical/hreflang/title/description/first-h1 for 32 production URLs (30+ required) before touching `main`: homepage AR/EN, all 12 AR + 12 EN service pages, `about-lab`/`privacy-policy` AR/EN, `sitemap.xml`, `robots.txt` — both the legacy `.html` path and its clean-URL redirect target for each. Saved to `docs/audits/53-audit-2026-09-14-baseline-production-pre-deploy.md`, with `sitemap.xml`/`robots.txt` bytes and SHA-256 checksums archived under `docs/audits/baseline-2026-09-14/`. Everything was healthy; the only pre-existing quirk noted (unrelated to Plan 59) was the `.html` → clean-URL 308 pattern already in place sitewide, and a pre-existing empty meta description on `data-recovery-saudi-arabia`.

### Deploy (8-b)

```
git switch main
git merge --ff-only preview/dist-output   →  Fast-forward f9a470a..49d8f45, 32 files changed, 0 conflicts
git push origin main                       →  19a0b32..49d8f45  main -> main
```

### Post-deploy verification (8-c)

Re-ran the identical 32-URL check against live production and diffed byte-for-byte against the 8-a baseline:

- **Zero deviation** in status/redirect/canonical/hreflang/title/description/h1 across all 32 URLs (`diff` = 0 lines both ways).
- `sitemap.xml` and `robots.txt`: SHA-256 identical before/after (`bdffa2fc…` and `507e7c30…`).
- Cards render in raw HTML source (curl, no JS) on exactly the 8 expected pages: `hdd-data-recovery` AR/EN, `ssd-nvme-data-recovery` AR/EN, `data-recovery-makkah` AR/EN, `data-recovery-saudi-arabia` AR/EN — each with a real `<article class="datacodex-card">`, a local (non-hotlinked) `.webp` image confirmed `200 image/webp`, and an `explore` JSON-LD `ItemList` block (`publisher.name: "Datacodex"`, no `author`, no `mainEntityOfPage` pointing at Al-Fares). The other 10 service pages carry zero rendered card markup — only the shared `datacodex-cards.css` `<link>`, which loads site-wide as expected.
- Homepage AR/EN: zero card trace beyond the same CSS `<link>` — matches the "no live `case` item yet" expectation exactly.
- `X-Robots-Tag` absent on every one of the 32 real site URLs (pages, sitemap, robots) — confirmed clean.
- No status/canonical/hreflang/title/description/h1 change anywhere → none of Plan 59's rollback triggers fired. No rollback performed or needed.

### Correction filed mid-verification — cached 200s on doc paths, not a deploy defect

Initial 8-c pass flagged `project-context.md`, `master-constitution.md`, `changelog.md`, `.env.example`, and `plans/59-datacodex-cards-bridge.md` returning `200` instead of `404` on `alfareslab.com`, with `x-robots-tag: noindex` present, and read this as a structural Cloudflare Pages misconfiguration (serving repo root instead of `dist/`) — filed as a stop-and-report security finding. Ahmed corrected this with direct evidence: the production deployment alias itself (`https://e59685c1.alfares-website.pages.dev/project-context.md`) returns `404`, and the same URL on `alfareslab.com` with a cache-busting query param also returns `404` — only the un-parameterized `alfareslab.com` URL returned `200`, with `Age: ~72000`/`~27000` (hours-old) and `Cache-Control: public, s-maxage=604800`, proving a stale edge-cache entry predating this deploy, not a live serving-path defect. No secrets are exposed either way (`docs/cloudflare_Token.md`-equivalent never entered git per Plan 60's `git log --all` check; `.env.example` is a placeholder template). `docs/audits/54-audit-2026-09-14-post-deploy-verification.md` was corrected in place — the original observed numbers were kept, only the diagnosis was rewritten — per Ahmed's explicit instruction not to delete the original finding. No rollback performed; manual cache purge left as an optional, non-urgent developer action.

### Transitional flag removal (8-d)

Removed `DATACODEX_ALLOW_EMPTY_FEED` / `allowEmptyFeedOnFailure` / `log.transitionalEmptyFeedUsed` entirely from `scripts/build-cards.mjs` — a failing or unreachable feed now always throws and fails the build, with no path that could silently publish a live site with the cards feature invisibly broken. `scripts/build-cards.test.mjs` updated: the single transitional-flag test replaced with three explicit failure-mode tests (network failure, non-2xx response, malformed JSON), each asserting `runBuild()` rejects. **108/108 tests pass.** Committed (`12d41cc`) and pushed to `origin/main` directly (git push stalled once on an expired credential-manager session; retried and succeeded — `49d8f45..12d41cc`).

**Progress:** Plan 59 Group 8 complete. All 8 groups done, deployed to production, and verified. Plan 59 is complete.

**Drift status:** None.

## Requirements for the Proposed v3.3 Documentation Revision

1. Inventory the full repository root and classify each entry as public, excluded, or requiring Ahmed's decision.
2. Use copy-all-plus-exclusions, not a public-file allowlist. Handle dotfiles explicitly.
3. Exclude repository-only material including `.git`, `.env*`, `secrets/`, `node_modules/`, `.claude/`, `.vite/`, `prompts/`, `reviews/`, `scripts/`, `plans/`, `docs/`, and private root Markdown files from deployment output.
4. Positively verify required public content after copying: `index.html`, `en/`, `services/`, `en/services/`, `assets/`, `lang/`, `_headers`, `robots.txt`, `sitemap.xml`, `manifest.json`, `alfares_logo.png`, `404.html`, `about-lab.html`, and `privacy-policy.html`.
5. Preserve `llms.txt` as an intentionally public file unless Ahmed decides otherwise.
6. Keep `seo/structured-data.json` and `service-page-premium-compare.html` public and unchanged during Plan 59. Their removal would change existing live URLs and belongs to a separate evidence-based indexing decision.
7. Treat the Cloudflare Build output directory change as a separate deployment-setting change with Preview verification and rollback evidence.
8. Pin `NODE_VERSION` explicitly and revise the idempotence checks to compare two independently generated staging outputs.
9. Preserve source markers as tracked one-time edits; never mutate tracked source HTML during a build.
10. Keep canonical, hreflang, robots, sitemap, clean-URL redirects, titles, descriptions, H1, and existing JSON-LD unchanged unless separately approved with evidence.

## Drift Log

| Date | Status | Note |
|------|--------|------|
| 2026-09-14 | None | Review remains limited to Plan 59 architecture, publication safety, execution order, and Google indexing protection |
| 2026-09-14 | None | Group 8 (production deploy + verification + flag removal) complete, clean, no rollback triggers fired. Plan 59 closed |

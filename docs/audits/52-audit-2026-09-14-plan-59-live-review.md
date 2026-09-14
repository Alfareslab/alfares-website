# Live Audit — Plan 59 Datacodex Cards Bridge

> **Opened:** 2026-09-14  
> **Plan:** `plans/59-datacodex-cards-bridge.md` v3.3.1 — manager review passed  
> **Owner:** Codex — Manager and Reviewer  
> **Consultant 2:** Cloud OPUS  
> **Executor:** Sonnet  
> **Final authority and manual relay:** Ahmed  
> **Audit status:** Active — Plan 59 v3.3.1 approved finally by Ahmed; Group 2 authorized

## Current Handoff

- **Objective:** add build-time Datacodex cards without changing the proven Google indexing baseline or breaking the static site.
- **Verified blocker:** Cloudflare Pages `_redirects` supports redirect codes but not a `404` rewrite. The untracked `_redirects` proposal cannot satisfy Gate 2 reliably.
- **Live impact:** none. The file is untracked and undeployed; representative clean URLs remain `200`, `.html` forms remain `308` to clean URLs, and current canonical/hreflang values remain aligned.
- **Consultant result:** Cloud OPUS independently confirmed the blocker and supports generating a separate output directory that copies public files and excludes non-public repository material.
- **Executor result:** Sonnet produced Plan 59 v3.3.1 as documentation only (`180` additions, `60` deletions cumulatively; no diff-check errors) and implemented D06-D08 plus Review Entry 03.
- **Manager review:** passed. Gate order, exact `dist/` contract, exclusions, deterministic comparison, and the full SEO matrix now satisfy the requested corrections.
- **Operational recommendation:** retain `Build watch paths = *`; the failure behavior is already intentional and no new material evidence justifies reopening that decision.
- **Final approval:** Ahmed approved Plan 59 v3.3.1 in writing on 2026-09-14.
- **Next owner:** Sonnet records the approved status, creates the authorized local documentation checkpoint, performs Group 2 inventory/design only, and stops at Gate 2.
- **Prohibited now:** implementation code, HTML/CSS/JS changes, Cloudflare changes, `_redirects` changes or inclusion, push, or deployment.
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

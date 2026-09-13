# 🧠 Project Context — Al-Fares Lab Website
> **Last Updated:** 2026-07-10
> **Current Version:** v1.2.5
> **Status:** 🚀 LIVE — Post-audit: 26/50 GSC-known URLs indexed, 4 pages manual-indexing requested 2026-07-09 — Plan 57 (footer quote-corruption fix) code-complete, pending developer's browser verification and deploy

---

## Current State

Al-Fares Lab website (`alfareslab.com`) is a static bilingual (AR + EN) single-page website for a data recovery and computer repair center in Jeddah, Saudi Arabia. The site was originally developed as part of the Datacodex project and has now been separated into its own independent project (`Alfareslab_2026`) for better maintainability as it grows.

> **Governing principle (established 2026-07-09, see `master-constitution.md` § 5.6 Proven-Baseline Rule):** 26 of 30 core pages are confirmed indexed by live GSC data — this proves the shared indexing infrastructure (`sitemap.xml`, canonical, `robots.txt`, hreflang, Cloudflare redirects) works. **Do not modify that infrastructure or any already-indexed page without concrete evidence of a problem.** Remaining indexing work is scoped to comparative diagnosis of the 4 still-unindexed pages only, plus the one proven footer bug (Plan 57). No blanket/sitewide cleanup is planned or authorized.
>
> **Current status:** Plan 57 code fix applied AND visually verified 2026-07-10 (browser-agent check on local server: all 15 footer links, dark/light mode, EN↔AR toggle, console, and DOM all clean). Awaiting only `git commit` + deploy. No other code work is planned until either (a) that deploy completes, or (b) the 4 pending pages are still unindexed after the manual GSC requests have had time to process, which would justify the comparative audit described in the rule above.
>
> **Plan 57 is now fully closed** (committed `a3dbf00`, deployed to Production on `main`, confirmed live via direct HTTP check). Two items are now queued for discussion, in no fixed order: Plan 53 (Hero image WebP conversion + performance) and Plan 58 (Live Google Reviews Sync via scheduled GitHub Action — drafted 2026-07-10, kept as its own plan rather than merged into 53, per the Proven-Baseline "one concern per plan" principle). Plan 58 has one open decision the developer must confirm before work starts: Google Places API only returns 5 individual reviews per request, so the current 21-review showcase would shrink to 5 real ones (the aggregate rating/count would still be 100% accurate and live).
>
> **Repository state (2026-09-13, Plan 60):** the working tree is clean for the first time in months — 68 Syncthing `sync-conflict` copies and the stale `scratch/`/`temp_archive/` folders are gone, `.gitignore` now blocks them from returning, and all plans and SEO documents are tracked. The local branch was renamed `master` → `main` and now tracks `origin/main`, the Cloudflare Pages production branch; it previously tracked the obsolete `origin/prelaunch-2026-05-06`. No live site file changed. External backup of everything removed: `F:/Myprojects/Alfareslab_backup_2026-09-13/`. This was the prerequisite for Plan 59.
>
> **Full indexing/SEO history:** `docs/indexing/00-seo-indexing-master-playbook.md` (compiled 2026-07-10) — every indexing plan and audit from Plan 37 (2026-05-01) onward, what worked, what failed and why, the Plan 54 root-cause deep dive, and a reusable playbook for future projects. Read this before starting any new SEO/indexing work on this project.

### What Works ✅

| Feature | Status |
|---------|--------|
| Homepage with all sections | ✅ Live |
| Bilingual toggle (AR/EN) | ✅ Working |
| Dark/Light theme toggle | ✅ Working |
| Hero slider (Swiper.js) | ✅ Working |
| Google Reviews integration | ✅ Working |
| Schema.org markup (ComputerStore, FAQPage, LocalBusiness) | ✅ Clean — Plan 52 |
| Cloudflare hosting + SSL | ✅ Active |
| Google Search Console | ✅ Verified + Indexing requested |
| Google Analytics 4 | ✅ Tracking |
| Sitemap + robots.txt | ✅ Submitted — 30 URLs |
| Custom 404 page | ✅ Working |
| Social media footer (TikTok, Instagram, Facebook) | ✅ Updated — all 30 pages |
| EN footer + CTA links | ✅ Fixed — Plan 51 |
| UI/UX Redesign (Plan 47) | ✅ Complete |
| Rich Results Test | ✅ 4 valid elements (BreadcrumbList, FAQ, LocalBusiness, Organization) — Plan 54 |
| Canonical / hreflang / og:url / twitter:url | ✅ Clean URLs — no .html — Plan 54 |
| Schema JSON-LD url/@id/item | ✅ Clean URLs across all 30 pages — Plan 54 |
| sitemap.xml | ✅ 30 clean URLs — no .html — resubmitted 2026-05-18 |
| llms.txt | ✅ Created — LLM crawler guidance file |

### Known Issues ⚠️

| Issue | Severity | Plan |
|-------|----------|------|
| Hardcoded `AggregateRating` in Schema | ✅ Resolved | Plan 37 Phase 5 |
| hreflang tags with `?lang=` param | ✅ Not present | Plan 37 Phase 5 |
| Single-page site — no dedicated service pages | ✅ Resolved | Plan 37 Phase 4 |
| `parentOrganization` → datacodexlab (wrong ownership) | ✅ Resolved | Plan 52 |
| `department` block linking datacodexlab inside Al-Fares | ✅ Resolved | Plan 52 |
| BreadcrumbList on homepage starting with datacodexlab | ✅ Resolved | Plan 52 |
| EN footer nav links going to AR pages (14 links) | ✅ Resolved | Plan 51 |
| EN CTA links going to AR pages (3 links) | ✅ Resolved | Plan 51 |
| 404.html hreflang pointing to non-existent en/404.html | ✅ Resolved | Plan 51 |
| Canonical mismatch — .html vs clean URL (28 pages) | ✅ Resolved 2026-05-18 | Plan 54 |
| sitemap.xml URLs using .html extension | ✅ Resolved 2026-05-18 | Plan 54 |
| Schema JSON-LD url/@id/item fields using .html | ✅ Resolved 2026-05-18 | Plan 54 |
| twitter:url using .html in all 28 pages | ✅ Resolved 2026-05-18 | Plan 54 |
| LCP = 52.6s on mobile (Hero Slider images) | 🔴 Pending | Plan 53 |
| Performance Score 65/100 mobile | 🟡 Pending | Plan 53 |
| Service pages Schema missing image/priceRange/address | 🟡 Pending | Plan 53 |
| AI crawlers blocked by Cloudflare Managed robots.txt | 🟡 Pending | needs Cloudflare Dashboard — not local robots.txt |
| 11 Group B pages "Discovered - not crawled" 33+ days after Plan 54 | ✅ Mostly resolved 2026-07-09 | Live GSC now shows 26/50 indexed; only 4 pages still not indexed (see below) |
| 4 remaining unindexed pages: `services/dvr-nvr-data-recovery`, `en/services/data-recovery-saudi-arabia`, `en/services/ssd-nvme-data-recovery`, `en/services/flash-sd-data-recovery` | 🟡 Monitor | Manual indexing requested via GSC 2026-07-09 — awaiting Google reprocessing |
| Smart/curly quotes (`”` `“`) instead of straight `"` corrupted 174 characters across 43 lines in `en/index.html` footer (lines 916-983) — broke footer links (404), `footer-section`/`footer-grid` CSS classes, and `data-i18n` translation keys for real EN site visitors | ✅ Fixed and fully verified 2026-07-10 | Plan 57 — code fix verified by grep (0 remaining) AND by browser-agent visual check on local server (all 15 footer links, dark/light mode, EN↔AR toggle, console, DOM all clean). Ready for commit + deploy |
| CTR crisis: 11 indexed pages with impressions and 0 clicks (EN pages at pos 3.0–4.0) | 🔴 Pending | Plan 56 — meta title/description optimization |
| Mobile page speed ~4.2s (external report) | 🟡 Pending | Plan 56 |
| Sitemap processing error for about-lab + en/about-lab (temporary, non-blocking) | 🟡 Monitor | Plan 56 |
| Schema beyond Breadcrumbs unconfirmed (Service + FAQ not detected in GSC enhancements) | 🟡 Pending | Plan 56 |
| Internal navigation/footer links across ~30 pages still point to `.html` URLs instead of clean URLs (1349 occurrences across real + duplicate files) — not broken (redirects work), but keeps generating "Page with redirect" noise in GSC | 🟢 Optional cleanup | Deferred — large multi-file scope, needs its own plan if pursued |
| services/hdd-data-recovery indexed 2026-06-17 but 0 impressions — too new | 🟡 Monitor | checkpoint 2026-07-20 |

---

## Active Plans

| Plan | Title | Status |
|------|-------|--------|
| **37** | Service Pages Expansion | ✅ Complete |
| **38** | Content Production Prompts | ✅ Complete |
| **40** | English Service Pages Content | ✅ Complete |
| **41** | Service Page Rebuild (Pilot) | ✅ Complete |
| **43** | Content Rollout for Service Pages | ✅ Complete |
| **44** | English Site Rollout (Bilingual) | ✅ Complete |
| **46** | Bilingual Routing & Content Reconciliation | ✅ Complete |
| **47** | UI/UX Enhancements & Fat Footer | ✅ Complete |
| **48** | Internal Linking | ✅ Complete |
| **49** | Pre-Launch SEO Audit | ✅ Complete |
| **50** | Pre-Launch Fixes (v1.2.4) | ✅ Complete |
| **51** | Pre-Launch Audit v2 | ✅ Complete |
| **52** | Schema.org Entity Fix (Person-Centered) | ✅ Complete |
| **53** | Performance & Schema Improvements | 🔴 Pending — post-launch |
| **54** | Canonical Mismatch Fix — Clean URL alignment for 28 pages + sitemap (2026-05-18) | ✅ Complete |
| **55** | Indexing Status Audit — Post Plan 54 (2026-06-20) | ✅ Complete — 5 phases, output in `docs/indexing/` |
| **56** | Indexing & SEO Fix Plan — built from Plan 55 audit (CTR, page speed, schema depth, GBP, colloquial keywords) | 🔴 Pending |
| **57** | Fix — `en/index.html` footer smart-quote corruption (2026-07-09) | ✅ Complete — verified, committed (`a3dbf00`), deployed to Production, confirmed live |
| **58** | Live Google Reviews Sync — replace 21 stale hardcoded reviews (last dated 2025-01-15) + static "4.8" rating with a weekly GitHub Action. **Pivoted 2026-07-15 (v3.0.0) from Places API to Business Profile API** — developer wants zero Google Cloud billing/card linkage, so the plan now uses free OAuth 2.0 (Refresh Token) instead of a Places API key, gaining access to all ~100 real reviews (paginated) instead of just 5 | 🟡 Group 1 (OAuth setup) in progress — blocked on Google's GBP API Access Request approval (Case ID 2-9252000041078, submitted 2026-07-23, 7-10 business days) |
| **59** | Datacodex Cards Bridge — build-time injection of content cards from `datacodexlab.com/feed.json` into service pages (spec handed over 2026-09-13, v3.0.0) | 🟡 Draft — awaiting developer approval; blocked on Cloudflare settings snapshot |
| **60** | Repository Cleanup — remove Syncthing sync-conflict copies, resolve deployment branch (2026-09-13) | ✅ Complete |

### Plan 46 Progress (Bilingual Routing & Reconciliation)

| Phase | Description | Status |
|-------|-------------|--------|
| 1 | Critical Routing & Navigation Fixes | ✅ Complete |
| 2 | Page Inventory Reconciliation | ✅ Complete |
| 3 | Pilot Repair for One Damaged Approved Page | ✅ Complete |
| 4 | Rollout Repair for Remaining Pages | ✅ Complete |
| 5 | Cleanup and Documentation | ✅ Complete |

### Plan 43 Progress (Content Rollout)

| Phase | Description | Status |
|-------|-------------|--------|
| 1 | Build Basic Storage Pages (SSD, Flash/SD, Mac) | ✅ Complete |
| 2 | Build Advanced Pages (RAID, DVR, Ransomware) | ✅ Complete |
| 3 | Build Geographic Pages | ✅ Complete |
| 4 | Build Special Pages (About Lab, Privacy) | ✅ Complete |
| 5 | Internal Linking & Sitemap | ✅ Complete |

### Plan 37 Progress

| Phase | Description | Status |
|-------|-------------|--------|
| 1 | Arabic Content Production | ✅ Complete |
| 2 | English Content Localization | ✅ Complete |
| 3 | Setup & Template | ✅ Complete |
| 4 | Build 14 HTML Pages | ✅ Complete |
| 5 | Schema Cleanup | ✅ Complete |
| 6 | Cross-Linking | ✅ Complete |
| 7 | Sitemap + Navigation | ✅ Complete |
| 8 | Testing & Verification | ⬜ Not started |

### Plan 41 Progress (Pilot)

| Phase | Description | Status |
|-------|-------------|--------|
| 1 | CSS Enhancement | ✅ Complete |
| 2 | HTML Content Rebuild | ✅ Complete |
| 3 | QA & Polish | ✅ Complete |

### Plan 43 Phase 3 Decision

Phase 3 geographic rollout was completed with the approved broad-targeting strategy:

| Page | Strategy | Status |
|------|----------|--------|
| `services/data-recovery-makkah.html` | Dedicated Makkah page with `Makkah / Mecca` English-title targeting | ✅ Rebuilt |
| `services/data-recovery-saudi-arabia.html` | Broad Saudi Arabia page targeting Riyadh, Dammam, Madinah, and all listed cities | ✅ Rebuilt |

Dedicated duplicate pages for Riyadh, Madinah, and Dammam were intentionally not created because the approved content source provides one national Saudi Arabia article covering these cities together.

### Plan 43 Phase 4 Decision

Phase 4 special-page rollout was completed at the root paths approved by the decisions report:

| Page | Strategy | Status |
|------|----------|--------|
| `about-lab.html` | Category C overview page focused on lab technology and tools | ✅ Rebuilt |
| `privacy-policy.html` | Category D calm policy page using WebPage schema and no FAQ | ✅ Rebuilt |

Plan 43 remains Arabic-only; English content, `/en/` structure, and real hreflang tags are deferred to Plan 44.

### Plan 43 Phase 5 Decision

Phase 5 internal linking and sitemap rollout was completed for the approved Arabic Plan 43 scope:

| Deliverable | Path | Status |
|-------------|------|--------|
| 14 approved page links in homepage services section | `index.html` | ✅ Added |
| About Lab and Privacy Policy footer links | `index.html` | ✅ Verified |
| Arabic Plan 43 URLs in sitemap | `sitemap.xml` | ✅ Updated |
| LocalBusiness schema across 10 service pages | `services/*.html` | ✅ Verified |
| Plan 44 hreflang placeholder comments | page headers | ✅ Added |

No real hreflang tags, `/en/` URLs, or English rollout pages were added in Plan 43.

### Content Production Status (Phase 1-2)

| File | Language | Status |
|------|----------|--------|
| `plans/38-ar-service-pages-content.md` | Arabic | ✅ Ready — 14/14 pages |
| `plans/40-en-service-pages-content.md` | English | ✅ Ready — 14/14 pages |

### Phase 3 Deliverables

| Deliverable | Path | Status |
|-------------|------|--------|
| Service pages directory | `services/` | ✅ Created |
| Base service page template | `services/service-page-template.html` | ✅ Created |
| Datacodex cross-link draft map | `docs/datacodex-cross-link-map.md` | ✅ Created |

### Phase 4 Deliverables

| Deliverable | Path | Status |
|-------------|------|--------|
| Service landing pages | `services/*.html` | ✅ 12 pages created |
| Privacy trust page | `privacy-policy.html` | ✅ Created |
| Lab technology trust page | `about-lab.html` | ✅ Created |
| Service page language/meta script | `assets/js/service-page.js` | ✅ Created |
| Service page translation keys | `lang/ar.json`, `lang/en.json` | ✅ Added |
| Homepage service card links | `index.html` | ✅ Updated |

### Phase 5 Deliverables

| Deliverable | Path | Status |
|-------------|------|--------|
| Removed hardcoded ratings | `index.html`, `seo/structured-data.json` | ✅ Complete |
| Added Datacodex `@id` entity | `index.html`, `seo/structured-data.json` | ✅ Complete |
| Linked `parentOrganization` by `@id` | `index.html`, `seo/structured-data.json` | ✅ Complete |
| Checked hreflang query params | `index.html` | ✅ No cleanup needed |

### Phase 6 Deliverables

| Deliverable | Path | Status |
|-------------|------|--------|
| Confirmed Datacodex forward links | `docs/datacodex-cross-link-map.md` | ✅ Complete |
| Updated service-page Datacodex links | `services/*.html`, `privacy-policy.html`, `about-lab.html` | ✅ Complete |
| Detailed service offer catalog | `index.html`, `seo/structured-data.json` | ✅ 14 URLs added |
| Reverse Datacodex CTA targets | `docs/datacodex-cross-link-map.md` | ✅ Prepared |

### Phase 7 Deliverables

| Deliverable | Path | Status |
|-------------|------|--------|
| Updated `sitemap.xml` with 14 new URLs | `sitemap.xml` | ✅ Complete |
| Services dropdown added to Navbar | `index.html`, `assets/css/layout.css` | ✅ Complete |
| Services & Trust links added to Footer | `index.html` | ✅ Complete |

---

## Strategic Decisions (from Review 01)

| Decision | Status |
|----------|--------|
| HDD split into internal + external pages | ✅ Approved |
| Separate pages for Laptop, Mac, Ransomware, Database | ✅ Approved |
| RAID + NAS combined in one page | ✅ Approved |
| Privacy page in Footer (not service cards) | ✅ Approved |
| Makkah geographic page included in Plan 37 | ✅ Approved |
| Madinah deferred to future plan | ✅ Approved |
| "All Saudi Cities" general page | ✅ Approved |
| Bilingual content (non-literal translation) | ✅ Approved |
| Service cards on homepage become clickable | ✅ Approved |

---

## Project History

| Date | Event |
|------|-------|
| 2025 | Website originally developed as part of Datacodex project |
| 2026-04 | SEO audits (Plans 34-36), indexing health fix (Plans 39-40) |
| 2026-04-29 | Plan 37 created — service pages expansion |
| 2026-05-01 | Plan 37 rewritten (6 → 14 pages), keyword research completed |
| 2026-05-01 | **Project separated from Datacodex** into `Alfareslab_2026` |
| 2026-05-04 | Plan 46 complete — bilingual routing reconciled |
| 2026-05-05 | Plan 47 complete — UI/UX + Fat Footer redesign (v1.2.4) |
| 2026-05-05 | Plan 50 complete — pre-launch critical fixes |
| 2026-05-06 | Plan 51 complete — pre-launch audit v2 (EN links, 404 hreflang) |
| 2026-05-06 | Plan 52 complete — Schema.org entity fix (Person-Centered) |
| 2026-05-06 | Social media footer updated across all 30 pages (TikTok, Instagram, Facebook SVG) |
| 2026-05-06 | **Site launched** — Cloudflare Pages deployment confirmed |
| 2026-05-06 | Indexing request submitted to GSC — 3 pages + sitemap |
| 2026-05-11 | GSC email received — 33 pages not indexed |
| 2026-05-17 | **SEO Indexing Audit** — 9 phases — root cause identified: Canonical Mismatch (.html vs clean URL) |
| 2026-05-17 | Confirmed: Cloudflare Pages "Pretty URLs" strips .html → 308 redirect to clean URL (built-in, non-disableable) |
| 2026-05-17 | All 28 non-homepage pages had canonical/hreflang/sitemap pointing to .html → Google refused to index |
| 2026-05-17 | Audit report written to: `docs/Google_indexing/03-alfareslab.com SEO Indexing Audit_2026-5-17` |
| 2026-05-18 | **Plan 54 executed** — canonical mismatch fixed across 30 HTML files + sitemap.xml |
| 2026-05-18 | Post-deploy verification: curl ✅, GSC URL Inspection ✅, Rich Results Test ✅, hreflang checker ✅ |
| 2026-05-18 | sitemap.xml resubmitted to GSC — indexing requested for 3 key pages |
| 2026-05-18 | **v1.2.5 deployed** — commit e815543 → branch main |
| 2026-06-20 | **Plan 55 complete** — 5-phase indexing audit: GSC coverage + performance + URL inspection + external SEO report analysis + gap analysis |
| 2026-06-20 | Audit result: 17/28 pages indexed — 11 Group B pages "Discovered not crawled" — 6 total clicks, 703 impressions across site |
| 2026-06-20 | Central question answered: manual GSC request (Group A) = 100% indexing rate vs 56% for sitemap-only (Group B) |
| 2026-06-20 | External SEO report analyzed (`alfares_seo_ux_report_By z ai_2026-06-20.pdf`) — key new angles: GBP, competitors, CTR, page speed |
| 2026-06-20 | Plan 56 inputs ready in `docs/indexing/05-gap-analysis-2026-06-20.md` |
| ~2026-06-30 | Google sent GSC email confirming a large part of the site was fixed and accepted for indexing (developer-reported, later confirmed by live data) |
| 2026-07-09 | New GSC Coverage Drilldown export downloaded (`docs/Google_indexing/alfareslab.com-Coverage-Drilldown-2026-07-09/`) — single-issue export for "Crawled - not indexed" only |
| 2026-07-09 | Follow-up audit written: `docs/indexing/06-audit-2026-07-09-coverage-followup.md` — found CSV export too narrow to close Plan 55 P0 items |
| 2026-07-09 | Developer pasted full live GSC "Page Indexing" report (`docs/Google_indexing/04-status_2026-07-09.md`) — full picture: 26 indexed / 24 non-indexed across 50 known URLs |
| 2026-07-09 | Analysis of full report: of the 24 non-indexed, 20 are benign (12 legacy `.html`/www redirects, 2 `?lang=` canonical duplicates, 5 malformed external-origin 404 URLs with embedded quote characters) — only 4 real pages remain unindexed |
| 2026-07-09 | Confirmed `en/services/dvr-nvr-data-recovery` (the top Plan 55 P0 item) is now indexed since 2026-06-22 — Plan 55's main concern is resolved |
| 2026-07-09 | Manual indexing requested via GSC URL Inspection for the 4 remaining pages: `services/dvr-nvr-data-recovery`, `en/services/data-recovery-saudi-arabia`, `en/services/ssd-nvme-data-recovery`, `en/services/flash-sd-data-recovery` |
| 2026-07-09 | Root cause found for the 5 malformed 404 URLs: `en/index.html` footer (lines ~916-983) uses smart/curly quotes (`”` `“`) instead of straight `"` in 43 HTML attributes — verified as a live bug (not present in current or pre-Plan-54 sitemap/hreflang), confined to this one file — breaks real footer links, CSS classes, and `data-i18n` keys for EN visitors |
| 2026-07-09 | Plan 57 drafted for the footer quote-corruption fix — awaiting developer approval before execution |
| 2026-07-10 | Compiled `docs/indexing/00-seo-indexing-master-playbook.md` — full indexing/SEO history from Plan 37 onward, sourced from 18 plan/audit files, including previously-undocumented facts: the smart-quote footer bug was first flagged (as cosmetic) in Plan 51 and investigated-but-not-found in Plan 54, and two separate pre-launch audits (49, 51) both missed the canonical/`.html` mismatch because they compared file-to-file instead of against live HTTP behavior |
| 2026-07-10 | Added `master-constitution.md` § 5.6 "Proven-Baseline Rule" to govern future indexing work now that the majority of core pages are confirmed indexed |
| 2026-07-10 | Added `master-constitution.md` §§ 5.7-5.8, 7.1, and a Datacodex-inheritance note under §8 — audit-verification rule, manual-indexing preference, no-smart-quotes rule, and inherited-strategy-doc caution, all derived from the master playbook |
| 2026-07-10 | **Plan 57 executed** — replaced 174 smart/curly quote characters (43 lines) with straight ASCII quotes in `en/index.html`'s footer (lines 916-983) via a scoped find-and-replace; verified 0 remaining in the file |
| 2026-07-10 | **Plan 57 visually verified** — browser agent tested the fix on a local server: all 15 footer links resolve correctly, dark/light mode transitions cleanly, EN↔AR toggle translates all footer text with no leftover wrong-language text, no console errors, and DOM inspection confirmed zero remaining curly quotes |
| 2026-07-10 | **Plan 57 committed and deployed** — commit `a3dbf00` pushed to `origin/master` and `origin/main` (Cloudflare Pages production branch); confirmed live via direct HTTP check on `alfareslab.com/en/` (0 curly quotes, footer links return 200) |
| 2026-07-10 | Identified that the homepage reviews section (`assets/js/reviews.js`) shows 21 hardcoded reviews dated no later than 2025-01-15, plus a static "4.8" aggregate rating text not wired to the unused `calculateAggregateRating()` function — a credibility problem since the content looks abandoned for 1.5+ years |
| 2026-07-10 | Drafted **Plan 58** (Live Google Reviews Sync) — developer chose the scheduled-automation approach (GitHub Action pulling Google Places API data periodically) over live client-side API calls, a paid third-party widget, or manual periodic updates. Kept as a separate plan from Plan 53 rather than merging/renumbering, per the "one concern per plan" principle |
| 2026-07-23 | **Plan 58 Group 1 started** — Google Cloud project `368153067603` set up: enabled My Business Account Management API + My Business Business Information API, configured OAuth consent screen (Branding/Audience/Data Access with `business.manage` scope, Testing mode, test user `a7medsaleh99@gmail.com`), created Desktop OAuth Client ("Reviews Sync Script") |
| 2026-07-23 | Downloaded `client_secret_*.json` initially landed inside the repo at `docs/Google_indexing/` (untracked, no `.gitignore` existed) — moved out of the repo entirely (to a local-only folder) as an immediate precaution to prevent the OAuth Client Secret ever entering git history |
| 2026-07-23 | At developer's request, added root `.gitignore` (`/secrets/`) and moved the OAuth secrets + helper scripts back inside the repo to `secrets/reviews-sync/` — recoverable as part of the project instead of living only outside it, while still fully excluded from git. Added `check_google_approval.bat` so the developer can re-run the access test independently at any time without needing the assistant | |
| 2026-07-23 | Ran a one-time local OAuth flow (`get_refresh_token.py`) — obtained and stored (outside repo) a Refresh Token authorized by `a7medsaleh99@gmail.com` for scope `business.manage` |
| 2026-07-23 | Ran diagnostic script `test_reviews_access.py` (Review Gate 1 check) — `accounts.list` returned `429 RESOURCE_EXHAUSTED`, quota limit value `0`. This is the expected/documented risk in Plan 58 (note #2): Business Profile API access requires a separate Google approval beyond just enabling the API |
| 2026-07-23 | Submitted Google's GBP API Access Request Form for project `368153067603` — **Case ID 2-9252000041078**, expected review time 7-10 business days. Plan 58 Group 1 is now blocked waiting on this approval before Review Gate 1 can be confirmed and Group 2 (sync script) can start |

---

## Account Ownership (Important — Plan 58 and beyond)

> ⚠️ **Two separate Google accounts are involved in Plan 58 — do not confuse them:**

| Account | Role |
|---------|------|
| `datacodexlab@gmail.com` | Owns the **Google Cloud project** (`368153067603`) used for the OAuth Client / APIs (My Business Account Management, My Business Business Information). This is the developer's own dev/agency account — used purely as the technical vehicle for the API integration. |
| `a7medsaleh99@gmail.com` | Has actual **ownership/management access to the Al-Fares Lab Google Business Profile** listing itself (the real business data — reviews, location info). This is the account that must sign in during the OAuth consent flow, was added as the Testing test user, and submitted the GBP API Access Request (Case ID 2-9252000041078). |

**Why this matters:** the Cloud project and the OAuth Client belong to one account, but the actual business data being accessed belongs to a different account. Any future work on Plan 58 (or re-authorization if the refresh token expires) must use `a7medsaleh99@gmail.com` to sign in — not `datacodexlab@gmail.com` — even though the Google Cloud Console itself is managed under `datacodexlab@gmail.com`.

---

## Technical Notes

- **No build step** — pure static site, deployed as-is to Cloudflare Pages
- **No npm/node dependencies** — only Swiper.js loaded locally
- **Language switching** — handled by JS reading from `lang/*.json` files
- **Service page template** — uses `<base href="../">` so nested service pages can reuse root assets and translation files without changing `assets/js/main.js`
- **Service pages** — use `assets/js/service-page.js` to toggle bilingual page content and page-level meta titles/descriptions
- **Schema entity model** — Al-Fares is a standalone `LocalBusiness`; linked to Ahmed (Person) via `employee: {"@id": "https://datacodexlab.com/#ahmed-saleh"}`; no `parentOrganization`, no `department`, no `sameAs` between the two sites
- **Cross-linking** — Al-Fares pages link to confirmed Datacodex URLs; reverse Datacodex CTA targets are documented because the Datacodex source is outside this workspace
- **Theme switching** — CSS variables toggled by JS (dark/light)
- **Deployment** — push to repo triggers Cloudflare Pages auto-deploy
- **Cloudflare Pretty URLs** — built-in behavior: strips `.html` from all URLs and 308-redirects to clean URL. Cannot be disabled via API or config. Canonical tags MUST point to clean URLs (without .html) to match what Cloudflare actually serves with 200 OK
- **Clean URL pattern** — `about-lab.html` served at `/about-lab` (no trailing slash). Trailing slash (`/about-lab/`) also 308-redirects to `/about-lab`. So canonical = no .html, no trailing slash (except homepage `/` and `/en/`)
- **URL consistency rule** — any new page added must have canonical/hreflang/og:url/twitter:url/sitemap pointing to clean URL format: `https://alfareslab.com/page-name` (no .html, no trailing slash)
- **Google indexing status** — as of 2026-06-20 (Plan 55 audit): 17 pages indexed (live URL inspection), 11 pages "Discovered - currently not indexed". Full details in `docs/indexing/01-gsc-coverage-2026-06-20.md`
- **GSC audit file** — full 9-phase audit at: `docs/Google_indexing/03-alfareslab.com SEO Indexing Audit_2026-5-17`
- **Plan 55 audit files** — `docs/indexing/01` (coverage) · `02` (performance) · `03` (URL inspection) · `04` (external SEO report analysis) · `05` (gap analysis + Plan 56 inputs)
- **External SEO report** — `docs/indexing/alfares_seo_ux_report_By z ai_2026-06-20.pdf` — neutral third-party audit, analyzed in Phase 4
- **Next action (developer)** — visually verify `en/index.html` footer in a browser (links, CSS layout, AR/EN toggle text) after the Plan 57 code fix, then commit and deploy
- **Next action (monitor)** — check GSC in a few days to confirm the 4 manually-requested pages (dvr-nvr AR, en/saudi-arabia, en/ssd-nvme, en/flash-sd) move to indexed
- **Bug isolation note** — the smart-quote bug was confined to `en/index.html`; verified via full-repo grep (101 files checked) that no other page carried the same corruption; fixed 2026-07-10
- **Next action (Plan 58, blocked)** — waiting on Google's GBP API Access Request approval (Case ID 2-9252000041078, submitted 2026-07-23, ~7-10 business days). Once approved, re-run `test_reviews_access.py` (see below) to confirm quota opened and reviews return, closing Review Gate 1
- **Plan 58 local secrets (git-ignored, not committed)** — OAuth `client_secret.json`, `refresh_token.txt`, the one-time helper scripts `get_refresh_token.py` / `test_reviews_access.py`, and `check_google_approval.bat` (double-click to re-test API access) live at `secrets/reviews-sync/` inside this repo, kept out of git by the new root `.gitignore` (`/secrets/`) added 2026-07-23. Moved back inside the project (from an earlier external-only location) so a deleted local folder can't lose the credentials with no project-tied copy

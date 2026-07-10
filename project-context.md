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
> **Next in queue after Plan 57 fully closes:** return to discuss and formalize Plan 53 (Hero image WebP conversion + `fetchpriority` + render-blocking CSS review + missing LocalBusiness Schema fields on service pages) — currently a draft with no execution steps taken, queued for discussion once Plan 57 is verified and deployed.
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
| **57** | Fix — `en/index.html` footer smart-quote corruption (2026-07-09) | ✅ Code applied 2026-07-10 — pending browser verification + deploy |

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
| 2026-07-10 | **Plan 57 visually verified** — browser agent tested the fix on a local server: all 15 footer links resolve correctly, dark/light mode transitions cleanly, EN↔AR toggle translates all footer text with no leftover wrong-language text, no console errors, and DOM inspection confirmed zero remaining curly quotes. Plan 57 is now fully closed — only `git commit` + deploy remain |

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

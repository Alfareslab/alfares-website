# 🧠 Project Context — Al-Fares Lab Website
> **Last Updated:** 2026-05-18
> **Current Version:** v1.2.5
> **Status:** 🚀 LIVE — Indexing request submitted to Google Search Console

---

## Current State

Al-Fares Lab website (`alfareslab.com`) is a static bilingual (AR + EN) single-page website for a data recovery and computer repair center in Jeddah, Saudi Arabia. The site was originally developed as part of the Datacodex project and has now been separated into its own independent project (`Alfareslab_2026`) for better maintainability as it grows.

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
| Rich Results Test | ✅ 3 valid elements (FAQ, LocalBusiness, Organization) |

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
| LCP = 52.6s on mobile (Hero Slider images) | 🔴 Pending | Plan 53 |
| Performance Score 65/100 mobile | 🟡 Pending | Plan 53 |
| Service pages Schema missing image/priceRange/address | 🟡 Pending | Plan 53 |

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

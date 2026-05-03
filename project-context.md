# 🧠 Project Context — Al-Fares Lab Website
> **Last Updated:** 2026-05-03
> **Current Version:** v1.1.0 (in progress)
> **Status:** 🟡 Active development (Plan 43 — Phase 3 next)

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
| Schema.org markup (ComputerStore, FAQPage) | ✅ Working |
| Cloudflare hosting + SSL | ✅ Active |
| Google Search Console | ✅ Verified |
| Google Analytics 4 | ✅ Tracking |
| Sitemap + robots.txt | ✅ Submitted |
| Custom 404 page | ✅ Working |
| Indexing health (Plan 40 fixes) | ✅ Fixed |

### Known Issues ⚠️

| Issue | Severity | Plan |
|-------|----------|------|
| Hardcoded `AggregateRating` in Schema | ✅ Resolved | Plan 37, Phase 5 |
| `parentOrganization` uses inline object instead of `@id` ref | ✅ Resolved | Plan 37, Phase 5 |
| hreflang tags with `?lang=` param | ✅ Not present / clean | Plan 37, Phase 5 |
| Single-page site — no dedicated service pages | ✅ Resolved | Plan 37, Phase 4 |

---

## Active Plans

| Plan | Title | Status | Phase |
|------|-------|--------|-------|
| **37** | Service Pages Expansion | 🟡 Active | Phase 7 next |
| **38** | Content Production Prompts | ✅ Complete | 14/14 Arabic pages done |
| **40** | English Service Pages Content | ✅ Complete | 14/14 English pages done |
| **41** | Service Page Rebuild (Pilot) | ✅ Complete | Pilot page done |
| **43** | Content Rollout for Service Pages | 🟡 Active | Phase 3 next |

### Plan 43 Progress (Content Rollout)

| Phase | Description | Status |
|-------|-------------|--------|
| 1 | Build Basic Storage Pages (SSD, Flash/SD, Mac) | ✅ Complete |
| 2 | Build Advanced Pages (RAID, DVR, Ransomware) | ✅ Complete |
| 3 | Build Geographic Pages | ⬜ Not started |
| 4 | Build Special Pages (About Lab, Privacy) | ⬜ Not started |
| 5 | Internal Linking & Sitemap | ⬜ Not started |

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

---

## Technical Notes

- **No build step** — pure static site, deployed as-is to Cloudflare Pages
- **No npm/node dependencies** — only Swiper.js loaded locally
- **Language switching** — handled by JS reading from `lang/*.json` files
- **Service page template** — uses `<base href="../">` so nested service pages can reuse root assets and translation files without changing `assets/js/main.js`
- **Service pages** — use `assets/js/service-page.js` to toggle bilingual page content and page-level meta titles/descriptions
- **Schema cleanup** — hardcoded `AggregateRating` removed; Datacodex is linked through `https://datacodexlab.com/#organization`
- **Cross-linking** — Al-Fares pages link to confirmed Datacodex URLs; reverse Datacodex CTA targets are documented because the Datacodex source is outside this workspace
- **Theme switching** — CSS variables toggled by JS (dark/light)
- **Deployment** — push to repo triggers Cloudflare Pages auto-deploy

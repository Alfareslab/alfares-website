# 📋 Changelog — Al-Fares Lab Website

> **Format:** [Semantic Versioning](https://semver.org/)
> **Convention:** MAJOR.MINOR.PATCH

---

## [v1.0.2] — 2026-04 (Inherited)

> This version was inherited from the Datacodex project when the Al-Fares website was separated into its own independent project on 2026-05-01.

### Summary
- Bug fixes and stability improvements from original development
- SEO audit fixes (Plans 34-36)
- Indexing health fixes (Plans 39-40)
- Full Schema.org implementation (ComputerStore, FAQPage)
- Bilingual support (AR + EN)
- Google Reviews integration
- Hero slider with Swiper.js

### Known Issues at Time of Separation
- Hardcoded `AggregateRating` in Schema — resolved in Plan 37 Phase 5
- `parentOrganization` uses inline object instead of `@id` reference — resolved in Plan 37 Phase 5
- hreflang tags with `?lang=` parameter — verified clean in Plan 37 Phase 5

---

## [v1.1.0] — In Progress (Plan 37)

### 2026-05-02 — Phase 3: Setup & Template Preparation
- Created `services/` as the workspace for Plan 37 service pages.
- Added `services/service-page-template.html` as the base HTML template for Phase 4 page production.
- Added `docs/datacodex-cross-link-map.md` with a draft service-to-Datacodex linking map.
- Kept Schema cleanup, sitemap updates, navigation changes, and the 14 final HTML pages out of this phase.

### 2026-05-02 — Phase 4: Build Service Pages
- Created 12 service/geographic pages under `services/`.
- Created `privacy-policy.html` and `about-lab.html` as trust pages.
- Added `assets/js/service-page.js` to handle bilingual page content visibility and page-level metadata switching.
- Added `servicePages` title keys to `lang/ar.json` and `lang/en.json`.
- Updated homepage service card CTAs to point to relevant service pages.
- Added per-page Service, FAQPage, and BreadcrumbList JSON-LD blocks.
- Kept Schema cleanup, sitemap updates, global navigation changes, and Phase 5+ work out of this phase.

### 2026-05-02 — Phase 5: Schema Cleanup
- Removed all hardcoded `AggregateRating` / `aggregateRating` entries from `index.html`.
- Removed the hardcoded `AggregateRating` block from `seo/structured-data.json`.
- Added the Datacodex organization entity with `@id` set to `https://datacodexlab.com/#organization`.
- Updated Al-Fares `parentOrganization` to reference Datacodex by `@id`.
- Verified that `index.html` has no `?lang=ar` / `?lang=en` hreflang entries to clean.

### 2026-05-02 — Phase 6: Cross-Linking
- Updated all Al-Fares service and trust pages to link to confirmed Datacodex Arabic and English URLs.
- Expanded `hasOfferCatalog` in `index.html` and `seo/structured-data.json` to include 14 service/trust page URLs.
- Updated `docs/datacodex-cross-link-map.md` with confirmed forward links and reverse Datacodex CTA targets.
- Verified all selected Datacodex URLs return HTTP 200.
- Datacodex source files are not present in this workspace, so reverse CTA implementation is documented for the Datacodex repository.

### 2026-05-02 — Phase 7: Sitemap + Navigation
- Added 14 new service and trust page URLs to `sitemap.xml` with appropriate priority and change frequency settings.
- Implemented a CSS-based responsive dropdown menu in the navigation bar (`index.html`, `assets/css/layout.css`) to link the new service pages.
- Added a "Services & Policies" section to the footer (`index.html`) with direct links to service categories and trust pages.

### 2026-05-02 — Plan 41: Service Page Rebuild (Pilot)
- Introduced 8 new UI CSS components specifically for service pages (Breadcrumb, Intro, Methodology, Highlight Box, Message Card, FAQ, CTA Block, Reference Card).
- Fully implemented bilingual tech-content (Arabic & English) on the `flash-sd-data-recovery.html` pilot page.
- Added 4 specialized SEO questions in Schema JSON-LD.
- Passed full QA on UI components, Dark Mode toggle, RTL/LTR translation switching, and mobile viewport limits.

### Planned Changes
- Add 10 service landing pages (HDD, External HDD, SSD, Laptop, Mac, RAID/NAS, Flash/SD, DVR/NVR, Ransomware, Database)
- Add 2 geographic pages (Makkah, All Saudi Cities)
- Add 2 trust pages (Privacy Policy, About Lab)
- Remove hardcoded AggregateRating from Schema
- Add @id-based entity linking
- Update navigation with services dropdown
- Update sitemap with 14 new URLs
- Make homepage service cards clickable

---

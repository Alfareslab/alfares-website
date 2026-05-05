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

### 2026-05-03 — Plan 43: Phase 1 (Content Rollout)
- Generated `ssd-data-recovery.html`, `flash-sd-recovery.html`, and `mac-data-recovery.html` based on the tested master template (`hdd-data-recovery.html`).
- Injected specific Arabic content for each service, covering the 7-section layout (Hero, Symptoms, Methodology, Tools, FAQ, CTA).
- Updated SEO metadata (Title, Description, Canonical tags) tailored for each storage media.
- Implemented valid Schema.org markup (Service, FAQPage, BreadcrumbList) for each specific service page.

### 2026-05-03 — Plan 43: Phase 2 (Advanced Service Pages)
- Generated `raid-server-recovery.html`, `dvr-data-recovery.html`, and `ransomware-database-recovery.html`.
- Combined Ransomware and Database recovery into a single high-value page to capture unified intent.
- Tailored RAID content to emphasize server recovery and NAS data protection in Jeddah.
- Implemented specific Schema.org JSON-LD for RAID (4 FAQs), DVR (2 FAQs), and Ransomware (3 FAQs).
- Verified canonical integrity and breadcrumb consistency across all generated files.

### 2026-05-03 — Plan 43: Phase 3 (Geographic Pages)
- Rebuilt `services/data-recovery-makkah.html` from the approved service-page template using the full Makkah content from Plan 38.
- Added `Makkah / Mecca` targeting to the English page metadata while keeping `data-recovery-makkah.html` as the canonical URL.
- Rebuilt `services/data-recovery-saudi-arabia.html` as the broad national geographic page targeting Riyadh, Dammam, Madinah, and all listed Saudi cities.
- Updated Service, FAQPage, and BreadcrumbList JSON-LD for both geographic pages.
- Avoided creating duplicate city pages for Riyadh, Madinah, and Dammam because the approved content source provides one national Saudi Arabia page for those targets.

### 2026-05-03 — Plan 43: Phase 4 (Special Pages)
- Rebuilt `about-lab.html` at the project root as a Category C overview page focused on clean room, PC-3000, and micro-soldering capabilities.
- Rebuilt `privacy-policy.html` at the project root as a Category D policy page with calm informational content.
- Replaced incorrect Service/FAQ schema on the privacy page with WebPage + BreadcrumbList JSON-LD.
- Kept Phase 4 Arabic-only and did not add real hreflang tags, index links, or sitemap changes.

### 2026-05-03 — Plan 43: Phase 5 (Internal Linking and Sitemap)
- Added the approved 14 Arabic Plan 43 page links to the homepage services section.
- Verified About Lab and Privacy Policy footer links, and refreshed `sitemap.xml` for the approved Arabic URLs only.
- Added `LocalBusiness` JSON-LD to the 10 approved service pages alongside Service, FAQPage, and BreadcrumbList.
- Added the Plan 44 hreflang placeholder comment to page headers without adding real hreflang tags or `/en/` URLs.
- Updated the visible site version to `v1.1.0`.

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

## [1.2.1] - 2026-05-04

### Added
- Created `temp_archive/` directory for safe deprecation testing.

### Changed
- **Plan 46 Completed (Bilingual Routing & Content Reconciliation).**
- Replaced `localStorage` language toggling with reliable URL path-based logic to prevent routing loops.
- Standardized navigation elements (`ServicesDropdown`, `Footer`) across all pages to ensure consistent cross-language routing.
- Reconciled `sitemap.xml` to include exactly 15 valid bilingual page pairs, removing deprecated slugs.
- Safely relocated 16 deprecated files and templates to `temp_archive/` to test website integrity without them.

## [1.2.0] - 2026-05-03 (Plan 44: English Bilingual Rollout)

### Plan 44: Phase 1 — English Service Pages (SSD, External HDD)
- Created `en/services/ssd-data-recovery.html` (with full English content from Plan 40).
- Created reference page structure for `en/services/` directory.

### Plan 44: Phase 2 — English Service Pages (7 pages)
- Created 7 additional English service pages under `en/services/`:
  - `hdd-data-recovery.html`, `external-hdd-data-recovery.html`, `laptop-pc-data-recovery.html`
  - `mac-data-recovery.html`, `raid-nas-data-recovery.html`, `flash-sd-data-recovery.html`
  - `dvr-nvr-data-recovery.html`, `ransomware-data-recovery.html`, `database-erp-recovery.html`
- All pages include canonical, bidirectional hreflang (ar/en/x-default), Schema.org Service + FAQ + Breadcrumb.

### Plan 44: Phase 3 — Geographic English Pages
- Created `en/services/data-recovery-makkah.html` and `en/services/data-recovery-saudi-arabia.html`.

### Plan 44: Phase 4 — Special English Pages
- Created `en/about-lab.html` (Organization schema) and `en/privacy-policy.html` (WebPage schema).
- Footer links to both trust pages included in all English service pages.

### Plan 44: Phase 5 — Bilingual Infrastructure (Final)
- Injected real bidirectional hreflang tags (ar, en, x-default) into all 15 Arabic source pages replacing placeholder comments.
- Rebuilt `sitemap.xml` with full xhtml:link annotations for all 15 AR + 15 EN URL pairs (30 entries total).
- Created `en/index.html` — English homepage mirroring `index.html` with corrected nav/footer links and English fallback text.
- Updated `assets/js/main.js` `toggleLanguage()` to redirect to physical AR/EN counterpart pages instead of in-page lang swap.
- Language toggle button shows "AR" on EN pages and "EN" on AR pages.
- Bumped visible version from `v1.1.0` → `v1.2.0`.



---

## [v1.2.4] — 2026-05-04 (Plan 47)

### Summary
- Comprehensive UI/UX redesign of Header and Footer.
- Implemented "Fat Footer" with 4-column grid layout for better service discoverability.
- Upgraded Desktop Header with dynamic Logo support (Light/Dark themes).
- Standardized UI Controls (Toggles) with unified `.icon-btn` styling.
- Added Navigation CTA button ("Contact Us") for improved conversion.
- Removed redundant "Service Directory" section from homepage (integrated into footer).
- Fixed "Directions" button localization bug in Hero Slider.
- Enforced `white-space: nowrap` on navigation links to prevent layout breaking.
- Updated visible version to `v1.2.4` across all pages.

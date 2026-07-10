# 📁 Project Key — Al-Fares Lab Website
> **Version:** 1.2.5
> **Last Updated:** 2026-07-09
> **Total Files:** ~106 (excluding .git)

---

## Project Overview

| Property | Value |
|----------|-------|
| Name | Al-Fares Lab — Data Recovery & Computer Repair |
| Domain | `alfareslab.com` |
| Type | Static bilingual website (HTML/CSS/JS) |
| Hosting | Cloudflare Pages |
| Current Version | v1.2.5 |

---

## Directory Structure

```
Alfareslab_2026/                          ← Project root
│
├── 📜 master-constitution.md             ← Project constitution and rules
├── 📁 project-key.md                     ← This file — file index
├── 🧠 project-context.md                 ← Living project memory
├── 📋 changelog.md                       ← Version history
│
├── 🌐 index.html                         ← Homepage (main page — ~880 lines)
├── ❌ 404.html                            ← Custom error page
├── 🔐 privacy-policy.html                ← Privacy & confidentiality trust page
├── 🧪 about-lab.html                     ← Lab technology trust page
├── 🖼️ alfares_logo.png                   ← Site logo
├── 📱 manifest.json                      ← PWA manifest
├── 🤖 robots.txt                         ← Search engine crawl rules
├── 🤖 llms.txt                           ← LLM crawler guidance
├── 🗺️ sitemap.xml                        ← XML sitemap for search engines
├── 🔒 _headers                           ← Cloudflare custom headers
├── 📄 .env.example                       ← Environment variables template
├── 📄 README.md                          ← Project overview
├── 📄 DEPLOYMENT.md                      ← Deployment guide
│
├── 📂 assets/
│   ├── 📂 css/
│   │   ├── base.css                      ← Reset, variables, typography
│   │   ├── components.css                ← Reusable component styles
│   │   ├── layout.css                    ← Page layout and grid
│   │   └── hero-slider.css               ← Hero carousel styles
│   ├── 📂 js/
│   │   ├── main.js                       ← Core logic (lang toggle, theme, nav)
│   │   ├── service-page.js               ← Service page content/meta language handling
│   │   ├── hero-slider.js                ← Hero carousel initialization
│   │   ├── reviews.js                    ← Google reviews integration
│   │   └── tiktok.js                     ← ⚠️ DELETED 2026-05-06 (orphaned file)
│   ├── 📂 images/
│   │   └── 📂 hero-slider/              ← Hero carousel images (5 slides)
│   └── 📂 vendor/
│       └── 📂 swiper/                    ← Swiper.js (local copy)
│           ├── swiper-bundle.min.css
│           └── swiper-bundle.min.js
│
├── 📂 lang/                              ← Translation files
│   ├── ar.json                           ← Arabic translations (~200 keys)
│   └── en.json                           ← English translations (~200 keys)
│
├── 📂 seo/
│   └── structured-data.json              ← Schema.org JSON-LD templates (Plan 37 Phase 6 offer catalog)
│
├── 📂 services/                          ← Service pages workspace (Plan 37)
│   ├── hdd-data-recovery.html            ← Internal HDD data recovery page
│   ├── external-hdd-data-recovery.html   ← External HDD data recovery page
│   ├── ssd-nvme-data-recovery.html       ← SSD / NVMe data recovery page
│   ├── laptop-pc-data-recovery.html      ← Laptop / PC data recovery page
│   ├── mac-data-recovery.html            ← Mac data recovery page
│   ├── raid-nas-data-recovery.html       ← RAID / NAS recovery page
│   ├── flash-sd-data-recovery.html       ← Flash / SD card recovery page
│   ├── dvr-nvr-data-recovery.html        ← DVR / NVR recovery page
│   ├── ransomware-data-recovery.html     ← Ransomware recovery page
│   ├── database-erp-recovery.html        ← Database / ERP recovery page
│   ├── data-recovery-makkah.html         ← Makkah geographic page
│   └── data-recovery-saudi-arabia.html   ← Saudi Arabia geographic page
│
├── 📂 en/                                ← English pages (Plan 44)
│   ├── index.html                        ← English homepage (mirrors index.html)
│   ├── about-lab.html                    ← English About Lab trust page
│   ├── privacy-policy.html               ← English Privacy Policy trust page
│   └── 📂 services/
│       ├── hdd-data-recovery.html
│       ├── external-hdd-data-recovery.html
│       ├── ssd-nvme-data-recovery.html
│       ├── laptop-pc-data-recovery.html
│       ├── mac-data-recovery.html
│       ├── raid-nas-data-recovery.html
│       ├── flash-sd-data-recovery.html
│       ├── dvr-nvr-data-recovery.html
│       ├── ransomware-data-recovery.html
│       ├── database-erp-recovery.html
│       ├── data-recovery-makkah.html
│       └── data-recovery-saudi-arabia.html
│
├── 📂 docs/                              ← Technical documentation
│   ├── ARCHITECTURE_v1.0.md              ← System architecture
│   ├── CHANGELOG_v1.0.md                 ← Legacy changelog (v1.0)
│   ├── CHANGELOG_v1.0.2.md               ← Legacy changelog (v1.0.2)
│   ├── CODE_REVIEW_CHECKLIST_v1.0.md     ← Code review checklist
│   ├── content-library_v2.0.0.md         ← Content library reference
│   ├── DEVELOPMENT_GUIDE_v1.0.md         ← Developer guide
│   ├── DOCUMENTATION_INDEX.md            ← Documentation index
│   ├── DO_NOT_TOUCH_v1.0.md              ← Critical files list
│   ├── EXECUTION_ORDER_v1.0.2.md         ← JS execution order
│   ├── FUTURE_ENHANCEMENTS_v1.0.md       ← Feature roadmap
│   ├── site-architecture_v2.0.0.md       ← Site architecture
│   ├── TRANSLATION_SYSTEM_v1.0.md        ← Translation system docs
│   ├── TROUBLESHOOTING_v1.0.md           ← Known issues and fixes
│   ├── UPDATE_PROTOCOL_v1.0.md           ← Update procedures
│   ├── datacodex-cross-link-map.md       ← Plan 37 confirmed cross-link map + reverse CTA targets
│   ├── بحث كلمات مفتاحية...md            ← Keyword research (SEO)
│   └── 📂 Google_indexing/
│   │   └── 03-alfareslab.com SEO Indexing Audit_2026-5-17  ← 9-phase GSC indexing audit — root cause: canonical mismatch (.html vs clean URL)
│   └── 📂 indexing/                          ← Plan 55 audit output (2026-06-20)
│       ├── 00-seo-indexing-master-playbook.md ← Full indexing/SEO history + reusable playbook (2026-07-10)
│       ├── 01-gsc-coverage-2026-06-20.md     ← GSC Coverage Report — 28 pages, Group A/B split
│       ├── 02-gsc-performance-2026-06-20.md  ← GSC Performance Report — clicks/impressions/CTR/position
│       ├── 03-gsc-url-inspection-2026-06-20.md ← URL Inspection — A vs B comparison
│       ├── 04-external-seo-analysis.md       ← External SEO report analysis — 32 findings, cross-referenced
│       ├── 05-gap-analysis-2026-06-20.md     ← Final synthesis + Plan 56 inputs (prioritized)
│       ├── 06-audit-2026-07-09-coverage-followup.md ← Follow-up: 2026-07-09 CSV drilldown vs Plan 55 baseline
│       └── alfares_seo_ux_report_By z ai_2026-06-20.pdf ← Third-party neutral SEO audit (source for Phase 4)
│   └── 📂 Google_indexing/ (additional 2026-07-09 files)
│       ├── 04-status_2026-07-09.md           ← Full live GSC "Page Indexing" report (pasted 2026-07-09) — source for the footer quote-bug discovery
│       └── alfareslab.com-Coverage-Drilldown-2026-07-09/ ← Raw GSC CSV export (single-issue: Crawled - not indexed)
│
├── 📂 scripts/                           ← Helper scripts
│   └── serve-local.bat                   ← Batch script to run local server
│
├── 📂 plans/                             ← Execution plans
│   ├── 37-alfares-service-pages.md       ← Complete: Service pages expansion
│   ├── 38-ar-service-pages-content.md    ← Arabic content for 14 service pages
│   ├── 39-en-service-pages-prompts.md    ← English localization prompts
│   ├── 40-en-service-pages-content.md    ← English content for 14 service pages
│   ├── 54-fix-2026-05-18-canonical-clean-url.md ← Complete: Canonical mismatch fix
│   ├── 55-audit-2026-06-20-indexing-status.md   ← Complete: Indexing audit — 5 phases
│   └── 57-fix-2026-07-09-en-footer-smart-quotes.md ← Complete: footer smart-quote corruption fixed 2026-07-10, pending deploy
│
├── 📂 reviews/                           ← Review decisions
│   └── 01-review-alfares-service-pages-strategy.md ← Service pages strategy
│
└── 📂 Legacy docs (root level)
    ├── BUGFIX_v1.0.1.md                  ← v1.0.1 bugfix log
    ├── BUGFIX_v1.0.2.md                  ← v1.0.2 bugfix log
    ├── DELIVERY_README.md                ← v1.0 delivery notes
    ├── DELIVERY_README_v1.0.2.md         ← v1.0.2 delivery notes
    ├── TEST_REPORT_v1.0.2.md             ← v1.0.2 test report
    └── VERIFICATION_v1.1.md              ← v1.1 verification report
```

---

## Key Files

### Critical (DO NOT modify without full understanding)

| File | Why Critical |
|------|-------------|
| `index.html` | Main page — contains all sections, Schema, and SEO markup |
| `assets/js/main.js` | Core logic — language toggle, theme, navigation |
| `seo/structured-data.json` | Schema.org data — cleaned in Phase 5 and expanded with 14 service offers in Phase 6 |
| `lang/ar.json` | Arabic translations — all UI text |
| `lang/en.json` | English translations — all UI text |
| `_headers` | Cloudflare security and cache headers |

### Active Plans

| Plan | Status | Description |
|------|--------|-------------|
| Plan 37–46 | ✅ Complete | Service pages, content, bilingual rollout, routing |
| Plan 47 | ✅ Complete | UI/UX Enhancements & Fat Footer Redesign (v1.2.4) |
| Plan 48 | ✅ Complete | Internal Linking |
| Plan 49 | ✅ Complete | Pre-Launch SEO Audit |
| Plan 50 | ✅ Complete | Pre-Launch Critical Fixes |
| Plan 51 | ✅ Complete | Pre-Launch Audit v2 — EN links + 404 hreflang |
| Plan 52 | ✅ Complete | Schema.org Entity Fix — Person-Centered model |
| Plan 53 | 🔴 Pending | Performance + Schema improvements (post-launch) |
| Plan 54 | ✅ Complete | Canonical Mismatch Fix — Clean URL SEO fix |
| Plan 55 | ✅ Complete | Indexing Status Audit — 5-phase GSC + external report analysis |
| Plan 56 | 🔴 Pending | Indexing & SEO Fix Plan — built from Plan 55 (CTR, speed, schema depth, GBP) |
| Plan 57 | ✅ Complete + verified 2026-07-10 | Fix — `en/index.html` footer smart-quote corruption — pending commit + deploy only |

---

## External Connections

| Service | Purpose | Config |
|---------|---------|--------|
| Cloudflare Pages | Hosting | Deployed from this repo |
| Google Search Console | SEO monitoring | `alfareslab.com` property |
| Google Analytics 4 | Traffic analytics | GA4 tag in index.html |
| Google Business Profile | Local SEO + Reviews | Linked via Schema |
| Datacodex (sister site) | Cross-linking articles | URL-based links only |

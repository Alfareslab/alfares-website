# 📁 Project Key — Al-Fares Lab Website
> **Version:** 1.2.1
> **Last Updated:** 2026-05-04
> **Total Files:** ~102 (excluding .git)

---

## Project Overview

| Property | Value |
|----------|-------|
| Name | Al-Fares Lab — Data Recovery & Computer Repair |
| Domain | `alfareslab.com` |
| Type | Static bilingual website (HTML/CSS/JS) |
| Hosting | Cloudflare Pages |
| Current Version | v1.2.1 |

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
│   │   └── tiktok.js                     ← TikTok embed handler
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
│   └── بحث كلمات مفتاحية...md            ← Keyword research (SEO)
│
├── 📂 scripts/                           ← Helper scripts
│   └── serve-local.bat                   ← Batch script to run local server
│
├── 📂 plans/                             ← Execution plans
│   ├── 37-alfares-service-pages.md       ← Active: Service pages expansion
│   ├── 38-ar-service-pages-content.md    ← Arabic content for 14 service pages
│   ├── 39-en-service-pages-prompts.md    ← English localization prompts
│   └── 40-en-service-pages-content.md    ← English content for 14 service pages
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
| Plan 37 | ✅ Complete | Service pages expansion |
| Plan 38 | ✅ Complete | Content production prompts |
| Plan 40 | ✅ Complete | English service pages content |
| Plan 43 | ✅ Complete | Arabic content rollout complete |
| Plan 44 | ✅ Complete | Bilingual site rollout (EN pages + hreflang + sitemap) |
| Plan 46 | ✅ Complete | Bilingual Routing & Content Reconciliation |

---

## External Connections

| Service | Purpose | Config |
|---------|---------|--------|
| Cloudflare Pages | Hosting | Deployed from this repo |
| Google Search Console | SEO monitoring | `alfareslab.com` property |
| Google Analytics 4 | Traffic analytics | GA4 tag in index.html |
| Google Business Profile | Local SEO + Reviews | Linked via Schema |
| Datacodex (sister site) | Cross-linking articles | URL-based links only |

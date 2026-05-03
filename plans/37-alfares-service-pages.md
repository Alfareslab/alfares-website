# 🗺️ Al-Fares Service Landing Pages — Expanded SEO Strategy
> **Version:** 2.0.0
> **Date:** 2026-05-01
> **Methodology:** Multi-Model Development
> **Based on:** `reviews/01-review-alfares-service-pages-strategy.md` (14/14 decisions approved)
> **Keyword Research:** `docs/بحث كلمات مفتاحية لمركز الفارس لاستعادة البيانات في جدة.md`
> **Constitution:** `master-constitution.md` (MUST BE STRICTLY FOLLOWED)

---

## 🎯 Goal

Transform Al-Fares from a single-page site into a multi-page SEO powerhouse with **14 bilingual pages** (AR + EN) targeting local search intent in Jeddah, Makkah, and Saudi Arabia.

### Key Outcomes:
1. **10 service pages** — each targeting specific device/problem keywords
2. **2 geographic pages** — Makkah + All Saudi Cities
3. **1 trust page** — Privacy & Confidentiality (Footer)
4. **1 trust page** — About the Lab & Technology (Clean Room + PC-3000)
5. **Schema cleanup** — remove hardcoded reviews, add @id linking
6. **Cross-linking** — bidirectional links between Al-Fares and Datacodex
7. **Bilingual content** — Arabic + English (localized, non-literal translation)

### Context:
- Current state: single page (`index.html` — 880 lines)
- Competitor benchmark: LostData, Osool, Data Rescue all have dedicated service pages
- Al-Fares advantages: PC-3000, Clean Room, 12+ years experience, 80+ Google reviews

---

## 📄 Page Inventory (14 Pages)

### Service Pages (10)

| # | Page | Slug | Content Source | Primary Keywords (AR) | Primary Keywords (EN) |
|---|------|------|---------------|----------------------|----------------------|
| 1 | HDD Internal | `hdd-data-recovery` | ✏️ Rewrite from file 38 | استعادة بيانات هاردسك جدة | hard drive data recovery jeddah |
| 2 | External HDD | `external-hdd-data-recovery` | ✏️ Rewrite from file 38 | استعادة بيانات هارد خارجي جدة | external hard drive recovery jeddah |
| 3 | SSD / NVMe | `ssd-nvme-data-recovery` | ✅ Ready (file 38) | استعادة بيانات SSD جدة | SSD data recovery jeddah |
| 4 | Laptop / PC | `laptop-pc-data-recovery` | 🆕 New prompt | استعادة بيانات لابتوب جدة | laptop data recovery jeddah |
| 5 | Mac | `mac-data-recovery` | 🆕 New prompt | استعادة بيانات ماك جدة | mac data recovery jeddah |
| 6 | RAID / NAS / Server | `raid-nas-data-recovery` | ✅ Ready (file 38) | استعادة بيانات سيرفر RAID جدة | RAID data recovery jeddah |
| 7 | Flash / SD Cards | `flash-sd-data-recovery` | ✅ Ready (file 38) | استرجاع بيانات فلاش ميموري جدة | USB SD card recovery jeddah |
| 8 | DVR / NVR / CCTV | `dvr-nvr-data-recovery` | ✅ Ready (file 38) | استعادة تسجيلات كاميرات مراقبة جدة | CCTV footage recovery jeddah |
| 9 | Ransomware / Virus | `ransomware-data-recovery` | 🆕 New prompt | استرجاع بيانات مشفرة Ransomware جدة | ransomware data recovery jeddah |
| 10 | Database / SQL / ERP | `database-erp-recovery` | 🆕 New prompt | استعادة بيانات SQL جدة | database recovery jeddah |

### Geographic Pages (2)

| # | Page | Slug | Content Source |
|---|------|------|---------------|
| 11 | Data Recovery Makkah | `data-recovery-makkah` | 🆕 New prompt |
| 12 | All Saudi Cities | `data-recovery-saudi-arabia` | 🆕 New prompt |

### Trust Pages (2)

| # | Page | Slug | Content Source | Location |
|---|------|------|---------------|----------|
| 13 | Privacy & Confidentiality | `privacy-policy` | ✅ Ready (file 38) | Footer link |
| 14 | About Lab & Technology | `about-lab` | 🆕 New prompt | Footer + Nav |

---

## 📅 Phases

---

### **Phase 1: Arabic Content Production 📝**
> **Model:** `NotebookLM` (manual — developer executes)
> **Goal:** Produce all Arabic content and save in a single reference file
> **Depends on:** Nothing (start)
> **Output file:** `plans/38-ar-service-pages-content.md`

| Done | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | Load knowledge sources in NotebookLM |
| `[x]` | `[x]` | Execute System Prompt for NotebookLM persona |
| `[x]` | `[x]` | ✅ Content: HDD Internal (rewrite — split from original) |
| `[x]` | `[x]` | ✅ Content: External HDD (rewrite — split from original) |
| `[x]` | `[x]` | ✅ Content: SSD / NVMe |
| `[x]` | `[x]` | ✅ Content: Laptop / PC |
| `[x]` | `[x]` | ✅ Content: Mac |
| `[x]` | `[x]` | ✅ Content: RAID / NAS / Server |
| `[x]` | `[x]` | ✅ Content: Flash / SD Cards |
| `[x]` | `[x]` | ✅ Content: DVR / NVR / CCTV |
| `[x]` | `[x]` | ✅ Content: Ransomware / Virus |
| `[x]` | `[x]` | ✅ Content: Database / SQL / ERP |
| `[x]` | `[x]` | ✅ Content: Data Recovery Makkah (geographic) |
| `[x]` | `[x]` | ✅ Content: All Saudi Cities (geographic) |
| `[x]` | `[x]` | ✅ Content: Privacy & Confidentiality |
| `[x]` | `[x]` | ✅ Content: About Lab & Technology |
| `[x]` | `[x]` | ✅ Final review and save all Arabic content |

> ✅ **Phase 1 COMPLETE** — All 14 Arabic pages produced and saved.
> Arabic content file: `plans/38-ar-service-pages-content.md`

**🔄 No agent prompt — manual phase.**

---

### **Phase 2: English Content Localization 🌐**
> **Model:** `NotebookLM` or `AI Translation` (manual — developer executes)
> **Goal:** Produce localized English content (NOT literal translation) for all pages
> **Depends on:** Phase 1 ✅
> **Prompts file:** `plans/39-en-notebooklm-prompts.md`
> **Input file:** `plans/38-ar-service-pages-content.md` (Arabic reference)
> **Output file:** `plans/40-en-service-pages-content.md` (English)

| Done | Review | Task |
| :---: | :---: | :--- |
| `[ ]` | `[ ]` | Translate + localize all 14 pages to English |
| `[ ]` | `[ ]` | Ensure English keywords from research are naturally embedded |
| `[ ]` | `[ ]` | Review English content for SEO quality and natural tone |
| `[ ]` | `[ ]` | Final save of English content file |

> **Translation rules:**
> - NOT word-for-word — localized for English-speaking audience
> - Target English keywords from the research (e.g., "data recovery jeddah", "RAID data recovery")
> - Professional tone matching international data recovery labs
> - Same structure (sections, FAQ, CTA) but adapted phrasing

**🔄 No agent prompt — manual phase.**

---

### **Phase 3: Setup & Template Preparation 🔍**
> **Model:** `Antigravity` 🟠
> **Goal:** Review current structure and prepare HTML template for service pages
> **Depends on:** Nothing (can run parallel to Phase 1-2)

| Done | Review | Task |
| :---: | :---: | :--- |
| `[ ]` | `[ ]` | Review `alfares-website-reference/` structure and identify affected files |
| `[ ]` | `[ ]` | Create `alfares-website-reference/services/` directory |
| `[ ]` | `[ ]` | Create base HTML template inheriting CSS, header, footer, theme & lang toggles |
| `[ ]` | `[ ]` | Map Datacodex articles to each service page for cross-linking |

**🔄 Phase prompt:**
```
Datacodex project — Plan 37 Phase 3: Setup.
Review alfares-website-reference/ and create services/ dir with base HTML template
(same CSS, header/footer, lang toggle). Map Datacodex articles to service pages.
Ref: plans/37-alfares-service-pages.md
CRITICAL: You MUST strictly follow the rules defined in master-constitution.md, especially Section 5 (SEO) and Section 6 (Template Requirements).
```

---

### **Phase 4: Build Service Pages 🏗️**
> **Model:** `Antigravity` 🟠
> **Goal:** Create all 14 HTML pages using content from Phase 1 (AR) + Phase 2 (EN)
> **Depends on:** Phase 1 ✅ + Phase 2 ✅ + Phase 3 ✅

| Done | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | Build `services/hdd-data-recovery.html` + Service Schema + FAQ Schema |
| `[x]` | `[x]` | Build `services/external-hdd-data-recovery.html` |
| `[x]` | `[x]` | Build `services/ssd-nvme-data-recovery.html` |
| `[x]` | `[x]` | Build `services/laptop-pc-data-recovery.html` |
| `[x]` | `[x]` | Build `services/mac-data-recovery.html` |
| `[x]` | `[x]` | Build `services/raid-nas-data-recovery.html` |
| `[x]` | `[x]` | Build `services/flash-sd-data-recovery.html` |
| `[x]` | `[x]` | Build `services/dvr-nvr-data-recovery.html` |
| `[x]` | `[x]` | Build `services/ransomware-data-recovery.html` |
| `[x]` | `[x]` | Build `services/database-erp-recovery.html` |
| `[x]` | `[x]` | Build `services/data-recovery-makkah.html` |
| `[x]` | `[x]` | Build `services/data-recovery-saudi-arabia.html` |
| `[x]` | `[x]` | Build `privacy-policy.html` (Footer page) |
| `[x]` | `[x]` | Build `about-lab.html` (Trust page) |
| `[x]` | `[x]` | Add translation keys to `lang/ar.json` and `lang/en.json` |
| `[x]` | `[x]` | Update service cards in `index.html` — make rows clickable to service pages |

**📋 Requirements per service page:**
```
✅ Title + Meta Description — bilingual, keyword-targeted
✅ Single H1 containing: service name + "جدة" / "Jeddah"
✅ Symptoms section (what the client sees)
✅ Diagnosis section (how we handle it)
✅ Tools section (PC-3000, Clean Room)
✅ FAQ section (3-5 questions) with FAQPage Schema
✅ Service Schema (JSON-LD)
✅ WhatsApp CTA (+966507322542)
✅ Cross-link to related Datacodex article
✅ Breadcrumb: Home > Services > [Service Name]
✅ Same Header/Footer/CSS/Theme Toggle/Lang Toggle from index.html
```

**🔄 Phase prompt:**
```
Datacodex project — Plan 37 Phase 4: Build service pages.
Content ready: AR in plans/38-ar-service-pages-content.md,
EN in plans/40-en-service-pages-content.md.
Use template from Phase 3. Build 14 pages in alfares-website-reference/services/.
Each page: bilingual content, Service Schema, FAQ Schema, WhatsApp CTA, Datacodex cross-link.
Ref: plans/37-alfares-service-pages.md — Phase 4 requirements.
CRITICAL: You MUST strictly follow the rules defined in master-constitution.md, especially Section 5 (SEO) and Section 6 (Template Requirements).
```

---

### **Phase 5: Schema Cleanup 🧹**
> **Model:** `Antigravity` 🟠
> **Goal:** Remove hardcoded reviews, add @id linking, clean hreflang
> **Depends on:** Phase 4 ✅

| Done | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | Remove `aggregateRating` from `index.html` (lines 83-87 in ComputerStore) |
| `[x]` | `[x]` | Remove `AggregateRating` block from `index.html` (lines 228-239 in @graph) |
| `[x]` | `[x]` | Remove `AggregateRating` from `seo/structured-data.json` (lines 117-129) |
| `[x]` | `[x]` | Add `"@id": "https://datacodexlab.com/#organization"` in Datacodex Schema |
| `[x]` | `[x]` | Update `parentOrganization` in Al-Fares to use @id reference |
| `[x]` | `[x]` | Clean hreflang in `index.html` (remove `?lang=ar`/`?lang=en`) |
| `[x]` | `[x]` | Update `seo/structured-data.json` to match changes |

**🔄 Phase prompt:**
```
Datacodex project — Plan 37 Phase 5: Schema Cleanup.
1. Remove all AggregateRating from index.html and structured-data.json.
2. Add @id for Datacodex and link via parentOrganization.
3. Clean unnecessary hreflang.
Ref: plans/37-alfares-service-pages.md
CRITICAL: You MUST strictly follow the rules defined in master-constitution.md, especially Section 5 (SEO) and Section 6 (Template Requirements).
```

---

### **Phase 6: Cross-Linking 🔗**
> **Model:** `Antigravity` 🟢
> **Goal:** Strengthen bidirectional internal/external linking
> **Depends on:** Phase 4 ✅ + Phase 5 ✅

| Done | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | Prepare Datacodex article CTA targets → point to specific Al-Fares service pages |
| `[x]` | `[x]` | Add detailed `hasOfferCatalog` in Schema pointing to each service URL |
| `[x]` | `[x]` | Verify every service page links to a specific Datacodex article |

**Cross-link map:**

| Al-Fares Service Page | Datacodex Article |
|-----------------------|-------------------|
| `hdd-data-recovery` | HDD Clicking / head crash article |
| `external-hdd-data-recovery` | External HDD guide (if exists) |
| `ssd-nvme-data-recovery` | SSD NVMe Recovery article |
| `laptop-pc-data-recovery` | Laptop recovery guide (if exists) |
| `mac-data-recovery` | Mac recovery guide (if exists) |
| `raid-nas-data-recovery` | RAID 5 Case Study article |
| `flash-sd-data-recovery` | Nearest available or homepage |
| `dvr-nvr-data-recovery` | CCTV article (if exists) |
| `ransomware-data-recovery` | Ransomware analysis article (if exists) |
| `database-erp-recovery` | Database recovery article (if exists) |

**🔄 Phase prompt:**
```
Datacodex project — Plan 37 Phase 6: Cross-Linking.
Update Datacodex CTAs to point to specific Al-Fares service pages.
Ensure bidirectional linking (Al-Fares ↔ Datacodex).
Ref: plans/37-alfares-service-pages.md — cross-link map.
```

---

### **Phase 7: Sitemap + Navigation 🗺️**
> **Model:** `Antigravity` 🟢
> **Goal:** Add new pages to sitemap.xml and update navigation
> **Depends on:** Phase 4 ✅

| Done | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | Add 14 new URLs to `sitemap.xml` with hreflang |
| `[x]` | `[x]` | Update navbar with services dropdown/submenu |
| `[x]` | `[x]` | Add footer links for services + trust pages |

**🔄 Phase prompt:**
```
Datacodex project — Plan 37 Phase 7: Sitemap + Navigation.
Add 14 new pages to sitemap.xml. Update navbar with services dropdown.
Add footer links for privacy and about pages.
Ref: plans/37-alfares-service-pages.md
```

---

### **Phase 8: Testing & Verification ✅**
> **Model:** `Antigravity` 🟠
> **Goal:** Comprehensive testing of all changes
> **Depends on:** Phases 4-7 ✅

| Done | Review | Task |
| :---: | :---: | :--- |
| `[ ]` | `[ ]` | Validate all service pages: HTML, links, language toggle |
| `[ ]` | `[ ]` | Validate Schema: JSON-LD syntax, Service Schema, FAQ Schema |
| `[ ]` | `[ ]` | Validate cross-links: all links functional |
| `[ ]` | `[ ]` | Validate sitemap.xml: all URLs present and correct |
| `[ ]` | `[ ]` | Validate Canonical + Meta for every new page |
| `[ ]` | `[ ]` | Update docs: `project-context.md` + `project-key.md` + `changelog.md` |

**🔄 Phase prompt:**
```
Datacodex project — Plan 37 Phase 8: Final verification.
Test all 14 new service pages (HTML, Schema, Links, Sitemap, Canonical).
Update the three documentation files.
Ref: plans/37-alfares-service-pages.md
```

---

## 📊 Phase Summary

| Phase | Description | Model | Content Files |
|-------|-------------|-------|---------------|
| 1 | Arabic Content Production | `NotebookLM` (manual) | `plans/38-notebooklm-service-pages-prompts.md` |
| 2 | English Content Localization | `NotebookLM` / AI (manual) | `plans/38-en-service-pages-content.md` |
| 3 | Setup & Template | `Antigravity` 🟠 | 2-3 files |
| 4 | Build Service Pages | `Antigravity` 🟠 | 14 HTML + 2 JSON |
| 5 | Schema Cleanup | `Antigravity` 🟠 | 3-4 files |
| 6 | Cross-Linking | `Antigravity` 🟢 | 3-4 files |
| 7 | Sitemap + Navigation | `Antigravity` 🟢 | 2-3 files |
| 8 | Testing & Verification | `Antigravity` 🟠 | 3 (docs) |

---

## 📁 Content Files

| File | Language | Content |
|------|----------|---------|
| `plans/38-notebooklm-service-pages-prompts.md` | Arabic | All 14 pages — Arabic content + prompts |
| `plans/38-en-service-pages-content.md` | English | All 14 pages — localized English content |

---

## 🏗️ Expected File Structure

```
alfares-website-reference/
├── index.html                              ← Update: clickable service cards + navbar dropdown + Schema cleanup
├── services/
│   ├── hdd-data-recovery.html              ← New
│   ├── external-hdd-data-recovery.html     ← New
│   ├── ssd-nvme-data-recovery.html         ← New
│   ├── laptop-pc-data-recovery.html        ← New
│   ├── mac-data-recovery.html              ← New
│   ├── raid-nas-data-recovery.html         ← New
│   ├── flash-sd-data-recovery.html         ← New
│   ├── dvr-nvr-data-recovery.html          ← New
│   ├── ransomware-data-recovery.html       ← New
│   ├── database-erp-recovery.html          ← New
│   ├── data-recovery-makkah.html           ← New (Geographic)
│   └── data-recovery-saudi-arabia.html     ← New (Geographic)
├── privacy-policy.html                     ← New (Footer trust page)
├── about-lab.html                          ← New (Trust page)
├── lang/
│   ├── ar.json                             ← Update: add service page keys
│   └── en.json                             ← Update: add service page keys
├── seo/
│   └── structured-data.json                ← Update: remove AggregateRating + add @id
├── sitemap.xml                             ← Update: add 14 URLs
└── _headers                                ← No change
```

---

## 📚 References

| File | Purpose |
|------|---------|
| `reviews/01-review-alfares-service-pages-strategy.md` | Strategic decisions (14/14 approved) |
| `docs/بحث كلمات مفتاحية لمركز الفارس لاستعادة البيانات في جدة.md` | Keyword research |
| `plans/38-notebooklm-service-pages-prompts.md` | Arabic content + NotebookLM prompts |
| `plans/38-en-service-pages-content.md` | English localized content (to be created) |
| `docs/audits/08-notebooklm-seo-verification-findings-log.md` | SEO audit findings |
| `master-constitution.md` | Project constitution |


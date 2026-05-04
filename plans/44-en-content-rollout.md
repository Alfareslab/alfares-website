# 🗺️ Plan 44: English Content Rollout for Service Pages
> **Version:** 1.0.0
> **Date:** 2026-05-03
> **Methodology:** Multi-Model Development
> **Scope Note:** This plan covers English content rollout only, deploying the approved content from `plans/40-en-service-pages-content.md` into the `/en/` subdirectory structure. It also activates bidirectional hreflang tags on all Arabic pages, updates `sitemap.xml`, and wires the language toggle. This plan picks up exactly where Plan 43 left off.
> **Reference:** `docs/service-pages-decisions-report.md`
> **Content Source:** `plans/40-en-service-pages-content.md`
> **Arabic Blueprint:** `plans/43-content-rollout.md`

---

## 🎯 الهدف العام

نشر النسخة الإنجليزية من الـ 14 صفحة المعتمدة في مجلد `/en/` مع الحفاظ على نفس الـ slugs العربية بالظبط. يشمل ذلك تفعيل الـ hreflang ثنائي الاتجاه على جميع الصفحات (عربي + إنجليزي)، تحديث خريطة الموقع بـ `xhtml:link` annotations، وربط مبدل اللغة في الـ Header.

---

## 🏗️ Architecture Decisions (Approved — Non-Negotiable)

| # | Decision | Detail |
|---|----------|--------|
| 1 | **Structure** | Subdirectory model — all English pages under `/en/` at root |
| 2 | **URL Pattern** | `/en/<exact-same-path-as-arabic>` — slugs from `sitemap.xml` only |
| 3 | **Hreflang** | Bidirectional `ar` + `en` + `x-default` (Arabic = x-default) |
| 4 | **Canonical** | Each English page self-canonical to `/en/...` |
| 5 | **Sitemap** | ONE `sitemap.xml` at root with `xhtml:link` annotations for both languages |

---

## 📑 URL Mapping Table (Authoritative — from sitemap.xml)

| # | Arabic Path (Source of Truth) | English Path |
|---|-------------------------------|--------------|
| 1 | `services/hdd-data-recovery.html` | `en/services/hdd-data-recovery.html` |
| 2 | `services/external-hdd-data-recovery.html` | `en/services/external-hdd-data-recovery.html` |
| 3 | `services/ssd-nvme-data-recovery.html` | `en/services/ssd-nvme-data-recovery.html` |
| 4 | `services/laptop-pc-data-recovery.html` | `en/services/laptop-pc-data-recovery.html` |
| 5 | `services/mac-data-recovery.html` | `en/services/mac-data-recovery.html` |
| 6 | `services/raid-nas-data-recovery.html` | `en/services/raid-nas-data-recovery.html` |
| 7 | `services/flash-sd-data-recovery.html` | `en/services/flash-sd-data-recovery.html` |
| 8 | `services/dvr-nvr-data-recovery.html` | `en/services/dvr-nvr-data-recovery.html` |
| 9 | `services/ransomware-data-recovery.html` | `en/services/ransomware-data-recovery.html` |
| 10 | `services/database-erp-recovery.html` | `en/services/database-erp-recovery.html` |
| 11 | `services/data-recovery-makkah.html` | `en/services/data-recovery-makkah.html` |
| 12 | `services/data-recovery-saudi-arabia.html` | `en/services/data-recovery-saudi-arabia.html` |
| 13 | `about-lab.html` | `en/about-lab.html` |
| 14 | `privacy-policy.html` | `en/privacy-policy.html` |

> ⚠️ **Slugs are NOT to be invented.** The English path mirrors the Arabic path exactly, prefixed with `en/`.

---

## 📋 Per-Page Requirements (Apply to ALL 14 English Pages)

Every English page MUST have:

1. `<html lang="en" dir="ltr">` (NOT `ar`/`rtl`)
2. Exact English content from `plans/40-en-service-pages-content.md` — no paraphrasing, no AI rewriting
3. Self-canonical URL pointing to `https://alfareslab.com/en/...`
4. Bidirectional hreflang tags:
   ```html
   <link rel="alternate" hreflang="ar" href="https://alfareslab.com/<arabic-path>">
   <link rel="alternate" hreflang="en" href="https://alfareslab.com/en/<english-path>">
   <link rel="alternate" hreflang="x-default" href="https://alfareslab.com/<arabic-path>">
   ```
5. Translated Schema.org properties:
   - `inLanguage: "en"`
   - Translated `name`, `description`, `areaServed` labels
   - LocalBusiness coordinates, phone, address: **IDENTICAL** to Arabic (do NOT translate the physical address)
6. Schema set: `Service` + `FAQPage` + `BreadcrumbList` + `LocalBusiness` (same as Plan 43)
7. All UI strings (nav, footer, buttons, breadcrumbs) translated to English
8. WhatsApp button: same auto-switch logic, same recovery number `+966507322542` for service pages
9. CSS paths adjusted for `/en/` depth (e.g., `../../assets/css/...` or appropriate relative path)

---

## 📅 المراحل التنفيذية

---

### **المرحلة 1: بناء صفحات الخدمات الأساسية بالإنجليزية 💾**
> **النموذج:** `Gemini Pro` 🟠
> **الهدف:** إنشاء النسخ الإنجليزية لصفحات (SSD, Flash/SD, Mac)
> **يعتمد على:** Plan 43 مكتمل ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | Create directory structure: `en/services/` |
| `[x]` | `[x]` | Create `en/services/ssd-nvme-data-recovery.html` with English SSD content from Plan 40 |
| `[x]` | `[x]` | Create `en/services/flash-sd-data-recovery.html` with English Flash/SD content from Plan 40 |
| `[x]` | `[x]` | Create `en/services/mac-data-recovery.html` with English Mac content from Plan 40 |
| `[x]` | `[x]` | Update `<html lang="en" dir="ltr">`, canonical, and Schema.org for each page |
| `[x]` | `[x]` | Add hreflang tags (ar + en + x-default) to each English page |
| `[x]` | `[x]` | Verify CSS/JS paths are correct for the `/en/services/` depth |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [ ] Plan 43 Phase 5 fully complete (all `[x][x]`)
- [ ] Content for SSD, Flash/SD, Mac verified in `plans/40-en-service-pages-content.md`
- [ ] Arabic template file identified as base for duplication
- [ ] Directory `en/services/` does not already exist (clean start)

**Key Constraints:**
- Use the corresponding Arabic page as the HTML template base
- Replace Arabic content with **exact** English content from Plan 40 — do NOT paraphrase
- Adjust all relative paths (CSS, JS, images) for the `/en/services/` directory depth
- Do NOT modify any Arabic page in this phase

**🔄 برومبت بدء هذه المرحلة:**
```text
Read plans/44-en-content-rollout.md (Phase 1).
Read services/hdd-data-recovery.html (as the Arabic template reference).
Read plans/40-en-service-pages-content.md (for English content — Pages 3, 7, 5).

Task: Create the 3 basic English service pages (SSD, Flash/SD, Mac) under en/services/.
Rules:
1. Duplicate the Arabic template structure for each page.
2. Set <html lang="en" dir="ltr">.
3. Insert exact English content from Plan 40.
4. Set self-canonical to https://alfareslab.com/en/services/<slug>.
5. Add bidirectional hreflang tags (ar + en + x-default).
6. Update Schema.org: inLanguage="en", translated name/description.
7. Translate all UI strings (nav, footer, buttons, breadcrumbs) to English.
8. Adjust CSS/JS relative paths for en/services/ depth.
9. Ensure WhatsApp auto-switch targets +966507322542.
```

---

### **المرحلة 2: بناء صفحات الخدمات المتقدمة بالإنجليزية 🛡️**
> **النموذج:** `Gemini Pro` 🟠
> **الهدف:** إنشاء النسخ الإنجليزية لصفحات (HDD, External HDD, Laptop/PC, RAID, DVR, Ransomware, Database)
> **يعتمد على:** المرحلة 1 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | Git commit Phase 1 changes before starting |
| `[x]` | `[x]` | Create `en/services/hdd-data-recovery.html` with English HDD content from Plan 40 |
| `[x]` | `[x]` | Create `en/services/external-hdd-data-recovery.html` with English External HDD content |
| `[x]` | `[x]` | Create `en/services/laptop-pc-data-recovery.html` with English Laptop/PC content |
| `[x]` | `[x]` | Create `en/services/raid-nas-data-recovery.html` with English RAID content |
| `[x]` | `[x]` | Create `en/services/dvr-nvr-data-recovery.html` with English DVR/NVR content |
| `[x]` | `[x]` | Create `en/services/ransomware-data-recovery.html` with English Ransomware content |
| `[x]` | `[x]` | Create `en/services/database-erp-recovery.html` with English Database/ERP content |
| `[x]` | `[x]` | Update `<html lang="en" dir="ltr">`, canonical, hreflang, and Schema.org for each page |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [x] Phase 1 fully complete and reviewed
- [x] Content for all 7 pages verified in `plans/40-en-service-pages-content.md`
- [x] Phase 1 pages render correctly with no broken CSS/JS paths

**Key Constraints:**
- Same rules as Phase 1
- Ensure FAQ count in HTML matches FAQ count in Schema for each page
- Maintain H2 heading hierarchy consistency

**🔄 برومبت بدء هذه المرحلة:**
```text
Read plans/44-en-content-rollout.md (Phase 2).
Read en/services/ssd-nvme-data-recovery.html (as reference from Phase 1).
Read plans/40-en-service-pages-content.md (for English content — Pages 1, 2, 4, 6, 8, 9, 10).

Task: Create the 7 advanced English service pages under en/services/.
Rules:
1. Use the Phase 1 English page as the template (already configured for en/).
2. Insert exact English content from Plan 40 for each page.
3. Update canonical, hreflang, and all Schema.org for each specific service.
4. Translate all UI strings to English.
5. WhatsApp auto-switch: +966507322542 for all service pages.
```

---

### **المرحلة 3: بناء الصفحات الجغرافية بالإنجليزية 🗺️**
> **النموذج:** `Gemini Flash` 🟢
> **الهدف:** إنشاء النسخ الإنجليزية لصفحتي مكة والسعودية
> **يعتمد على:** المرحلة 2 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | Git commit Phase 2 changes before starting |
| `[x]` | `[x]` | Create `en/services/data-recovery-makkah.html` with English Makkah content from Plan 40 |
| `[x]` | `[x]` | Create `en/services/data-recovery-saudi-arabia.html` with English Saudi Arabia content from Plan 40 |
| `[x]` | `[x]` | Update `AreaServed` in Schema.org for Makkah and Saudi Arabia |
| `[x]` | `[x]` | Ensure geographic pages use the same national targeting strategy as Arabic counterparts |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [x] Phase 2 fully complete and reviewed
- [x] Content for Makkah and Saudi Arabia verified in `plans/40-en-service-pages-content.md`
- [x] Arabic geographic pages confirmed working as reference

**Key Constraints:**
- Do NOT create duplicate city pages for Riyadh/Madinah/Dammam
- Use `data-recovery-makkah.html` as the Makkah slug (NOT `mecca`)
- The Saudi Arabia page targets all cities mentioned in the content

**🔄 برومبت بدء هذه المرحلة:**
```text
Read plans/44-en-content-rollout.md (Phase 3).
Read en/services/hdd-data-recovery.html (as Phase 2 template reference).
Read plans/40-en-service-pages-content.md (for English geographic content — Pages 11, 12).

Task: Create the 2 English geographic service pages.
Rules:
1. Use an existing Phase 2 English page as the template.
2. Insert exact English content from Plan 40.
3. Update AreaServed Schema for Makkah and Saudi Arabia respectively.
4. No duplicate city pages.
```

---

### **المرحلة 4: بناء الصفحات الخاصة بالإنجليزية 📜**
> **النموذج:** `Gemini Flash` 🟢
> **الهدف:** إنشاء صفحة المعمل (About Lab) وسياسة الخصوصية بالإنجليزية
> **يعتمد على:** المرحلة 3 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | Git commit Phase 3 changes before starting |
| `[x]` | `[x]` | Create `en/about-lab.html` with English About Lab content from Plan 40 |
| `[x]` | `[x]` | Create `en/privacy-policy.html` with English Privacy Policy content from Plan 40 |
| `[x]` | `[x]` | About Lab: Schema `Organization` (no emergency CTA, no FAQ) |
| `[x]` | `[x]` | Privacy Policy: Schema `WebPage` only (no `Service`, no `FAQPage`) |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [x] Phase 3 fully complete and reviewed
- [x] Content for About Lab and Privacy Policy verified in `plans/40-en-service-pages-content.md`
- [x] Arabic About Lab and Privacy Policy confirmed working as reference

**Key Constraints:**
- `about-lab.html` focuses on technical capabilities — NO emergency language
- `privacy-policy.html` uses `WebPage` Schema only — NOT `Service`
- Both pages are at `en/` root level (NOT in `en/services/`)

**🔄 برومبت بدء هذه المرحلة:**
```text
Read plans/44-en-content-rollout.md (Phase 4).
Read about-lab.html and privacy-policy.html (Arabic references).
Read plans/40-en-service-pages-content.md (for English content — Pages 13, 14).

Task: Create the 2 English special pages (About Lab + Privacy Policy) under en/.
Rules:
1. Use the Arabic counterpart as the HTML template.
2. Set <html lang="en" dir="ltr">.
3. Insert exact English content from Plan 40.
4. About Lab: Organization Schema, no emergency CTA.
5. Privacy Policy: WebPage Schema only.
6. Both at en/ root, not en/services/.
7. Adjust CSS/JS paths for en/ depth.
```

---

### **المرحلة 5: الربط الداخلي + Hreflang على الصفحات العربية + تحديث Sitemap 🔗**
> **النموذج:** `Gemini Pro` 🟠
> **الهدف:** تفعيل الـ hreflang ثنائي الاتجاه، تحديث خريطة الموقع، وربط مبدل اللغة
> **يعتمد على:** المرحلة 4 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[ ]` | `[ ]` | Git commit Phase 4 changes before starting |
| `[ ]` | `[ ]` | **ARABIC PAGES:** Replace `<!-- hreflang tags will be added in Plan 44 -->` with real hreflang tags on ALL 14 Arabic pages + `index.html` |
| `[ ]` | `[ ]` | **SITEMAP:** Add all 14 English URLs to `sitemap.xml` with `xhtml:link` annotations for each AR/EN pair |
| `[ ]` | `[ ]` | **SITEMAP:** Add `xhtml:link` annotations to existing Arabic entries as well |
| `[ ]` | `[ ]` | **LANGUAGE TOGGLE:** Wire header language toggle: Arabic page → `/en/` counterpart, English page → Arabic counterpart |
| `[ ]` | `[ ]` | **EN INDEX:** Create `en/index.html` with links to all 14 English pages (mirroring `index.html` structure) |
| `[ ]` | `[ ]` | **EN FOOTER:** Add About Lab + Privacy Policy links in `/en/` footer |
| `[ ]` | `[ ]` | **DOCUMENTATION:** Update `project-context.md` with bilingual status |
| `[ ]` | `[ ]` | **DOCUMENTATION:** Update `project-key.md` with new English URL patterns |
| `[ ]` | `[ ]` | **DOCUMENTATION:** Update `changelog.md` with Plan 44 entry |
| `[ ]` | `[ ]` | **VERSION:** Bump version number |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [ ] All 14 English pages created and reviewed (Phases 1-4)
- [ ] No broken CSS/JS paths on any English page
- [ ] All English pages have self-canonical and hreflang already in place

**Key Constraints:**
- Only modify Arabic pages' `<head>` section — do NOT touch Arabic content
- Sitemap format for each URL pair:
  ```xml
  <url>
    <loc>https://alfareslab.com/services/hdd-data-recovery.html</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="https://alfareslab.com/services/hdd-data-recovery.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://alfareslab.com/en/services/hdd-data-recovery.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://alfareslab.com/services/hdd-data-recovery.html"/>
    <lastmod>2026-05-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://alfareslab.com/en/services/hdd-data-recovery.html</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="https://alfareslab.com/services/hdd-data-recovery.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://alfareslab.com/en/services/hdd-data-recovery.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://alfareslab.com/services/hdd-data-recovery.html"/>
    <lastmod>2026-05-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  ```
- Language toggle: use existing component — do NOT redesign it

**🔄 برومبت بدء هذه المرحلة:**
```text
Read plans/44-en-content-rollout.md (Phase 5).
Read sitemap.xml.
Read index.html.
Inspect the language-toggle in the site header.

Task: Complete the bilingual integration.
Rules:
1. Replace ALL hreflang placeholder comments on Arabic pages with real bidirectional hreflang tags.
2. Add all 14 English URLs to sitemap.xml with xhtml:link annotations.
3. Add xhtml:link annotations to ALL existing Arabic entries in sitemap.xml.
4. Wire the language toggle: AR page → /en/ counterpart, EN page → AR counterpart.
5. Create en/index.html mirroring index.html structure with English content.
6. Add About Lab + Privacy Policy links in /en/ footer.
7. Update project-context.md, project-key.md, changelog.md.
8. Bump version number.
9. Do NOT modify Arabic page content — only <head> section for hreflang.
```

---

## ✅ Validation Checklist (Post-Execution)

| # | Check | Status |
|---|-------|--------|
| 1 | All 14 English pages exist at exact paths from URL Mapping Table | `[ ]` |
| 2 | Every English page has `lang="en" dir="ltr"` | `[ ]` |
| 3 | Every hreflang pair resolves with HTTP 200 (no 404) | `[ ]` |
| 4 | No mixed-language content within any single page | `[ ]` |
| 5 | No untranslated Arabic strings in English pages (nav, footer, buttons, breadcrumbs, alt text) | `[ ]` |
| 6 | All JSON-LD validates on Schema.org Validator | `[ ]` |
| 7 | `sitemap.xml` validates with both languages and `xhtml:link` entries | `[ ]` |
| 8 | Lighthouse SEO ≥ 95 on a sample English page | `[ ]` |
| 9 | All Arabic placeholder comments for hreflang replaced with real tags | `[ ]` |
| 10 | Language toggle works bidirectionally on at least 3 sample pages | `[ ]` |
| 11 | LocalBusiness Schema present on all 10 English service pages | `[ ]` |
| 12 | CSS/JS paths render correctly on all English pages | `[ ]` |
| 13 | WhatsApp auto-switch targets correct number on English service pages | `[ ]` |

---

## 🚫 Out of Scope (Deferred Beyond Plan 44)

- Adding new languages beyond English
- Country-specific subdomains or ccTLDs
- A separate `/en/sitemap.xml`
- Translating blog posts, case studies, or other content not in Plan 40
- Server-side language detection or auto-redirect
- Creating city-specific English pages (e.g., `/en/services/data-recovery-riyadh.html`)

---

## 📊 ملخص النماذج والمراحل

| المرحلة | المهمة | عدد الصفحات | النموذج | Effort |
|---------|--------|-------------|---------|--------|
| 1 | صفحات التخزين الأساسية (EN) | 3 | 🟠 Gemini Pro | 45 min |
| 2 | الصفحات المتقدمة (EN) | 7 | 🟠 Gemini Pro | 90 min |
| 3 | الصفحات الجغرافية (EN) | 2 | 🟢 Gemini Flash | 30 min |
| 4 | الصفحات الخاصة (EN) | 2 | 🟢 Gemini Flash | 30 min |
| 5 | Hreflang + Sitemap + Linking + Docs | — | 🟠 Gemini Pro | 60 min |
| **Total** | | **14 pages** | | **~4 hours** |

> ⚠️ المجهود المقدر أعلى من Plan 43 (~2.5h) بسبب:
> - Phase 5 أكبر بكثير (hreflang activation على 14 صفحة عربية + sitemap restructuring + language toggle wiring + en/index.html)
> - Phase 2 فيها 7 صفحات بدلاً من 3

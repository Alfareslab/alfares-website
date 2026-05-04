# 🗺️ Plan 43: Content Rollout for Service Pages
> **Version:** 1.1.0
> **Date:** 2026-05-03
> **Methodology:** Multi-Model Development
> **Changelog:** v1.1.0 clarifies Arabic-only scope, fixes special-page paths, and defers English rollout to Plan 44.
> **Scope Note:** This plan covers Arabic content rollout only. English content rollout (from `plans/40-en-service-pages-content.md`), hreflang implementation, and the `/en/` directory structure are deferred to Plan 44 and are intentionally out of scope here.
> **Reference:** `docs/service-pages-decisions-report.md`

---

## 🎯 الهدف العام

تعميم قالب صفحة الخدمات (الذي تم اعتماده بنجاح في `hdd-data-recovery.html`) على الـ 13 صفحة المتبقية من المشروع، باستخدام المحتوى العربي المعتمد في خطة `38-ar-service-pages-content.md`. تشمل الخطة أيضاً تحديث الروابط الداخلية وخريطة الموقع (Sitemap) في النهاية لضمان أرشفة الصفحات الجديدة بشكل صحيح.

---

## 📅 المراحل التنفيذية

---

### **المرحلة 1: بناء صفحات خدمات التخزين الأساسية 💾**
> **النموذج:** `Gemini Pro` 🟠
> **الهدف:** إنشاء صفحات (SSD, Flash/SD, Mac)
> **يعتمد على:** جاهزية القالب (مكتمل)

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | عمل Commit محلي للتغييرات قبل بدء المرحلة (git add & git commit). |
| `[x]` | `[x]` | إنشاء `services/ssd-data-recovery.html` وتعبئة محتوى SSD. |
| `[x]` | `[x]` | إنشاء `services/flash-sd-recovery.html` وتعبئة محتوى الفلاشات وكروت الميموري. |
| `[x]` | `[x]` | إنشاء `services/mac-data-recovery.html` وتعبئة محتوى أجهزة Apple و Mac. |
| `[x]` | `[x]` | تحديث الـ Meta Tags والـ Schema.org (Service, FAQ, Breadcrumb) لكل صفحة. |
| `[x]` | `[x]` | التأكد من استخدام `class="service-page"` على الـ `<main>`. |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [x] المتطلبات واضحة 100% من `plan 38` ولا يوجد `[محتاج توضيح]`.
- [x] المحتوى سيتم نسخه كما هو بدون تغيير أو تأليف من النموذج.
- [x] كل ملف سيكون مستقلاً بدون الاعتماد على مكونات خارجية جديدة.

**Key Constraints:**
- استخدام قالب صفحة HDD كمرجع أساسي.
- استبدال الـ URLs في الـ Canonical والـ Schema ليتوافق مع كل صفحة.
- عدم المساس بملفات الـ CSS أو الـ JS (فقط HTML).

**🔄 برومبت بدء هذه المرحلة:**
```text
Read plans/43-content-rollout.md (Phase 1).
Read services/hdd-data-recovery.html (as the base template).
Read plans/38-ar-service-pages-content.md (for content).

Task: Create the 3 basic storage service pages (SSD, Flash/SD, Mac).
Rules:
1. Duplicate the hdd template for each.
2. Insert exact Arabic content from plan 38.
3. Update ALL metadata, canonicals, and Schema.org placeholders for each specific service.
4. Ensure the AreaServed in Schema remains "Jeddah" (default).
```

---

### **المرحلة 2: بناء صفحات الخدمات المتقدمة 🛡️**
> **النموذج:** `Gemini Pro` 🟠
> **الهدف:** إنشاء صفحات (RAID, DVR, Ransomware)
> **يعتمد على:** المرحلة 1 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | عمل Commit محلي للتغييرات قبل بدء المرحلة (git add & git commit). |
| `[x]` | `[x]` | إنشاء `services/raid-server-recovery.html` وتعبئة محتوى السيرفرات وأنظمة RAID. |
| `[x]` | `[x]` | إنشاء `services/dvr-data-recovery.html` وتعبئة محتوى كاميرات المراقبة. |
| `[x]` | `[x]` | إنشاء `services/ransomware-database-recovery.html` وتعبئة محتوى قواعد البيانات وفيروسات الفدية. |
| `[x]` | `[x]` | تحديث الـ Meta Tags والـ Schema.org لكل صفحة. |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [x] المتطلبات واضحة 100% من `plan 38`.
- [x] المحتوى التقني الثقيل (مثل RAID) يتم نقله بدقة عالية.

**Key Constraints:**
- التأكد من مطابقة عدد الأسئلة الشائعة في الـ HTML لعددها في الـ FAQ Schema.
- الالتزام بهيكلة الـ H2.

**🔄 برومبت بدء هذه المرحلة:**
```text
Read plans/43-content-rollout.md (Phase 2).
Read services/hdd-data-recovery.html (as the base template).
Read plans/38-ar-service-pages-content.md (for content).

Task: Create the 3 advanced service pages (RAID, DVR, Ransomware).
Rules:
1. Duplicate the hdd template for each.
2. Insert exact Arabic content from plan 38.
3. Update ALL metadata, canonicals, and Schema.org specific to the service.
```

---

### **المرحلة 3: بناء الصفحات الجغرافية الفروع (Category B) 🗺️**
> **النموذج:** `Gemini Flash` 🟢
> **الهدف:** تحديث صفحة مكة المستقلة وصفحة السعودية العامة للاستهداف الجغرافي الواسع
> **يعتمد على:** المرحلة 2 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[ ]` | `[ ]` | عمل Commit محلي للتغييرات قبل بدء المرحلة (git add & git commit). |
| `[x]` | `[x]` | تحديث `services/data-recovery-makkah.html` كمكة الأساسية مع استهداف `Mecca` داخل الـ English title. |
| `[x]` | `[x]` | تحديث `services/data-recovery-saudi-arabia.html` كصفحة عامة لكل مدن المملكة المذكورة (الرياض، الدمام، المدينة، وغيرها). |
| `[x]` | `[x]` | عدم إنشاء صفحات مكررة للرياض/المدينة/الدمام لتجنب Duplicate Content لأن المحتوى المعتمد لها صفحة وطنية واحدة. |
| `[x]` | `[x]` | تحديث `AreaServed` في Schema.org ليتوافق مع مكة والسعودية. |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [x] التمييز بوضوح بين محتوى مكة المستقل والمحتوى الوطني العام.
- [x] تثبيت `data-recovery-makkah.html` كالرابط الأساسي لمكة وتجنب إنشاء `data-recovery-mecca.html` كمكرر.
- [x] تثبيت `data-recovery-saudi-arabia.html` كالرابط الأساسي للاستهداف الوطني الواسع.

**Key Constraints:**
- عدم إنشاء صفحات مكررة بنفس النص للرياض أو الدمام أو المدينة.
- استخدام المحتوى العربي المعتمد كما هو من الخطة 38.
- تحديث فقرة الـ H1 ومقدمة الـ CTA بما يتوافق مع مكة أو صفحة السعودية العامة.

**🔄 برومبت بدء هذه المرحلة:**
```text
Read plans/43-content-rollout.md (Phase 3).
Read services/hdd-data-recovery.html (as the base template).
Read plans/38-ar-service-pages-content.md (for geographic content).

Task: Complete the geographic service pages using the approved broad-targeting strategy.
Rules:
1. Rebuild services/data-recovery-makkah.html from the hdd template using exact Makkah Arabic content from plan 38.
2. Use Makkah as the canonical URL slug, and include Mecca in the English title/metadata only.
3. Rebuild services/data-recovery-saudi-arabia.html from the hdd template using exact Saudi Arabia Arabic content from plan 38.
4. Use the Saudi Arabia page to target Riyadh, Dammam, Madinah, and all listed cities.
5. Do not create duplicate city pages for Riyadh, Madinah, or Dammam unless new city-specific content is produced later.
6. Update AreaServed Schema for Makkah and Saudi Arabia.
```

---

### **المرحلة 4: بناء الصفحات الخاصة (Category C & D) 📜**
> **النموذج:** `Gemini Flash` 🟢
> **الهدف:** إنشاء صفحة المعمل (About Lab) وسياسة الخصوصية
> **يعتمد على:** المرحلة 3 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[ ]` | `[ ]` | عمل Commit محلي للتغييرات قبل بدء المرحلة (git add & git commit). |
| `[x]` | `[x]` | بناء `about-lab.html` باستخدام قالب Category C. |
| `[x]` | `[x]` | بناء `privacy-policy.html` باستخدام قالب Category D. |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [x] فهم الفروق بين قوالب Category A وقوالب C & D (بدون زر طوارئ، بدون FAQ في سياسة الخصوصية).

**Key Constraints:**
- صفحة `about-lab` تركز على التقنية ولا تحتوي على لغة طوارئ.
- صفحة `privacy-policy` تحتوي على Schema من نوع `WebPage` بدلاً من `Service`.

**🔄 برومبت بدء هذه المرحلة:**
```text
Read plans/43-content-rollout.md (Phase 4).
Read plans/42-service-page-templates.md (to recall rules for Category C & D templates).
Read plans/38-ar-service-pages-content.md.

Task: Build About Lab and Privacy Policy pages.
Rules:
1. Use the specific template constraints designed for these in plan 42 (no FAQ for privacy, no emergency CTA).
2. Build about-lab.html at the project root.
3. Build privacy-policy.html at the project root.
```

---

### **المرحلة 5: الربط الداخلي وتحديث خريطة الموقع 🔗**
> **النموذج:** `Gemini Pro` 🟠
> **الهدف:** ربط الصفحات الجديدة بالصفحة الرئيسية وتحديث الـ Sitemap
> **يعتمد على:** المرحلة 4 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[ ]` | `[ ]` | عمل Commit محلي للتغييرات قبل بدء المرحلة (git add & git commit). |
| `[x]` | `[x]` | إضافة روابط الصفحات الـ 14 إلى قسم الخدمات في `index.html`. |
| `[x]` | `[x]` | إضافة روابط (عن المعمل، سياسة الخصوصية) في قائمة الفوتر (`index.html`). |
| `[x]` | `[x]` | تحديث ملف `sitemap.xml` بجميع الـ URLs الجديدة. |
| `[x]` | `[x]` | إزالة `robots: noindex` من الصفحات إن وجد. |
| `[x]` | `[x]` | Verify LocalBusiness Schema is present on all 10 service pages (in addition to Service + FAQPage + BreadcrumbList). Add it where missing. |
| `[x]` | `[x]` | Add an HTML comment placeholder for hreflang tags on every page header: `<!-- hreflang tags will be added in Plan 44 -->`. Do NOT add real hreflang yet. |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [x] جميع الصفحات الـ 14 تم إنشاؤها بنجاح وبدون أخطاء.

**Key Constraints:**
- التأكد من أن الروابط تعمل بشكل صحيح (لا توجد 404).

**🔄 برومبت بدء هذه المرحلة:**
```text
Read plans/43-content-rollout.md (Phase 5).
Read index.html and sitemap.xml.

Task: Update index.html internal linking and sitemap.xml.
Rules:
1. Link the new services in the Services section of index.html.
2. Update the footer links to include the Privacy Policy and About Lab.
3. Add all 14 pages to sitemap.xml with proper priority.
4. Verify LocalBusiness Schema exists on all 10 service pages alongside Service, FAQPage, and BreadcrumbList.
5. Add only this hreflang placeholder comment to every page header: <!-- hreflang tags will be added in Plan 44 -->.
6. Do not add real hreflang tags in Plan 43.
```

---

## 📊 ملخص النماذج والمراحل

| المرحلة | المهمة | النموذج | Effort |
|---------|---------|---------|--------|
| 1 | صفحات التخزين الأساسية | 🟠 Gemini Pro | 45 min |
| 2 | الصفحات المتقدمة | 🟠 Gemini Pro | 45 min |
| 3 | الصفحات الجغرافية | 🟢 Gemini Flash | 30 min |
| 4 | الصفحات الخاصة | 🟢 Gemini Flash | 30 min |
| 5 | الربط وتحديث Sitemap | 🟠 Gemini Pro | 20 min |
| **Total** | | | **~2.5 hours** |

---

## 🔜 Out of Scope (Deferred to Plan 44)

- English content from Plan 40
- `/en/` directory structure
- Bidirectional hreflang tags
- English sitemap entries
- Bilingual testing

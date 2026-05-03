# 🗺️ Plan 43: Content Rollout for Service Pages
> **Version:** 1.0.0
> **Date:** 2026-05-03
> **Methodology:** Multi-Model Development
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
| `[ ]` | `[ ]` | إنشاء `services/ssd-data-recovery.html` وتعبئة محتوى SSD. |
| `[ ]` | `[ ]` | إنشاء `services/flash-sd-recovery.html` وتعبئة محتوى الفلاشات وكروت الميموري. |
| `[ ]` | `[ ]` | إنشاء `services/mac-data-recovery.html` وتعبئة محتوى أجهزة Apple و Mac. |
| `[ ]` | `[ ]` | تحديث الـ Meta Tags والـ Schema.org (Service, FAQ, Breadcrumb) لكل صفحة. |
| `[ ]` | `[ ]` | التأكد من استخدام `class="service-page"` على الـ `<main>`. |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [ ] المتطلبات واضحة 100% من `plan 38` ولا يوجد `[محتاج توضيح]`.
- [ ] المحتوى سيتم نسخه كما هو بدون تغيير أو تأليف من النموذج.
- [ ] كل ملف سيكون مستقلاً بدون الاعتماد على مكونات خارجية جديدة.

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
| `[ ]` | `[ ]` | إنشاء `services/raid-server-recovery.html` وتعبئة محتوى السيرفرات وأنظمة RAID. |
| `[ ]` | `[ ]` | إنشاء `services/dvr-data-recovery.html` وتعبئة محتوى كاميرات المراقبة. |
| `[ ]` | `[ ]` | إنشاء `services/ransomware-database-recovery.html` وتعبئة محتوى قواعد البيانات وفيروسات الفدية. |
| `[ ]` | `[ ]` | تحديث الـ Meta Tags والـ Schema.org لكل صفحة. |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [ ] المتطلبات واضحة 100% من `plan 38`.
- [ ] المحتوى التقني الثقيل (مثل RAID) يتم نقله بدقة عالية.

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
> **الهدف:** إنشاء صفحات الاستهداف الجغرافي (الرياض، مكة، المدينة، الدمام)
> **يعتمد على:** المرحلة 2 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[ ]` | `[ ]` | إنشاء `services/data-recovery-riyadh.html` |
| `[ ]` | `[ ]` | إنشاء `services/data-recovery-mecca.html` |
| `[ ]` | `[ ]` | إنشاء `services/data-recovery-medina.html` |
| `[ ]` | `[ ]` | إنشاء `services/data-recovery-dammam.html` |
| `[ ]` | `[ ]` | تحديث `AreaServed` في Schema.org ليتوافق مع المدينة. |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [ ] التمييز بوضوح بين محتوى كل مدينة وتجنب النسخ العشوائي.
- [ ] تحديث روابط الكانونيكال لتشير لاسم المدينة باللغة الإنجليزية في الـ URL.

**Key Constraints:**
- تعديل فقرة الـ H1 ومقدمة الـ CTA لتناسب المدينة المقصودة (كما هو محدد في الخطة 38).

**🔄 برومبت بدء هذه المرحلة:**
```text
Read plans/43-content-rollout.md (Phase 3).
Read services/hdd-data-recovery.html (as the base template).
Read plans/38-ar-service-pages-content.md (for geographic content).

Task: Create the 4 geographic service pages.
Rules:
1. Duplicate the hdd template for each.
2. Insert exact Arabic content from plan 38.
3. Ensure City is updated in AreaServed Schema.
```

---

### **المرحلة 4: بناء الصفحات الخاصة (Category C & D) 📜**
> **النموذج:** `Gemini Flash` 🟢
> **الهدف:** إنشاء صفحة المعمل (About Lab) وسياسة الخصوصية
> **يعتمد على:** المرحلة 3 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[ ]` | `[ ]` | بناء `services/about-lab.html` باستخدام قالب Category C. |
| `[ ]` | `[ ]` | بناء `services/privacy-policy.html` باستخدام قالب Category D. |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [ ] فهم الفروق بين قوالب Category A وقوالب C & D (بدون زر طوارئ، بدون FAQ في سياسة الخصوصية).

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
```

---

### **المرحلة 5: الربط الداخلي وتحديث خريطة الموقع 🔗**
> **النموذج:** `Gemini Pro` 🟠
> **الهدف:** ربط الصفحات الجديدة بالصفحة الرئيسية وتحديث الـ Sitemap
> **يعتمد على:** المرحلة 4 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[ ]` | `[ ]` | إضافة روابط الصفحات الـ 14 إلى قسم الخدمات في `index.html`. |
| `[ ]` | `[ ]` | إضافة روابط (عن المعمل، سياسة الخصوصية) في قائمة الفوتر (`index.html`). |
| `[ ]` | `[ ]` | تحديث ملف `sitemap.xml` بجميع الـ URLs الجديدة. |
| `[ ]` | `[ ]` | إزالة `robots: noindex` من الصفحات إن وجد. |

**🚪 بوابات ما قبل التنفيذ (Pre-Implementation Gates):**
- [ ] جميع الصفحات الـ 14 تم إنشاؤها بنجاح وبدون أخطاء.

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

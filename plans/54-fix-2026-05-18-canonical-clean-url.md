# إصلاح Canonical Mismatch — Clean URL Fix
> **الإصدار:** 1.0.0
> **التاريخ:** 2026-05-18
> **الحالة:** مكتملة ✅
> **المرجع:** `docs/Google_indexing/03-alfareslab.com SEO Indexing Audit_2026-5-17` — المراحل 1-9

---

## الهدف

إصلاح السبب الجذري لعدم فهرسة 28 صفحة من أصل 30 على Google.
المشكلة: Cloudflare Pages يحوّل جميع روابط `.html` تلقائياً إلى Clean URLs بـ 308 Redirect، لكن جميع وسوم canonical وhreflang وسطور sitemap.xml لا تزال تشير لـ `.html` — فيرى Google canonical يشير لـ URL يعيد توجيهاً ويرفض فهرسة الصفحة.

---

## المتطلبات

- الفهم الكامل للمشكلة موثق في تقرير الفحص (المرحلة 8)
- الحل يمس 28 ملف HTML + sitemap.xml فقط — لا تغيير في المحتوى أو التصميم
- بعد التعديل: إرسال طلب إعادة فهرسة من GSC لجميع الصفحات المُصلحة

---

## خطوات التنفيذ

---

### المجموعة 1: إصلاح SEO Tags في صفحات الخدمة العربية 🔴

> 12 ملف في `services/` — الهدف: تحديث canonical + hreflang + og:url لكل ملف

| Done | Task |
| :---: | :--- |
| `[x]` | `[🤖]` **1.1** `services/hdd-data-recovery.html` — احذف `.html` من canonical + الـ 3 hreflang + og:url |
| `[x]` | `[🤖]` **1.2** `services/external-hdd-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **1.3** `services/ssd-nvme-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **1.4** `services/laptop-pc-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **1.5** `services/mac-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **1.6** `services/raid-nas-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **1.7** `services/flash-sd-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **1.8** `services/dvr-nvr-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **1.9** `services/ransomware-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **1.10** `services/database-erp-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **1.11** `services/data-recovery-makkah.html` — نفس التعديل |
| `[x]` | `[🤖]` **1.12** `services/data-recovery-saudi-arabia.html` — نفس التعديل |

**النمط الثابت لكل ملف في `services/`:**
```html
<!-- قبل -->
<link rel="canonical" href="https://alfareslab.com/services/PAGE-NAME.html">
<link rel="alternate" hreflang="ar"        href="https://alfareslab.com/services/PAGE-NAME.html">
<link rel="alternate" hreflang="en"        href="https://alfareslab.com/en/services/PAGE-NAME.html">
<link rel="alternate" hreflang="x-default" href="https://alfareslab.com/services/PAGE-NAME.html">
<meta property="og:url" content="https://alfareslab.com/services/PAGE-NAME.html">

<!-- بعد -->
<link rel="canonical" href="https://alfareslab.com/services/PAGE-NAME">
<link rel="alternate" hreflang="ar"        href="https://alfareslab.com/services/PAGE-NAME">
<link rel="alternate" hreflang="en"        href="https://alfareslab.com/en/services/PAGE-NAME">
<link rel="alternate" hreflang="x-default" href="https://alfareslab.com/services/PAGE-NAME">
<meta property="og:url" content="https://alfareslab.com/services/PAGE-NAME">
```

⏸️ **Review Gate 1** — صفحات الخدمة العربية اكتملت (12 ملف)
انتظر موافقة المطور قبل الانتقال إلى: المجموعة 2

---

### المجموعة 2: إصلاح SEO Tags في صفحات الخدمة الإنجليزية 🔴

> 12 ملف في `en/services/`

| Done | Task |
| :---: | :--- |
| `[x]` | `[🤖]` **2.1** `en/services/hdd-data-recovery.html` — احذف `.html` من canonical + الـ 3 hreflang + og:url |
| `[x]` | `[🤖]` **2.2** `en/services/external-hdd-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **2.3** `en/services/ssd-nvme-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **2.4** `en/services/laptop-pc-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **2.5** `en/services/mac-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **2.6** `en/services/raid-nas-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **2.7** `en/services/flash-sd-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **2.8** `en/services/dvr-nvr-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **2.9** `en/services/ransomware-data-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **2.10** `en/services/database-erp-recovery.html` — نفس التعديل |
| `[x]` | `[🤖]` **2.11** `en/services/data-recovery-makkah.html` — نفس التعديل |
| `[x]` | `[🤖]` **2.12** `en/services/data-recovery-saudi-arabia.html` — نفس التعديل |

**النمط الثابت لكل ملف في `en/services/`:**
```html
<!-- قبل -->
<link rel="canonical" href="https://alfareslab.com/en/services/PAGE-NAME.html">
<link rel="alternate" hreflang="ar"        href="https://alfareslab.com/services/PAGE-NAME.html">
<link rel="alternate" hreflang="en"        href="https://alfareslab.com/en/services/PAGE-NAME.html">
<link rel="alternate" hreflang="x-default" href="https://alfareslab.com/services/PAGE-NAME.html">
<meta property="og:url" content="https://alfareslab.com/en/services/PAGE-NAME.html">

<!-- بعد -->
<link rel="canonical" href="https://alfareslab.com/en/services/PAGE-NAME">
<link rel="alternate" hreflang="ar"        href="https://alfareslab.com/services/PAGE-NAME">
<link rel="alternate" hreflang="en"        href="https://alfareslab.com/en/services/PAGE-NAME">
<link rel="alternate" hreflang="x-default" href="https://alfareslab.com/services/PAGE-NAME">
<meta property="og:url" content="https://alfareslab.com/en/services/PAGE-NAME">
```

⏸️ **Review Gate 2** — صفحات الخدمة الإنجليزية اكتملت (12 ملف)
انتظر موافقة المطور قبل الانتقال إلى: المجموعة 3

---

### المجموعة 3: إصلاح SEO Tags في صفحات الثقة 🔴

> 4 ملفات: about-lab و privacy-policy (عربي + إنجليزي)

| Done | Task |
| :---: | :--- |
| `[x]` | `[🤖]` **3.1** `about-lab.html` — احذف `.html` من canonical + الـ 3 hreflang + og:url |
| `[x]` | `[🤖]` **3.2** `privacy-policy.html` — نفس التعديل |
| `[x]` | `[🤖]` **3.3** `en/about-lab.html` — نفس التعديل |
| `[x]` | `[🤖]` **3.4** `en/privacy-policy.html` — نفس التعديل |

**ملاحظة:** `index.html` و `en/index.html` و `404.html` **لا تحتاج تعديل canonical** — قيمها (`/` و `/en/` و `/404.html`) صحيحة أو noindex. فحص hreflang فيهما فقط للتأكد أنها لا تشير لصفحات أخرى بـ `.html`.

| Done | Task |
| :---: | :--- |
| `[x]` | `[🤖]` **3.5** افتح `index.html` — تحقق من hreflang: هل يشير فقط لـ `/` و `/en/`؟ لو نعم لا تغيير. لو يشير لـ `.html` صحح |
| `[x]` | `[🤖]` **3.6** افتح `en/index.html` — نفس الفحص |

⏸️ **Review Gate 3** — صفحات الثقة والصفحة الرئيسية اكتملت
انتظر موافقة المطور قبل الانتقال إلى: المجموعة 4

---

### المجموعة 4: تحديث sitemap.xml 🔴

> تحديث شامل — 28 URL بصيغة `.html` + annotations الـ hreflang

| Done | Task |
| :---: | :--- |
| `[x]` | `[🤖]` **4.1** افتح `sitemap.xml` — ابحث عن كل `<loc>` ينتهي بـ `.html` وأزل الامتداد |
| `[x]` | `[🤖]` **4.2** في نفس الملف: ابحث عن كل `<xhtml:link href="...">` تنتهي بـ `.html` وأزل الامتداد |
| `[x]` | `[🤖]` **4.3** تحقق نهائي: لا يبقى أي `.html` في الملف كله ما عدا الـ `lastmod` وأي نص وصفي |
| `[x]` | `[🤖]` **4.4** تحديث `<lastmod>` لجميع الـ 30 URL إلى `2026-05-18` |

**مثال على التعديل في sitemap.xml:**
```xml
<!-- قبل -->
<url>
  <loc>https://alfareslab.com/services/hdd-data-recovery.html</loc>
  <xhtml:link rel="alternate" hreflang="ar" href="https://alfareslab.com/services/hdd-data-recovery.html"/>
  <xhtml:link rel="alternate" hreflang="en" href="https://alfareslab.com/en/services/hdd-data-recovery.html"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://alfareslab.com/services/hdd-data-recovery.html"/>
</url>

<!-- بعد -->
<url>
  <loc>https://alfareslab.com/services/hdd-data-recovery</loc>
  <xhtml:link rel="alternate" hreflang="ar" href="https://alfareslab.com/services/hdd-data-recovery"/>
  <xhtml:link rel="alternate" hreflang="en" href="https://alfareslab.com/en/services/hdd-data-recovery"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://alfareslab.com/services/hdd-data-recovery"/>
</url>
```

⏸️ **Review Gate 4** — sitemap.xml محدّث
انتظر موافقة المطور قبل الانتقال إلى: المجموعة 5

---

### المجموعة 5: إصلاح مصدر الـ 404 المعلّق 🟡

> URL مكسور: `https://alfareslab.com/"` — رابط بعلامة اقتباس — مصدره غير محدد

| Done | Task |
| :---: | :--- |
| `[x]` | `[🤖]` **5.1** ابحث في جميع ملفات HTML عن `href="/"` أو `href='"'` أو أي رابط مكسور قد يولد URL بعلامة اقتباس |
| `[x]` | `[🤖]` **5.2** ابحث في `assets/js/main.js` عن أي كود يولد URL يحتوي `"` |
| `[x]` | `[🤖]` **5.3** إذا وُجد المصدر: أصلحه. إذا لم يُوجد: سجّل في الملاحظات — **النتيجة: لا مصدر وُجد، أثر تاريخي من قبل الإصلاح** |

⏸️ **Review Gate 5** — تحقيق الـ 404 المكسور اكتمل
انتظر موافقة المطور قبل الانتقال إلى: المجموعة 6

---

### المجموعة 6: Schema JSON-LD URL Fix 🟢

> تحديث حقول `url` و `@id` في JSON-LD داخل صفحات الخدمة لتتطابق مع Clean URLs

| Done | Task |
| :---: | :--- |
| `[x]` | `[🤖]` **6.1** في كل `services/*.html` (12 ملف): ابحث داخل `<script type="application/ld+json">` عن حقول `"url"` و `"@id"` التي تحتوي `.html` وأزل الامتداد |
| `[x]` | `[🤖]` **6.2** نفس التعديل في `en/services/*.html` (12 ملف) |
| `[x]` | `[🤖]` **6.3** نفس التعديل في `about-lab.html` و `privacy-policy.html` و نسختيهما الإنجليزية |
| `[x]` | `[🤖]` **6.4 (إضافي)** إصلاح `twitter:url` في كل 28 ملف (فات من المجموعات 1-3) |
| `[x]` | `[🤖]` **6.5 (إضافي)** إصلاح حقل `"item"` في BreadcrumbList JSON-LD في كل 28 ملف |
| `[x]` | `[🤖]` **6.6 (إضافي)** إصلاح JSON-LD في `index.html` و `en/index.html` (56 قيمة url) |
| `[x]` | `[🤖]` **6.7 (إضافي)** إزالة BOM من `sitemap.xml` |

---

### المجموعة 7: إنشاء llms.txt 🟢

> ملف توجيهي لـ LLM crawlers — لا إلزام SEO لكنه يحسن AI Search visibility

| Done | Task |
| :---: | :--- |
| `[x]` | `[🤖]` **7.1** أنشئ `llms.txt` في جذر المشروع بالمحتوى التالي: |

```
# Al-Fares Center — Data Recovery & Computer Repair, Jeddah
# https://alfareslab.com

## About
Al-Fares Center is a data recovery and computer repair lab in Jeddah, Saudi Arabia.
Established with 12+ years of industry experience. Services include HDD, SSD, RAID, DVR, Mac, ransomware recovery.

## Key Pages
- Homepage (AR): https://alfareslab.com/
- Homepage (EN): https://alfareslab.com/en/
- HDD Recovery: https://alfareslab.com/services/hdd-data-recovery
- SSD Recovery: https://alfareslab.com/services/ssd-nvme-data-recovery
- RAID/NAS Recovery: https://alfareslab.com/services/raid-nas-data-recovery
- About Lab: https://alfareslab.com/about-lab
- Privacy Policy: https://alfareslab.com/privacy-policy

## Contact
Phone: +966507322542
Location: Jeddah, Saudi Arabia
```

---

### المجموعة 8: التوثيق 📋

| Done | Task |
| :---: | :--- |
| `[x]` | `[🤖]` **8.1** تحديث `project-context.md` — إضافة Plan 54 للجدول + تحديث "Known Issues" |
| `[x]` | `[🤖]` **8.2** تحديث `project-key.md` — إضافة `llms.txt` في هيكل الملفات |
| `[x]` | `[🤖]` **8.3** تحديث `changelog.md` — تسجيل التغييرات تحت إصدار جديد `v1.2.5` |

---

### المجموعة 9: النشر والتحقق ما بعد Deploy 🚀

> تُنفَّذ يدوياً بعد الـ git commit والـ deploy على Cloudflare Pages

| Done | Task |
| :---: | :--- |
| `[ ]` | **9.1** git commit + push → Cloudflare يعمل deploy تلقائي |
| `[ ]` | **9.2** `curl -I https://alfareslab.com/services/hdd-data-recovery.html` → يجب: 308 redirect → clean URL |
| `[ ]` | **9.3** `curl -s https://alfareslab.com/services/hdd-data-recovery \| grep canonical` → يجب: clean URL بدون .html |
| `[ ]` | **9.4** `curl -I https://alfareslab.com/sitemap.xml` → يجب: 200 OK |
| `[ ]` | **9.5** GSC → URL Inspection → "Test Live URL" على: `services/hdd-data-recovery`، `about-lab`، `privacy-policy` |
| `[ ]` | **9.6** Rich Results Test على صفحة خدمة واحدة — تأكد Schema JSON-LD تُقرأ صح |
| `[ ]` | **9.7** لو كل التحققات تمام → GSC → Sitemaps → أعد تقديم `sitemap.xml` |
| `[ ]` | **9.8** GSC → URL Inspection → طلب فهرسة يدوية لـ: `services/hdd-data-recovery`، `about-lab`، `privacy-policy` |

**ملاحظة:** لا تُنفّذ 9.7 و9.8 إلا بعد نجاح 9.2–9.6 جميعها.

---

## الملفات المتأثرة

| الملف | نوع التغيير | المجموعة |
|-------|-------------|----------|
| `services/hdd-data-recovery.html` | تعديل SEO tags | 1 |
| `services/external-hdd-data-recovery.html` | تعديل SEO tags | 1 |
| `services/ssd-nvme-data-recovery.html` | تعديل SEO tags | 1 |
| `services/laptop-pc-data-recovery.html` | تعديل SEO tags | 1 |
| `services/mac-data-recovery.html` | تعديل SEO tags | 1 |
| `services/raid-nas-data-recovery.html` | تعديل SEO tags | 1 |
| `services/flash-sd-data-recovery.html` | تعديل SEO tags | 1 |
| `services/dvr-nvr-data-recovery.html` | تعديل SEO tags | 1 |
| `services/ransomware-data-recovery.html` | تعديل SEO tags | 1 |
| `services/database-erp-recovery.html` | تعديل SEO tags | 1 |
| `services/data-recovery-makkah.html` | تعديل SEO tags | 1 |
| `services/data-recovery-saudi-arabia.html` | تعديل SEO tags | 1 |
| `en/services/hdd-data-recovery.html` | تعديل SEO tags | 2 |
| `en/services/external-hdd-data-recovery.html` | تعديل SEO tags | 2 |
| `en/services/ssd-nvme-data-recovery.html` | تعديل SEO tags | 2 |
| `en/services/laptop-pc-data-recovery.html` | تعديل SEO tags | 2 |
| `en/services/mac-data-recovery.html` | تعديل SEO tags | 2 |
| `en/services/raid-nas-data-recovery.html` | تعديل SEO tags | 2 |
| `en/services/flash-sd-data-recovery.html` | تعديل SEO tags | 2 |
| `en/services/dvr-nvr-data-recovery.html` | تعديل SEO tags | 2 |
| `en/services/ransomware-data-recovery.html` | تعديل SEO tags | 2 |
| `en/services/database-erp-recovery.html` | تعديل SEO tags | 2 |
| `en/services/data-recovery-makkah.html` | تعديل SEO tags | 2 |
| `en/services/data-recovery-saudi-arabia.html` | تعديل SEO tags | 2 |
| `about-lab.html` | تعديل SEO tags | 3 |
| `privacy-policy.html` | تعديل SEO tags | 3 |
| `en/about-lab.html` | تعديل SEO tags | 3 |
| `en/privacy-policy.html` | تعديل SEO tags | 3 |
| `index.html` | فحص hreflang فقط | 3 |
| `en/index.html` | فحص hreflang فقط | 3 |
| `sitemap.xml` | تحديث شامل | 4 |
| `assets/js/main.js` | فحص فقط | 5 |
| `llms.txt` | جديد | 7 |
| `project-context.md` | توثيق | 8 |
| `project-key.md` | توثيق | 8 |
| `changelog.md` | توثيق | 8 |

---

## ملاحظات

| # | الملاحظة |
|---|----------|
| 1 | **الأولوية:** المجموعات 1-4 حرجة وكافية لإصلاح مشكلة الفهرسة. المجموعات 5-7 مهمة لكن لا تؤخر الـ deploy |
| 2 | **بعد الـ deploy:** أرسل طلب فهرسة من GSC لـ: `alfareslab.com/services/hdd-data-recovery`، `alfareslab.com/about-lab`، `alfareslab.com/privacy-policy`، ثم أعد تقديم sitemap.xml |
| 3 | **لا تعديل على:** محتوى الصفحات، التصميم، JavaScript، CSS، Schema JSON-LD في المجموعات 1-4 |
| 4 | **التحقق بعد التعديل:** افتح أي صفحة خدمة في المتصفح وافحص source — يجب أن يكون canonical بدون `.html` ويتطابق مع URL في address bar |
| 5 | **AI Crawlers blocking:** مشكلة Cloudflare Managed robots.txt — تحتاج إعداد Cloudflare Dashboard وليس تعديل ملف robots.txt المحلي. مؤجلة لنقاش منفصل |

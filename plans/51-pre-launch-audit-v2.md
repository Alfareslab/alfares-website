# 🔍 Pre-Launch Full Audit v2 — Al-Fares Lab
> **Version:** 1.0.0
> **Date:** 2026-05-05
> **Type:** Audit — READ-ONLY (NO code modifications allowed)
> **Replaces:** Plan 49 (outdated — site changed significantly since then)
> **Output file:** `docs/audits/51-pre-launch-audit-v2-findings.md`

---

## الهدف

فحص شامل للموقع قبل النشر على Cloudflare Pages. الفحص يغطي SEO، Schema، Sitemap، روابط، ثنائية اللغة، تناسق واجهة المستخدم، والأمان. لا تعديلات على الكود — مراقبة وتوثيق فقط.

**مهم:** هذا ليس تكراراً لـ Plan 49 — الموقع تغيّر كثيراً (Plan 50 + إصلاحات ما بعده). الفحص يعتمد على الحالة الحالية الفعلية.

---

## 🚪 Pre-Implementation Gates

| # | البوابة |
|---|---------|
| 1 | لا تعديلات على الكود مطلقاً — قراءة وتحليل فقط |
| 2 | النتائج تُسجَّل في `docs/audits/51-pre-launch-audit-v2-findings.md` (ملف جديد) |
| 3 | لا تعديل على `docs/audits/49-pre-launch-seo-audit-findings.md` |
| 4 | كل نتيجة مرتبطة بملف وسطر محدد |

---

## المخزون الكامل للصفحات (31 صفحة)

| المجموعة | الصفحات | العدد |
|----------|---------|-------|
| Root (AR) | `index.html`, `about-lab.html`, `privacy-policy.html`, `404.html` | 4 |
| Services (AR) | `services/*.html` (12 صفحة) | 12 |
| EN Homepage | `en/index.html` | 1 |
| EN Trust | `en/about-lab.html`, `en/privacy-policy.html` | 2 |
| EN Services | `en/services/*.html` (12 صفحة) | 12 |
| **المجموع** | | **31** |

---

## المراحل

---

### Phase 1: Canonical, Hreflang & Meta 🔍

**الهدف:** التحقق من صحة canonical وhreflang وmeta tags وعناوين الصفحات على جميع الـ 31 صفحة.

| # | الفحص |
|---|-------|
| 1.1 | كل صفحة فيها `<link rel="canonical">` يشير لـ URL نظيف (بدون `?lang=`) |
| 1.2 | كل صفحة فيها `hreflang` للنسخة العربية والإنجليزية |
| 1.3 | `hreflang="x-default"` موجود ويشير للنسخة العربية |
| 1.4 | لا يوجد `?lang=ar` أو `?lang=en` في أي canonical أو hreflang |
| 1.5 | كل صفحة فيها `<title>` فريد بين 50-60 حرف يحتوي الكلمة المفتاحية الرئيسية |
| 1.6 | كل صفحة فيها `<meta name="description">` فريد بين 150-160 حرف |
| 1.7 | كل صفحة فيها `<h1>` واحد فقط |
| 1.8 | صفحات الخدمة: الـ `<h1>` يحتوي اسم الخدمة + "جدة" (AR) أو "Jeddah" (EN) |

**ملاحظة للمدقق:** الـ titles تغيّرت في Plan 50 — تحقق من الأرقام الفعلية.

---

### Phase 2: Schema.org Validation 🧩

**الهدف:** التحقق من صحة JSON-LD على جميع الصفحات.

| # | الفحص |
|---|-------|
| 2.1 | `index.html` (AR+EN): لا يوجد `AggregateRating` مكتوب يدوياً |
| 2.2 | كل صفحات الخدمة الـ 24: يوجد `Service` Schema مع الحقول: name, description, provider, areaServed, url |
| 2.3 | كل صفحات الخدمة الـ 24: يوجد `FAQPage` Schema مع 3 أسئلة على الأقل |
| 2.4 | كل صفحات الخدمة الـ 24: يوجد `BreadcrumbList` Schema |
| 2.5 | `@id` reference يستخدم `https://alfareslab.com/#organization` بشكل متسق |
| 2.6 | **جديد — بعد تعديل Flash SD:** صفحتا `flash-sd-data-recovery.html` (AR+EN) — Schema FAQ محدّث بالأسئلة الجديدة (لا ذكر لـ PC-3000 Flash أو Monolith) |
| 2.7 | JSON-LD syntax سليم: لا فواصل زائدة، لا أقواس مفتوحة |

---

### Phase 3: Sitemap & Robots 🗺️

**الهدف:** التحقق من صحة sitemap.xml وrobots.txt.

| # | الفحص |
|---|-------|
| 3.1 | `sitemap.xml`: عدد URLs يطابق 31 صفحة (أو أكثر لو في صفحات إضافية) |
| 3.2 | لا يوجد `?lang=` في أي URL في الـ sitemap |
| 3.3 | `hreflang` في الـ sitemap يطابق `hreflang` في الـ HTML |
| 3.4 | كل ملف HTML موجود على الـ disk مذكور في الـ sitemap (لا orphan pages) |
| 3.5 | `robots.txt`: يسمح بالزحف ويشير لـ sitemap بـ URL صحيح |
| 3.6 | URLs في الـ sitemap تطابق canonical URLs في HTML بالضبط |

---

### Phase 4: Internal Links & Assets 🔗

**الهدف:** اكتشاف الروابط المكسورة والملفات الناقصة.

| # | الفحص |
|---|-------|
| 4.1 | كل `<a href="...">` داخلي يشير لملف موجود على الـ disk |
| 4.2 | كل `<img src="...">` يشير لصورة موجودة |
| 4.3 | كل CSS `<link>` و JS `<script>` تشير لملفات موجودة |
| 4.4 | **جديد:** صفوف الخدمة في `index.html` و`en/index.html` — الـ 5 روابط الجديدة في `.service-details` تشير لصفحات موجودة |
| 4.5 | روابط WhatsApp تستخدم `966507322542` (data recovery) في أزرار الـ CTA |
| 4.6 | لا orphan files في الـ root غير مرتبطة من أي مكان |
| 4.7 | `scratch/` و`temp_archive/` — هل هي خارج الـ deploy scope؟ (تحقق من `_redirects` أو Cloudflare config) |

---

### Phase 5: UI/UX & Structural Consistency 🎨

**الهدف:** التحقق من تطبيق جميع تغييرات Plan 50 وإصلاحات ما بعده على جميع الصفحات.

| # | الفحص |
|---|-------|
| 5.1 | `components.css`: `.skip-to-content` قيمة `top` هي `-100px` |
| 5.2 | `layout.css`: `.nav-cta` لونه `#128C7E`، `border-radius: 50px` |
| 5.3 | **جديد:** كل الـ 26 صفحة (index + 24 service + en/index): لا يوجد `<li class="nav-dropdown">` في الـ nav — خدماتنا هو `<li>` عادي |
| 5.4 | **جديد:** `main.js`: `initializeServiceDropdown()` معطّلة (مُعلَّق عليها) |
| 5.5 | **جديد:** `index.html` و`en/index.html`: صفوف `.service-details` في كارت "استعادة البيانات" فيها `<a>` tags |
| 5.6 | رقم الإصدار في footer هو `v1.2.4` على جميع الصفحات |
| 5.7 | `<base href="../">` على AR service pages، `<base href="../../">` على EN service pages |
| 5.8 | Header متسق على جميع الـ 31 صفحة (brand، nav items، controls) |
| 5.9 | Footer متسق على جميع الـ 31 صفحة (service links، trust links، contact) |

---

### Phase 6: Bilingual Integrity 🌐

**الهدف:** التحقق من اكتمال وصحة الثنائية اللغوية.

| # | الفحص |
|---|-------|
| 6.1 | `lang/ar.json` و`lang/en.json`: نفس مجموعة الـ keys في الملفين |
| 6.2 | كل صفحة AR في `services/` لها مقابل EN في `en/services/` |
| 6.3 | `about-lab.html` و`privacy-policy.html` لهما مقابل في `en/` |
| 6.4 | **جديد:** صفحتا flash-sd (AR+EN) المحتوى المحدّث متسق — لا ذكر PC-3000 Flash في أي منهما |
| 6.5 | `<html lang="ar" dir="rtl">` على AR pages، `<html lang="en" dir="ltr">` على EN pages |
| 6.6 | EN service pages: nav.services href هو `en/#services` (ليس `../#services`) |

---

### Phase 7: 404 & Error Handling ⛔

**الهدف:** التحقق من معالجة صفحة الخطأ.

| # | الفحص |
|---|-------|
| 7.1 | `404.html` موجود في الـ root |
| 7.2 | `404.html` يحتوي `<meta name="robots" content="noindex, nofollow">` |
| 7.3 | `404.html` يحتوي `<link rel="canonical">` |
| 7.4 | لا يوجد `_redirects` بـ catch-all rule (`/* /index.html 200`) |
| 7.5 | لو يوجد `_headers` — لا يوجد فيه rules تتعارض مع 404 |

---

### Phase 8: Security Check 🔒 *(جديد)*

**الهدف:** فحص أمان الموقع كـ static site على Cloudflare Pages.

> ملاحظة: الموقع static HTML — لا server-side code، لا database، لا forms. سطح الهجوم محدود لكن يستحق الفحص.

| # | الفحص |
|---|-------|
| 8.1 | **Security Headers:** يوجد `_headers` file؟ هل يحتوي: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` |
| 8.2 | **CSP:** هل يوجد `Content-Security-Policy` header؟ هل يسمح فقط للـ origins المطلوبة (Google Analytics, maps, wa.me)؟ |
| 8.3 | **Mixed Content:** كل الـ external resources (scripts, CSS, images, links) تستخدم `https://` وليس `http://` |
| 8.4 | **External Links:** كل `<a>` يفتح في `target="_blank"` يحتوي `rel="noopener"` أو `rel="noopener noreferrer"` |
| 8.5 | **Third-Party Scripts:** Google Analytics script (`gtag`) محمّل من `https://www.googletagmanager.com` — هل الـ Tracking ID صحيح (`G-E3J17QNTSY`) على جميع الصفحات؟ |
| 8.6 | **Sensitive Files:** لا يوجد في الـ root ملفات حساسة يجب ألا تُنشر: `.env`, `credentials.json`, مفاتيح API مكشوفة في الكود |
| 8.7 | **Inline Scripts:** فحص الـ HTML — هل يوجد `eval()`, `document.write()`, أو `onclick="..."` inline في الـ HTML؟ |
| 8.8 | **Iframe Protection:** الموقع لا يحمّل محتوى خارجياً بـ `<iframe>` بدون sandbox |
| 8.9 | **Vendor Assets:** CSS/JS من `assets/vendor/` — هل هي local copies أم CDN؟ لو CDN هل HTTPS؟ |
| 8.10 | **robots.txt:** لا يكشف مسارات حساسة (admin panels, config files) |

---

### Phase 9: Findings Compilation & Launch Decision 📋

**الهدف:** تجميع النتائج وكتابة توصية واضحة: انشر أو أصلح أولاً.

| # | الفحص |
|---|-------|
| 9.1 | إحصائيات: إجمالي الفحوصات — عدد ✅ / ❌ / ⚠️ |
| 9.2 | تصنيف الأعطال: 🔴 حرج (يمنع النشر) / 🟡 متوسط (يُصلح بعد النشر) / 🟢 منخفض |
| 9.3 | **توصية نهائية:** `LAUNCH ✅` أو `FIX FIRST ❌` مع سبب واضح |
| 9.4 | لو في أعطال حرجة: كتابة قائمة مختصرة بما يجب إصلاحه قبل النشر |

---

## 📁 ملف المخرجات

```
docs/audits/51-pre-launch-audit-v2-findings.md
```

**لا تعديل على:**
- `docs/audits/49-pre-launch-seo-audit-findings.md`
- أي ملف HTML/CSS/JS في المشروع

---

## 📊 ملخص المراحل

| المرحلة | الموضوع | يعتمد على |
|---------|---------|-----------|
| 1 | Canonical, Hreflang & Meta | — |
| 2 | Schema.org | — |
| 3 | Sitemap & Robots | — |
| 4 | Internal Links & Assets | — |
| 5 | UI/UX & Structural Consistency | — |
| 6 | Bilingual Integrity | — |
| 7 | 404 & Error Handling | — |
| 8 | Security Check 🔒 | — |
| 9 | Findings + Launch Decision | 1-8 ✅ |

المراحل 1-8 مستقلة ويمكن تنفيذها بأي ترتيب. المرحلة 9 تنتظر اكتمال الجميع.

---

## 🔄 الـ Prompt الكامل لـ Gemini

```
أنت تقوم بتدقيق ما قبل الإطلاق للموقع الثنائي اللغة لمركز الفارس (alfareslab.com).
هذا هو Plan 51 — نسخة محدّثة من Plan 49، تأخذ في الاعتبار جميع التغييرات التي طرأت على الموقع.

**قواعد صارمة:**
- لا تعديلات على أي ملف في المشروع — قراءة وتحليل فقط
- لا تلمس الكود مطلقاً
- كل نتيجة مرتبطة بملف وسطر محدد
- النتائج تُسجَّل في ملف جديد: docs/audits/51-pre-launch-audit-v2-findings.md
- لا تعدّل docs/audits/49-pre-launch-seo-audit-findings.md

**نفّذ المراحل 1 إلى 8 بالترتيب:**
1. Canonical, Hreflang & Meta (31 صفحة)
2. Schema.org Validation (صفحات الخدمة الـ 24)
3. Sitemap & Robots
4. Internal Links & Assets (تحقق خصوصاً من الروابط الجديدة في service-details)
5. UI/UX Consistency (تحقق من غياب nav-dropdown، وجود service-details links، v1.2.4)
6. Bilingual Integrity (تحقق من flash-sd pages خالية من PC-3000 Flash)
7. 404 & Error Handling
8. Security Check (mixed content, external link rel attributes, _headers, sensitive files, inline scripts)

**بعد المراحل الـ 8:**
- اكتب Phase 9: تجميع النتائج مع إحصائيات وتوصية نهائية LAUNCH أو FIX FIRST
- صنّف الأعطال: 🔴 حرج / 🟡 متوسط / 🟢 منخفض

المرجع: plans/51-pre-launch-audit-v2.md
```

---

## ⚠️ قيود صارمة

- **لا كود** — قراءة فقط بلا استثناء
- **ملف نتائج جديد** — لا تعديل على ملفات قديمة
- **لا افتراضات** — إذا كان الفحص غامضاً، سجّله بـ ⚠️
- الفحوصات في Phases 5 و6 تأخذ في الاعتبار التغييرات الأخيرة (Plan 50 + post-Plan-50 fixes)

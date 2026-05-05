# 🔧 إصلاحات ما قبل الإطلاق — Pre-Launch Fixes
> **الإصدار:** 1.0.0
> **التاريخ:** 2026-05-05
> **الحالة:** مسودة
> **المرجع:** `docs/audits/49-pre-launch-seo-audit-findings.md` — Plan 49

---

## الهدف

تصحيح جميع المشاكل المكتشفة في تدقيق Plan 49 قبل النشر على Cloudflare Pages.
الإصلاحات مرتبة تنازلياً حسب تأثيرها على الفهرسة والـ SEO.

---

## المتطلبات

- Plan 49 مكتملة والتقرير موجود في `docs/audits/49-pre-launch-seo-audit-findings.md`
- لا تعديلات على المحتوى أو الميزات — إصلاحات فقط
- كل خطوة مرتبطة بـ ID من التقرير

---

## 🚪 Pre-Implementation Gates

| # | البوابة |
|---|---------|
| 1 | Plan 49 معتملة وملف التقرير موجود |
| 2 | لا شغل جارٍ على نفس الملفات |
| 3 | المشاكل المراد إصلاحها واضحة من التقرير |

---

## خطوات التنفيذ

---

### المجموعة 1: إصلاحات حرجة — SEO Blockers 🔴

> هذه المشاكل تمنع الفهرسة الصحيحة — يجب إصلاحها أولاً.

- [x] [🤖] **[C-1]** `404.html` — أضف في `<head>`:
  - `<meta name="robots" content="noindex, nofollow">` لمنع فهرسة الصفحة
  - `<meta name="description" content="الصفحة غير موجودة — عد إلى الصفحة الرئيسية لمركز الفارس">`
  - `<link rel="canonical" href="https://alfareslab.com/404.html">`
  - ملاحظة: hreflang غير مطلوب على صفحة noindex

- [x] [🤖] **[C-2]** `services/mac-data-recovery.html` :40-42 — احذف الـ hreflang block المكرر الثاني (الأسطر 40-42). الأول (34-36) هو الصحيح.

⏸️ **Review Gate 1** — المجموعة الحرجة اكتملت
انتظر موافقة المطور قبل الانتقال إلى: تحسينات العناوين والأوصاف

---

### المجموعة 2: تحسينات العناوين `<title>` 🟡

> العناوين المقطوعة في SERPs تضر بالـ CTR. الهدف: 50-60 حرفاً.

- [x] [🤖] **[M-3]** `services/data-recovery-saudi-arabia.html` — قصّر الـ title من ~75 حرف لـ ≤60 حرفاً مع إبقاء الكلمة المفتاحية الرئيسية

- [x] [🤖] **[M-4]** `about-lab.html` — قصّر الـ title من ~70 حرف لـ ≤60 حرفاً

- [x] [🤖] **[M-5]** `services/ssd-nvme-data-recovery.html` — قصّر الـ title من ~65 حرف لـ ≤60 حرفاً

- [x] [🤖] **[M-6]** `services/external-hdd-data-recovery.html` — قصّر الـ title من ~65 حرف لـ ≤60 حرفاً

- [x] [🤖] **[M-7]** `services/ransomware-data-recovery.html` — قصّر الـ title من ~65 حرف لـ ≤60 حرفاً

- [x] [🤖] **[M-8]** `services/dvr-nvr-data-recovery.html` — قصّر الـ title من ~64 حرف لـ ≤60 حرفاً

---

### المجموعة 3: تحسينات الـ Meta Description 🟡

> الأوصاف القصيرة بدون CTA تقلل من نسبة النقر على الصفحة الرئيسية.

- [x] [🤖] **[M-1]** `index.html` — طوّل الـ meta description من ~89 حرف لـ 150-160 حرفاً وأضف CTA (مثال: "تواصل معنا الآن" أو "احصل على تشخيص مجاني")

- [x] [🤖] **[M-2]** `en/index.html` — طوّل الـ meta description من ~133 حرف لـ 150-160 حرفاً وأضف CTA (مثال: "Contact us today" أو "Get a free diagnosis")

⏸️ **Review Gate 2** — مجموعتا العناوين والأوصاف اكتملتا
انتظر موافقة المطور قبل الانتقال إلى: إصلاحات الفوتر وصفحات الثقة

---

### المجموعة 4: فوتر صفحات الثقة 🟡

> صفحات about-lab وprivacy-policy تفتقر لوصلات متبادلة ورقم الإصدار في الفوتر.

- [x] [🤖] **[U-4]** `about-lab.html` — في قسم الفوتر:
  - أضف رابطاً لـ `privacy-policy.html` ضمن قسم Trust Pages
  - تأكد من وجود `v1.2.4` في سطر `footer.development`

- [x] [🤖] **[U-4]** `privacy-policy.html` — في قسم الفوتر:
  - أضف رابطاً لـ `about-lab.html` ضمن قسم Trust Pages
  - تأكد من وجود `v1.2.4` في سطر `footer.development`

- [x] [🤖] **[U-4]** `en/about-lab.html` — نفس إصلاح about-lab.html بالإنجليزي:
  - رابط لـ `en/privacy-policy.html`
  - تأكد من `v1.2.4`

- [x] [🤖] **[U-4]** `en/privacy-policy.html` — نفس إصلاح privacy-policy.html بالإنجليزي:
  - رابط لـ `en/about-lab.html`
  - تأكد من `v1.2.4`

⏸️ **Review Gate 3** — إصلاحات الفوتر اكتملت
انتظر موافقة المطور قبل الانتقال إلى: إصلاحات CSS

---

### المجموعة 5: إصلاحات CSS 🟢

> تعديلات تجميلية بسيطة على ملفي CSS.

- [x] [🤖] **[U-2]** `assets/css/layout.css` — في قاعدة `.nav-cta`:
  - غيّر `background-color` من `#25D366` لـ `#128C7E`
  - غيّر `border-color` من `#25D366` لـ `#128C7E`
  - أضف `border-radius: 50px` للشكل البيضاوي
  - في `.nav-cta:hover`: غيّر `#1da851` لـ `#0e6b5e`

- [x] [🤖] **[U-3]** `assets/css/components.css` — في قاعدة `.skip-to-content`:
  - غيّر `top: -40px` لـ `top: -100px`

⏸️ **Review Gate 4** — إصلاحات CSS اكتملت
انتظر موافقة المطور قبل الانتقال إلى: إصلاحات اختيارية

---

### المجموعة 6: إصلاحات اختيارية قبل الإطلاق 🟢

> يمكن تأجيل هذه المجموعة لما بعد الإطلاق دون تأثير على الفهرسة.

- [x] [🤖] **[L-1,L-2,L-3,L-4]** قصّر العناوين الحدّية (62-63 حرف) في الصفحات التالية إذا أمكن دون إضرار بالمعنى:
  - `en/index.html` (62 حرف)
  - `services/flash-sd-data-recovery.html` (~63 حرف)
  - `services/database-erp-recovery.html` (~62 حرف)
  - `services/data-recovery-makkah.html` (~62 حرف)

- [x] [🤖] **[W-1]** `services/hdd-data-recovery.html` و `services/mac-data-recovery.html` — في زر WhatsApp الطافي: غيّر `966563747332` لـ `966507322542` إذا كانت هذه الصفحات تخص استعادة البيانات تحديداً

- [x] [🤖] **[S-1]** — قرار: إبقاء الملف كمرجع توثيقي، لا حذف (لا يؤثر على الأداء) `seo/structured-data.json` — قرر: إما احذف الملف (لا أحد يستخدمه) أو أضفه بـ `<script type="application/ld+json">` في `index.html` كمرجع إضافي. لا تتركه معلقاً.

- [x] [🤖] **[U-1]** — قرار: إبقاء الملف، لا تحميل (لا توجد hooks في الـ HTML تستدعيه) `assets/js/service-page.js` — الملف موجود لكن لا يُحمَّل في أي صفحة ولا توجد `data-page-lang` attributes في الـ HTML. قرر: إما احذفه (dead code) أو وثّق سبب وجوده في `project-key.md`.

---

## 📁 الملفات المتأثرة

| الملف | نوع التغيير | المجموعة | ID |
|-------|-------------|----------|----|
| `404.html` | تعديل | 1 | C-1 |
| `services/mac-data-recovery.html` | تعديل | 1 | C-2 |
| `services/data-recovery-saudi-arabia.html` | تعديل | 2 | M-3 |
| `about-lab.html` | تعديل | 2, 4 | M-4, U-4 |
| `services/ssd-nvme-data-recovery.html` | تعديل | 2 | M-5 |
| `services/external-hdd-data-recovery.html` | تعديل | 2 | M-6 |
| `services/ransomware-data-recovery.html` | تعديل | 2 | M-7 |
| `services/dvr-nvr-data-recovery.html` | تعديل | 2 | M-8 |
| `index.html` | تعديل | 3 | M-1 |
| `en/index.html` | تعديل | 3 | M-2 |
| `privacy-policy.html` | تعديل | 4 | U-4 |
| `en/about-lab.html` | تعديل | 4 | U-4 |
| `en/privacy-policy.html` | تعديل | 4 | U-4 |
| `assets/css/layout.css` | تعديل | 5 | U-2 |
| `assets/css/components.css` | تعديل | 5 | U-3 |
| `en/index.html` | تعديل (اختياري) | 6 | L-1 |
| `services/flash-sd-data-recovery.html` | تعديل (اختياري) | 6 | L-2 |
| `services/database-erp-recovery.html` | تعديل (اختياري) | 6 | L-3 |
| `services/data-recovery-makkah.html` | تعديل (اختياري) | 6 | L-4 |
| `services/hdd-data-recovery.html` | تعديل (اختياري) | 6 | W-1 |
| `seo/structured-data.json` | حذف أو تفعيل (اختياري) | 6 | S-1 |
| `assets/js/service-page.js` | حذف أو توثيق (اختياري) | 6 | U-1 |

---

## ملاحظات

| # | الملاحظة |
|---|----------|
| 1 | **C-1**: الأهم في `404.html` هو `noindex` — الـ canonical ثانوي لكن يُضاف للاكتمال |
| 2 | **U-1**: `service-page.js` لا يُحمَّل ولا توجد hooks له في الـ HTML — يُرجَّح أنه كود قديم من نسخة سابقة |
| 3 | **المجموعة 6** كلها اختيارية — الموقع يمكن إطلاقه بعد المجموعات 1-5 فقط |
| 4 | لا تعديلات على Schema أو sitemap أو robots.txt — جميعها نظيفة من Plan 49 |
| 5 | بعد الاكتمال: حدّث `project-key.md` و `changelog.md` حسب بروتوكول التوثيق |

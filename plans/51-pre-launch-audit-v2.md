# 🔍 Pre-Launch Full Audit v2 — Al-Fares Lab
> **Version:** 1.1.0 (Restructured — one prompt per phase)
> **Date:** 2026-05-05
> **Type:** Audit — READ-ONLY (NO code modifications allowed)
> **Output file:** `docs/audits/51-pre-launch-audit-v2-findings.md`

---

## الهدف

فحص شامل للموقع قبل النشر على Cloudflare Pages. يغطي SEO، Schema، Sitemap، روابط، ثنائية اللغة، تناسق UI، والأمان. لا تعديلات على الكود.

---

## 🚪 Pre-Implementation Gates

| # | البوابة |
|---|---------|
| 1 | لا تعديلات على الكود — قراءة وتحليل فقط |
| 2 | النتائج تُسجَّل في `docs/audits/51-pre-launch-audit-v2-findings.md` |
| 3 | لا تعديل على `docs/audits/49-pre-launch-seo-audit-findings.md` |
| 4 | كل نتيجة مرتبطة بملف وسطر محدد |

---

## المخزون الكامل للصفحات (31 صفحة)

| المجموعة | العدد |
|----------|-------|
| Root (AR): `index.html`, `about-lab.html`, `privacy-policy.html`, `404.html` | 4 |
| Services (AR): `services/*.html` | 12 |
| EN: `en/index.html`, `en/about-lab.html`, `en/privacy-policy.html` | 3 |
| EN Services: `en/services/*.html` | 12 |
| **المجموع** | **31** |

**أسماء صفحات الخدمة الـ 12 (AR + EN بنفس الأسماء):**
`hdd-data-recovery.html` · `ssd-nvme-data-recovery.html` · `flash-sd-data-recovery.html` · `raid-nas-data-recovery.html` · `dvr-nvr-data-recovery.html` · `laptop-pc-data-recovery.html` · `mac-data-recovery.html` · `external-hdd-data-recovery.html` · `ransomware-data-recovery.html` · `database-erp-recovery.html` · `data-recovery-saudi-arabia.html` · `data-recovery-makkah.html`

---

## 📊 تتبع التقدم

| المرحلة | الموضوع | الحالة |
|---------|---------|--------|
| Phase 1 | Canonical, Hreflang & Meta | [x] |
| Phase 2 | Schema.org Validation | [x] |
| Phase 3 | Sitemap & Robots | [x] |
| Phase 4 | Internal Links & Assets | [x] |
| Phase 5 | UI/UX & Structural Consistency | [x] |
| Phase 6 | Bilingual Integrity | [x] |
| Phase 7 | 404 & Error Handling | [x] |
| Phase 8 | Security Check | [x] |
| Phase 9 | Findings + Launch Decision | [x] |

---

## المراحل

---

### Phase 1: Canonical, Hreflang & Meta

**الهدف:** التحقق من صحة canonical وhreflang وmeta tags وعناوين الصفحات على جميع الـ 31 صفحة.

| # | الفحص |
|---|-------|
| 1.1 | كل صفحة فيها `<link rel="canonical">` — URL بدون `?lang=` |
| 1.2 | كل صفحة فيها `hreflang="ar"` |
| 1.3 | كل صفحة فيها `hreflang="en"` |
| 1.4 | كل صفحة فيها `hreflang="x-default"` يشير للنسخة العربية |
| 1.5 | `<title>` فريد، 50–60 حرف، يحتوي الكلمة المفتاحية الرئيسية |
| 1.6 | `<meta name="description">` فريد، 150–160 حرف |
| 1.7 | `<h1>` واحد فقط لكل صفحة |
| 1.8 | صفحات الخدمة: `<h1>` يحتوي "جدة" (AR) أو "Jeddah" (EN) |

#### 📋 Prompt Phase 1 *(انسخه وأرسله)*

```
أنت تدقق موقع مركز الفارس لاستعادة البيانات (alfareslab.com) — موقع ثنائي اللغة، الجذر AR، والإنجليزي في /en/.
هذا فحص Plan 51 Phase 1: Canonical, Hreflang & Meta.

القاعدة الصارمة: READ-ONLY لجميع ملفات HTML/CSS/JS.
الاستثناء الوحيد المسموح بتعديله: docs/audits/51-pre-launch-audit-v2-findings.md وplans/51-pre-launch-audit-v2.md

━━━ الملفات المطلوب قراءتها وفحصها (31 ملف) ━━━

AR جذر (4):
index.html, about-lab.html, privacy-policy.html, 404.html

AR خدمات (12 في مجلد services/):
hdd-data-recovery.html, ssd-nvme-data-recovery.html, flash-sd-data-recovery.html,
raid-nas-data-recovery.html, dvr-nvr-data-recovery.html, laptop-pc-data-recovery.html,
mac-data-recovery.html, external-hdd-data-recovery.html, ransomware-data-recovery.html,
database-erp-recovery.html, data-recovery-saudi-arabia.html, data-recovery-makkah.html

EN (3):
en/index.html, en/about-lab.html, en/privacy-policy.html

EN خدمات (12 في مجلد en/services/، نفس أسماء AR):
en/services/hdd-data-recovery.html, en/services/ssd-nvme-data-recovery.html,
en/services/flash-sd-data-recovery.html, en/services/raid-nas-data-recovery.html,
en/services/dvr-nvr-data-recovery.html, en/services/laptop-pc-data-recovery.html,
en/services/mac-data-recovery.html, en/services/external-hdd-data-recovery.html,
en/services/ransomware-data-recovery.html, en/services/database-erp-recovery.html,
en/services/data-recovery-saudi-arabia.html, en/services/data-recovery-makkah.html

━━━ الفحوصات (لكل ملف) ━━━

اقرأ كل ملف واحداً بعد الآخر. ابحث في قسم <head> عن:

1. <link rel="canonical" href="..."> — موجود؟ هل URL يحتوي ?lang=؟
2. <link rel="alternate" hreflang="ar" href="..."> — موجود؟
3. <link rel="alternate" hreflang="en" href="..."> — موجود؟
4. <link rel="alternate" hreflang="x-default" href="..."> — موجود؟
5. <title> — موجود؟ عدد الحروف (Arabic: عدّ كل حرف) بين 50–60؟
6. <meta name="description" content="..."> — موجود؟ عدد الحروف بين 150–160؟
7. عدد وسوم <h1> في الصفحة — يجب أن يكون 1 فقط
8. (صفحات services/ و en/services/ فقط): هل <h1> يحتوي كلمة "جدة" (AR) أو "Jeddah" (EN)؟

━━━ تصنيف الأعطال ━━━
🔴 حرج: غياب canonical أو hreflang كلياً، أو ?lang= في canonical URL
🟡 متوسط: title/description خارج نطاق الطول، h1 متعدد أو غائب
🟢 منخفض: h1 لا يحتوي "جدة"/"Jeddah" في صفحة خدمة

━━━ الإجراء 1 — تحديث ملف النتائج ━━━
افتح docs/audits/51-pre-launch-audit-v2-findings.md
تحت السطر ## Phase 1: Canonical, Hreflang & Meta
استبدل السطر *Status: Pending* بما يلي:

*Status: Complete — [تاريخ اليوم]*

[لكل مشكلة: - 🔴/🟡/🟢 `filename` (سطر N): وصف المشكلة بالعربي أو الإنجليزي]
[إذا لم توجد أي مشاكل: ✅ لا توجد ملاحظات. (All checks passed)]

━━━ الإجراء 2 — تحديث جدول تتبع التقدم في ملف الخطة ━━━
افتح plans/51-pre-launch-audit-v2.md
في جدول "تتبع التقدم"، غيّر:
| Phase 1 | Canonical, Hreflang & Meta | [ ] |
إلى:
| Phase 1 | Canonical, Hreflang & Meta | [x] |

━━━ في ردك ━━━
1. اكتب ملخصاً مختصراً: "Phase 1 اكتملت — N مشكلة (X حرجة، Y متوسطة، Z منخفضة)"
2. اكتب السطر التالي بالضبط: === PHASE 2 PROMPT ===
3. افتح plans/51-pre-launch-audit-v2.md وانسخ نص الـ code block الموجود تحت "#### 📋 Prompt Phase 2" كاملاً بدون أي تعديل
```

---

### Phase 2: Schema.org Validation

**الهدف:** التحقق من صحة JSON-LD على صفحات الخدمة الـ 24.

| # | الفحص |
|---|-------|
| 2.1 | `index.html` (AR+EN): لا يوجد `AggregateRating` مكتوب يدوياً |
| 2.2 | صفحات الخدمة الـ 24: يوجد `Service` Schema — الحقول: name, description, provider, areaServed, url |
| 2.3 | صفحات الخدمة الـ 24: يوجد `FAQPage` Schema بـ 3 أسئلة على الأقل |
| 2.4 | صفحات الخدمة الـ 24: يوجد `BreadcrumbList` Schema |
| 2.5 | `@id` reference: `https://alfareslab.com/#organization` متسق في كل الصفحات |
| 2.6 | `flash-sd-data-recovery.html` (AR+EN): Schema FAQ لا يذكر PC-3000 Flash أو Monolith |
| 2.7 | JSON-LD syntax سليم: لا فواصل زائدة، لا أقواس مفتوحة |

#### 📋 Prompt Phase 2 *(انسخه وأرسله)*

```
أنت تدقق موقع مركز الفارس (alfareslab.com) — Plan 51 Phase 2: Schema.org Validation.

القاعدة: READ-ONLY لجميع ملفات HTML/CSS/JS.
مسموح فقط تعديل: docs/audits/51-pre-launch-audit-v2-findings.md وplans/51-pre-launch-audit-v2.md

━━━ الملفات المطلوب فحصها ━━━

index.html, en/index.html (فحص AggregateRating فقط)

AR خدمات (12 في مجلد services/):
hdd-data-recovery.html, ssd-nvme-data-recovery.html, flash-sd-data-recovery.html,
raid-nas-data-recovery.html, dvr-nvr-data-recovery.html, laptop-pc-data-recovery.html,
mac-data-recovery.html, external-hdd-data-recovery.html, ransomware-data-recovery.html,
database-erp-recovery.html, data-recovery-saudi-arabia.html, data-recovery-makkah.html

EN خدمات (12 في مجلد en/services/، نفس الأسماء)

━━━ الفحوصات ━━━

لـ index.html وen/index.html:
- هل يوجد "AggregateRating" مكتوب يدوياً في JSON-LD؟ (يجب ألا يوجد)

لكل صفحة خدمة (24 صفحة) — ابحث داخل <script type="application/ld+json">:
1. يوجد "@type": "Service" مع الحقول: name, description, provider, areaServed, url؟
2. يوجد "@type": "FAQPage" مع 3 أسئلة على الأقل؟
3. يوجد "@type": "BreadcrumbList"؟
4. المراجع "@id" تستخدم "https://alfareslab.com/#organization" وليس رابطاً مختلفاً؟
5. JSON-LD syntax سليم: لا فواصل زائدة (trailing comma)، لا أقواس غير مغلقة؟

لـ flash-sd-data-recovery.html (AR وEN) بالتحديد:
6. هل يوجد في نص الـ FAQPage ذكر لـ "PC-3000 Flash" أو "Monolith" أو "chip-off"؟ (يجب ألا يوجد)

━━━ تصنيف الأعطال ━━━
🔴 حرج: غياب Service أو FAQPage Schema كلياً، JSON-LD syntax خاطئ
🟡 متوسط: حقل مطلوب ناقص (areaServed مثلاً)، أقل من 3 أسئلة FAQ
🟢 منخفض: ذكر PC-3000 Flash في flash-sd (محتوى مضلل لكن لا يكسر الفهرسة)

━━━ الإجراء 1 — تحديث ملف النتائج ━━━
افتح docs/audits/51-pre-launch-audit-v2-findings.md
تحت ## Phase 2: Schema.org Validation
استبدل *Status: Pending* بنتائجك (نفس صيغة Phase 1)

━━━ الإجراء 2 — تحديث جدول تتبع التقدم ━━━
في plans/51-pre-launch-audit-v2.md، غيّر:
| Phase 2 | Schema.org Validation | [ ] |
إلى:
| Phase 2 | Schema.org Validation | [x] |

━━━ في ردك ━━━
1. ملخص مختصر لنتائج Phase 2
2. السطر: === PHASE 3 PROMPT ===
3. انسخ code block تحت "#### 📋 Prompt Phase 3" من plans/51-pre-launch-audit-v2.md
```

---

### Phase 3: Sitemap & Robots

**الهدف:** التحقق من صحة sitemap.xml وrobots.txt.

| # | الفحص |
|---|-------|
| 3.1 | `sitemap.xml`: عدد URLs يطابق 31 صفحة (أو أكثر إن وجدت صفحات إضافية) |
| 3.2 | لا يوجد `?lang=` في أي URL داخل الـ sitemap |
| 3.3 | `hreflang` في الـ sitemap يطابق `hreflang` في الـ HTML |
| 3.4 | كل ملف HTML موجود على الـ disk مذكور في الـ sitemap (لا orphan pages) |
| 3.5 | `robots.txt`: يسمح بالزحف ويشير لـ sitemap بـ URL صحيح |
| 3.6 | URLs في الـ sitemap تطابق canonical URLs في HTML بالضبط |

#### 📋 Prompt Phase 3 *(انسخه وأرسله)*

```
أنت تدقق موقع مركز الفارس (alfareslab.com) — Plan 51 Phase 3: Sitemap & Robots.

القاعدة: READ-ONLY لجميع ملفات HTML/CSS/JS.
مسموح فقط تعديل: docs/audits/51-pre-launch-audit-v2-findings.md وplans/51-pre-launch-audit-v2.md

━━━ الملفات المطلوب قراءتها ━━━
sitemap.xml (في الجذر)
robots.txt (في الجذر)
عيّنة من HTML: index.html, services/hdd-data-recovery.html, en/index.html, en/services/hdd-data-recovery.html

━━━ الفحوصات ━━━

في sitemap.xml:
1. عدّ إجمالي URLs — هل يساوي 31 أو أكثر؟ (الموقع يحتوي 31 صفحة)
2. هل يوجد أي URL يحتوي "?lang="؟ (يجب ألا يوجد)
3. هل يوجد <xhtml:link rel="alternate" hreflang="ar/en/x-default">؟
4. قارن URLsالـ sitemap مع الصفحات الموجودة على الـ disk — هل في ملفات HTML غير مذكورة؟
   الصفحات المتوقعة: index.html, about-lab.html, privacy-policy.html, 404.html + 12 services/ + en/index.html + en/about-lab.html + en/privacy-policy.html + 12 en/services/

في robots.txt:
5. هل يحتوي "Disallow: /" كلي؟ (خطأ فادح — يجب ألا يوجد)
6. هل يحتوي "Sitemap:" يشير لـ https://alfareslab.com/sitemap.xml؟

مقارنة sitemap مع HTML:
7. خذ أول رابط canonical من كل من: index.html, services/hdd-data-recovery.html, en/index.html, en/services/hdd-data-recovery.html — هل يتطابق مع ما في sitemap.xml؟

━━━ تصنيف الأعطال ━━━
🔴 حرج: robots.txt يحجب الزحف، sitemap غائب كلياً، تعارض canonical/sitemap
🟡 متوسط: صفحات ناقصة من sitemap، hreflang غائب من sitemap
🟢 منخفض: عدد URLs أقل من 31 بفارق بسيط

━━━ الإجراء 1 — تحديث ملف النتائج ━━━
افتح docs/audits/51-pre-launch-audit-v2-findings.md
تحت ## Phase 3: Sitemap & Robots
استبدل *Status: Pending* بنتائجك

━━━ الإجراء 2 — تحديث جدول تتبع التقدم ━━━
في plans/51-pre-launch-audit-v2.md، غيّر:
| Phase 3 | Sitemap & Robots | [ ] |
إلى:
| Phase 3 | Sitemap & Robots | [x] |

━━━ في ردك ━━━
1. ملخص مختصر لنتائج Phase 3
2. السطر: === PHASE 4 PROMPT ===
3. انسخ code block تحت "#### 📋 Prompt Phase 4" من plans/51-pre-launch-audit-v2.md
```

---

### Phase 4: Internal Links & Assets

**الهدف:** اكتشاف الروابط المكسورة والملفات الناقصة.

| # | الفحص |
|---|-------|
| 4.1 | كل `<a href="...">` داخلي يشير لملف موجود على الـ disk |
| 4.2 | كل `<img src="...">` يشير لصورة موجودة |
| 4.3 | كل CSS `<link>` وJS `<script>` تشير لملفات موجودة |
| 4.4 | `index.html` و`en/index.html`: الـ 5 روابط في `.service-details` لكارت Data Recovery تشير لصفحات موجودة |
| 4.5 | أزرار CTA للـ WhatsApp تستخدم الرقم الصحيح `966507322542` (data recovery) |
| 4.6 | لا orphan files HTML في الـ root غير مرتبطة من أي مكان |

#### 📋 Prompt Phase 4 *(انسخه وأرسله)*

```
أنت تدقق موقع مركز الفارس (alfareslab.com) — Plan 51 Phase 4: Internal Links & Assets.

القاعدة: READ-ONLY لجميع ملفات HTML/CSS/JS.
مسموح فقط تعديل: docs/audits/51-pre-launch-audit-v2-findings.md وplans/51-pre-launch-audit-v2.md

━━━ الفحوصات ━━━

الفحص 4.1 — روابط داخلية:
اقرأ index.html وen/index.html وعيّنة من صفحات الخدمة (3 AR + 3 EN).
لكل <a href="..."> داخلي (لا يبدأ بـ http أو mailto أو tel أو #):
- احسب المسار الفعلي من موقع الملف (مع الأخذ في الاعتبار base href إن وجد)
- هل الملف موجود على الـ disk؟

الفحص 4.2 — صور:
اقرأ index.html وen/index.html.
لكل <img src="..."> — هل الملف موجود؟

الفحص 4.3 — CSS وJS:
اقرأ index.html.
لكل <link rel="stylesheet" href="..."> وكل <script src="..."> — هل الملف موجود؟

الفحص 4.4 — service-details links (مهم):
في index.html، ابحث عن div أو ul يحتوي class="service-details" تحت كارت "استعادة البيانات".
عدّ الروابط الموجودة — يجب أن تكون 5 روابط على الأقل تشير لصفحات services/.
في en/index.html، نفس الفحص — 5 روابط تشير لـ en/services/.
سجّل الروابط الموجودة وتحقق من وجود ملفاتها.

الفحص 4.5 — WhatsApp:
ابحث في index.html وen/index.html وعيّنة من صفحات الخدمة عن "wa.me" أو "whatsapp".
الرقم الصحيح لـ data recovery هو 966507322542.
هل يوجد رقم مختلف في أزرار CTA؟

الفحص 4.6 — Orphan HTML files:
تحقق من وجود ملفات HTML في الجذر غير مذكورة في sitemap.xml أو index.html (مثلاً service-page-premium-compare.html أو أي ملف test/temp).

━━━ تصنيف الأعطال ━━━
🔴 حرج: صفحات خدمة مكسورة، CSS/JS رئيسية ناقصة، service-details links غائبة كلياً
🟡 متوسط: صور ناقصة، رقم WhatsApp خاطئ، orphan HTML files
🟢 منخفض: ملفات vendor أو صور ثانوية ناقصة

━━━ الإجراء 1 — تحديث ملف النتائج ━━━
افتح docs/audits/51-pre-launch-audit-v2-findings.md
تحت ## Phase 4: Internal Links & Assets
استبدل *Status: Pending* بنتائجك

━━━ الإجراء 2 — تحديث جدول تتبع التقدم ━━━
في plans/51-pre-launch-audit-v2.md، غيّر:
| Phase 4 | Internal Links & Assets | [ ] |
إلى:
| Phase 4 | Internal Links & Assets | [x] |

━━━ في ردك ━━━
1. ملخص مختصر لنتائج Phase 4
2. السطر: === PHASE 5 PROMPT ===
3. انسخ code block تحت "#### 📋 Prompt Phase 5" من plans/51-pre-launch-audit-v2.md
```

---

### Phase 5: UI/UX & Structural Consistency

**الهدف:** التحقق من تطبيق جميع تغييرات Plan 50 وإصلاحات ما بعده.

| # | الفحص |
|---|-------|
| 5.1 | كل الـ 26 صفحة (index + 24 service + en/index): لا يوجد `<li class="nav-dropdown">` في الـ nav |
| 5.2 | `main.js`: `initializeServiceDropdown()` معطّلة (مُعلَّق عليها بـ `//`) |
| 5.3 | `index.html` و`en/index.html`: صفوف `.service-details` في كارت Data Recovery فيها `<a>` tags |
| 5.4 | رقم الإصدار في footer هو `v1.2.4` على جميع الصفحات |
| 5.5 | `<base href="../">` على AR service pages، `<base href="../../">` على EN service pages |
| 5.6 | Header وFooter متسقان على جميع الـ 31 صفحة |

#### 📋 Prompt Phase 5 *(انسخه وأرسله)*

```
أنت تدقق موقع مركز الفارس (alfareslab.com) — Plan 51 Phase 5: UI/UX & Structural Consistency.

سياق مهم: في Plan 50 تم حذف dropdown من nav الخدمات وإضافة روابط مباشرة في service-details. كذلك تم تعطيل دالة initializeServiceDropdown() في JS. هذا الفحص يتحقق من تطبيق هذه التغييرات على جميع الصفحات.

القاعدة: READ-ONLY لجميع ملفات HTML/CSS/JS.
مسموح فقط تعديل: docs/audits/51-pre-launch-audit-v2-findings.md وplans/51-pre-launch-audit-v2.md

━━━ الفحوصات ━━━

الفحص 5.1 — nav-dropdown (فحص الكل):
اقرأ هذه الصفحات وابحث فيها عن النص "nav-dropdown":
index.html, en/index.html
services/ (جميع 12 صفحة)
en/services/ (جميع 12 صفحة)
إذا وجدت "nav-dropdown" في أي صفحة — سجّلها كعطل حرج.

الفحص 5.2 — JavaScript:
اقرأ assets/js/main.js وابحث عن "initializeServiceDropdown".
هل الاستدعاء موجود؟ هل هو داخل تعليق (سطر يبدأ بـ //)?
إذا كان غير معلّق عليه — عطل حرج.

الفحص 5.3 — service-details links:
في index.html وen/index.html:
ابحث عن "service-details" وتحقق من وجود وسوم <a href="..."> بداخله.
هل الروابط موجودة أم مجرد نص فارغ؟

الفحص 5.4 — رقم الإصدار:
ابحث في index.html عن "v1.2." في قسم footer.
ما رقم الإصدار الموجود؟ يجب أن يكون v1.2.4.
اقرأ عيّنة: services/hdd-data-recovery.html وen/services/hdd-data-recovery.html — نفس الإصدار؟

الفحص 5.5 — base href:
اقرأ services/hdd-data-recovery.html — هل <base href="../"> موجود في <head>؟
اقرأ en/services/hdd-data-recovery.html — هل <base href="../../"> موجود؟

الفحص 5.6 — Header/Footer تناسق:
قارن header section في: index.html, services/hdd-data-recovery.html, en/index.html
هل nav items متطابقة (نفس العدد والترتيب)؟
قارن footer section في نفس الملفات — هل متطابق؟

━━━ تصنيف الأعطال ━━━
🔴 حرج: nav-dropdown موجود في أي صفحة، initializeServiceDropdown() غير معلّق عليه
🟡 متوسط: service-details بدون روابط، إصدار مختلف في بعض الصفحات
🟢 منخفض: تباين طفيف في footer

━━━ الإجراء 1 — تحديث ملف النتائج ━━━
افتح docs/audits/51-pre-launch-audit-v2-findings.md
تحت ## Phase 5: UI/UX & Structural Consistency
استبدل *Status: Pending* بنتائجك

━━━ الإجراء 2 — تحديث جدول تتبع التقدم ━━━
في plans/51-pre-launch-audit-v2.md، غيّر:
| Phase 5 | UI/UX & Structural Consistency | [ ] |
إلى:
| Phase 5 | UI/UX & Structural Consistency | [x] |

━━━ في ردك ━━━
1. ملخص مختصر لنتائج Phase 5
2. السطر: === PHASE 6 PROMPT ===
3. انسخ code block تحت "#### 📋 Prompt Phase 6" من plans/51-pre-launch-audit-v2.md
```

---

### Phase 6: Bilingual Integrity

**الهدف:** التحقق من اكتمال وصحة الثنائية اللغوية.

| # | الفحص |
|---|-------|
| 6.1 | `lang/ar.json` و`lang/en.json`: نفس مجموعة الـ keys في الملفين |
| 6.2 | كل صفحة AR في `services/` لها مقابل EN في `en/services/` |
| 6.3 | `about-lab.html` و`privacy-policy.html` لهما مقابل في `en/` |
| 6.4 | صفحتا `flash-sd-data-recovery.html` (AR+EN): لا ذكر لـ PC-3000 Flash أو Monolith أو Chip-Off في المحتوى المرئي |
| 6.5 | `<html lang="ar" dir="rtl">` على AR pages، `<html lang="en" dir="ltr">` على EN pages |
| 6.6 | EN service pages: روابط nav.services تشير لـ `en/#services` وليس `../#services` |

#### 📋 Prompt Phase 6 *(انسخه وأرسله)*

```
أنت تدقق موقع مركز الفارس (alfareslab.com) — Plan 51 Phase 6: Bilingual Integrity.

سياق مهم: الموقع ثنائي اللغة — AR في الجذر، EN في /en/. تم حذف محتوى PC-3000 Flash وMonolith من صفحتي flash-sd في Plan 50. هذا الفحص يتحقق من اكتمال الترجمة وتطابق المحتوى.

القاعدة: READ-ONLY لجميع ملفات HTML/CSS/JS.
مسموح فقط تعديل: docs/audits/51-pre-launch-audit-v2-findings.md وplans/51-pre-launch-audit-v2.md

━━━ الفحوصات ━━━

الفحص 6.1 — مفاتيح الترجمة:
اقرأ lang/ar.json ولاحظ عدد الـ keys الرئيسية.
اقرأ lang/en.json ولاحظ عدد الـ keys الرئيسية.
هل العدد متطابق؟ هل يوجد keys في أحدهما ولا في الآخر؟

الفحص 6.2 و6.3 — تقابل الصفحات:
تحقق من وجود الملفات التالية:
services/ → en/services/ (12 صفحة بنفس الأسماء)
about-lab.html → en/about-lab.html
privacy-policy.html → en/privacy-policy.html

الفحص 6.4 — flash-sd محتوى (مهم جداً):
اقرأ services/flash-sd-data-recovery.html.
ابحث عن: "PC-3000 Flash", "Monolith", "monolith", "Chip-Off", "chip-off", "chipoff", "NAND"
هل يوجد أي منها في المحتوى المرئي (خارج التعليقات)؟

اقرأ en/services/flash-sd-data-recovery.html.
نفس البحث بالإنجليزي: "PC-3000 Flash", "Monolith", "Chip-Off", "chip-off", "NAND chip"
هل يوجد أي منها؟

الفحص 6.5 — html lang وdir:
اقرأ index.html — هل <html lang="ar" dir="rtl">؟
اقرأ en/index.html — هل <html lang="en" dir="ltr">؟
اقرأ services/hdd-data-recovery.html — هل <html lang="ar" dir="rtl">؟
اقرأ en/services/hdd-data-recovery.html — هل <html lang="en" dir="ltr">؟

الفحص 6.6 — nav.services في EN service pages:
اقرأ en/services/hdd-data-recovery.html.
ابحث في nav عن الرابط الخاص بـ "خدماتنا" أو "Our Services".
هل href يساوي "en/#services"؟ أم شيء آخر مثل "../#services" أو "../../#services"؟

━━━ تصنيف الأعطال ━━━
🔴 حرج: ذكر PC-3000 Flash في flash-sd pages (مضلل للعملاء)، صفحة EN مقابلة ناقصة كلياً
🟡 متوسط: keys ترجمة ناقصة، nav.services href خاطئ
🟢 منخفض: html lang خاطئ في صفحة واحدة

━━━ الإجراء 1 — تحديث ملف النتائج ━━━
افتح docs/audits/51-pre-launch-audit-v2-findings.md
تحت ## Phase 6: Bilingual Integrity
استبدل *Status: Pending* بنتائجك

━━━ الإجراء 2 — تحديث جدول تتبع التقدم ━━━
في plans/51-pre-launch-audit-v2.md، غيّر:
| Phase 6 | Bilingual Integrity | [ ] |
إلى:
| Phase 6 | Bilingual Integrity | [x] |

━━━ في ردك ━━━
1. ملخص مختصر لنتائج Phase 6
2. السطر: === PHASE 7 PROMPT ===
3. انسخ code block تحت "#### 📋 Prompt Phase 7" من plans/51-pre-launch-audit-v2.md
```

---

### Phase 7: 404 & Error Handling

**الهدف:** التحقق من معالجة صفحة الخطأ وإعدادات Cloudflare.

| # | الفحص |
|---|-------|
| 7.1 | `404.html` موجود في الـ root |
| 7.2 | `404.html` يحتوي `<meta name="robots" content="noindex, nofollow">` |
| 7.3 | `404.html` يحتوي `<link rel="canonical">` |
| 7.4 | لا يوجد `_redirects` بـ catch-all rule (`/* /index.html 200`) |
| 7.5 | لو يوجد `_headers` — لا يوجد فيه rules تتعارض مع 404 |

#### 📋 Prompt Phase 7 *(انسخه وأرسله)*

```
أنت تدقق موقع مركز الفارس (alfareslab.com) — Plan 51 Phase 7: 404 & Error Handling.

سياق: الموقع يُنشر على Cloudflare Pages كـ static site. Cloudflare يبحث عن 404.html في الجذر تلقائياً.

القاعدة: READ-ONLY لجميع ملفات HTML/CSS/JS.
مسموح فقط تعديل: docs/audits/51-pre-launch-audit-v2-findings.md وplans/51-pre-launch-audit-v2.md

━━━ الفحوصات ━━━

الفحص 7.1 — وجود 404.html:
هل الملف 404.html موجود في الجذر؟

الفحص 7.2+7.3 — محتوى 404.html:
اقرأ 404.html.
هل يوجد: <meta name="robots" content="noindex, nofollow"> أو ما يعادلها؟
هل يوجد: <link rel="canonical" href="...">؟

الفحص 7.4 — _redirects:
هل الملف _redirects موجود في الجذر؟
إذا وجد، اقرأه: هل يحتوي سطر "/* /index.html 200"؟ (هذا catch-all يكسر صفحة 404)

الفحص 7.5 — _headers:
هل الملف _headers موجود في الجذر؟
إذا وجد، اقرأه: هل يوجد rules تتعارض مع 404 pages؟

━━━ تصنيف الأعطال ━━━
🔴 حرج: 404.html غائب، _redirects يحتوي catch-all
🟡 متوسط: 404.html بدون noindex، بدون canonical
🟢 منخفض: تحذيرات أسلوبية في 404 page

━━━ الإجراء 1 — تحديث ملف النتائج ━━━
افتح docs/audits/51-pre-launch-audit-v2-findings.md
تحت ## Phase 7: 404 & Error Handling
استبدل *Status: Pending* بنتائجك

━━━ الإجراء 2 — تحديث جدول تتبع التقدم ━━━
في plans/51-pre-launch-audit-v2.md، غيّر:
| Phase 7 | 404 & Error Handling | [ ] |
إلى:
| Phase 7 | 404 & Error Handling | [x] |

━━━ في ردك ━━━
1. ملخص مختصر لنتائج Phase 7
2. السطر: === PHASE 8 PROMPT ===
3. انسخ code block تحت "#### 📋 Prompt Phase 8" من plans/51-pre-launch-audit-v2.md
```

---

### Phase 8: Security Check 🔒

**الهدف:** فحص أمان الموقع كـ static site على Cloudflare Pages.

> ملاحظة: الموقع static HTML — لا server-side code، لا database، لا forms. سطح الهجوم محدود لكن يستحق الفحص.

| # | الفحص |
|---|-------|
| 8.1 | `_headers`: يحتوي `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` |
| 8.2 | `Content-Security-Policy` موجود ويسمح فقط للـ origins المطلوبة |
| 8.3 | كل external resources تستخدم `https://` وليس `http://` |
| 8.4 | كل `<a target="_blank">` يحتوي `rel="noopener"` أو `rel="noopener noreferrer"` |
| 8.5 | Google Analytics يستخدم tracking ID الصحيح `G-E3J17QNTSY` على جميع الصفحات |
| 8.6 | لا ملفات حساسة في الـ root: `.env`, credentials, مفاتيح API مكشوفة |
| 8.7 | لا `eval()`, `document.write()`, أو `onclick="..."` inline في الـ HTML |
| 8.8 | لا `<iframe>` بدون sandbox يحمّل محتوى خارجياً |
| 8.9 | Vendor CSS/JS: إما ملفات محلية أو CDN بـ HTTPS |

#### 📋 Prompt Phase 8 *(انسخه وأرسله)*

```
أنت تدقق موقع مركز الفارس (alfareslab.com) — Plan 51 Phase 8: Security Check.

سياق: موقع static HTML على Cloudflare Pages. لا backend، لا database، لا forms. الفحص يركز على: security headers، mixed content، external link safety، inline scripts، Google Analytics.

القاعدة: READ-ONLY لجميع ملفات HTML/CSS/JS.
مسموح فقط تعديل: docs/audits/51-pre-launch-audit-v2-findings.md وplans/51-pre-launch-audit-v2.md

━━━ الفحوصات ━━━

الفحص 8.1+8.2 — Security Headers وCSP:
هل الملف _headers موجود في الجذر؟
إذا وجد اقرأه وتحقق من وجود:
- X-Frame-Options (DENY أو SAMEORIGIN)
- X-Content-Type-Options: nosniff
- Referrer-Policy
- Content-Security-Policy
إذا غاب _headers كلياً: سجّل كـ 🟡 متوسط

الفحص 8.3 — Mixed Content:
اقرأ index.html وen/index.html.
ابحث عن أي رابط يبدأ بـ "http://" (غير https) في: <script src>, <link href>, <img src>, <a href>
إذا وجدت — سجّل كـ 🔴 حرج

الفحص 8.4 — External links بدون noopener:
اقرأ index.html وen/index.html.
ابحث عن كل <a ... target="_blank" ...>
لكل واحدة: هل تحتوي rel="noopener" أو rel="noopener noreferrer"؟
إذا لم تحتوي — سجّل الملف وسطر الرابط كـ 🟡 متوسط
(تلميح: روابط WhatsApp وGoogle Maps وGoogle Analytics عادةً target="_blank")

الفحص 8.5 — Google Analytics ID:
اقرأ index.html وen/index.html.
ابحث عن "G-" في قسم الـ scripts.
الـ ID الصحيح هو G-E3J17QNTSY — هل هو نفسه في الملفين؟
إذا كان مختلفاً أو غائباً — سجّل

الفحص 8.6 — Sensitive Files:
تحقق من وجود هذه الملفات في الجذر: .env, .env.local, credentials.json, config.json, api-keys.txt
إذا وجد أي منها — عطل حرج 🔴

الفحص 8.7 — Inline Scripts خطرة:
اقرأ index.html وen/index.html.
ابحث عن: "eval(", "document.write(", "onclick=", "onerror=", "onload=" كـ inline HTML attributes
ملاحظة: onclick في <button> أو <a> في HTML مباشرةً — ليس في script tag — هو المقصود.

الفحص 8.8 — Iframes:
اقرأ index.html وen/index.html وعيّنة من صفحات الخدمة.
ابحث عن <iframe src="..."> تحمّل محتوى خارجياً بدون sandbox attribute.

الفحص 8.9 — Vendor Assets:
اقرأ index.html وتحقق من <link> و<script> التي تشير لـ assets/vendor/ — هل هي ملفات محلية؟
أي CDN links — هل تستخدم https://?

━━━ تصنيف الأعطال ━━━
🔴 حرج: mixed content (http://), ملفات حساسة مكشوفة، eval() أو document.write() في HTML
🟡 متوسط: external links بدون noopener، Analytics ID خاطئ، _headers غائب
🟢 منخفض: CSP غير محكمة، أي تحذيرات أسلوبية

━━━ الإجراء 1 — تحديث ملف النتائج ━━━
افتح docs/audits/51-pre-launch-audit-v2-findings.md
تحت ## Phase 8: Security Check
استبدل *Status: Pending* بنتائجك

━━━ الإجراء 2 — تحديث جدول تتبع التقدم ━━━
في plans/51-pre-launch-audit-v2.md، غيّر:
| Phase 8 | Security Check | [ ] |
إلى:
| Phase 8 | Security Check | [x] |

━━━ في ردك ━━━
1. ملخص مختصر لنتائج Phase 8
2. السطر: === PHASE 9 PROMPT ===
3. انسخ code block تحت "#### 📋 Prompt Phase 9" من plans/51-pre-launch-audit-v2.md
```

---

### Phase 9: Findings Compilation & Launch Decision

**الهدف:** تجميع النتائج وكتابة توصية نهائية: انشر أو أصلح أولاً.

| # | الفحص |
|---|-------|
| 9.1 | إحصائيات: عدد 🔴 / 🟡 / 🟢 من جميع المراحل |
| 9.2 | تصنيف الأعطال: ما الذي يمنع النشر؟ ما الذي يمكن تأجيله؟ |
| 9.3 | **توصية نهائية:** `LAUNCH ✅` أو `FIX FIRST ❌` مع سبب واضح |
| 9.4 | لو في أعطال حرجة: قائمة مختصرة بما يجب إصلاحه قبل النشر |

#### 📋 Prompt Phase 9 *(انسخه وأرسله)*

```
أنت تنهي تدقيق Plan 51 لموقع مركز الفارس (alfareslab.com) — Phase 9: Findings Compilation.

المراحل 1–8 اكتملت. الآن تجمّع النتائج وتكتب التوصية النهائية.

━━━ الخطوات ━━━

الخطوة 1 — اقرأ جميع نتائج الفحص:
افتح docs/audits/51-pre-launch-audit-v2-findings.md واقرأ كل مرحلة من Phase 1 إلى Phase 8.
عدّ إجمالي الأعطال: كم 🔴؟ كم 🟡؟ كم 🟢؟

الخطوة 2 — تصنيف ما يمنع النشر:
🔴 حرج = يمنع النشر (يجب إصلاحه أولاً)
🟡 متوسط = لا يمنع النشر (يمكن إصلاحه بعد النشر)
🟢 منخفض = اختياري

الخطوة 3 — اكتب Phase 9 في ملف النتائج:
افتح docs/audits/51-pre-launch-audit-v2-findings.md
تحت ## Phase 9: Final Recommendation، استبدل *Status: Pending* بـ:

*Status: Complete — [تاريخ اليوم]*

### إحصائيات
| التصنيف | العدد |
|---------|-------|
| 🔴 حرج | N |
| 🟡 متوسط | N |
| 🟢 منخفض | N |

### التوصية النهائية
**[LAUNCH ✅ أو FIX FIRST ❌]**
[سبب في جملة أو جملتين]

[إذا FIX FIRST: قائمة بالأعطال الحرجة فقط مع الملف والسطر]

الخطوة 4 — حدّث ملخص النتائج في أعلى الملف:
في قسم "ملخص النتائج"، حدّث أعداد 🔴/🟡/🟢 والتوصية.

الخطوة 5 — تحديث جدول تتبع التقدم في ملف الخطة:
في plans/51-pre-launch-audit-v2.md، غيّر:
| Phase 9 | Findings + Launch Decision | [ ] |
إلى:
| Phase 9 | Findings + Launch Decision | [x] |

━━━ في ردك ━━━
أخرج نص التوصية النهائية كاملاً بشكل واضح:
LAUNCH ✅ — الموقع جاهز للنشر
أو
FIX FIRST ❌ — يجب إصلاح N أعطال حرجة أولاً:
[قائمة موجزة]
```

---

## ⚠️ قيود صارمة

- **لا كود** — قراءة فقط بلا استثناء على ملفات HTML/CSS/JS
- **ملف نتائج جديد** — لا تعديل على ملفات أخرى
- **لا افتراضات** — إذا كان الفحص غامضاً سجّله بـ ⚠️
- **لا "All Passed" بدون قراءة** — اقرأ كل ملف مذكور فعلياً قبل الحكم عليه

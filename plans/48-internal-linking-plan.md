# خطة تحسين الروابط الداخلية وربط الخدمات
> **الإصدار:** 1.0.0
> **التاريخ:** 2026-05-04
> **الحالة:** مكتملة ✅
> **المرجع:** بروتوكول `01-plan-rules`

---

## الهدف

تحسين الـ SEO وتجربة المستخدم من خلال ثلاثة محاور:
1. إزالة الـ dropdown من الناف وتبسيطه
2. تحويل نقاط خدمة "استعادة البيانات" لروابط تشعبية لصفحات الخدمة
3. إضافة روابط صفحات المناطق في قسم التواصل

---

## المتطلبات

- الملفات المعدّلة تشمل: `index.html`, `en/index.html`, وكل 24 صفحة خدمة (عبر سكريبت)
- لا تغيير في التصميم البصري — فقط إضافة روابط وتعديل HTML
- نقاط كارد Mac والكمبيوتر تبقى plain text (لا صفحات لها حالياً)

---

## خطوات التنفيذ

### المجموعة 1: تبسيط الناف (إزالة الـ Dropdown)

- [x] [🤖] حذف كتلة `<li class="nav-dropdown">` من `index.html` واستبدالها بـ `<li><a href="#services">خدماتنا</a></li>`
- [x] [🤖] نفس التعديل في `en/index.html`
- [x] [🤖] تحديث سكريبت `sync_headers_footers.ps1` بالهيدر الجديد بدون dropdown
- [x] [🤖] تشغيل السكريبت على الـ 24 صفحة خدمة
- [x] [🤖] حذف CSS الخاص بـ `.nav-dropdown` و `.dropdown-menu` من `layout.css`

⏸️ Review Gate — المجموعة 1 اكتملت
انتظر موافقة المطور قبل الانتقال إلى: المجموعة 2

---

### المجموعة 2: ربط نقاط كارد استعادة البيانات

> **الهدف:** تحويل الـ 5 نقاط في كارد "استعادة البيانات" لروابط — في `index.html` و `en/index.html`

| النقطة العربية | النقطة الإنجليزية | الصفحة |
|---|---|---|
| استعادة HDD و SSD بأمان تام | HDD & SSD Recovery | `services/hdd-data-recovery.html` |
| استخلاص ملفات USB وبطاقات الذاكرة | USB & Memory Card Extraction | `services/flash-sd-data-recovery.html` |
| استعادة بيانات الخوادم وأنظمة RAID | Server & RAID Recovery | `services/raid-nas-data-recovery.html` |
| استرجاع تسجيلات أجهزة المراقبة DVR | DVR & CCTV Recovery | `services/dvr-nvr-data-recovery.html` |
| استعادة الملفات بعد الحذف أو الفورمات | File Recovery after Deletion | `services/hdd-data-recovery.html` |

- [x] [🤖] تعديل النقاط في `index.html` — كارد استعادة البيانات فقط
- [x] [🤖] تعديل النقاط في `en/index.html` — كارد Data Recovery فقط
- [x] [🤖] إضافة CSS hover خفيف للنقاط القابلة للنقر (underline عند hover فقط)

⏸️ Review Gate — المجموعة 2 اكتملت
انتظر موافقة المطور قبل الانتقال إلى: المجموعة 3

---

### المجموعة 3: إضافة روابط المناطق في قسم التواصل

- [x] [🤖] إضافة جملة + لينكين في نهاية قسم `#contact` في `index.html`:
  `نخدم جدة، <a href="services/data-recovery-makkah.html">مكة المكرمة</a>، و<a href="services/data-recovery-saudi-arabia.html">كافة أنحاء المملكة</a>`
- [x] [🤖] نفس الإضافة في `en/index.html` باللغة الإنجليزية
- [x] [🤖] تنسيق CSS بسيط للجملة (لون خفيف، حجم أصغر)

⏸️ Review Gate — المجموعة 3 اكتملت
انتظر موافقة المطور قبل: التوثيق النهائي

---

### المجموعة 4: التوثيق النهائي

- [x] [🤖] تحديث `changelog.md` بتغييرات الخطة 48
- [x] [🤖] تحديث `project-context.md`
- [x] [🤖] تحديث حالة هذا الملف إلى `مكتملة ✅`

---

## الملفات المتأثرة

| الملف | نوع التغيير |
|---|---|
| `index.html` | تعديل — ناف + كارد روابط + قسم contact |
| `en/index.html` | تعديل — نفس السابق |
| `assets/css/layout.css` | تعديل — حذف dropdown CSS + hover style |
| `services/*.html` (12 ملف) | تعديل عبر سكريبت — هيدر بدون dropdown |
| `en/services/*.html` (12 ملف) | تعديل عبر سكريبت — هيدر بدون dropdown |
| `scratch/sync_headers_footers.ps1` | تعديل — تحديث الهيدر المحفوظ |
| `assets/js/main.js` | تعديل — حذف `initializeServiceDropdown` و `SERVICE_NAV_ITEMS` |

---

## ملاحظات

- نقاط كارد **Mac** و**الحلول الشاملة** تبقى plain text — لا روابط حتى تُنشأ صفحاتهم
- الـ CTA buttons الموجودة في الكاردات (`استعد بياناتك`, `ابدأ الصيانة`, `تواصل معنا`) **لا تتغير** في هذه الخطة
- صفحات المناطق ستُربط من `#contact` فقط — لا تغيير في الفوتر الحالي

# إصلاح Schema.org — تصحيح علاقة الكيانات (Person-Centered)
> الإصدار: 1.0.0
> التاريخ: 2026-05-06
> الحالة: مكتملة

---

## الهدف

تصحيح بنية Schema.org في موقع alfareslab.com لتعكس العلاقة الحقيقية بين الكيانات:
- **أحمد** هو الرابط الشخصي (Person) بين الموقعين
- **Al-Fares** مركز محلي مستقل (LocalBusiness) يعمل فيه أحمد
- **DataCodexLab** مشروع معرفي شخصي لأحمد — ليس شركة أم للفارس

---

## المشكلة الحالية

| الخطأ | التأثير |
|-------|---------|
| `parentOrganization` → datacodexlab | يُوهم Google أن DataCodex تملك الفارس (علاقة ملكية خاطئة) |
| BreadcrumbList تبدأ بـ datacodexlab.com | لا معنى لها — الزائر لم يأتِ عبر datacodexlab |
| @graph node لـ datacodexlab كـ Organization | مرتبط بـ parentOrganization المحذوف — يصبح بلا هدف |

---

## الحل المقترح (أقل تعديل ممكن)

| التغيير | قبل | بعد |
|---------|-----|-----|
| علاقة الكيان | `parentOrganization` → datacodexlab | `employee` → `{"@id": "https://datacodexlab.com/#ahmed-saleh"}` |
| @graph node خارجي | Organization لـ datacodexlab | **محذوف** — التعريف الكامل لأحمد على datacodexlab.com لاحقاً |
| BreadcrumbList | datacodexlab position 1 + الفارس position 2 | **محذوف** (الصفحة الرئيسية لا تحتاجها) |

---

## المتطلبات

- لا تعديل في محتوى الصفحات أو CSS أو JS
- الـ `@id` الثابت لأحمد: `https://datacodexlab.com/#ahmed-saleh`
- الـ `@id` للفارس يبقى كما هو: `https://alfareslab.com/#organization`
- التعديل في 3 ملفات فقط

---

## خطوات التنفيذ

### المجموعة 1: تعديل index.html (AR)

- [x] [🤖] حذف `parentOrganization` block (السطر 97–99) واستبداله بـ `"employee": {"@id": "https://datacodexlab.com/#ahmed-saleh"}`
- [x] [🤖] حذف @graph node الخاص بـ datacodexlab Organization (السطر 380–386) بالكامل — بدون استبدال
- [x] [🤖] حذف BreadcrumbList بالكامل (السطر 439–456)

⏸️ Review Gate — index.html اكتمل
انتظر موافقة المطور قبل الانتقال إلى: en/index.html

---

### المجموعة 2: تعديل en/index.html

- [x] [🤖] حذف `parentOrganization` واستبداله بـ `employee` في en/index.html
- [x] [🤖] حذف @graph node لـ datacodexlab Organization من en/index.html بالكامل
- [x] [🤖] حذف BreadcrumbList من en/index.html بالكامل

⏸️ Review Gate — en/index.html اكتمل
انتظر موافقة المطور قبل الانتقال إلى: seo/structured-data.json

---

### المجموعة 3: تعديل seo/structured-data.json

- [x] [🤖] حذف `parentOrganization` من LocalBusiness واستبداله بـ `employee`
- [x] [🤖] حذف Organization node لـ datacodexlab بالكامل — بدون استبدال

---

## القرار النهائي — لا Person node في alfareslab.com

**القاعدة:** alfareslab.com تُشير فقط لأحمد عبر `@id`، ولا تُعرّفه.
التعريف الكامل لأحمد كـ Person يكون لاحقاً على datacodexlab.com.

```json
// داخل LocalBusiness فقط — بدون @graph node إضافي
"employee": {
  "@id": "https://datacodexlab.com/#ahmed-saleh"
}
```

---

## الملفات المتأثرة

| الملف | نوع التغيير |
|-------|-------------|
| `index.html` | تعديل — حذف parentOrganization + حذف datacodexlab node + حذف BreadcrumbList |
| `en/index.html` | تعديل — نفس التعديلات الثلاثة |
| `seo/structured-data.json` | تعديل — حذف parentOrganization + حذف datacodexlab node |

---

## ملاحظات

- DataCodexLab.com خارج نطاق هذا الإصلاح (مشروع منفصل)
- الـ `@id` لأحمد (`datacodexlab.com/#ahmed-saleh`) سيُعرَّف بالكامل لاحقاً على موقع DataCodex
- Cross-domain entity linking عبر `@id` صحيح تقنياً في Schema.org
- عند مغادرة أحمد الفارس مستقبلاً: يكفي حذف سطر `employee` وسطر `worksFor`

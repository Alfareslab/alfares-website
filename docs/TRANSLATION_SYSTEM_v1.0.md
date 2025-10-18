# 🌐 نظام الترجمة - مركز الفارس

**الإصدار**: v1.0.0  
**تاريخ الإنشاء**: 17 أكتوبر 2025  
**تاريخ آخر تحديث**: 17 أكتوبر 2025  
**الحالة**: ✅ نشط

---

## 🚨 تحذير مهم

نظام الترجمة هو **العمود الفقري** للموقع.  
أي خطأ فيه = الموقع لا يعمل.

**⚠️ اقرأ هذا الملف بالكامل قبل تعديل أي شيء متعلق بالترجمة!**

---

## 📋 كيف يعمل النظام؟

### البنية الأساسية

```
lang/
├── ar.json    ← جميع النصوص العربية
└── en.json    ← جميع النصوص الإنجليزية
```

### آلية العمل

```
1. المستخدم يفتح الموقع
   ↓
2. main.js يتحقق من اللغة المحفوظة في localStorage
   ↓
3. إذا لم توجد، يستخدم "ar" (الافتراضي)
   ↓
4. يحمّل ملف JSON المناسب (ar.json أو en.json)
   ↓
5. يبحث عن جميع العناصر التي لها data-i18n
   ↓
6. يحدّث محتوى كل عنصر من ملف JSON
   ↓
7. يغيّر اتجاه الصفحة (RTL للعربية، LTR للإنجليزية)
```

---

## 📄 بنية ملفات JSON

### المثال الكامل

```json
{
  "brand": {
    "full": "مركز الفارس لصيانة الكمبيوتر واستعادة البيانات",
    "short": "مركز الفارس"
  },
  "nav": {
    "home": "الرئيسية",
    "about": "من نحن",
    "services": "خدماتنا"
  },
  "hero": {
    "slides": [
      {
        "title": "مركز الفارس...",
        "description": "12 سنة خبرة...",
        "cta": "تواصل معنا الآن"
      }
    ]
  }
}
```

### القواعد الصارمة

#### 1️⃣ **البنية يجب أن تكون متطابقة**

❌ **خطأ**:
```json
// ar.json
{
  "nav": {
    "home": "الرئيسية"
  }
}

// en.json
{
  "navigation": {
    "homepage": "Home"
  }
}
```

✅ **صحيح**:
```json
// ar.json
{
  "nav": {
    "home": "الرئيسية"
  }
}

// en.json
{
  "nav": {
    "home": "Home"
  }
}
```

---

#### 2️⃣ **لا تحذف مفاتيح موجودة**

❌ **خطأ**:
```json
{
  "nav": {
    "home": "الرئيسية"
    // حذفت "about"
  }
}
```

✅ **صحيح**:
```json
{
  "nav": {
    "home": "الرئيسية",
    "about": "من نحن"
  }
}
```

---

#### 3️⃣ **أي مفتاح جديد يُضاف للملفين**

✅ **الخطوات**:
1. أضف المفتاح في `ar.json`
2. أضف نفس المفتاح في `en.json`
3. استخدمه في HTML

---

## 🔗 ربط HTML بـ JSON

### استخدام `data-i18n`

#### مثال بسيط

**HTML**:
```html
<h2 data-i18n="about.title">من نحن</h2>
```

**JSON** (`ar.json`):
```json
{
  "about": {
    "title": "من نحن"
  }
}
```

**JSON** (`en.json`):
```json
{
  "about": {
    "title": "About Us"
  }
}
```

---

#### مثال متداخل

**HTML**:
```html
<button data-i18n="buttons.whatsapp">تواصل عبر واتساب</button>
```

**JSON**:
```json
{
  "buttons": {
    "whatsapp": "تواصل عبر واتساب"
  }
}
```

---

#### مثال مع Placeholder

**HTML**:
```html
<input type="text" data-i18n-placeholder="contact.form.name">
```

**JSON**:
```json
{
  "contact": {
    "form": {
      "name": "الاسم"
    }
  }
}
```

**JavaScript** (`main.js`):
```javascript
if (element.hasAttribute('data-i18n-placeholder')) {
  const key = element.getAttribute('data-i18n-placeholder');
  element.placeholder = getTranslation(key);
}
```

---

## 🔄 كيفية إضافة نص جديد

### السيناريو: إضافة قسم "الشهادات"

#### الخطوة 1: أضف HTML

```html
<section id="certificates" class="section">
  <h2 data-i18n="certificates.title">الشهادات</h2>
  <p data-i18n="certificates.intro">نحن حاصلون على شهادات معتمدة</p>
</section>
```

#### الخطوة 2: أضف المفاتيح في `ar.json`

```json
{
  "certificates": {
    "title": "الشهادات",
    "intro": "نحن حاصلون على شهادات معتمدة"
  }
}
```

#### الخطوة 3: أضف المفاتيح في `en.json`

```json
{
  "certificates": {
    "title": "Certificates",
    "intro": "We hold certified credentials"
  }
}
```

#### الخطوة 4: اختبر

1. افتح الموقع
2. تأكد من ظهور النص بالعربية
3. بدّل اللغة للإنجليزية
4. تأكد من ظهور النص بالإنجليزية

---

## 🛠️ دالة `getTranslation()`

### كيف تعمل؟

```javascript
function getTranslation(key) {
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    value = value[k];
    if (!value) return key;
  }
  
  return value;
}
```

### مثال

```javascript
getTranslation('nav.home')
// يبحث في: translations.nav.home
// يعيد: "الرئيسية" (إذا اللغة عربية)
```

---

## ⚠️ الأخطاء الشائعة

### 1️⃣ **نسيان `data-i18n`**

**المشكلة**:
```html
<h2>من نحن</h2>
```

**النتيجة**: النص لا يتغير عند تبديل اللغة

**الحل**:
```html
<h2 data-i18n="about.title">من نحن</h2>
```

---

### 2️⃣ **خطأ في اسم المفتاح**

**المشكلة**:
```html
<h2 data-i18n="about.titel">من نحن</h2>
```
(لاحظ: `titel` بدلاً من `title`)

**النتيجة**: يظهر `about.titel` بدلاً من النص

**الحل**: تأكد من صحة الاسم

---

### 3️⃣ **مفتاح موجود في ملف واحد فقط**

**المشكلة**:
```json
// ar.json
{
  "certificates": {
    "title": "الشهادات"
  }
}

// en.json
{
  // نسيت إضافة "certificates"
}
```

**النتيجة**: عند التبديل للإنجليزية، يظهر `certificates.title`

**الحل**: أضف المفتاح في الملفين

---

### 4️⃣ **خطأ في بنية JSON**

**المشكلة**:
```json
{
  "nav": {
    "home": "الرئيسية",
    "about": "من نحن"  // نسيت الفاصلة
    "services": "خدماتنا"
  }
}
```

**النتيجة**: الملف لا يُحمّل، الموقع لا يعمل

**الحل**: استخدم JSON Validator

---

## 🔍 كيفية التحقق من صحة JSON

### أداة عبر الإنترنت

1. افتح [jsonlint.com](https://jsonlint.com)
2. الصق محتوى الملف
3. اضغط "Validate JSON"
4. إذا ظهر خطأ، صحّحه

### في المتصفح

1. افتح Console (F12)
2. اكتب:
```javascript
fetch('lang/ar.json')
  .then(r => r.json())
  .then(data => console.log('✅ صحيح'))
  .catch(err => console.error('❌ خطأ:', err));
```

---

## 📝 قواعد الترجمة الإنجليزية

### ✅ ترجمة احترافية (غير حرفية)

❌ **خطأ** (ترجمة حرفية):
```json
{
  "hero": {
    "title": "Center Al-Fares for maintenance computer"
  }
}
```

✅ **صحيح** (ترجمة احترافية):
```json
{
  "hero": {
    "title": "Al-Fares Center for Computer Repair"
  }
}
```

---

### ✅ مراعاة السياق

❌ **خطأ**:
```json
{
  "buttons": {
    "cta": "Press here now"
  }
}
```

✅ **صحيح**:
```json
{
  "buttons": {
    "cta": "Get Started"
  }
}
```

---

## 🔄 تدفق تبديل اللغة

```
1. المستخدم يضغط على زر اللغة
   ↓
2. دالة changeLanguage('en') تُستدعى
   ↓
3. يحمّل en.json
   ↓
4. يحدّث جميع العناصر التي لها data-i18n
   ↓
5. يغيّر dir من "rtl" إلى "ltr"
   ↓
6. يغيّر lang من "ar" إلى "en"
   ↓
7. يحفظ "en" في localStorage
   ↓
8. يحدّث نص الزر من "EN" إلى "AR"
```

---

## 🔗 روابط ذات صلة

- 📖 [قواعد التطوير](./DEVELOPMENT_GUIDE_v1.0.md)
- 📖 [حل المشاكل](./TROUBLESHOOTING_v1.0.md)

---

## 📝 سجل التحديثات

| الإصدار | التاريخ | التعديل | المبرمج |
|---------|---------|---------|---------|
| v1.0.0 | 2025-10-17 | إنشاء الملف | فريق الفارس |

---

**تم إعداد هذا الملف بواسطة**: فريق الفارس التقني  
**التاريخ**: 17 أكتوبر 2025  
**الإصدار**: v1.0.0  
**الحالة**: ✅ نشط


# 📘 دليل التطوير - مركز الفارس

**الإصدار**: v1.0.0  
**تاريخ الإنشاء**: 17 أكتوبر 2025  
**تاريخ آخر تحديث**: 17 أكتوبر 2025  
**الحالة**: ✅ نشط

---

## 🚨 تحذير مهم

هذا الملف يحتوي على **قواعد صارمة** يجب اتباعها.  
**عدم الالتزام = رفض التعديل**

---

## 📋 جدول المحتويات

1. [قواعد HTML](#قواعد-html)
2. [قواعد CSS](#قواعد-css)
3. [قواعد JavaScript](#قواعد-javascript)
4. [قواعد الترجمة](#قواعد-الترجمة)
5. [قواعد الصور](#قواعد-الصور)
6. [قواعد Git](#قواعد-git)
7. [الأخطاء الشائعة](#الأخطاء-الشائعة)

---

## 📄 قواعد HTML

### ✅ القواعد الإلزامية

#### 1️⃣ **كل نص يحتاج `data-i18n`**

❌ **خطأ**:
```html
<h2>من نحن</h2>
<p>مرحباً بكم في مركز الفارس</p>
```

✅ **صحيح**:
```html
<h2 data-i18n="about.title">من نحن</h2>
<p data-i18n="about.intro">مرحباً بكم في مركز الفارس</p>
```

**لماذا؟**
- ✅ يسمح بتبديل اللغة تلقائياً
- ✅ يفصل المحتوى عن الكود

---

#### 2️⃣ **لا تحذف `id` الأقسام**

❌ **خطأ**:
```html
<section class="section">
  <h2>خدماتنا</h2>
</section>
```

✅ **صحيح**:
```html
<section id="services" class="section">
  <h2 data-i18n="services.title">خدماتنا</h2>
</section>
```

**لماذا؟**
- ✅ `id` مرتبط بالتنقل في القائمة
- ✅ حذفه يكسر روابط التنقل

---

#### 3️⃣ **لا تغيّر بنية السلايدر**

❌ **خطأ**:
```html
<div class="hero-slider">
  <div class="slide">...</div>
</div>
```

✅ **صحيح**:
```html
<div class="hero-slider swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">...</div>
  </div>
</div>
```

**لماذا؟**
- ✅ Swiper.js يعتمد على هذه البنية بالضبط
- ✅ أي تغيير يكسر السلايدر

---

#### 4️⃣ **استخدم Semantic HTML**

❌ **خطأ**:
```html
<div class="header">
  <div class="nav">...</div>
</div>
```

✅ **صحيح**:
```html
<header class="header">
  <nav class="nav">...</nav>
</header>
```

**لماذا؟**
- ✅ أفضل لـ SEO
- ✅ أفضل لإمكانية الوصول

---

#### 5️⃣ **أضف `alt` لكل صورة**

❌ **خطأ**:
```html
<img src="store_front.png">
```

✅ **صحيح**:
```html
<img src="store_front.png" alt="واجهة مركز الفارس في جدة">
```

---

### ⚠️ القواعد الموصى بها

- استخدم `<button>` للأزرار، ليس `<a>` أو `<div>`
- استخدم `<form>` للنماذج
- أضف `aria-label` للعناصر التفاعلية

---

## 🎨 قواعد CSS

### ✅ القواعد الإلزامية

#### 1️⃣ **استخدم CSS Variables بدلاً من القيم الثابتة**

❌ **خطأ**:
```css
.btn-primary {
  background: #1e40af;
  color: #ffffff;
}
```

✅ **صحيح**:
```css
.btn-primary {
  background: var(--color-primary);
  color: var(--color-white);
}
```

**لماذا؟**
- ✅ سهل تغيير الألوان من مكان واحد
- ✅ يدعم الوضع الداكن تلقائياً

---

#### 2️⃣ **لا تستخدم `!important`**

❌ **خطأ**:
```css
.btn {
  color: red !important;
}
```

✅ **صحيح**:
```css
.btn.btn-danger {
  color: red;
}
```

**استثناء**: يمكن استخدام `!important` فقط لتجاوز أنماط المكتبات الخارجية.

---

#### 3️⃣ **اتبع نمط التسمية `kebab-case`**

❌ **خطأ**:
```css
.heroSlider { ... }
.Hero_Slider { ... }
```

✅ **صحيح**:
```css
.hero-slider { ... }
```

---

#### 4️⃣ **رتّب الخصائص**

✅ **الترتيب الموصى به**:
```css
.element {
  /* 1. Positioning */
  position: relative;
  top: 0;
  left: 0;
  
  /* 2. Box Model */
  display: flex;
  width: 100%;
  padding: 1rem;
  margin: 0;
  
  /* 3. Typography */
  font-size: 1rem;
  color: var(--color-text);
  
  /* 4. Visual */
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  
  /* 5. Misc */
  cursor: pointer;
  transition: all 0.3s;
}
```

---

#### 5️⃣ **استخدم Mobile-First**

❌ **خطأ**:
```css
.container {
  width: 1200px;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}
```

✅ **صحيح**:
```css
.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 1024px) {
  .container {
    width: 1200px;
  }
}
```

---

### ⚠️ القواعد الموصى بها

- استخدم `rem` بدلاً من `px` للمسافات والخطوط
- استخدم Flexbox أو Grid بدلاً من `float`
- أضف تعليقات للأقسام المعقدة

---

## 💻 قواعد JavaScript

### ✅ القواعد الإلزامية

#### 1️⃣ **لا تغيّر أسماء الدوال المُصدّرة**

❌ **خطأ**:
```javascript
// كان: changeLanguage()
function switchLanguage(lang) { ... }
```

✅ **صحيح**:
```javascript
// احتفظ بنفس الاسم
function changeLanguage(lang) { ... }
```

**لماذا؟**
- ✅ ملفات أخرى قد تستدعي هذه الدالة
- ✅ تغيير الاسم يكسر الكود

---

#### 2️⃣ **لا تعدّل بنية ملفات JSON**

❌ **خطأ**:
```javascript
// كان: translations.nav.home
// أصبح: translations.navigation.homepage
```

✅ **صحيح**:
```javascript
// احتفظ بنفس البنية
translations.nav.home
```

---

#### 3️⃣ **استخدم `async/await` بدلاً من `.then()`**

❌ **خطأ**:
```javascript
fetch('lang/ar.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

✅ **صحيح**:
```javascript
async function loadTranslations() {
  const response = await fetch('lang/ar.json');
  const data = await response.json();
  console.log(data);
}
```

---

#### 4️⃣ **أضف معالجة الأخطاء**

❌ **خطأ**:
```javascript
async function loadData() {
  const response = await fetch('data.json');
  const data = await response.json();
}
```

✅ **صحيح**:
```javascript
async function loadData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('فشل التحميل');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('خطأ:', error);
    return null;
  }
}
```

---

#### 5️⃣ **استخدم `const` و `let` بدلاً من `var`**

❌ **خطأ**:
```javascript
var currentLang = 'ar';
```

✅ **صحيح**:
```javascript
const defaultLang = 'ar';
let currentLang = defaultLang;
```

---

### ⚠️ القواعد الموصى بها

- أضف تعليقات للدوال المعقدة
- استخدم أسماء واضحة للمتغيرات
- قسّم الدوال الطويلة لدوال أصغر

---

## 🌐 قواعد الترجمة

### ✅ القواعد الإلزامية

#### 1️⃣ **لا تحذف مفاتيح موجودة**

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

#### 2️⃣ **أي مفتاح جديد يُضاف للملفين**

❌ **خطأ**:
```json
// ar.json
{
  "nav": {
    "certificates": "الشهادات"
  }
}

// en.json
{
  "nav": {
    // نسيت إضافة "certificates"
  }
}
```

✅ **صحيح**:
```json
// ar.json
{
  "nav": {
    "certificates": "الشهادات"
  }
}

// en.json
{
  "nav": {
    "certificates": "Certificates"
  }
}
```

---

#### 3️⃣ **احتفظ بنفس البنية الهرمية**

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
    "home": "Home"
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

#### 4️⃣ **الترجمة الإنجليزية غير حرفية**

❌ **خطأ** (ترجمة حرفية):
```json
{
  "hero": {
    "title": "Center Al-Fares for maintenance computer and recovery data"
  }
}
```

✅ **صحيح** (ترجمة احترافية):
```json
{
  "hero": {
    "title": "Al-Fares Center for Computer Repair and Data Recovery"
  }
}
```

---

## 🖼️ قواعد الصور

### ✅ القواعد الإلزامية

#### 1️⃣ **احتفظ بنفس الأسماء**

لاستبدال صورة:

❌ **خطأ**:
```
assets/images/hero-slider/
├── new-store-image.png  ← اسم جديد
```

✅ **صحيح**:
```
assets/images/hero-slider/
├── store_front-min.png  ← نفس الاسم
```

**لماذا؟**
- ✅ لا حاجة لتعديل الكود
- ✅ فقط استبدل الملف

---

#### 2️⃣ **احتفظ بنفس الأبعاد**

إذا كانت الصورة الأصلية `1920x1080`:
- ✅ الصورة الجديدة يجب أن تكون `1920x1080`
- ❌ لا تستخدم `800x600` أو `2400x1350`

---

#### 3️⃣ **ضغط الصور**

- ✅ استخدم أدوات ضغط (TinyPNG, ImageOptim)
- ✅ الهدف: أقل من 500 KB لكل صورة

---

## 🔀 قواعد Git

### ✅ القواعد الإلزامية

#### 1️⃣ **رسائل Commit واضحة**

❌ **خطأ**:
```
git commit -m "تعديلات"
git commit -m "fix"
```

✅ **صحيح**:
```
git commit -m "v1.1.0: إضافة قسم الشهادات"
git commit -m "fix: إصلاح خطأ في ترجمة قسم الخدمات"
```

---

#### 2️⃣ **نمط رسائل Commit**

```
<نوع>: <وصف قصير>

<وصف تفصيلي (اختياري)>
```

**الأنواع المسموحة**:
- `feat`: ميزة جديدة
- `fix`: إصلاح خطأ
- `docs`: تحديث التوثيق
- `style`: تعديل تصميم
- `refactor`: إعادة هيكلة كود
- `test`: إضافة اختبارات

**مثال**:
```
feat: إضافة قسم الشهادات

- أضفت قسم جديد في HTML
- أضفت ملف certificates.js
- حدّثت lang/ar.json و lang/en.json
```

---

#### 3️⃣ **لا تعمل Commit لملفات غير ضرورية**

❌ **لا تضف**:
- `node_modules/`
- `.DS_Store`
- `*.log`

✅ **أضف فقط**:
- ملفات المشروع
- ملفات التوثيق

---

## ⚠️ الأخطاء الشائعة

### 1️⃣ **نسيان `data-i18n`**

**المشكلة**: نص جديد بدون `data-i18n`

**الحل**:
1. أضف `data-i18n="key.name"` للعنصر
2. أضف المفتاح في `ar.json`
3. أضف المفتاح في `en.json`

---

### 2️⃣ **استخدام قيم ثابتة في CSS**

**المشكلة**: `color: #1e40af;`

**الحل**: `color: var(--color-primary);`

---

### 3️⃣ **تعديل بنية JSON**

**المشكلة**: غيّرت `nav.home` إلى `navigation.homepage`

**الحل**: احتفظ بنفس البنية، أو حدّث جميع المراجع

---

### 4️⃣ **حذف `id` من الأقسام**

**المشكلة**: حذفت `id="services"`

**الحل**: أعد `id` لأنه مرتبط بالتنقل

---

## ✅ قائمة تحقق قبل Commit

قبل عمل `git commit`، تأكد من:

- [ ] كل نص جديد له `data-i18n`
- [ ] أضفت المفاتيح في `ar.json` و `en.json`
- [ ] استخدمت CSS Variables
- [ ] لم أستخدم `!important`
- [ ] أضفت معالجة أخطاء في JavaScript
- [ ] اختبرت التعديل في اللغتين
- [ ] اختبرت التعديل في الوضعين (فاتح/داكن)
- [ ] حدّثت `CHANGELOG.md`
- [ ] حدّثت ملفات التوثيق المتأثرة
- [ ] رسالة Commit واضحة

---

## 🔗 روابط ذات صلة

- 📖 [معمارية المشروع](./ARCHITECTURE_v1.0.md)
- 📖 [نظام الترجمة](./TRANSLATION_SYSTEM_v1.0.md)
- 📖 [قائمة التحقق](./CODE_REVIEW_CHECKLIST_v1.0.md)
- 📖 [الملفات المحظورة](./DO_NOT_TOUCH_v1.0.md)

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


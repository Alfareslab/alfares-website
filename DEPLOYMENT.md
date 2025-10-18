# دليل النشر - موقع مركز الفارس v1.0

## 📋 نظرة عامة

هذا الدليل يشرح كيفية نشر موقع مركز الفارس على خادم ويب أو خدمة استضافة.

---

## 🚀 خيارات النشر

### الخيار 1: استضافة ثابتة (Static Hosting) - موصى به

الموقع عبارة عن HTML/CSS/JS ثابت، لذلك يمكن نشره على أي خدمة استضافة ثابتة مجانية أو مدفوعة:

#### أ. GitHub Pages (مجاني)

1. أنشئ مستودع جديد على GitHub
2. ارفع جميع ملفات المشروع
3. فعّل GitHub Pages من الإعدادات
4. الموقع سيكون متاحاً على: `https://username.github.io/repo-name`

#### ب. Netlify (مجاني)

1. سجّل حساب على [Netlify](https://www.netlify.com)
2. اسحب وأفلت مجلد المشروع على لوحة التحكم
3. الموقع سيكون متاحاً فوراً على رابط مجاني
4. يمكنك ربط نطاق خاص (alfares-lab.com)

#### ج. Vercel (مجاني)

1. سجّل حساب على [Vercel](https://vercel.com)
2. اربط مستودع GitHub أو ارفع الملفات مباشرة
3. الموقع سيكون متاحاً فوراً
4. يمكنك ربط نطاق خاص

#### د. Cloudflare Pages (مجاني)

1. سجّل حساب على [Cloudflare Pages](https://pages.cloudflare.com)
2. اربط مستودع GitHub
3. الموقع سيكون متاحاً مع CDN عالمي مجاني

### الخيار 2: استضافة تقليدية (Shared Hosting)

إذا كان لديك استضافة مشتركة (مثل cPanel):

1. ارفع جميع الملفات إلى مجلد `public_html` أو `www`
2. تأكد من أن ملف `index.html` في الجذر
3. الموقع سيكون متاحاً على نطاقك مباشرة

---

## 📁 الملفات المطلوبة للنشر

تأكد من رفع جميع الملفات التالية:

```
alfares-website-v1.0/
├── index.html              ← الصفحة الرئيسية (مطلوب)
├── assets/                 ← مجلد الأصول (مطلوب)
│   ├── css/               ← ملفات الأنماط (مطلوب)
│   ├── js/                ← ملفات JavaScript (مطلوب)
│   ├── images/            ← الصور (مطلوب)
│   └── vendor/            ← المكتبات (مطلوب)
├── lang/                   ← ملفات اللغة (مطلوب)
├── seo/                    ← ملفات SEO (اختياري لكن موصى به)
├── README.md               ← دليل المشروع (اختياري)
├── VERIFICATION_v1.1.md    ← تقرير التحقق (اختياري)
└── DEPLOYMENT.md           ← هذا الملف (اختياري)
```

**ملاحظة**: لا تحتاج إلى رفع مجلدات `.git` أو `.vite` أو أي ملفات تكوين.

---

## 🌐 ربط النطاق الخاص (alfares-lab.com)

### إذا كنت تستخدم Netlify/Vercel/Cloudflare:

1. اذهب إلى إعدادات النطاق في لوحة التحكم
2. أضف نطاقك الخاص: `alfares-lab.com`
3. اتبع التعليمات لتحديث سجلات DNS
4. عادة تحتاج إلى إضافة:
   - سجل A يشير إلى IP الخدمة
   - أو سجل CNAME يشير إلى رابط الخدمة

### إذا كنت تستخدم استضافة تقليدية:

1. تأكد من أن النطاق يشير إلى خادمك
2. ارفع الملفات إلى مجلد النطاق
3. الموقع سيكون متاحاً على `https://alfares-lab.com`

---

## 🔒 تفعيل HTTPS (SSL)

### على Netlify/Vercel/Cloudflare:
- ✅ HTTPS يتم تفعيله تلقائياً ومجاناً
- ✅ شهادة Let's Encrypt يتم تجديدها تلقائياً

### على استضافة تقليدية:
1. اذهب إلى cPanel
2. ابحث عن "SSL/TLS"
3. فعّل Let's Encrypt للنطاق
4. أو اطلب من الدعم الفني تفعيل SSL

---

## ⚙️ إعدادات إضافية (اختيارية)

### 1. إعداد ملف .htaccess (للاستضافة التقليدية)

أنشئ ملف `.htaccess` في الجذر:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Redirect www to non-www
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Enable browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 2. إعداد ملف robots.txt

الملف موجود بالفعل في `seo/robots.txt`. انقله إلى الجذر:

```
mv seo/robots.txt ./robots.txt
```

أو أنشئ رابطاً رمزياً:

```
ln -s seo/robots.txt robots.txt
```

### 3. إعداد ملف sitemap.xml

الملف موجود بالفعل في `seo/sitemap.xml`. انقله إلى الجذر:

```
mv seo/sitemap.xml ./sitemap.xml
```

### 4. تحديث عنوان URL في sitemap.xml

افتح `sitemap.xml` وغيّر جميع الروابط من:
```xml
<loc>https://alfares-lab.com/</loc>
```

إلى نطاقك الفعلي.

---

## 🧪 اختبار بعد النشر

بعد النشر، تأكد من:

1. ✅ الموقع يفتح بشكل صحيح
2. ✅ جميع الصور تظهر
3. ✅ السلايدر يعمل
4. ✅ تبديل اللغة يعمل
5. ✅ تبديل الوضع الداكن يعمل
6. ✅ نموذج الاتصال يعمل (يفتح واتساب)
7. ✅ فيديوهات TikTok تظهر
8. ✅ HTTPS مفعّل (قفل أخضر في المتصفح)
9. ✅ الموقع يعمل على الموبايل

---

## 📊 مراقبة الأداء

### Google Search Console

1. سجّل الموقع على [Google Search Console](https://search.google.com/search-console)
2. أرسل ملف sitemap.xml
3. راقب أداء الموقع في نتائج البحث

### Google Analytics (اختياري)

إذا أردت تتبع الزوار:

1. أنشئ حساب على [Google Analytics](https://analytics.google.com)
2. احصل على كود التتبع
3. أضف الكود قبل `</head>` في `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔧 الصيانة والتحديثات

### تحديث المحتوى

لتحديث النصوص:
1. عدّل ملفات `lang/ar.json` و `lang/en.json`
2. ارفع الملفات المحدثة
3. التحديثات ستظهر فوراً

### تحديث الصور

لتغيير صور السلايدر:
1. استبدل الصور في `assets/images/hero-slider/`
2. احتفظ بنفس الأسماء أو حدّث المراجع في `lang/*.json`
3. ارفع الصور الجديدة

### تحديث التقييمات

لإضافة تقييمات جديدة:
1. افتح `assets/js/reviews.js`
2. أضف التقييمات الجديدة إلى مصفوفة `reviewsData`
3. ارفع الملف المحدث

---

## 🆘 حل المشاكل الشائعة

### المشكلة: الصور لا تظهر

**الحل**: تأكد من أن مسارات الصور صحيحة. يجب أن تكون نسبية من ملف `index.html`:
```html
<img src="assets/images/hero-slider/store_front-min.png">
```

### المشكلة: السلايدر لا يعمل

**الحل**: تأكد من أن مكتبة Swiper محمّلة بشكل صحيح:
```html
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
```

### المشكلة: تبديل اللغة لا يعمل

**الحل**: تأكد من أن ملفات اللغة موجودة في `lang/` وأن المسارات صحيحة في `main.js`:
```javascript
const response = await fetch(`lang/${lang}.json`);
```

### المشكلة: فيديوهات TikTok لا تظهر

**الحل**: تأكد من أن سكريبت TikTok يتم تحميله:
```html
<script src="https://www.tiktok.com/embed.js"></script>
```

---

## 📞 الدعم

إذا واجهت أي مشاكل في النشر، يمكنك:

1. مراجعة ملف `README.md` للتفاصيل التقنية
2. مراجعة ملف `VERIFICATION_v1.1.md` لقائمة التحقق
3. التواصل مع فريق الدعم الفني

---

## ✅ قائمة التحقق النهائية

قبل إطلاق الموقع رسمياً، تأكد من:

- [ ] جميع الملفات مرفوعة
- [ ] HTTPS مفعّل
- [ ] النطاق الخاص مربوط (alfares-lab.com)
- [ ] robots.txt في الجذر
- [ ] sitemap.xml في الجذر
- [ ] Google Search Console مفعّل
- [ ] الموقع يعمل على جميع الأجهزة
- [ ] جميع الروابط تعمل
- [ ] نموذج الاتصال يعمل
- [ ] فيديوهات TikTok تظهر
- [ ] التقييمات تظهر
- [ ] تبديل اللغة يعمل
- [ ] تبديل الوضع الداكن يعمل

---

**تم إعداد هذا الدليل بواسطة**: فريق الفارس التقني  
**التاريخ**: 17 أكتوبر 2025  
**الإصدار**: v1.0


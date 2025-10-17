# مركز الفارس لصيانة الكمبيوتر واستعادة البيانات - الموقع الرسمي v1.0

## 📋 نظرة عامة

موقع ويب ثابت (Static HTML) احترافي لمركز الفارس المتخصص في صيانة الكمبيوتر واستعادة البيانات في جدة، المملكة العربية السعودية.

## ✨ المميزات

- 🌐 **دعم لغتين**: العربية (RTL) والإنجليزية (LTR) مع تبديل فوري
- 🎨 **وضعان للعرض**: الوضع الفاتح والوضع الداكن
- 📱 **تصميم متجاوب**: يعمل بشكل مثالي على جميع الأجهزة (موبايل، تابلت، كمبيوتر)
- 🎬 **سلايدر احترافي**: 5 شرائح بتبديل تلقائي كل 7 ثوانٍ
- ⭐ **تقييمات Google**: عرض تقييمات العملاء مع فلترة ≥3.5 نجمة
- 🎵 **فيديوهات TikTok**: تضمين 3 فيديوهات مع Lazy Loading
- 🚀 **أداء عالي**: جميع الملفات محلية، بدون CDN
- ♿ **إمكانية الوصول**: متوافق مع معايير WCAG
- 🔍 **SEO محسّن**: Structured Data، Sitemap، Robots.txt

## 📁 هيكل المشروع

```
alfares-website-v1.0/
├── index.html                 # الصفحة الرئيسية
├── assets/
│   ├── css/
│   │   ├── base.css          # الأنماط الأساسية والمتغيرات
│   │   ├── layout.css        # تخطيط الصفحة والأقسام
│   │   ├── components.css    # مكونات واجهة المستخدم
│   │   └── hero-slider.css   # أنماط السلايدر
│   ├── js/
│   │   ├── main.js           # الوظائف الأساسية
│   │   ├── hero-slider.js    # إدارة السلايدر
│   │   ├── reviews.js        # عرض التقييمات
│   │   └── tiktok.js         # تضمين فيديوهات TikTok
│   ├── images/
│   │   └── hero-slider/      # صور السلايدر (5 صور)
│   └── vendor/
│       └── swiper/           # مكتبة Swiper.js محلياً
├── lang/
│   ├── ar.json               # النصوص العربية
│   └── en.json               # النصوص الإنجليزية
├── seo/
│   ├── robots.txt            # ملف Robots
│   ├── sitemap.xml           # خريطة الموقع
│   └── structured-data.json  # البيانات المنظمة
└── README.md                 # هذا الملف
```

## 🚀 التشغيل

### الطريقة الأولى: فتح مباشر
افتح ملف `index.html` مباشرة في المتصفح.

### الطريقة الثانية: خادم محلي (موصى بها)
```bash
# باستخدام Python
python3 -m http.server 8000

# أو باستخدام Node.js
npx serve

# ثم افتح المتصفح على
http://localhost:8000
```

## 🎯 الأقسام الرئيسية

1. **Hero Slider** - سلايدر رئيسي من 5 شرائح
2. **About** - نبذة عن المركز وخبرة 12 سنة
3. **Services** - الخدمات المقدمة (استعادة بيانات، صيانة Apple، حلول شاملة)
4. **Capabilities** - الإمكانيات والأجهزة (PC-3000، Clean Room، فريق متخصص)
5. **Process** - آلية العمل في 4 خطوات
6. **Reviews** - آراء العملاء من Google (21 تقييم)
7. **TikTok** - 3 فيديوهات من حساب المركز
8. **Contact** - معلومات التواصل ونموذج الاتصال

## 📞 معلومات الاتصال

- **الرقم الرئيسي**: +966 56 374 7332
- **قسم استعادة البيانات**: +966 50 732 2542
- **قسم صيانة الكمبيوتر**: +966 50 859 5762
- **العنوان**: 8010 شارع خالد بن وليد، الشرفية، جدة 23218

## 🌐 روابط التواصل الاجتماعي

- Snapchat: [@alfaresrecovery](https://snapchat.com/add/alfaresrecovery)
- TikTok: [@alfares.datarecovry](https://tiktok.com/@alfares.datarecovry)
- Instagram: [@fares.datarecovery](https://instagram.com/fares.datarecovery)
- Facebook: [مركز الفارس](https://facebook.com/615639735110001)

## 🔧 التخصيص

### تغيير الألوان
عدّل المتغيرات في `assets/css/base.css`:
```css
:root {
  --color-primary: #1e40af;
  --color-secondary: #059669;
  --color-accent: #f59e0b;
}
```

### إضافة/تعديل النصوص
عدّل ملفات اللغة:
- `lang/ar.json` للنصوص العربية
- `lang/en.json` للنصوص الإنجليزية

### تغيير صور السلايدر
استبدل الصور في `assets/images/hero-slider/` بنفس الأسماء:
- `store_front-min.png`
- `pc3000_portable_pro-min.png`
- `clean_room-min.png`
- `apple_repair-min.png`
- `fast_service-min.png`

## 📊 الأداء

- حجم الصفحة: ~250KB (بدون صور السلايدر)
- Lighthouse Score: ≥90 (Mobile)
- جميع الأصول محلية (بدون CDN)
- Lazy Loading للصور والفيديوهات

## 🔍 SEO

- Meta tags محسّنة للغتين
- Structured Data (LocalBusiness + AggregateRating)
- Sitemap.xml
- Robots.txt
- Open Graph tags
- Twitter Card tags

## 📱 التوافق

- ✅ Chrome/Edge (الإصدارات الحديثة)
- ✅ Firefox (الإصدارات الحديثة)
- ✅ Safari (الإصدارات الحديثة)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 الإصدار

**الإصدار الحالي**: v1.0  
**تاريخ الإصدار**: 17 أكتوبر 2025

## 👥 الفريق

تم تطوير الموقع بواسطة فريق الفارس التقني

## 📄 الترخيص

© 2025 مركز الفارس لصيانة الكمبيوتر. جميع الحقوق محفوظة.

---

**ملاحظة**: هذا الموقع ثابت (Static) ولا يحتاج إلى قاعدة بيانات أو خادم backend. جميع الوظائف تعمل من جانب العميل (Client-side).


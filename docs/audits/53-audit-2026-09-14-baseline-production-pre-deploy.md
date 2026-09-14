# 🔍 تقرير خط الأساس: الإنتاج قبل نشر خطة 59 — المجموعة 8

> **التاريخ:** 2026-09-14
> **النطاق:** حالة alfareslab.com الحية (main @ 19a0b32) قبل أي دمج لـ preview/dist-output
> **الغرض:** مرجع مقارنة قبل/بعد للتحقق من نشر خطة 59 — المجموعة 8
> **عدد الروابط المفحوصة:** 32 (30+ كما طُلب)

## ملخص تنفيذي

- كل الروابط المفحوصة صحية (200 على الوجهات النهائية، 308 على أسماء .html القديمة).
- **اكتشاف مهم:** بنية URL الحالية على الإنتاج لا تستخدم امتداد `.html` — كل روابط
  `/services/*.html` و`/en/services/*.html` و`/about-lab.html` و`/privacy-policy.html`
  و`/en/about-lab.html` و`/en/privacy-policy.html` ترجع **308 Permanent Redirect** إلى
  نفس المسار بدون الامتداد (مثال: `/services/hdd-data-recovery.html` → `/services/hdd-data-recovery`).
  هذا السلوك **قائم من قبل خطة 59** وليس جزءاً منها — يجب أن يبقى **كما هو تماماً** بعد النشر.
  المقارنة بعد النشر ستكون على **كلا المسارين**: مسار .html (يجب أن يبقى 308 لنفس الوجهة)
  والمسار النهائي بدون امتداد (يجب أن يبقى 200 بنفس الـ metadata).
- لا يوجد `X-Robots-Tag` على أي رابط من الإنتاج حالياً (فارغ في كل الفحوصات) — **يجب أن يبقى غائباً**.
- `sitemap.xml` و`robots.txt` تم حفظ نسختهما الخام + checksum SHA-256 في هذا المجلد
  للمقارنة الحرفية (byte-for-byte) بعد النشر.

---

## 1) الصفحات الرئيسية

| # | الرابط | Status | Redirect | Canonical | Title | H1 (مقتطف) |
|---|--------|--------|----------|-----------|-------|-------------|
| 1 | `/` | 200 | — | `https://alfareslab.com/` | مركز الفارس لصيانة الكمبيوتر واستعادة البيانات - جدة | مركز الفارس لصيانة الكمبيوتر واستعادة البيانات |
| 2 | `/en/` | 200 | — | `https://alfareslab.com/en/` | Al-Fares Center — Computer Repair & Data Recovery, Jeddah | Al-Fares Center for Computer Repair & Data Recovery |

hreflang على كلا الصفحتين: `ar → /` · `en → /en/` · `x-default → /` — صحيح ومتطابق.

---

## 2) صفحات الخدمات — عربي (services/*.html → 308 → services/* )

| # | المسار الأصلي (.html) | Status | Location | الوجهة النهائية Status | Canonical | Title |
|---|------------------------|--------|-----------|--------------------------|-----------|-------|
| 3 | `/services/hdd-data-recovery.html` | 308 | `/services/hdd-data-recovery` | 200 | `.../services/hdd-data-recovery` | استعادة بيانات هارد ديسك داخلي في جدة \| مركز الفارس |
| 4 | `/services/external-hdd-data-recovery.html` | 308 | `/services/external-hdd-data-recovery` | 200 | `.../services/external-hdd-data-recovery` | استعادة بيانات هارد خارجي \| جدة \| الفارس |
| 5 | `/services/ssd-nvme-data-recovery.html` | 308 | `/services/ssd-nvme-data-recovery` | 200 | `.../services/ssd-nvme-data-recovery` | استعادة بيانات SSD و NVMe في جدة \| مركز الفارس |
| 6 | `/services/laptop-pc-data-recovery.html` | 308 | `/services/laptop-pc-data-recovery` | 200 | `.../services/laptop-pc-data-recovery` | استعادة بيانات لابتوب وكمبيوتر في جدة \| مركز الفارس |
| 7 | `/services/mac-data-recovery.html` | 308 | `/services/mac-data-recovery` | 200 | `.../services/mac-data-recovery` | استعادة بيانات أجهزة ماك وأبل في جدة \| مركز الفارس |
| 8 | `/services/raid-nas-data-recovery.html` | 308 | `/services/raid-nas-data-recovery` | 200 | `.../services/raid-nas-data-recovery` | استعادة بيانات سيرفرات RAID و NAS في جدة \| مركز الفارس |
| 9 | `/services/flash-sd-data-recovery.html` | 308 | `/services/flash-sd-data-recovery` | 200 | `.../services/flash-sd-data-recovery` | استعادة بيانات فلاش ميموري في جدة \| مركز الفارس |
| 10 | `/services/dvr-nvr-data-recovery.html` | 308 | `/services/dvr-nvr-data-recovery` | 200 | `.../services/dvr-nvr-data-recovery` | استعادة كاميرات المراقبة \| جدة \| الفارس |
| 11 | `/services/ransomware-data-recovery.html` | 308 | `/services/ransomware-data-recovery` | 200 | `.../services/ransomware-data-recovery` | استرجاع بيانات فيروس الفدية \| جدة \| الفارس |
| 12 | `/services/database-erp-recovery.html` | 308 | `/services/database-erp-recovery` | 200 | `.../services/database-erp-recovery` | استعادة قواعد البيانات والسيرفرات في جدة \| مركز الفارس |
| 13 | `/services/data-recovery-makkah.html` | 308 | `/services/data-recovery-makkah` | 200 | `.../services/data-recovery-makkah` | استعادة البيانات مكة \| هارد ديسك \| مركز الفارس |
| 14 | `/services/data-recovery-saudi-arabia.html` | 308 | `/services/data-recovery-saudi-arabia` | 200 | `.../services/data-recovery-saudi-arabia` | استرجاع البيانات السعودية \| جدة \| الفارس |

> ملحوظة: `data-recovery-saudi-arabia` بلا meta description (فارغة) — هذا موجود حالياً على
> الإنتاج (ليس مشكلة جديدة)، ويجب أن يبقى كما هو بعد النشر (لا تغيير متوقع).

---

## 3) صفحات الخدمات — إنجليزي (en/services/*.html → 308 → en/services/*)

| # | المسار الأصلي (.html) | Status | Location | الوجهة النهائية Status | Canonical | Title |
|---|------------------------|--------|-----------|--------------------------|-----------|-------|
| 15 | `/en/services/hdd-data-recovery.html` | 308 | `/en/services/hdd-data-recovery` | 200 | `.../en/services/hdd-data-recovery` | Internal Hard Drive Data Recovery in Jeddah \| Al-Fares Center |
| 16 | `/en/services/external-hdd-data-recovery.html` | 308 | `/en/services/external-hdd-data-recovery` | 200 | `.../en/services/external-hdd-data-recovery` | External Hard Drive Recovery in Jeddah \| Al-Fares Center |
| 17 | `/en/services/ssd-nvme-data-recovery.html` | 308 | `/en/services/ssd-nvme-data-recovery` | 200 | `.../en/services/ssd-nvme-data-recovery` | SSD & NVMe Data Recovery in Jeddah \| Al-Fares Center |
| 18 | `/en/services/laptop-pc-data-recovery.html` | 308 | `/en/services/laptop-pc-data-recovery` | 200 | `.../en/services/laptop-pc-data-recovery` | Laptop & Computer Data Recovery in Jeddah \| Al-Fares |
| 19 | `/en/services/mac-data-recovery.html` | 308 | `/en/services/mac-data-recovery` | 200 | `.../en/services/mac-data-recovery` | Mac & Apple Data Recovery in Jeddah \| iMac, MacBook Pro |
| 20 | `/en/services/raid-nas-data-recovery.html` | 308 | `/en/services/raid-nas-data-recovery` | 200 | `.../en/services/raid-nas-data-recovery` | RAID & NAS Server Data Recovery in Jeddah \| Al-Fares |
| 21 | `/en/services/flash-sd-data-recovery.html` | 308 | `/en/services/flash-sd-data-recovery` | 200 | `.../en/services/flash-sd-data-recovery` | Flash Drive & Memory Card Data Recovery Jeddah \| Al-Fares |
| 22 | `/en/services/dvr-nvr-data-recovery.html` | 308 | `/en/services/dvr-nvr-data-recovery` | 200 | `.../en/services/dvr-nvr-data-recovery` | DVR & CCTV Video Data Recovery in Jeddah \| Al-Fares |
| 23 | `/en/services/ransomware-data-recovery.html` | 308 | `/en/services/ransomware-data-recovery` | 200 | `.../en/services/ransomware-data-recovery` | Ransomware Data Recovery & Decryption in Jeddah \| Al-Fares |
| 24 | `/en/services/database-erp-recovery.html` | 308 | `/en/services/database-erp-recovery` | 200 | `.../en/services/database-erp-recovery` | Database & Server Data Recovery Jeddah \| Al-Fares Center |
| 25 | `/en/services/data-recovery-makkah.html` | 308 | `/en/services/data-recovery-makkah` | 200 | `.../en/services/data-recovery-makkah` | Data Recovery Makkah \| Professional Hard Drive Recovery |
| 26 | `/en/services/data-recovery-saudi-arabia.html` | 308 | `/en/services/data-recovery-saudi-arabia` | 200 | `.../en/services/data-recovery-saudi-arabia` | Data Recovery Saudi Arabia \| KSA Hard Drive Recovery Experts |

كل الـ12 صفحة عربي و12 إنجليزي: hreflang صحيح ومتقابل (ar↔en↔x-default يشير لنفس السطر بدون امتداد).

---

## 4) صفحات ثابتة أخرى

| # | المسار | Status | Location | Canonical | Title |
|---|--------|--------|----------|-----------|-------|
| 27 | `/about-lab.html` | 308 | `/about-lab` | — | — |
| 27b | `/about-lab` (الوجهة) | 200 | — | `.../about-lab` | معمل استعادة البيانات \| PC-3000 \| مركز الفارس |
| 28 | `/en/about-lab.html` | 308 | `/en/about-lab` | — | — |
| 28b | `/en/about-lab` (الوجهة) | 200 | — | `.../en/about-lab` | About Our Lab \| Professional Data Recovery Technology Jeddah |
| 29 | `/privacy-policy.html` | 308 | `/privacy-policy` | — | — |
| 29b | `/privacy-policy` (الوجهة) | 200 | — | `.../privacy-policy` | سياسة السرية والخصوصية في مركز الفارس \| أمان بياناتك أولويتنا |
| 30 | `/en/privacy-policy.html` | 308 | `/en/privacy-policy` | — | — |
| 30b | `/en/privacy-policy` (الوجهة) | 200 | — | `.../en/privacy-policy` | Data Privacy and Confidentiality Policy \| Al-Fares Center |

---

## 5) الملفات الفنية

| # | المسار | Status | Content-Type | ملاحظات |
|---|--------|--------|---------------|---------|
| 31 | `/sitemap.xml` | 200 | `application/xml` | تم حفظ النسخة الكاملة في `prod_sitemap_before.xml` — SHA-256: `bdffa2fc84ceb0d821089c1c23166ae0b5037d8008cdb0046fe4b2697d31f582` (15,428 بايت) |
| 32 | `/robots.txt` | 200 | `text/plain; charset=utf-8` | تم حفظ النسخة الكاملة في `prod_robots_before.txt` — SHA-256: `507e7c306b7742bc3706eafcca263cd44586e138c10d4fba470bbe0ed228d97d` (2,119 بايت) |

---

## 6) X-Robots-Tag

فُحص كل رابط أعلاه — **لا يوجد `X-Robots-Tag` على أي رابط إنتاج حالياً** (كل النتائج فارغة).
هذا هو خط الأساس المطلوب المحافظة عليه بعد النشر (`noindex` يجب أن يبقى غائباً تماماً).

---

## خط الأساس الكامل (Raw Dump)

الملفان الخام لكل الفحوصات (32 رابط: status/location/content-type/x-robots-tag/canonical/
hreflang/title/description/h1) محفوظان محلياً في جلسة العمل تحت مجلد المؤقتات، وتم تلخيصهما
بالكامل في الجداول أعلاه. النسختان الخام لـ sitemap.xml و robots.txt محفوظتان في هذا المجلد:
- `docs/audits/baseline-2026-09-14/prod_sitemap_before.xml`
- `docs/audits/baseline-2026-09-14/prod_robots_before.txt`

---

## الخلاصة

✅ لا مشاكل مكتشفة في خط الأساس. الموقع الحي سليم بالكامل قبل النشر.
✅ تم تثبيت مرجع مقارنة دقيق (status + redirect + canonical + hreflang + title +
   description + h1 لكل من الـ32 رابط، بالإضافة لـ checksum حرفي لـ sitemap.xml و robots.txt).

**⏸️ في انتظار موافقة المطور الصريحة على المتابعة إلى المرحلة 8-ب (الدمج `--ff-only` والنشر).**

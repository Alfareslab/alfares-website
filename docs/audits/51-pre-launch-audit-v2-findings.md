# Pre-Launch Audit v2 — Al-Fares Lab
> **Plan:** 51 | **Site:** alfareslab.com | **Audit started:** *(filled by agent)*

---

## ملخص النتائج

| التصنيف | العدد |
|---------|-------|
| 🔴 حرج | 3 |
| 🟡 متوسط | 33 |
| 🟢 منخفض | 8 |
| **التوصية** | **FIX FIRST ❌ — إصلاح 2 ملفات قبل النشر** |

---

## Phase 1: Canonical, Hreflang & Meta

*Status: Complete — 2026-05-05*

- 🟡 `index.html` (line 10): Meta description length 146 out of range 150-160.
- 🟡 `about-lab.html` (line 8): Title length 45 out of range 50-60.
- 🟡 `privacy-policy.html` (line 8): Title length 61 out of range 50-60.
- 🟡 `privacy-policy.html` (line 10): Meta description length 149 out of range 150-160.
- 🔴 `404.html` (line 1): Missing `hreflang="ar"`.
- 🔴 `404.html` (line 1): Missing `hreflang="en"`.
- 🔴 `404.html` (line 1): Missing `hreflang="x-default"`.
- 🟡 `404.html` (line 10): Title length 31 out of range 50-60.
- 🟡 `404.html` (line 6): Meta description length 95 out of range 150-160.
- 🟡 `services/ssd-nvme-data-recovery.html` (line 11): Title length 46 out of range 50-60.
- 🟡 `services/flash-sd-data-recovery.html` (line 11): Title length 47 out of range 50-60.
- 🟡 `services/flash-sd-data-recovery.html` (line 13): Meta description length 116 out of range 150-160.
- 🟡 `services/raid-nas-data-recovery.html` (line 13): Meta description length 144 out of range 150-160.
- 🟡 `services/dvr-nvr-data-recovery.html` (line 11): Title length 39 out of range 50-60.
- 🟡 `services/mac-data-recovery.html` (line 13): Meta description length 147 out of range 150-160.
- 🟡 `services/external-hdd-data-recovery.html` (line 11): Title length 40 out of range 50-60.
- 🟡 `services/external-hdd-data-recovery.html` (line 13): Meta description length 169 out of range 150-160.
- 🟡 `services/ransomware-data-recovery.html` (line 11): Title length 42 out of range 50-60.
- 🟡 `services/ransomware-data-recovery.html` (line 13): Meta description length 145 out of range 150-160.
- 🟡 `services/data-recovery-saudi-arabia.html` (line 12): Title length 40 out of range 50-60.
- 🟢 `services/data-recovery-saudi-arabia.html` (line 211): Service H1 does not include `جدة`.
- 🟡 `services/data-recovery-makkah.html` (line 11): Title length 46 out of range 50-60.
- 🟢 `services/data-recovery-makkah.html` (line 206): Service H1 does not include `جدة`.
- 🟡 `en/index.html` (line 11): Meta description length 197 out of range 150-160.
- 🟡 `en/about-lab.html` (line 10): Meta description length 149 out of range 150-160.
- 🟡 `en/privacy-policy.html` (line 10): Meta description length 149 out of range 150-160.
- 🟡 `en/services/hdd-data-recovery.html` (line 11): Title length 61 out of range 50-60.
- 🟡 `en/services/flash-sd-data-recovery.html` (line 11): Title length 61 out of range 50-60.
- 🟡 `en/services/flash-sd-data-recovery.html` (line 13): Meta description length 175 out of range 150-160.
- 🟡 `en/services/dvr-nvr-data-recovery.html` (line 13): Meta description length 149 out of range 150-160.
- 🟡 `en/services/mac-data-recovery.html` (line 13): Meta description length 167 out of range 150-160.
- 🟡 `en/services/external-hdd-data-recovery.html` (line 13): Meta description length 169 out of range 150-160.
- 🟡 `en/services/database-erp-recovery.html` (line 13): Meta description length 162 out of range 150-160.
- 🟡 `en/services/data-recovery-saudi-arabia.html` (line 13): Meta description length 170 out of range 150-160.
- 🟢 `en/services/data-recovery-saudi-arabia.html` (line 209): Service H1 does not include `Jeddah`.
- 🟡 `en/services/data-recovery-makkah.html` (line 13): Meta description length 169 out of range 150-160.
- 🟢 `en/services/data-recovery-makkah.html` (line 209): Service H1 does not include `Jeddah`.

---

## Phase 2: Schema.org Validation

*Status: Complete — 2026-05-05*

✅ لا توجد ملاحظات. (All checks passed)

---

## Phase 3: Sitemap & Robots

*Status: Complete — 2026-05-05*

- 🟢 `sitemap.xml` (lines 5-274): Total URLs in sitemap are 30, which is slightly below expected 31.
- 🟡 `sitemap.xml` (lines 5-274) vs disk inventory in `plans/51-pre-launch-audit-v2.md` (line 30): Missing `https://alfareslab.com/404.html` from sitemap (orphan-on-disk page not indexed in sitemap).
- ✅ `sitemap.xml` (lines 6-274): No sitemap URL contains `?lang=`.
- ✅ `sitemap.xml` (lines 7-9 and repeated per `<url>` block): `xhtml:link` alternates include `hreflang="ar"`, `hreflang="en"`, and `hreflang="x-default"`.
- ✅ `robots.txt` (lines 3-7): Crawling is allowed (`Allow: /`) and sitemap line matches `https://alfareslab.com/sitemap.xml`.
- ✅ Canonical-to-sitemap sample match passed:
  - `index.html` (line 37) ↔ `sitemap.xml` (line 6): `https://alfareslab.com/`
  - `services/hdd-data-recovery.html` (line 32) ↔ `sitemap.xml` (line 24): `https://alfareslab.com/services/hdd-data-recovery.html`
  - `en/index.html` (line 38) ↔ `sitemap.xml` (line 15): `https://alfareslab.com/en/`
  - `en/services/hdd-data-recovery.html` (line 32) ↔ `sitemap.xml` (line 33): `https://alfareslab.com/en/services/hdd-data-recovery.html`

---

## Phase 4: Internal Links & Assets

*Status: Complete — 2026-05-05*

- ✅ `index.html`, `en/index.html`, and sample service pages (`services/data-recovery-makkah.html`, `services/data-recovery-saudi-arabia.html`, `services/database-erp-recovery.html`, `en/services/data-recovery-makkah.html`, `en/services/data-recovery-saudi-arabia.html`, `en/services/database-erp-recovery.html`): Internal `<a href>` links resolved successfully (with `base href` handling) and targets exist on disk.
- ✅ `index.html` and `en/index.html`: All `<img src>` assets exist on disk.
- ✅ `index.html`: All referenced stylesheet and script files exist on disk.
- 🟡 `en/index.html`: Data Recovery `.service-details` links are not pointing to `en/services/` (links are `services/...`), so EN card does not provide locale-scoped service links as required.
- 🟡 Root HTML orphan detection (`sitemap.xml` + `index.html` references): `404.html`, `footer_temp.html`, and `service-page-premium-compare.html` are not referenced and currently orphaned.
- ✅ WhatsApp verification (`index.html`, `en/index.html`, and sample service pages): Data recovery CTA number `966507322542` is present and no conflicting number was found for data recovery CTAs.

---

## Phase 5: UI/UX & Structural Consistency

*Status: Complete — 2026-05-05*

- ✅ `index.html`, `en/index.html`, `services/*.html`, `en/services/*.html`: No `nav-dropdown` occurrences found (check 5.1 passed).
- ✅ `assets/js/main.js` (line 317): `initializeServiceDropdown()` call is commented out; no active invocation detected (check 5.2 passed).
- ✅ `index.html` (line 638) and `en/index.html` (line 647): Data Recovery `.service-details` contains `<a href>` links (check 5.3 passed).
- ✅ `index.html` (line 1006), `services/hdd-data-recovery.html` (line 344), `en/services/hdd-data-recovery.html` (line 349): Footer version is `v1.2.4` in all sampled pages (check 5.4 passed).
- ✅ `services/hdd-data-recovery.html` (line 6) and `en/services/hdd-data-recovery.html` (line 6): `<base href>` values are correct (`../` and `../../`) (check 5.5 passed).
- 🟢 `en/index.html` (line 960): Footer markup uses smart quotes in `class=”footer”` (and related attributes), causing minor structural inconsistency versus standard quotes in `index.html` and `services/hdd-data-recovery.html` (check 5.6).

---

## Phase 6: Bilingual Integrity

*Status: Complete — 2026-05-05*

- ✅ `lang/ar.json` and `lang/en.json` (full file keyset): Translation keys set and total count are identical across both files.
- ✅ `services/*.html` and `en/services/*.html` (12 files each): AR/EN service page pairing exists with matching filenames.
- ✅ `about-lab.html` ↔ `en/about-lab.html`, `privacy-policy.html` ↔ `en/privacy-policy.html`: Required root AR/EN page pairs exist.
- ✅ `services/flash-sd-data-recovery.html` and `en/services/flash-sd-data-recovery.html`: No visible-content mentions found for `PC-3000 Flash`, `Monolith/monolith`, `Chip-Off/chip-off/chipoff`, or `NAND/NAND chip`.
- ✅ `index.html` (line 2), `en/index.html` (line 2), `services/hdd-data-recovery.html` (line 2), `en/services/hdd-data-recovery.html` (line 2): `<html lang>`/`dir` values are correct for AR/EN.
- ✅ `en/services/hdd-data-recovery.html` (line 185): nav.services href is `en/#services` as required.

---

## Phase 7: 404 & Error Handling

*Status: Complete — 2026-05-05*

- ✅ `404.html` (line 1): 404 page exists at site root.
- ✅ `404.html` (line 5): `meta robots` includes `noindex, nofollow`.
- ✅ `404.html` (line 7): Canonical link is present (`https://alfareslab.com/404.html`).
- ✅ `_redirects` (root): File is not present, and no catch-all rule `/* /index.html 200` was found.
- ✅ `_headers` (lines 1-7): Security headers are present; no rule conflicts with 404 handling.

---

## Phase 8: Security Check

*Status: Complete — 2026-05-05*

- 🟢 `_headers` (line 6): CSP allows `'unsafe-inline'` in `script-src` and `style-src`; this is functional but weaker than a nonce/hash-based policy.
- 🟢 `index.html` (line 936) and `en/index.html` (line 945): External Google Maps `<iframe>` is missing a `sandbox` attribute.

---

## Phase 9: Final Recommendation

*Status: Complete — 2026-05-05*

### إحصائيات

| التصنيف | العدد |
|---------|-------|
| 🔴 حرج | 3 |
| 🟡 متوسط | 33 |
| 🟢 منخفض | 8 |

### توزيع الأعطال حسب المرحلة

| المرحلة | 🔴 | 🟡 | 🟢 |
|---------|----|----|-----|
| Phase 1: Canonical, Hreflang & Meta | 3 | 30 | 4 |
| Phase 2: Schema.org Validation | 0 | 0 | 0 |
| Phase 3: Sitemap & Robots | 0 | 1 | 1 |
| Phase 4: Internal Links & Assets | 0 | 2 | 0 |
| Phase 5: UI/UX & Structural Consistency | 0 | 0 | 1 |
| Phase 6: Bilingual Integrity | 0 | 0 | 0 |
| Phase 7: 404 & Error Handling | 0 | 0 | 0 |
| Phase 8: Security Check | 0 | 0 | 2 |
| **المجموع** | **3** | **33** | **8** |

### التوصية النهائية

**FIX FIRST ❌**

يوجد 3 أعطال حرجة في `404.html` (hreflang غائب)، وعطل متوسط عالي الأثر في `en/index.html` (روابط الخدمات تشير للنسخة العربية بدلاً من الإنجليزية). الإصلاحات بسيطة وسريعة قبل النشر.

### الأعطال المطلوب إصلاحها قبل النشر

**[1] `404.html` — إضافة hreflang (Phase 1)**
- إضافة `<link rel="alternate" hreflang="ar" href="https://alfareslab.com/404.html">`
- إضافة `<link rel="alternate" hreflang="en" href="https://alfareslab.com/en/404.html">`
- إضافة `<link rel="alternate" hreflang="x-default" href="https://alfareslab.com/404.html">`
- ملاحظة: الصفحة noindex لذا الأثر SEO محدود، لكن الاتساق مع باقي الصفحات يستوجب الإصلاح.

**[2] `en/index.html` lines 648–652 — service-details links (Phase 4)**
- الروابط تشير لـ `services/...` بدلاً من `en/services/...`
- يؤثر مباشرةً على تجربة المستخدم الإنجليزي: النقر على خدمة من الصفحة الرئيسية EN يفتح الصفحة AR

### ما يمكن تأجيله بعد النشر (🟡 أولويات)

1. عناوين وأوصاف meta خارج نطاق الطول — 30 صفحة
2. `footer_temp.html` و`service-page-premium-compare.html` — حذفهما من الجذر
3. `404.html` ناقصة من sitemap.xml

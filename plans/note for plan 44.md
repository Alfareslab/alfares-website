تمام يا م. أحمد، خد البرومبت المُصحَّح والمُحكَم. ده النسخة النهائية اللي تقدر تنسخها وتلصقها للوكيل مباشرة.

---

## 📋 برومبت Plan 44 — النسخة المُصحَّحة النهائية

```text
Read plans/43-content-rollout.md (the Arabic rollout — your blueprint).
Read docs/service-pages-decisions-report.md (authoritative reference).
Read plans/40-en-service-pages-content.md (English content source).
Read sitemap.xml (the authoritative URL source — DO NOT invent slugs).
Inspect the current language-toggle behavior in the site header.

TASK:
Create plans/44-en-content-rollout.md — an execution plan for the 
English content rollout that mirrors Plan 43's structure, methodology, 
phasing, and rigor exactly. Do NOT edit any HTML, sitemap, or 
production file yet. This plan is for review and approval first.

═══════════════════════════════════════════════════════════════════
ARCHITECTURE DECISIONS (already approved — do not propose alternatives)
═══════════════════════════════════════════════════════════════════

1. STRUCTURE: subdirectory model. All English pages live under /en/ 
   at the root.

2. URL PATTERN: /en/<exact-same-path-as-arabic>
   English slugs MUST be identical to their Arabic counterparts. 
   Read sitemap.xml as the authoritative source for slugs — do NOT 
   invent, shorten, or modify them.
   
   Examples derived from current sitemap.xml:
   services/hdd-data-recovery.html              ↔ /en/services/hdd-data-recovery.html
   services/external-hdd-data-recovery.html     ↔ /en/services/external-hdd-data-recovery.html
   services/ssd-nvme-data-recovery.html         ↔ /en/services/ssd-nvme-data-recovery.html
   services/laptop-pc-data-recovery.html        ↔ /en/services/laptop-pc-data-recovery.html
   services/mac-data-recovery.html              ↔ /en/services/mac-data-recovery.html
   services/raid-nas-data-recovery.html         ↔ /en/services/raid-nas-data-recovery.html
   services/flash-sd-data-recovery.html         ↔ /en/services/flash-sd-data-recovery.html
   services/dvr-nvr-data-recovery.html          ↔ /en/services/dvr-nvr-data-recovery.html
   services/ransomware-data-recovery.html       ↔ /en/services/ransomware-data-recovery.html
   services/database-erp-recovery.html          ↔ /en/services/database-erp-recovery.html
   services/data-recovery-makkah.html           ↔ /en/services/data-recovery-makkah.html
   services/data-recovery-saudi-arabia.html     ↔ /en/services/data-recovery-saudi-arabia.html
   about-lab.html                               ↔ /en/about-lab.html
   privacy-policy.html                          ↔ /en/privacy-policy.html

3. HREFLANG: bidirectional, using:
   <link rel="alternate" hreflang="ar" href="https://alfareslab.com/<arabic-path>">
   <link rel="alternate" hreflang="en" href="https://alfareslab.com/en/<english-path>">
   <link rel="alternate" hreflang="x-default" href="https://alfareslab.com/<arabic-path>">
   
   The hreflang tags MUST replace the placeholder comment 
   <!-- hreflang tags will be added in Plan 44 --> on every Arabic 
   page, AND be added to every new English page.

4. CANONICAL: each English page is canonical for itself. The English 
   canonical URL points to /en/... NOT to the Arabic version.

5. SITEMAP: keep ONE sitemap.xml at root containing both Arabic and 
   English URLs, annotated with xhtml:link entries for hreflang. Do 
   not create a separate /en/sitemap.xml.

═══════════════════════════════════════════════════════════════════
PLAN 44 STRUCTURE — must mirror Plan 43 phasing
═══════════════════════════════════════════════════════════════════

Use the same 5-phase structure as Plan 43:

PHASE 1: English basic storage pages (SSD, Flash/SD, Mac)
PHASE 2: English advanced pages (RAID, DVR, Ransomware, Database, 
         External HDD, Laptop/PC — adjust to match Plan 43 grouping; 
         start from Plan 43 grouping then group remainders)
PHASE 3: English geographic pages (Makkah, Saudi Arabia)
PHASE 4: English special pages (About Lab, Privacy Policy)
PHASE 5: Internal linking, hreflang activation on Arabic pages, 
         sitemap.xml update

For each phase, include:
- Same table format as Plan 43 (Exec | Review | Task)
- Pre-Implementation Gates section
- Key Constraints section
- A starter prompt block to begin the phase

═══════════════════════════════════════════════════════════════════
PER-PAGE REQUIREMENTS
═══════════════════════════════════════════════════════════════════

Every English page MUST have:
1. <html lang="en" dir="ltr"> (NOT ar/rtl)
2. Exact English content from plans/40-en-service-pages-content.md 
   (no paraphrasing, no AI rewriting)
3. Self-canonical URL pointing to /en/...
4. Bidirectional hreflang tags (ar + en + x-default)
5. Translated Schema.org properties:
   - inLanguage: "en"
   - Translated name, description, areaServed labels
   - LocalBusiness coordinates, phone, address: IDENTICAL to Arabic 
     (do not translate the address — Jeddah/Al-Sharafiyyah stays as is)
6. Schema set: Service + FAQPage + BreadcrumbList + LocalBusiness 
   (same as Plan 43)
7. All UI strings (nav, footer, buttons, breadcrumbs) translated to 
   English
8. WhatsApp button: same auto-switch logic, same recovery number 
   (+966507322542) for service pages

═══════════════════════════════════════════════════════════════════
PHASE 5 SPECIFICS — sitemap & linking
═══════════════════════════════════════════════════════════════════

Phase 5 must include these tasks:
1. Add all 14 English URLs to sitemap.xml
2. For EACH URL pair (Arabic + English), add xhtml:link annotations:
   <url>
     <loc>https://alfareslab.com/services/hdd-data-recovery.html</loc>
     <xhtml:link rel="alternate" hreflang="ar" href="https://alfareslab.com/services/hdd-data-recovery.html"/>
     <xhtml:link rel="alternate" hreflang="en" href="https://alfareslab.com/en/services/hdd-data-recovery.html"/>
     <xhtml:link rel="alternate" hreflang="x-default" href="https://alfareslab.com/services/hdd-data-recovery.html"/>
     ...
   </url>
3. Replace ALL hreflang placeholder comments on Arabic pages with 
   real hreflang tags.
4. Wire the language-toggle in the header:
   - From any Arabic page X → link to /en/X
   - From any English page /en/X → link to X
   - Use the current language-toggle component, do not redesign it
5. Add internal links in /en/index.html (or equivalent) to the 14 
   English service pages — mirroring index.html structure.
6. Add About Lab + Privacy Policy links in /en/ footer.

═══════════════════════════════════════════════════════════════════
VALIDATION CHECKLIST (must be in Plan 44)
═══════════════════════════════════════════════════════════════════

After execution, verify:
- [ ] All 14 English pages exist at the exact paths listed above
- [ ] Every English page has lang="en" dir="ltr"
- [ ] Every hreflang pair resolves with HTTP 200 (no 404)
- [ ] No mixed-language content within any single page
- [ ] No untranslated Arabic strings in English pages (nav, footer, 
      buttons, breadcrumbs, alt text)
- [ ] All JSON-LD validates on Schema.org Validator
- [ ] sitemap.xml validates with both languages and xhtml:link entries
- [ ] Lighthouse SEO ≥ 95 on a sample English page
- [ ] All Arabic placeholder comments for hreflang have been replaced 
      with real tags
- [ ] Language-toggle works bidirectionally on at least 3 sample pages
- [ ] LocalBusiness Schema present on all 10 English service pages

═══════════════════════════════════════════════════════════════════
OUT OF SCOPE (deferred beyond Plan 44)
═══════════════════════════════════════════════════════════════════

Plan 44 must include an explicit "Out of Scope" section listing:
- Adding new languages beyond English
- Country-specific subdomains or ccTLDs
- A separate /en/sitemap.xml
- Translating blog posts, case studies, or other content not in 
  plan 40
- Server-side language detection or auto-redirect

═══════════════════════════════════════════════════════════════════
DOCUMENTATION UPDATES (required as part of Plan 44 Phase 5)
═══════════════════════════════════════════════════════════════════

- Update project-context.md with bilingual status
- Update project-key.md with new English URL patterns
- Update changelog.md with Plan 44 entry
- Bump version where applicable

═══════════════════════════════════════════════════════════════════
CONSTRAINTS — STRICT
═══════════════════════════════════════════════════════════════════

- DO NOT modify any Arabic page's content, only its <head> for 
  hreflang activation in Phase 5.
- DO NOT rewrite, paraphrase, or "improve" the English content from 
  Plan 40 — copy it verbatim.
- DO NOT invent slugs. If a slug is not in sitemap.xml, ASK before 
  proceeding.
- DO NOT edit HTML, sitemap, or any production file in this task — 
  produce the plan document only.
- DO NOT bundle this plan with Plan 43; they are separate.
- If anything is ambiguous, mark it [محتاج توضيح] in the plan and 
  stop — do not guess.

═══════════════════════════════════════════════════════════════════
DELIVERABLE
═══════════════════════════════════════════════════════════════════

A single file: plans/44-en-content-rollout.md
- Version: 1.0.0
- Date: today
- Same format, sections, and rigor as plans/43-content-rollout.md
- Includes: scope note, 5 phases with tables and prompts, validation 
  checklist, out-of-scope section, documentation requirements

After saving, output a 6-line summary:
1. File created path
2. Total phases defined
3. Total English pages covered
4. Any [محتاج توضيح] flags raised
5. Whether sitemap.xml structure was correctly derived from current file
6. Estimated total effort (in hours, mirroring Plan 43's effort table)
```

---

## 🛡️ ليه البرومبت ده محكم

| الميزة | الفائدة |
|-------|---------|
| **يقرأ sitemap.xml كمصدر السلاجز** | يمنع اختراع slugs غلط |
| **جدول mapping كامل من الـ sitemap الفعلي** | الوكيل عنده مرجع صلب |
| **حل hreflang بـ x-default محدد** | مفيش غموض |
| **يحدد إن Arabic = canonical لنفسها، English = canonical لنفسها** | منع double canonicals |
| **sitemap واحد بـ xhtml:link annotations** | الممارسة الصح لجوجل |
| **استبدال الـ placeholder comments صراحة** | مش هيفتكر يعملها |
| **`[محتاج توضيح] flags`** | مفيش "شغل من دماغه" — يقف ويسأل |
| **6-line summary في الآخر** | تقدر تراجع بسرعة |

---

## ⚠️ نقطة لازم تنتبه لها

البرومبت ده بيطلب من الوكيل **يكتب الخطة بس، مش ينفّذ.** لما تستلم Plan 44، **راجعها بنفسك أو راجعها معايا قبل ما تبدأ التنفيذ**.

السبب: Plan 44 أكبر من Plan 43 (لأنه فيه hreflang activation + sitemap restructuring + language toggle wiring)، فمراجعة الخطة قبل التنفيذ تمنع غلطات هتاخد ساعات لإصلاحها.

ابعتلي الخطة لما تجهز ونراجعها سوا. 🚀
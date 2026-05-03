# 📋 Decisions Report: Service Pages Template
## Al-Fares Computer Repair & Data Recovery Center

> **Purpose:** Unified reference for approved decisions to implement the 14 service pages
> **Builds on:** Execution plan for Phase 1 of the project
> **Date:** 2026-05-03
> **Status:** ✅ Approved and referential

---

## 1️⃣ Background & Context

### Previous Attempt (Plan 41)
- A Template with **7 sections** was built with a "Premium" style inspired by an external design.
- The result was unsatisfactory because the reference CSS was standalone, and when transferred to the current site, **7 conflicts** occurred with global CSS rules (container width, H1 size, spacing, etc.).
- Proposed solutions (Scoped CSS / @layer / Iframe / Modals) were all **treating symptoms, not the root cause**.

### The Real Root Cause
The problem was not in the site architecture — it was in **trying to apply a complex design to a simple structure**. Instead of modifying the structure to accommodate complexity, it was decided to **simplify the design itself** to be compatible with the current structure.

### The New Approach
A unified simple template that serves SEO first, relies on carefully written content, and requires no architectural CSS modifications to the site.

---

## 2️⃣ Governing Principles

| # | Principle | Description |
|---|-----------|-------------|
| 1 | **SEO is top priority** | Each page has an independent URL, one H1, FAQ Schema, rich content |
| 2 | **Coordinated not flashy** | Respectable appearance that builds trust, no animations or complex designs |
| 3 | **Consistency across pages** | Same structure across all 14 pages, only the content changes |
| 4 | **Intentional simplicity** | No cards, no timeline, no colored boxes. Flowing text with proper headings |
| 5 | **Respect site structure** | Use current site CSS with minimal additions |
| 6 | **Mobile friendly** | Content naturally extends on mobile (3-7 screens scroll is acceptable) |

---

## 3️⃣ Unified Template for Service Pages

### General Structure

```
┌─────────────────────────────────────────┐
│  HERO                                    │
│  ├── H1 (service title)                  │
│  ├── Opening paragraph                   │
│  └── CTA button (WhatsApp)               │
├─────────────────────────────────────────┤
│  H2: Signs / Symptoms / Causes           │
│  └── Symptoms list (flowing text)        │
├─────────────────────────────────────────┤
│  H2: How we handle / Al-Fares method     │
│  └── Lab steps (flowing text)            │
├─────────────────────────────────────────┤
│  H2: ⚠️ Important Warning (optional)     │
│  └── Emergency tips (on pages that have) │
├─────────────────────────────────────────┤
│  H2: FAQ                                 │
│  └── FAQ Accordion + JSON-LD Schema      │
├─────────────────────────────────────────┤
│  Final CTA                               │
│  ├── Motivational statement              │
│  ├── WhatsApp button                     │
│  ├── Location                            │
│  └── Datacodex links                     │
└─────────────────────────────────────────┘

[Fixed WhatsApp button in corner throughout page]
```

### Heading Writing Rules

- ✅ **Only one H1** per page (in the Hero)
- ✅ **H2 for each main section** (4-5 H2 per page)
- ✅ **H3 for sub-elements** within sections
- ✅ **Heading wording is kept as-is from original content** — they are researched for different search keywords, natural variation benefits SEO

### Basic HTML Rules

| Element | Rule |
|---------|------|
| Doctype | HTML5 |
| Lang | `lang="ar" dir="rtl"` for Arabic, `lang="en" dir="ltr"` for English |
| Meta tags | Title + Description exist in content file |
| Open Graph | Must be added to each page |
| Schema.org | `Service` + `FAQPage` + `LocalBusiness` |
| Canonical URL | For each page |
| Hreflang | For linking between Arabic and English versions |

---

## 4️⃣ Classification of the 14 Pages

When analyzing actual Headings in `38-ar-service-pages-content.md`, it became clear that pages are **not all the same type**. They split into 4 categories:

### 🔧 Category A: Actual Service Pages (10 pages)

Apply the full template without modification.

| # | Page | Existing File |
|---|------|---------------|
| 1 | Internal HDD data recovery | `services/hdd-data-recovery.html` |
| 2 | External HDD data recovery | `services/external-hdd-data-recovery.html` |
| 3 | SSD & NVMe data recovery | `services/ssd-nvme-data-recovery.html` |
| 4 | RAID & NAS data recovery | `services/raid-nas-data-recovery.html` |
| 5 | Flash drives & memory cards recovery | `services/flash-sd-data-recovery.html` |
| 6 | DVR/NVR surveillance cameras recovery | `services/dvr-nvr-data-recovery.html` |
| 7 | Laptop & desktop data recovery | `services/laptop-pc-data-recovery.html` |
| 8 | Mac data recovery | `services/mac-data-recovery.html` |
| 9 | Ransomware data recovery | `services/ransomware-data-recovery.html` |
| 10 | Server database recovery | `services/database-erp-recovery.html` |

### 📍 Category B: Geographic Pages (2 pages)

Apply template with "How we handle" replaced by "How we serve your area".

| # | Page | Existing File |
|---|------|---------------|
| 11 | Data recovery in Makkah | `services/data-recovery-makkah.html` |
| 12 | Data recovery in Saudi Arabia | `services/data-recovery-saudi-arabia.html` |

### 🏢 Category C: Overview Page (1 page)

Simplified version of the template focusing on tools and technologies.

| # | Page | Existing File |
|---|------|---------------|
| 13 | Complete data recovery lab | `about-lab.html` (root) |

### 📜 Category D: Policy Page (1 page)

Calm and reassuring template. **No strong CTAs**. Simple hero + flowing text.

| # | Page | Existing File |
|---|------|---------------|
| 14 | Privacy and confidentiality policy | `privacy-policy.html` (root) |

---

## 5️⃣ URL Decision

### Decision: Keep `.html` Extensions ✅

| Criteria | `.html` | Clean URLs |
|----------|---------|------------|
| **Google indexing** | ✅ Equal — no difference | ✅ Equal |
| **Cloudflare Pages** | ✅ Works instantly — zero config | ⚠️ Needs `_redirects` file or settings |
| **Simplicity** | ✅ Create file and done | ⚠️ Extra step needed |

### Reasoning
- The site is **static with no server-side routing** — `.html` files work directly
- Google has confirmed **no preference** between `.html` and clean URLs
- **Nothing is published yet** — the live sitemap only has the homepage
- Clean URLs add complexity (Cloudflare `_redirects` config) with zero SEO benefit
- All existing files already have `.html` extension — no renaming needed

### Current Published Sitemap (Production)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://alfareslab.com/</loc>
    <lastmod>2026-04-27</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

> **Note:** The local `sitemap.xml` in the repo has been pre-updated with 14 URLs as part of Plan 37 Phase 7, but this has NOT been deployed yet.

---

## 6️⃣ WhatsApp Button — Auto-Switch Mechanism

### Logic
- Fixed WhatsApp button in the bottom-left corner (same current position).
- Same visual appearance across all site pages.
- **Number switches automatically** based on page type.

### Numbers
| Section | Number |
|---------|--------|
| Rest of site (homepage, about, etc.) | Current main number |
| **10 service pages** | `+966507322542` |
| Geographic pages | `+966507322542` |
| Lab page | `+966507322542` |
| Privacy policy page | Main number (not a service page) |

### Proposed Implementation
- Single JavaScript variable determines number based on page path.
- Or a body attribute (`data-contact="recovery"`) read by the script.
- **No button duplication in HTML** — one button with dynamic behavior.

---

## 7️⃣ What to Avoid (Anti-Patterns)

Based on lessons learned from Plan 41:

| # | Forbidden | Reason |
|---|-----------|--------|
| 1 | ❌ Templates with 7+ sections | Complexity without value, conflicts with current CSS |
| 2 | ❌ Visual cards for each section | Unnecessary, complicates structure, conflicts with layout |
| 3 | ❌ Horizontal timeline for steps | Visually complex, difficult on mobile |
| 4 | ❌ Warning boxes with strong colors | Visual distraction; a simple ⚠️ warning suffices |
| 5 | ❌ Hero with large image | Visitor is in emergency mode, needs information not showcase |
| 6 | ❌ Different design per page | Breaks consistency, wastes time without benefit |
| 7 | ❌ Modals/Popups for pages | SEO disaster, breaks mobile experience |
| 8 | ❌ Repeating WhatsApp button 3 times in text | Fixed button eliminates the need |
| 9 | ❌ Modifying global site CSS | Additions should be scoped or in a small separate file |
| 10 | ❌ Ignoring FAQ Schema | Golden SEO opportunity, Rich Snippets in Google |

---

## 8️⃣ Proposed Execution Plan

### Phase 0: Preparation (1 day)
- [ ] Review and approve this report.
- [ ] Confirm Arabic and English content is complete.
- [ ] Confirm availability of images/icons for lab and tools (if needed).

### Phase 1: Build Template (1-2 days)
- [ ] Create `service-page-template.html` as base template.
- [ ] Create small CSS file `service-pages.css` containing only:
  - Long content formatting (line-height, spacing between sections)
  - FAQ Accordion formatting
  - Simple service Hero adjustments
- [ ] Implement auto-switch mechanism for WhatsApp button.
- [ ] Create unified snippet for FAQ Schema.
- [ ] Create unified snippet for final CTA.

### Phase 2: Pilot on One Page (1 day)
- [ ] Apply template to "Internal HDD data recovery" page (Pilot).
- [ ] Test on Desktop + Mobile + Tablet.
- [ ] Test Dark/Light Mode.
- [ ] Test RTL.
- [ ] Check with Lighthouse (target: SEO 95+, Performance 90+).
- [ ] Check with Schema.org Validator.
- [ ] **Human review and approval before rollout.**

### Phase 3: Rollout to Category A (3-4 days)
- [ ] Apply template to remaining 9 service pages.
- [ ] For each page: copy content from file 38 + adjust Schema + test.

### Phase 4: Categories B + C + D (1-2 days)
- [ ] Two geographic pages (Makkah, Saudi Arabia).
- [ ] Lab page (Overview).
- [ ] Privacy policy page (calm template).

### Phase 5: Internal Linking + Final Testing (1 day)
- [ ] Add internal links between related service pages.
- [ ] Add pages to sitemap.xml.
- [ ] Confirm Hreflang between versions.
- [ ] Comprehensive browser testing.
- [ ] Deploy to production.

### Estimated Total: **8-11 working days**

---

## 9️⃣ Acceptance Criteria

Each page is not considered complete unless it achieves all of the following:

### SEO Criteria
- [ ] Exactly one H1, containing primary keyword
- [ ] Meta Title and Description present and appropriate
- [ ] Canonical URL defined
- [ ] FAQ Schema valid (if page has FAQ)
- [ ] Service Schema present
- [ ] Hreflang linked to other version
- [ ] Images (if any) have descriptive alt text

### Performance Criteria
- [ ] Lighthouse SEO ≥ 95
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 95
- [ ] No Console errors
- [ ] Page size < 500KB (without images)

### Design Criteria
- [ ] Visually consistent with other pages
- [ ] Works correctly on Desktop + Mobile + Tablet
- [ ] Works in Dark + Light Mode
- [ ] WhatsApp button shows correct number (`+966507322542`)
- [ ] FAQ Accordion opens and closes smoothly
- [ ] No CSS conflicts with rest of site

### Content Criteria
- [ ] Content transferred verbatim from `38-ar-service-pages-content.md`
- [ ] No spelling or grammar errors
- [ ] External links work (WhatsApp, Datacodex, etc.)

---

## 🔟 References

| File | Location | Purpose |
|------|----------|---------|
| Arabic content | `plans/38-ar-service-pages-content.md` | Primary text source |
| English content | `plans/40-en-service-pages-content.md` | English version |
| Current site CSS | `assets/css/base.css` + `layout.css` + `components.css` | Base formatting structure |
| Plan 37 | `plans/37-alfares-service-pages.md` | Parent project plan |
| Plan 41 (practically cancelled) | `plans/41-service-page-rebuild-pilot.md` | Historical reference only |

---

## 1️⃣1️⃣ Notes for Implementer

### If you are an AI agent
- ✋ **Do not invent new sections** not in the template.
- ✋ **Do not change Heading wording** from the content file.
- ✋ **Do not add visual decorations** (gradients, heavy shadows, animations) — simplicity is intentional.
- ✋ **Do not use new frameworks** (Tailwind, Bootstrap) — rely on current CSS.
- ✅ **Ask before modifying** any global CSS file (base/layout/components).
- ✅ **Build one page and submit for review** before rollout.

### If you are a human developer
- Start from the base template and replicate.
- Use find-and-replace for recurring sections (final CTA, Schema, etc.).
- Keep a backup before any modifications to global CSS files.

---

## 📌 Summary in 5 Lines

1. **Template:** 4 core sections (Hero + symptoms + methodology + FAQ) + optional warning section + final CTA.
2. **Content:** Ready and researched in `38-ar-service-pages-content.md`, wording kept as-is.
3. **Classification:** 14 pages across 4 categories (10 service + 2 geographic + 1 overview + 1 policy).
4. **WhatsApp:** Fixed button with auto number switch → `+966507322542` for services.
5. **Golden principle:** Intentional simplicity is professionalism. No complexity without value.

---

**This report is approved as the sole reference for implementing service pages.**
**In case of any conflict with previous reports, this report prevails.**

# 🗺️ Plan 42: Service Page Templates Build
> **Version:** 1.0.0
> **Date:** 2026-05-03
> **Methodology:** Multi-Model Development
> **Reference:** `docs/service-pages-decisions-report.md`
> **Scope:** Build 3 templates + Pilot test on 1 page only (NO content rollout)

---

## 🎯 Goal

Build the 3 service page templates that will serve as the foundation for all 14 service pages. Then test 1 template with real content as a Pilot. Content rollout to remaining pages is a **separate plan**.

### Templates to Build

| # | Template | Serves | Pages |
|---|----------|--------|-------|
| 1 | **Service Template** | Category A (services) + Category B (geographic) | 12 pages |
| 2 | **Lab Overview Template** | Category C (about-lab) | 1 page |
| 3 | **Policy Template** | Category D (privacy-policy) | 1 page |

### Design Principle

> "Intentional simplicity is professionalism. No complexity without value."

- Flowing text with proper headings — no cards, no timeline, no colored boxes
- Use current site CSS with minimal additions
- SEO first: H1 + FAQ Schema + Service Schema + Canonical

---

## 📅 Execution Phases

---

### **Phase 1: CSS Foundation 🎨**
> **Model:** `Gemini Pro` 🟠
> **Goal:** Create the minimal CSS file for service pages
> **Depends on:** None

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[ ]` | Create `assets/css/service-pages.css` with scoped styles under `.service-page` |
| `[x]` | `[ ]` | Service page content typography (line-height, paragraph spacing, heading margins) |
| `[x]` | `[ ]` | FAQ Accordion styles (`<details>/<summary>` based, smooth open/close) |
| `[x]` | `[ ]` | Service Hero section minimal styling (breadcrumb, H1, intro paragraph) |
| `[x]` | `[ ]` | Final CTA section styling |
| `[x]` | `[ ]` | Dark mode compatibility (`[data-theme="dark"]`) |
| `[x]` | `[ ]` | RTL compatibility (`html[dir="rtl"]`) |
| `[x]` | `[ ]` | Verify zero CSS conflicts with homepage (open homepage, confirm nothing changed) |

**🚪 Pre-Implementation Gates:**
- [x] Solution uses minimum number of files (1 CSS file)
- [x] No "might need later" additions
- [x] Every CSS rule has a clear reason

**Key Constraints:**
- File must be **< 150 lines** — if it's longer, something is wrong
- All rules scoped under `.service-page` to prevent global leaks
- Use existing CSS variables (`var(--color-*)`, `var(--spacing-*)`) — do NOT create new ones
- NO gradients, heavy shadows, or animations

**🔄 Phase Start Prompt:**
```
Read docs/service-pages-decisions-report.md (the decisions reference).
Read plans/42-service-page-templates.md (this plan — Phase 1).
Read assets/css/base.css (understand existing variables and globals).

Task: Create assets/css/service-pages.css

Rules:
1. All rules scoped under .service-page
2. File must be < 150 lines
3. Use existing CSS variables from base.css
4. Styles needed: content typography, FAQ accordion (details/summary), 
   hero breadcrumb, final CTA section, dark mode, RTL
5. NO cards, NO colored boxes, NO animations, NO gradients
6. Test: open homepage, confirm zero visual changes
```

---

### **Phase 2: Service Template (Template 1/3) 📄**
> **Model:** `Gemini Pro` 🟠
> **Goal:** Build the main service page template HTML
> **Depends on:** Phase 1 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[ ]` | Rebuild `services/service-page-template.html` following the decisions report structure |
| `[x]` | `[ ]` | HTML structure: Hero (H1 + breadcrumb + intro + CTA) |
| `[x]` | `[ ]` | HTML structure: Symptoms/Signs section (H2 + flowing text) |
| `[x]` | `[ ]` | HTML structure: Methodology section (H2 + flowing text) |
| `[x]` | `[ ]` | HTML structure: Warning section (H2 + text, optional — marked with comment) |
| `[x]` | `[ ]` | HTML structure: FAQ section (H2 + `<details>` accordion) |
| `[x]` | `[ ]` | HTML structure: Final CTA (motivational text + WhatsApp + location) |
| `[x]` | `[ ]` | Add `class="service-page"` on `<main>` |
| `[x]` | `[ ]` | Link `service-pages.css` in `<head>` |
| `[x]` | `[ ]` | Schema.org JSON-LD: Service + FAQPage + BreadcrumbList (with placeholder values) |
| `[x]` | `[ ]` | Meta tags: title, description, canonical, OG, Twitter (with placeholder values) |
| `[x]` | `[ ]` | `robots: noindex` on template file itself |
| `[x]` | `[ ]` | Geographic variant: add comment block showing what changes for Category B |

**Key Constraints:**
- Template uses `.section` and `.container` classes from existing CSS
- Content is placeholder text (English) — NOT real service content
- NO `data-i18n` attributes — hardcoded content per page
- NO cards (`<article class="card">`) — flowing text only
- NO `grid-2` layouts — single column content
- Header/Footer structure identical to existing pages

**🔄 Phase Start Prompt:**
```
Read docs/service-pages-decisions-report.md (the decisions reference).
Read plans/42-service-page-templates.md (this plan — Phase 2).
Read assets/css/service-pages.css (CSS from Phase 1).
Read services/service-page-template.html (current template to rebuild).

Task: Rebuild services/service-page-template.html

Rules:
1. Follow the template structure from the decisions report (Section 3)
2. Add class="service-page" on <main>
3. Link service-pages.css after components.css
4. Single column flowing text — NO cards, NO grids
5. FAQ uses <details>/<summary> elements
6. Schema.org: Service + FAQPage + BreadcrumbList with placeholders
7. Keep robots noindex on template file
8. Add comment block for Category B geographic variant
9. Header/Footer: copy from existing pages exactly
```

---

### **Phase 3: Lab Overview Template (Template 2/3) 🏢**
> **Model:** `Gemini Flash` 🟢
> **Goal:** Build the lab overview page template
> **Depends on:** Phase 1 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[ ]` | Create `about-lab-template.html` (or modify existing `about-lab.html`) |
| `[x]` | `[ ]` | HTML structure: Hero (H1 + intro — NO strong CTA) |
| `[x]` | `[ ]` | HTML structure: Lab capabilities section (H2 + flowing text about tools) |
| `[x]` | `[ ]` | HTML structure: Equipment/Technology section (H2 + flowing text) |
| `[x]` | `[ ]` | HTML structure: Final CTA (lighter tone than service pages) |
| `[x]` | `[ ]` | Schema.org: LocalBusiness + BreadcrumbList |
| `[x]` | `[ ]` | Meta tags with placeholders |
| `[x]` | `[ ]` | Uses same `service-pages.css` with `.service-page` class |

**Key Constraints:**
- Simpler than Service Template — fewer sections
- Focus on tools, technology, and lab capabilities
- CTA is informational, not urgent
- NO FAQ section (unless content file has one)

**🔄 Phase Start Prompt:**
```
Read docs/service-pages-decisions-report.md (Section 4 — Category C).
Read plans/42-service-page-templates.md (this plan — Phase 3).
Read about-lab.html (current page to understand structure).

Task: Build lab overview template based on decisions report Category C.

Rules:
1. Simpler than service template — fewer sections
2. Focus on tools, technology, capabilities
3. CTA is informational, not urgent (no "emergency" language)
4. Same CSS file (service-pages.css), same .service-page class
5. Single column flowing text
```

---

### **Phase 4: Policy Template (Template 3/3) 📜**
> **Model:** `Gemini Flash` 🟢
> **Goal:** Build the privacy policy page template
> **Depends on:** Phase 1 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[ ]` | Create `privacy-policy-template.html` (or modify existing `privacy-policy.html`) |
| `[x]` | `[ ]` | HTML structure: Simple Hero (H1 + intro — calm tone) |
| `[x]` | `[ ]` | HTML structure: Policy content sections (H2 + flowing text) |
| `[x]` | `[ ]` | NO CTA buttons — this is a trust/transparency page |
| `[x]` | `[ ]` | Schema.org: WebPage + BreadcrumbList only (no Service schema) |
| `[x]` | `[ ]` | Meta tags with placeholders |
| `[x]` | `[ ]` | Uses same `service-pages.css` with `.service-page` class |

**Key Constraints:**
- Calm, reassuring design — NO urgency, NO CTAs
- Pure text content with proper headings
- NO FAQ accordion
- NO WhatsApp button number switch (uses default site number)

**🔄 Phase Start Prompt:**
```
Read docs/service-pages-decisions-report.md (Section 4 — Category D).
Read plans/42-service-page-templates.md (this plan — Phase 4).
Read privacy-policy.html (current page to understand structure).

Task: Build policy page template based on decisions report Category D.

Rules:
1. Calm, reassuring design — NO urgency, NO CTAs
2. Pure flowing text with H2 headings
3. NO FAQ, NO WhatsApp number switch
4. Same CSS file (service-pages.css), same .service-page class
5. Schema: WebPage + BreadcrumbList only
```

---

### **Phase 5: WhatsApp Auto-Switch 📱**
> **Model:** `Gemini Flash` 🟢
> **Goal:** Implement WhatsApp number auto-switching logic
> **Depends on:** Phase 2 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[ ]` | Add number switching logic to `assets/js/service-page.js` (or `main.js`) |
| `[x]` | `[ ]` | Logic: if page path starts with `/services/` → use `+966507322542` |
| `[x]` | `[ ]` | Logic: `privacy-policy.html` and homepage → keep default number |
| `[x]` | `[ ]` | Logic: `about-lab.html` → use `+966507322542` |
| `[x]` | `[ ]` | Test: WhatsApp button href updates correctly on each template |

**Key Constraints:**
- Single point of logic — NO hardcoded numbers in HTML templates
- Must work with existing WhatsApp float button (SVG version in footer area)
- Graceful fallback: if script fails, default number still works

**🔄 Phase Start Prompt:**
```
Read docs/service-pages-decisions-report.md (Section 6 — WhatsApp).
Read plans/42-service-page-templates.md (this plan — Phase 5).
Read assets/js/main.js (understand current WhatsApp button setup).

Task: Add WhatsApp number auto-switching.

Rules:
1. If path contains /services/ → +966507322542
2. If path is about-lab.html → +966507322542
3. Everything else → keep current default number
4. Single logic point, no hardcoded numbers in templates
5. Graceful fallback if script fails
```

---

### **Phase 6: Pilot Test — HDD Recovery Page 🧪**
> **Model:** `Gemini Pro` 🟠
> **Goal:** Apply Service Template to one real page with real content
> **Depends on:** Phase 2 ✅ + Phase 5 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[ ]` | Copy Service Template → `services/hdd-data-recovery.html` |
| `[x]` | `[ ]` | Insert real Arabic content from `plans/38-ar-service-pages-content.md` (HDD section) |
| `[x]` | `[ ]` | Replace all placeholder Schema.org values with real ones |
| `[x]` | `[ ]` | Replace all placeholder meta tags with real ones |
| `[x]` | `[ ]` | Set canonical URL to `https://alfareslab.com/services/hdd-data-recovery.html` |
| `[ ]` | `[ ]` | Test: Desktop view |
| `[ ]` | `[ ]` | Test: Mobile view (375px) |
| `[ ]` | `[ ]` | Test: Dark mode |
| `[ ]` | `[ ]` | Test: RTL ↔ LTR toggle |
| `[ ]` | `[ ]` | Test: WhatsApp button shows `+966507322542` |
| `[ ]` | `[ ]` | Test: FAQ accordion opens/closes |
| `[ ]` | `[ ]` | Test: Lighthouse SEO ≥ 95 |
| `[ ]` | `[ ]` | Test: Lighthouse Performance ≥ 90 |
| `[ ]` | `[ ]` | Test: Schema.org Validator — no errors |
| `[ ]` | `[ ]` | Test: No CSS conflicts with homepage |
| `[ ]` | `[ ]` | **🛑 STOP — Submit for human review before any rollout** |

**🔄 Phase Start Prompt:**
```
Read docs/service-pages-decisions-report.md (acceptance criteria — Section 9).
Read plans/42-service-page-templates.md (this plan — Phase 6).
Read services/service-page-template.html (the template from Phase 2).
Read plans/38-ar-service-pages-content.md (find HDD internal section for content).

Task: Create pilot page services/hdd-data-recovery.html.

Rules:
1. Copy template, insert real Arabic HDD content
2. Replace ALL placeholders (Schema, meta, canonical, breadcrumb)
3. Test everything: desktop, mobile, dark mode, RTL, lighthouse, schema
4. STOP after testing — submit for human review
5. Do NOT touch any other service page files
```

---

## 📊 Models & Phases Summary

| Phase | Task | Model | Effort |
|-------|------|-------|--------|
| 1 | CSS Foundation | 🟠 Gemini Pro | 30 min |
| 2 | Service Template | 🟠 Gemini Pro | 1 hour |
| 3 | Lab Overview Template | 🟢 Gemini Flash | 30 min |
| 4 | Policy Template | 🟢 Gemini Flash | 30 min |
| 5 | WhatsApp Auto-Switch | 🟢 Gemini Flash | 20 min |
| 6 | Pilot Test (HDD page) | 🟠 Gemini Pro | 1 hour |
| **Total** | | | **~4 hours** |

---

## ⚠️ Out of Scope (Separate Plan)

| Item | Why |
|------|-----|
| Content rollout to remaining 13 pages | Separate Plan 43 after Pilot approval |
| Sitemap.xml updates | After all pages are final |
| Internal linking between service pages | After all pages are live |
| English versions of service pages | After Arabic is complete |
| Hreflang implementation | After English versions exist |

---

## 📚 References

| File | Purpose |
|------|---------|
| `docs/service-pages-decisions-report.md` | Decisions reference (prevails over all) |
| `plans/38-ar-service-pages-content.md` | Arabic content source |
| `assets/css/base.css` | Existing CSS variables |
| `services/service-page-template.html` | Current template (to be rebuilt) |
| `plans/41-service-page-rebuild-pilot.md` | Previous attempt (cancelled — historical only) |

# 🗺️ Service Page Rebuild — Pilot (Flash/SD)
> **Version:** 1.1.0
> **Date:** 2026-05-02
> **Methodology:** Multi-Model Development

---

## 🎯 Overall Goal

Rebuild `services/flash-sd-data-recovery.html` with full content from Plan 38 (AR) + Plan 40 (EN).
This pilot is the gold standard for all remaining 13 pages.

---

## 📅 Execution Phases

---

### **Phase 1: CSS Enhancement ✅**
> **Model:** `Claude` 🔴
> **Goal:** Add service page CSS classes to `components.css`
> **Depends on:** Nothing

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | Add `.service-breadcrumb` |
| `[x]` | `[x]` | Add `.service-page-intro` |
| `[x]` | `[x]` | Add `.service-methodology` + `.service-methodology-step` |
| `[x]` | `[x]` | Add `.service-highlight-box` + `.warning` variant |
| `[x]` | `[x]` | Add `.service-message-card` |
| `[x]` | `[x]` | Add `.service-faq` accordion |
| `[x]` | `[x]` | Add `.service-cta-block` + `.service-cta-links` |
| `[x]` | `[x]` | Add `.service-reference-card` |
| `[x]` | `[x]` | Dark mode + RTL support for all classes |

**Result:** All 8 component groups added to `assets/css/components.css` ✅

---

### **Phase 2: HTML Content Rebuild 🏗️**
> **Model:** `Claude` 🔴
> **Goal:** Replace skeleton HTML with full Plan 38 + Plan 40 content
> **Depends on:** Phase 1 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | Write Arabic `localized-content` block (Plan 38 lines 263-307) |
| `[x]` | `[x]` | Write English `localized-content` block (Plan 40 lines 278-328) |
| `[x]` | `[x]` | Update Schema JSON-LD FAQ with 4 specialized questions |
| `[x]` | `[x]` | Keep `<head>`, `<header>`, `<footer>`, scripts intact |

**HTML Section Order (both languages):**
```
1. service-hero      → breadcrumb + service-page-intro + WhatsApp btn
2. symptoms          → grid-2, service-symptoms-grid (4 items)
3. methodology       → service-methodology (numbered steps)
4. monolith          → service-highlight-box (Monolith + Spider Board)
5. photographers     → service-message-card
6. faq-section       → service-faq (4 specialized questions)
7. reference         → service-reference-card (Datacodex link)
8. cta               → service-cta-block (WA + location + website + blog)
```

**🔄 Phase 2 Start Prompt:**
```
Read plans/41-service-page-rebuild-pilot.md.
Read plans/38-ar-service-pages-content.md lines 263-307 (Arabic content).
Read plans/40-en-service-pages-content.md lines 278-328 (English content).
Read services/flash-sd-data-recovery.html (current file).

Overwrite services/flash-sd-data-recovery.html:
- Keep <head> (update only Schema FAQ + meta description)
- Keep <header> and <footer> exactly
- Keep script tags exactly
- Replace ONLY the <main> body content
- Use the HTML Section Order from the plan
- Use new CSS classes from Phase 1
- Content must come EXACTLY from Plan 38 and Plan 40
- Schema FAQ: use 4 specialized questions from Plan 38
```

**Result:** HTML `services/flash-sd-data-recovery.html` fully rebuilt with Arabic and English content, new components, and updated Schema FAQ ✅

---

### **Phase 3: QA ✨**
> **Model:** `Claude` 🔴
> **Goal:** Verify page renders correctly, fix bugs
> **Depends on:** Phase 2 ✅

| Exec | Review | Task |
| :---: | :---: | :--- |
| `[x]` | `[x]` | Start server: `cmd /c python -m http.server 8000` |
| `[x]` | `[x]` | Open browser at `flash-sd-data-recovery.html` |
| `[x]` | `[x]` | Verify Arabic content complete |
| `[x]` | `[x]` | Verify EN toggle works |
| `[x]` | `[x]` | Verify dark mode |
| `[x]` | `[x]` | Verify mobile 375px |
| `[x]` | `[x]` | Fix any bugs found |

**🔄 Phase 3 Start Prompt:**
```
Read plans/41-service-page-rebuild-pilot.md Phase 3.
Start local server and open the flash-sd page.
Check: Arabic content, EN toggle, dark mode, mobile 375px.
Fix any CSS or content issues.
```

**Result:** Verified successfully on browser subagent. Dark mode, language toggle, and responsive mobile layout all work perfectly ✅

---

## 📊 Model Summary

| Phase | Name | Model | Status |
|-------|------|-------|--------|
| 1 | CSS Enhancement | Claude 🔴 | ✅ Done |
| 2 | HTML Content Rebuild | Claude 🔴 | ✅ Done |
| 3 | QA & Polish | Claude 🔴 | ✅ Done |

# Plan 46: Bilingual Routing and Content Reconciliation
> **Version:** 1.0.0
> **Date:** 2026-05-03
> **Status:** Draft - pending developer approval
> **Type:** Fix + reconciliation plan
> **Source Audit:** `plans/45-language-navigation-bug-audit.md`

---

## Goal

Fix the critical bilingual site breakage first, then reconcile Arabic and English service page URLs, content, sitemap, canonical, hreflang, and deprecated files safely.

This plan does not treat Plan 43 or Plan 44 as failed work. It treats the current state as a post-rollout reconciliation problem: the Arabic rollout, English rollout, URL decisions, and language navigation need to be aligned into one stable final structure.

---

## Authoritative References

- `docs/service-pages-decisions-report.md` - final approved URL names and page categories.
- `plans/38-ar-service-pages-content.md` - final Arabic content source.
- `plans/40-en-service-pages-content.md` - final English content source.
- `plans/43-content-rollout.md` - Arabic rollout historical record.
- `plans/44-en-content-rollout.md` - English rollout historical record.
- `plans/45-language-navigation-bug-audit.md` - current bug and reconciliation audit.
- `services/hdd-data-recovery.html` - latest Arabic reference implementation.
- `en/services/hdd-data-recovery.html` - latest English reference implementation.

---

## Requirements

- Preserve completed historical records in Plans 43 and 44.
- Do not delete deprecated files until the developer explicitly approves deletion after the inventory phase.
- Keep approved final URLs stable; repair approved pages in place instead of replacing their slugs.
- Use exact Arabic content from Plan 38 and exact English content from Plan 40. No rewriting, paraphrasing, or invented copy.
- Fix critical language and navigation breakage before judging service page content quality.
- Do not modify CSS unless a verified navigation bug cannot be fixed safely in HTML/JS.
- Update documentation only after implementation phases are completed and verified.

---

## Phase 1: Critical Routing and Navigation Fixes

- [ ] [🤖] Inspect `assets/js/main.js`, `index.html`, `en/index.html`, Arabic service pages, and English service pages to confirm the exact language-toggle failure path.
- [ ] [🤖] Fix global language toggle logic so the current language is derived from the current URL path, with `localStorage` used only as a preference hint.
- [ ] [🤖] Prevent nested `/en/en/` paths on homepage, service pages, and special pages.
- [ ] [🤖] Ensure Arabic pages switch to the correct `/en/` counterpart.
- [ ] [🤖] Ensure English pages switch back to the correct Arabic counterpart.
- [ ] [🤖] Fix the Services dropdown behavior so it works consistently on homepage and internal pages.
- [ ] [🤖] Verify the language toggle on at least these samples:
  - `index.html`
  - `services/hdd-data-recovery.html`
  - `en/services/hdd-data-recovery.html`
  - `services/external-hdd-data-recovery.html`
  - `en/services/external-hdd-data-recovery.html`
  - `about-lab.html`
  - `en/about-lab.html`
- [ ] [🤖] Confirm there are no console errors from the routing/navigation changes.

### Phase 1 Acceptance Criteria

- No generated URL contains `/en/en/`.
- Homepage AR -> EN and EN -> AR both work.
- Service page AR -> EN and EN -> AR both work on tested samples.
- Root special pages AR -> EN and EN -> AR both work.
- Services dropdown appears and behaves consistently after navigating away from the homepage.
- No content rewrite is included in this phase.

⏸️ Review Gate - Phase 1 critical routing and navigation fixes complete.
Wait for developer approval before moving to Phase 2.

---

## Phase 2: Page Inventory Reconciliation

- [ ] [🤖] Build a full inventory of `services/` and `en/services/` HTML files.
- [ ] [🤖] Compare every service page filename against `docs/service-pages-decisions-report.md`.
- [ ] [🤖] Classify every service page file as one of:
  - Approved final URL - keep as-is.
  - Approved final URL - repair in place.
  - Deprecated old URL - deletion candidate.
  - Template/temp file - archive or cleanup candidate.
- [ ] [🤖] Apply the deletion safety criteria from Plan 45 before marking any file as a deletion candidate.
- [ ] [🤖] Check `index.html` for old or deprecated service links.
- [ ] [🤖] Check `en/index.html` for old links, untranslated Arabic strings, and incorrect service paths.
- [ ] [🤖] Check `sitemap.xml` for approved final AR/EN URL pairs only.
- [ ] [🤖] Check canonical and hreflang tags on approved sample pages.
- [ ] [🤖] Produce a concise inventory table inside this plan or a linked audit note before any deletion.

### Phase 2 Acceptance Criteria

- Every service file has a clear classification.
- Every deprecated candidate has an approved replacement URL.
- No file is deleted in Phase 2.
- `index.html`, `en/index.html`, `sitemap.xml`, canonical, and hreflang mismatches are listed clearly.

⏸️ Review Gate - Phase 2 inventory complete.
Wait for developer approval before moving to Phase 3.

---

## Phase 3: Pilot Repair for One Damaged Approved Page

- [ ] [🤖] Select one damaged approved service page as the pilot, preferably `services/external-hdd-data-recovery.html` and `en/services/external-hdd-data-recovery.html` if Phase 2 confirms the mismatch.
- [ ] [🤖] Keep the approved filenames unchanged.
- [ ] [🤖] Rebuild the Arabic pilot page in place using `services/hdd-data-recovery.html` as the structural reference.
- [ ] [🤖] Insert exact Arabic content from Plan 38 for the pilot page.
- [ ] [🤖] Rebuild the English pilot page in place using `en/services/hdd-data-recovery.html` as the structural reference.
- [ ] [🤖] Insert exact English content from Plan 40 for the pilot page.
- [ ] [🤖] Verify title, meta description, canonical, Open Graph, Twitter tags, Schema.org, FAQPage, BreadcrumbList, LocalBusiness, and areaServed where applicable.
- [ ] [🤖] Verify AR/EN language toggle, hreflang, sitemap target, dropdown behavior, and no mixed-language visible content.

### Phase 3 Acceptance Criteria

- The pilot Arabic page matches Plan 38 content exactly.
- The pilot English page matches Plan 40 content exactly.
- The pilot page pair uses approved final URLs only.
- The pilot page pair passes routing, dropdown, canonical, hreflang, and schema checks.
- The pilot approach is documented before applying it to more pages.

⏸️ Review Gate - Phase 3 pilot repair complete.
Wait for developer approval before moving to Phase 4.

---

## Phase 4: Rollout Repair for Remaining Damaged Approved Pages

- [ ] [🤖] Apply the approved pilot repair approach to remaining damaged approved Arabic service pages.
- [ ] [🤖] Apply the approved pilot repair approach to remaining damaged approved English service pages.
- [ ] [🤖] Keep all approved filenames and canonical URLs unchanged.
- [ ] [🤖] Use exact Plan 38 Arabic content and exact Plan 40 English content.
- [ ] [🤖] Remove old bilingual-in-one-page visible structure from approved pages only where the separate `/en/` counterpart exists and is verified.
- [ ] [🤖] Verify each repaired page pair for language toggle, canonical, hreflang, schema, breadcrumb, and dropdown behavior.

### Phase 4 Acceptance Criteria

- All approved service page pairs are aligned with the final URL map.
- No approved slug is deleted or renamed.
- No visible Arabic content remains in English pages except brand names or intentional proper nouns.
- No English visible content remains in Arabic service content except accepted technical terms already present in Plan 38.
- All repaired pages follow the validated pilot pattern.

⏸️ Review Gate - Phase 4 rollout repair complete.
Wait for developer approval before moving to Phase 5.

---

## Phase 5: Cleanup and Documentation

- [ ] [🤖] Present the final deprecated-file deletion list for explicit developer approval.
- [ ] [🤖] Delete only approved deprecated files after explicit approval.
- [ ] [🤖] Clean or archive confirmed temporary execution files only after explicit approval.
- [ ] [🤖] Update `sitemap.xml` to include final approved AR/EN URLs only, if Phase 2-4 findings require changes.
- [ ] [🤖] Update `project-context.md` with the final bilingual routing and content reconciliation status.
- [ ] [🤖] Update `project-key.md` with any deleted, added, archived, or structurally important files.
- [ ] [🤖] Update `changelog.md` with the implemented Plan 46 changes.
- [ ] [🤖] Update Plan 46 checkmarks after each completed phase.
- [ ] [🤖] Run final verification for routing, dropdown, sitemap URL coverage, and sample page rendering.

### Phase 5 Acceptance Criteria

- Deprecated files are removed only after explicit approval.
- Documentation reflects the final state.
- `sitemap.xml` contains only approved final public URLs.
- No old service slug is linked from the homepage, English homepage, sitemap, canonical, or hreflang tags.
- The final handoff includes summary, changed files, tests, discovered issues, and next prompt if needed.

---

## Files Expected To Be Affected During Implementation

| File / Area | Expected Change |
|-------------|-----------------|
| `assets/js/main.js` | Fix language-toggle routing and nested `/en/en/` prevention |
| `index.html` | Possible Services dropdown/link consistency fixes |
| `en/index.html` | Possible language-toggle, dropdown, and translated link fixes |
| `services/*.html` | Approved page repairs only after Phase 3/4 gates |
| `en/services/*.html` | Approved page repairs only after Phase 3/4 gates |
| `sitemap.xml` | Final URL and hreflang reconciliation if needed |
| `project-context.md` | Documentation after implementation |
| `project-key.md` | Documentation after implementation |
| `changelog.md` | Documentation after implementation |
| Deprecated service files | Deletion only after explicit developer approval |

---

## Known High-Risk Areas

- Language toggle must not rely blindly on stale `localStorage` language state.
- English pages must not generate `/en/en/` paths.
- Approved final slugs must not be deleted when only their content or structure is stale.
- Deprecated old slugs must be checked against all links before deletion.
- Plan 43 and Plan 44 checkmarks are historical records and should not be rewritten as failed tasks.

---

## Ready Prompt for Phase 1

```text
Read plans/46-bilingual-routing-content-reconciliation-plan.md (Phase 1).
Read plans/45-language-navigation-bug-audit.md.
Read assets/js/main.js.
Read index.html and en/index.html.
Inspect a sample Arabic and English service page pair:
- services/hdd-data-recovery.html
- en/services/hdd-data-recovery.html
- services/external-hdd-data-recovery.html
- en/services/external-hdd-data-recovery.html

Task: Execute Phase 1 only.

Goal:
Fix critical bilingual routing and navigation breakage before any content reconciliation.

Rules:
1. Fix the global language toggle so it derives the current language from the URL path and never creates /en/en/.
2. Ensure AR pages switch to their correct /en/ counterpart.
3. Ensure EN pages switch back to their correct Arabic counterpart.
4. Fix Services dropdown behavior on homepage and internal pages.
5. Do not rewrite service page content in this phase.
6. Do not delete, rename, or rebuild service pages in this phase.
7. Do not perform deprecated-file cleanup in this phase.
8. Do not change Plans 43 or 44 historical records.
9. After implementation, verify the sample pages listed above and update Plan 46 Phase 1 checkmarks only.
10. Stop at the Phase 1 Review Gate and report findings before Phase 2.
```

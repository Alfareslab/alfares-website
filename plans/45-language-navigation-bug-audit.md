# Plan 45: Language and Navigation Bug Audit
> **Version:** 1.1.0
> **Date:** 2026-05-03
> **Status:** Pending inspection
> **Scope:** Bug logging and diagnostic audit only. No fixes should be implemented until the developer confirms: "أنا خلصت فحص".
> **Reference Context:** Plan 44 English bilingual rollout, homepage language toggle, AR/EN service pages, services dropdown navigation.
> **Changelog:** v1.1.0 adds the agreed sequencing: fix critical language/navigation breakage first, then reconcile approved/deprecated pages, then repair one damaged service page as a pilot before continuing.

---

## Objective

Record the reported bilingual routing, content parity, and services dropdown issues so they can be inspected one by one before any implementation work starts.

---

## Reported Issues

### 1. Global Language Toggle Routing Is Broken

- The website generally does not switch to English correctly.
- Pressing the language button twice can open a broken nested URL:
  - `http://127.0.0.1:5500/en/en/`
- The nested `/en/en/` path results in a broken page.

### 2. Internal HDD Service Page Language Toggle Breaks Return Path

- Arabic page opens normally.
- English page opens normally.
- From the English page, pressing the language button does not return correctly to Arabic.
- The site path breaks after toggling back.

### 3. External HDD Service Page Has Content Version Mismatch

- Arabic version appears to be old content.
- English version appears to be newer content.
- The same language-toggle break happens when pressing the language button again.

### 4. Other Service Pages May Share the Same Two Problem Patterns

- Some Arabic service pages may still use older content while English pages are newer.
- Some pages may have broken language-toggle routing.
- Each service page needs inspection to determine:
  - Which language version has the correct/latest content.
  - Whether its AR-to-EN route works.
  - Whether its EN-to-AR route works.
  - Whether canonical and hreflang targets match the real page pair.

### 5. Services Dropdown Behavior Is Inconsistent

- The "Services" dropdown appears correctly from the homepage on first use.
- After opening a service page from the dropdown, hovering over "Services" no longer shows the dropdown reliably.
- The dropdown appears only when clicked, which creates inconsistent navigation behavior.

---

## Inspection Checklist

| Area | Check | Status |
|------|-------|--------|
| Homepage language toggle | AR homepage to EN homepage | Pending |
| Homepage language toggle | EN homepage back to AR homepage | Pending |
| Nested path prevention | Confirm no `/en/en/` generated | Pending |
| Internal HDD page | AR content freshness | Pending |
| Internal HDD page | AR to EN routing | Pending |
| Internal HDD page | EN to AR routing | Pending |
| External HDD page | AR content freshness | Pending |
| External HDD page | EN content freshness | Pending |
| External HDD page | AR/EN routing | Pending |
| Remaining service pages | Content parity audit | Pending |
| Remaining service pages | AR/EN routing audit | Pending |
| hreflang/canonical | Pair accuracy across AR and EN pages | Pending |
| Services dropdown | Hover behavior on homepage | Pending |
| Services dropdown | Hover behavior after navigating to service pages | Pending |
| Services dropdown | Click behavior on desktop/mobile | Pending |

---

## Constraints

- Do not implement fixes during the audit logging stage.
- Do not change routing, JavaScript, HTML, sitemap, hreflang, or content until the developer confirms the inspection is complete.
- Keep Plan 45 focused on diagnosis first, then implementation can be planned after the confirmed findings.

---

## Decision Report and Content Source Alignment

- `docs/service-pages-decisions-report.md` is the authoritative source for final approved URL names.
- `plans/38-ar-service-pages-content.md` is the authoritative Arabic content source.
- `plans/40-en-service-pages-content.md` is the authoritative English content source.
- `services/hdd-data-recovery.html` and `en/services/hdd-data-recovery.html` are treated as the latest known reference implementation for structure, content freshness, and AR/EN separation.

---

## Current Interpretation of Plan 43 Pages

Plan 43 did build the Arabic service pages and its completed checkmarks should be preserved as historical execution records.

The current audit does not treat those pages as "not built". Instead, it treats the present problem as a post-rollout reconciliation issue caused by:

- Older slugs from early Plan 43 phases still existing in the repository.
- Approved final slugs existing but some pages may still contain older bilingual-in-one-page structure.
- Later Plan 44 bilingual routing and hreflang work exposing content and navigation mismatches.

Approved final slugs must not be deleted just because their current content or structure is stale. They should be repaired in place if mismatched.

---

## Deletion Safety Criteria

A file may be classified as a deprecated old URL candidate only if all of the following are true:

1. Its filename is not listed as an approved final URL in `docs/service-pages-decisions-report.md`.
2. There is a clear approved replacement URL for the same service.
3. It is not required as the final target in `index.html`, `sitemap.xml`, canonical tags, or hreflang tags.
4. Its content is older, duplicated, or superseded by the approved final page.

No file should be deleted during this audit.

---

## Candidate Deprecated URLs to Verify

These files require verification against the deletion safety criteria before any cleanup:

- `services/ssd-data-recovery.html`
- `services/flash-sd-recovery.html`
- `services/raid-server-recovery.html`
- `services/dvr-data-recovery.html`
- `services/ransomware-database-recovery.html`
- `en/services/ssd-data-recovery.html`
- `en/services/flash-sd-recovery.html`

Template and temporary execution files should be reviewed separately before cleanup or archive decisions.

---

## Approved URLs That May Need In-Place Repair

These pages use approved final filenames and should be kept. If content, structure, canonical, hreflang, or language behavior is stale, they should be repaired in place rather than deleted:

- `services/external-hdd-data-recovery.html`
- `services/ssd-nvme-data-recovery.html`
- `services/laptop-pc-data-recovery.html`
- `services/raid-nas-data-recovery.html`
- `services/flash-sd-data-recovery.html`
- `services/dvr-nvr-data-recovery.html`
- `services/ransomware-data-recovery.html`
- `services/database-erp-recovery.html`

Arabic pages should be checked against Plan 38. English pages should be checked against Plan 40.

---

## Agreed Implementation Sequence After Audit

The logical fix order is:

1. Fix critical site breakage first:
   - Global language toggle.
   - Broken `/en/en/` routing.
   - AR-to-EN and EN-to-AR switching between paired pages.
   - Services dropdown behavior across homepage and internal service pages.
2. Reconcile the page inventory:
   - Confirm approved final URLs.
   - Confirm deprecated old URLs.
   - Confirm sitemap, index, canonical, and hreflang targets.
3. Repair one damaged approved service page as a pilot:
   - Keep the same approved filename.
   - Rebuild content/structure internally using the HDD page as the reference.
   - Use exact Arabic content from Plan 38 and exact English content from Plan 40.
   - Verify routing, canonical, hreflang, schema, and dropdown behavior.
4. Continue repairing the remaining damaged approved pages using the validated pilot approach.

---

## Next Prompt

```text
Read plans/45-language-navigation-bug-audit.md.
Do not implement fixes yet.

Task: Inspect the reported language-toggle, content parity, hreflang/canonical, and services dropdown issues.

Rules:
1. Produce a page-by-page findings table.
2. Identify whether each issue is routing, content mismatch, hreflang/canonical mismatch, or dropdown behavior.
3. Do not edit files.
4. Stop after the audit and wait for approval before implementing fixes.
```

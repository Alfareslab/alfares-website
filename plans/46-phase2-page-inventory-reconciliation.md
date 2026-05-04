# Plan 46 Phase 2: Page Inventory Reconciliation
> **Version:** 1.0.0
> **Date:** 2026-05-04
> **Status:** Completed - waiting at Phase 2 Review Gate
> **Scope:** Inventory and classification only. No files were deleted, renamed, rebuilt, or content-rewritten.

---

## Source Of Truth

- Final URL naming: `docs/service-pages-decisions-report.md`
- Arabic content source: `plans/38-ar-service-pages-content.md`
- English content source: `plans/40-en-service-pages-content.md`
- Routing bug source audit: `plans/45-language-navigation-bug-audit.md`
- Implementation plan: `plans/46-bilingual-routing-content-reconciliation-plan.md`

---

## Summary

Phase 2 confirms that the public final URL map is mostly wired correctly in `index.html`, `en/index.html`, and `sitemap.xml`, but the repository still contains deprecated old service slugs from earlier rollout phases.

The main repair need is not deletion of approved URLs. It is in-place repair of approved Arabic pages that still contain the old bilingual-in-one-page structure, plus two approved English pages whose internal metadata/hreflang references still point to deprecated slugs.

No deletion should happen before explicit developer approval.

---

## Approved Final URLs - Keep As Current Reference Or Verify Only

These approved files do not show the old `localized-content` / `data-page-lang` structure and do not require immediate in-place rebuild from this inventory alone:

| File | Classification | Notes |
|------|----------------|-------|
| `services/hdd-data-recovery.html` | Approved final URL - keep as-is | Latest Arabic reference implementation. |
| `services/mac-data-recovery.html` | Approved final URL - keep as-is | No old bilingual-in-one-page structure detected. |
| `en/services/hdd-data-recovery.html` | Approved final URL - keep as-is | Latest English reference implementation. |
| `en/services/external-hdd-data-recovery.html` | Approved final URL - keep as-is | No old slug references detected. |
| `en/services/raid-nas-data-recovery.html` | Approved final URL - keep as-is | No old slug references detected. |
| `en/services/dvr-nvr-data-recovery.html` | Approved final URL - keep as-is | No old slug references detected. |
| `en/services/laptop-pc-data-recovery.html` | Approved final URL - keep as-is | No old slug references detected. |
| `en/services/mac-data-recovery.html` | Approved final URL - keep as-is | No old slug references detected. |
| `en/services/ransomware-data-recovery.html` | Approved final URL - keep as-is | No old slug references detected. |
| `en/services/database-erp-recovery.html` | Approved final URL - keep as-is | No old slug references detected. |
| `en/services/data-recovery-makkah.html` | Approved final URL - keep as-is | No old slug references detected. |
| `en/services/data-recovery-saudi-arabia.html` | Approved final URL - keep as-is | No old slug references detected. |

---

## Approved Final URLs - Repair In Place

These files use approved final filenames, so they must not be deleted or renamed. They should be repaired in place during Phase 3/4 if approved.

### Arabic Pages With Old Bilingual-In-One-Page Structure

Detected markers: `localized-content`, `data-page-lang`, or `service-page-meta`.

| File | Classification | Reason |
|------|----------------|--------|
| `services/external-hdd-data-recovery.html` | Approved final URL - repair in place | Old bilingual-in-one-page structure detected; Arabic content should be checked against Plan 38. |
| `services/ssd-nvme-data-recovery.html` | Approved final URL - repair in place | Old bilingual-in-one-page structure detected; Arabic content should be checked against Plan 38. |
| `services/raid-nas-data-recovery.html` | Approved final URL - repair in place | Old bilingual-in-one-page structure detected; Arabic content should be checked against Plan 38. |
| `services/flash-sd-data-recovery.html` | Approved final URL - repair in place | Old bilingual-in-one-page structure detected; Arabic content should be checked against Plan 38. |
| `services/dvr-nvr-data-recovery.html` | Approved final URL - repair in place | Old bilingual-in-one-page structure detected; Arabic content should be checked against Plan 38. |
| `services/laptop-pc-data-recovery.html` | Approved final URL - repair in place | Old bilingual-in-one-page structure detected; Arabic content should be checked against Plan 38. |
| `services/ransomware-data-recovery.html` | Approved final URL - repair in place | Old bilingual-in-one-page structure detected; Arabic content should be checked against Plan 38. |
| `services/database-erp-recovery.html` | Approved final URL - repair in place | Old bilingual-in-one-page structure detected; Arabic content should be checked against Plan 38. |
| `services/data-recovery-makkah.html` | Approved final URL - repair in place | Old bilingual metadata structure detected; Arabic content should be checked against Plan 38. |
| `services/data-recovery-saudi-arabia.html` | Approved final URL - repair in place | Old bilingual metadata structure detected; Arabic content should be checked against Plan 38. |

### English Pages With Deprecated Internal References

| File | Classification | Reason |
|------|----------------|--------|
| `en/services/ssd-nvme-data-recovery.html` | Approved final URL - repair in place | Canonical is correct, but OG/Twitter/schema/hreflang still reference deprecated `ssd-data-recovery.html`. |
| `en/services/flash-sd-data-recovery.html` | Approved final URL - repair in place | Canonical is correct, but OG/Twitter/schema/hreflang still reference deprecated `flash-sd-recovery.html`. |

---

## Deprecated Old URLs - Deletion Candidates After Approval

These files are not approved final URLs in `docs/service-pages-decisions-report.md`, and each has a clear approved replacement. They are candidates only; no deletion occurred in Phase 2.

| Deprecated File | Approved Replacement |
|-----------------|----------------------|
| `services/ssd-data-recovery.html` | `services/ssd-nvme-data-recovery.html` |
| `en/services/ssd-data-recovery.html` | `en/services/ssd-nvme-data-recovery.html` |
| `services/flash-sd-recovery.html` | `services/flash-sd-data-recovery.html` |
| `en/services/flash-sd-recovery.html` | `en/services/flash-sd-data-recovery.html` |
| `services/raid-server-recovery.html` | `services/raid-nas-data-recovery.html` |
| `services/dvr-data-recovery.html` | `services/dvr-nvr-data-recovery.html` |
| `services/ransomware-database-recovery.html` | Split into `services/ransomware-data-recovery.html` and `services/database-erp-recovery.html` |

Deletion safety status:

- Not approved final URLs: confirmed.
- Clear replacement URLs: confirmed.
- Required by `index.html`: no old references found.
- Required by `en/index.html`: no old references found.
- Required by `sitemap.xml`: no old references found.
- Required by approved page metadata: old references still exist in `en/services/ssd-nvme-data-recovery.html` and `en/services/flash-sd-data-recovery.html`, so cleanup must wait until those approved pages are repaired.

---

## Template / Temp Files

These are not final public service URLs and should be reviewed separately before archive or cleanup decisions:

| File | Classification | Notes |
|------|----------------|-------|
| `services/service-page-template.html` | Template/temp file - archive or cleanup candidate | Template file, not a final public URL. |
| `services/about-lab-template.html` | Template/temp file - archive or cleanup candidate | Template file, root `about-lab.html` is the approved URL. |
| `services/privacy-policy-template.html` | Template/temp file - archive or cleanup candidate | Template file, root `privacy-policy.html` is the approved URL. |

Separate root execution scripts such as `phase5-*.js` and `generate-sitemap.js` were not part of the service-page folder inventory, but should be reviewed during the final cleanup phase.

---

## Index, English Index, Sitemap, Canonical, And Hreflang Findings

### `index.html`

- No references to deprecated old service slugs were found.
- Arabic homepage links point to Arabic approved service URLs.
- Missing English service URLs in `index.html` are expected for the Arabic homepage and are not classified as an error in Phase 2.

### `en/index.html`

- No references to deprecated old service slugs were found.
- All approved English service URLs were found.
- Visible Arabic text remains in the English homepage fallback/static markup. This is outside service-page content repair, but it should be fixed in a later English homepage cleanup task.

### `sitemap.xml`

- No references to deprecated old service slugs were found.
- All approved Arabic and English service URLs were found.
- Approved root special URLs were also present with AR/EN alternates:
  - `about-lab.html`
  - `privacy-policy.html`
  - `en/about-lab.html`
  - `en/privacy-policy.html`

### Approved Page Metadata

- `en/services/ssd-nvme-data-recovery.html` contains deprecated references to:
  - `services/ssd-data-recovery.html`
  - `en/services/ssd-data-recovery.html`
- `en/services/flash-sd-data-recovery.html` contains deprecated references to:
  - `services/flash-sd-recovery.html`
  - `en/services/flash-sd-recovery.html`
- These two approved English pages must be repaired before deleting the deprecated old files.

---

## Recommended Phase 3 Pilot

Use `services/external-hdd-data-recovery.html` and `en/services/external-hdd-data-recovery.html` as the Phase 3 pilot pair.

Reason:

- The Arabic page is an approved final URL but still has the old bilingual-in-one-page structure.
- The English counterpart is approved and has no deprecated old slug references.
- This pair is the safest pilot for validating the rebuild-in-place approach before touching SSD/Flash pages that also have deprecated metadata references.

---

## Phase 2 Decision

Phase 2 is complete and should stop at the Review Gate.

No files were deleted. No service page content was rewritten. No CSS was edited.

# GSC Coverage Report - 2026-06-20
> **Plan:** 55 - Phase 1
> **Source:** Google Search Console - Page Indexing / Coverage Report + URL Inspection verification
> **Date collected:** 2026-06-20
> **Status:** Complete - Review Gate 1 passed

---

## Data Freshness Note

| Source | Snapshot Date | Use In This Report |
|--------|---------------|--------------------|
| GSC Page Indexing / Coverage report | 2026-06-12 | General indexed / not-indexed counts and coverage categories |
| GSC URL Inspection | 2026-06-20 | Live status confirmation for tracked pages where checked |
| Direct sitemap.xml inspection | 2026-06-20 | Verification that disputed URLs are present in sitemap.xml |

The coverage report is 8 days older than the live URL Inspection results. This explains why the coverage summary shows 14 indexed pages, while the tracked live results show 17 indexed pages across Group A and Group B.

---

## General Summary

| Status | Count |
|--------|-------|
| Indexed | 14 |
| Not indexed | 26 |
| Page with redirect | 6 |
| Alternate page with proper canonical tag | 2 |
| Not found (404) | 2 |
| Discovered - currently not indexed | 16 |
| Crawled - currently not indexed | 0 |
| **Total tracked** | **28** |

---

## Group A - Manual Indexing Request (3 pages)

> These 3 pages had a direct manual indexing request submitted via GSC after Plan 54 (2026-05-18).

| Page | Status | Last Crawl Date | Notes |
|------|--------|-----------------|-------|
| `services/hdd-data-recovery` | Indexed | 2026-06-17 | Confirmed indexed via URL Inspection |
| `about-lab` | Indexed | 2026-06-16 | Confirmed indexed via URL Inspection |
| `privacy-policy` | Indexed | 2026-06-11 | Confirmed indexed via URL Inspection |

---

## Group B - Sitemap Resubmission Only (25 pages)

> These pages were not manually requested. They rely on Googlebot discovering them via the resubmitted sitemap.xml.

### AR Service Pages (11)

| Page | Status | Rejection Reason (if any) |
|------|--------|---------------------------|
| `services/external-hdd-data-recovery` | Indexed | - |
| `services/ssd-nvme-data-recovery` | Not indexed | Discovered - currently not indexed; present in sitemap.xml, no crawl data |
| `services/laptop-pc-data-recovery` | Indexed | - |
| `services/mac-data-recovery` | Indexed | - |
| `services/raid-nas-data-recovery` | Indexed | - |
| `services/flash-sd-data-recovery` | Not indexed | Discovered - currently not indexed; present in sitemap.xml, no crawl data |
| `services/dvr-nvr-data-recovery` | Not indexed | Discovered - currently not indexed; present in sitemap.xml, no crawl data |
| `services/ransomware-data-recovery` | Not indexed | Discovered - currently not indexed; present in sitemap.xml, no crawl data |
| `services/database-erp-recovery` | Indexed | - |
| `services/data-recovery-makkah` | Not indexed | Discovered - currently not indexed; present in sitemap.xml, no crawl data |
| `services/data-recovery-saudi-arabia` | Indexed | - |

### EN Service Pages (12)

| Page | Status | Rejection Reason (if any) |
|------|--------|---------------------------|
| `en/services/hdd-data-recovery` | Indexed | - |
| `en/services/external-hdd-data-recovery` | Indexed | - |
| `en/services/ssd-nvme-data-recovery` | Not indexed | Discovered - currently not indexed; present in sitemap.xml, no crawl data |
| `en/services/laptop-pc-data-recovery` | Indexed | - |
| `en/services/mac-data-recovery` | Indexed | - |
| `en/services/raid-nas-data-recovery` | Indexed | - |
| `en/services/flash-sd-data-recovery` | Not indexed | Discovered - currently not indexed; present in sitemap.xml, no crawl data |
| `en/services/dvr-nvr-data-recovery` | Not indexed | Discovered - currently not indexed; present in sitemap.xml, no crawl data |
| `en/services/ransomware-data-recovery` | Not indexed | Discovered - currently not indexed; present in sitemap.xml, no crawl data |
| `en/services/database-erp-recovery` | Indexed | - |
| `en/services/data-recovery-makkah` | Not indexed | Discovered - currently not indexed; present in sitemap.xml, no crawl data |
| `en/services/data-recovery-saudi-arabia` | Not indexed | Discovered - currently not indexed; present in sitemap.xml, no crawl data |

### EN Trust Pages (2)

| Page | Status | Rejection Reason (if any) |
|------|--------|---------------------------|
| `en/about-lab` | Indexed | - |
| `en/privacy-policy` | Indexed | - |

---

## Reference Pages (not in Groups A or B)

| Page | Status | Notes |
|------|--------|-------|
| `index.html` (AR homepage) | Indexed | Confirmed via URL Inspection |
| `en/index.html` (EN homepage) | Indexed | Confirmed via URL Inspection |

---

## Errors & Warnings

### Page with redirect (6)

| URL | Last Crawled | Notes |
|-----|--------------|-------|
| `https://alfareslab.com/services/raid-nas-data-recovery.html` | 2026-06-10 | Old `.html` URL redirecting to canonical clean URL |
| `http://alfareslab.com/` | 2026-06-10 | HTTP variant redirecting to canonical HTTPS URL |
| `http://www.alfareslab.com/` | 2026-06-10 | HTTP + www variant redirecting to canonical HTTPS URL |
| `https://www.alfareslab.com/` | 2026-06-10 | www variant redirecting to canonical non-www URL |
| `https://alfareslab.com/services/external-hdd-data-recovery.html` | 2026-06-09 | Old `.html` URL redirecting to canonical clean URL |
| `https://alfareslab.com/en/services/external-hdd-data-recovery.html` | 2026-06-06 | Old `.html` URL redirecting to canonical clean URL |

### Alternate page with proper canonical tag (2)

| URL | Notes |
|-----|-------|
| `https://alfareslab.com/?lang=en` | Language-parameter homepage variant with canonical pointing elsewhere |
| `https://alfareslab.com/?lang=ar` | Language-parameter homepage variant with canonical pointing elsewhere |

### Not found (404) (2)

| URL | Last Crawled | Notes |
|-----|--------------|-------|
| `"https://alfareslab.com/"en/services/database-erp-recovery.html"` | 2026-06-12 | Malformed URL with literal quotation marks; not a real tracked page |
| `"/https://alfareslab.com"` | 2026-05-10 | Malformed URL with literal quotation marks; not a real tracked page |

### Category Summary

| Type | Details | Affected Pages |
|------|---------|----------------|
| Page with redirect | 6 pages not indexed due to redirect | Old `.html` URLs and HTTP/www variants listed above |
| Alternate page with proper canonical tag | 2 pages excluded because canonical points elsewhere | `?lang=en`, `?lang=ar` homepage variants |
| Not found (404) | 2 malformed URLs returning 404 | Malformed quoted URLs listed above |
| Discovered - currently not indexed | 16 pages discovered but not yet crawled or indexed | Mostly the not-indexed Group B URLs |

---

## Sitemap Verification

| URL | Present in sitemap.xml? | Notes |
|-----|--------------------------|-------|
| `https://alfareslab.com/services/ransomware-data-recovery` | Yes | Present in sitemap.xml; not yet crawled/indexed |
| `https://alfareslab.com/en/services/ransomware-data-recovery` | Yes | Present in sitemap.xml; not yet crawled/indexed |
| `https://alfareslab.com/en/services/data-recovery-saudi-arabia` | Yes | Present in sitemap.xml; not yet crawled/indexed |

Correction from the initial collection pass: these URLs are present in `https://alfareslab.com/sitemap.xml`. URL Inspection did not show a sitemap referral for them, but that means GSC had not yet associated the sitemap submission with those URLs in the live inspection view. They should be treated as `Discovered - currently not indexed`, not as missing from sitemap.xml.

---

## Count Reconciliation

| Metric | Count | Source |
|--------|-------|--------|
| Indexed pages in coverage snapshot | 14 | GSC coverage report, 2026-06-12 |
| Indexed tracked pages in live check | 17 | Group A (3) + Group B (14), URL Inspection / live GSC, 2026-06-20 |
| Indexed including reference homepages | 19 | Group A (3) + Group B (14) + reference pages (2), 2026-06-20 |

The gap is caused by data staleness. The coverage snapshot is dated 2026-06-12, while URL Inspection reflects live index state on 2026-06-20.

---

## Observations

- Group A indexed count: 3 / 3
- Group B indexed count: 14 / 25
- Most common rejection reason: Discovered - currently not indexed
- Crawled - currently not indexed is 0, so the main issue is that Google has not crawled many Group B URLs yet rather than crawling and rejecting them.
- Manual indexing appears to have produced a stronger result in Phase 1: all Group A pages are indexed with recent crawl dates.
- Sitemap-only discovery is slower and incomplete: 11 Group B pages remain not indexed.
- Redirect exclusions are old `.html`, HTTP, or www variants and are not part of the tracked clean URL set.
- Canonical exclusions are language-parameter homepage variants and are not part of the tracked clean URL set.
- The two 404s are malformed quoted URLs and are not real tracked pages.
- No tracked URL is currently blocked by a visible redirect, canonical conflict, or 404 category in this report.

---

## Review Gate 1

Coverage data is complete for Phase 1. Ready to proceed to Phase 2 after developer confirmation.

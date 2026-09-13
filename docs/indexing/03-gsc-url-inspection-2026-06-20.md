# GSC URL Inspection Report - 2026-06-20
> **Plan:** 55 - Phase 3
> **Source:** Google Search Console - URL Inspection Tool
> **Date collected:** 2026-06-20
> **Status:** Complete - Review Gate 3 passed

---

## Group A - Manual Indexing Request (all 3 mandatory)

| Page | Result | Indexed | Sitemap Status | Last Crawl Date | Crawled As | Coverage Message | Enhancements Detected |
|------|--------|---------|----------------|-----------------|------------|------------------|-----------------------|
| `services/hdd-data-recovery` | URL is on Google | Yes | `sitemap.xml` | 2026-06-17 23:51:19 | Googlebot Smartphone | Indexed | HTTPS, Breadcrumbs (1 valid) |
| `about-lab` | URL is on Google | Yes | Temporary sitemap processing error | 2026-06-16 23:36:07 | Googlebot Smartphone | Indexed | HTTPS, Breadcrumbs (1 valid) |
| `privacy-policy` | URL is on Google | Yes | `sitemap.xml` | 2026-06-11 14:49:56 | Googlebot Smartphone | Indexed | HTTPS, Breadcrumbs (1 valid) |

---

## Group B - Comparison Sample (3 pages)

> Selected to give a meaningful A vs B comparison:
> - `en/services/hdd-data-recovery` - EN counterpart of Group A's top page
> - `services/ssd-nvme-data-recovery` - mid-tier AR service (no manual request)
> - `en/about-lab` - EN counterpart of Group A's about-lab

| Page | Result | Indexed | Sitemap Status | Last Crawl Date | Crawled As | Coverage Message | Enhancements Detected |
|------|--------|---------|----------------|-----------------|------------|------------------|-----------------------|
| `en/services/hdd-data-recovery` | URL is on Google | Yes | `sitemap.xml` | 2026-06-19 15:23:26 | Googlebot Smartphone | Indexed | HTTPS, Breadcrumbs (1 valid) |
| `services/ssd-nvme-data-recovery` | URL is not on Google | No | Listed in `sitemap.xml`, but page not crawled | N/A | N/A | Discovered - currently not indexed | None detected |
| `en/about-lab` | URL is on Google | Yes | Temporary sitemap processing error | 2026-06-18 00:35:19 | Googlebot Smartphone | Indexed | HTTPS, Breadcrumbs (1 valid) |

---

## Reference Homepages

| Page | Result | Indexed | Sitemap Status | Last Crawl Date | Crawled As | Coverage Message | Enhancements Detected | Notes |
|------|--------|---------|----------------|-----------------|------------|------------------|-----------------------|-------|
| `alfareslab.com/` (AR) | URL is on Google | Yes | `sitemap.xml` | 2026-06-10 02:34:27 | Googlebot Smartphone | Indexed | HTTPS, no Breadcrumbs | Oldest crawl among inspected indexed pages |
| `alfareslab.com/en/` (EN) | URL is on Google | Yes | `sitemap.xml` | 2026-06-18 06:31:58 | Googlebot Smartphone | Indexed | HTTPS, no Breadcrumbs | Recent crawl |

---

## A vs B Comparison

| Question | Answer |
|----------|--------|
| Are all 3 Group A pages indexed? | Yes - 3/3 indexed |
| Are all 3 Group B sample pages indexed? | No - 2/3 indexed |
| Is Group A Last Crawl date more recent than Group B? | No. Group B sample includes `en/services/hdd-data-recovery` crawled on 2026-06-19 and `en/about-lab` crawled on 2026-06-18, both newer than some Group A crawls. |
| Did the manual request produce a clearly faster crawl? | It produced more reliable indexing for Group A, but not universally faster crawls than Group B sample pages. |
| Any Group B page that was indexed faster than Group A? | Yes. `en/services/hdd-data-recovery` and `en/about-lab` have newer crawl dates than the inspected Group A pages. |
| **Overall: Did the manual request make a measurable difference?** | Yes for indexing reliability: Group A is 3/3 indexed, while Group B sample is 2/3 indexed and includes one discovered-but-not-crawled URL. The crawl-date advantage is mixed rather than absolute. |

---

## Individual Page Notes

| Page | Observation |
|------|-------------|
| `services/hdd-data-recovery` | Indexed and crawled on 2026-06-17, but Phase 2 shows 0 impressions in the last 3 months. Needs later synthesis. |
| `about-lab` | Indexed with valid HTTPS and Breadcrumbs, but URL Inspection showed a temporary sitemap processing error. |
| `privacy-policy` | Indexed, in sitemap.xml, and has valid HTTPS and Breadcrumbs. |
| `en/services/hdd-data-recovery` | Indexed and crawled more recently than the Arabic HDD page. Referral page was reported as `services/hdd-data-recovery`. |
| `services/ssd-nvme-data-recovery` | Only inspected URL not on Google. It is listed in sitemap.xml but has not been crawled yet. |
| `en/about-lab` | Indexed and crawled recently. Referral page was reported as `about-lab`; temporary sitemap processing error also appeared. |
| `alfareslab.com/` | Indexed but has the oldest crawl date among inspected indexed pages. No Breadcrumbs detected, which is expected for a homepage. |
| `alfareslab.com/en/` | Indexed with a recent crawl. No Breadcrumbs detected, which is expected for a homepage. |

---

## Observations

- `services/ssd-nvme-data-recovery` is the only inspected URL not on Google. Google has discovered it via `sitemap.xml` but has not yet crawled or indexed it.
- Group A is fully indexed, which supports the Phase 1 finding that manual indexing helped guarantee coverage for the manually requested pages.
- Group B sample is mixed: 2/3 indexed, 1/3 discovered but not crawled.
- Some Group B sample pages have newer crawl dates than Group A pages, so manual indexing did not produce an absolute crawl-date advantage.
- Temporary sitemap processing errors appeared for `about-lab` and `en/about-lab`; these did not prevent indexing, but should be monitored.
- All crawled inspected pages used Googlebot Smartphone, consistent with mobile-first indexing.
- Homepages did not show Breadcrumbs, which is expected and not treated as an issue.

---

## Review Gate 3

GSC data collection is complete for Phases 1, 2, and 3. Ready to proceed to Phase 4 after developer confirmation.

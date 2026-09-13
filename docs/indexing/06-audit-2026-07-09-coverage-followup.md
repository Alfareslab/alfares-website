# GSC Coverage Follow-up Audit - 2026-07-09
> **Plan:** 56 pre-check / Audit only  
> **Source:** Google Search Console Coverage Drilldown export: `docs/Google_indexing/alfareslab.com-Coverage-Drilldown-2026-07-09/`  
> **Baseline:** Plan 55 gap analysis from `docs/indexing/05-gap-analysis-2026-06-20.md`  
> **Date analyzed:** 2026-07-09  
> **Status:** Audit only - no code changes, no commits, no context/changelog updates

---

## Executive Summary

The 2026-07-09 CSV export is **not a full Page Indexing export**. It is a drilldown for one specific GSC issue: **Crawled - currently not indexed**.

From this export, the currently confirmed affected count for that issue is **3 URLs** as of the latest chart date available in the file (**2026-06-30**). Two are clean tracked URLs, and one is a legacy `.html` URL that currently redirects correctly to the clean URL.

The biggest Plan 55 change is that `services/dvr-nvr-data-recovery` moved from **Discovered - currently not indexed** to **Crawled - currently not indexed**. This means Google has now crawled the Arabic DVR/NVR page, but it is still **not indexed**. The English DVR/NVR page is **not present in this drilldown**, so its current index status cannot be confirmed from these CSV files alone.

---

## Data Scope & Limitation

| Item | Value |
|------|-------|
| Export folder | `docs/Google_indexing/alfareslab.com-Coverage-Drilldown-2026-07-09/` |
| CSV files | `البيانات الوصفية.csv`, `جدول.csv`, `رسم بياني.csv` |
| Metadata issue | Crawled - currently not indexed |
| Sitemap filter | All known pages |
| Chart date range | 2026-04-27 to 2026-06-30 |
| Latest affected count in chart | 3 |
| Full indexed / non-indexed total available? | No |

Because this is only a single-issue drilldown, it cannot prove the current total number of indexed pages vs non-indexed pages across the full site. It only proves which URLs are currently listed under this specific **Crawled - currently not indexed** issue.

---

## Current Extracted Coverage Data

### Confirmed issue count from the new export

| Metric | Count | Source |
|--------|-------|--------|
| Indexed pages | Not available in this drilldown | CSV does not include full Page Indexing summary |
| Non-indexed under `Crawled - currently not indexed` | 3 URLs | `جدول.csv` + `رسم بياني.csv` |
| Clean tracked URLs in this issue | 2 URLs | `جدول.csv` |
| Legacy `.html` URLs in this issue | 1 URL | `جدول.csv` |

### URLs listed in the new drilldown

| URL | Last Crawl | Interpretation |
|-----|------------|----------------|
| `https://alfareslab.com/services/dvr-nvr-data-recovery` | 2026-07-01 | Clean tracked URL. Crawled, but not indexed. |
| `https://alfareslab.com/en/services/data-recovery-saudi-arabia` | 2026-06-30 | Clean tracked URL. Crawled, but not indexed. |
| `https://alfareslab.com/en/services/data-recovery-saudi-arabia.html` | 2026-06-30 | Legacy `.html` URL. Live check confirms it redirects to the clean URL with HTTP 308. Do not request indexing for this `.html` URL. |

### Live HTTP sanity check

| URL | Live HTTP result on 2026-07-09 | Notes |
|-----|--------------------------------|-------|
| `https://alfareslab.com/services/dvr-nvr-data-recovery` | 200 OK | Clean page is reachable. |
| `https://alfareslab.com/en/services/dvr-nvr-data-recovery` | 200 OK | Clean page is reachable, but index status is not confirmed by this export. |
| `https://alfareslab.com/en/services/data-recovery-saudi-arabia` | 200 OK | Clean page is reachable. |
| `https://alfareslab.com/en/services/data-recovery-saudi-arabia.html` | 308 -> clean URL -> 200 OK | Redirect behavior is correct. |

---

## Comparison Against 2026-06-20 Baseline

### Baseline from Plan 55

| Metric | 2026-06-20 Baseline |
|--------|---------------------|
| Tracked pages | 28 |
| Indexed tracked pages | 17 |
| Group B sitemap-only indexed pages | 14 / 25 |
| Group B sitemap-only not indexed pages | 11 / 25 |
| Main unresolved issue | Discovered - currently not indexed |
| Crawled - currently not indexed | 0 tracked pages |
| Highest P0 opportunity | DVR/NVR AR + EN not indexed |

### New data from 2026-07-09 drilldown

| Area | New Finding | Result |
|------|-------------|--------|
| Full indexed count | Not provided by this drilldown | Needs live GSC Page Indexing summary |
| Full non-indexed count | Not provided by this drilldown | Needs live GSC Page Indexing summary |
| `services/dvr-nvr-data-recovery` | Now crawled, still not indexed | Improved crawl status, but not solved |
| `en/services/dvr-nvr-data-recovery` | Not present in this drilldown | Unknown; requires live URL Inspection |
| `en/services/data-recovery-saudi-arabia` | Now crawled, still not indexed | Improved crawl status, but not solved |
| Legacy `.html` URL | `en/services/data-recovery-saudi-arabia.html` appears in issue | Monitor only; live redirect is correct |
| Crawled - currently not indexed | Increased from 0 to 3 URLs in this drilldown | New visible coverage category vs Plan 55 baseline |

---

## Status of the 11 Previously Discovered Pages

| # | Page | 2026-06-20 Status | 2026-07-09 CSV Evidence | Current Audit Status |
|---|------|-------------------|--------------------------|----------------------|
| 1 | `services/ssd-nvme-data-recovery` | Discovered - currently not indexed | Not listed in this drilldown | Unknown from CSV; needs live GSC check |
| 2 | `services/flash-sd-data-recovery` | Discovered - currently not indexed | Not listed in this drilldown | Unknown from CSV; needs live GSC check |
| 3 | `services/dvr-nvr-data-recovery` | Discovered - currently not indexed | Listed as Crawled - currently not indexed, crawled 2026-07-01 | Not solved; crawl happened but indexing still failed |
| 4 | `services/ransomware-data-recovery` | Discovered - currently not indexed | Not listed in this drilldown | Unknown from CSV; needs live GSC check |
| 5 | `services/data-recovery-makkah` | Discovered - currently not indexed | Not listed in this drilldown | Unknown from CSV; needs live GSC check |
| 6 | `en/services/ssd-nvme-data-recovery` | Discovered - currently not indexed | Not listed in this drilldown | Unknown from CSV; needs live GSC check |
| 7 | `en/services/flash-sd-data-recovery` | Discovered - currently not indexed | Not listed in this drilldown | Unknown from CSV; needs live GSC check |
| 8 | `en/services/dvr-nvr-data-recovery` | Discovered - currently not indexed | Not listed in this drilldown | Unknown from CSV; needs live URL Inspection |
| 9 | `en/services/ransomware-data-recovery` | Discovered - currently not indexed | Not listed in this drilldown | Unknown from CSV; needs live GSC check |
| 10 | `en/services/data-recovery-makkah` | Discovered - currently not indexed | Not listed in this drilldown | Unknown from CSV; needs live GSC check |
| 11 | `en/services/data-recovery-saudi-arabia` | Discovered - currently not indexed | Listed as Crawled - currently not indexed, crawled 2026-06-30 | Not solved; crawl happened but indexing still failed |

Important: absence from this drilldown is **not proof of indexing**. A URL could be indexed, or it could still be in another GSC issue category such as **Discovered - currently not indexed**.

---

## DVR/NVR Status

| Page | Current status from available evidence | Decision |
|------|----------------------------------------|----------|
| `services/dvr-nvr-data-recovery` | Confirmed **not indexed** under Crawled - currently not indexed; last crawled 2026-07-01 | Still P0 |
| `en/services/dvr-nvr-data-recovery` | Not present in the new Crawled - not indexed drilldown | Cannot confirm; live URL Inspection required |

Conclusion: the DVR/NVR indexing problem is **not fully resolved**. Arabic DVR/NVR remains unindexed. English DVR/NVR must not be marked fixed until GSC URL Inspection confirms **URL is on Google**.

---

## New / Changed Coverage Issues

| Issue | 2026-06-20 | 2026-07-09 export | Assessment |
|-------|------------|-------------------|------------|
| Discovered - currently not indexed | 11 tracked Group B pages | Not covered by this export | Still requires live summary check |
| Crawled - currently not indexed | 0 tracked pages | 2 clean tracked URLs + 1 legacy `.html` URL | New visible problem category |
| Legacy `.html` URL exposure | Old `.html` URLs appeared under redirect exclusions in Plan 55 | `en/services/data-recovery-saudi-arabia.html` appears under Crawled - not indexed | Monitor; live redirect is correct, so do not request indexing for `.html` |
| Crawl access | Several P0 pages had no crawl data | Arabic DVR/NVR and EN Saudi Arabia now have crawl dates | Crawl improved, indexing did not |

No new local code-level error is proven by the CSV files. The clean URLs return 200 OK, and the legacy `.html` URL redirects correctly. The new risk is Google quality/indexing selection after crawl, not basic reachability.

---

## P0 / P1 Follow-up

### P0 from 2026-06-20

| P0 Item | Previous Status | New Evidence | Current Status |
|---------|-----------------|--------------|----------------|
| 11 Group B pages discovered but not indexed | Open | Only 2 of those 11 appear in the new Crawled - not indexed drilldown | Partially changed, not enough data to close |
| DVR/NVR AR + EN not indexed | Open | AR remains not indexed; EN unknown from CSV | Still open |
| `services/hdd-data-recovery` indexed but 0 impressions | Monitor until 2026-07-20 | Not covered by this export | Still monitor; requires Performance report, not Coverage drilldown |

### P1 from 2026-06-20

| P1 Item | New Evidence | Current Status |
|---------|--------------|----------------|
| CTR crisis on indexed pages | Not covered by Coverage drilldown | Still requires GSC Performance follow-up |
| Mobile page speed | Not covered | Still requires independent performance audit |
| Schema coverage beyond Breadcrumbs | Not covered | Still requires Rich Results / GSC Enhancements check |
| Sitemap processing errors for `about-lab` and `en/about-lab` | Not covered | Still requires live URL Inspection / sitemap status check |
| Arabic colloquial keyword intent | Not covered | Still on-page work item after indexing triage |
| Internal linking insufficiency | Partially informed: Google has now crawled at least 2 formerly discovered URLs | Not closed; missing full crawl/index status |

---

## Manual Indexing Recommendation

Yes, additional manual indexing work is still justified, but it should be split into **confirmed submissions** and **live-check-first submissions**.

### Submit / request indexing now for confirmed clean URLs

| Priority | Page | Reason |
|----------|------|--------|
| 1 | `services/dvr-nvr-data-recovery` | Confirmed crawled but not indexed; top P0 opportunity from Plan 55 and external report |
| 2 | `en/services/data-recovery-saudi-arabia` | Confirmed crawled but not indexed; clean tracked URL |

Do **not** submit `https://alfareslab.com/en/services/data-recovery-saudi-arabia.html`. It is a legacy URL and currently redirects to the clean URL.

### Inspect live first, then request indexing if not on Google

| Priority | Page | Why this needs live inspection |
|----------|------|--------------------------------|
| 3 | `en/services/dvr-nvr-data-recovery` | Previous P0, but absent from this drilldown; status unknown |
| 4 | `services/ransomware-data-recovery` | Previous priority #3; absent from this drilldown; status unknown |
| 5 | `services/ssd-nvme-data-recovery` | Previous priority #4; absent from this drilldown; status unknown |
| 6 | `services/flash-sd-data-recovery` | Previous priority #5; absent from this drilldown; status unknown |
| 7 | `services/data-recovery-makkah` | Previous priority #6; absent from this drilldown; status unknown |
| 8 | `en/services/ssd-nvme-data-recovery` | Previously one of the 11 discovered URLs; status unknown |
| 9 | `en/services/flash-sd-data-recovery` | Previously one of the 11 discovered URLs; status unknown |
| 10 | `en/services/ransomware-data-recovery` | Previously one of the 11 discovered URLs; status unknown |
| 11 | `en/services/data-recovery-makkah` | Previously one of the 11 discovered URLs; status unknown |

If GSC says any of these URLs are **URL is not on Google**, request indexing manually in this order.

---

## Required Live GSC Checks

The CSV files are not enough to close Plan 55 P0 items. These checks require live Google Search Console.

### 1. Page Indexing summary

Open Google Search Console for the domain property:

`https://search.google.com/search-console?resource_id=sc-domain:alfareslab.com`

Then check:

`Indexing` -> `Pages`

Record:

| Needed value | Why |
|--------------|-----|
| Current Indexed count | Required to answer current indexed vs non-indexed total |
| Current Not indexed count | Required to compare against 17/28 baseline |
| Current count for Discovered - currently not indexed | Required to know whether the old 11-page issue was fixed |
| Current count for Crawled - currently not indexed | Required to confirm whether the 3-URL drilldown is still current |

### 2. URL Inspection for mandatory pages

Use `URL Inspection` in GSC and paste these exact URLs:

| Priority | URL | Reason |
|----------|-----|--------|
| 1 | `https://alfareslab.com/services/dvr-nvr-data-recovery` | Confirm whether still not indexed after crawl |
| 2 | `https://alfareslab.com/en/services/dvr-nvr-data-recovery` | Cannot determine from CSV; P0 EN counterpart |
| 3 | `https://alfareslab.com/en/services/data-recovery-saudi-arabia` | Confirm clean URL status; appears in Crawled - not indexed |
| 4 | `https://alfareslab.com/services/ransomware-data-recovery` | Previous priority #3; status unknown |
| 5 | `https://alfareslab.com/services/ssd-nvme-data-recovery` | Previous priority #4; status unknown |
| 6 | `https://alfareslab.com/services/flash-sd-data-recovery` | Previous priority #5; status unknown |
| 7 | `https://alfareslab.com/services/data-recovery-makkah` | Previous priority #6; status unknown |

Optional but recommended after the first seven:

| URL |
|-----|
| `https://alfareslab.com/en/services/ssd-nvme-data-recovery` |
| `https://alfareslab.com/en/services/flash-sd-data-recovery` |
| `https://alfareslab.com/en/services/ransomware-data-recovery` |
| `https://alfareslab.com/en/services/data-recovery-makkah` |

### 3. Performance follow-up

Open:

`Performance` -> `Search results`

Check exact page filters for:

| Page | Why |
|------|-----|
| `https://alfareslab.com/services/hdd-data-recovery` | Plan 55 monitor item: indexed but 0 impressions |
| `https://alfareslab.com/services/dvr-nvr-data-recovery` | If indexed after request, verify impressions begin |
| `https://alfareslab.com/en/services/dvr-nvr-data-recovery` | Same for EN counterpart |

---

## Recommendation

Do not treat the 2026-06-30 GSC email as full closure until the live GSC Page Indexing summary confirms the current totals. The email likely reflects a real improvement, but the downloaded drilldown only proves a narrower state: **3 URLs are still in Crawled - currently not indexed**.

Immediate action should be:

1. Request indexing for `services/dvr-nvr-data-recovery`.
2. Request indexing for `en/services/data-recovery-saudi-arabia`.
3. Run live URL Inspection for `en/services/dvr-nvr-data-recovery` before marking DVR/NVR solved.
4. Re-check the remaining 9 previously discovered URLs through live GSC before deciding whether to bulk-submit more indexing requests.
5. Do not request indexing for any `.html` URL. Only clean canonical URLs should be submitted.

---

## Audit Conclusion

Plan 55 P0 is **not fully resolved** based on the available CSV evidence.

What improved:

- At least two previously not-indexed clean URLs are now crawled.
- Arabic DVR/NVR is no longer only "discovered"; Googlebot reached it on 2026-07-01.
- EN Saudi Arabia is also crawled as of 2026-06-30.

What remains open:

- Arabic DVR/NVR is still not indexed.
- English DVR/NVR status is unknown from the export and needs live URL Inspection.
- The current full indexed vs non-indexed count cannot be extracted from this single-issue drilldown.
- The remaining 9 pages from the old 11-page discovered list cannot be marked fixed without live GSC data.

---

## Ready Prompt For Next Phase

Use this prompt after the developer checks live GSC:

```text
Plan 56 live GSC follow-up:
Using the 2026-07-09 audit report at docs/indexing/06-audit-2026-07-09-coverage-followup.md, update the indexing decision based on live Google Search Console Page Indexing totals and URL Inspection results for the 11 previously discovered pages.

Do audit only first. Do not edit code. Compare live GSC results against Plan 55 and the 2026-07-09 CSV drilldown, then recommend whether Plan 56 should be manual indexing only, on-page quality fixes, internal linking fixes, or a combined SEO fix plan.
```

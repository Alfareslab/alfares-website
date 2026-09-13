# SEO & Indexing Master Playbook — alfareslab.com
> **Compiled:** 2026-07-10
> **Scope:** Every indexing/SEO-related plan and audit from project start (2026-05-01) through the present.
> **Purpose:** (1) the official record of how alfareslab.com's indexing problems were diagnosed and fixed, and (2) a standalone, reusable playbook for any future static-site project with similar indexing/SEO problems.
> **Governing principle in force:** `master-constitution.md` § 5.6 "Proven-Baseline Rule" — see the end of this document.

---

## 🩺 الروشتة — الخلاصة اللي المفروض تقراها الأول

> لو مشروع جديد فيه نفس النوع من مشاكل الفهرسة، دي الدروس الجاهزة من تجربة alfareslab.com:

1. **السبب الأشهر لعدم الفهرسة على أي static host بيعمل "Pretty URLs" (زي Cloudflare Pages):** لو الاستضافة بتعمل 308 redirect تلقائي من `.html` للرابط النظيف، لازم كل حاجة (`canonical`, `hreflang`, `og:url`, `sitemap.xml`, `Schema JSON-LD urls`) تتطابق مع الرابط اللي السيرفر فعلاً بيرجعه بـ 200 OK — مش الرابط اللي انت افتكرت إنه صح. **تحقق دايماً بـ `curl -I` على الرابطين، متفترضش.**
2. **فحص "canonical موجود ومتطابق مع الـ sitemap" مش كافي.** لو الاتنين غلط بنفس الطريقة (زي ما حصل هنا مرتين: Plan 49 و Plan 51) الفحص هيعدي "ناجح" وهو فعلياً باطل. المقياس الصحيح: قارن الملف مع سلوك السيرفر الحي.
3. **طلب الفهرسة اليدوي من GSC (Request Indexing) أضمن من انتظار الزحف عبر sitemap لوحده.** في هذا المشروع: طلب يدوي = 100% فهرسة، اعتماد على sitemap فقط = 56%. استخدمه بشكل استباقي للصفحات المهمة، مش كحل أخير.
4. **علامات التنصيص الذكية (smart/curly quotes `” “`) داخل أي HTML attribute كارثة صامتة.** المتصفحات ومحركات البحث بترفض تتعرف عليها كعلامة تحديد قيمة، فبتاخد كل حاجة كـ"قيمة غير محاطة" — ده بيكسر الروابط والـ CSS classes والـ i18n attributes في نفس الوقت، وبيظهر في GSC كـ 404 غريب الشكل. لو شفت رابط فيه علامات تنصيص حرفية جواه، دور فوراً على smart quotes في الكود المصدري، مش على باغ في السيرفر.
5. **لا تنسخ توصيات SEO من مشروع تاني بستاك مختلف من غير تحقق.** ملف استراتيجية موروث من مشروع Datacodex (Astro) كان بيوصي بإبقاء `.html` في الروابط — وده كان غلط تماماً لستاك alfareslab.com (HTML ساكن على Cloudflare Pages). كل توصية SEO لازم تتفحص ضد سلوك الاستضافة الفعلي الحالي.
6. **لما تثبت إن أغلبية الموقع اتفهرست، بلاش تلمس البنية التحتية المشتركة (sitemap/canonical/robots/hreflang/redirects) من غير دليل ملموس على مشكلة.** ركّز أي إصلاح على الصفحات المتأثرة فعلاً، وقارنها بنظيرتها المفهرسة قبل أي تعديل. (هذا الآن دستور رسمي — انظر القسم الأخير).

---

## 1. Timeline

| Date | Plan / Doc | What happened | Outcome |
|------|-----------|----------------|---------|
| 2026-05-01/02 | Plan 37, 42 | Site expanded from 1 page to a 14-page service architecture. Templates built, no indexing concerns yet. | ✅ Foundation work, no SEO issue introduced |
| 2026-05-02/03 | Plan 43 | Arabic content rollout to `services/*.html`. Hreflang deliberately left as placeholder comments — deferred to Plan 44 rather than half-implemented. | ✅ Good discipline — avoided a half-broken hreflang state |
| 2026-05-03 | Plan 44 | English rollout to `en/*.html`. Canonical + bidirectional hreflang activated on all 30 pages — **all using `.html` URLs**, because Cloudflare's "Pretty URLs" auto-redirect behavior was not yet known. | ⚠️ **This is the moment the canonical-mismatch bug was introduced.** Not detected for 15 more days. |
| 2026-05-03 | Plan 45 | Bug audit (read-only): found broken language toggle (`/en/en/` nested paths), AR/EN content freshness mismatches, inconsistent Services dropdown. | ✅ Correctly scoped as diagnosis-only before any fix |
| 2026-05-03/04 | Plan 46 (5 phases) | Fixed the language-toggle logic (derive language from URL path, not stale `localStorage`), reconciled the page inventory (found and later deleted deprecated duplicate slugs like `ssd-data-recovery.html` vs the approved `ssd-nvme-data-recovery.html`), repaired damaged pages via a validated pilot pattern. | ✅ Fixed real navigation bugs. Did not touch canonical/hreflang — out of scope for this plan |
| 2026-05-04 | Plan 49 (pre-launch SEO audit) | Phase 1 checked canonical/hreflang presence and `?lang=` absence only — **not** against actual server redirect behavior. Found real bugs: `404.html` missing canonical/hreflang entirely, duplicate hreflang block in `mac-data-recovery.html`, `service-page.js` never loaded on any page (dead code), several title/meta-length issues. | ❌ **Missed the canonical mismatch** — the check criterion couldn't have caught it (see Failed Attempts below) |
| 2026-05-05 | Plan 50 | Fixed Plan 49's findings: `404.html` got canonical/hreflang (still in `.html` format — needed re-fixing later), duplicate hreflang removed, meta/title lengths adjusted, footer cross-links added between trust pages, CSS tweaks. | ✅ Fixed the specific findings. Still didn't touch the `.html` canonical format itself |
| 2026-05-05 | Plan 51 (9-phase pre-launch audit v2) | Re-checked canonical/hreflang with the same flawed self-referential criterion (compare `sitemap.xml` to HTML — both were `.html`, so it "passed"). Found EN homepage service-detail links pointing to Arabic pages (real bug, fixed). **Flagged `en/index.html` footer's smart-quote markup as a 🟢 low-severity cosmetic note** — this is the same bug finally root-caused in Plan 57, 66 days later. | ⚠️ Missed the canonical mismatch again. Correctly found the smart-quote issue but classified it too low to act on |
| 2026-05-06 | Launch | Site deployed to Cloudflare Pages. | — |
| 2026-05-06 | `gsc-inspection-report.md` | Early GSC snapshot: 1/6 discovered pages indexed. Redirect/canonical issues noted but not yet root-caused. | Informational only |
| 2026-05-09 | `تقرير فحص SEO التقني...md` | An SEO check tested the **wrong hypothesis** — that URLs should use a trailing slash — and marked the site's actual (correct-in-hindsight) no-trailing-slash / no-`.html` direction as "failed" against that false premise. | ❌ **Failed attempt** — wrong requirement assumed, muddied the real diagnosis for over a week |
| 2026-05-11 | GSC email | Google reports 33 pages not indexed. | Triggered the real investigation |
| 2026-05-17 | `docs/Google_indexing/03-...` (9-phase browser-agent audit) | **Root cause found:** Cloudflare Pages "Pretty URLs" automatically 308-redirects every `.html` URL to the clean URL — a built-in, non-disableable behavior. But canonical/hreflang/sitemap on all 28 non-homepage pages still pointed to `.html`. Google saw a canonical pointing at a URL that immediately redirects elsewhere, and refused to index. Phase 9 of this audit retroactively reviewed Plans 44, 46, 48, 49, 50, 51, 52 and confirmed **none of them ever caught this**, despite two dedicated SEO audits explicitly checking canonical/hreflang. | ✅ Correct root cause, finally |
| 2026-05-18 | **Plan 54** (the centerpiece fix) | Stripped `.html` from canonical, hreflang (ar/en/x-default), `og:url`, `twitter:url`, and Schema JSON-LD `url`/`@id`/breadcrumb `item` fields across all 30 HTML files, plus `sitemap.xml` (`<loc>` and all `<xhtml:link>` entries). Removed a BOM character from `sitemap.xml`. Created `llms.txt`. Investigated the mysterious quoted 404 URL (`https://alfareslab.com/"`) but **could not find its source** — dismissed as "historical, no source found." Deployed, verified via `curl -I`, GSC URL Inspection, and Rich Results Test. Requested manual indexing for 3 pages (`services/hdd-data-recovery`, `about-lab`, `privacy-policy` — this became "Group A"). | ✅ **The fix that actually worked** |
| 2026-06-20 | **Plan 55** (5-phase audit) | Central question: did the manual indexing request (Group A, 3 pages) outperform sitemap-only discovery (Group B, 25 pages)? **Answer: Group A = 3/3 indexed (100%), Group B = 14/25 (56%)** — manual requests are more *reliable*, though not universally faster by crawl date. Cross-referenced an independent external SEO report — its indexing-specific findings were already fixed by Plan 54; its new angles (CTR, page speed, Google Business Profile, competitor positioning) were carried forward as real Plan 56 inputs. | ✅ Confirmed Plan 54's fix held, and clarified the next real bottleneck: crawl reliability, not canonical/technical SEO |
| ~2026-06-30 | Google email | Google confirms a large part of the site accepted for indexing (developer-reported). | ✅ Independent confirmation Plan 54 worked at scale |
| 2026-07-09 | `docs/indexing/06-...` (follow-up audit) | A new GSC CSV export turned out to be a **single-issue drilldown** ("Crawled - currently not indexed", 3 URLs only) — not a full indexing summary. Correctly flagged as insufficient evidence and recommended a live GSC check instead of trusting the narrow export. | ✅ Good instinct — avoided premature conclusions from partial data |
| 2026-07-09/10 | Live GSC "Page Indexing" report (`docs/Google_indexing/04-status_2026-07-09.md`) | Full picture: **26 indexed / 24 not-indexed across 50 GSC-tracked URLs** (the extra ~20 beyond the 30 real pages are old `.html`/`www`/`http` duplicates Google still tracks separately). Breakdown of the 24: 12 benign redirects, 2 benign `?lang=` canonical duplicates, 5 malformed-URL 404s (see next row), 3 "crawled - not indexed", 2 "discovered - not indexed". **Real actionable count: 4 pages**, not the "11 pages" the team had assumed from the June snapshot. `en/services/dvr-nvr-data-recovery` — the project's top P0 concern since Plan 55 — turned out to already be indexed since 2026-06-22. | ✅ Confirmed Plan 54 + Plan 55's manual-request strategy had already resolved almost everything |
| 2026-07-10 | Root cause of the 5 malformed-URL 404s, finally found | `en/index.html`'s footer section (lines ~916–983) uses smart/curly typographic quotes (`” “`) instead of straight ASCII quotes (`"`) in ~43 HTML attributes (`class`, `href`, `data-i18n`, `src`, `alt`...). Browsers do not recognize `”` as a quote delimiter, so `href=”en/services/hdd-data-recovery.html”` is parsed as an **unquoted** attribute whose literal value includes the curly-quote characters. Combined with `<base href="../">`, this resolves to exactly the malformed URLs GSC had been reporting since at least 2026-05-17 (and had been noted, but dismissed, in Plan 51 and investigated-but-not-found in Plan 54). Confirmed via grep across all 101 HTML files in the repo plus the pre-Plan-54 `sitemap.xml`: the corruption is confined to this one file. | ✅ Real bug found — breaks real footer links, CSS classing, and i18n for actual English-site visitors, not just an SEO curiosity |
| 2026-07-10 | Manual indexing requests submitted | Developer submitted manual GSC indexing requests for the 4 remaining real gaps: `services/dvr-nvr-data-recovery`, `en/services/data-recovery-saudi-arabia`, `en/services/ssd-nvme-data-recovery`, `en/services/flash-sd-data-recovery`. | ✅ Following the Group-A-beats-Group-B lesson from Plan 55 |
| 2026-07-10 | **Plan 57** drafted | Fix for the smart-quote corruption, scoped to one file, mechanical straight-quote substitution. **Status: awaiting developer approval — not yet executed.** | 🟡 Pending |
| 2026-07-10 | `master-constitution.md` § 5.6 adopted | "Proven-Baseline Rule" — see final section. | ✅ Governing principle going forward |

---

## 2. Failed Attempts / Dead Ends

These are documented specifically so nobody re-tries them or re-trusts a source that already proved wrong.

| # | What was tried / believed | Why it failed | Where it was corrected |
|---|---------------------------|----------------|-------------------------|
| 1 | `docs/SEO_Indexing_and_Publishing_Strategy.md` (inherited from the sister Datacodex/Astro project) recommended **keeping `.html` in URLs** to avoid a redirect loop. | This was written for a different stack (Astro, build step) and never validated against Cloudflare Pages' actual "Pretty URLs" behavior on this static site. It was the exact opposite of the real fix. | Superseded by Plan 54 (2026-05-18). Treat this file as historical/cautionary only — do not follow its URL guidance for this project. |
| 2 | Plan 49 and Plan 51's canonical/hreflang audit criterion: "canonical exists, has no `?lang=`, and matches `sitemap.xml`." | Both files used `.html` consistently, so comparing one wrong source to another wrong source produced a false "pass." Neither audit ever checked the canonical URL against what the live server actually returns via HTTP. | Only caught by the 2026-05-17 9-phase audit, which explicitly did `curl`/HTTP-status checks instead of file-to-file comparison. |
| 3 | `تقرير فحص SEO التقني لموقع alfareslab.com.md` (2026-05-09) assumed the site *should* use trailing-slash URLs and marked the actual correct direction (no trailing slash, eventually no `.html`) as "failed." | Wrong requirement assumed before testing; the report conflated the trailing-slash question with the `.html`-extension question, which are separate. | The real answer (no `.html`, no trailing slash except homepage) was established by the 2026-05-17 audit and locked in by Plan 54. |
| 4 | The mysterious quoted URL `https://alfareslab.com/"` was investigated in Plan 54 (2026-05-18) by grepping HTML source and `main.js` for literal `"` characters. | The bug is smart/curly Unicode quote characters (`” “`, U+201C/U+201D), not the ASCII `"` character searched for — so the grep found nothing, and the issue was dismissed as "historical, no source found." | Root-caused 2026-07-10 by actually reading `en/index.html`'s footer source by eye and noticing the visually-similar-but-different quote characters. |
| 5 | Plan 51 (2026-05-05) found the same smart-quote footer markup and logged it as a 🟢 low/cosmetic issue ("minor structural inconsistency"). | The real-world impact (broken hrefs, broken CSS classes, broken i18n keys) was not connected to the visual quote-style observation at the time. | Escalated to a confirmed P0 bug on 2026-07-10 once its effect on live GSC 404s and real footer links was traced. |
| 6 | Relying on `sitemap.xml` resubmission alone to get Group B's 25 pages indexed (2026-05-18 onward). | Only produced 56% indexing (14/25) after 33+ days, vs. 100% for the 3 manually-requested Group A pages. | Diagnosed in Plan 55 (2026-06-20); the lesson was applied proactively on 2026-07-10 for the next 4 unindexed pages. |
| 7 | Treating the 2026-07-09 single-issue CSV export ("Crawled - not indexed", 3 URLs) as a full indexing status report. | It only covered one GSC coverage category; 20+ other tracked URLs and categories were invisible in that export. | Caught immediately in `docs/indexing/06-...` before any wrong conclusion was drawn — a rare case of a near-miss that was avoided rather than a full dead end. |

---

## 3. Root Cause Deep Dive — The Canonical/`.html` Mismatch (Plan 54)

**What Cloudflare Pages does automatically:** its "Pretty URLs" feature strips the `.html` extension from any served path and issues a `308 Permanent Redirect` from `/page.html` to `/page`. This cannot be disabled via dashboard or config — it is a built-in platform behavior.

**Why that broke indexing:** every non-homepage page's `<link rel="canonical">`, `<link rel="alternate" hreflang="...">`, `og:url`, `twitter:url`, and `sitemap.xml` entries all pointed to the `.html` form. When Googlebot fetched a page, it saw a canonical tag declaring "the authoritative URL for this content is `/page.html`" — but requesting `/page.html` immediately 308-redirects elsewhere. Google interprets a canonical that points to a redirecting URL as a signal not to index the page under that canonical, and with no consistent alternative signal, it simply declined to index most of the 28 affected pages.

**The homepage was unaffected** because its canonical was already `/` (no `.html` to begin with) — which is exactly why early GSC snapshots showed the homepage indexed while everything else wasn't, and why nobody suspected a canonical problem until the dedicated 9-phase audit checked HTTP behavior directly.

**The fix (Plan 54, 2026-05-18):** remove `.html` from canonical, hreflang (all three: `ar`, `en`, `x-default`), `og:url`, `twitter:url`, and every JSON-LD `url`/`@id`/`item` field referencing a page URL, across all 30 HTML files, plus rewrite `sitemap.xml`'s `<loc>` and `<xhtml:link>` entries to match. Verified post-deploy with `curl -I` (confirms 308→200 chain) and GSC's "Test Live URL."

---

## 4. Current State (as of 2026-07-10)

- 26 of 30 core pages confirmed indexed via live GSC data.
- 4 pages have manual indexing requests submitted and pending Google's processing: `services/dvr-nvr-data-recovery`, `en/services/data-recovery-saudi-arabia`, `en/services/ssd-nvme-data-recovery`, `en/services/flash-sd-data-recovery`.
- A confirmed, scoped bug remains unfixed pending approval: smart-quote corruption in `en/index.html`'s footer (Plan 57).
- Broader SEO/growth work (CTR optimization, page speed, Schema depth beyond Breadcrumbs, Google Business Profile, colloquial keyword coverage) remains open under the still-unwritten Plan 56.
- The team is explicitly operating under a "don't touch what's proven" governance rule — see below.

---

## 5. Generic Playbook For Future Projects

A checklist derived from this project's actual evidence, usable for any future static-site indexing problem:

1. **Before trusting any canonical/hreflang/sitemap audit, verify against live HTTP behavior**, not just internal file consistency. Run `curl -I` on both the "clean" and "raw" forms of a URL and confirm which one the host actually serves with `200 OK`. Two files agreeing with each other is not evidence they're correct.
2. **Know your host's URL-rewriting behavior before writing any canonical/hreflang/sitemap logic.** Platforms like Cloudflare Pages, Netlify, and Vercel often have automatic, non-disableable URL normalization (trailing slash, `.html` stripping, etc.). Confirm this first — don't assume based on a different platform or a generic SEO checklist.
3. **Don't import SEO strategy documents from a sister project on a different stack without re-validating every URL-format recommendation against the current host.**
4. **Manual "Request Indexing" in GSC is a reliable lever, not just a courtesy step.** For any page that must be indexed on a deadline, request it directly rather than waiting on sitemap-driven discovery, which can leave a meaningful fraction of pages undiscovered for a month or more.
5. **Treat single-issue GSC exports (single coverage category drilldowns) as partial evidence.** Always cross-check against the full "Page Indexing" summary before declaring a problem solved or still-open.
6. **If a URL reported by Google contains stray literal punctuation (quotes, unmatched brackets, encoded characters) that shouldn't be part of a real path, suspect smart/typographic character corruption in the source HTML** (curly quotes, em-dashes typed where a hyphen was needed, etc.) before assuming a server-side or crawler-side artifact. Grep for the literal ASCII character will miss this — you have to check for the Unicode look-alikes or read the source directly.
7. **A "cosmetic" quote-style inconsistency in HTML is not automatically low severity.** If the inconsistency involves the actual quote characters delimiting an attribute, it can silently break links, CSS class matching, and any `data-*` attribute the JS reads — verify the practical parsing impact before downgrading its priority.
8. **Once a majority of a site's pages are confirmed indexed, treat the shared infrastructure (sitemap, canonical, robots.txt, hreflang, redirects) as validated.** Scope further indexing work to a comparative diagnosis of the specific unindexed pages against an already-indexed sibling (title/description uniqueness, canonical target, hreflang count, content length, internal link count) rather than a sitewide "clean everything" pass, which risks breaking pages Google has already accepted.

---

## 6. Governing Principle Now In Force

`master-constitution.md` § 5.6 — **Proven-Baseline Rule** (adopted 2026-07-09, formalized 2026-07-10):

> Once a majority of pages are confirmed indexed by Google, the shared infrastructure behind them (`sitemap.xml`, canonical tags, `robots.txt`, hreflang, host redirects) is proven to work. Do not modify it without concrete evidence of a problem. Indexing problems are solved by fixing the specific unindexed/broken pages, never by a sitewide "clean everything" pass. Before touching any unindexed page, compare it against an already-indexed sibling page across title/description uniqueness, canonical target, hreflang count, content length, and internal link count — only act on a difference actually found. If a fix is needed, scope it to the specific page(s) or the specific proven bug — never as a side effect of a broader pass.

This is the direct project-specific expression of the Fix Rules golden rule: **أصغر تغيير يحل المشكلة، لا أكثر.**

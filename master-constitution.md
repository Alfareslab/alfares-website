# 📜 Master Constitution — Al-Fares Lab Website
> **Version:** 1.2.2
> **Created:** 2026-05-01
> **Domain:** alfareslab.com
> **Project:** Alfareslab_2026

---

## 1. Project Identity

| Property | Value |
|----------|-------|
| **Project Name** | Al-Fares Lab Website |
| **Domain** | `alfareslab.com` |
| **Hosting** | Cloudflare Pages |
| **Type** | Static bilingual website (AR + EN) |
| **Industry** | Data Recovery Services — Jeddah, Saudi Arabia |
| **Version** | v1.2.4 |
| **Sister Project** | Datacodex (`datacodexlab.com`) — cross-reference only, no dependency |

---

## 2. Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| HTML5 | — | Page structure and semantic markup |
| CSS3 | — | Styling (split: base, components, layout, hero-slider) |
| Vanilla JavaScript | ES6+ | Interactivity, language toggle, theme toggle |
| JSON | — | Translation files (`lang/ar.json`, `lang/en.json`) |
| JSON-LD | — | Structured data / Schema.org markup |

### Third-Party Libraries

| Library | Version | Purpose | CDN/Local |
|---------|---------|---------|-----------|
| Swiper.js | Bundle (min) | Hero slider carousel | Local (`assets/vendor/swiper/`) |
| Google Fonts | — | Typography (loaded via CSS) | CDN |

### Deployment

| Service | Purpose |
|---------|---------|
| Cloudflare Pages | Static site hosting |
| Cloudflare DNS | Domain management + SSL |
| Google Search Console | Search monitoring |
| Google Analytics 4 | Traffic analytics |

> ⚠️ **No build step required.** This is a pure static site — files are deployed as-is.
> No npm, no bundler, no framework. If a build tool is ever needed, it requires explicit developer approval.

---

## 3. Bilingual Content Policy

### Rule: Every page MUST be bilingual (AR + EN)

| Aspect | Arabic | English |
|--------|--------|---------|
| **Translation files** | `lang/ar.json` | `lang/en.json` |
| **Default language** | Arabic (RTL) | — |
| **Content approach** | Original content | Localized (NOT literal translation) |
| **SEO keywords** | Arabic keywords from research | English keywords from research |
| **Meta tags** | Arabic title + description | English title + description |

### Translation Key Naming Convention

```
section.subsection.elementName
```

Example:
```json
{
  "services.hdd.title": "استعادة بيانات الهارد ديسك",
  "services.hdd.metaDescription": "مركز الفارس المتخصص في استعادة بيانات الهارد ديسك في جدة"
}
```

---

## 4. File Organization Rules

### Directory Structure

```
Alfareslab_2026/
├── master-constitution.md          ← This file
├── project-key.md                  ← File index
├── project-context.md              ← Living memory
├── changelog.md                    ← Version history
├── index.html                      ← Homepage
├── 404.html                        ← Error page
├── services/                       ← Service landing pages (Plan 37)
│   └── [slug].html
├── assets/
│   ├── css/                        ← Stylesheets
│   ├── js/                         ← Scripts
│   ├── images/                     ← Images
│   └── vendor/                     ← Third-party (Swiper)
├── lang/                           ← Translation files
│   ├── ar.json
│   └── en.json
├── seo/                            ← Structured data
│   └── structured-data.json
├── docs/                           ← Technical documentation
├── plans/                          ← Execution plans
├── reviews/                        ← Review decisions
├── sitemap.xml
├── robots.txt
├── manifest.json
└── _headers                        ← Cloudflare headers
```

### File Naming Convention

| Type | Convention | Example |
|------|-----------|---------|
| Service pages | `kebab-case.html` | `hdd-data-recovery.html` |
| CSS files | `kebab-case.css` | `hero-slider.css` |
| JS files | `kebab-case.js` | `hero-slider.js` |
| Documentation | `UPPER_CASE.md` or `kebab-case.md` | `ARCHITECTURE_v1.0.md` |

---

## 5. SEO & Indexing Policy (Rule 8)

### 5.1 Canonical URL Rules

| Rule | Details |
|------|---------|
| Protocol | HTTPS only — HTTP redirects to HTTPS |
| WWW | `alfareslab.com` (non-www) — www redirects |
| Trailing slash | Consistent per page type |
| Canonical tag | Every page MUST have `<link rel="canonical">` |

### 5.2 Schema.org Requirements

Every service page MUST include:

| Schema Type | Required Fields |
|-------------|----------------|
| `Service` | name, description, provider, areaServed, url |
| `FAQPage` | mainEntity (3-5 questions minimum) |
| `BreadcrumbList` | Home > Services > [Service Name] |
| `LocalBusiness` | Only on homepage (ComputerStore type) |

### 5.3 Structured Data Rules

| Rule | Details |
|------|---------|
| `AggregateRating` | ❌ NEVER hardcode — Google pulls from GBP automatically |
| `@id` references | Use `https://alfareslab.com/#organization` |
| `parentOrganization` | Reference Datacodex via `@id` (not inline) |
| JSON-LD | Preferred over Microdata |

### 5.4 Google Indexing Checklist (per page)

```
✅ Unique <title> tag (50-60 characters, includes primary keyword)
✅ Unique <meta description> (150-160 characters, includes CTA)
✅ Single <h1> per page (includes service name + "جدة"/"Jeddah")
✅ Canonical tag pointing to self
✅ Open Graph tags (og:title, og:description, og:image)
✅ hreflang tags if applicable
✅ Page listed in sitemap.xml
✅ No duplicate content across pages
✅ All images have alt text (bilingual)
✅ Internal links to related pages
```

### 5.5 Sitemap Rules

| Rule | Details |
|------|---------|
| Format | XML sitemap at `/sitemap.xml` |
| Auto-update | Manual — update when adding/removing pages |
| Submission | Submit to Google Search Console after changes |
| IndexNow | Ping Cloudflare/Bing IndexNow on deploy if available |

### 5.6 Proven-Baseline Rule (Indexing Stability)

> Established 2026-07-09, after live GSC data confirmed 26 of 30 core pages indexed.

| Principle | Rule |
|-----------|------|
| Proven infrastructure | Once a majority of pages are confirmed indexed by Google, the shared infrastructure behind them (`sitemap.xml`, canonical tags, `robots.txt`, hreflang, Cloudflare redirects) is proven to work. Do not modify it without concrete evidence of a problem. |
| No blanket cleanup | Indexing problems are solved by fixing the specific unindexed/broken pages, never by a sitewide "clean everything" pass — that risks breaking pages Google has already accepted. |
| Comparative diagnosis first | Before touching any unindexed page, compare it against an already-indexed sibling page (same language, same page type) across: title/description uniqueness, canonical target, hreflang count, content length, and internal link count. Only act on a difference actually found. |
| Targeted fix only | If a fix is needed, scope it to the specific page(s) or the specific proven bug — never as a side effect of a broader pass. This is the SEO-specific expression of the Fix Rules golden rule: "أصغر تغيير يحل المشكلة، لا أكثر" ([[03-fix-rules]]). |

### 5.7 Audit Verification Rule

> Established 2026-07-10, after two separate pre-launch audits (Plan 49, Plan 51) both checked canonical/hreflang by comparing HTML to `sitemap.xml` and passed — while both sources shared the same undetected `.html`-vs-clean-URL mismatch that blocked indexing for 15+ days until Plan 54.

Any audit of canonical, hreflang, or sitemap correctness MUST verify against the live server's actual HTTP behavior (e.g. `curl -I` on both the raw and clean forms of a URL, or GSC's "Test Live URL") — not only by comparing one project file to another. File-to-file comparison can pass even when both files encode the same wrong assumption about what the host actually serves.

### 5.8 Manual Indexing Preference

> Established 2026-07-10, based on Plan 55's data: manually-requested pages reached 100% indexing (3/3) vs. 56% (14/25) for sitemap-only discovery over the same 33+ day period.

For any page where indexing matters on a deadline (new priority service page, a page fixed after being unindexed, etc.), submit a manual "Request Indexing" via Google Search Console URL Inspection rather than relying on sitemap resubmission alone. Sitemap-only discovery remains correct as the baseline mechanism, but manual requests should be the default for priority pages, not a last resort.

---

## 6. Service Page Template Requirements

Every service page MUST contain:

```
✅ Bilingual title + meta description (keyword-targeted)
✅ Single H1: service name + "جدة" / "Jeddah"
✅ Symptoms section (what the client sees)
✅ Diagnosis section (how we handle it)
✅ Tools section (PC-3000, Clean Room if applicable)
✅ FAQ section (3-5 questions) with FAQPage Schema
✅ Service Schema (JSON-LD)
✅ WhatsApp CTA button (+966507322542)
✅ Cross-link to related Datacodex article
✅ Breadcrumb: Home > Services > [Service Name]
✅ Same Header/Footer/CSS/Theme Toggle/Lang Toggle from index.html
```

---

## 7. Code Style

| Context | Style | Example |
|---------|-------|---------|
| CSS classes | kebab-case | `.service-card` |
| JS functions | camelCase | `toggleLanguage()` |
| JS constants | UPPER_SNAKE_CASE | `MAX_SLIDES` |
| HTML IDs | kebab-case | `#hdd-recovery-section` |
| Translation keys | dot.notation.camelCase | `services.hdd.title` |

### 7.1 No Smart/Curly Quotes in Source Code

> Established 2026-07-10, after smart quotes (`”` `“`, Unicode U+201D/U+201C) inside `en/index.html`'s footer HTML attributes silently broke 43 attributes — browsers don't recognize them as quote delimiters, so `href`, `class`, and `data-i18n` values were parsed as literal garbage, breaking real links, CSS classing, and translation keys. The bug went undiagnosed for over two months (first seen as "cosmetic" in Plan 51, investigated-but-missed in Plan 54).

Every HTML/CSS/JS file MUST use straight ASCII quotes (`"` / `'`) only — never typographic/smart quotes — for any attribute value, string literal, or code syntax. Smart quotes are only acceptable inside translation *content* text in `lang/ar.json` / `lang/en.json` where they render as visible punctuation, never in markup or code structure. If pasting content from a word processor or chat tool, check for and strip smart quotes before committing.

---

## 8. Relationship with Datacodex

| Aspect | Rule |
|--------|------|
| **Dependency** | NONE — fully independent projects |
| **Cross-linking** | Service pages link to Datacodex articles (educational) |
| **Schema linking** | `parentOrganization` references Datacodex via `@id` |
| **Shared assets** | NONE — each project has its own assets |
| **Shared hosting** | Same Cloudflare account, different Pages projects |
| **Shared analytics** | Separate GA4 + GSC properties |
| **Inherited strategy docs** | Any SEO/technical strategy document inherited from Datacodex MUST be re-validated against alfareslab.com's own host and stack before being followed — `docs/SEO_Indexing_and_Publishing_Strategy.md` recommended keeping `.html` in URLs, which was correct for Datacodex's Astro build but proved to be the exact opposite of the correct fix for alfareslab.com's Cloudflare Pages static hosting (see Plan 54). |

---

## 9. Semantic Versioning

| Format | When to bump |
|--------|-------------|
| **MAJOR** (X.0.0) | Complete redesign or architecture change |
| **MINOR** (0.X.0) | New pages, new features, significant content additions |
| **PATCH** (0.0.X) | Bug fixes, content tweaks, SEO adjustments |

> Current version: **v1.2.4**
> Next planned version: **v1.2.4** (Maintenance and UI Audit)

---

## 10. Documentation Protocol

### After every task, update these 3 files:

| File | What to update |
|------|---------------|
| `project-context.md` | Current state, known issues, active plans |
| `project-key.md` | File index if files added/removed |
| `changelog.md` | Version entry with changes |

---

## 📚 References

| File | Purpose |
|------|---------|
| `project-key.md` | File index and structure |
| `project-context.md` | Living project memory |
| `changelog.md` | Version history |
| `plans/37-alfares-service-pages.md` | Current active plan |
| `plans/38-notebooklm-service-pages-prompts.md` | Content production prompts |

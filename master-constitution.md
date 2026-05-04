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
| **Version** | v1.2.2 |
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

---

## 9. Semantic Versioning

| Format | When to bump |
|--------|-------------|
| **MAJOR** (X.0.0) | Complete redesign or architecture change |
| **MINOR** (0.X.0) | New pages, new features, significant content additions |
| **PATCH** (0.0.X) | Bug fixes, content tweaks, SEO adjustments |

> Current version: **v1.0.2**
> Next planned version: **v1.1.0** (Plan 37 — service pages expansion)

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

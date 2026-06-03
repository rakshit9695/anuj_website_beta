# 10 — TECHNICAL · SEO · PERFORMANCE · ANALYTICS · LEGAL

> The non-visual foundation that makes the site rank, perform, and stay compliant. Apply across the build; do a dedicated pass in the final phase.

---

## 1. SEO — METADATA & STRUCTURE
- **Per-page metadata** via Next.js Metadata API: unique `<title>` (templated, e.g. `"{Service} in Mumbai | Anuj Desai & Associates"`), meta description, **canonical URL** on every page (no duplicate content).
- **Open Graph + Twitter Card** tags on every page; per-article OG images (`twitter:card = summary_large_image`). Provide a default OG image + per-content override from frontmatter.
- `robots` meta sensible defaults; `max-image-preview:large` for rich image results.
- **Geo-targeting** meta where relevant (geo.placename: Mumbai, geo.region: IN-MH, ICBM coords) for the Mumbai/India local-SEO angle; per-office where useful.
- `lang="en"` on `<html>`; semantic headings (one H1/page, logical H2/H3).
- **Sitemaps:** generate `app/sitemap.ts` (XML) covering all routes (services, industries, insights, knowledge-bank, etc.) and a human-readable `/sitemap` page. `robots.ts` references the XML sitemap; disallow `/_kit`, `/search`, API routes.

## 2. STRUCTURED DATA (JSON-LD) — reusable components
- **Organization** + **LocalBusiness** (accounting firm) sitewide (name, logo, offices, phone, sameAs socials) — placeholder data.
- **Service** on practice/service pages.
- **FAQPage** wherever FAQ accordions render (practice hubs, service & industry pages).
- **Article** on blog/alerts/case-studies/whitepapers (author, datePublished, image).
- **BreadcrumbList** on every page below top level.
- **Person** on team profiles. **JobPosting** on career openings. **Event** on events (optional).
- Build a small `<JsonLd>` helper + typed builders; never hand-write per page.

## 3. PERFORMANCE (target Lighthouse ≥ 90)
- `next/image` everywhere (WebP/AVIF, explicit dimensions, lazy below-fold, priority only on hero).
- `next/font` with `display: swap`; preload the two families; subset where possible.
- Code-split heavy widgets: calculators, maps, carousels, charts, YouTube embeds (lazy "click-to-load" facade for YouTube — no heavy iframe on load).
- Avoid layout shift (reserve space for media/ads/embeds); minimise client JS on content pages (prefer Server Components; make only interactive islands client).
- Cache static content; ISR/SSG for content pages; dynamic only where needed (forms, search).
- Ship a CDN-friendly build; compress assets. No render-blocking third-party scripts before consent.

## 4. ANALYTICS & TAGGING (consent-gated)
- **Google Analytics 4 + Google Tag Manager** container (placeholder IDs via env). **Load only after cookie consent.**
- Slots (config/env, placeholder) for **Meta Pixel** and **LinkedIn Insight Tag** (retargeting) — also consent-gated.
- **Google Search Console + Bing Webmaster** verification meta tags (env placeholders).
- **Conversion events**: fire on form submit success (consultation, lead-magnet, newsletter, event, career), calculator "email result", WhatsApp/phone click, brochure/PDF download. Centralise in a small `track()` util that no-ops before consent.

## 5. ACCESSIBILITY (WCAG 2.1 AA) — verify in final pass
- Landmarks (`header/nav/main/footer`), skip-to-content link, logical heading order.
- Keyboard operability for mega-menu, country selector, search overlay, mobile drawer, carousels, accordions, tabs, dialogs, calculators. Visible focus (brass ring). Focus management on dialog/menu open/close.
- `aria-label` on icon-only buttons (WhatsApp, search, social, hamburger); `alt` text on meaningful images (empty alt on decorative).
- Color contrast ≥ 4.5:1 (use brass-600 for small accent text). Don't convey meaning by color alone (alert categories also carry a label).
- Respect `prefers-reduced-motion` (disable counters/marquee/transform animations, show end states).
- Forms: associated labels, error messaging tied via `aria-describedby`, required fields announced.

## 6. LEGAL & COMPLIANCE PAGES
- **Privacy Policy**, **Terms & Conditions**, **Cookie Policy**, **Disclaimer** — four pages, real structure, placeholder firm-specific clauses for legal review (`CLIENT_TODO`). India **DPDP Act**-aware privacy content + a standard professional-services disclaimer.
- **Cookie consent banner** (GDPR/DPDP-style): accept / reject / preferences; categories (necessary/analytics/marketing); blocks GA/GTM/pixels until consent; persists choice; re-open via footer "Cookie settings". Use a lightweight in-house banner or a config-flagged CMP slot (OneTrust/Cookiebot) — default to the in-house one.
- **ICAI note**: in `BUILD_NOTES.md`, restate that testimonials, client logos/names, comparative/superlative claims, rankings, and aggressive solicitation CTAs must be reviewed against the **ICAI Code of Ethics / advertising guidelines** before going live; all such modules are behind config flags so the firm can disable them centrally.

## 7. SECURITY & HEADERS
- HTTPS/HSTS (deployment), sensible security headers (CSP allowing required embeds/analytics, `X-Content-Type-Options`, `Referrer-Policy`, frame-ancestors). Sanitise any user-rendered content. Validate/limit file uploads (career resumes).

## 8. INTERNAL LINKING & CONTENT SEO (cross-cutting)
- Footer SEO quick-links to all 18 practice hubs + key industries (`02 §5`).
- Each service/industry page links to ≥5 related pages; each article links to its practice + related articles (`05`, `07`).
- Contextual links between services and Knowledge Bank tools/forms/rates (`08`).
- Descriptive, keyword-aware (not stuffed) titles/H1s; clean slugs; breadcrumb everywhere.

## 9. DELIVERABLES CHECK (technical)
- [ ] `sitemap.xml` + `robots.txt` + `/sitemap` page.
- [ ] JSON-LD on all relevant page types, validates.
- [ ] Canonical + OG/Twitter on every page; default + per-article OG images.
- [ ] GA4/GTM + pixel slots, consent-gated; verification metas.
- [ ] Cookie banner blocks tags pre-consent; legal pages present.
- [ ] Lighthouse ≥ 90 (Perf/A11y/Best-Practices/SEO) on Home, a service page, a blog page.
- [ ] Keyboard + reduced-motion + contrast verified.
- [ ] `BUILD_NOTES.md` (ICAI + provider-swap + content-authoring notes) and `CLIENT_TODO.md` complete.

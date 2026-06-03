# 02 — INFORMATION ARCHITECTURE & NAVIGATION

> Defines the full route map, the global header/footer/chrome, and the navigation behaviours. Build this in phase 3 (after the design kit). All nav data comes from a typed `nav.ts` config so links never drift from routes.

---

## 1. PRIMARY NAVIGATION (top-level)

`Home · About Us · Services · Industries · Global Presence · Insights · Knowledge Bank · Media · Careers · Contact`

Keep top-level to these. "Services" and "Industries" open mega-menus; others may be simple links or small dropdowns.

---

## 2. ROUTE MAP / SITEMAP

Use App Router segments. Slugs are kebab-case. Practice-area and industry slugs come from `03_CONTENT_DATA.md`.

```
/                                  Home
/about                             About hub (Our Firm)
  /about/our-story
  /about/our-journey               (timeline)
  /about/mission-vision-values
  /about/the-ada-way               (approach)
  /about/team                      (grid)
  /about/team/[slug]               (individual profile)
  /about/awards                    (awards & accolades)
  /about/credentials               (ISO / empanelment / ICAI peer review)
  /about/code-of-ethics
  /about/csr                       (CSR / foundation / sustainability)

/services                          Services landing (all 18 practices)
  /services/[practice]             Practice-area hub (×18)
  /services/[practice]/[service]   Individual service page (selected key services)

/industries                        Industries landing (25)
  /industries/[industry]           Industry landing (×25)

/global                            Global Presence hub
  /global/india                    (12-city map)
  /global/usa  /global/uk  /global/uae  /global/singapore
  /global/gift-city
  /global/desks/[desk]             International desks: korea, japan, north-america, europe, middle-east
  /global/network                  (associate/alliance network)
  /global/india-entry              (India entry/setup for foreign cos)

/insights                          Knowledge Centre hub
  /insights/thought-leadership
  /insights/whitepapers
  /insights/alerts                 (all alerts; filter by category)
  /insights/alerts/[slug]
  /insights/budget                 (Budget microsite landing)
  /insights/budget/2026-27
  /insights/blog
  /insights/blog/[slug]
  /insights/webinars
  /insights/podcasts
  /insights/events                 (upcoming + registration)
  /insights/surveys
  /insights/newsletters            (subscribe + archive by topic)
  /insights/case-studies
  /insights/case-studies/[slug]

/knowledge-bank                    Knowledge Bank hub
  /knowledge-bank/calculators
  /knowledge-bank/calculators/[slug]
  /knowledge-bank/rates            (TDS/IT/GST/CII charts & utilities)
  /knowledge-bank/rates/[slug]
  /knowledge-bank/acts
  /knowledge-bank/rules
  /knowledge-bank/forms
  /knowledge-bank/bulletins        (RBI-SEBI/GST/IT/FEMA/IBC/Labour streams)
  /knowledge-bank/important-dates  (compliance calendar)
  /knowledge-bank/quick-links

/media                             In the news / press / videos / events
  /media/news  /media/press-releases  /media/videos

/careers                           Careers hub (Life at ADA)
  /careers/openings  /careers/openings/[slug]
  /careers/articleship
  /careers/why-join
  /careers/alumni

/contact                           Contact (offices, forms, maps)

/legal/privacy  /legal/terms  /legal/cookie-policy  /legal/disclaimer
/sitemap        (human HTML sitemap)
/search         (search results)
/_kit           (hidden component QA page — noindex)
404 / not-found
```

Generate `app/sitemap.ts` (XML) and `robots.ts` covering all of the above except `/_kit` and `/search`.

---

## 3. GLOBAL HEADER (3 layers)

### Layer A — Utility bar (thin, above main nav)
- Left: clickable phone (`tel:` — placeholder), email (`mailto:` with prefilled subject — placeholder), WhatsApp link (prefilled message — placeholder).
- Right: Social icons (LinkedIn, Instagram, X/Twitter, YouTube, Facebook — links from data), and a small "Client Login" link (stub).
- Navy-950 background, small paper text. Hidden on small mobile (info moves into drawer).

### Layer B — Main nav (sticky)
- Left: ADA **logo** (placeholder wordmark "Anuj Desai & Associates" with "CA · CS · CMA" microline).
- Center/right: primary nav links. **Services** and **Industries** trigger mega-menus on hover (desktop) and tap (touch).
- Right cluster: **search icon** (opens overlay), **Country Selector** dropdown (India 🇮🇳 / Singapore / UAE — flags + labels), and a **brass primary "Book Consultation"** button.
- Behaviour: transparent over hero variants, transitions to solid `--surface` with shadow + condensed height on scroll. Always visible (sticky). 
- Include a visually-hidden **"Skip to content"** link as the first focusable element.

### Layer C — Mega-menus
**Services mega-menu** (3-level): a wide panel. Left/main area = the 18 practice areas grouped into clusters (e.g. *Assurance · Tax · Regulatory & Cross-Border · Transactions & Capital · Advisory & Outsourcing · Sector & Specialist*). Hovering a practice reveals its key sub-services in an adjacent column. Right rail = a promoted feature tile (e.g. "Budget 2026 Analysis →" or "Free Tax Health Check"). Each practice links to its hub.

**Industries mega-menu:** a multi-column grid of all 25 industries with small icons; right rail promotes a featured industry (e.g. Startups or AIFs/Funds).

Mega-menus must be keyboard navigable (arrow keys, Esc to close, focus trap optional), close on outside click/Escape, and not flicker on hover (open/close delay).

### Mobile nav (drawer)
- Hamburger opens a full-height drawer with the complete nested structure as accordions (Services → practices → key services; Industries; Global; Insights; Knowledge Bank; etc.).
- Includes phone/email/WhatsApp, country selector, social, and the consultation CTA at the bottom.

### Search overlay
- Full-width overlay with a single input and **category filters**: People · Knowledge · Practice · News. (Implementation: client-side index over the data layer + MDX frontmatter; a simple fuzzy search is fine. Show grouped results.)

---

## 4. BREADCRUMBS
- On every page below top level: `Home › Section › [Subsection] › Page`. Brass separators. Emit `BreadcrumbList` JSON-LD (see `10`).

---

## 5. GLOBAL FOOTER (navy-950)
Four-column layout + lower bar:
- **Col 1 — Firm:** logo, one-line positioning ("India's rare triple-qualified CA · CS · CMA multidisciplinary firm"), social icons, ICAI/peer-review microline (placeholder).
- **Col 2 — Services:** quick-links to all 18 practice-area hubs (SEO internal linking). Two sub-columns if needed.
- **Col 3 — Explore:** Industries, Global Presence, Insights, Knowledge Bank, Calculators, Careers.
- **Col 4 — Contact + Newsletter:** HQ address (placeholder), phone/email/WhatsApp, **newsletter signup** (email + topic interest), office-city quick list.
- **Lower bar:** © year ADA, Privacy · Terms · Cookie Policy · Disclaimer, "site by" line optional, back-to-top.
- Footer must include the SEO quick-links replicating all service pages.

---

## 6. SITEWIDE FLOATING / PERSISTENT ELEMENTS
- **WhatsApp float** (sticky bottom-right): prefilled message; on desktop hover shows a small QR-code popover for mobile scan. Placeholder number.
- **Sticky "Book Consultation / Get a Quote" CTA**: present in header; on long pages a slim bottom CTA bar may appear after scroll (dismissible).
- **Cookie consent banner** (see `10`): bottom, accept/preferences, sets consent before loading analytics.
- **Pop-up/slide-in** newsletter or lead-magnet offer: triggered at 60% scroll OR 30s, once per session, dismissible, never blocks content on mobile. Keep tasteful.

---

## 7. nav.ts CONFIG (shape)
```ts
type NavLink = { label: string; href: string; desc?: string; icon?: string };
type Practice = { label: string; href: string; cluster: string; keyServices: NavLink[]; icon: string };
export const practices: Practice[]   // 18, from 03
export const industries: NavLink[]   // 25, from 03
export const primaryNav: NavLink[]
export const footerColumns: {...}
export const offices: Office[]        // from 03
export const socials: NavLink[]
```
Everything that renders a link reads from here so routes and menus never disagree.

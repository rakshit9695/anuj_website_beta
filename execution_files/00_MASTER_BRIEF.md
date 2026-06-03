# ADA WEBSITE — MASTER BUILD BRIEF (READ THIS FIRST)

> **You are building the complete production website for *Anuj Desai & Associates* (ADA), a multidisciplinary chartered accountancy and advisory firm headquartered in Mumbai.**
> This document is the orchestration layer. It tells you what to build, the rules that apply to *every* page, the tech stack, and the order to build in. The other numbered docs (`01`–`10`) are the detailed specs for design and each part of the site. **Read this entire file before writing any code, then read `01_DESIGN_SYSTEM.md` before building any UI.**

---

## 1. CONTEXT & MISSION

ADA is rebuilding its website from scratch. A first attempt exists at `dev.anujdesaiassociates.com` but it is thin and unconvincing — only four vague service cards, placeholder template testimonials ("Sarah Mitchell, Acme Corp"), hashtag-stuffed blog titles, and almost none of the firm's actual capabilities represented.

**Your job is to produce a website that looks and behaves like it belongs to a genuine Big-4 *challenger* firm** — on the level of Dhruva Advisors, Nangia & Co, and Cyril Amarchand Mangaldas — not a local accountant's brochure site. Authority, depth, precision, and trust are the entire brand. Every design and content decision is judged against one question: *does this make a CFO, fund manager, or HNI client trust ADA with a ₹500-crore transaction?*

### The single most important positioning fact
ADA's differentiator — repeated across the entire site — is that it is **"India's rare triple-qualified multidisciplinary firm: CA + CS + CMA under one roof,"** offering audit, tax, AIF/fund, FEMA, M&A, and global-entity advisory that normally requires three separate firms. This claim is the centrepiece of the hero, the About page, and every practice-area page. See `03_CONTENT_DATA.md → Differentiators`.

---

## 2. WHAT "BETTER" MEANS — EXPLICIT ANTI-PATTERNS

The current site fails in specific ways. **Do not repeat any of these:**

| Current failure | What you must do instead |
|---|---|
| Only 4 generic service cards | Represent **18 practice areas + 25 industries**, each with a real hub page (`03`, `05`). |
| Fake testimonials (Acme Corp, Luma Labs, "conversion rate jumped 40%") | **Never fabricate testimonials, client names, logos, awards, or credentials.** Use clearly-marked placeholder components fed from data files the client will populate. See §6. |
| Blog titles that are walls of hashtags | Clean editorial titles, proper excerpt, author, date, category. Hashtags never appear in UI. |
| No navigation depth, no mega-menu | 3-level mega-menu, country selector, utility bar, sticky header, full mobile nav (`02`). |
| No trust architecture | Stats bar, credential/empanelment badges, awards strip, media-mentions strip, case studies (`03`, `04`, `10`). |
| Flat, generic visual style | Distinctive, disciplined design system — navy + brass, editorial serif headlines, generous whitespace, restrained motion (`01`). |
| Thin/empty pages | Every page is content-complete with real structure; no "lorem", no empty sections shipped. |

---

## 3. TECH STACK (NON-NEGOTIABLE)

Build on the same family as the existing site so it can replace it cleanly.

- **Framework:** Next.js 14+ (App Router), React 18, **TypeScript** (strict).
- **Styling:** Tailwind CSS with a custom theme driven by the tokens in `01_DESIGN_SYSTEM.md`. All colors/spacing/radii/typography come from CSS variables + Tailwind config — **no hard-coded hex values in components.**
- **UI primitives:** Headless/shadcn-style components (Radix under the hood) for menus, dialogs, tabs, accordions, tooltips, dropdowns. Style them to the design system; do not ship default shadcn looks.
- **Motion:** Framer Motion. Restrained, purposeful (see `01 → Motion`). Respect `prefers-reduced-motion`.
- **Icons:** `lucide-react`. For practice-area / industry icons use a consistent custom or Lucide-based set (one visual language — see `01`).
- **Content model:**
  - Structured data (services, industries, team, offices, stats, differentiators, calculators metadata, alerts categories) lives in typed data files under `/content` or `/data` (TypeScript modules or JSON). Components render from this data — never hard-code lists into JSX. Schemas are defined in `03_CONTENT_DATA.md`.
  - Long-form editorial (blogs, insights, alerts, case studies, budget analysis) authored as **MDX** with frontmatter. Provide 2–3 realistic but clearly-marked **sample** articles per type so the templates are demonstrable.
- **Forms:** React Hook Form + Zod validation. All forms post to a typed API route stub (`/app/api/...`) that is wired to a pluggable provider interface (see `09`) — the client will connect HubSpot/Zoho. Never lose a submission silently; always show success/error states.
- **Calculators:** Pure client-side React (no server needed) with their own state. See `08`.
- **SEO/metadata:** Next.js Metadata API + JSON-LD components. See `10`.
- **Fonts:** `next/font` with the families specified in `01`.
- **Images:** `next/image` everywhere, WebP/AVIF, with width/height to prevent CLS. Placeholder images via a single `<Placeholder>` component (see §6) — never hotlink random stock.
- **Package manager / output:** standard `npm`. The result must `npm run build` cleanly with no type errors and no console errors at runtime.

If any library choice conflicts with a spec doc, this Master Brief wins; raise the conflict in a `BUILD_NOTES.md` you maintain.

---

## 4. BUILD ORDER

Work in this sequence. Do not start a later phase until the earlier foundation is solid.

1. **Foundation** — Next.js app, Tailwind theme from `01`, fonts, global CSS variables, base layout, the `<Placeholder>` and data-loading utilities. Commit a working `/` that renders the header + footer shells.
2. **Design-system kit** — Build and visually verify the core components from `01` (buttons, cards, badges, section wrappers, eyebrow/heading components, stat counter, ticker, accordion, tabs, breadcrumb, form fields). Put them on a hidden `/_kit` page for QA.
3. **Architecture & global chrome** — Header (utility bar + sticky nav + mega-menu + country selector + search), footer, mobile nav, breadcrumbs, WhatsApp float, cookie banner. (`02`)
4. **Content data layer** — Populate the typed data files from `03` (all 18 practice areas, 25 industries, differentiators, stats, CTAs, lead magnets, alert categories, office list, calculator registry).
5. **Homepage** (`04`).
6. **Services system** — mega-menu landing, 18 practice-area hubs, individual service page template, FAQ + lead-magnet patterns. (`05`)
7. **About / Team / Global Presence / International Desks.** (`06`)
8. **Knowledge Centre** — insights hub, alert streams, blog, budget microsite, webinars/podcasts, media. (`07`)
9. **Knowledge Bank** — calculators, rate charts/utilities, acts/rules/forms, important-dates calendar, quick links. (`08`)
10. **Conversion, Careers & Contact** — contact page, all forms, careers, lead-magnet gating, event/webinar registration. (`09`)
11. **Technical, SEO, legal & polish** — schema, sitemaps, analytics hooks, accessibility pass, legal pages, performance pass. (`10`)
12. **Final QA** against the Definition of Done (§7).

---

## 5. GLOBAL RULES (APPLY TO EVERY PAGE)

- **Responsive:** Mobile-first. Must be flawless from **360px → 1920px**. Test the mega-menu, tickers, tables, and calculators at small widths specifically.
- **Accessibility (WCAG 2.1 AA):** semantic HTML landmarks, visible focus rings, `aria` labels on icon-only controls, "skip to content" link, keyboard-operable menus/dialogs/carousels, color contrast ≥ 4.5:1 for text, alt text on all meaningful images, `lang="en"`.
- **Performance:** target Lighthouse ≥ 90 across the board. Lazy-load below-the-fold media, code-split heavy widgets (calculators, maps), no layout shift, fonts with `display: swap`.
- **Consistency:** every page uses the same section rhythm, breadcrumb pattern, CTA blocks, and footer. A practice-area page and an industry page should feel like siblings.
- **Internal linking:** every service page links to ≥ 5 related services/industries; every article links to its practice area; footer carries SEO quick-links to all hubs. (`02`, `10`)
- **CTAs everywhere:** every substantive page ends with a conversion block (consultation / relevant lead magnet / calculator). CTA copy comes from `03 → CTAs`.
- **No dead ends & no fake data shipped as real.** See §6.
- **Tone of copy:** authoritative, precise, plain-English-where-possible, never salesy-hyperbolic. Indian regulatory terminology used correctly (you may rely on the exact service names in `03`). Write India-English, ₹ currency, DD MMM YYYY dates.

---

## 6. PLACEHOLDER & REAL-DATA POLICY (IMPORTANT)

This is a real firm's site and it operates under India's ICAI advertising/solicitation norms. Therefore:

- **Never invent** specific client names, client logos, testimonials, named individuals, partner bios/photos, award names, rankings, regulatory empanelments (SEBI/RBI/IRDAI/IBBI/CAG/CERT-IN/DPIIT), ISO certificates, statistics, office addresses, or phone/email/WhatsApp numbers.
- For all of the above, build the **component fully** and feed it from a data file that contains **clearly-labelled placeholder entries** (e.g. `name: "[CLIENT TO PROVIDE]"`, a neutral grey avatar/logo via the `<Placeholder>` component). The client will swap in real values by editing data files only — no code changes.
- Maintain `CLIENT_TODO.md` listing every field/asset the client must supply, grouped by page.
- Calculators must use **correct, current Indian tax/finance logic** (FY 2025-26 / AY 2026-27 defaults) but show a visible "for indicative purposes; verify with ADA" disclaimer.
- Add a short note in `BUILD_NOTES.md` that several blueprint features (testimonials, client logos, comparative claims, aggressive CTAs) should be reviewed by the firm against **ICAI Code of Ethics** advertising restrictions before going live. Build them; flag them; let the firm decide.

---

## 7. DEFINITION OF DONE

The build is complete when:

- [ ] `npm run build` passes with **zero** TypeScript errors and no runtime console errors.
- [ ] All routes in the sitemap (`02`) resolve — no 404s in internal links; a styled 404 page exists.
- [ ] Header mega-menu, country selector, search, and full mobile nav work and are keyboard-accessible.
- [ ] Homepage renders every section listed in `04`.
- [ ] All **18 practice-area hubs** and **25 industry pages** exist and render from data (`03`, `05`).
- [ ] Service page template, individual-service pages, FAQ accordions, and lead-magnet gates work.
- [ ] At least these calculators work correctly: Income Tax (Old vs New), TDS, GST Rate, GST-from-MRP, HRA, Capital Gains, ESOP, EMI (`08`).
- [ ] Rate charts / utilities, acts-rules-forms repository, important-dates ticker + calendar, and quick-links page exist (`08`).
- [ ] Knowledge Centre hub + at least one working sample of each content type (alert, blog, whitepaper, budget page, webinar, media item) (`07`).
- [ ] All forms validate, show success/error, and post to the provider-interface stub (`09`).
- [ ] WhatsApp float, sticky consultation CTA, newsletter signup, cookie banner present sitewide.
- [ ] JSON-LD (Organization, LocalBusiness, Service, FAQPage, Article, BreadcrumbList), canonical tags, OG/Twitter cards, `sitemap.xml`, `robots.txt` (`10`).
- [ ] Lighthouse ≥ 90 (Perf/A11y/Best-Practices/SEO) on Home, a service page, and a blog page.
- [ ] No fabricated real-world data anywhere; `CLIENT_TODO.md` and `BUILD_NOTES.md` are complete.
- [ ] Responsive verified at 360 / 768 / 1024 / 1440 / 1920px.

---

## 8. HOW TO USE THE OTHER DOCS

| Doc | Purpose |
|---|---|
| `01_DESIGN_SYSTEM.md` | The complete visual language: tokens, type, color, components, motion. **Build the UI to this.** |
| `02_ARCHITECTURE_NAVIGATION.md` | Sitemap, routes, header/footer, mega-menu, breadcrumbs, global chrome. |
| `03_CONTENT_DATA.md` | Data schemas + the full service taxonomy, industries, differentiators, stats, CTAs, lead magnets, alert categories. The source of truth for all lists. |
| `04_HOMEPAGE.md` | Section-by-section homepage spec. |
| `05_SERVICES_PAGES.md` | Mega-menu landing, practice-area hubs, service page template, FAQ + lead magnets. |
| `06_ABOUT_TEAM_GLOBAL.md` | About, Our Story/Journey, Team & profiles, Global Presence, International Desks, credentials. |
| `07_KNOWLEDGE_CENTRE.md` | Insights hub, tax-alert streams, blog, budget microsite, webinars/podcasts, media room. |
| `08_KNOWLEDGE_BANK_TOOLS.md` | Calculators, rate charts/utilities, acts/rules/forms, important dates, quick links. |
| `09_CONVERSION_CAREERS_CONTACT.md` | Contact, forms + provider interface, careers/articleship, lead-magnet gating, events. |
| `10_TECHNICAL_SEO_LEGAL.md` | Tech config, SEO/schema, performance, analytics, accessibility, legal/cookie pages. |

Keep `BUILD_NOTES.md` (decisions/conflicts) and `CLIENT_TODO.md` (data the firm must supply) updated as you go.

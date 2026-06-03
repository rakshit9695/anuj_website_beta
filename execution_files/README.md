# ADA Website — Build Prompt Package (for Claude Opus 4.8)

This folder is a complete, self-contained brief for building the **Anuj Desai & Associates** website. Hand all files to the model. They are designed to be read in order.

## How to feed this to Opus 4.8
Best results: provide **all 11 docs at once**, and instruct: *"Build this website following these specs. Start by reading `00_MASTER_BRIEF.md` in full, then `01_DESIGN_SYSTEM.md`, then proceed through the build order it defines."*

If you must split across turns (context limits), go phase-by-phase using the **Build Order** in `00` — but keep `00`, `01`, `02`, and `03` in context throughout, since later docs depend on them.

This is a large production site — expect it to be built incrementally (foundation → design kit → chrome → data → pages), not in a single output. The Master Brief's Build Order and Definition of Done are the spine.

## The docs
| # | File | What it covers |
|---|---|---|
| 00 | `00_MASTER_BRIEF.md` | **Read first.** Mission, anti-patterns vs the current site, tech stack, build order, global rules, placeholder/real-data policy, Definition of Done. |
| 01 | `01_DESIGN_SYSTEM.md` | Full visual language: color tokens, type, spacing, components, motion, Tailwind theme. |
| 02 | `02_ARCHITECTURE_NAVIGATION.md` | Sitemap/routes, header (utility bar + sticky nav + mega-menus + country selector + search), footer, mobile nav, breadcrumbs, floats, cookie banner. |
| 03 | `03_CONTENT_DATA.md` | **Source of truth.** Data schemas + the 18 practice areas, 25 industries, 14 differentiators, stats, lead magnets, CTAs, alert categories. |
| 04 | `04_HOMEPAGE.md` | Section-by-section homepage. |
| 05 | `05_SERVICES_PAGES.md` | Services landing, 18 practice hubs, service template, 25 industry pages, FAQ + lead magnets. |
| 06 | `06_ABOUT_TEAM_GLOBAL.md` | About, Story/Journey, Mission-Vision-Values, Team + profiles, Global Presence, International Desks, credentials, CSR. |
| 07 | `07_KNOWLEDGE_CENTRE.md` | Insights hub, color-coded tax alerts, blog (MDX), whitepapers, Budget microsite, webinars/podcasts, events, surveys, newsletters, case studies, media room. |
| 08 | `08_KNOWLEDGE_BANK_TOOLS.md` | Calculators (with logic), rate charts/utilities, acts/rules/forms, bulletins, compliance calendar, quick links. |
| 09 | `09_CONVERSION_CAREERS_CONTACT.md` | Form infrastructure + provider interface, all form types, conversion elements, Find-My-Service quiz, Contact, Careers/Articleship. |
| 10 | `10_TECHNICAL_SEO_LEGAL.md` | Metadata, JSON-LD, performance, analytics (consent-gated), accessibility, legal pages, cookie banner, security. |

## Two files Opus will create during the build
- `BUILD_NOTES.md` — decisions, conflicts, provider-swap + content-authoring instructions, and the **ICAI advertising-compliance** flags.
- `CLIENT_TODO.md` — every placeholder the firm must supply (real team bios/photos, office addresses, phone/email/WhatsApp, awards, credentials/empanelments, client logos/testimonials, PDFs, analytics IDs, legal clauses, rates to confirm).

## Two things to remember
1. **Tech:** Next.js 14 App Router + TypeScript + Tailwind (theme from `01`) — same family as the existing `dev.anujdesaiassociates.com` so it can replace it.
2. **Never fabricate** real-world data (clients, testimonials, awards, empanelments, numbers, offices). Build the components; feed them placeholder data flagged for the client. Several lead-gen/trust features are behind config flags pending the firm's ICAI review.

# 01 — DESIGN SYSTEM (END-TO-END VISUAL LANGUAGE)

> Read this before building any UI. Every component in the site is built from these tokens and rules. The goal is a **distinctive, disciplined, premium-professional** look — the visual equivalent of a firm that has audited listed companies and structured cross-border funds for decades. **Not** a generic startup template, **not** the flat current site.

---

## 1. DESIGN PRINCIPLES

1. **Earned authority over flashiness.** Confidence comes from restraint, hierarchy, and craft — not gradients-everywhere or stock hero videos. White space is a feature.
2. **Editorial, not "corporate-startup".** Think a serious financial publication crossed with a law-firm. Strong serif headlines, measured body text, real structure.
3. **Two-tone discipline.** Deep navy + warm brass do the heavy lifting. Color is used sparingly and meaningfully (categories, CTAs, accents). Avoid rainbow UIs.
4. **Density with breathing room.** The firm has *enormous* depth (18 practices, 25 industries, hundreds of services). Organize it so a page feels rich but never cluttered — progressive disclosure, clear grouping, generous spacing.
5. **Trust signals are design elements.** Stats, badges, credentials, and case studies are designed components, not afterthoughts.
6. **Motion that reassures.** Subtle, smooth, purposeful. Nothing bouncy or playful.

---

## 2. COLOR SYSTEM

Define all of these as CSS variables in `globals.css` and map them into `tailwind.config.ts`. **No raw hex in components.**

### Brand core
| Token | Hex | Use |
|---|---|---|
| `--navy-950` | `#07142B` | Deepest ink — dark section backgrounds, footer |
| `--navy-900` | `#0A1F3C` | **Primary brand navy** — headers, primary buttons, headlines on light |
| `--navy-800` | `#13315C` | Hover/secondary navy |
| `--navy-700` | `#1E4A82` | Links, active states |
| `--navy-100` | `#E7EDF5` | Tinted navy surfaces |
| `--navy-50`  | `#F4F7FB` | Very light navy wash (section alt background) |

### Accent (brass / gold) — premium, used sparingly
| Token | Hex | Use |
|---|---|---|
| `--brass-600` | `#A87C2E` | Accent text on light, icon strokes |
| `--brass-500` | `#C9A227` | **Primary accent** — eyebrow labels, underlines, dividers, key numbers |
| `--brass-400` | `#D9B84E` | Hover accent |
| `--brass-100` | `#F7EFD8` | Accent tint backgrounds, badge fills |

### Neutrals (warm grey, not cold)
| Token | Hex | Use |
|---|---|---|
| `--ink-900` | `#1A1A1A` | Primary body text on light |
| `--ink-700` | `#3D3D3D` | Secondary text |
| `--ink-500` | `#6B6B6B` | Muted/meta text |
| `--ink-300` | `#C7C4BD` | Borders, rules |
| `--paper`   | `#FBFAF7` | **Page background** — warm off-white, not pure white |
| `--surface` | `#FFFFFF` | Cards, elevated surfaces |
| `--surface-alt` | `#F4F2EC` | Alternating section background (warm) |

### Functional / category colors (for tax-alert streams, statuses)
Use these only for category tags, alert badges, and form states.
| Token | Hex | Meaning |
|---|---|---|
| `--cat-direct` | `#1E4A82` | Direct Tax (navy-blue) |
| `--cat-indirect` | `#0E7C66` | Indirect Tax / GST (emerald) |
| `--cat-regulatory` | `#7A4FB0` | Regulatory / RBI-SEBI (violet) |
| `--cat-litigation` | `#B23A2E` | Litigation (terracotta-red) |
| `--cat-giftcity` | `#0F8FA3` | GIFT City / International (teal) |
| `--cat-budget` | `#C9A227` | Budget (brass) |
| `--success` | `#0E7C66` / `--warning` `#B8884D` / `--error` `#B23A2E` | Form states |

**Contrast rule:** body text on `--paper` uses `--ink-900`/`--ink-700`. On navy backgrounds use `--paper`/`#D5DEEA`. Brass is an *accent*, never long body text.

### Dark sections
Several sections invert to navy (footer, "Why ADA", a hero variant, CTA bands). On dark: headlines `--paper`, accent `--brass-500`, body `#C2CEDD`, hairline rules `rgba(255,255,255,.12)`.

---

## 3. TYPOGRAPHY

Load via `next/font/google`.

- **Display / Headings:** **Fraunces** (variable; use optical size, weights 400–600, slight negative tracking on large sizes). Characterful but serious editorial serif. *Alternates if unavailable: "Source Serif 4" or "Newsreader".*
- **Body / UI:** **Inter** (weights 400/500/600). Clean, neutral, screen-optimised. *Alternate: "Geist".*
- **Numeric / data (calculators, stats, rate tables):** Inter with `font-variant-numeric: tabular-nums`. Optionally **"IBM Plex Mono"** for calculator readouts.

### Type scale (clamp for fluid responsive)
| Role | Size (desktop → mobile) | Font / weight | Notes |
|---|---|---|---|
| Display (hero) | `clamp(2.75rem, 5vw, 4.5rem)` | Fraunces 500 | line-height 1.05, tracking -0.02em |
| H1 (page title) | `clamp(2.25rem, 3.5vw, 3.25rem)` | Fraunces 500 | 1.1 |
| H2 (section) | `clamp(1.75rem, 2.5vw, 2.5rem)` | Fraunces 500 | 1.15 |
| H3 | `1.5rem` | Fraunces 500 / Inter 600 | |
| H4 | `1.25rem` | Inter 600 | |
| Body-lg (lede) | `1.1875rem` | Inter 400 | 1.6, max-width 65ch |
| Body | `1.0625rem` | Inter 400 | 1.65, max-width 68ch |
| Small / meta | `0.875rem` | Inter 500 | uppercase tracking 0.04em for labels |
| Eyebrow label | `0.8125rem` | Inter 600 | uppercase, tracking 0.12em, `--brass-600` |

**Eyebrow pattern (use everywhere above section headings):** a short brass uppercase label, optionally preceded by a 24px brass rule. e.g. `— PRACTICE AREAS`.

**Prose:** body copy max-width ~68ch; never full-bleed paragraphs. Headlines may run wider.

---

## 4. SPACING, GRID & LAYOUT

- **Spacing scale (Tailwind):** 4px base. Use `4,8,12,16,24,32,48,64,96,128`.
- **Container:** max-width `1280px` content, with a wider `1440px` "bleed" option for hero/imagery. Side padding: `clamp(1rem, 5vw, 4rem)`.
- **Section vertical rhythm:** `py-20` desktop / `py-12` mobile standard; hero and major bands `py-28`.
- **Grid:** 12-col conceptual. Service/industry grids: 4-up desktop, 2-up tablet, 1-up mobile. Stat bars: 4–5 across desktop, 2x2 mobile.
- **Alternating backgrounds:** rotate `--paper` → `--surface-alt` → navy band to create rhythm down long pages.

### Radii, borders, elevation
- **Radii:** cards `12px` (`rounded-xl`); buttons `8px`; pills/badges `9999px`; inputs `8px`. Keep it consistent — premium, not bubbly.
- **Borders:** hairlines `1px` `--ink-300` (light) / `rgba(255,255,255,.12)` (dark). Brass `1px` borders for accented cards.
- **Shadows:** subtle only. `shadow-sm` resting cards; `shadow-md` on hover. Define a custom `--shadow-card: 0 1px 2px rgba(10,31,60,.06), 0 8px 24px rgba(10,31,60,.06)`. No heavy/dark drop-shadows.

---

## 5. CORE COMPONENTS (build these in phase 2, verify on `/_kit`)

For each: define variants, states (default/hover/focus/active/disabled), and responsive behavior.

### Buttons
- **Primary:** navy-900 fill, paper text; hover navy-800; focus ring brass. For high-conversion CTAs, a **brass primary** variant (brass-500 fill, navy-900 text) — reserved for the main consultation CTA.
- **Secondary:** transparent with navy-900 1px border + navy text; hover navy-50 fill.
- **Ghost / link:** navy-700 text with animated brass underline on hover.
- **On dark:** paper-outline secondary; brass primary.
- Sizes: sm / md / lg. Icon support (leading/trailing Lucide). Always ≥44px tap target on mobile.

### Eyebrow + Section Heading block
Reusable `<SectionHeading eyebrow title intro? align?>` — brass eyebrow, Fraunces title, optional lede.

### Cards
- **Service card:** icon (brass stroke in a navy-50 rounded square) + title (H4) + 1-line description + "Explore →" link. Hairline border, hover lifts (shadow-md) + brass top-border reveal.
- **Industry card:** compact icon + label, denser grid.
- **Insight/article card:** thumbnail (16:9) + category tag (category color) + title (Fraunces) + date/author meta + excerpt.
- **Stat card:** big tabular number (Fraunces or Inter 600) + brass accent + label.
- **Case-study card:** outcome metric headline ("Reduced ETR by 8%") + sector tag + short context. Anonymized.
- **Person card:** square headshot (placeholder grey), name, designation, qualification chips (CA/CS/CMA), LinkedIn icon.

### Badges & chips
- **Credential/empanelment badge:** small pill, brass-100 fill, brass-600 text, optional icon (e.g. "IBBI Registered IP", "CERT-IN Empanelled"). 
- **Category tag:** category-colored, uppercase small.
- **Qualification chips:** CA / CS / CMA — navy outline pills.

### Navigation components
- **Utility bar, sticky header, mega-menu panel, country selector, search overlay, mobile drawer** — full specs in `02`. Styling: header solid navy or paper-on-scroll; mega-menu is a wide panel with grouped columns + a promoted feature tile on the right.

### Data & motion components
- **Animated stat counter:** counts up on scroll-into-view (IntersectionObserver), tabular-nums, respects reduced-motion (shows final value instantly).
- **Marquee ticker:** two variants — "Important Dates" (compliance deadlines) and "Recent Transactions". Pauses on hover, seamless loop, accessible (not the only place info lives).
- **Carousel:** testimonials / client logos / awards. Keyboard + swipe, autoplay with pause-on-hover, dots.
- **Accordion:** for FAQs and grouped service lists. Single or multi-open. Smooth height animation.
- **Tabs:** for practice-area sub-sections and calculator regime toggles.
- **Breadcrumb:** Home › Section › Page, brass separators.

### Forms (see `09` for logic)
- Inputs: 8px radius, hairline border, navy focus ring, label above, helper/error text below. Floating or fixed labels — pick one and keep consistent. Multi-step form uses a progress indicator. Success state = inline confirmation card, not a redirect.

### CTA band
- Full-width navy band with brass eyebrow, Fraunces headline, supporting line, brass primary button. Reused at the bottom of most pages.

### Calculator shell
- A consistent framed card: title, input column (left/top), live result panel (right/bottom) with large tabular result, assumptions/disclaimer footnote, "Talk to ADA about this" CTA. See `08`.

---

## 6. ICONOGRAPHY & IMAGERY

- **Icons:** one coherent line-icon language (Lucide or a custom set drawn in the same 1.75px stroke weight). Practice areas and industries each get a deliberate icon. Brass stroke inside a navy-50 rounded-square tile for emphasis contexts.
- **Imagery direction:** restrained, premium, real-world professional — architecture/cityscape (Mumbai skyline, BKC), abstract financial/geometric, document/handshake-free clichés avoided. Prefer duotone treatments toned to navy/brass for cohesion. **All images go through `<Placeholder>`** unless the client supplies assets; placeholder uses a tasteful navy/brass geometric pattern, never broken-image or grey boxes labelled "image".
- **Maps:** India multi-city map and world/desk map are designed components (SVG), navy base with brass active markers (see `06`).
- **Charts (in calculators/insights):** navy + brass + category palette, tabular numerics, minimal gridlines.

---

## 7. MOTION

- **Entrances:** subtle fade-up (8–16px, 400–500ms, ease-out) on scroll-into-view for section blocks and cards (stagger 60–80ms). Once only.
- **Hover:** cards lift 2–4px + shadow; links get animated brass underline; buttons slight bg shift. 150–200ms.
- **Header:** transparent-to-solid transition on scroll; condense height.
- **Counters/tickers/carousels:** as above.
- **Page transitions:** optional gentle fade; keep fast.
- **Always** respect `prefers-reduced-motion: reduce` → disable transforms/counters/marquee animation, show end states.
- No parallax-heavy, no bounce, no auto-playing sound/video.

---

## 8. RESPONSIVE & A11Y BAKED IN

- Breakpoints: `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`. Design mobile-first.
- Mega-menu collapses into the mobile drawer (full nested accordion). Tickers and wide tables get horizontal scroll with edge fades. Calculators stack input→result.
- Focus-visible rings (brass, 2px offset) on all interactive elements. Don't remove outlines.
- Maintain ≥4.5:1 text contrast; check brass-on-paper for small text (use brass-600, not brass-400, for text).

---

## 9. TAILWIND THEME STARTER (implement, extend as needed)

```ts
// tailwind.config.ts (excerpt)
extend: {
  colors: {
    navy: { 50:'var(--navy-50)',100:'var(--navy-100)',700:'var(--navy-700)',
            800:'var(--navy-800)',900:'var(--navy-900)',950:'var(--navy-950)' },
    brass:{ 100:'var(--brass-100)',400:'var(--brass-400)',500:'var(--brass-500)',600:'var(--brass-600)' },
    ink:  { 300:'var(--ink-300)',500:'var(--ink-500)',700:'var(--ink-700)',900:'var(--ink-900)' },
    paper:'var(--paper)', surface:'var(--surface)', 'surface-alt':'var(--surface-alt)',
    cat:  { direct:'var(--cat-direct)',indirect:'var(--cat-indirect)',regulatory:'var(--cat-regulatory)',
            litigation:'var(--cat-litigation)',giftcity:'var(--cat-giftcity)',budget:'var(--cat-budget)' },
  },
  fontFamily: { display:['var(--font-fraunces)','serif'], sans:['var(--font-inter)','system-ui','sans-serif'] },
  boxShadow:  { card:'0 1px 2px rgba(10,31,60,.06), 0 8px 24px rgba(10,31,60,.06)' },
  borderRadius:{ xl:'12px' },
}
```

Deliver a `globals.css` defining all variables, base typography, `.eyebrow`, prose styles, and `prefers-reduced-motion` handling.

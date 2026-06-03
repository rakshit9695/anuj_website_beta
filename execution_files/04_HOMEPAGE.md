# 04 — HOMEPAGE

> Section-by-section build spec for `/`. The homepage must communicate scale, authority, and the triple-qualified positioning within the first viewport, then progressively reveal depth. Use the design system (`01`) and pull all lists/copy from the data layer (`03`). Apply scroll-in fade-up motion to each section.

Build the sections in this order (top to bottom):

## 1. HERO — full-width slider (3–5 slides)
- Slider with 3–5 rotating slides, each: a short brass eyebrow, a Fraunces display headline, a one-line supporting sentence, and **two CTAs** (brass primary "Book a Consultation" + secondary "Explore Services"). Auto-advance (~6s), pause on hover, dots + arrow controls, swipeable, keyboard accessible. Respect reduced-motion (no autoplay).
- **Slide themes:** (1) Firm / triple-qualified positioning — *"India's rare CA · CS · CMA multidisciplinary firm"*; (2) AIF & FEMA / cross-border capital; (3) Startup-to-IPO lifecycle; (4) Global — *"One Firm. Every Country."*; (5) Budget 2026 Analysis (links to budget microsite).
- Visual: navy gradient background with a duotone Mumbai-skyline/abstract image via `<Placeholder>`; optional muted YouTube firm-intro embed on slide 1 (lazy, click-to-play, no autosound).
- Overlay a small **"X Years of Experience" badge** and the triple-qualified badge.
- Header sits transparent over hero, solidifies on scroll.

## 2. ANIMATED STATS BAR
- 4–5 count-up stats from `03 §5` (Years · Clients · Countries · Team · Transactions). Tabular nums, brass accents, count on scroll-into-view, reduced-motion shows final values. Sits in a slim band bridging hero and body (navy or surface-alt).

## 3. POSITIONING / "ALL UNDER ONE ROOF" STATEMENT
- A short, confident paragraph + a row of qualification chips (CA · CS · CMA) and key regulator badges (SEBI · RBI · IRDAI · IBBI · GIFT City) — placeholder-flagged. This is the thesis of the firm; keep it elegant, not cluttered.

## 4. SERVICES GRID — 18 practice areas
- Section heading ("Our Expertise" / eyebrow "PRACTICE AREAS"). Render all 18 practice cards from data, grouped or filterable by the 6 clusters (a tab/filter row is a nice touch but optional). Each card: icon tile, title, tagline, "Explore →" to the hub. 4-up desktop → 1-up mobile. Hover lift + brass top-border reveal.

## 5. INDUSTRIES STRIP — 25 sectors
- Eyebrow "INDUSTRIES WE SERVE." Compact icon+label grid of all 25 industries (denser than services), linking to each industry page. On mobile, horizontal-scroll rows or a 2-up grid. "View all industries →".

## 6. WHY ADA — differentiators
- Navy band (dark section). 6 selected differentiators from `03 §4` as icon + title + one line. "What sets us apart" heading. Use brass icons on navy. Include a secondary CTA to About.

## 7. FOUNDER'S DESK
- Two-column: founder photo (placeholder portrait) + a pull-quote (Fraunces, large) + short message + name/designation + optional CNBC/YouTube interview embed (lazy). Brass quotation accent. All content placeholder-flagged.

## 8. FEATURED INSIGHTS
- Latest 3 articles/alerts from MDX (sample content). Insight cards with category tag, title, date/author, excerpt, thumbnail. "Visit the Knowledge Centre →".

## 9. CASE STUDIES / OUTCOMES (anonymized)
- 3 case-study cards with outcome-metric headlines ("Reduced ETR by 8%", "APA secured in 18 months", "$10M raised post-CFO engagement"), sector tag, one-line context. Clearly anonymized; placeholder-flagged. Links to `/insights/case-studies`.

## 10. CLIENT LOGOS / TRUST STRIP
- Logo carousel/marquee of client logos (placeholder grey logos) with optional sector tags. Heading "Trusted by" — **flag for ICAI review** (named clients/logos may be restricted). Build it; gate behind a config flag `SHOW_CLIENT_LOGOS`.

## 11. TESTIMONIALS CAROUSEL
- Carousel of client testimonials (startup founder / MNC CFO / AIF manager personas) — **placeholder text, never fabricated as real**. Card: quote (Fraunces), name+role (placeholder), optional video play button. Pause on hover, dots, keyboard. Also flag for ICAI review behind `SHOW_TESTIMONIALS`.

## 12. AWARDS & RECOGNITIONS STRIP
- Row of award/ranking badges (ITR / Chambers / Legal500 / ALB-style placeholders) with year + awarding body. Placeholder-flagged. Links to `/about/awards`.

## 13. MEDIA / PRESS MENTIONS STRIP
- Logos of ET, Mint, CNBC-TV18, Moneycontrol, NDTV (placeholder/greyscale) with "as featured in" and links to `/media/news`. Confirm rights before using real logos (`CLIENT_TODO`).

## 14. GLOBAL PRESENCE TEASER
- Compact India 12-city map + world flags (US/UK/UAE/Singapore/GIFT City) preview, "Pan-India & Global" copy, CTA to `/global`. (Full interactive maps live on the Global page — see `06`.)

## 15. KNOWLEDGE BANK TEASER
- Promote the free tools: 3–4 calculator cards (Income Tax, GST, Capital Gains, EMI) + "Explore all calculators & utilities →". This is a strong lead-gen and SEO hook.

## 16. NEWSLETTER SIGNUP
- Inline band: email + topic-interest chips (Tax / GST / AIF / FEMA) → provider stub. Brass accents.

## 17. FINAL CTA BAND
- Navy CTA band: "Get Your Free Tax Health Check — Book a 30-Min Consultation" (brass primary) + secondary "Talk to an Expert". Reused component (`01 → CTA band`).

## TICKERS (persistent on homepage)
- **Important Dates ticker** (top of body or below hero): scrolling compliance deadlines from data (`08`), pause on hover, links to the full compliance calendar.
- **Recent Transactions ticker**: scrolling marquee of anonymized recent deals/engagements (placeholder, ICAI-flagged), e.g. "Advised on cross-border acquisition in pharma sector". Behind `SHOW_TRANSACTIONS` flag.

## NOTES
- Don't ship empty sections: every section has real structure + placeholder data, never blank.
- Keep the homepage scannable: alternate `--paper` / `--surface-alt` / navy bands for rhythm; generous spacing; one navy "Why ADA" band and one navy final CTA band are enough dark sections — don't over-darken.
- All "free/zero-cost" CTA copy honours the config switch from `03 §7`.

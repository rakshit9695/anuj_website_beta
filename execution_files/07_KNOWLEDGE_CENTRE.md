# 07 — KNOWLEDGE CENTRE / INSIGHTS HUB

> The editorial engine: thought leadership, categorized tax alerts, blog, the Budget microsite, webinars/podcasts, media, events, surveys, newsletters, and case studies. This is a major SEO and authority surface. Long-form content is **MDX with frontmatter**; build the templates and seed **2–3 realistic, clearly-marked sample items per type** so everything renders. Sample articles must be plausible and correct in substance but flagged as samples in frontmatter (`sample: true`).

---

## 1. MDX FRONTMATTER SCHEMA
```yaml
title: string
slug: string
type: 'alert' | 'blog' | 'whitepaper' | 'budget' | 'survey' | 'press' | 'news' | 'case-study'
category: 'direct'|'indirect'|'regulatory'|'litigation'|'giftcity'|'budget'|'trade'  # for alerts
practice: string         # related practice slug (cross-link)
author: string           # placeholder; links to team profile if matched
date: YYYY-MM-DD
excerpt: string
readingTime: auto
pdf?: string             # downloadable version (placeholder)
featured?: boolean
sample?: boolean
heroImage?: string       # placeholder
tags: string[]           # REAL topical tags — never hashtag-stuffed walls; max ~6
```
> **Critical UX rule:** tags are short and human (e.g. "GST Refund", "Exporters"). The current site's hashtag-wall titles are forbidden. Titles are clean editorial sentences.

---

## 2. KNOWLEDGE CENTRE HUB — `/insights`
- Hero: eyebrow "KNOWLEDGE CENTRE", H1, lede. 
- **Featured** block (1 large + 2 small featured items).
- **Filter/sort bar**: by type (Alerts · Blog · Whitepapers · Budget · Webinars · Podcasts · Events · Surveys · Case Studies) and by alert category (color-coded). Client-side filtering over the content index.
- **Card grid** of latest content (insight cards with category color tag, title, author, date, excerpt, type badge). Pagination or load-more.
- Sidebar/rail: newsletter signup (topic filters), most-read, browse-by-practice.
- Sub-section landing links: Thought Leadership, Alerts, Budget, Webinars, Podcasts, Events, Surveys, Newsletters, Case Studies.

## 3. TAX ALERTS — `/insights/alerts` (+ `/insights/alerts/[slug]`)
- Stream of date-stamped, **color-coded** alerts by category (Direct / Indirect / Regulatory / Litigation / GIFT City / Trade). Filter chips by category.
- Each alert: clean title, category tag, date, summary, body (MDX), **PDF download** (placeholder), social-share (LinkedIn/X/WhatsApp), related practice + related alerts. `Article` JSON-LD.
- A compact "Newsflash" widget (latest alerts) reusable on practice hubs.

## 4. BLOG / EXPERT ARTICLES — `/insights/blog` (+ `[slug]`)
- Article index with category + practice filters, search. Article template: title, author byline (links to team profile), date, reading time, hero image, MDX body with proper prose styling (`01` prose), pull-quotes, share buttons, author bio card, related articles (≥3), CTA band, `Article` + `BreadcrumbList` JSON-LD.
- Migrate the existing blog topics (GST refunds for export of services, GST refund on SEZ supplies, etc.) into **clean** article entries — proper titles + short tag sets, dropping the hashtag walls.

## 5. THOUGHT LEADERSHIP & WHITEPAPERS — `/insights/thought-leadership`, `/insights/whitepapers`
- Report cards (cover thumbnail, title, gated **PDF download** via email capture). Topics like "Beyond Borders — Offshore Fund Report", "India M&A Landscape", "Pre-IPO Readiness", "GloBE / Pillar 2 Bulletin Series". Gating wired to provider stub (`09`). Placeholder PDFs.

## 6. BUDGET MICROSITE — `/insights/budget` (+ `/insights/budget/2026-27`)
- A dedicated, visually richer **Budget Analysis** microsite section published annually. Landing lists editions; the 2026-27 page: hero, key highlights cards, sector-wise impact tabs, direct/indirect tax change tables, downloadable Budget PDF (placeholder), "Book a post-Budget consultation" CTA, related alerts. This is a flagship lead magnet — design it well.

## 7. WEBINARS — `/insights/webinars`
- Library of recorded sessions: thumbnail + title + date + speaker + embedded YouTube (lazy, click-to-play). Filter by topic. Upcoming webinars link to registration (`09`).

## 8. PODCASTS — `/insights/podcasts`
- Episode list (title, guest, duration, audio/video embed or platform links — Spotify/Apple/YouTube placeholders). Series framing (a named podcast).

## 9. EVENTS — `/insights/events`
- Upcoming + past events calendar. Event cards (date, title, mode, venue/online). Upcoming events have a **registration form** (`09`) with email confirmation. Optional event pop-up promo (sitewide, tasteful).

## 10. SURVEYS — `/insights/surveys`
- Survey/report cards with gated downloads (placeholder). Same pattern as whitepapers.

## 11. NEWSLETTERS — `/insights/newsletters`
- Subscribe (email + **topic filters**: Tax / GST / AIF / FEMA / Regulatory) → provider stub. Archive of past editions (Monthly Tax/Assurance newsletter model) as readable pages or PDFs (placeholder). Support multiple topic-specific newsletters.

## 12. CASE STUDIES — `/insights/case-studies` (+ `[slug]`)
- Anonymized engagement stories: challenge → approach → outcome (metric headline). Sector + practice tags. **Never name clients.** Placeholder-flagged. Strong trust + SEO content. `Article` JSON-LD.

---

## 13. MEDIA ROOM — `/media` (+ `/media/news`, `/media/press-releases`, `/media/videos`)
- **In the News**: external coverage cards (publication logo placeholder, headline, date, outbound link). 
- **Press Releases**: firm announcements (MDX).
- **Videos**: YouTube grid (interviews, Budget analysis, explainers — lazy embeds).
- Media logos strip (ET, Mint, CNBC-TV18, Moneycontrol, NDTV — placeholder/greyscale, rights to confirm).

---

## 14. SHARED PATTERNS
- **Insight card**, **category tag**, **share buttons**, **gated-download block**, **author card**, **related-content rail**, **newsletter block** — all reusable components.
- **Auto-listing**: hub and listing pages derive from the MDX/content index automatically; adding a file = appears in the right streams (by `type`/`category`).
- **Social share** on every article (LinkedIn · X · WhatsApp) + Open Graph per article (`10`).
- **Internal linking**: every article links to its practice hub and ≥3 related articles.
- Provide a clear content-authoring note in `BUILD_NOTES.md` for how the firm adds new MDX posts/alerts.

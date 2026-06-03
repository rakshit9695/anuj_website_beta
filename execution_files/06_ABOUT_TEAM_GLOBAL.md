# 06 — ABOUT · TEAM · GLOBAL PRESENCE

> Builds the firm-story and people architecture and the global/international presence pages. These pages carry the trust and credibility weight. All people, credentials, offices, and awards are **placeholder-flagged** (Master Brief §6).

---

## 1. ABOUT HUB — `/about`
A landing that introduces the firm and links to the sub-pages, plus inline summaries:
- Hero: eyebrow "ABOUT ADA", H1, lede on the triple-qualified multidisciplinary positioning.
- Sections / links to: Our Story, Our Journey (timeline), Mission-Vision-Values, The ADA Way (approach), Team, Awards, Credentials, Code of Ethics, CSR.
- Founder/Managing Partner quote block (placeholder) + optional CNBC/YouTube embed.
- "X decades of excellence" statement (placeholder number).
- Firm brochure / credentials-deck **download** (gated optional) — placeholder PDF.

## 2. OUR STORY — `/about/our-story`
Narrative of the firm: founding, philosophy, what multidisciplinary means in practice. Mission & Vision boxes. Core values as icon cards. All copy placeholder but well-structured (write tasteful neutral placeholder prose, clearly marked for client edit).

## 3. OUR JOURNEY — `/about/our-journey`
**Interactive vertical/horizontal timeline** of firm milestones (year → event). Designed component: navy spine, brass year markers, scroll-reveal entries. Placeholder milestones.

## 4. MISSION · VISION · VALUES — `/about/mission-vision-values`
Mission, Vision, and 5–6 core values, each with an icon + short statement. Clean editorial layout.

## 5. THE ADA WAY — `/about/the-ada-way`
The firm's approach/methodology — e.g. a 4–5 step engagement model (Understand → Structure → Execute → Assure → Advise) as a designed process graphic. Differentiators woven in.

## 6. TEAM — `/about/team`
- Grid of professionals (person cards: placeholder headshot, name, designation, CA/CS/CMA chips, LinkedIn). 
- **Categorized**: "Senior Management / Practice Leadership" first, then team, by practice or seniority (filter by practice optional).
- Each leadership card links to an **individual profile** page.
- Strong placeholder set (e.g. 8–12 placeholder people) so the grid demonstrates well; all flagged `[CLIENT TO PROVIDE]`.

## 7. INDIVIDUAL PROFILE — `/about/team/[slug]`
Partner/leader profile template: headshot, name, role, qualifications, practice areas, bio, notable engagements (anonymized), **authored articles** (pull related MDX insights by author), media appearances, LinkedIn. Emits `Person` JSON-LD. Cross-link back to their practice hub.

## 8. AWARDS & ACCOLADES — `/about/awards`
Grid/timeline of awards & industry rankings (ITR World Tax / Chambers / Legal500 / ALB-style) with year, awarding body, category, logo (placeholder). Filter by year. **ICAI-review flag.**

## 9. CREDENTIALS — `/about/credentials`
- **Regulatory empanelment / registration badges**: SEBI · RBI · IRDAI · IBBI · CAG · DPIIT · CERT-IN — as designed badge cards (placeholder; only display once client confirms).
- **ISO certificates** (placeholder cert images/links).
- **ICAI membership & Peer Review certificate** mention (standard for CA firms).
- Downloadable credentials where relevant (placeholder PDFs).

## 10. CODE OF ETHICS — `/about/code-of-ethics`
Statement of professional ethics & conduct; link to downloadable policy (placeholder). Reinforces trust.

## 11. CSR / FOUNDATION / SUSTAINABILITY — `/about/csr`
Firm's CSR initiatives, focus areas, and its own sustainability commitments; optional CSR policy download (placeholder). Distinct from the ESG *service* (`/services/esg-sustainability`).

---

## 12. GLOBAL PRESENCE HUB — `/global`
- Hero: "One Firm. Every Country." positioning. Intro on pan-India + global advisory from a Mumbai base.
- **Interactive India map** (`/global/india` content can also summarise here): SVG map of 12 cities (Mumbai HQ + e.g. Delhi NCR, Bengaluru, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Indore, Kochi, Nagpur, Ludhiana). Clickable city → office details popover (address/partner — placeholder). Navy base, brass active markers.
- **World presence**: country cards with flags — USA · UK · UAE · Singapore · Mauritius · Cayman coverage, + GIFT City IFSC. Each links to its advisory page.
- **International Desks** preview → desk pages.
- **Global associate / alliance network** preview → `/global/network`.
- CTA: "Talk to our cross-border team."

### Sub-pages
- `/global/india` — full 12-city map + offices list (addresses, maps, partner-in-charge — placeholder), "Our Offices" detail.
- `/global/usa` `/global/uk` `/global/uae` `/global/singapore` — country advisory pages: services for that corridor (inbound/outbound tax, entity setup, treaty, compliance), relevant practices, CTA.
- `/global/gift-city` — dedicated **GIFT City IFSC** advisory page (fund setup, IFSC entity, tax) — a key differentiator; give it depth + IFSC badge.
- `/global/desks/[desk]` — International Desk pages: `korea`, `japan`, `north-america`, `europe`, `middle-east`. Country-specific advisory framing + language-friendly note + CTA.
- `/global/network` — associate/alliance partner network with partner logos (placeholder) + map.
- `/global/india-entry` — India entry / setup for foreign companies (entity options, FEMA/FDI, tax registrations, ongoing compliance) — strong inbound lead page.

---

## 13. SHARED
- Reuse person-card, badge, map, timeline, and CTA-band components from `01`.
- Every page: breadcrumb, unique meta, `BreadcrumbList` (+ `Person`/`Organization`/`LocalBusiness` where relevant) JSON-LD (`10`).
- Maintain `CLIENT_TODO.md` entries for every placeholder person, office, award, credential, and PDF on these pages.

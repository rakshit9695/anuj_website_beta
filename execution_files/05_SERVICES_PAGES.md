# 05 — SERVICES SYSTEM (LANDING · HUBS · SERVICE TEMPLATE)

> The services system is the heart of the site and the biggest SEO surface. Three page types: the **Services landing**, the **18 practice-area hubs**, and the **individual service template**. Plus **industry pages** (built the same way, data from `03 §3`). All render from the data layer — no hard-coded lists.

---

## 1. SERVICES LANDING — `/services`
- Hero: eyebrow "OUR EXPERTISE", H1 "Full-spectrum advisory, under one roof", lede reinforcing CA+CS+CMA breadth.
- The 18 practices presented grouped by the **6 clusters** (`03 §2` mapping), each cluster a labelled block with its practice cards. A sticky in-page filter/tab row to jump to a cluster is a plus.
- Each card → practice hub. Include a short "Not sure which service? → Find My Service" link to the service-finder quiz (`09`).
- End with the standard CTA band + related "Industries" cross-link.

## 2. PRACTICE-AREA HUB TEMPLATE — `/services/[practice]`
Generated for all 18 from `Practice` data. Sections in order:

1. **Hub hero** — breadcrumb, eyebrow (cluster name), H1 (practice title), tagline + overview paragraph, primary CTA (relevant lead magnet / consultation), secondary "Talk to an expert". Optional relevant credential badge (e.g. AIF hub → "SEBI-recognized AIF Advisor", IBC hub → "IBBI Registered IP") — placeholder-flagged.
2. **Sub-practice groups** — render each `ServiceGroup` as a titled block: a clean, scannable list/grid of its services. Long lists use an accordion or 2–3 column layout so they read as authoritative depth, not a wall. Selected high-value services link to their individual service pages.
3. **Why ADA for [practice]** — 3–5 practice-specific differentiators (pull/adapt from `03 §4`), icon + line.
4. **Relevant lead magnet / tool** — feature the practice's headline magnet (e.g. AIF → AIF Setup Checklist; Direct Tax → Old-vs-New calculator). Gated download or link to the live calculator.
5. **Case studies / outcomes** — 2–3 anonymized outcome cards relevant to this practice (placeholder).
6. **FAQ** — accordion of ≥6 practice FAQs from data (write accurate, genuinely useful answers using correct Indian regulatory terminology). Emit `FAQPage` JSON-LD (`10`).
7. **Related practices & industries** — ≥5 cross-links (internal-linking requirement).
8. **CTA band** — practice-specific consultation CTA.

**Flagship hubs to give extra depth:** `aif-funds`, `international-tax-tp`, `fema-rbi`, `consulting-cfo` (cost-reduction signature), `startup-vc-pe` (lifecycle infographic). For these, add a bespoke visual:
- AIF hub: AIF Cat I/II/III comparison block + fund-lifecycle.
- Intl Tax hub: GloBE/Pillar-2 bulletin teaser + DTAA coverage note.
- Startup hub: **Startup → Series A → IPO → Listed lifecycle infographic** (designed SVG, navy/brass).
- Consulting hub: **Cost-Reduction Audit "Free Diagnostic"** prominent sticky CTA.

## 3. INDIVIDUAL SERVICE TEMPLATE — `/services/[practice]/[service]`
Build the template + generate it for a representative set of high-intent services (you need not create a page for every one of the hundreds — create the template, wire it to data, and generate pages for the services that have `slug` set in data; the rest live as anchors on the hub). Sections:
1. Breadcrumb + H1 (service name) + concise intro (what it is, who needs it, ADA's edge).
2. **What's included / our approach** — steps or bullet groups.
3. **Deliverables / outcomes**.
4. **Relevant forms, due dates or rates** — auto-link to Knowledge Bank items where applicable (e.g. a GST service links to GST forms + GST return calendar).
5. **FAQ** (≥4) + `FAQPage` JSON-LD.
6. **Related services** (≥5 internal links) + relevant lead magnet + CTA band.
Each service page carries `Service` schema JSON-LD (`10`).

## 4. INDUSTRY PAGE TEMPLATE — `/industries/[industry]`
From `Industry` data (`03 §3`), build all 25. Sections:
1. Hero (eyebrow "INDUSTRY", H1 industry title, intro).
2. **Sector challenges** — the pain points list.
3. **How ADA helps** — mapped services (`howWeHelp`) as cards linking to relevant practice/service pages.
4. **Relevant practices** cross-links + sector-specific lead magnet.
5. Optional sector stat/case study (placeholder).
6. FAQ (≥4) + CTA band.

## 5. SHARED PATTERNS
- **FAQ accordion**: reusable, single-or-multi open, smooth, emits JSON-LD. Content from data.
- **Lead-magnet block**: title + format badge (PDF/Excel/Tool/Checklist) + short value line + gated email form or tool link (`09`). Reused across hubs/industries.
- **Related-content rail**: cards of related practices/industries/insights — drives the ≥5 internal links requirement on every page.
- **In-page nav** (sticky side/top "on this page") on long hubs for scannability.
- **Cross-links to Knowledge Bank**: where a service maps to a calculator/rate/form (e.g. Direct Tax ↔ Income Tax Calculator + IT rate chart; GST ↔ GST calculators + forms; M&A/Valuation ↔ relevant tools), render contextual links.

## 6. SEO PER PAGE
Every services/industries page: unique `<title>`/meta description (templated from data), canonical URL, `Service` + `BreadcrumbList` (+ `FAQPage` where FAQs exist) JSON-LD, OG/Twitter tags. See `10`. Internal-linking density is a ranking lever — honour the ≥5 related links rule everywhere.

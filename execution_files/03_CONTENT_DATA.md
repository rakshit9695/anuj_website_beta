# 03 — CONTENT & DATA MODEL (SOURCE OF TRUTH FOR ALL LISTS)

> Every list-driven part of the site (services, industries, differentiators, stats, offices, CTAs, lead magnets, alert categories, calculators) renders from typed data files defined here. Build these data files in phase 4. Components must **never** hard-code these lists.
>
> Service names below are the firm's real practice taxonomy — use them verbatim; they carry correct Indian regulatory terminology. Where a section says "full catalog," include every item; the lists are intentionally exhaustive because depth *is* the brand. If you also have the firm's "Master Website Blueprint" source document, import the complete Part A catalog; otherwise expand each practice following the shown pattern so no practice looks thin.

---

## 1. DATA SCHEMAS (TypeScript)

```ts
// /content/types.ts
export type Cluster =
  | 'Assurance' | 'Tax' | 'Regulatory & Cross-Border'
  | 'Transactions & Capital' | 'Advisory & Outsourcing' | 'Sector & Specialist';

export interface ServiceItem { name: string; slug?: string; blurb?: string; }
export interface ServiceGroup { title: string; items: ServiceItem[]; }

export interface Practice {
  slug: string;            // e.g. 'audit-assurance'
  title: string;           // 'Audit & Assurance'
  cluster: Cluster;
  icon: string;            // lucide name or custom id
  tagline: string;         // 1-line value prop for cards/hero
  overview: string;        // 2–3 sentence hub intro
  groups: ServiceGroup[];  // sub-practice groups + their services
  relatedPractices: string[]; // ≥3 slugs for cross-linking
  industries: string[];       // relevant industry slugs
  leadMagnets: string[];      // ids from §6
  faqs: { q: string; a: string }[]; // ≥6 per practice (write real, accurate answers)
}

export interface Industry {
  slug: string; title: string; icon: string;
  intro: string; challenges: string[]; howWeHelp: ServiceItem[];
  relatedPractices: string[]; leadMagnets: string[];
}

export interface Office {
  city: string; isHQ?: boolean; address: string;     // placeholder
  phone?: string; email?: string; mapEmbed?: string;  // placeholder
  partnerInCharge?: string; // placeholder
  lat?: number; lng?: number;
}
export interface Differentiator { title: string; how: string; icon: string; }
export interface Stat { value: number; suffix?: string; prefix?: string; label: string; }
export interface CTA { id: string; label: string; href: string; variant: 'primary'|'brass'; }
export interface LeadMagnet { id: string; title: string; format: 'PDF'|'Excel'|'Tool'|'Checklist'; practice: string; gated: boolean; }
export interface AlertCategory { key: string; label: string; color: string; }
export interface CalculatorMeta { slug: string; title: string; summary: string; category: string; status: 'live'|'stub'; }
```

---

## 2. PRACTICE AREAS (18 hubs)

Each is a hub page (`/services/[slug]`). `cluster` drives mega-menu grouping. Build all 18. Representative key services shown per group — expand toward the exhaustive catalog.

### 2.1 `audit-assurance` — **Audit & Assurance** · *Assurance*
*Tagline:* "Statutory, internal, forensic and ESG assurance — listed-company grade."
**Groups & key services:**
- *Statutory & Regulatory Audits:* Statutory Audit (Listed BSE/NSE), Unlisted Cos, MNC/Subsidiary/Foreign Branch, Tax Audit u/s 44AB, Secretarial Audit (MR-3), Cost Audit (CRA-3), Bank Audit, NBFC Audit, Insurance (IRDAI), Mutual Fund (SEBI), AIF Audit (Cat I/II/III), PMS Audit, RBI Concurrent Audit, PSU/CAG-empanelled, Ind AS/IFRS/US GAAP Consolidation, LLP/Trust/Society/Co-op, Section 8, FCRA, REIT/InvIT, GIFT City IFSC, SEZ/STPI.
- *Internal & Risk-Based Audits:* RBIA framework, Process Audit, Concurrent Audit, IFC design/testing, SOX 302/404, ITGC, ERP controls (SAP/Oracle/Tally), Stock & Fixed-Asset verification, Co-sourcing.
- *Forensic Audit & Investigations:* Forensic investigation, Fraud detection, AML/ABAC, Whistleblower review, Digital forensics, Related-party scrutiny, Litigation support/expert witness.
- *ESG & Sustainability Assurance:* BRSR (Core & Comprehensive), GRI/SASB/TCFD/ISSB, Carbon footprint (Scope 1/2/3), Net-Zero verification, Green-bond/SLL assurance.
- *Specialized & Certifications:* Transfer Pricing Audit (3CEB), IPO Readiness/Assurance, AUP, Net-Worth/Turnover/UC/CSR certificates, Form 15CB, IBBI valuation certificates.

### 2.2 `direct-tax` — **Direct Taxation** · *Tax*
*Tagline:* "Corporate, HNI and cross-border income-tax strategy and compliance."
**Groups:** Corporate Tax Advisory & Compliance (planning, MAT/AMT, restructuring, ITR-6/5/7, deferred tax, startup 80-IAC); Individual & HNI (ITR-1–4, old-vs-new regime, capital gains, ESOP tax, HUF, NRI returns, Schedule FA, angel tax 56(2)(viib), 54/54F/54EC, crypto/VDA 115BBH); Tax Litigation & Representation (CIT(A), ITAT, DRP, assessments, reassessment 148, penalty, settlement); Private Wealth/Succession tax planning.

### 2.3 `indirect-tax-gst` — **Indirect Tax / GST** · *Tax*
*Tagline:* "GST, customs and trade — registration to refunds to litigation."
**Groups:** GST Registration & Compliance (registration, GSTR-1/3B/9/9C, ITC reconciliation, e-invoicing, LUT, refunds incl. export & SEZ); Customs, Excise & International Trade (classification/HSN, valuation, FTP/SEZ/EOU, duty drawback, RoDTEP, SVB); GST Litigation (SCN, appeals, advance rulings); Legacy indirect tax (pre-GST) closure.

### 2.4 `international-tax-tp` — **International Tax & Transfer Pricing** · *Tax*
*Tagline:* "DTAA, BEPS, Pillar 2 and TP — one team, end to end."
**Groups:** International Tax Planning (DTAA 95+ countries, BEPS, **OECD Pillar 2 / GloBE**, inbound/outbound structuring, offshore holdcos, GAAR, CFC, CbCR, MAP/APA, 15CA/15CB, s.195 WHT, PE/POEM/SEP); Transfer Pricing (study reports, benchmarking TNMM/CUP/CPM/PSM, Form 3CEB, Master/Local File, APA, MAP, TPO/DRP defence, financial-transaction TP, IP TP); US/UK/UAE jurisdiction tax filing (1040/1120/FBAR/FATCA; UK SA/CT; UAE CT & VAT).

### 2.5 `fema-rbi` — **FEMA & RBI Advisory / Cross-Border Structuring** · *Regulatory & Cross-Border*
*Tagline:* "FDI, ODI, ECB and every RBI filing — compliant cross-border capital."
**Key services (full catalog):** FDI (Automatic & Govt route), Capital/Current account advisory, ODI (Form OPI/APR), ECB advisory & reporting, RBI reporting (FLA, FC-GPR, FC-TRS, ODI), Compounding of FEMA violations, FPI structuring, Repatriation, NRI investment/property, Cross-border M&A FEMA, Branch/Liaison/Project office, WOS setup, Delaware flip/reverse flip, EOR, DPDP cross-border data advisory.

### 2.6 `aif-funds` — **AIF & Fund Management** · *Regulatory & Cross-Border*
*Tagline:* "Category I/II/III AIF formation, SEBI compliance, fund audit & investor reporting." (Flagship — give this a deep hub.)
**Groups:** Fund Formation & Structuring (concept, SEBI registration, PPM, trust/LLP setup, GIFT City fund); Compliance & SEBI Regulatory (filings, valuation, RTA coordination); Audit, Taxation & Investor Reporting (AIF audit, fund accounting, waterfall/IRR, investor statements, FATCA/CRS).

### 2.7 `corporate-secretarial` — **Corporate Secretarial & Company Law** · *Regulatory & Cross-Border*
*Tagline:* "Company law, ROC and governance compliance under CS leadership."
**Key services:** Incorporation (Pvt/Public/LLP/OPC/Section 8), ROC filings (AOC-4, MGT-7, DIR-3 KYC), board/AGM secretarial, secretarial audit, charge management, FEMA/RBI corporate filings, restructuring (merger/demerger), winding-up/strike-off, ESOP scheme drafting, POSH compliance.

### 2.8 `ma-valuation` — **M&A, Valuation & Transaction Advisory** · *Transactions & Capital*
*Tagline:* "Deal advisory, due diligence and IBBI-registered valuation."
**Groups:** M&A/Deal Advisory (buy/sell-side, target screening, deal structuring, SPA support, integration); Due Diligence (financial/tax/legal vendor & buyer DD); Valuation (IBBI registered valuers — equity, business, brand/IP, ESOP, purchase price allocation, fairness opinion).

### 2.9 `ipo-capital-markets` — **IPO & Capital Markets** · *Transactions & Capital*
*Tagline:* "Startup-to-listed: IPO readiness, SEBI ICDR and capital raising."
**Key services:** IPO readiness & assurance, restated financials (SEBI ICDR), DRHP support, pre-IPO placement, corporate governance for listing, debt restructuring & capital raising, NCD/bond issuance support.

### 2.10 `startup-vc-pe` — **Startup, VC/PE & Entrepreneurial Advisory** · *Sector & Specialist*
*Tagline:* "Founder-to-IPO: structuring, fundraising, ESOPs and compliance."
**Key services:** Entity & cap-table structuring, DPIIT/Startup India & 80-IAC, angel-tax exemption, fundraising support (SAFE/CCPS), ESOP design & tax, VC/PE term-sheet & DD support, virtual CFO for startups, Delaware/Singapore flip.

### 2.11 `family-office-wealth` — **Family Office & Private Wealth** · *Sector & Specialist*
*Tagline:* "Succession, estate and private-wealth structuring for UHNI families."
**Key services:** Family office setup & governance, succession & estate planning, private/family trusts, will & nomination advisory, offshore wealth structuring, NRI wealth, FATCA/CRS, philanthropy/CSR structuring, family constitution.

### 2.12 `esg-sustainability` — **ESG, Sustainability & CSR** · *Sector & Specialist*
*Tagline:* "BRSR, CSR and net-zero — strategy through assurance."
**Key services:** BRSR readiness & reporting, ESG strategy & materiality, CSR policy & spend compliance + audit, carbon accounting (Scope 1/2/3), net-zero roadmap, GRI/ISSB advisory, ESG ratings advisory, sustainability-linked finance.

### 2.13 `insolvency-ibc` — **Insolvency & IBC** · *Regulatory & Cross-Border*
*Tagline:* "CIRP and resolution led by an IBBI-registered Insolvency Professional."
**Key services:** CIRP management, resolution professional services, liquidation, claims verification, resolution-plan evaluation, creditor advisory, pre-pack insolvency, personal guarantor insolvency.

### 2.14 `consulting-cfo` — **Management Consulting & CFO Services** · *Advisory & Outsourcing*
*Tagline:* "Fractional CFO, cost-reduction and performance management." (Cost-Reduction Audit is a signature offer.)
**Groups:** Business Strategy & Growth; **Cost Reduction & Efficiency (signature — free diagnostic CTA)**; Performance Management & Analytics (MIS, dashboards, KPIs); CFO-as-a-Service / Fractional CFO; Risk Management & Internal Controls.

### 2.15 `finance-accounting-outsourcing` — **Finance, Accounting & Compliance Outsourcing** · *Advisory & Outsourcing*
*Tagline:* "Bookkeeping to controllership — accurate, compliant, tech-driven."
**Key services:** Bookkeeping & accounting (Tally/Zoho/SAP), payroll & PF/ESI/PT, statutory compliance management, AP/AR, MIS & management reporting, virtual accounting team, GCC/global delivery support, period-end close.

### 2.16 `real-estate-infra` — **Real Estate, REIT & Infrastructure** · *Sector & Specialist*
*Tagline:* "RERA, REIT/InvIT and project-finance advisory."
**Key services:** RERA compliance & registration, REIT/InvIT structuring & audit, project finance & lender's advisory, capex monitoring, JDA/redevelopment tax, real-estate fund (AIF) support.

### 2.17 `ngo-trust-section8` — **NGO, Trust & Section 8 / Charitable** · *Sector & Specialist*
*Tagline:* "Formation to 12A/80G/FCRA compliance for the social sector."
**Key services:** Trust/Society/Section 8 formation, 12A & 80G registration, FCRA registration & returns, CSR-implementing-agency compliance, NGO audit & UC, foreign-grant compliance, Darpan/NITI Aayog registration.

### 2.18 `global-entity-setup` — **Global Entity Setup & International Expansion** · *Regulatory & Cross-Border*
*Tagline:* "India-entry and outbound set-up across US, UK, UAE, Singapore."
**Key services:** India entry/setup for foreign companies, outbound subsidiary setup, GIFT City entity setup, global compliance management (multi-country single point), EOR/PEO, registered-agent coordination, cross-border tax & FEMA wrap.

> **Cluster mapping for mega-menu:** Assurance → 2.1 · Tax → 2.2,2.3,2.4 · Regulatory & Cross-Border → 2.5,2.6,2.7,2.13,2.18 · Transactions & Capital → 2.8,2.9 · Advisory & Outsourcing → 2.14,2.15 · Sector & Specialist → 2.10,2.11,2.12,2.16,2.17.

---

## 3. INDUSTRIES (25 landing pages)

`/industries/[slug]`. Build all 25; each gets intro, sector challenges, "how we help" (mapped services), related practices, lead magnets.

`startups · technology · fintech · pharma · healthcare · manufacturing · real-estate · bfsi · insurance · funds-aif · family-offices · exporters · infrastructure · energy · retail · ngos · gcc · nri · telecom · automotive · consumer-brands · education · media · logistics · aerospace`

(Titles: Startups, Technology, Fintech, Pharma, Healthcare, Manufacturing, Real Estate, BFSI, Insurance, Funds & AIFs, Family Offices, Exporters, Infrastructure, Energy, Retail, NGOs, Global Capability Centres, NRI, Telecom, Automotive, Consumer Brands, Education, Media, Logistics, Aerospace.)

---

## 4. DIFFERENTIATORS (14) — used on hero, About, every service hub

Render as "Why ADA" cards and a positioning section. `how` = how to communicate it.
1. **CA + CS + CMA under one roof** — "India's rare triple-qualified multidisciplinary firm" (hero bold + header badge).
2. **AIF Cat I/II/III complete practice** — dedicated AIF Hub + "SEBI-recognized AIF advisor" badge.
3. **GIFT City IFSC expertise** — dedicated GIFT City page + IFSC badge.
4. **Startup → Series A → IPO → Listed lifecycle** — lifecycle infographic + "Full Lifecycle Coverage."
5. **US + UK + UAE + Singapore + Mauritius + Cayman coverage** — world map + flags on Global page.
6. **FEMA + RBI + SEBI + IRDAI + IBBI — all regulators** — "All Regulator Compliance Under One Roof" badge.
7. **Family Office + AIF + Private Wealth = complete HNI solution** — Family Office Hub.
8. **Transfer Pricing + BEPS + Pillar 2 + APA in one practice** — Intl Tax Hub + GloBE bulletin.
9. **ESG / BRSR + CSR + Sustainability in one practice** — ESG Hub + BRSR checklist.
10. **IBBI-registered Insolvency Professional** — "IBBI Registered IP" badge + CIRP timeline.
11. **Cost-Reduction Audit as a signature standalone service** — "Free Diagnostic" sticky CTA on consulting pages.
12. **Pan-India + Global advisory from a Mumbai base** — 12-city India map + world network visual.
13. **Global Compliance Management — multi-country, single firm** — "One Firm. Every Country." hero slide.
14. **Cybersecurity & DPDP Act advisory** — "CERT-IN Empanelled + DPDP Advisory" badge (verify with client before claiming empanelment).

> Any badge implying regulatory empanelment/registration is **placeholder until the firm confirms** — see Master Brief §6.

---

## 5. STATS BAR (animated counters) — values are placeholders the client confirms
`Years of Experience` · `Clients Served` · `Countries` · `Team Members / Professionals` · `Transactions / Engagements`. Provide as `Stat[]` with neutral placeholder numbers and a `CLIENT_TODO` flag.

---

## 6. LEAD MAGNETS (by practice) — build gated/ungated download components

**Audit & Assurance:** Statutory Audit Prep Checklist (PDF); Internal Audit Maturity Assessment (Tool); ESG/BRSR Readiness Scorecard; AIF Compliance Calendar Template (Excel); Forensic Trigger Checklist.
**Direct Tax:** Old-vs-New Regime Calculator (Tool); Capital Gains Calculator (Tool); TDS Rate Card FY26-27 (PDF); ESOP Taxation Calculator (Tool); Intl Tax Risk Checklist; US-India Treaty Summary.
**GST/Indirect:** GST Return Calendar; GST Refund Checklist for Exporters; ITC Reconciliation Template (Excel); E-Invoicing Checklist; GST Health Check 20-point.
**AIF/Funds:** AIF Setup Checklist; AIF vs PMS vs MF Comparison; AIF Waterfall Calculator (Tool); Investor KYC Checklist; GIFT City vs Singapore vs Cayman comparison.
**FEMA/Cross-Border:** FDI Compliance Checklist; FEMA Violation Risk Assessment; Mauritius vs Singapore vs UAE holding comparison; NRI Tax Checklist; FATCA/CRS Self-Cert Guide.
**Consulting/CFO:** Cost-Reduction Opportunity Assessment (free diagnostic); CFO-as-a-Service ROI Calculator (Tool); Startup Financial Model Template (Excel); MIS Dashboard Template; Board Reporting Pack Sample.

Gated magnets capture email before download (wire to provider interface, `09`). Calculator-type magnets link to the live calculators in `08`. Actual files are placeholders the client supplies (`CLIENT_TODO`).

---

## 7. HIGH-CONVERSION CTAs (use across the site; vary by context)
"Get Your Free Tax Health Check — Book a 30-Min Consultation" · "Download Free AIF Setup Guide" · "Calculate Your Potential GST Refund — Try Our Free Tool" · "Speak to an International Tax Expert Today — Free First Call" · "Get Your FEMA Compliance Review — Zero Risk, Zero Cost" · "Request a Free Cost-Reduction Audit" · "Book a Free CFO Strategy Session" · "Talk to Our AIF Expert — Free 45-Min Discovery Call" · "Get Your Startup Tax & ESOP Structure Reviewed — Free" · "Request Your ESG Readiness Assessment" · "Download the Budget 2026 Analysis — Free PDF" · "Check Your Angel-Tax Exemption Eligibility — Free Tool".

> Aggressive "free/zero-cost" CTAs may conflict with ICAI norms — build them, flag in `BUILD_NOTES.md` for firm review; allow toned-down copy via a single config switch.

---

## 8. ALERT CATEGORIES (Knowledge Centre)
`{ direct:'Direct Tax', indirect:'Indirect Tax', regulatory:'Regulatory', litigation:'Litigation', giftcity:'GIFT City', budget:'Budget', trade:'Trade' }` → colors from `01 §2`. Bulletin streams: RBI/SEBI · GST · Income Tax · FEMA · IBC · Labour.

---

## 9. CALCULATOR REGISTRY → see `08` for the full list and logic.

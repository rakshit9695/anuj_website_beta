import type { Practice } from "./types";

/**
 * The firm's 18 practice areas — the real taxonomy. Service names use correct
 * Indian regulatory terminology. `cluster` drives the mega-menu grouping.
 * Services with a `slug` get an individual page; the rest render as hub anchors.
 */
export const practices: Practice[] = [
  // 2.1 ───────────────────────────────────────────────────────────────────
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    cluster: "Assurance",
    icon: "ShieldCheck",
    tagline: "Statutory, internal, forensic and ESG assurance — listed-company grade.",
    overview:
      "From listed-company statutory audits to forensic investigations and BRSR assurance, our audit practice combines technical rigour with sector depth. We audit under Ind AS, IFRS and US GAAP and serve banks, NBFCs, AIFs, insurers and multinationals.",
    credentialBadge: "Peer-Reviewed Firm",
    groups: [
      {
        title: "Statutory & Regulatory Audits",
        items: [
          { name: "Statutory Audit (Listed — BSE/NSE)", slug: "statutory-audit", blurb: "Audit of listed entities under the Companies Act 2013 and SEBI LODR." },
          { name: "Statutory Audit — Unlisted Companies" },
          { name: "MNC / Subsidiary / Foreign Branch Audit" },
          { name: "Tax Audit u/s 44AB", slug: "tax-audit-44ab", blurb: "Form 3CA/3CB and 3CD reporting for businesses crossing the turnover threshold." },
          { name: "Secretarial Audit (MR-3)" },
          { name: "Cost Audit (CRA-3)" },
          { name: "Bank Audit (Statutory & Branch)" },
          { name: "NBFC Audit" },
          { name: "Insurance Audit (IRDAI)" },
          { name: "Mutual Fund Audit (SEBI)" },
          { name: "AIF Audit (Cat I / II / III)" },
          { name: "PMS Audit" },
          { name: "RBI Concurrent Audit" },
          { name: "PSU / CAG-empanelled Audit" },
          { name: "Ind AS / IFRS / US GAAP Consolidation" },
          { name: "LLP / Trust / Society / Co-op Audit" },
          { name: "Section 8 & FCRA Audit" },
          { name: "REIT / InvIT Audit" },
          { name: "GIFT City IFSC & SEZ/STPI Audit" },
        ],
      },
      {
        title: "Internal & Risk-Based Audits",
        items: [
          { name: "Risk-Based Internal Audit (RBIA) framework", slug: "internal-audit" },
          { name: "Process Audit" },
          { name: "Concurrent Audit" },
          { name: "IFC design & testing" },
          { name: "SOX 302 / 404 compliance" },
          { name: "IT General Controls (ITGC)" },
          { name: "ERP controls review (SAP / Oracle / Tally)" },
          { name: "Stock & Fixed-Asset verification" },
          { name: "Internal Audit co-sourcing" },
        ],
      },
      {
        title: "Forensic Audit & Investigations",
        items: [
          { name: "Forensic investigation", slug: "forensic-audit" },
          { name: "Fraud detection & prevention" },
          { name: "AML / ABAC reviews" },
          { name: "Whistleblower complaint review" },
          { name: "Digital forensics" },
          { name: "Related-party transaction scrutiny" },
          { name: "Litigation support / expert witness" },
        ],
      },
      {
        title: "ESG & Sustainability Assurance",
        items: [
          { name: "BRSR (Core & Comprehensive) assurance", slug: "brsr-assurance" },
          { name: "GRI / SASB / TCFD / ISSB reporting" },
          { name: "Carbon footprint (Scope 1/2/3) verification" },
          { name: "Net-Zero verification" },
          { name: "Green-bond / SLL assurance" },
        ],
      },
      {
        title: "Specialised & Certifications",
        items: [
          { name: "Transfer Pricing Audit (Form 3CEB)" },
          { name: "IPO Readiness & Assurance" },
          { name: "Agreed-Upon Procedures (AUP)" },
          { name: "Net-Worth / Turnover / CSR certificates" },
          { name: "Form 15CB certification" },
          { name: "IBBI valuation certificates" },
        ],
      },
    ],
    relatedPractices: ["direct-tax", "ma-valuation", "ipo-capital-markets", "esg-sustainability", "aif-funds"],
    industries: ["bfsi", "funds-aif", "manufacturing", "technology", "insurance"],
    leadMagnets: ["statutory-audit-checklist", "brsr-scorecard", "internal-audit-maturity"],
    faqs: [
      { q: "When is a statutory audit mandatory for a company in India?", a: "Every company incorporated under the Companies Act 2013 — private or public, regardless of turnover — must have its financial statements audited annually by a Chartered Accountant. The threshold-based exemptions apply to tax audit and LLP audit, not to company statutory audit." },
      { q: "What is the turnover threshold for a tax audit under section 44AB?", a: "A tax audit is generally required where business turnover exceeds ₹1 crore (raised to ₹10 crore where cash receipts and payments are each within 5% of the total), or where professional gross receipts exceed ₹50 lakh. Presumptive-scheme assessees declaring below the prescribed profit also trigger it." },
      { q: "What is the difference between Form 3CA and Form 3CB?", a: "Form 3CA is used when the accounts are already audited under another law (e.g. the Companies Act); Form 3CB is used when no such audit is required and the CA conducts the audit solely under the Income-tax Act. Both are accompanied by the detailed particulars in Form 3CD." },
      { q: "Who needs an Internal Financial Controls (IFC) audit?", a: "Listed companies and certain prescribed classes must have the auditor report on the adequacy and operating effectiveness of internal financial controls over financial reporting. Many unlisted companies adopt IFC frameworks voluntarily for governance and investor confidence." },
      { q: "Is BRSR assurance mandatory?", a: "BRSR reporting is mandatory for the top 1,000 listed companies by market capitalisation. Reasonable assurance on the BRSR Core indicators is being phased in for the larger listed entities, with the threshold widening over successive years per the SEBI roadmap." },
      { q: "Can the same firm do both statutory audit and internal audit?", a: "No. To preserve independence, a statutory auditor cannot also render internal audit or several other prohibited services to the same company under section 144 of the Companies Act. We structure engagements so that independence rules are never breached." },
      { q: "What does a forensic audit typically cover?", a: "A forensic audit investigates suspected fraud, asset misappropriation, financial statement manipulation or regulatory breaches. It combines document and data analysis, interviews, digital forensics and, where required, an expert-witness report that can withstand scrutiny in litigation or before regulators." },
    ],
  },

  // 2.2 ───────────────────────────────────────────────────────────────────
  {
    slug: "direct-tax",
    title: "Direct Taxation",
    cluster: "Tax",
    icon: "Receipt",
    tagline: "Corporate, HNI and cross-border income-tax strategy and compliance.",
    overview:
      "We advise corporates, promoters, HNIs and NRIs across the full direct-tax lifecycle — planning, compliance, and representation through to the ITAT. Our team blends restructuring strategy with deep litigation experience.",
    groups: [
      {
        title: "Corporate Tax Advisory & Compliance",
        items: [
          { name: "Corporate tax planning & advisory", slug: "corporate-tax-advisory" },
          { name: "MAT / AMT computation & optimisation" },
          { name: "Business restructuring tax" },
          { name: "Return filing (ITR-6 / 5 / 7)" },
          { name: "Deferred tax & tax accounting" },
          { name: "Startup 80-IAC deduction" },
        ],
      },
      {
        title: "Individual & HNI Taxation",
        items: [
          { name: "ITR filing (ITR-1 to 4)" },
          { name: "Old vs New regime optimisation", slug: "old-vs-new-regime" },
          { name: "Capital gains planning" },
          { name: "ESOP taxation" },
          { name: "HUF tax planning" },
          { name: "NRI returns & Schedule FA" },
          { name: "Angel tax — section 56(2)(viib)" },
          { name: "Exemptions u/s 54 / 54F / 54EC" },
          { name: "Crypto / VDA taxation (115BBH)" },
        ],
      },
      {
        title: "Tax Litigation & Representation",
        items: [
          { name: "CIT(A) appeals", slug: "tax-litigation" },
          { name: "ITAT representation" },
          { name: "DRP proceedings" },
          { name: "Scrutiny & faceless assessments" },
          { name: "Reassessment u/s 148" },
          { name: "Penalty & prosecution defence" },
        ],
      },
      {
        title: "Private Wealth & Succession Tax",
        items: [
          { name: "Succession & estate tax planning" },
          { name: "Trust taxation" },
          { name: "Gift & relative-transfer planning" },
        ],
      },
    ],
    relatedPractices: ["international-tax-tp", "family-office-wealth", "startup-vc-pe", "ma-valuation", "audit-assurance"],
    industries: ["startups", "technology", "nri", "family-offices", "manufacturing"],
    leadMagnets: ["old-vs-new-calculator", "capital-gains-calculator", "tds-rate-card", "esop-calculator"],
    faqs: [
      { q: "Should I choose the old or new tax regime for FY 2025-26?", a: "The new regime is the default and offers lower slab rates with a higher rebate (income up to ₹12 lakh effectively tax-free after rebate for AY 2026-27) but disallows most deductions. The old regime is usually better if you claim large 80C/80D/HRA/home-loan-interest deductions. Our Old-vs-New calculator compares both on your actual numbers." },
      { q: "How are capital gains on listed shares taxed currently?", a: "Short-term gains (held ≤12 months) on listed equity with STT are taxed at 20% under section 111A; long-term gains above the ₹1.25 lakh annual exemption are taxed at 12.5% under section 112A without indexation. Rates were revised by the Finance Act 2024 — we apply the date-specific rules to your transactions." },
      { q: "How is ESOP income taxed in India?", a: "ESOPs are taxed at two stages: as a perquisite (salary) on the difference between fair market value and exercise price at the time of exercise, and as a capital gain on the difference between sale price and FMV-at-exercise when sold. Eligible DPIIT-recognised startups can defer the perquisite tax. Our ESOP calculator models both stages." },
      { q: "What is angel tax and does it still apply?", a: "Angel tax under section 56(2)(viib) taxed share premium received above fair market value. The Finance Act 2024 abolished section 56(2)(viib) from AY 2025-26, removing angel tax for investments made on or after 1 April 2024. We help document valuations and DPIIT recognition for legacy periods." },
      { q: "How are crypto and other virtual digital assets taxed?", a: "Income from transfer of VDAs is taxed at a flat 30% under section 115BBH, with no deduction except cost of acquisition and no set-off of losses. A 1% TDS under section 194S applies on transfers above the prescribed threshold. We handle computation, TDS and disclosure." },
      { q: "What is the time limit for reopening an assessment under section 148?", a: "Following the 2021 and 2024 amendments, the normal reassessment window is three years from the end of the relevant assessment year, extended to five years (earlier ten) where escaped income represented by an asset/expenditure/entry is ₹50 lakh or more, subject to the section 148A inquiry procedure." },
      { q: "Do NRIs have to file an income-tax return in India?", a: "An NRI must file if Indian-sourced income exceeds the basic exemption limit, to claim a refund of excess TDS, or to carry forward losses. Foreign assets disclosure in Schedule FA applies to residents, not NRIs. We also advise on DTAA relief and Form 67." },
    ],
  },

  // 2.3 ───────────────────────────────────────────────────────────────────
  {
    slug: "indirect-tax-gst",
    title: "Indirect Tax / GST",
    cluster: "Tax",
    icon: "Percent",
    tagline: "GST, customs and trade — registration to refunds to litigation.",
    overview:
      "End-to-end GST and customs support: registrations, monthly and annual compliance, ITC optimisation, export and SEZ refunds, classification disputes and appellate litigation up to the Tribunal.",
    groups: [
      {
        title: "GST Registration & Compliance",
        items: [
          { name: "GST registration & amendments", slug: "gst-registration" },
          { name: "GSTR-1 / 3B / 9 / 9C filing" },
          { name: "ITC reconciliation (2A/2B)" },
          { name: "E-invoicing & e-way bill" },
          { name: "LUT filing" },
          { name: "GST refunds — exports & SEZ", slug: "gst-refunds" },
        ],
      },
      {
        title: "Customs, Excise & International Trade",
        items: [
          { name: "Classification & HSN advisory" },
          { name: "Customs valuation & SVB" },
          { name: "FTP / SEZ / EOU advisory" },
          { name: "Duty drawback & RoDTEP" },
        ],
      },
      {
        title: "GST Litigation",
        items: [
          { name: "Show-cause notice (SCN) reply", slug: "gst-litigation" },
          { name: "First & appellate authority appeals" },
          { name: "Advance rulings (AAR/AAAR)" },
        ],
      },
      {
        title: "Legacy Indirect Tax",
        items: [{ name: "Pre-GST (VAT / Service Tax / Excise) closure & litigation" }],
      },
    ],
    relatedPractices: ["direct-tax", "international-tax-tp", "ma-valuation", "consulting-cfo", "finance-accounting-outsourcing"],
    industries: ["manufacturing", "exporters", "retail", "logistics", "consumer-brands"],
    leadMagnets: ["gst-return-calendar", "gst-refund-checklist", "itc-reconciliation-template", "gst-health-check"],
    faqs: [
      { q: "Who must register for GST?", a: "Registration is mandatory once aggregate turnover crosses ₹40 lakh for goods (₹20 lakh for services; ₹20/₹10 lakh in special-category states), and compulsorily — regardless of turnover — for inter-state suppliers, e-commerce operators, casual and non-resident taxable persons, and those liable under reverse charge." },
      { q: "What is the difference between GSTR-9 and GSTR-9C?", a: "GSTR-9 is the annual return consolidating the year's outward and inward supplies; GSTR-9C is a reconciliation statement reconciling the annual return with the audited financials. GSTR-9C is required where aggregate turnover exceeds ₹5 crore and is now self-certified rather than CA-certified." },
      { q: "Can exporters claim a GST refund?", a: "Yes. Exporters can either export under a Letter of Undertaking (LUT) without paying IGST and claim a refund of unutilised input tax credit, or pay IGST and claim a refund of the tax paid. SEZ supplies are treated as zero-rated. We manage the RFD-01 process end to end." },
      { q: "What is the time limit to claim input tax credit?", a: "ITC for an invoice can be claimed up to 30 November following the end of the financial year, or the date of filing the annual return, whichever is earlier — and only if the supplier has reported the invoice and it appears in your GSTR-2B, and the tax has actually been paid." },
      { q: "When is e-invoicing applicable?", a: "E-invoicing is mandatory for B2B supplies by registered persons whose aggregate turnover in any year from 2017-18 onwards exceeded ₹5 crore. The invoice must be reported to the IRP and carry a valid IRN and QR code to be a valid tax invoice." },
      { q: "What is the appeal process against a GST demand?", a: "A first appeal lies with the Appellate Authority within three months of the order, on pre-deposit of 10% of the disputed tax. A further appeal lies to the GST Appellate Tribunal (now being operationalised) on an additional pre-deposit, and thereafter to the High Court and Supreme Court on questions of law." },
    ],
  },

  // 2.4 ───────────────────────────────────────────────────────────────────
  {
    slug: "international-tax-tp",
    title: "International Tax & Transfer Pricing",
    cluster: "Tax",
    icon: "Globe2",
    tagline: "DTAA, BEPS, Pillar 2 and TP — one team, end to end.",
    overview:
      "We structure inbound and outbound investment, defend transfer-pricing positions, and prepare groups for OECD Pillar Two. One integrated team handles treaty analysis, benchmarking, documentation and competent-authority proceedings.",
    flagship: true,
    groups: [
      {
        title: "International Tax Planning",
        items: [
          { name: "DTAA advisory (95+ countries)", slug: "dtaa-advisory" },
          { name: "BEPS & OECD Pillar Two / GloBE", slug: "pillar-two-globe" },
          { name: "Inbound & outbound structuring" },
          { name: "Offshore holding-company structuring" },
          { name: "GAAR & CFC analysis" },
          { name: "CbCR & Master File" },
          { name: "MAP / APA" },
          { name: "Form 15CA / 15CB & s.195 withholding" },
          { name: "PE / POEM / SEP analysis" },
        ],
      },
      {
        title: "Transfer Pricing",
        items: [
          { name: "TP study & documentation", slug: "transfer-pricing" },
          { name: "Benchmarking (TNMM/CUP/CPM/PSM)" },
          { name: "Form 3CEB certification" },
          { name: "Master File & Local File" },
          { name: "Advance Pricing Agreements (APA)" },
          { name: "TPO / DRP defence" },
          { name: "Financial-transaction & IP TP" },
        ],
      },
      {
        title: "Foreign Jurisdiction Filings",
        items: [
          { name: "US tax filing (1040 / 1120 / FBAR / FATCA)" },
          { name: "UK tax (Self Assessment / CT)" },
          { name: "UAE Corporate Tax & VAT" },
        ],
      },
    ],
    relatedPractices: ["fema-rbi", "global-entity-setup", "direct-tax", "ma-valuation", "aif-funds"],
    industries: ["technology", "gcc", "manufacturing", "pharma", "funds-aif"],
    leadMagnets: ["intl-tax-risk-checklist", "us-india-treaty-summary", "holding-comparison"],
    faqs: [
      { q: "What is OECD Pillar Two and does it affect Indian groups?", a: "Pillar Two introduces a 15% global minimum tax on large multinational groups with consolidated revenue above €750 million, through the GloBE rules (IIR and UTPR) and a domestic top-up tax. Indian-headquartered and India-present groups within that threshold must model their effective tax rate jurisdiction-by-jurisdiction and prepare GloBE Information Returns." },
      { q: "When is transfer pricing documentation required in India?", a: "A taxpayer with international transactions or specified domestic transactions exceeding the prescribed thresholds must maintain TP documentation and file Form 3CEB by the due date. Master File (Form 3CEAA) and CbCR (Form 3CEAD) obligations apply to larger multinational groups based on revenue thresholds." },
      { q: "What is the difference between MAP and APA?", a: "An Advance Pricing Agreement (APA) is a forward-looking agreement with the CBDT fixing the arm's-length price for future years (and optionally rolling back four years). The Mutual Agreement Procedure (MAP) is a treaty mechanism to resolve double taxation that has already arisen, between the two countries' competent authorities." },
      { q: "When do I need a Form 15CB before a foreign remittance?", a: "Form 15CB is a CA certificate on the taxability and withholding on a foreign remittance, generally required before submitting Form 15CA Part C for taxable remittances above ₹5 lakh in a year. Certain specified payments are exempt. We determine the correct rate after applying the relevant treaty." },
      { q: "How does a tax treaty (DTAA) reduce my tax?", a: "A DTAA allocates taxing rights between two countries and usually caps withholding rates on dividends, interest, royalties and fees for technical services below domestic rates. To claim treaty benefits a non-resident needs a Tax Residency Certificate and Form 10F, and must satisfy any limitation-of-benefits and beneficial-ownership conditions." },
      { q: "What triggers a Permanent Establishment (PE) in India?", a: "A PE can arise from a fixed place of business, a dependent agent habitually concluding contracts, a service PE from prolonged personnel presence, or a Significant Economic Presence for digital businesses. A PE exposes the foreign enterprise to Indian tax on attributable profits — we advise on structuring to manage PE risk." },
    ],
  },

  // 2.5 ───────────────────────────────────────────────────────────────────
  {
    slug: "fema-rbi",
    title: "FEMA & RBI Advisory / Cross-Border Structuring",
    cluster: "Regulatory & Cross-Border",
    icon: "ArrowLeftRight",
    tagline: "FDI, ODI, ECB and every RBI filing — compliant cross-border capital.",
    overview:
      "We advise on the full FEMA spectrum — inbound FDI, outbound ODI, external commercial borrowings and every associated RBI return — and represent clients in compounding of past contraventions.",
    flagship: true,
    groups: [
      {
        title: "Cross-Border Capital",
        items: [
          { name: "FDI advisory (Automatic & Government route)", slug: "fdi-advisory" },
          { name: "Capital & current account advisory" },
          { name: "ODI advisory (OPI / APR)", slug: "odi-advisory" },
          { name: "ECB advisory & reporting" },
          { name: "FPI structuring" },
        ],
      },
      {
        title: "RBI Reporting & Remediation",
        items: [
          { name: "FC-GPR / FC-TRS filing" },
          { name: "FLA annual return" },
          { name: "ODI / APR returns" },
          { name: "Compounding of FEMA contraventions", slug: "fema-compounding" },
        ],
      },
      {
        title: "Structures & Set-up",
        items: [
          { name: "Branch / Liaison / Project office setup" },
          { name: "Wholly-owned subsidiary (WOS) setup" },
          { name: "Delaware flip / reverse flip" },
          { name: "Repatriation & NRI investment / property" },
          { name: "Cross-border M&A under FEMA" },
          { name: "DPDP cross-border data advisory" },
        ],
      },
    ],
    relatedPractices: ["international-tax-tp", "global-entity-setup", "aif-funds", "ma-valuation", "corporate-secretarial"],
    industries: ["technology", "gcc", "nri", "funds-aif", "manufacturing"],
    leadMagnets: ["fdi-compliance-checklist", "fema-risk-assessment", "holding-comparison", "nri-tax-checklist"],
    faqs: [
      { q: "What is the difference between the automatic and government route for FDI?", a: "Under the automatic route, foreign investment needs no prior approval — only post-facto RBI reporting. Under the government route, prior approval from the concerned administrative ministry is required. The applicable route and sectoral cap depend on the activity; some sectors (e.g. defence above a cap, multi-brand retail) are restricted or prohibited." },
      { q: "What is Form FC-GPR and when must it be filed?", a: "FC-GPR reports the issue of shares or other eligible instruments by an Indian company to a non-resident. It must be filed on the RBI's FIRMS portal within 30 days of allotment. Late filing attracts a Late Submission Fee, and uncorrected delays may require compounding." },
      { q: "What is ODI and what reporting does it require?", a: "Overseas Direct Investment is investment by an Indian entity/resident in a foreign entity. Under the 2022 OI rules, it is reported in Form FC (and OPI for portfolio investment), with an Annual Performance Report (APR) due each year and evidence of investment retained. Financial commitment limits and the no-round-tripping conditions apply." },
      { q: "What is the FLA return?", a: "The Foreign Liabilities and Assets annual return must be filed by 15 July each year by every Indian company or LLP that has received FDI or made ODI in any year. It is filed on the RBI's FLAIR portal and is separate from the transaction-level FC-GPR/FC-TRS filings." },
      { q: "What is compounding of a FEMA contravention?", a: "Compounding is a voluntary process to settle a FEMA contravention by admitting it and paying a compounding amount, instead of facing adjudication. It is done before the RBI (or the Directorate of Enforcement for certain matters). We prepare the application, compute exposure and represent clients at the personal hearing." },
      { q: "Can an NRI freely repatriate funds from India?", a: "An NRI can repatriate up to USD 1 million per financial year from an NRO account (and freely from NRE/FCNR accounts), subject to payment of applicable taxes and submission of Forms 15CA/15CB. Sale proceeds of inherited property and certain capital transactions have specific conditions." },
    ],
  },

  // 2.6 ───────────────────────────────────────────────────────────────────
  {
    slug: "aif-funds",
    title: "AIF & Fund Management",
    cluster: "Regulatory & Cross-Border",
    icon: "TrendingUp",
    tagline: "Category I/II/III AIF formation, SEBI compliance, fund audit & investor reporting.",
    overview:
      "A dedicated funds practice covering the entire AIF lifecycle — structuring and SEBI registration, ongoing compliance and valuation, fund audit, and investor reporting including waterfall and IRR computation. We also set up GIFT City IFSC funds.",
    flagship: true,
    credentialBadge: "SEBI-recognised AIF Advisor",
    groups: [
      {
        title: "Fund Formation & Structuring",
        items: [
          { name: "Fund concept & structuring", slug: "aif-structuring" },
          { name: "SEBI AIF registration", slug: "aif-registration" },
          { name: "PPM drafting & review" },
          { name: "Trust / LLP fund setup" },
          { name: "GIFT City (IFSC) fund setup" },
        ],
      },
      {
        title: "Compliance & SEBI Regulatory",
        items: [
          { name: "Ongoing SEBI filings & reporting" },
          { name: "Valuation (SEBI-prescribed norms)" },
          { name: "RTA & custodian coordination" },
          { name: "PPM audit (annual)" },
        ],
      },
      {
        title: "Audit, Taxation & Investor Reporting",
        items: [
          { name: "AIF audit (Cat I / II / III)", slug: "aif-audit" },
          { name: "Fund accounting" },
          { name: "Waterfall / IRR & carry computation" },
          { name: "Investor statements & capital accounts" },
          { name: "FATCA / CRS reporting" },
        ],
      },
    ],
    relatedPractices: ["fema-rbi", "international-tax-tp", "family-office-wealth", "ma-valuation", "audit-assurance"],
    industries: ["funds-aif", "family-offices", "startups", "bfsi", "real-estate"],
    leadMagnets: ["aif-setup-checklist", "aif-pms-mf-comparison", "aif-waterfall-calculator", "giftcity-comparison"],
    faqs: [
      { q: "What are the three categories of AIF under SEBI?", a: "Category I AIFs invest in start-ups, SMEs, infrastructure and socially desirable sectors (e.g. VC and angel funds). Category II covers funds that do not fall in I or III and do not use leverage other than for operations (e.g. private equity and debt funds). Category III employs diverse or complex strategies and may use leverage (e.g. hedge and long-short funds)." },
      { q: "What is the minimum investment and corpus for an AIF?", a: "Each investor must commit at least ₹1 crore (₹25 lakh for employees/directors of the AIF or manager), and each scheme must have a minimum corpus of ₹20 crore (₹10 crore for angel funds). An AIF can have a maximum of 1,000 investors per scheme (49 for angel funds)." },
      { q: "How is income of an AIF taxed?", a: "Category I and II AIFs enjoy pass-through status — income (other than business income) is taxed in the investors' hands as if they invested directly. Category III AIFs do not have statutory pass-through and are generally taxed at the fund level. We structure the fund and compute investor-wise tax accordingly." },
      { q: "What is a PPM and is its audit mandatory?", a: "The Private Placement Memorandum is the fund's offering document filed with SEBI. SEBI requires an annual audit of compliance with the terms of the PPM, conducted by an independent auditor, with the findings reported to SEBI and the trustees — a service our funds practice provides." },
      { q: "Why set up an AIF in GIFT City IFSC?", a: "An IFSC-based fund (regulated by IFSCA) can access tax concessions, easier foreign investor onboarding and dollar-denominated structures, making it an onshore alternative to Singapore, Mauritius or Cayman for India-focused and global strategies. We compare structures and handle the IFSCA registration." },
      { q: "What is a distribution waterfall and carried interest?", a: "The waterfall is the contractual order in which fund distributions flow — typically return of capital, then a preferred return (hurdle) to investors, a catch-up to the manager, and finally a profit split where the manager's share is the carried interest. We compute the waterfall, hurdle and IRR for each distribution." },
    ],
  },

  // 2.7 ───────────────────────────────────────────────────────────────────
  {
    slug: "corporate-secretarial",
    title: "Corporate Secretarial & Company Law",
    cluster: "Regulatory & Cross-Border",
    icon: "ScrollText",
    tagline: "Company law, ROC and governance compliance under CS leadership.",
    overview:
      "Company-law and governance support led by qualified Company Secretaries — from incorporation through ongoing ROC compliance, board processes, restructuring and secretarial audit.",
    groups: [
      {
        title: "Incorporation & Setup",
        items: [
          { name: "Company incorporation (Pvt / Public / OPC)", slug: "company-incorporation" },
          { name: "LLP & Section 8 incorporation" },
        ],
      },
      {
        title: "Ongoing ROC Compliance",
        items: [
          { name: "Annual filings (AOC-4, MGT-7)", slug: "roc-compliance" },
          { name: "DIR-3 KYC" },
          { name: "Board & AGM secretarial support" },
          { name: "Charge management (CHG-1/4)" },
          { name: "Statutory registers & minutes" },
        ],
      },
      {
        title: "Governance & Restructuring",
        items: [
          { name: "Secretarial audit (MR-3)" },
          { name: "Merger / demerger (NCLT)" },
          { name: "Winding-up / strike-off" },
          { name: "ESOP scheme drafting" },
          { name: "POSH compliance" },
          { name: "FEMA / RBI corporate filings" },
        ],
      },
    ],
    relatedPractices: ["fema-rbi", "ma-valuation", "startup-vc-pe", "insolvency-ibc", "global-entity-setup"],
    industries: ["startups", "technology", "manufacturing", "real-estate", "bfsi"],
    leadMagnets: ["roc-calendar", "esop-calculator"],
    faqs: [
      { q: "What annual ROC filings must a private company make?", a: "A private company must file Form AOC-4 (financial statements) within 30 days of the AGM and Form MGT-7/7A (annual return) within 60 days of the AGM, hold at least four board meetings a year, and ensure each director completes DIR-3 KYC annually. Non-filing attracts daily additional fees and can lead to director disqualification." },
      { q: "What is a secretarial audit and who needs it?", a: "A secretarial audit (Form MR-3) is an independent check of compliance with the Companies Act and other applicable laws, conducted by a practising Company Secretary. It is mandatory for listed companies and for public companies meeting prescribed paid-up capital (₹50 crore) or turnover (₹250 crore) thresholds." },
      { q: "How long does it take to incorporate a private limited company?", a: "With documents in order, incorporation through the MCA's SPICe+ form typically completes in about 7–10 working days, including name reservation, DSC/DIN, PAN, TAN and the certificate of incorporation. GST and other registrations follow separately." },
      { q: "What is the difference between strike-off and winding-up?", a: "Strike-off (Form STK-2) is a simpler exit for a defunct company with no liabilities, removing its name from the register. Winding-up is the formal liquidation process — voluntary or through the NCLT/IBC — involving realisation of assets, settlement of creditors and distribution, with an appointed liquidator." },
      { q: "Is a POSH policy mandatory for my company?", a: "Every employer with 10 or more employees must constitute an Internal Committee under the Sexual Harassment of Women at Workplace (POSH) Act, adopt a policy, conduct awareness and file an annual return with the district officer. We help draft the policy, constitute the IC and maintain compliance." },
      { q: "Can ESOPs be issued by a private company?", a: "Yes. A private company can issue ESOPs under section 62(1)(b) by passing a special resolution and adopting a scheme compliant with the Companies (Share Capital and Debentures) Rules. We draft the scheme, the grant documents and the board/shareholder approvals, and coordinate the tax treatment." },
    ],
  },

  // 2.8 ───────────────────────────────────────────────────────────────────
  {
    slug: "ma-valuation",
    title: "M&A, Valuation & Transaction Advisory",
    cluster: "Transactions & Capital",
    icon: "Handshake",
    tagline: "Deal advisory, due diligence and IBBI-registered valuation.",
    overview:
      "We support transactions from origination to close — buy- and sell-side advisory, financial/tax/legal due diligence, and IBBI-registered valuation for regulatory and deal purposes.",
    groups: [
      {
        title: "M&A / Deal Advisory",
        items: [
          { name: "Buy-side & sell-side advisory", slug: "ma-advisory" },
          { name: "Target screening & deal structuring" },
          { name: "SPA / SHA support" },
          { name: "Post-merger integration" },
        ],
      },
      {
        title: "Due Diligence",
        items: [
          { name: "Financial & tax due diligence", slug: "due-diligence" },
          { name: "Vendor & buyer DD" },
          { name: "Legal & regulatory DD coordination" },
        ],
      },
      {
        title: "Valuation (IBBI-registered)",
        items: [
          { name: "Business & equity valuation", slug: "business-valuation" },
          { name: "Brand / IP valuation" },
          { name: "ESOP & 409A-style valuation" },
          { name: "Purchase price allocation (PPA)" },
          { name: "Fairness opinions" },
        ],
      },
    ],
    relatedPractices: ["ipo-capital-markets", "international-tax-tp", "fema-rbi", "audit-assurance", "startup-vc-pe"],
    industries: ["technology", "pharma", "manufacturing", "funds-aif", "consumer-brands"],
    leadMagnets: ["statutory-audit-checklist"],
    faqs: [
      { q: "When is a registered valuer's report legally required?", a: "Under the Companies Act, an IBBI-registered valuer's report is required for matters such as share issues/transfers under section 62, schemes of arrangement, non-cash consideration, and certain related-party and insolvency transactions. FEMA, the Income-tax Act and SEBI prescribe valuation in their own contexts too." },
      { q: "What valuation methods do you use?", a: "We apply the income approach (discounted cash flow), the market approach (comparable companies and transactions) and the cost/asset approach, selecting and weighting them based on the asset, stage and purpose. The chosen method must also satisfy the specific regulation under which the valuation is required." },
      { q: "What does financial due diligence cover?", a: "Financial DD validates quality of earnings, normalised EBITDA, working-capital trends, debt and debt-like items, contingent liabilities, tax exposures and the reliability of management information — giving the acquirer a defensible basis for price, the SPA's representations and the net-debt/working-capital adjustments." },
      { q: "What is the difference between an asset deal and a share deal?", a: "In a share deal the buyer acquires the company with all its assets and liabilities (and tax history); in an asset/business-transfer deal the buyer cherry-picks identified assets and liabilities, often via a slump sale. The choice has materially different tax, stamp-duty, consent and liability consequences, which we model up front." },
      { q: "How is a slump sale taxed?", a: "A slump sale — transfer of a business undertaking for a lump-sum consideration without values assigned to individual assets — is taxed as capital gains on the difference between consideration and the undertaking's net worth, with the holding period determining short- or long-term treatment. The 2021 amendment requires fair-value-based consideration." },
      { q: "What is a fairness opinion and who needs one?", a: "A fairness opinion is an independent assessment of whether the financial terms of a transaction are fair to a particular party (often minority shareholders or the board). Listed-company schemes and certain related-party transactions rely on them for governance and SEBI/stock-exchange purposes." },
    ],
  },

  // 2.9 ───────────────────────────────────────────────────────────────────
  {
    slug: "ipo-capital-markets",
    title: "IPO & Capital Markets",
    cluster: "Transactions & Capital",
    icon: "LineChart",
    tagline: "Startup-to-listed: IPO readiness, SEBI ICDR and capital raising.",
    overview:
      "We take companies from IPO readiness through listing — restating financials to SEBI ICDR standards, supporting the DRHP, and advising on governance, pre-IPO placements and debt capital raising.",
    groups: [
      {
        title: "IPO Readiness & Listing",
        items: [
          { name: "IPO readiness & assurance", slug: "ipo-readiness" },
          { name: "Restated financials (SEBI ICDR)" },
          { name: "DRHP / RHP support" },
          { name: "Corporate governance for listing" },
        ],
      },
      {
        title: "Capital Raising",
        items: [
          { name: "Pre-IPO placement" },
          { name: "Debt restructuring & capital raising" },
          { name: "NCD / bond issuance support" },
        ],
      },
    ],
    relatedPractices: ["ma-valuation", "audit-assurance", "corporate-secretarial", "startup-vc-pe", "direct-tax"],
    industries: ["technology", "manufacturing", "consumer-brands", "bfsi", "pharma"],
    leadMagnets: ["statutory-audit-checklist"],
    faqs: [
      { q: "What financials are required for an IPO under SEBI ICDR?", a: "The offer document must contain restated consolidated financial statements for the last three financial years (and any stub period), prepared under Ind AS and restated for uniform accounting policies, prior-period items and regrouping, with the auditor's examination report. We project-manage the restatement and the comfort-letter process." },
      { q: "How long does IPO readiness typically take?", a: "For a company that is not yet listing-ready, the runway is usually 12–24 months — to convert to a public company, strengthen the board and committees, implement IFC, clean up related-party transactions, and produce three years of restateable financials. Early readiness work substantially de-risks the timeline." },
      { q: "What is a DRHP?", a: "The Draft Red Herring Prospectus is the preliminary offer document filed with SEBI and the stock exchanges for review. It contains the business, risk factors, financials, objects of the issue and capital structure, but not the final price or issue size, which are added in the RHP after SEBI's observations." },
      { q: "Can a company list on the SME platform instead of the main board?", a: "Yes. The BSE SME and NSE Emerge platforms have lighter eligibility (lower post-issue capital and track-record requirements) suited to smaller companies, with mandatory market-making and the option to migrate to the main board later. We advise on the right platform based on size and objectives." },
      { q: "What governance changes are needed before listing?", a: "A listing applicant must reconstitute its board with the required independent directors, constitute the audit, nomination-remuneration and stakeholder committees, appoint a company secretary and compliance officer, adopt insider-trading and related-party-transaction policies, and put internal financial controls in place under SEBI LODR." },
      { q: "What is a pre-IPO placement?", a: "A pre-IPO placement is a private allotment of shares to investors shortly before the public issue, often to anchor valuation and reduce the public offer size. It must respect lock-in and disclosure requirements; shares allotted in the year before filing carry specific lock-in under ICDR. We coordinate valuation, structuring and compliance." },
    ],
  },

  // 2.10 ──────────────────────────────────────────────────────────────────
  {
    slug: "startup-vc-pe",
    title: "Startup, VC/PE & Entrepreneurial Advisory",
    cluster: "Sector & Specialist",
    icon: "Rocket",
    tagline: "Founder-to-IPO: structuring, fundraising, ESOPs and compliance.",
    overview:
      "A single team for founders across the lifecycle — entity and cap-table structuring, DPIIT recognition and tax benefits, fundraising and ESOP design, and virtual-CFO support through to exit.",
    flagship: true,
    groups: [
      {
        title: "Structuring & Recognition",
        items: [
          { name: "Entity & cap-table structuring", slug: "startup-structuring" },
          { name: "DPIIT / Startup India & 80-IAC" },
          { name: "Angel-tax exemption documentation" },
          { name: "Delaware / Singapore flip" },
        ],
      },
      {
        title: "Fundraising & Equity",
        items: [
          { name: "Fundraising support (SAFE / CCPS)", slug: "startup-fundraising" },
          { name: "VC/PE term-sheet & DD support" },
          { name: "ESOP design & taxation", slug: "esop-structuring" },
        ],
      },
      {
        title: "Finance Function",
        items: [{ name: "Virtual CFO for startups" }],
      },
    ],
    relatedPractices: ["direct-tax", "ma-valuation", "fema-rbi", "consulting-cfo", "corporate-secretarial"],
    industries: ["startups", "technology", "fintech", "consumer-brands", "media"],
    leadMagnets: ["esop-calculator", "startup-financial-model", "old-vs-new-calculator"],
    faqs: [
      { q: "What are the benefits of DPIIT Startup India recognition?", a: "A DPIIT-recognised startup can claim a three-year tax holiday under section 80-IAC (within the first ten years), self-certify under several labour and environmental laws, access faster IP processing, defer ESOP perquisite tax, and become eligible for the angel-tax exemption regime and government funds-of-funds." },
      { q: "What is the difference between a SAFE and CCPS for fundraising?", a: "A SAFE (Simple Agreement for Future Equity) is a convertible instrument popular offshore but not a recognised Indian security; Indian startups typically raise via Compulsorily Convertible Preference Shares (CCPS) or convertible notes, which are FEMA-compliant and give investors preference and anti-dilution rights. We structure the instrument to be both investor-friendly and compliant." },
      { q: "Should my startup flip to a Delaware or Singapore holding structure?", a: "A flip can help access global investors and customers but triggers FEMA, transfer-pricing, valuation and exit-tax considerations, and the 'round-tripping' and ODI rules. We model the tax cost and compliance of a flip versus staying India-domiciled, and execute it compliantly where it makes commercial sense." },
      { q: "How should founders structure their cap table early on?", a: "We recommend clean founder vesting, an adequately sized ESOP pool, a single class of equity until institutional rounds, and CCPS for investors — documented in a shareholders' agreement. Getting this right early avoids dilution surprises, down-round friction and tax leakage at exit." },
      { q: "When does my startup need a virtual CFO?", a: "Typically once you have raised institutional capital, have monthly burn to manage and investor reporting obligations, but cannot yet justify a full-time CFO. A virtual CFO sets up MIS, manages cash runway, board reporting, fundraising readiness and compliance — scaling effort to your stage." },
      { q: "How are ESOPs taxed for startup employees?", a: "ESOPs are taxed as a salary perquisite at exercise (FMV minus exercise price) and as capital gains at sale. Employees of eligible DPIIT-recognised startups can defer the perquisite tax to the earliest of five years, sale, or leaving the company. Our ESOP calculator models the full liability." },
    ],
  },

  // 2.11 ──────────────────────────────────────────────────────────────────
  {
    slug: "family-office-wealth",
    title: "Family Office & Private Wealth",
    cluster: "Sector & Specialist",
    icon: "Gem",
    tagline: "Succession, estate and private-wealth structuring for UHNI families.",
    overview:
      "We help promoter families and UHNIs structure, govern and transition wealth — family-office setup, succession and estate planning, private trusts and offshore structuring, with full FATCA/CRS compliance.",
    groups: [
      {
        title: "Family Office & Governance",
        items: [
          { name: "Family office setup & governance", slug: "family-office-setup" },
          { name: "Family constitution & charter" },
        ],
      },
      {
        title: "Succession & Estate",
        items: [
          { name: "Succession & estate planning", slug: "succession-planning" },
          { name: "Private / family trusts" },
          { name: "Will & nomination advisory" },
        ],
      },
      {
        title: "Wealth Structuring",
        items: [
          { name: "Offshore wealth structuring" },
          { name: "NRI wealth & repatriation" },
          { name: "FATCA / CRS compliance" },
          { name: "Philanthropy / CSR structuring" },
        ],
      },
    ],
    relatedPractices: ["direct-tax", "aif-funds", "international-tax-tp", "ngo-trust-section8", "fema-rbi"],
    industries: ["family-offices", "nri", "funds-aif", "real-estate"],
    leadMagnets: ["nri-tax-checklist", "fatca-crs-guide"],
    faqs: [
      { q: "Why set up a private family trust?", a: "A discretionary family trust holds and transitions assets across generations, ring-fences them from business and personal liabilities, avoids the cost and delay of probate, and enables structured, tax-efficient succession with clear governance — far more robust than relying on a will alone." },
      { q: "Is there an inheritance or estate tax in India?", a: "India currently has no estate or inheritance tax. However, succession still raises income-tax, clubbing, stamp-duty and FEMA issues, and the absence of a tax does not remove the need for clear, dispute-proof transfer structures — which is what estate planning provides." },
      { q: "What does a family office actually do?", a: "A family office consolidates a family's investment management, accounting and tax, succession, philanthropy, governance and next-generation education under one structure — single-family or multi-family. We help design the operating model, governance and reporting, and run the finance and compliance function." },
      { q: "How are private trusts taxed in India?", a: "A specific (determinate) trust is generally taxed in the hands of the trustee at the rates applicable to the beneficiaries, while a discretionary trust is taxed at the maximum marginal rate unless it qualifies for relief. The settlor's intent, beneficiary class and source of income all drive the outcome — we structure to optimise it." },
      { q: "What are FATCA and CRS obligations for wealthy families?", a: "FATCA (US) and CRS (OECD) require financial institutions to report account holders' details to tax authorities through automatic exchange of information. Families with cross-border accounts must complete self-certifications correctly and ensure consistent disclosure across jurisdictions — we manage the self-certs and reconcile reporting." },
      { q: "How do you plan succession for a family business?", a: "We separate ownership from management, often via a holding company or trust, draft a family constitution governing roles, dividends, dispute resolution and exit, align it with wills and shareholding, and sequence the transfer to manage tax and control — so the business survives the generational handover intact." },
    ],
  },

  // 2.12 ──────────────────────────────────────────────────────────────────
  {
    slug: "esg-sustainability",
    title: "ESG, Sustainability & CSR",
    cluster: "Sector & Specialist",
    icon: "Leaf",
    tagline: "BRSR, CSR and net-zero — strategy through assurance.",
    overview:
      "We help companies build credible ESG programmes — from BRSR readiness and reporting to carbon accounting, net-zero roadmaps and CSR compliance — and stand behind them with independent assurance.",
    groups: [
      {
        title: "Reporting & Assurance",
        items: [
          { name: "BRSR readiness & reporting", slug: "brsr-reporting" },
          { name: "GRI / ISSB advisory" },
          { name: "ESG ratings advisory" },
        ],
      },
      {
        title: "Strategy & Decarbonisation",
        items: [
          { name: "ESG strategy & materiality" },
          { name: "Carbon accounting (Scope 1/2/3)" },
          { name: "Net-zero roadmap" },
          { name: "Sustainability-linked finance" },
        ],
      },
      {
        title: "CSR Compliance",
        items: [
          { name: "CSR policy & spend compliance + audit", slug: "csr-compliance" },
        ],
      },
    ],
    relatedPractices: ["audit-assurance", "consulting-cfo", "corporate-secretarial", "real-estate-infra", "ipo-capital-markets"],
    industries: ["manufacturing", "energy", "bfsi", "infrastructure", "consumer-brands"],
    leadMagnets: ["brsr-scorecard"],
    faqs: [
      { q: "Which companies must file a BRSR?", a: "The Business Responsibility and Sustainability Report is mandatory for the top 1,000 listed companies by market capitalisation, filed as part of the annual report. It captures performance across nine principles with quantitative ESG metrics, and the BRSR Core indicators are subject to phased assurance." },
      { q: "What is CSR spending obligation under the Companies Act?", a: "A company meeting any of the thresholds — net worth ₹500 crore, turnover ₹1,000 crore, or net profit ₹5 crore — must spend at least 2% of its average net profit of the preceding three years on CSR, through a board CSR committee and policy, with unspent amounts transferred to specified funds or escrow." },
      { q: "What are Scope 1, 2 and 3 emissions?", a: "Scope 1 covers direct emissions from owned sources; Scope 2 covers indirect emissions from purchased electricity, steam and cooling; Scope 3 covers all other value-chain emissions (suppliers, logistics, product use, travel). BRSR Core and most net-zero commitments require measuring all three." },
      { q: "What is the difference between ESG assurance and an ESG rating?", a: "Assurance is an independent practitioner's opinion on whether reported ESG data is reliable and prepared per a stated framework. A rating is a third-party agency's assessment of ESG risk or performance used by investors. We provide assurance and advise on improving the inputs that drive ratings." },
      { q: "How does a company start a net-zero roadmap?", a: "It begins with a Scope 1/2/3 greenhouse-gas inventory and a baseline year, followed by science-based reduction targets, a decarbonisation lever analysis (efficiency, renewables, electrification, value-chain), a credible offset strategy for residual emissions, and transparent annual progress reporting." },
      { q: "Is the ISSB standard relevant for Indian companies?", a: "The ISSB's IFRS S1 and S2 are becoming the global baseline for sustainability and climate disclosure. While Indian reporting is anchored on BRSR, multinationals and companies with global investors are increasingly aligning to ISSB. We map BRSR disclosures to ISSB to avoid duplicate reporting." },
    ],
  },

  // 2.13 ──────────────────────────────────────────────────────────────────
  {
    slug: "insolvency-ibc",
    title: "Insolvency & IBC",
    cluster: "Regulatory & Cross-Border",
    icon: "Scale",
    tagline: "CIRP and resolution led by an IBBI-registered Insolvency Professional.",
    overview:
      "We manage corporate insolvency and resolution under the IBC — led by an IBBI-registered Insolvency Professional — covering CIRP, liquidation, claims, resolution-plan evaluation and creditor advisory.",
    credentialBadge: "IBBI-registered IP",
    groups: [
      {
        title: "Resolution & Process Management",
        items: [
          { name: "CIRP management", slug: "cirp-management" },
          { name: "Resolution professional services" },
          { name: "Resolution-plan evaluation" },
          { name: "Pre-pack insolvency (PPIRP)" },
        ],
      },
      {
        title: "Liquidation & Claims",
        items: [
          { name: "Liquidation" },
          { name: "Claims verification & collation" },
          { name: "Personal-guarantor insolvency" },
        ],
      },
      {
        title: "Advisory",
        items: [{ name: "Creditor & lender advisory" }],
      },
    ],
    relatedPractices: ["ma-valuation", "audit-assurance", "corporate-secretarial", "consulting-cfo", "direct-tax"],
    industries: ["bfsi", "manufacturing", "real-estate", "infrastructure", "energy"],
    leadMagnets: [],
    faqs: [
      { q: "What is the CIRP timeline under the IBC?", a: "The Corporate Insolvency Resolution Process must be completed within 180 days, extendable by 90 days, with an overall outer limit of 330 days including litigation. During this period a moratorium protects the corporate debtor and an Interim/Resolution Professional runs it as a going concern." },
      { q: "Who can initiate insolvency proceedings?", a: "A financial creditor (section 7), an operational creditor after a demand notice (section 9), or the corporate debtor itself (section 10) can apply to the NCLT, provided the default exceeds the ₹1 crore threshold. We assess admissibility and prepare or defend the application." },
      { q: "What does a Resolution Professional do?", a: "The RP takes custody of the corporate debtor's assets, runs it as a going concern, constitutes and reports to the Committee of Creditors, verifies claims, invites and examines resolution plans, and places the CoC-approved plan before the NCLT for approval — all under IBBI conduct standards." },
      { q: "What is pre-packaged insolvency (PPIRP)?", a: "Pre-pack is a faster, debtor-initiated resolution available to MSMEs, where a base resolution plan is negotiated before filing and approved by the NCLT within a compressed timeline, minimising business disruption and value erosion. Eligibility and the Swiss-challenge mechanism have specific conditions we navigate." },
      { q: "Does personal-guarantor insolvency apply to promoters?", a: "Yes. The IBC's provisions for insolvency of personal guarantors to corporate debtors allow creditors to proceed against promoters who guaranteed the company's debt, in coordination with the corporate process before the same NCLT. We advise both creditors and guarantors on exposure and strategy." },
      { q: "How are creditors paid in liquidation?", a: "Liquidation proceeds are distributed in the 'waterfall' order under section 53 — insolvency costs first, then secured creditors and workmen dues, employee dues, unsecured financial creditors, government dues, and finally any remaining stakeholders and equity. We compute entitlements and manage the distribution." },
    ],
  },

  // 2.14 ──────────────────────────────────────────────────────────────────
  {
    slug: "consulting-cfo",
    title: "Management Consulting & CFO Services",
    cluster: "Advisory & Outsourcing",
    icon: "Target",
    tagline: "Fractional CFO, cost-reduction and performance management.",
    overview:
      "Strategic finance and management consulting — including our signature Cost-Reduction Audit, fractional CFO services, MIS and performance management, and internal-controls advisory.",
    flagship: true,
    groups: [
      {
        title: "Strategy & Growth",
        items: [{ name: "Business strategy & growth advisory" }],
      },
      {
        title: "Cost Reduction & Efficiency",
        items: [
          { name: "Cost-Reduction Audit (signature)", slug: "cost-reduction-audit", blurb: "A diagnostic that surfaces quick-win and structural savings across procurement, overheads and process." },
        ],
      },
      {
        title: "Performance Management & Analytics",
        items: [
          { name: "MIS & management dashboards", slug: "mis-dashboards" },
          { name: "KPI frameworks & analytics" },
        ],
      },
      {
        title: "CFO-as-a-Service",
        items: [
          { name: "Fractional / virtual CFO", slug: "virtual-cfo" },
          { name: "Board & investor reporting" },
        ],
      },
      {
        title: "Risk & Controls",
        items: [{ name: "Risk management & internal controls" }],
      },
    ],
    relatedPractices: ["finance-accounting-outsourcing", "startup-vc-pe", "audit-assurance", "direct-tax", "ma-valuation"],
    industries: ["startups", "technology", "manufacturing", "retail", "gcc"],
    leadMagnets: ["cost-reduction-assessment", "cfo-roi-calculator", "startup-financial-model", "mis-dashboard-template"],
    faqs: [
      { q: "What is a Cost-Reduction Audit?", a: "It is a structured diagnostic that maps your cost base — procurement, overheads, logistics, manpower, taxes and financing — benchmarks it, and surfaces quick wins and structural savings with an implementation roadmap. Most engagements identify savings well in excess of the fee; we begin with a complimentary opportunity assessment." },
      { q: "When does it make sense to hire a fractional CFO?", a: "A fractional CFO suits companies that need senior financial leadership — fundraising, MIS, cash and margin management, board reporting — but do not yet need or cannot justify a full-time CFO. You get the seniority at a fraction of the cost, scaling up as you grow." },
      { q: "How is a virtual CFO different from an accountant?", a: "An accountant records and reports what has happened; a virtual CFO is forward-looking — building budgets and forecasts, managing cash runway and unit economics, driving margin and cost decisions, preparing for fundraising and due diligence, and translating numbers into strategy for the board." },
      { q: "What should good management reporting (MIS) contain?", a: "A useful MIS goes beyond the P&L to track the drivers of the business — revenue by segment, gross and contribution margins, cash flow and runway, working-capital cycle, KPI dashboards and budget-versus-actuals — delivered on a reliable monthly cadence the board can act on." },
      { q: "How quickly can a cost-reduction programme show results?", a: "Quick wins — renegotiated contracts, eliminated leakages, tax and financing optimisation — often land within the first one to two quarters, while structural changes to process and footprint deliver over the following year. We track realised savings against the baseline throughout." },
      { q: "Can you support our existing finance team rather than replace it?", a: "Yes. We frequently work alongside in-house teams in a co-sourced model — providing senior oversight, building systems and controls, and upskilling the team — so that capability stays in-house after our engagement ends." },
    ],
  },

  // 2.15 ──────────────────────────────────────────────────────────────────
  {
    slug: "finance-accounting-outsourcing",
    title: "Finance, Accounting & Compliance Outsourcing",
    cluster: "Advisory & Outsourcing",
    icon: "BookOpenCheck",
    tagline: "Bookkeeping to controllership — accurate, compliant, tech-driven.",
    overview:
      "We run the finance function for growing companies and global delivery centres — bookkeeping, payroll, statutory compliance, AP/AR and management reporting — on modern accounting stacks.",
    groups: [
      {
        title: "Accounting & Bookkeeping",
        items: [
          { name: "Bookkeeping & accounting (Tally / Zoho / SAP)", slug: "bookkeeping" },
          { name: "Period-end close" },
          { name: "AP / AR management" },
        ],
      },
      {
        title: "Payroll & Statutory",
        items: [
          { name: "Payroll & PF / ESI / PT", slug: "payroll-compliance" },
          { name: "Statutory compliance management" },
        ],
      },
      {
        title: "Reporting & Delivery",
        items: [
          { name: "MIS & management reporting" },
          { name: "Virtual accounting team" },
          { name: "GCC / global delivery support" },
        ],
      },
    ],
    relatedPractices: ["consulting-cfo", "direct-tax", "indirect-tax-gst", "corporate-secretarial", "startup-vc-pe"],
    industries: ["startups", "gcc", "technology", "retail", "consumer-brands"],
    leadMagnets: ["mis-dashboard-template", "board-reporting-pack"],
    faqs: [
      { q: "Which accounting software do you work on?", a: "We work across Tally, Zoho Books, QuickBooks, Xero, SAP and Oracle NetSuite, and can migrate or run parallel books. We recommend a stack based on your size, transaction volume, multi-entity needs and reporting requirements." },
      { q: "What payroll compliances do you handle?", a: "We run end-to-end payroll including TDS on salaries, Provident Fund, ESI, Professional Tax and Labour Welfare Fund computation and filing, payslips, Form 16, and full-and-final settlements — with statutory registers maintained and returns filed on time." },
      { q: "How do you ensure data confidentiality in outsourcing?", a: "We work under signed confidentiality and data-processing agreements, use role-based access, secure cloud environments and need-to-know controls, and align processing with the DPDP Act. Client data is segregated and never used beyond the engagement." },
      { q: "Can you support a Global Capability Centre (GCC) in India?", a: "Yes. We provide India finance-and-accounting delivery for GCCs and offshore teams — statutory books, payroll, GST and TDS, transfer-pricing coordination and management reporting in the parent's format and timeline — so the parent gets a single compliant point of contact." },
      { q: "What is included in a period-end close?", a: "A disciplined month-end close covers bank and ledger reconciliations, accruals and prepayments, depreciation, inter-company eliminations, GST and TDS reconciliations, and a reviewed trial balance and MIS within an agreed number of working days — giving management timely, reliable numbers." },
      { q: "Do you also file our GST and TDS returns?", a: "Yes. Statutory compliance management bundles periodic GST returns, TDS computation and returns, advance-tax workings and ROC support with the accounting, so the books and the filings stay reconciled and nothing is missed." },
    ],
  },

  // 2.16 ──────────────────────────────────────────────────────────────────
  {
    slug: "real-estate-infra",
    title: "Real Estate, REIT & Infrastructure",
    cluster: "Sector & Specialist",
    icon: "Building2",
    tagline: "RERA, REIT/InvIT and project-finance advisory.",
    overview:
      "Sector-specialist advisory for developers, funds and infrastructure sponsors — RERA compliance, REIT/InvIT structuring and audit, project finance and capex monitoring, and redevelopment tax.",
    groups: [
      {
        title: "RERA & Compliance",
        items: [{ name: "RERA registration & compliance", slug: "rera-compliance" }],
      },
      {
        title: "REIT / InvIT",
        items: [
          { name: "REIT / InvIT structuring & audit", slug: "reit-invit" },
          { name: "Real-estate fund (AIF) support" },
        ],
      },
      {
        title: "Project Finance",
        items: [
          { name: "Project finance & lender's advisory" },
          { name: "Capex monitoring" },
          { name: "JDA / redevelopment tax" },
        ],
      },
    ],
    relatedPractices: ["aif-funds", "ma-valuation", "direct-tax", "indirect-tax-gst", "audit-assurance"],
    industries: ["real-estate", "infrastructure", "funds-aif", "energy"],
    leadMagnets: [],
    faqs: [
      { q: "When must a real-estate project be registered under RERA?", a: "Any project where the land exceeds 500 square metres or has more than eight units (thresholds vary slightly by state) must be registered with the state RERA before marketing or sale, with quarterly progress disclosures and 70% of buyer collections kept in a separate project account." },
      { q: "How is a Joint Development Agreement (JDA) taxed?", a: "Under section 45(5A), for individual/HUF landowners the capital gain on a JDA is deferred to the year the completion certificate is issued, with stamp-duty value of the share received plus cash as consideration. GST and the developer's tax treatment differ — we structure the JDA to manage both sides." },
      { q: "What is the difference between a REIT and an InvIT?", a: "A REIT holds income-generating real estate; an InvIT holds infrastructure assets such as roads, transmission or pipelines. Both are SEBI-regulated trusts that pool investor capital, must distribute at least 90% of net distributable cash flows, and have specific listing, valuation and audit requirements." },
      { q: "What is lender's / project-finance advisory?", a: "We support lenders and sponsors with techno-economic appraisal review, financial-model validation, drawdown certification, end-use and capex monitoring, and periodic monitoring reports through the construction and ramp-up phases — protecting the lender and keeping the project bankable." },
      { q: "How is GST applied to under-construction property?", a: "Sale of under-construction residential units attracts GST (1% for affordable, 5% for other residential, without input tax credit, on the prescribed value), while ready-to-move-in property with a completion certificate is outside GST. Commercial and mixed-use have their own rates — we map the correct treatment per project." },
      { q: "Can a real-estate fund be set up as an AIF?", a: "Yes. Real-estate funds are commonly structured as Category II AIFs, giving a regulated, pass-through vehicle to pool capital for development or rent-yielding assets. We handle the SEBI registration, structuring, valuation and audit, drawing on our dedicated AIF practice." },
    ],
  },

  // 2.17 ──────────────────────────────────────────────────────────────────
  {
    slug: "ngo-trust-section8",
    title: "NGO, Trust & Section 8 / Charitable",
    cluster: "Sector & Specialist",
    icon: "HeartHandshake",
    tagline: "Formation to 12A/80G/FCRA compliance for the social sector.",
    overview:
      "We set up and keep compliant the full range of social-sector entities — trusts, societies and Section 8 companies — including 12A/80G registration, FCRA, and CSR-implementing-agency compliance.",
    groups: [
      {
        title: "Formation",
        items: [
          { name: "Trust / Society / Section 8 formation", slug: "ngo-formation" },
          { name: "Darpan / NITI Aayog registration" },
        ],
      },
      {
        title: "Tax Registrations",
        items: [
          { name: "12A & 80G registration", slug: "12a-80g-registration" },
          { name: "FCRA registration & returns" },
        ],
      },
      {
        title: "Compliance & Audit",
        items: [
          { name: "NGO audit & utilisation certificates" },
          { name: "CSR-implementing-agency compliance" },
          { name: "Foreign-grant compliance" },
        ],
      },
    ],
    relatedPractices: ["audit-assurance", "direct-tax", "corporate-secretarial", "family-office-wealth", "esg-sustainability"],
    industries: ["ngos", "education", "healthcare"],
    leadMagnets: [],
    faqs: [
      { q: "What is the difference between a trust, society and Section 8 company?", a: "A trust is the simplest, governed by a trust deed and state law; a society needs a minimum membership and is governed by the Societies Registration Act with more democratic governance; a Section 8 company is governed by the Companies Act with the highest compliance and credibility, often preferred for institutional and CSR funding." },
      { q: "What are 12A and 80G registrations?", a: "12A (now 12AB) registration exempts a charitable entity's income from tax subject to application of funds; 80G registration lets donors claim a deduction for their donations. Both are now granted for limited periods and must be renewed, with provisional registration available for new entities." },
      { q: "When is FCRA registration required?", a: "Any entity wishing to receive foreign contributions must register under the Foreign Contribution (Regulation) Act, or obtain prior permission for a specific donation, and route all foreign funds through the designated SBI New Delhi main-branch account. Annual FC-4 returns and strict end-use and administrative-expense limits apply." },
      { q: "Can an NGO be a CSR implementing agency?", a: "Yes, if it is registered with the MCA in Form CSR-1 and meets the eligibility (a registered trust/society/Section 8 with 12A and 80G and a three-year track record, or set up by the company/government). We handle CSR-1 registration and the related reporting to funder companies." },
      { q: "What audit and reporting must a charitable entity do?", a: "An entity with income above the exemption limit must have its accounts audited and file Form 10B/10BB along with the income-tax return, maintain books and donation records, file FCRA returns if applicable, and issue utilisation certificates to funders. We manage the full annual compliance calendar." },
      { q: "How much can an NGO spend on administrative costs under FCRA?", a: "FCRA caps administrative expenses at 20% of the foreign contribution utilised in a financial year. Defining what counts as administrative versus programme expenditure requires care; we set up the accounting so the entity stays within the limit and can demonstrate compliance." },
    ],
  },

  // 2.18 ──────────────────────────────────────────────────────────────────
  {
    slug: "global-entity-setup",
    title: "Global Entity Setup & International Expansion",
    cluster: "Regulatory & Cross-Border",
    icon: "Network",
    tagline: "India-entry and outbound set-up across US, UK, UAE, Singapore.",
    overview:
      "A single point of contact for cross-border expansion — India entry for foreign companies, outbound subsidiary setup, GIFT City entities, and multi-country compliance management with an integrated tax and FEMA wrap.",
    groups: [
      {
        title: "Inbound — India Entry",
        items: [
          { name: "India entry / setup for foreign companies", slug: "india-entry" },
          { name: "Entity option advisory (WOS / branch / LO)" },
          { name: "GIFT City entity setup" },
        ],
      },
      {
        title: "Outbound Expansion",
        items: [
          { name: "Outbound subsidiary setup" },
          { name: "EOR / PEO support" },
          { name: "Registered-agent coordination" },
        ],
      },
      {
        title: "Ongoing Global Compliance",
        items: [
          { name: "Global compliance management (single point)", slug: "global-compliance" },
          { name: "Cross-border tax & FEMA wrap" },
        ],
      },
    ],
    relatedPractices: ["fema-rbi", "international-tax-tp", "corporate-secretarial", "finance-accounting-outsourcing", "aif-funds"],
    industries: ["technology", "gcc", "manufacturing", "pharma", "fintech"],
    leadMagnets: ["fdi-compliance-checklist", "holding-comparison"],
    faqs: [
      { q: "What are the options for a foreign company to enter India?", a: "A foreign company can set up a wholly-owned subsidiary (private limited company) for full operations, a branch or project office for defined activities, or a liaison office for representation only. The choice drives the permitted activities, tax exposure, FEMA approvals and compliance burden — we match it to your objectives." },
      { q: "How long does it take to set up an Indian subsidiary?", a: "From document readiness, incorporating a wholly-owned subsidiary typically takes about two to three weeks including name approval, incorporation, PAN/TAN and bank account, followed by GST and other registrations. The FDI reporting (FC-GPR) is completed within 30 days of share allotment." },
      { q: "What is a Global Capability Centre and how is it set up?", a: "A GCC is a captive offshore unit delivering technology, finance, R&D or support services to its overseas parent. It is usually a wholly-owned Indian subsidiary, with transfer-pricing (often cost-plus) governing inter-company charges. We handle setup, ongoing compliance and the TP documentation." },
      { q: "Why use GIFT City for international expansion?", a: "GIFT City IFSC offers a regulated, dollar-denominated jurisdiction within India with tax holidays and lighter exchange-control friction — attractive for funds, finance, aircraft/ship leasing and global treasury. We advise on the entity, the IFSCA registration and the tax position." },
      { q: "Can you manage compliance across multiple countries from one point?", a: "Yes. Through our international desks and alliance network we provide a single point of contact that coordinates accounting, tax and statutory filings across jurisdictions, giving multi-country groups consolidated visibility and one accountable team rather than fragmented local providers." },
      { q: "What is an EOR/PEO and when should I use one?", a: "An Employer of Record / Professional Employer Organisation lets you hire staff in a country before incorporating an entity, with the EOR acting as the legal employer for payroll and compliance. It is ideal for testing a market or hiring a small team quickly; we advise when to use an EOR versus setting up your own entity." },
    ],
  },
];

export const practiceBySlug = (slug: string) => practices.find((p) => p.slug === slug);

export const practicesByCluster = () => {
  const map = new Map<string, Practice[]>();
  for (const p of practices) {
    const arr = map.get(p.cluster) ?? [];
    arr.push(p);
    map.set(p.cluster, arr);
  }
  return map;
};

/** Services that have an individual page (slug set). */
export function servicedPagesForPractice(slug: string) {
  const p = practiceBySlug(slug);
  if (!p) return [];
  return p.groups
    .flatMap((g) => g.items)
    .filter((i): i is { name: string; slug: string; blurb?: string } => Boolean(i.slug));
}

export function allServicePaths() {
  return practices.flatMap((p) =>
    p.groups
      .flatMap((g) => g.items)
      .filter((i) => i.slug)
      .map((i) => ({ practice: p.slug, service: i.slug as string })),
  );
}

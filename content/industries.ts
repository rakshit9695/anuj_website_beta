import type { Industry } from "./types";

/** 25 industry landing pages. `relatedPractices` are practice slugs. */
export const industries: Industry[] = [
  {
    slug: "startups",
    title: "Startups",
    icon: "Rocket",
    intro:
      "From incorporation to exit, we are the finance, tax and compliance partner founders rely on — structuring cap tables, securing tax benefits and keeping investors comfortable.",
    challenges: [
      "Choosing the right entity and cap-table structure before institutional rounds",
      "Securing DPIIT recognition and the 80-IAC tax holiday",
      "Designing ESOP pools and managing employee tax",
      "Staying compliant while moving fast across ROC, GST and FEMA",
    ],
    howWeHelp: [
      { name: "Entity & cap-table structuring" },
      { name: "DPIIT / Startup India & 80-IAC" },
      { name: "ESOP design & taxation" },
      { name: "Virtual CFO & fundraising support" },
    ],
    relatedPractices: ["startup-vc-pe", "direct-tax", "corporate-secretarial", "consulting-cfo", "ma-valuation"],
    leadMagnets: ["esop-calculator", "startup-financial-model"],
  },
  {
    slug: "technology",
    title: "Technology",
    icon: "Cpu",
    intro:
      "We advise SaaS, IT services and product companies on cross-border structuring, transfer pricing, ESOPs and the GST nuances of digital and export revenue.",
    challenges: [
      "Transfer pricing on inter-company software and services",
      "GST on export of services and SEZ/STPI benefits",
      "Permanent-establishment and SEP exposure abroad",
      "Equity compensation across multiple geographies",
    ],
    howWeHelp: [
      { name: "Transfer pricing & international tax" },
      { name: "GST refunds on export of services" },
      { name: "ESOP structuring & taxation" },
      { name: "Global entity setup & GCC support" },
    ],
    relatedPractices: ["international-tax-tp", "indirect-tax-gst", "global-entity-setup", "startup-vc-pe", "ma-valuation"],
    leadMagnets: ["intl-tax-risk-checklist", "gst-refund-checklist"],
  },
  {
    slug: "fintech",
    title: "Fintech",
    icon: "CreditCard",
    intro:
      "Fintechs operate at the intersection of RBI, SEBI and tax regulation. We help you stay licensed, compliant and investable as you scale.",
    challenges: [
      "Navigating RBI/SEBI licensing and regulatory perimeters",
      "FDI and downstream-investment compliance",
      "GST on financial and intermediary services",
      "Data-protection and DPDP obligations",
    ],
    howWeHelp: [
      { name: "FEMA / RBI regulatory advisory" },
      { name: "Corporate secretarial & governance" },
      { name: "Indirect tax on financial services" },
      { name: "Fundraising & valuation support" },
    ],
    relatedPractices: ["fema-rbi", "indirect-tax-gst", "corporate-secretarial", "startup-vc-pe", "audit-assurance"],
    leadMagnets: ["fdi-compliance-checklist"],
  },
  {
    slug: "pharma",
    title: "Pharma & Life Sciences",
    icon: "Pill",
    intro:
      "Capital-intensive, heavily regulated and export-driven — we support pharma and life-sciences companies on transfer pricing, M&A, R&D incentives and assurance.",
    challenges: [
      "Transfer pricing on API, formulations and licensing",
      "Cross-border M&A and out-licensing structures",
      "Customs, FTP and export incentives",
      "Quality-of-earnings rigour for investors and acquirers",
    ],
    howWeHelp: [
      { name: "Transfer pricing & DTAA advisory" },
      { name: "M&A, due diligence & valuation" },
      { name: "Indirect tax, customs & FTP" },
      { name: "Statutory & internal audit" },
    ],
    relatedPractices: ["international-tax-tp", "ma-valuation", "indirect-tax-gst", "audit-assurance", "global-entity-setup"],
    leadMagnets: ["holding-comparison"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: "Stethoscope",
    intro:
      "Hospitals, diagnostics and health-tech face complex structuring, funding and compliance demands. We bring sector-aware tax, audit and CFO support.",
    challenges: [
      "Entity structuring across clinical and non-clinical activities",
      "GST treatment of healthcare and ancillary services",
      "Fundraising, valuation and PE investment readiness",
      "Trust/Section 8 structures for not-for-profit healthcare",
    ],
    howWeHelp: [
      { name: "Tax & GST advisory" },
      { name: "Valuation & transaction advisory" },
      { name: "Virtual CFO & MIS" },
      { name: "NGO / trust structuring where applicable" },
    ],
    relatedPractices: ["direct-tax", "indirect-tax-gst", "ma-valuation", "consulting-cfo", "ngo-trust-section8"],
    leadMagnets: [],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: "Factory",
    intro:
      "From working-capital discipline to indirect-tax optimisation and cost reduction, we help manufacturers protect margins and fund growth.",
    challenges: [
      "GST, customs classification and export incentives",
      "Cost structure, procurement and working-capital efficiency",
      "Capex financing and project monitoring",
      "Ind AS, inventory and IFC rigour",
    ],
    howWeHelp: [
      { name: "Indirect tax, customs & RoDTEP" },
      { name: "Cost-Reduction Audit" },
      { name: "Statutory & internal audit" },
      { name: "Project finance & capex monitoring" },
    ],
    relatedPractices: ["indirect-tax-gst", "consulting-cfo", "audit-assurance", "real-estate-infra", "direct-tax"],
    leadMagnets: ["cost-reduction-assessment", "gst-health-check"],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    icon: "Building",
    intro:
      "RERA, complex GST, JDA taxation and fund structures — real estate demands specialist hands. Our dedicated practice covers developers, funds and REITs.",
    challenges: [
      "RERA registration and escrow compliance",
      "JDA, redevelopment and slump-sale taxation",
      "GST on under-construction and works contracts",
      "Structuring real-estate funds and REITs",
    ],
    howWeHelp: [
      { name: "RERA compliance & registration" },
      { name: "Real-estate fund (AIF) & REIT structuring" },
      { name: "JDA / redevelopment tax" },
      { name: "Project finance & lender's advisory" },
    ],
    relatedPractices: ["real-estate-infra", "aif-funds", "indirect-tax-gst", "direct-tax", "ma-valuation"],
    leadMagnets: [],
  },
  {
    slug: "bfsi",
    title: "BFSI",
    icon: "Landmark",
    intro:
      "Banks, NBFCs and financial institutions operate under intense regulatory scrutiny. We deliver specialist audit, regulatory and tax support.",
    challenges: [
      "RBI concurrent, statutory and NBFC audit requirements",
      "Ind AS expected-credit-loss and prudential norms",
      "GST on financial services and ITC reversals",
      "Stressed-asset resolution under the IBC",
    ],
    howWeHelp: [
      { name: "Bank, NBFC & concurrent audit" },
      { name: "Regulatory & FEMA advisory" },
      { name: "Insolvency & resolution support" },
      { name: "Indirect tax on financial services" },
    ],
    relatedPractices: ["audit-assurance", "fema-rbi", "insolvency-ibc", "indirect-tax-gst", "consulting-cfo"],
    leadMagnets: [],
  },
  {
    slug: "insurance",
    title: "Insurance",
    icon: "ShieldCheck",
    intro:
      "Insurers and intermediaries face IRDAI-specific audit, solvency and tax considerations. We bring the sector expertise to match.",
    challenges: [
      "IRDAI audit and solvency reporting",
      "Ind AS 117 insurance-contracts transition",
      "GST and reinsurance tax treatment",
      "Investment and AIF allocation compliance",
    ],
    howWeHelp: [
      { name: "IRDAI statutory audit" },
      { name: "Ind AS advisory" },
      { name: "Indirect tax advisory" },
      { name: "Investment-structure & AIF support" },
    ],
    relatedPractices: ["audit-assurance", "direct-tax", "indirect-tax-gst", "aif-funds", "fema-rbi"],
    leadMagnets: [],
  },
  {
    slug: "funds-aif",
    title: "Funds & AIFs",
    icon: "TrendingUp",
    intro:
      "Our flagship funds practice serves managers across Category I/II/III — from SEBI registration and PPM to fund audit, valuation and investor reporting.",
    challenges: [
      "SEBI AIF registration and ongoing compliance",
      "Fund taxation and pass-through treatment",
      "Valuation, waterfall and carry computation",
      "FATCA/CRS and foreign-investor onboarding",
    ],
    howWeHelp: [
      { name: "AIF formation & SEBI registration" },
      { name: "Fund audit & accounting" },
      { name: "Waterfall / IRR & investor reporting" },
      { name: "GIFT City IFSC fund setup" },
    ],
    relatedPractices: ["aif-funds", "fema-rbi", "international-tax-tp", "family-office-wealth", "audit-assurance"],
    leadMagnets: ["aif-setup-checklist", "aif-waterfall-calculator", "giftcity-comparison"],
  },
  {
    slug: "family-offices",
    title: "Family Offices",
    icon: "Gem",
    intro:
      "We help promoter families structure, govern and transition wealth — combining family-office design, succession planning and investment-structure expertise.",
    challenges: [
      "Succession and estate planning across generations",
      "Consolidated investment and tax oversight",
      "Trust and offshore structuring",
      "Governance and next-generation transition",
    ],
    howWeHelp: [
      { name: "Family office setup & governance" },
      { name: "Succession & estate planning" },
      { name: "Private trusts & offshore structuring" },
      { name: "AIF & private-wealth allocation" },
    ],
    relatedPractices: ["family-office-wealth", "aif-funds", "direct-tax", "international-tax-tp", "ngo-trust-section8"],
    leadMagnets: ["nri-tax-checklist", "fatca-crs-guide"],
  },
  {
    slug: "exporters",
    title: "Exporters",
    icon: "Ship",
    intro:
      "Exporters of goods and services need refunds flowing and incentives captured. We optimise GST refunds, FTP benefits and cross-border tax.",
    challenges: [
      "GST refunds on exports and SEZ supplies",
      "FTP, RoDTEP and duty-drawback claims",
      "Foreign-exchange and FEMA realisation",
      "Transfer pricing on related-party exports",
    ],
    howWeHelp: [
      { name: "GST export refunds & LUT" },
      { name: "FTP / RoDTEP / drawback advisory" },
      { name: "FEMA realisation & reporting" },
      { name: "International tax & TP" },
    ],
    relatedPractices: ["indirect-tax-gst", "fema-rbi", "international-tax-tp", "consulting-cfo", "audit-assurance"],
    leadMagnets: ["gst-refund-checklist", "gst-return-calendar"],
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    icon: "TrafficCone",
    intro:
      "Infrastructure sponsors and lenders rely on us for project finance, InvIT structuring, capex monitoring and resolution of stressed assets.",
    challenges: [
      "Project finance and lender's-engineer style monitoring",
      "InvIT structuring and distribution norms",
      "GST on works contracts and EPC",
      "Stressed-asset resolution under the IBC",
    ],
    howWeHelp: [
      { name: "Project finance & lender's advisory" },
      { name: "InvIT structuring & audit" },
      { name: "Indirect tax on EPC / works contracts" },
      { name: "Insolvency & resolution support" },
    ],
    relatedPractices: ["real-estate-infra", "insolvency-ibc", "indirect-tax-gst", "ma-valuation", "audit-assurance"],
    leadMagnets: [],
  },
  {
    slug: "energy",
    title: "Energy & Renewables",
    icon: "Zap",
    intro:
      "The energy transition brings new capital, incentives and reporting demands. We support developers and investors across tax, ESG and project finance.",
    challenges: [
      "Project finance and capex monitoring for renewables",
      "ESG/BRSR reporting and green finance",
      "GST and customs on equipment and EPC",
      "InvIT and fund structuring for energy assets",
    ],
    howWeHelp: [
      { name: "Project finance & capex monitoring" },
      { name: "ESG strategy, BRSR & green finance" },
      { name: "Indirect tax & customs" },
      { name: "InvIT / fund structuring" },
    ],
    relatedPractices: ["real-estate-infra", "esg-sustainability", "indirect-tax-gst", "aif-funds", "consulting-cfo"],
    leadMagnets: ["brsr-scorecard"],
  },
  {
    slug: "retail",
    title: "Retail & E-commerce",
    icon: "ShoppingBag",
    intro:
      "High volumes, thin margins and complex GST — we help retailers and e-commerce players stay compliant and squeeze out cost.",
    challenges: [
      "GST on e-commerce, TCS and marketplace models",
      "Inventory, working-capital and margin pressure",
      "FDI policy for multi-brand and e-commerce",
      "Multi-state registration and reconciliation",
    ],
    howWeHelp: [
      { name: "GST compliance & e-commerce TCS" },
      { name: "Cost-Reduction Audit" },
      { name: "FDI / FEMA advisory" },
      { name: "Accounting & MIS outsourcing" },
    ],
    relatedPractices: ["indirect-tax-gst", "consulting-cfo", "fema-rbi", "finance-accounting-outsourcing", "direct-tax"],
    leadMagnets: ["gst-health-check", "cost-reduction-assessment"],
  },
  {
    slug: "ngos",
    title: "NGOs & Social Sector",
    icon: "HeartHandshake",
    intro:
      "We help non-profits stay funded and compliant — 12A/80G, FCRA, CSR-agency registration and the audits and certificates funders expect.",
    challenges: [
      "12A/80G registration and periodic renewals",
      "FCRA registration, returns and end-use limits",
      "CSR-implementing-agency (CSR-1) eligibility",
      "Donor reporting and utilisation certificates",
    ],
    howWeHelp: [
      { name: "Trust / society / Section 8 formation" },
      { name: "12A / 80G / FCRA registration" },
      { name: "NGO audit & utilisation certificates" },
      { name: "CSR-agency compliance" },
    ],
    relatedPractices: ["ngo-trust-section8", "audit-assurance", "direct-tax", "esg-sustainability", "corporate-secretarial"],
    leadMagnets: [],
  },
  {
    slug: "gcc",
    title: "Global Capability Centres",
    icon: "Building2",
    intro:
      "We set up and run India GCCs for global parents — incorporation, transfer pricing, payroll and finance delivery from a single accountable team.",
    challenges: [
      "Entity setup and India-entry structuring",
      "Cost-plus transfer pricing and documentation",
      "Payroll, PF/ESI and statutory compliance",
      "Consolidated reporting to the overseas parent",
    ],
    howWeHelp: [
      { name: "Global entity setup & India entry" },
      { name: "Transfer pricing & Form 3CEB" },
      { name: "Payroll & statutory compliance" },
      { name: "Finance & accounting outsourcing" },
    ],
    relatedPractices: ["global-entity-setup", "international-tax-tp", "finance-accounting-outsourcing", "fema-rbi", "corporate-secretarial"],
    leadMagnets: ["fdi-compliance-checklist", "holding-comparison"],
  },
  {
    slug: "nri",
    title: "NRI Services",
    icon: "Plane",
    intro:
      "For non-residents we handle Indian tax, FEMA, repatriation and investment compliance — and coordinate the home-country side through our international desks.",
    challenges: [
      "Residential status and DTAA relief",
      "Repatriation limits and Forms 15CA/15CB",
      "Investment in property, shares and AIFs",
      "FATCA/CRS and Schedule FA disclosure",
    ],
    howWeHelp: [
      { name: "NRI income-tax returns & DTAA" },
      { name: "FEMA & repatriation advisory" },
      { name: "Investment & property structuring" },
      { name: "FATCA / CRS compliance" },
    ],
    relatedPractices: ["direct-tax", "fema-rbi", "family-office-wealth", "international-tax-tp", "aif-funds"],
    leadMagnets: ["nri-tax-checklist", "fatca-crs-guide"],
  },
  {
    slug: "telecom",
    title: "Telecom",
    icon: "Antenna",
    intro:
      "Capital-heavy and licence-bound, telecom needs precise tax, audit and regulatory handling. We bring sector-specific depth.",
    challenges: [
      "Licence-fee, AGR and indirect-tax disputes",
      "Capex financing and infrastructure structuring",
      "Transfer pricing on equipment and IP",
      "Ind AS and IFC for large balance sheets",
    ],
    howWeHelp: [
      { name: "Indirect tax & litigation" },
      { name: "Project finance & InvIT structuring" },
      { name: "Transfer pricing & international tax" },
      { name: "Statutory & internal audit" },
    ],
    relatedPractices: ["indirect-tax-gst", "real-estate-infra", "international-tax-tp", "audit-assurance", "ma-valuation"],
    leadMagnets: [],
  },
  {
    slug: "automotive",
    title: "Automotive",
    icon: "Car",
    intro:
      "From OEMs to component makers and EV start-ups, we support the auto value chain on cost, indirect tax, incentives and investment.",
    challenges: [
      "GST and customs across a deep supply chain",
      "PLI and EV incentive optimisation",
      "Cost structure and supplier rationalisation",
      "JV, M&A and transfer pricing",
    ],
    howWeHelp: [
      { name: "Indirect tax & customs" },
      { name: "Cost-Reduction Audit" },
      { name: "M&A, JV & transfer pricing" },
      { name: "Statutory & internal audit" },
    ],
    relatedPractices: ["indirect-tax-gst", "consulting-cfo", "ma-valuation", "international-tax-tp", "audit-assurance"],
    leadMagnets: ["cost-reduction-assessment"],
  },
  {
    slug: "consumer-brands",
    title: "Consumer Brands & FMCG",
    icon: "Package",
    intro:
      "We help D2C and FMCG brands fund growth, manage GST across channels and prepare for investment or acquisition.",
    challenges: [
      "GST across distribution, marketplace and D2C channels",
      "Fundraising, valuation and investor reporting",
      "Working-capital and margin management",
      "Brand and IP valuation for transactions",
    ],
    howWeHelp: [
      { name: "GST & indirect tax across channels" },
      { name: "Fundraising & valuation" },
      { name: "Virtual CFO & MIS" },
      { name: "Brand / IP valuation" },
    ],
    relatedPractices: ["indirect-tax-gst", "startup-vc-pe", "consulting-cfo", "ma-valuation", "finance-accounting-outsourcing"],
    leadMagnets: ["cfo-roi-calculator", "gst-health-check"],
  },
  {
    slug: "education",
    title: "Education",
    icon: "GraduationCap",
    intro:
      "Schools, ed-tech and universities span charitable and commercial structures. We advise across tax exemption, GST and growth funding.",
    challenges: [
      "Charitable structure, 12A/80G and exemption",
      "GST applicability on education services",
      "Ed-tech fundraising and structuring",
      "FCRA and foreign-grant compliance",
    ],
    howWeHelp: [
      { name: "Trust / Section 8 & 12A/80G" },
      { name: "GST advisory for education" },
      { name: "Fundraising & valuation (ed-tech)" },
      { name: "Audit & utilisation certificates" },
    ],
    relatedPractices: ["ngo-trust-section8", "indirect-tax-gst", "startup-vc-pe", "audit-assurance", "direct-tax"],
    leadMagnets: [],
  },
  {
    slug: "media",
    title: "Media & Entertainment",
    icon: "Clapperboard",
    intro:
      "Content, gaming and digital-media businesses face unique tax, royalty and cross-border issues. We bring tailored advisory and CFO support.",
    challenges: [
      "Withholding and royalty taxation on content",
      "GST on OTT, gaming and digital services",
      "Cross-border production and co-production structuring",
      "Fundraising and IP valuation",
    ],
    howWeHelp: [
      { name: "International tax & withholding" },
      { name: "GST on digital & gaming services" },
      { name: "Valuation & transaction advisory" },
      { name: "Virtual CFO & MIS" },
    ],
    relatedPractices: ["international-tax-tp", "indirect-tax-gst", "ma-valuation", "consulting-cfo", "startup-vc-pe"],
    leadMagnets: [],
  },
  {
    slug: "logistics",
    title: "Logistics & Supply Chain",
    icon: "Truck",
    intro:
      "Multi-state operations, e-way bills and thin margins define logistics. We optimise GST, cost and compliance across the network.",
    challenges: [
      "Multi-state GST registration and e-way bills",
      "Place-of-supply and ITC on transport services",
      "Cost and route efficiency",
      "Capex financing for fleet and warehousing",
    ],
    howWeHelp: [
      { name: "GST compliance & e-way bill" },
      { name: "Cost-Reduction Audit" },
      { name: "Accounting & MIS outsourcing" },
      { name: "Project / fleet finance" },
    ],
    relatedPractices: ["indirect-tax-gst", "consulting-cfo", "finance-accounting-outsourcing", "real-estate-infra", "audit-assurance"],
    leadMagnets: ["gst-return-calendar", "cost-reduction-assessment"],
  },
  {
    slug: "aerospace",
    title: "Aerospace & Defence",
    icon: "Plane",
    intro:
      "A licensed, FDI-sensitive and capital-intensive sector — we advise on entry structuring, offsets, indirect tax and assurance.",
    challenges: [
      "FDI policy and licensing in defence",
      "Offset obligations and structuring",
      "Customs, GST and import of equipment",
      "Project finance and assurance rigour",
    ],
    howWeHelp: [
      { name: "FDI / FEMA & entry structuring" },
      { name: "Indirect tax & customs" },
      { name: "Statutory & internal audit" },
      { name: "Valuation & transaction advisory" },
    ],
    relatedPractices: ["fema-rbi", "global-entity-setup", "indirect-tax-gst", "audit-assurance", "ma-valuation"],
    leadMagnets: ["fdi-compliance-checklist"],
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);

/**
 * Industries grouped into sectors for the homepage (client direction, Book1
 * Home #10 — categorised presentation). `slug` deep-links to an industry page
 * where one exists; entries without a slug are shown as labels only.
 */
export type IndustryCategory = {
  group: string;
  items: { label: string; slug?: string }[];
};

export const industryCategories: IndustryCategory[] = [
  {
    group: "Financial Services",
    items: [
      { label: "BFSI", slug: "bfsi" },
      { label: "Fintech", slug: "fintech" },
      { label: "Insurance", slug: "insurance" },
      { label: "NBFCs" },
      { label: "PMS, AIFs & RIAs", slug: "funds-aif" },
      { label: "Family Offices", slug: "family-offices" },
    ],
  },
  {
    group: "Technology & Innovation",
    items: [
      { label: "Technology", slug: "technology" },
      { label: "SaaS" },
      { label: "AI & Deep Tech" },
      { label: "Startups", slug: "startups" },
      { label: "Telecom", slug: "telecom" },
    ],
  },
  {
    group: "Healthcare & Life Sciences",
    items: [
      { label: "Pharma & Life Sciences", slug: "pharma" },
      { label: "Healthcare", slug: "healthcare" },
      { label: "Medical Devices" },
    ],
  },
  {
    group: "Consumer & Retail",
    items: [
      { label: "Retail & E-commerce", slug: "retail" },
      { label: "Consumer Brands & FMCG", slug: "consumer-brands" },
      { label: "Food Processing" },
    ],
  },
  {
    group: "Industrial & Infrastructure",
    items: [
      { label: "Manufacturing", slug: "manufacturing" },
      { label: "Automotive", slug: "automotive" },
      { label: "Chemicals" },
      { label: "Infrastructure", slug: "infrastructure" },
      { label: "Energy & Renewables", slug: "energy" },
      { label: "Aerospace & Defence", slug: "aerospace" },
    ],
  },
  {
    group: "Real Assets & Construction",
    items: [
      { label: "Real Estate", slug: "real-estate" },
      { label: "Construction & Engineering" },
    ],
  },
  {
    group: "Global Trade & Logistics",
    items: [
      { label: "Exporters", slug: "exporters" },
      { label: "Logistics & Supply Chain", slug: "logistics" },
      { label: "Shipping & Maritime" },
    ],
  },
  {
    group: "Social Impact & Education",
    items: [
      { label: "NGOs & Social Sector", slug: "ngos" },
      { label: "Section 8 Companies" },
      { label: "Education", slug: "education" },
      { label: "CSR Ecosystem" },
    ],
  },
  {
    group: "Media & Professional Services",
    items: [
      { label: "Media & Entertainment", slug: "media" },
      { label: "Professional Services" },
      { label: "Global Capability Centres (GCCs)", slug: "gcc" },
    ],
  },
  {
    group: "International Business",
    items: [
      { label: "MNCs" },
      { label: "Foreign Subsidiaries" },
      { label: "NRI Services", slug: "nri" },
      { label: "GIFT IFSC Entities" },
    ],
  },
];

import type { Practice, ServiceGroup } from "./types";

/**
 * Service-catalogue expansion derived from the firm's own
 * "ADA Service Gap Analysis" (2026-06-10).
 *
 *  - `gapGroupsBySlug` appends additional service GROUPS to the existing 18
 *    practice areas (Part A of the gap analysis — capabilities the firm has
 *    but had not yet listed on the site).
 *  - `gapPractices` adds entirely new practice lines (Part B — "earth-level"
 *    gaps the firm wants to stand up).
 *
 * Items are listed as catalogue line-items only (no `slug`), so they render as
 * anchors on the practice hub pages rather than spawning hundreds of thin
 * sub-pages. practices.ts merges both exports at module load.
 */
export const gapGroupsBySlug: Record<string, ServiceGroup[]> = {
  "audit-assurance": [
    {
      title: "Regulated-Entity & Specialised Audits",
      items: [
        { name: "Stock Exchange & Depository Audit" },
        { name: "SEBI Intermediary Audits (Broker / DP / RTA / RIA)" },
        { name: "Payment Bank & Small Finance Bank Audit" },
        { name: "Housing Finance Company (HFC) Audit" },
        { name: "Microfinance Institution Audit" },
        { name: "Producer Company Audit" },
        { name: "Nidhi Company Audit" },
        { name: "Electoral Trust Audit" },
        { name: "Political Party Audit (ECI)" },
        { name: "Sovereign Wealth Fund Audit Support" },
        { name: "Pension / PF Trust / ESOP Trust Audit" },
      ],
    },
    {
      title: "Operational, Process & Cost Audits",
      items: [
        { name: "Management Audit" },
        { name: "Operational Audit" },
        { name: "Treasury Audit (Banks & Corporates)" },
        { name: "Derivative Process Audit — BFSI" },
        { name: "Pre-Payment Audit" },
        { name: "Branch & Unit-Level Audit" },
        { name: "Plant & Factory Audit" },
        { name: "Supply Chain / CAFA Audit" },
        { name: "Depot & Warehouse Audit" },
        { name: "Revenue Assurance Audit (Telecom / SaaS / Subscription)" },
        { name: "Cybersecurity Controls Audit" },
        { name: "ISO Compliance Audit Support" },
      ],
    },
    {
      title: "Transaction, Funding & Special-Purpose Audits",
      items: [
        { name: "Due Diligence Audit (Pre-Acquisition / Post-Merger)" },
        { name: "Third-Party / Toll Manufacturing Audit" },
        { name: "Dealer / Distributor Audit" },
        { name: "Royalty & Revenue-Sharing Audit" },
        { name: "Project Finance Audit & Lender's Reporting" },
        { name: "Capex Audit & Monitoring" },
        { name: "Subsidy / Grant Utilisation Audit" },
        { name: "CSR Expenditure Audit" },
        { name: "Loan Portfolio Audit (Banks / HFCs / MFIs)" },
        { name: "Credit Rating Support & Data Audit" },
        { name: "Employee Benefit Fund Audit (PF / Gratuity / Leave Encashment)" },
        { name: "ESOP Scheme Audit" },
        { name: "Compilation & Review Engagements (Limited Assurance)" },
        { name: "MNC Group Reporting Packages (HFM / SAP / Oracle)" },
        { name: "PCAOB / CPAB Audit Support" },
      ],
    },
    {
      title: "Certificates & Attestations",
      items: [
        { name: "Capital Infusion / Export Turnover Certificate" },
        { name: "FEMA / RBI / SEBI / IRDAI Compliance Certificates" },
        { name: "Bank Debt / Project Completion Certificate" },
        { name: "MSME / Udyam Classification Certificate" },
      ],
    },
  ],

  "direct-tax": [
    {
      title: "Corporate & Tax-Rate Optimisation",
      items: [
        { name: "Advance Tax Computation & Optimisation" },
        { name: "Effective Tax Rate Optimisation" },
        { name: "Section 80IA / 80IB / 80IC / 10AA Tax Holidays" },
        { name: "R&D Tax Benefits (Section 35 / 35(2AB))" },
        { name: "Book Profit Calculation for MAT" },
        { name: "Deferred Tax Computation (Ind AS 12 / AS 22)" },
        { name: "Tax Provision & Reporting for MNC Groups" },
      ],
    },
    {
      title: "Personal, HNI & Salary Tax Planning",
      items: [
        { name: "Salary Structuring & Tax Optimisation" },
        { name: "Expatriate / Global Mobility Tax Advisory" },
        { name: "HNI Wealth & Offshore Asset Planning" },
        { name: "Donation Tax Planning (80G / 80GGA)" },
        { name: "House Property Tax Optimisation" },
        { name: "Agricultural Income Tax Advisory" },
        { name: "Senior Citizen Tax Planning & Benefits" },
        { name: "Tax Loss Harvesting Strategy" },
        { name: "Dividend & Bonus Stripping Advisory" },
        { name: "Section 80C to 80U Deduction Planning" },
        { name: "Art & Collectibles Tax Advisory" },
        { name: "Philanthropy Tax Planning (Foundations / Trusts)" },
        { name: "Generation-Skipping Tax Planning" },
      ],
    },
    {
      title: "Litigation, Search & Dispute Resolution",
      items: [
        { name: "Search & Seizure Representation (Section 132 / 153A)" },
        { name: "Vivad se Vishwas Scheme Advisory" },
        { name: "Benami Transactions Prohibition Act Advisory" },
        { name: "Black Money Act — Compliance & Advisory" },
        { name: "Tax Demand Management & Recovery Proceedings" },
        { name: "Tax Refund Claims & Expediting" },
        { name: "Settlement Commission (ITSC) Applications" },
        { name: "Advance Ruling Application (AAR)" },
        { name: "High Court / Supreme Court Tax Litigation" },
      ],
    },
  ],

  "international-tax-tp": [
    {
      title: "Cross-Border Tax & Anti-Avoidance",
      items: [
        { name: "MLI (Multilateral Instrument) Impact Analysis" },
        { name: "Thin Capitalisation Rules — Section 94B" },
        { name: "Digital Services Tax / Equalisation Levy Advisory" },
        { name: "Significant Economic Presence (SEP) Advisory" },
        { name: "Exit Tax Planning for Foreign Investors" },
        { name: "FCNR / NRE / NRO Account Tax Advisory" },
        { name: "Repatriation of Profits — Tax & FEMA Implications" },
        { name: "Section 9A Safe Harbour for Offshore Fund Managers" },
      ],
    },
    {
      title: "Transfer Pricing Engagements",
      items: [
        { name: "Business Restructuring Transfer Pricing" },
        { name: "ESOP Cross-Charge Transfer Pricing" },
        { name: "Annual TP Documentation Maintenance" },
      ],
    },
    {
      title: "Foreign-Jurisdiction Tax Desks",
      items: [
        { name: "Canada Tax (T1 / T2 / T1135)" },
        { name: "Singapore Corporate Tax Planning" },
        { name: "Netherlands Participation Exemption Planning" },
        { name: "Mauritius GBC Tax Planning" },
        { name: "Luxembourg / BVI / Cayman Structure Advisory" },
        { name: "Form 5471 / 5472 / 8858 / 8865 (US) Filing" },
        { name: "PFIC Reporting / IRS Streamlined Procedures" },
        { name: "UK Non-Dom Planning / Making Tax Digital (MTD)" },
        { name: "UK R&D Tax Credits / UK Inheritance Tax Planning" },
        { name: "UAE Economic Substance Regulations (ESR)" },
        { name: "UAE Transfer Pricing / CbCR / DIFC-ADGM Advisory" },
        { name: "Bahrain / Saudi Arabia / Qatar / Oman Tax Advisory" },
      ],
    },
  ],

  "indirect-tax-gst": [
    {
      title: "GST Advisory & Sector Specialisation",
      items: [
        { name: "GST Cancellation & Surrender" },
        { name: "GST for E-Commerce Operators (TCS Section 52)" },
        { name: "GST Anti-Profiteering Advisory & Defence" },
        { name: "GST RCM (Reverse Charge Mechanism) Advisory" },
        { name: "GST on Import of Services" },
        { name: "GST Place of Supply Analysis" },
        { name: "GST for Real Estate (RERA / JDA / Commercial)" },
        { name: "GST for Healthcare & Pharma" },
        { name: "GST for IT / SaaS / Software" },
        { name: "GST for Financial Services & Banking" },
        { name: "GST for Export of Services (Zero-Rated Supply)" },
        { name: "GST Health Check & Due Diligence" },
        { name: "GST Transaction Structuring (Supply Chain)" },
      ],
    },
    {
      title: "GST & Customs Litigation",
      items: [
        { name: "GSTAT (GST Appellate Tribunal) Representation" },
        { name: "GST High Court & Supreme Court Litigation" },
        { name: "Customs Litigation & CESTAT Appeals" },
        { name: "Sabka Vishwas Legacy Dispute Resolution" },
      ],
    },
    {
      title: "Customs, Trade & Export Controls",
      items: [
        { name: "Anti-Dumping / Countervailing Duty Advisory" },
        { name: "FTA Advisory (India-UAE / Australia / ASEAN)" },
        { name: "AEO Certification Advisory" },
        { name: "SCOMET Export Control Regulations" },
        { name: "BIS Certification Advisory" },
        { name: "RoDTEP / RoSCTL Advisory" },
      ],
    },
  ],

  "fema-rbi": [
    {
      title: "Inbound & Investment Structuring",
      items: [
        { name: "FPI Structuring & Compliance" },
        { name: "Inbound Investment Structuring (Equity / CCPS / CCD)" },
        { name: "Share Transfer Pricing & FEMA Compliance" },
        { name: "Inter-Company Loan Structuring — FEMA" },
        { name: "Pledge of Shares — Cross-Border FEMA" },
        { name: "Guarantee Issuance — FEMA Advisory" },
        { name: "FEMA Advisory for Startups Raising Foreign Funding" },
        { name: "AIF Foreign Investor Onboarding — FEMA & SEBI" },
      ],
    },
    {
      title: "Compliance, Reporting & Enforcement",
      items: [
        { name: "FEMA Penalty for Late Reporting Advisory" },
        { name: "Annual FEMA Compliance for Foreign Subsidiaries" },
        { name: "Round-Tripping Restriction Advisory" },
        { name: "Enforcement Directorate Matters Advisory" },
        { name: "IP Transfer — FEMA Advisory" },
        { name: "NRI Property Purchase & Sale — FEMA Compliance" },
      ],
    },
  ],

  "aif-funds": [
    {
      title: "Fund Structuring & Documentation",
      items: [
        { name: "Contribution Agreement & IMA Drafting" },
        { name: "Co-Investment Agreement Structuring" },
        { name: "Carry & Waterfall Structure Design" },
        { name: "Hurdle Rate & Preferred Return Structure" },
        { name: "Manager / Sponsor Entity Setup" },
        { name: "Master-Feeder Fund Structure" },
        { name: "Side-Pocket Structure for Illiquid Assets" },
        { name: "ESG-Linked & Impact Investment Fund Structuring" },
        { name: "Family Investment Fund (FIF) under SEBI" },
        { name: "Angel Fund Setup under SEBI AIF" },
        { name: "Domestic AIF vs Offshore Fund Comparison" },
      ],
    },
    {
      title: "Offshore & GIFT City Funds",
      items: [
        { name: "Mauritius / Singapore / Cayman Offshore Fund Setup" },
        { name: "GIFT City AIF — Tax Exemption Structure" },
        { name: "Section 9A Safe Harbour for Offshore Fund Managers" },
      ],
    },
    {
      title: "Investor Onboarding & SEBI Compliance",
      items: [
        { name: "KYC & AML for Investors (PEPs / Offshore Investors)" },
        { name: "Beneficial Ownership Disclosure" },
        { name: "SEBI Inspection Preparation" },
        { name: "Material Change Approval from SEBI" },
        { name: "Side-Letter Review for Investors" },
        { name: "Fund Wind-Down & Dissolution Planning" },
      ],
    },
    {
      title: "Fund Audit, Valuation & Reporting",
      items: [
        { name: "AIF Valuation Policy Review & Compliance Audit" },
        { name: "AIF Distribution Waterfall Audit" },
        { name: "AIF Carried Interest Calculation Audit" },
        { name: "AIF Custodian Reconciliation" },
        { name: "IRR / MOIC / TVPI / DPI Calculation" },
        { name: "Performance Attribution Analysis" },
        { name: "Form 64C / Schedule Reporting to Investors" },
      ],
    },
    {
      title: "Fund Taxation",
      items: [
        { name: "AIF Tax Pass-Through (Cat I & II)" },
        { name: "AIF Cat III — Tax at Fund Level" },
        { name: "Tax on Carried Interest" },
      ],
    },
    {
      title: "Adjacent Registrations & Compliance",
      items: [
        { name: "FPI (Foreign Portfolio Investor) Setup & Compliance" },
        { name: "FVCI (Foreign Venture Capital Investor) Advisory" },
        { name: "PMS Setup (SEBI) & Compliance Calendar" },
        { name: "RIA (Registered Investment Adviser) Compliance" },
        { name: "Merchant Banker Compliance & Audit" },
      ],
    },
  ],

  "corporate-secretarial": [
    {
      title: "Registrations & Entity Setup",
      items: [
        { name: "Foreign Company Registration (Branch / LO / PO)" },
        { name: "Startup India Registration (DPIIT)" },
        { name: "MSME / Udyam Registration" },
        { name: "Producer / Nidhi Company Registration" },
        { name: "Partnership Firm / Proprietorship Registration" },
        { name: "NBFC Registration & Compliances" },
      ],
    },
    {
      title: "ROC Filings & Corporate Actions",
      items: [
        { name: "XBRL Filing" },
        { name: "MGT-14 / ADT-1 Filing" },
        { name: "Director Appointment / Resignation / Disqualification Relief" },
        { name: "MOA & AOA Alteration" },
        { name: "Increase in Authorised Share Capital" },
        { name: "Change of Registered Office / Company Name" },
        { name: "Conversion (Pvt to Public / LLP to Company)" },
        { name: "Satisfaction of Charges" },
        { name: "Dematerialisation of Shares" },
        { name: "Preferential Allotment / Rights Issue — Companies Act" },
      ],
    },
    {
      title: "Listed-Entity & Governance",
      items: [
        { name: "SEBI LODR Compliance — Listed Entity" },
        { name: "Insider Trading Policy & UPSI Management" },
        { name: "Related Party Transaction Policy" },
        { name: "Board Diversity & Governance Advisory" },
        { name: "Whistleblower Policy Drafting" },
        { name: "SEBI Takeover Code Advisory (Open Offer Triggers)" },
        { name: "Share Buyback — SEBI & Companies Act" },
        { name: "E-voting & Postal Ballot (Scrutinizer Services)" },
        { name: "Debenture Trustee Coordination" },
        { name: "Compliance Audit — Companies Act" },
      ],
    },
    {
      title: "Disputes, IP & Competition Law",
      items: [
        { name: "NCLT Applications — Oppression & Mismanagement" },
        { name: "Trademark Registration — India & USA" },
        { name: "Patent / Copyright / Design Registration" },
        { name: "FSSAI / IEC / Shop Act Registrations" },
        { name: "ISO / BIS Certification Advisory" },
        { name: "Competition Law Advisory & CCI Filing" },
        { name: "CCI Merger Control Filing (Combination Notification)" },
        { name: "Competition Compliance Programme" },
      ],
    },
  ],

  "ma-valuation": [
    {
      title: "Valuation Engagements",
      items: [
        { name: "Purchase Price Allocation (PPA — Ind AS 103)" },
        { name: "Impairment Testing (Ind AS 36) — Goodwill / Assets" },
        { name: "Solvency Opinion" },
        { name: "Financial Instruments Valuation (FVTPL / FVTOCI)" },
        { name: "Startup Valuation (Pre-Revenue / Pre-Series A)" },
        { name: "Lease Valuation (Ind AS 116)" },
        { name: "Valuation for NCLT Restructuring Schemes" },
        { name: "Valuation for FEMA / RBI Reporting" },
      ],
    },
    {
      title: "IBBI Registered Valuation",
      items: [
        { name: "IBBI Registered Valuer — Land & Building" },
        { name: "IBBI Registered Valuer — Plant & Machinery" },
        { name: "IBBI Registered Valuer — Financial Assets" },
      ],
    },
    {
      title: "Deal Structuring & Advisory",
      items: [
        { name: "Management Buyout (MBO) Advisory" },
        { name: "PE Exit Structuring" },
        { name: "Secondary Sale / Block Deal Advisory" },
        { name: "Distressed M&A & Turnaround Advisory" },
        { name: "Earnout & Deferred Consideration Structuring" },
        { name: "Cross-Border M&A Advisory" },
      ],
    },
    {
      title: "Debt & Capital Raising",
      items: [
        { name: "Debt Syndication (Term Loans / Working Capital)" },
        { name: "NCD / Bond Issue Advisory" },
        { name: "Green Bond / Sustainability-Linked Bond" },
        { name: "One-Time Settlement (OTS) Advisory" },
        { name: "Credit Rating Advisory & Preparation" },
        { name: "Revenue-Based Financing Advisory" },
      ],
    },
    {
      title: "NCLT Scheme Execution",
      items: [
        { name: "NCLT Scheme Drafting (Merger / Demerger / Capital Reduction)" },
        { name: "NCLT Petition Filing & Hearing Support" },
        { name: "Appointed-Date Optimisation Advisory" },
        { name: "Scheme Valuation Report (SEBI / NCLT)" },
        { name: "Pre-Scheme Restructuring Advisory" },
        { name: "SEBI / Stock-Exchange Approval for Listed Schemes" },
      ],
    },
  ],

  "ipo-capital-markets": [
    {
      title: "Public Issues & Listing",
      items: [
        { name: "SME IPO Advisory (BSE SME / NSE Emerge)" },
        { name: "QIP Advisory" },
        { name: "Rights Issue / Preferential Allotment Advisory" },
        { name: "IPO Valuation & Price Band Advisory" },
        { name: "Pre-IPO ESOP Structuring & Restructuring" },
        { name: "IPO Tax Planning" },
      ],
    },
    {
      title: "Overseas & Hybrid Listings",
      items: [
        { name: "Listing on NYSE / NASDAQ / LSE" },
        { name: "GDR / ADR Advisory" },
        { name: "REIT / InvIT Structuring & Listing" },
      ],
    },
    {
      title: "Post-Listing & Takeover",
      items: [
        { name: "Post-IPO SEBI LODR Compliance Calendar" },
        { name: "SEBI Takeover Code / Open Offer" },
      ],
    },
  ],

  "startup-vc-pe": [
    {
      title: "ESOP & Equity Compensation",
      items: [
        { name: "RSU (Restricted Stock Unit) Taxation Advisory" },
        { name: "Phantom Stock / Shadow ESOP Advisory" },
        { name: "Stock Appreciation Rights (SARs) Tax Advisory" },
        { name: "ESOP Tax Deferral for Startup Employees" },
        { name: "Founder Vesting / Cliff / Acceleration Advisory" },
      ],
    },
    {
      title: "Fundraising & Structuring",
      items: [
        { name: "Reverse Flip — US to India Restructuring" },
        { name: "Pre-Seed / Seed / Angel Round Structuring" },
        { name: "Anti-Dilution Rights Advisory (Full Ratchet / WA)" },
        { name: "Drag-Along & Tag-Along Rights Advisory" },
        { name: "Pitch Deck Financial Modelling" },
        { name: "Virtual Data Room Setup" },
        { name: "Investor Due-Diligence Preparation" },
        { name: "Revenue-Based Financing Advisory" },
      ],
    },
    {
      title: "Regulatory & Licensing",
      items: [
        { name: "NBFC / Fintech Licensing Advisory" },
        { name: "Regulatory Sandbox Application Support" },
      ],
    },
  ],

  "family-office-wealth": [
    {
      title: "Family Governance & Succession",
      items: [
        { name: "Family Council Setup" },
        { name: "Multi-Family Office (MFO) Advisory" },
        { name: "Inter-Generational Wealth Transfer Strategy" },
        { name: "Family Settlement Deed" },
        { name: "Family Holding Company Structuring" },
        { name: "Generation-Skipping Tax Planning" },
      ],
    },
    {
      title: "Global & Offshore Wealth",
      items: [
        { name: "Offshore Asset Planning (Mauritius / Singapore / UAE)" },
        { name: "NRI Returnee Tax & Wealth Planning" },
        { name: "Foreign Asset Schedule (Schedule FA) Filing" },
        { name: "CRS / FATCA Self-Certification & Compliance" },
      ],
    },
    {
      title: "Specialist Wealth & Insurance Advisory",
      items: [
        { name: "Art & Collectibles Tax Advisory" },
        { name: "Philanthropy & Endowment Fund Setup" },
        { name: "Insurance Planning — Tax Advisory" },
        { name: "Retirement Planning & Pension Advisory" },
        { name: "Keyman Insurance Advisory" },
        { name: "Buy-Sell Agreement with Life Insurance Structuring" },
      ],
    },
  ],

  "esg-sustainability": [
    {
      title: "ESG Reporting & Ratings",
      items: [
        { name: "SASB Industry-Specific Reporting" },
        { name: "TCFD Climate Risk Disclosure" },
        { name: "ESG Rating Advisory (MSCI / Sustainalytics / CRISIL)" },
        { name: "SDG Alignment Reporting" },
        { name: "Integrated Reporting (<IR> Framework)" },
      ],
    },
    {
      title: "Climate & Sustainable Finance",
      items: [
        { name: "Green Bond Framework & Second-Party Opinion" },
        { name: "Climate Risk Assessment & Scenario Analysis" },
        { name: "Renewable Energy Transition Advisory" },
        { name: "Biodiversity Risk & Water Stewardship Reporting" },
        { name: "ESG for Banks & NBFCs (RBI ESG Regulations)" },
        { name: "ESG Due Diligence in M&A" },
        { name: "Impact Investing & SROI" },
      ],
    },
    {
      title: "CSR Execution",
      items: [
        { name: "CSR Activity Planning & Budget Allocation" },
        { name: "CSR Fund Structuring (Section 8 / Trust)" },
        { name: "Form CSR-1 Filing & Registration" },
        { name: "FCRA Advisory for CSR-Funded NGOs" },
        { name: "Social Audit Advisory" },
      ],
    },
  ],

  "insolvency-ibc": [
    {
      title: "CIRP & NCLT Process",
      items: [
        { name: "NCLT Application Filing (Section 7 / 9 / 10)" },
        { name: "Information Memorandum (IM) Preparation" },
        { name: "CoC Meeting Coordination" },
        { name: "Distribution of Proceeds" },
        { name: "Resolution Applicant Support — Plan Drafting" },
        { name: "Section 29A Eligibility Assessment" },
        { name: "Section 12A — Settlement & Withdrawal from CIRP" },
      ],
    },
    {
      title: "Specialised Insolvency",
      items: [
        { name: "Individual Bankruptcy / Fresh Start Process" },
        { name: "Pre-IBC Debt Resolution Strategy" },
        { name: "Distressed Asset / ARC Advisory" },
        { name: "Cross-Border Insolvency Advisory" },
        { name: "Reverse CIRP — Real Estate Sector" },
        { name: "Fast-Track CIRP / Voluntary Liquidation" },
      ],
    },
    {
      title: "Forensic, Valuation & Registration",
      items: [
        { name: "Forensic Audit during CIRP" },
        { name: "Preferential / Undervalued / Fraudulent Transaction Analysis" },
        { name: "IBBI Registered Valuation — all 3 asset classes" },
        { name: "IP / IPE Registration & Renewal" },
      ],
    },
  ],

  "consulting-cfo": [
    {
      title: "Cost & Efficiency",
      items: [
        { name: "Zero-Based Budgeting (ZBB) Implementation" },
        { name: "Overhead Rationalisation & Efficiency Mapping" },
        { name: "Working Capital Cycle Optimisation" },
        { name: "Procurement Cost Optimisation" },
        { name: "Technology Cost Audit & Cloud Spend Optimisation" },
        { name: "Supply Chain Cost Optimisation" },
        { name: "Make vs Buy Analysis" },
        { name: "Vendor Consolidation & Renegotiation Support" },
        { name: "Insurance Premium Optimisation" },
      ],
    },
    {
      title: "FP&A & Analytics",
      items: [
        { name: "Budgeting, Forecasting & Financial Modelling" },
        { name: "Rolling Forecast Implementation" },
        { name: "Business Intelligence & Data Analytics" },
        { name: "Financial Dashboard Design (Power BI / Tableau)" },
        { name: "Unit Economics Analysis (CAC / LTV / Payback)" },
        { name: "Profitability Analysis — Segment / Product / Geography" },
      ],
    },
    {
      title: "Virtual CFO & Transformation",
      items: [
        { name: "ERP Implementation Oversight" },
        { name: "Banking Relationship Management" },
        { name: "Cash Flow Management Advisory" },
        { name: "M&A Readiness (CFO role)" },
        { name: "IPO Preparation CFO Support" },
        { name: "Investor Relations Management" },
        { name: "Virtual Controller Services" },
        { name: "AI & Digital Transformation Advisory" },
        { name: "Shared Services Center Setup Advisory" },
        { name: "Turnaround Strategy for Distressed Businesses" },
      ],
    },
    {
      title: "Enterprise Risk & Resilience",
      items: [
        { name: "ERM Framework (COSO)" },
        { name: "Business Continuity & Disaster Recovery Planning" },
        { name: "Third-Party Risk Management" },
        { name: "ABAC (Anti-Bribery & Anti-Corruption) Framework" },
      ],
    },
    {
      title: "Government Incentives & Subsidies",
      items: [
        { name: "PLI (Production-Linked Incentive) Scheme Advisory — 14 sectors" },
        { name: "State Government Subsidy Advisory & Claims" },
        { name: "MSME Credit-Linked Capital Subsidy Scheme (CLCSS)" },
        { name: "R&D Incentive Advisory (DST Grants / Section 35)" },
      ],
    },
    {
      title: "Training, Workshops & Sector-Specialist Advisory",
      items: [
        { name: "Corporate In-House Tax / GST / FEMA Training Workshops" },
        { name: "Webinar Series — Budget Analysis / Regulatory Updates" },
        { name: "CFO Development Programme" },
        { name: "Telecom / TRAI Regulatory Advisory" },
        { name: "Healthcare — Clinical Establishment & NABH Compliance" },
        { name: "Food & Beverage — FSSAI Licensing & Compliance" },
        { name: "Green Hydrogen Mission Advisory" },
      ],
    },
  ],

  "finance-accounting-outsourcing": [
    {
      title: "Managed Compliance & Accounting",
      items: [
        { name: "Finance & Accounting Outsourcing (FAO)" },
        { name: "SEBI / RBI / IRDAI Compliance Outsourcing" },
        { name: "Employer of Record (EoR) Services" },
        { name: "Fund Accounting & Trust Accounting" },
        { name: "Offshore Accounting (UK / US / Australia clients)" },
        { name: "Zoho Books / Xero / NetSuite / SAP Implementation" },
        { name: "Fixed Asset Register Maintenance" },
        { name: "Compliance Health Check & Dashboard" },
      ],
    },
    {
      title: "Outsourced Statutory Filings",
      items: [
        { name: "TDS / TCS Computation & Return Filing (24Q / 26Q)" },
        { name: "GST Return Filing (outsourced)" },
        { name: "ROC Annual Compliance Filing (outsourced)" },
        { name: "FEMA Reporting (FC-GPR / FC-TRS / FLA / APR)" },
      ],
    },
    {
      title: "Entity & Contract Management",
      items: [
        { name: "Legal Entity Management" },
        { name: "Contract Lifecycle Management" },
        { name: "Board Pack Preparation" },
        { name: "KPO (Knowledge Process Outsourcing) Services" },
        { name: "Global Entity Setup" },
      ],
    },
    {
      title: "Payroll & HR Technology",
      items: [
        { name: "Multi-State Payroll Compliance Management" },
        { name: "Expat Payroll & Shadow Payroll Management" },
        { name: "Payroll Software Implementation (Darwinbox / Keka / Greythr)" },
        { name: "Payroll Audit" },
        { name: "Flexi-Benefit Plan Design & Administration" },
      ],
    },
  ],

  "global-entity-setup": [
    {
      title: "Jurisdiction Setup Desks",
      items: [
        { name: "Delaware C-Corp / Wyoming LLC" },
        { name: "UK Private Limited / LLP + HMRC Registration" },
        { name: "UAE Mainland & Free Zone Setup (JAFZA / DMCC / ADGM / DIFC)" },
        { name: "UAE Corporate Tax Registration & Golden Visa" },
        { name: "Singapore Pte Ltd / VCC / Family Office (MAS 13O / 13U)" },
        { name: "Mauritius GBC 1 / GBC 2 Company" },
        { name: "Cayman Islands Exempted Company / LP" },
        { name: "BVI Business Company" },
        { name: "Netherlands Holding Company (BV)" },
        { name: "Luxembourg SOPARFI / SICAR / SIF" },
      ],
    },
    {
      title: "GIFT City Specialist Verticals",
      items: [
        { name: "Aircraft Leasing Entity Setup (GIFT City)" },
        { name: "Ship Leasing Entity Setup (GIFT City)" },
        { name: "FinTech Bridge Advisory (India-UK / India-Singapore)" },
        { name: "Bullion Exchange Advisory (IIBX)" },
      ],
    },
  ],

  "ngo-trust-section8": [
    {
      title: "Registration & Tax Exemption",
      items: [
        { name: "12AB Re-Registration (Post-2020 Framework)" },
        { name: "Section 11 Accumulation of Income Advisory" },
        { name: "Anonymous Donation Advisory — Section 115BBC" },
        { name: "Charitable Purpose Advisory — Section 2(15)" },
        { name: "Corpus Donation Tax Advisory" },
      ],
    },
    {
      title: "FCRA & Foreign Funding",
      items: [
        { name: "FCRA Violation Advisory & FCRA Amendment" },
        { name: "FCRA Prior Permission Applications" },
        { name: "Form CSR-1 Registration (NGO as CSR agency)" },
      ],
    },
    {
      title: "Impact & Social Finance",
      items: [
        { name: "Impact Measurement & Social Audit Advisory" },
        { name: "Social Venture Fund Structure" },
      ],
    },
  ],

  "real-estate-infra": [
    {
      title: "Real Estate Tax & Transactions",
      items: [
        { name: "Real Estate Developer Tax Advisory" },
        { name: "GST on Real Estate (RERA / JDA / Affordable Housing)" },
        { name: "TDS on Property Purchase (Section 194IA)" },
        { name: "Capital Gains on Property — Section 54 / 54F / 54EC" },
        { name: "NRI Property Purchase & Sale — FEMA Compliance" },
        { name: "SPV Setup for Real Estate Projects" },
        { name: "Stamp Duty Optimisation & Advisory" },
      ],
    },
    {
      title: "RERA Compliance",
      items: [
        { name: "RERA Quarterly Progress Report Filing" },
        { name: "RERA Separate Bank Account Compliance" },
        { name: "RERA Deemed Conveyance Advisory" },
        { name: "Redevelopment (SRA / Cluster / MHADA) Structuring" },
      ],
    },
    {
      title: "Infrastructure & Energy",
      items: [
        { name: "Infrastructure Sector Advisory (Roads / Ports / Power)" },
        { name: "Renewable Energy Advisory (Solar / Wind / Green Hydrogen)" },
      ],
    },
  ],
};

export const gapPractices: Practice[] = [
  {
    slug: "accounting-advisory-indas",
    title: "Ind AS & Accounting Advisory",
    cluster: "Advisory & Outsourcing",
    icon: "BookOpenCheck",
    tagline: "Ind AS / IFRS implementation, conversions and complex accounting opinions.",
    overview:
      "A dedicated accounting-standards practice for companies adopting or transitioning to Ind AS and IFRS. We lead first-time adoption, build accounting policy manuals, resolve complex measurement questions (revenue, leases, financial instruments, business combinations) and prepare audit-ready positions for the toughest standards.",
    groups: [
      {
        title: "Standards Implementation",
        items: [
          { name: "Ind AS Implementation & Migration from IGAAP" },
          { name: "IFRS First-Time Adoption (IFRS 1)" },
          { name: "Revenue Recognition Advisory (Ind AS 115 / IFRS 15)" },
          { name: "Lease Accounting Implementation (Ind AS 116)" },
          { name: "Financial Instruments — Classification & Hedge Accounting (Ind AS 109)" },
          { name: "Business Combinations Accounting (Ind AS 103)" },
          { name: "Consolidation & Group Reporting (Ind AS 110 / 111 / 112)" },
        ],
      },
      {
        title: "Policy & Systems",
        items: [
          { name: "Accounting Policy Manual Design" },
          { name: "Chart of Accounts Design & ERP Mapping" },
        ],
      },
    ],
    relatedPractices: ["audit-assurance", "consulting-cfo", "finance-accounting-outsourcing"],
    industries: [],
    leadMagnets: [],
    faqs: [
      { q: "Do you handle the full Ind AS transition, not just advice?", a: "Yes. We run first-time adoption end to end — opening-balance-sheet adjustments, transition disclosures, policy choices and audit support — so the conversion lands cleanly in your first reporting period." },
      { q: "Can you give a written opinion our auditor will accept?", a: "We provide documented technical accounting positions with standard references and worked computations, designed to be shared with and relied upon by your statutory auditor." },
      { q: "Which standards do you most often get called for?", a: "Revenue (Ind AS 115), leases (Ind AS 116), financial instruments and hedge accounting (Ind AS 109), and business combinations / purchase price allocation (Ind AS 103)." },
      { q: "Do you also cover IFRS for overseas group reporting?", a: "Yes — we reconcile Ind AS to IFRS for group reporting packs and advise on differences relevant to your parent's consolidation." },
    ],
  },
  {
    slug: "cost-cma",
    title: "Cost Accounting & CMA Services",
    cluster: "Advisory & Outsourcing",
    icon: "Calculator",
    tagline: "Cost audit, cost records and costing systems for regulated and growth businesses.",
    overview:
      "Cost-management services spanning statutory cost audit under the Companies (Cost Records and Audit) Rules, cost-records maintenance, and the costing systems that drive better pricing and margin decisions — including cost certificates required for customs and anti-dumping matters.",
    groups: [
      {
        title: "Cost Audit & Records",
        items: [
          { name: "Cost Audit under CRA Rules (Regulated & Non-Regulated Industries)" },
          { name: "Cost Records Maintenance Advisory" },
          { name: "Cost of Production Certificate for Customs / Anti-Dumping" },
        ],
      },
      {
        title: "Costing & Analysis",
        items: [
          { name: "Product Costing & Cost Sheet Preparation" },
          { name: "Standard Costing & Variance Analysis" },
          { name: "Activity-Based Costing (ABC) Implementation" },
          { name: "Break-Even & Margin of Safety Analysis" },
        ],
      },
    ],
    relatedPractices: ["audit-assurance", "consulting-cfo", "direct-tax"],
    industries: [],
    leadMagnets: [],
    faqs: [
      { q: "Is our company required to maintain cost records?", a: "It depends on your industry and turnover under the Companies (Cost Records and Audit) Rules, 2014. We assess applicability and, where required, set up compliant cost records and the CRA-3 cost audit." },
      { q: "Can you provide a cost certificate for an anti-dumping matter?", a: "Yes. We prepare cost-of-production certificates in the formats authorities expect for customs valuation and trade-remedy proceedings." },
      { q: "Do you help beyond compliance?", a: "Yes — product costing, ABC and variance analysis are used to inform pricing, make-vs-buy and margin-improvement decisions, not just statutory filings." },
    ],
  },
  {
    slug: "actuarial-employee-benefits",
    title: "Actuarial & Employee Benefits",
    cluster: "Advisory & Outsourcing",
    icon: "LineChart",
    tagline: "Gratuity, leave and pension liability valuations and ESOP fair value.",
    overview:
      "Year-end employee-benefit valuations every company with staff needs — gratuity, leave encashment and pension liabilities under AS 15 / Ind AS 19 — together with ESOP fair-value measurement (Ind AS 102) and the actuarial support your auditors require.",
    groups: [
      {
        title: "Benefit Liability Valuations",
        items: [
          { name: "Gratuity Liability Valuation (AS 15 / Ind AS 19)" },
          { name: "Leave Encashment Liability Valuation" },
          { name: "Pension Liability Valuation" },
          { name: "Post-Retirement Medical Benefit Valuation" },
          { name: "ESOP Fair Value Measurement (Ind AS 102 / Black-Scholes)" },
        ],
      },
      {
        title: "Trust & Audit Support",
        items: [
          { name: "Actuarial Report for Statutory Audit Support" },
          { name: "Group Gratuity Trust Advisory" },
        ],
      },
    ],
    relatedPractices: ["audit-assurance", "consulting-cfo", "corporate-secretarial"],
    industries: [],
    leadMagnets: [],
    faqs: [
      { q: "Do we need an actuarial valuation every year?", a: "Yes — gratuity and other defined-benefit obligations must be re-measured at each reporting date under AS 15 / Ind AS 19 for your financial statements and audit." },
      { q: "What do you need from us to start?", a: "A current employee census (date of birth, joining date, salary and benefit terms) and your prior valuation report, if any. We handle the rest." },
      { q: "Can you value ESOPs for accounting and tax?", a: "Yes — we measure ESOP fair value (Black-Scholes / binomial) for the Ind AS 102 charge and support related disclosures." },
    ],
  },
  {
    slug: "treasury-forex",
    title: "Treasury & Forex Advisory",
    cluster: "Advisory & Outsourcing",
    icon: "ArrowLeftRight",
    tagline: "Treasury policy, FX risk frameworks and hedge accounting.",
    overview:
      "Treasury advisory for corporates with currency, interest-rate and commodity exposure — from board-approved treasury and hedging policies to mark-to-market reporting and hedge accounting under Ind AS 109.",
    groups: [
      {
        title: "Policy & Risk Framework",
        items: [
          { name: "Treasury Policy Design & Review" },
          { name: "Forex Risk Management Framework" },
          { name: "Hedging Strategy Advisory (Forwards / Options / Swaps)" },
          { name: "Commodity Price Risk Hedging Advisory" },
          { name: "Investment Policy Design for Corporates" },
        ],
      },
      {
        title: "Accounting & Reporting",
        items: [
          { name: "Mark-to-Market (MTM) Accounting & Reporting" },
          { name: "Derivative Accounting Advisory (Ind AS 109)" },
          { name: "Cash Pooling & Intercompany Netting Advisory" },
        ],
      },
    ],
    relatedPractices: ["fema-rbi", "consulting-cfo", "ma-valuation"],
    industries: [],
    leadMagnets: [],
    faqs: [
      { q: "We hedge FX but have no formal policy — can you help?", a: "Yes. We draft a board-approved treasury and hedging policy with clear exposure limits, instruments, approval matrix and reporting cadence." },
      { q: "Do you support hedge accounting?", a: "We design and document hedge relationships, effectiveness testing and the Ind AS 109 accounting so derivatives are reported correctly and pass audit." },
      { q: "Can you advise on commodity exposure too?", a: "Yes — the same framework covers commodity price risk alongside currency and interest-rate risk." },
    ],
  },
  {
    slug: "nbfc-fintech-regulatory",
    title: "NBFC & FinTech Regulatory",
    cluster: "Regulatory & Cross-Border",
    icon: "Landmark",
    tagline: "RBI licensing and ongoing compliance for NBFCs, payments and fintech.",
    overview:
      "End-to-end RBI regulatory support for the financial-services and fintech ecosystem — NBFC registration across categories, payment and account-aggregator licensing, ongoing RBI returns and inspection readiness, and the emerging regulatory perimeter around crypto/VDA and online gaming.",
    groups: [
      {
        title: "NBFC Licensing & Compliance",
        items: [
          { name: "NBFC Registration (Non-Deposit / MFI / P2P / AA / HFC)" },
          { name: "NBFC Annual Compliance Calendar & RBI Returns" },
          { name: "RBI Supervisory Inspection Preparation" },
          { name: "Co-Lending Structure Advisory" },
        ],
      },
      {
        title: "Payments & FinTech Licensing",
        items: [
          { name: "Payment Aggregator / Payment Gateway Licensing (RBI)" },
          { name: "Account Aggregator (AA) Registration & Compliance" },
          { name: "Prepaid Payment Instrument (PPI) Licensing" },
          { name: "Crypto / VDA Exchange Regulatory Advisory (PMLA / FIU-IND / KYC / AML)" },
          { name: "Gaming & Online Skill-Games Regulatory Compliance" },
        ],
      },
    ],
    relatedPractices: ["fema-rbi", "corporate-secretarial", "aif-funds"],
    industries: [],
    leadMagnets: [],
    faqs: [
      { q: "Which NBFC category do we need?", a: "We assess your business model against RBI's classifications (investment & credit, MFI, P2P, account aggregator, HFC and others) and guide registration for the right category." },
      { q: "Can you run our ongoing RBI compliance?", a: "Yes — we maintain the annual compliance calendar, prepare periodic RBI returns and get you inspection-ready." },
      { q: "Do you advise payment and account-aggregator startups?", a: "Yes, including PA/PG and AA licensing and the consent-and-KYC framework that goes with them." },
    ],
  },
  {
    slug: "data-privacy-dpdp",
    title: "Data Privacy & Cybersecurity",
    cluster: "Advisory & Outsourcing",
    icon: "Lock",
    tagline: "DPDP Act and GDPR compliance, SOC 2 and ISO 27001 readiness.",
    overview:
      "Privacy and security-compliance advisory for the new data-protection era — operationalising India's DPDP Act, GDPR for EU-facing operations, and the assurance frameworks (SOC 1/2, ISO 27001, CERT-In) that customers and regulators increasingly demand.",
    groups: [
      {
        title: "Privacy Compliance",
        items: [
          { name: "India DPDP Act (2023) Compliance" },
          { name: "GDPR Compliance for Indian Companies with EU Operations" },
          { name: "Privacy Policy & Consent Framework Drafting" },
          { name: "Data Protection Impact Assessment (DPIA)" },
        ],
      },
      {
        title: "Security Assurance",
        items: [
          { name: "SOC 1 / SOC 2 Readiness Advisory" },
          { name: "ISO 27001 Implementation Support" },
          { name: "Cybersecurity Risk Assessment (CERT-In Compliance)" },
        ],
      },
    ],
    relatedPractices: ["audit-assurance", "consulting-cfo", "corporate-secretarial"],
    industries: [],
    leadMagnets: [],
    faqs: [
      { q: "What does DPDP Act compliance involve?", a: "Mapping the personal data you hold, putting a lawful consent and notice framework in place, defining data-principal rights processes, and assigning accountability — we operationalise all of it, not just draft a policy." },
      { q: "We sell to EU customers — do we need GDPR too?", a: "If you process EU residents' data, yes. We align your DPDP work with GDPR so one programme covers both." },
      { q: "Can you get us SOC 2 or ISO 27001 ready?", a: "Yes — we run the readiness assessment, close control gaps and prepare you for the attestation/certification audit." },
    ],
  },
];

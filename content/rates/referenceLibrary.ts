/**
 * Reference Library taxonomy for /knowledge-bank/rates (Book1, Knowledge Bank #37).
 * Items with an `href` link to a live tool/page; the rest are catalogued and
 * being populated by the firm. No rate values are asserted here — verify all
 * figures against the latest notifications (CLIENT_TODO.md).
 */
export type RefItem = { label: string; href?: string };
export type RefSubsection = { title: string; items: RefItem[] };
export type RefSection = { section: string; groups: RefSubsection[] };

export const referenceLibrary: RefSection[] = [
  {
    section: "Direct Tax Reference",
    groups: [
      {
        title: "Direct Tax",
        items: [
          { label: "TDS Rate Chart" },
          { label: "TCS Rate Chart" },
          { label: "Advance Tax Due Dates", href: "/knowledge-bank/important-dates" },
          { label: "Interest Rate Chart (234A/B/C)" },
          { label: "Presumptive Taxation Limits" },
          { label: "Capital Gains Tax Rate Chart", href: "/knowledge-bank/calculators/capital-gains" },
          { label: "Section 54 / 54F / 54EC Comparison" },
          { label: "Surcharge & Cess Chart" },
          { label: "Tax Audit Applicability Matrix" },
          { label: "ITR Due Date Chart", href: "/knowledge-bank/important-dates" },
          { label: "PAN–Aadhaar Penalty Matrix" },
          { label: "HUF Taxation Guide" },
          { label: "NRI Taxation Reference" },
        ],
      },
      {
        title: "International Tax",
        items: [
          { label: "DTAA Rate Chart (Country-wise)" },
          { label: "Withholding Tax Rates" },
          { label: "Equalisation Levy Chart" },
          { label: "Transfer Pricing Threshold Chart" },
          { label: "OECD Pillar Two Summary" },
        ],
      },
    ],
  },
  {
    section: "GST & Indirect Tax Reference",
    groups: [
      {
        title: "GST",
        items: [
          { label: "GST Rate Finder", href: "/knowledge-bank/calculators/gst-rate" },
          { label: "HSN Master Database" },
          { label: "SAC Master Database" },
          { label: "Composition Scheme Limits" },
          { label: "GST Interest & Penalty Chart" },
          { label: "E-Invoicing Applicability" },
          { label: "E-Way Bill Limits" },
          { label: "GST Return Calendar", href: "/knowledge-bank/important-dates" },
          { label: "GST Registration Thresholds" },
          { label: "GST Refund Matrix" },
          { label: "LUT / Bond Reference Guide" },
        ],
      },
      {
        title: "Customs",
        items: [
          { label: "Customs Duty Calculator" },
          { label: "RoDTEP Rates" },
          { label: "Duty Drawback Rates" },
          { label: "Import Compliance Checklist" },
          { label: "Export Compliance Checklist" },
          { label: "FTA Reference Matrix" },
        ],
      },
    ],
  },
  {
    section: "Corporate Law & ROC Reference",
    groups: [
      {
        title: "Companies Act",
        items: [
          { label: "ROC Filing Fees" },
          { label: "Additional Fees Calculator" },
          { label: "Company Forms Library", href: "/knowledge-bank/forms" },
          { label: "LLP Forms Library", href: "/knowledge-bank/forms" },
          { label: "Director KYC Guide" },
          { label: "DIN Compliance Guide" },
          { label: "AGM Due Date Calculator" },
          { label: "Board Meeting Calendar" },
          { label: "CSR Applicability Matrix" },
          { label: "Secretarial Audit Applicability" },
          { label: "XBRL Applicability" },
          { label: "OPC Compliance Matrix" },
          { label: "Section 8 Compliance Matrix" },
        ],
      },
      {
        title: "LLP",
        items: [
          { label: "LLP Annual Compliance Calendar" },
          { label: "LLP Fee Chart" },
          { label: "LLP Conversion Guide" },
        ],
      },
    ],
  },
  {
    section: "FEMA & RBI Reference",
    groups: [
      {
        title: "FEMA",
        items: [
          { label: "FC-GPR Timeline" },
          { label: "FC-TRS Timeline" },
          { label: "ODI Compliance Calendar" },
          { label: "FDI Sectoral Caps" },
          { label: "ECB Matrix" },
          { label: "FEMA Penalty Chart" },
          { label: "Compounding Matrix" },
          { label: "FLA Return Guide" },
          { label: "APR Filing Guide" },
        ],
      },
      {
        title: "RBI",
        items: [
          { label: "NBFC Compliance Calendar" },
          { label: "CIC Compliance Matrix" },
          { label: "Payment Aggregator Regulations Summary" },
        ],
      },
    ],
  },
  {
    section: "SEBI & Capital Markets Reference",
    groups: [
      {
        title: "AIF",
        items: [
          { label: "AIF Compliance Calendar", href: "/knowledge-bank/important-dates" },
          { label: "Category I / II / III Comparison" },
          { label: "AIF PPM Audit Checklist" },
          { label: "AIF Reporting Calendar" },
          { label: "AIF Taxation Matrix" },
        ],
      },
      {
        title: "PMS",
        items: [
          { label: "PMS Compliance Calendar", href: "/knowledge-bank/important-dates" },
          { label: "PMS Audit Checklist" },
        ],
      },
      {
        title: "Listed Entities",
        items: [
          { label: "LODR Compliance Calendar", href: "/knowledge-bank/important-dates" },
          { label: "Insider Trading Compliance Calendar" },
          { label: "SME IPO Compliance Calendar" },
          { label: "Mainboard IPO Timeline" },
        ],
      },
      {
        title: "Other Intermediaries",
        items: [
          { label: "RIA Compliance Calendar" },
          { label: "Research Analyst Compliance Calendar" },
        ],
      },
    ],
  },
  {
    section: "Business & Financial Utilities",
    groups: [
      {
        title: "Financial",
        items: [
          { label: "Cost Inflation Index", href: "/knowledge-bank/rates/cii" },
          { label: "Inflation Calculator" },
          { label: "EMI Calculator", href: "/knowledge-bank/calculators/emi" },
          { label: "CAGR Calculator" },
          { label: "NPV Calculator" },
          { label: "IRR Calculator" },
          { label: "Valuation Multiples Database" },
          { label: "Startup Burn Rate Calculator" },
          { label: "Working Capital Calculator" },
        ],
      },
      {
        title: "Accounting",
        items: [
          { label: "Accounting Standards Summary" },
          { label: "Ind AS Summary" },
          { label: "Schedule III Formats" },
          { label: "Audit Checklist Library" },
          { label: "Internal Control Templates" },
        ],
      },
    ],
  },
  {
    section: "Download Centre — Formats & Templates",
    groups: [
      {
        title: "Templates",
        items: [
          { label: "Board Resolution Library" },
          { label: "Shareholders Resolution Library" },
          { label: "Engagement Letters" },
          { label: "Audit Checklists" },
          { label: "Due Diligence Checklists" },
          { label: "FEMA Checklists" },
          { label: "AIF Checklists" },
          { label: "PMS Checklists" },
          { label: "CSR Templates" },
          { label: "Trust Deeds" },
          { label: "LLP Agreements" },
          { label: "Employment Agreements" },
          { label: "SOP Templates" },
        ],
      },
    ],
  },
  {
    section: "Regulatory Thresholds & Applicability Matrix",
    groups: [
      {
        title: "Applicability",
        items: [
          { label: "Tax Audit — Turnover Limits" },
          { label: "GST Registration — Threshold Limits" },
          { label: "CSR — Net Worth / Turnover / Profit" },
          { label: "Internal Audit — Companies Act" },
          { label: "Secretarial Audit — Companies Act" },
          { label: "FEMA Reporting — Trigger Events" },
          { label: "AIF Audit — Frequency" },
          { label: "MSME Registration — Investment / Turnover" },
          { label: "Startup India — Eligibility" },
          { label: "PF — Employee Threshold" },
          { label: "ESIC — Employee Threshold" },
        ],
      },
    ],
  },
];

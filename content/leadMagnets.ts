import type { LeadMagnet } from "./types";

/**
 * Lead magnets by practice (03 §6). Actual PDF/Excel files are PLACEHOLDERS the
 * client supplies (CLIENT_TODO.md). Tool-type magnets link to live calculators.
 */
export const leadMagnets: LeadMagnet[] = [
  // Audit & Assurance
  { id: "statutory-audit-checklist", title: "Statutory Audit Prep Checklist", format: "PDF", practice: "audit-assurance", gated: true, blurb: "A practical checklist to be audit-ready before year-end." },
  { id: "internal-audit-maturity", title: "Internal Audit Maturity Assessment", format: "Tool", practice: "audit-assurance", gated: true },
  { id: "brsr-scorecard", title: "ESG / BRSR Readiness Scorecard", format: "Checklist", practice: "audit-assurance", gated: true },
  { id: "aif-compliance-calendar", title: "AIF Compliance Calendar Template", format: "Excel", practice: "audit-assurance", gated: true },
  { id: "forensic-trigger-checklist", title: "Forensic Trigger Checklist", format: "Checklist", practice: "audit-assurance", gated: true },

  // Direct Tax
  { id: "old-vs-new-calculator", title: "Old vs New Regime Calculator", format: "Tool", practice: "direct-tax", gated: false, href: "/knowledge-bank/calculators/income-tax" },
  { id: "capital-gains-calculator", title: "Capital Gains Calculator", format: "Tool", practice: "direct-tax", gated: false, href: "/knowledge-bank/calculators/capital-gains" },
  { id: "tds-rate-card", title: "TDS Rate Card FY 2025-26", format: "PDF", practice: "direct-tax", gated: true },
  { id: "esop-calculator", title: "ESOP Taxation Calculator", format: "Tool", practice: "direct-tax", gated: false, href: "/knowledge-bank/calculators/esop" },
  { id: "intl-tax-risk-checklist", title: "International Tax Risk Checklist", format: "Checklist", practice: "international-tax-tp", gated: true },
  { id: "us-india-treaty-summary", title: "US–India Treaty Summary", format: "PDF", practice: "international-tax-tp", gated: true },

  // GST / Indirect
  { id: "gst-return-calendar", title: "GST Return Calendar", format: "PDF", practice: "indirect-tax-gst", gated: false, href: "/knowledge-bank/important-dates" },
  { id: "gst-refund-checklist", title: "GST Refund Checklist for Exporters", format: "Checklist", practice: "indirect-tax-gst", gated: true },
  { id: "itc-reconciliation-template", title: "ITC Reconciliation Template", format: "Excel", practice: "indirect-tax-gst", gated: true },
  { id: "e-invoicing-checklist", title: "E-Invoicing Checklist", format: "Checklist", practice: "indirect-tax-gst", gated: true },
  { id: "gst-health-check", title: "GST Health Check — 20 Point", format: "Checklist", practice: "indirect-tax-gst", gated: true },

  // AIF / Funds
  { id: "aif-setup-checklist", title: "AIF Setup Checklist", format: "Checklist", practice: "aif-funds", gated: true },
  { id: "aif-pms-mf-comparison", title: "AIF vs PMS vs MF Comparison", format: "PDF", practice: "aif-funds", gated: true },
  { id: "aif-waterfall-calculator", title: "AIF Waterfall Calculator", format: "Tool", practice: "aif-funds", gated: true, href: "/knowledge-bank/calculators/aif-waterfall" },
  { id: "investor-kyc-checklist", title: "Investor KYC Checklist", format: "Checklist", practice: "aif-funds", gated: true },
  { id: "giftcity-comparison", title: "GIFT City vs Singapore vs Cayman", format: "PDF", practice: "aif-funds", gated: true },

  // FEMA / Cross-Border
  { id: "fdi-compliance-checklist", title: "FDI Compliance Checklist", format: "Checklist", practice: "fema-rbi", gated: true },
  { id: "fema-risk-assessment", title: "FEMA Violation Risk Assessment", format: "Tool", practice: "fema-rbi", gated: true },
  { id: "holding-comparison", title: "Mauritius vs Singapore vs UAE Holding Comparison", format: "PDF", practice: "fema-rbi", gated: true },
  { id: "nri-tax-checklist", title: "NRI Tax Checklist", format: "Checklist", practice: "fema-rbi", gated: true },
  { id: "fatca-crs-guide", title: "FATCA / CRS Self-Cert Guide", format: "PDF", practice: "family-office-wealth", gated: true },

  // Consulting / CFO
  { id: "cost-reduction-assessment", title: "Cost-Reduction Opportunity Assessment", format: "Tool", practice: "consulting-cfo", gated: true, blurb: "A complimentary diagnostic to size your savings." },
  { id: "cfo-roi-calculator", title: "CFO-as-a-Service ROI Calculator", format: "Tool", practice: "consulting-cfo", gated: false, href: "/knowledge-bank/calculators/cfo-roi" },
  { id: "startup-financial-model", title: "Startup Financial Model Template", format: "Excel", practice: "consulting-cfo", gated: true },
  { id: "mis-dashboard-template", title: "MIS Dashboard Template", format: "Excel", practice: "consulting-cfo", gated: true },
  { id: "board-reporting-pack", title: "Board Reporting Pack Sample", format: "PDF", practice: "consulting-cfo", gated: true },
];

export const leadMagnetById = (id: string) => leadMagnets.find((m) => m.id === id);

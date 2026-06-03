/**
 * Single source of truth for compliance due dates. Feeds both the
 * /knowledge-bank/important-dates calendar and the homepage ticker.
 * Editable by the firm. Dates are recurring monthly/periodic statutory dates;
 * `month` is 1-12 or null for "every month". Verify against the latest
 * notifications before relying on them (CLIENT_TODO.md).
 */
export type ComplianceItem = {
  day: number;
  month: number | null; // null => recurs every month
  title: string;
  category: "GST" | "Income Tax" | "TDS" | "ROC" | "PF/ESI" | "FEMA";
  detail: string;
};

export const complianceDates: ComplianceItem[] = [
  { day: 7, month: null, title: "TDS / TCS deposit", category: "TDS", detail: "Deposit of TDS/TCS deducted in the previous month." },
  { day: 11, month: null, title: "GSTR-1 (monthly)", category: "GST", detail: "Outward supplies return for monthly filers." },
  { day: 13, month: null, title: "GSTR-1 (QRMP) / IFF", category: "GST", detail: "Invoice Furnishing Facility for QRMP taxpayers." },
  { day: 15, month: null, title: "PF & ESI payment", category: "PF/ESI", detail: "Provident Fund and ESI contribution for the previous month." },
  { day: 20, month: null, title: "GSTR-3B (monthly)", category: "GST", detail: "Summary return and tax payment for monthly filers." },
  { day: 15, month: 6, title: "Advance Tax — 1st instalment", category: "Income Tax", detail: "15% of estimated advance tax for the year." },
  { day: 15, month: 7, title: "FLA Return", category: "FEMA", detail: "Foreign Liabilities & Assets annual return to RBI." },
  { day: 31, month: 7, title: "ITR filing (non-audit)", category: "Income Tax", detail: "Income-tax return for individuals not subject to audit." },
  { day: 15, month: 9, title: "Advance Tax — 2nd instalment", category: "Income Tax", detail: "Cumulative 45% of advance tax." },
  { day: 30, month: 9, title: "Tax Audit report (3CA/3CB-3CD)", category: "Income Tax", detail: "Filing of tax-audit report u/s 44AB." },
  { day: 30, month: 9, title: "AGM & AOC-4 trigger", category: "ROC", detail: "AGM for FY companies; AOC-4 within 30 days thereafter." },
  { day: 31, month: 10, title: "ITR filing (audit cases)", category: "Income Tax", detail: "Return for assessees subject to tax audit." },
  { day: 29, month: 11, title: "MGT-7 annual return", category: "ROC", detail: "Annual return within 60 days of the AGM." },
  { day: 15, month: 12, title: "Advance Tax — 3rd instalment", category: "Income Tax", detail: "Cumulative 75% of advance tax." },
  { day: 31, month: 12, title: "GSTR-9 / 9C annual", category: "GST", detail: "Annual return and reconciliation statement." },
  { day: 15, month: 3, title: "Advance Tax — 4th instalment", category: "Income Tax", detail: "Cumulative 100% of advance tax." },
];

export const complianceCategories = ["GST", "Income Tax", "TDS", "ROC", "PF/ESI", "FEMA"] as const;

/** Short strings for the homepage ticker. */
export const tickerDates = complianceDates.map(
  (d) => `${d.day} ${d.month ? monthShort(d.month) : "(monthly)"} — ${d.title}`,
);

function monthShort(m: number) {
  return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m - 1];
}

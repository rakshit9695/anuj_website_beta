import { tdsSections } from "./tds";
import { cii } from "./cii";
import { hsnSample } from "./gst";
import { depreciationIT, usefulLivesCompaniesAct, rocFees, llpFees } from "./misc";
import { newRegimeSlabs, oldRegimeSlabs } from "./incomeTax";

export interface RateChart {
  slug: string;
  title: string;
  summary: string;
  updated: string;
  columns: string[];
  rows: (string | number)[][];
}

const fmtSlab = (s: { upTo: number | null; rate: number }, prevUpper: number) => {
  const lower = prevUpper;
  const upper = s.upTo ? `₹${s.upTo.toLocaleString("en-IN")}` : "Above";
  const band = s.upTo ? `₹${lower.toLocaleString("en-IN")} – ${upper}` : `Above ₹${lower.toLocaleString("en-IN")}`;
  return [band, `${s.rate * 100}%`];
};

function slabRows(slabs: { upTo: number | null; rate: number }[]) {
  const rows: (string | number)[][] = [];
  let prev = 0;
  for (const s of slabs) {
    rows.push(fmtSlab(s, prev));
    prev = s.upTo ?? prev;
  }
  return rows;
}

export const rateCharts: RateChart[] = [
  {
    slug: "tds",
    title: "TDS Rate Chart (FY 2025-26)",
    summary: "Section-wise TDS rates for resident payees, with thresholds.",
    updated: "2025-04-01",
    columns: ["Section", "Nature of payment", "Threshold", "Rate (resident)"],
    rows: tdsSections.map((t) => [t.section, t.nature, t.threshold, `${t.rateResident}%`]),
  },
  {
    slug: "income-tax-new",
    title: "Income-Tax Slabs — New Regime (FY 2025-26)",
    summary: "Default regime slab rates.",
    updated: "2025-04-01",
    columns: ["Income band", "Rate"],
    rows: slabRows(newRegimeSlabs),
  },
  {
    slug: "income-tax-old",
    title: "Income-Tax Slabs — Old Regime (FY 2025-26)",
    summary: "Old regime slab rates (below 60 years).",
    updated: "2025-04-01",
    columns: ["Income band", "Rate"],
    rows: slabRows(oldRegimeSlabs),
  },
  {
    slug: "cii",
    title: "Cost Inflation Index (CII)",
    summary: "All notified CII values (base 2001-02 = 100).",
    updated: "2025-06-01",
    columns: ["Financial year", "CII"],
    rows: Object.entries(cii).map(([y, v]) => [y, v]),
  },
  {
    slug: "hsn-gst",
    title: "HSN / SAC GST Rate List (sample)",
    summary: "Indicative GST rates by HSN/SAC code — extend as needed.",
    updated: "2025-04-01",
    columns: ["Code", "Type", "Description", "GST rate"],
    rows: hsnSample.map((h) => [h.code, h.type, h.description, `${h.rate}%`]),
  },
  {
    slug: "depreciation",
    title: "Depreciation Rates (Income-tax Act, WDV)",
    summary: "Indicative depreciation rates under the Income-tax Act.",
    updated: "2025-04-01",
    columns: ["Asset", "Rate (WDV)"],
    rows: depreciationIT.map((d) => [d.asset, `${d.rate}%`]),
  },
  {
    slug: "useful-lives",
    title: "Useful Lives — Companies Act 2013 (Schedule II)",
    summary: "Indicative useful lives for depreciation under the Companies Act.",
    updated: "2025-04-01",
    columns: ["Asset", "Useful life"],
    rows: usefulLivesCompaniesAct.map((d) => [d.asset, d.life]),
  },
  {
    slug: "roc-fees",
    title: "ROC Filing & Late-Fee Chart",
    summary: "Indicative ROC fees and late-filing penalties.",
    updated: "2025-04-01",
    columns: ["Form", "Item", "Amount"],
    rows: rocFees.map((r) => [r.form, r.item, r.value]),
  },
  {
    slug: "llp-fees",
    title: "LLP Fee Structure",
    summary: "Indicative LLP filing fees.",
    updated: "2025-04-01",
    columns: ["Item", "Fee"],
    rows: llpFees.map((r) => [r.item, r.value]),
  },
];

export const rateChartBySlug = (slug: string) => rateCharts.find((r) => r.slug === slug);

import type { CalculatorMeta } from "./types";

/** Calculator registry → drives the index and individual pages (08 §2). */
export const calculators: CalculatorMeta[] = [
  // MUST-HAVE — full working logic
  { slug: "income-tax", title: "Income Tax Calculator (Old vs New)", summary: "Compare your tax under the old and new regimes for FY 2025-26.", category: "Direct Tax", status: "live", practice: "direct-tax" },
  { slug: "tds", title: "TDS Calculator", summary: "Section-wise TDS rate and amount, with threshold and PAN checks.", category: "Direct Tax", status: "live", practice: "direct-tax" },
  { slug: "gst-rate", title: "GST Rate Calculator", summary: "Add GST to a base amount and split into CGST/SGST or IGST.", category: "Indirect Tax", status: "live", practice: "indirect-tax-gst" },
  { slug: "gst-mrp", title: "Reverse GST from MRP", summary: "Extract the base price and GST component from an inclusive MRP.", category: "Indirect Tax", status: "live", practice: "indirect-tax-gst" },
  { slug: "hra", title: "HRA Exemption Calculator", summary: "Section 10(13A) exemption — least-of-three, with working shown.", category: "Direct Tax", status: "live", practice: "direct-tax" },
  { slug: "capital-gains", title: "Capital Gains Calculator", summary: "STCG/LTCG on shares, mutual funds and property with current rates.", category: "Direct Tax", status: "live", practice: "direct-tax" },
  { slug: "esop", title: "ESOP Taxation Calculator", summary: "Perquisite at exercise plus capital gains at sale — total liability.", category: "Direct Tax", status: "live", practice: "startup-vc-pe" },
  { slug: "emi", title: "EMI Calculator", summary: "EMI, total interest and amortisation for home, auto or personal loans.", category: "Finance", status: "live", practice: "consulting-cfo" },

  // SHOULD-HAVE — registered; logic to be confirmed
  { slug: "net-worth", title: "Net Worth Calculator", summary: "Compute net worth from assets and liabilities.", category: "Finance", status: "stub" },
  { slug: "aif-waterfall", title: "AIF Waterfall Calculator", summary: "Hurdle, catch-up, carry and IRR for fund managers.", category: "Funds", status: "stub", practice: "aif-funds" },
  { slug: "cfo-roi", title: "CFO-as-a-Service ROI Calculator", summary: "Estimate the ROI of a fractional CFO engagement.", category: "Finance", status: "stub", practice: "consulting-cfo" },
  { slug: "gst-refund-estimator", title: "GST Refund Estimator", summary: "Indicative export/SEZ GST refund estimate.", category: "Indirect Tax", status: "stub", practice: "indirect-tax-gst" },
  { slug: "rera", title: "RERA Delay Interest Calculator", summary: "Indicative delay-possession interest under RERA.", category: "Real Estate", status: "stub", practice: "real-estate-infra" },
];

export const calculatorBySlug = (slug: string) =>
  calculators.find((c) => c.slug === slug);

export const liveCalculators = calculators.filter((c) => c.status === "live");

/** The four promoted on the homepage Knowledge Bank teaser. */
export const featuredCalculatorSlugs = ["income-tax", "gst-rate", "capital-gains", "emi"];

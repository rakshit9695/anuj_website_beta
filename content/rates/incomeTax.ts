/**
 * Income-tax slab data for FY 2025-26 / AY 2026-27. EDITABLE by the firm.
 * Both the calculators and the rate charts import from here, so a change
 * updates both. Verify against the latest Finance Act before relying on it.
 */
export type Slab = { upTo: number | null; rate: number };

/** New regime (default) — FY 2025-26. */
export const newRegimeSlabs: Slab[] = [
  { upTo: 400000, rate: 0 },
  { upTo: 800000, rate: 0.05 },
  { upTo: 1200000, rate: 0.1 },
  { upTo: 1600000, rate: 0.15 },
  { upTo: 2000000, rate: 0.2 },
  { upTo: 2400000, rate: 0.25 },
  { upTo: null, rate: 0.3 },
];

/** Old regime — below 60 years. Senior/super-senior raise the exemption. */
export const oldRegimeSlabs: Slab[] = [
  { upTo: 250000, rate: 0 },
  { upTo: 500000, rate: 0.05 },
  { upTo: 1000000, rate: 0.2 },
  { upTo: null, rate: 0.3 },
];

export const oldRegimeBasicExemption = {
  below60: 250000,
  senior: 300000, // 60–80
  superSenior: 500000, // 80+
};

export const standardDeduction = {
  new: 75000,
  old: 50000,
};

/** Section 87A rebate. */
export const rebate87A = {
  new: { incomeLimit: 1200000, maxRebate: 60000 },
  old: { incomeLimit: 500000, maxRebate: 12500 },
};

/** Surcharge bands on income (applied to tax). New regime caps surcharge at 25%. */
export const surchargeBands = [
  { over: 5000000, upTo: 10000000, rate: 0.1 },
  { over: 10000000, upTo: 20000000, rate: 0.15 },
  { over: 20000000, upTo: 50000000, rate: 0.25 },
  { over: 50000000, upTo: null, rate: 0.37 },
];

export const cessRate = 0.04;

/** Old-regime deduction ceilings (indicative; for the calculator UI). */
export const deductionCaps = {
  "80C": 150000,
  "80D": 100000, // self+parents (senior) combined indicative
  "80CCD1B": 50000, // NPS additional
  "24b": 200000, // home-loan interest (self-occupied)
};

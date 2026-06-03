import {
  newRegimeSlabs,
  oldRegimeSlabs,
  oldRegimeBasicExemption,
  rebate87A,
  surchargeBands,
  cessRate,
  type Slab,
} from "@/content/rates/incomeTax";

export type Regime = "new" | "old";
export type AgeBand = "below60" | "senior" | "superSenior";

export interface TaxResult {
  taxableIncome: number;
  baseTax: number;
  rebate: number;
  taxAfterRebate: number;
  surcharge: number;
  marginalRelief: number;
  cess: number;
  totalTax: number;
  effectiveRate: number; // on taxable income
}

function slabTax(income: number, slabs: Slab[], exemption = 0): number {
  let tax = 0;
  let lower = exemption;
  for (const s of slabs) {
    const upper = s.upTo ?? Infinity;
    if (income > lower) {
      const slabAmount = Math.min(income, upper) - lower;
      if (slabAmount > 0) tax += slabAmount * s.rate;
      lower = upper;
    } else break;
  }
  return tax;
}

function surchargeOn(tax: number, income: number, regime: Regime): number {
  let rate = 0;
  for (const b of surchargeBands) {
    if (income > b.over && (b.upTo === null || income <= b.upTo)) rate = b.rate;
  }
  // New regime caps surcharge at 25%.
  if (regime === "new" && rate > 0.25) rate = 0.25;
  return tax * rate;
}

/** Compute income tax for a given regime, taxable income and age band. */
export function computeIncomeTax(
  taxableIncome: number,
  regime: Regime,
  age: AgeBand = "below60",
): TaxResult {
  const slabs = regime === "new" ? newRegimeSlabs : oldRegimeSlabs;
  const exemption =
    regime === "new"
      ? 0
      : age === "superSenior"
        ? oldRegimeBasicExemption.superSenior
        : age === "senior"
          ? oldRegimeBasicExemption.senior
          : oldRegimeBasicExemption.below60;

  const baseTax = Math.max(0, slabTax(taxableIncome, slabs, exemption));

  // 87A rebate
  const r = rebate87A[regime];
  const rebate = taxableIncome <= r.incomeLimit ? Math.min(baseTax, r.maxRebate) : 0;
  const taxAfterRebate = Math.max(0, baseTax - rebate);

  // Surcharge + marginal relief at the 50L threshold (simplified to first band).
  let surcharge = surchargeOn(taxAfterRebate, taxableIncome, regime);
  let marginalRelief = 0;
  const firstThreshold = 5000000;
  if (taxableIncome > firstThreshold && taxAfterRebate > 0) {
    const taxAtThreshold = (() => {
      const t = slabTax(firstThreshold, slabs, exemption);
      const reb = firstThreshold <= r.incomeLimit ? Math.min(t, r.maxRebate) : 0;
      return Math.max(0, t - reb);
    })();
    const excessIncome = taxableIncome - firstThreshold;
    const totalWithSurcharge = taxAfterRebate + surcharge;
    if (totalWithSurcharge - taxAtThreshold > excessIncome) {
      const relieved = excessIncome - (taxAfterRebate - taxAtThreshold);
      marginalRelief = Math.max(0, surcharge - Math.max(0, relieved));
      surcharge = Math.max(0, surcharge - marginalRelief);
    }
  }

  const cess = (taxAfterRebate + surcharge) * cessRate;
  const totalTax = Math.round(taxAfterRebate + surcharge + cess);
  const effectiveRate = taxableIncome > 0 ? (totalTax / taxableIncome) * 100 : 0;

  return {
    taxableIncome,
    baseTax: Math.round(baseTax),
    rebate: Math.round(rebate),
    taxAfterRebate: Math.round(taxAfterRebate),
    surcharge: Math.round(surcharge),
    marginalRelief: Math.round(marginalRelief),
    cess: Math.round(cess),
    totalTax,
    effectiveRate: Math.round(effectiveRate * 100) / 100,
  };
}

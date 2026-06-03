"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, ResultLine } from "./CalculatorShell";
import { FormField, Input, Select } from "@/components/ui/Field";
import { formatINR } from "@/lib/utils";
import { cii, ciiYears } from "@/content/rates/cii";

const num = (v: string | number) => {
  const n = Number(String(v ?? "").replace(/,/g, ""));
  return isNaN(n) ? 0 : n;
};

type Asset = "listed-equity" | "equity-mf" | "debt-mf" | "property";

export function CapitalGainsCalc() {
  const [asset, setAsset] = useState<Asset>("listed-equity");
  const [buy, setBuy] = useState(500000);
  const [sell, setSell] = useState(900000);
  const [expenses, setExpenses] = useState(0);
  const [buyYear, setBuyYear] = useState("2021-22");
  const [sellYear, setSellYear] = useState("2025-26");
  const [longTerm, setLongTerm] = useState(true);

  const res = useMemo(() => {
    const net = sell - buy - expenses;
    // Indexation applies only to property/debt for LTCG acquired before 23 Jul 2024 (simplified: offer it for property).
    const indexable = asset === "property" && longTerm;
    let indexedCost = buy;
    if (indexable && cii[buyYear] && cii[sellYear]) {
      indexedCost = (buy * cii[sellYear]) / cii[buyYear];
    }
    const gain = indexable ? Math.max(0, sell - indexedCost - expenses) : net;

    let rate = 0;
    let basis = "";
    if (asset === "listed-equity" || asset === "equity-mf") {
      if (longTerm) {
        const taxable = Math.max(0, gain - 125000);
        rate = 12.5;
        basis = "LTCG u/s 112A @ 12.5% over ₹1.25L exemption (no indexation).";
        return { gain, taxable, tax: Math.round((taxable * rate) / 100), rate, basis, indexedCost };
      }
      rate = 20;
      basis = "STCG u/s 111A @ 20%.";
      return { gain, taxable: gain, tax: Math.round((gain * rate) / 100), rate, basis, indexedCost };
    }
    if (asset === "property") {
      rate = longTerm ? (indexable ? 20 : 12.5) : 30;
      basis = longTerm
        ? "LTCG on property: 20% with indexation or 12.5% without — taxpayer's option post-Jul 2024. Shown with indexation."
        : "STCG on property taxed at slab rate (assumed 30% here).";
      return { gain, taxable: gain, tax: Math.round((gain * rate) / 100), rate, basis, indexedCost };
    }
    // debt-mf
    rate = 30;
    basis = "Debt mutual funds (post-Apr 2023) taxed at slab rate (assumed 30%); no indexation.";
    return { gain, taxable: gain, tax: Math.round((gain * rate) / 100), rate, basis, indexedCost };
  }, [asset, buy, sell, expenses, buyYear, sellYear, longTerm]);

  return (
    <CalculatorShell
      ctaPractice="direct-tax"
      inputs={
        <>
          <FormField label="Asset type" htmlFor="cg-asset">
            <Select id="cg-asset" value={asset} onChange={(e) => setAsset(e.target.value as Asset)}>
              <option value="listed-equity">Listed shares (STT paid)</option>
              <option value="equity-mf">Equity mutual fund</option>
              <option value="debt-mf">Debt mutual fund</option>
              <option value="property">Immovable property</option>
            </Select>
          </FormField>
          <FormField label="Purchase value (₹)" htmlFor="cg-buy"><Input id="cg-buy" inputMode="numeric" value={buy} onChange={(e) => setBuy(num(e.target.value))} /></FormField>
          <FormField label="Sale value (₹)" htmlFor="cg-sell"><Input id="cg-sell" inputMode="numeric" value={sell} onChange={(e) => setSell(num(e.target.value))} /></FormField>
          <FormField label="Transfer expenses (₹)" htmlFor="cg-exp"><Input id="cg-exp" inputMode="numeric" value={expenses} onChange={(e) => setExpenses(num(e.target.value))} /></FormField>
          <label className="flex items-center gap-2 text-sm text-ink-700">
            <input type="checkbox" checked={longTerm} onChange={(e) => setLongTerm(e.target.checked)} className="accent-navy-900" /> Long-term holding
          </label>
          {asset === "property" && longTerm && (
            <div className="grid grid-cols-2 gap-3">
              <FormField label="Purchase FY" htmlFor="cg-by">
                <Select id="cg-by" value={buyYear} onChange={(e) => setBuyYear(e.target.value)}>{ciiYears.map((y) => <option key={y}>{y}</option>)}</Select>
              </FormField>
              <FormField label="Sale FY" htmlFor="cg-sy">
                <Select id="cg-sy" value={sellYear} onChange={(e) => setSellYear(e.target.value)}>{ciiYears.map((y) => <option key={y}>{y}</option>)}</Select>
              </FormField>
            </div>
          )}
        </>
      }
      result={
        <div>
          {asset === "property" && longTerm && <ResultLine label="Indexed cost" value={formatINR(Math.round(res.indexedCost))} />}
          <ResultLine label={longTerm ? "Long-term capital gain" : "Short-term capital gain"} value={formatINR(Math.round(res.gain))} />
          <ResultLine label="Applicable rate" value={`${res.rate}%`} />
          <ResultLine label="Estimated tax" value={formatINR(res.tax)} accent />
          <p className="mt-2 text-xs text-ink-500">{res.basis} Surcharge & cess extra.</p>
        </div>
      }
      howItWorks={
        <p>
          We classify the gain as short- or long-term and apply current rules: listed equity LTCG at 12.5%
          over the ₹1.25 lakh exemption (112A) and STCG at 20% (111A); property LTCG at 20% with indexation
          or 12.5% without (your option post-July 2024); debt MFs at slab. Surcharge and cess are additional.
        </p>
      }
    />
  );
}

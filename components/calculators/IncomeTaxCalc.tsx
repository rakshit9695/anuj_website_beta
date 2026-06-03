"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, ResultLine } from "./CalculatorShell";
import { FormField, Input, Select } from "@/components/ui/Field";
import { formatINR } from "@/lib/utils";
import { computeIncomeTax, type AgeBand } from "@/lib/tax";
import { standardDeduction } from "@/content/rates/incomeTax";

const num = (v: FormDataEntryValue | string | number | null) => {
  const n = Number(String(v ?? "").replace(/,/g, ""));
  return isNaN(n) ? 0 : n;
};

export function IncomeTaxCalc() {
  const [age, setAge] = useState<AgeBand>("below60");
  const [salaried, setSalaried] = useState(true);
  const [gross, setGross] = useState(1500000);
  const [ded80c, setDed80c] = useState(150000);
  const [ded80d, setDed80d] = useState(25000);
  const [ded24b, setDed24b] = useState(0);
  const [nps, setNps] = useState(0);

  const { newRes, oldRes, recommended } = useMemo(() => {
    const sdNew = salaried ? standardDeduction.new : 0;
    const sdOld = salaried ? standardDeduction.old : 0;
    const newTaxable = Math.max(0, gross - sdNew);
    const oldTaxable = Math.max(0, gross - sdOld - ded80c - ded80d - ded24b - nps);
    const newRes = computeIncomeTax(newTaxable, "new", age);
    const oldRes = computeIncomeTax(oldTaxable, "old", age);
    return {
      newRes,
      oldRes,
      recommended: newRes.totalTax <= oldRes.totalTax ? "new" : "old",
    };
  }, [gross, ded80c, ded80d, ded24b, nps, age, salaried]);

  const maxTax = Math.max(newRes.totalTax, oldRes.totalTax, 1);

  return (
    <CalculatorShell
      ctaPractice="direct-tax"
      inputs={
        <>
          <FormField label="Age band" htmlFor="it-age">
            <Select id="it-age" value={age} onChange={(e) => setAge(e.target.value as AgeBand)}>
              <option value="below60">Below 60</option>
              <option value="senior">Senior (60–80)</option>
              <option value="superSenior">Super senior (80+)</option>
            </Select>
          </FormField>
          <FormField label="Gross total income (₹)" htmlFor="it-gross">
            <Input id="it-gross" inputMode="numeric" value={gross} onChange={(e) => setGross(num(e.target.value))} />
          </FormField>
          <label className="flex items-center gap-2 text-sm text-ink-700">
            <input type="checkbox" checked={salaried} onChange={(e) => setSalaried(e.target.checked)} className="accent-navy-900" />
            Salaried (apply standard deduction)
          </label>
          <p className="pt-2 text-xs font-semibold uppercase tracking-wide text-ink-500">Old-regime deductions</p>
          <FormField label="80C (₹)" htmlFor="it-80c">
            <Input id="it-80c" inputMode="numeric" value={ded80c} onChange={(e) => setDed80c(num(e.target.value))} />
          </FormField>
          <FormField label="80D — medical insurance (₹)" htmlFor="it-80d">
            <Input id="it-80d" inputMode="numeric" value={ded80d} onChange={(e) => setDed80d(num(e.target.value))} />
          </FormField>
          <FormField label="80CCD(1B) — NPS (₹)" htmlFor="it-nps">
            <Input id="it-nps" inputMode="numeric" value={nps} onChange={(e) => setNps(num(e.target.value))} />
          </FormField>
          <FormField label="24(b) — home-loan interest (₹)" htmlFor="it-24b">
            <Input id="it-24b" inputMode="numeric" value={ded24b} onChange={(e) => setDed24b(num(e.target.value))} />
          </FormField>
        </>
      }
      result={
        <div>
          <div className="grid grid-cols-2 gap-4">
            {([["New regime", newRes], ["Old regime", oldRes]] as const).map(([label, r]) => (
              <div key={label} className={"rounded-lg border p-3 " + (recommended === (label === "New regime" ? "new" : "old") ? "border-brass-500 bg-brass-100/40" : "border-ink-300 bg-surface")}>
                <p className="text-xs uppercase tracking-wide text-ink-500">{label}</p>
                <p className="mt-1 font-mono text-xl font-semibold tabular-nums text-navy-900">{formatINR(r.totalTax)}</p>
                <p className="mt-1 text-xs text-ink-500">Effective {r.effectiveRate}%</p>
              </div>
            ))}
          </div>
          <p className="mt-3 rounded-lg bg-navy-900 px-4 py-2.5 text-sm text-paper">
            Recommended: <strong className="text-brass-400">{recommended === "new" ? "New regime" : "Old regime"}</strong> — you save {formatINR(Math.abs(newRes.totalTax - oldRes.totalTax))}.
          </p>
          {/* mini bar chart */}
          <div className="mt-4 space-y-2">
            {([["New", newRes.totalTax], ["Old", oldRes.totalTax]] as const).map(([l, v]) => (
              <div key={l} className="flex items-center gap-2 text-xs">
                <span className="w-8 text-ink-500">{l}</span>
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-navy-100">
                  <div className="h-full rounded-full bg-brass-500" style={{ width: `${(v / maxTax) * 100}%` }} />
                </div>
                <span className="w-24 text-right font-mono tabular-nums">{formatINR(v)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm">
            <p className="mb-1 font-medium text-navy-900">New-regime breakdown</p>
            <ResultLine label="Base tax" value={formatINR(newRes.baseTax)} />
            <ResultLine label="Rebate u/s 87A" value={`− ${formatINR(newRes.rebate)}`} />
            <ResultLine label="Surcharge" value={formatINR(newRes.surcharge)} />
            <ResultLine label="Health & education cess" value={formatINR(newRes.cess)} />
            <ResultLine label="Total tax" value={formatINR(newRes.totalTax)} accent />
          </div>
        </div>
      }
      howItWorks={
        <p>
          We compute tax under both regimes for FY 2025-26. The new regime applies the default slabs
          with a ₹{standardDeduction.new.toLocaleString("en-IN")} standard deduction (salaried) and the
          enhanced 87A rebate; the old regime applies your deductions (80C/80D/NPS/24b) and the older
          slabs. Surcharge, marginal relief and 4% cess are added. The lower total is recommended.
        </p>
      }
    />
  );
}

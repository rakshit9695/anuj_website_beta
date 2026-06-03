"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, ResultLine } from "./CalculatorShell";
import { FormField, Input, Select } from "@/components/ui/Field";
import { formatINR } from "@/lib/utils";

const num = (v: string | number) => {
  const n = Number(String(v ?? "").replace(/,/g, ""));
  return isNaN(n) ? 0 : n;
};

export function EsopCalc() {
  const [qty, setQty] = useState(1000);
  const [exercise, setExercise] = useState(10);
  const [fmvExercise, setFmvExercise] = useState(100);
  const [salarySlab, setSalarySlab] = useState(30);
  const [salePrice, setSalePrice] = useState(250);
  const [listed, setListed] = useState(true);
  const [longTerm, setLongTerm] = useState(true);

  const res = useMemo(() => {
    const perquisite = Math.max(0, (fmvExercise - exercise) * qty);
    const perqTax = (perquisite * salarySlab) / 100;

    const gain = Math.max(0, (salePrice - fmvExercise) * qty);
    let cgRate = 0;
    if (listed) cgRate = longTerm ? 12.5 : 20;
    else cgRate = longTerm ? 12.5 : salarySlab; // unlisted LTCG 12.5%, STCG at slab
    let taxable = gain;
    if (listed && longTerm) taxable = Math.max(0, gain - 125000);
    const cgTax = (taxable * cgRate) / 100;

    return {
      perquisite,
      perqTax: Math.round(perqTax),
      gain,
      cgRate,
      cgTax: Math.round(cgTax),
      total: Math.round(perqTax + cgTax),
    };
  }, [qty, exercise, fmvExercise, salarySlab, salePrice, listed, longTerm]);

  return (
    <CalculatorShell
      ctaPractice="startup-vc-pe"
      inputs={
        <>
          <FormField label="Number of shares" htmlFor="es-qty"><Input id="es-qty" inputMode="numeric" value={qty} onChange={(e) => setQty(num(e.target.value))} /></FormField>
          <FormField label="Exercise price per share (₹)" htmlFor="es-ex"><Input id="es-ex" inputMode="decimal" value={exercise} onChange={(e) => setExercise(num(e.target.value))} /></FormField>
          <FormField label="FMV at exercise per share (₹)" htmlFor="es-fmv"><Input id="es-fmv" inputMode="decimal" value={fmvExercise} onChange={(e) => setFmvExercise(num(e.target.value))} /></FormField>
          <FormField label="Your marginal tax rate (%)" htmlFor="es-slab">
            <Select id="es-slab" value={salarySlab} onChange={(e) => setSalarySlab(num(e.target.value))}>
              {[5, 10, 15, 20, 30, 39].map((r) => <option key={r} value={r}>{r}%</option>)}
            </Select>
          </FormField>
          <FormField label="Sale price per share (₹)" htmlFor="es-sale"><Input id="es-sale" inputMode="decimal" value={salePrice} onChange={(e) => setSalePrice(num(e.target.value))} /></FormField>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 text-sm text-ink-700"><input type="checkbox" checked={listed} onChange={(e) => setListed(e.target.checked)} className="accent-navy-900" /> Listed at sale</label>
            <label className="flex items-center gap-2 text-sm text-ink-700"><input type="checkbox" checked={longTerm} onChange={(e) => setLongTerm(e.target.checked)} className="accent-navy-900" /> Long-term</label>
          </div>
        </>
      }
      result={
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Stage 1 — at exercise (perquisite)</p>
          <ResultLine label="Perquisite (FMV − exercise) × qty" value={formatINR(res.perquisite)} />
          <ResultLine label="Tax as salary" value={formatINR(res.perqTax)} />
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink-500">Stage 2 — at sale (capital gains)</p>
          <ResultLine label="Capital gain" value={formatINR(res.gain)} />
          <ResultLine label={`Rate (${res.cgRate}%)`} value={formatINR(res.cgTax)} />
          <ResultLine label="Total tax (both stages)" value={formatINR(res.total)} accent />
          <p className="mt-2 text-xs text-ink-500">Eligible startup employees may defer the Stage-1 tax. Surcharge & cess extra.</p>
        </div>
      }
      howItWorks={
        <p>
          ESOPs are taxed twice. At exercise, the perquisite (FMV at exercise − exercise price) × quantity is
          taxed as salary at your marginal rate. At sale, the gain (sale price − FMV at exercise) × quantity is
          a capital gain — 12.5% for listed LTCG (over ₹1.25L) or 20% STCG; unlisted shares use 12.5% LTCG and
          slab-rate STCG. DPIIT-recognised startups can defer the perquisite tax.
        </p>
      }
    />
  );
}

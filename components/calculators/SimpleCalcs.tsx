"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, ResultLine } from "./CalculatorShell";
import { FormField, Input, Select } from "@/components/ui/Field";
import { formatINR } from "@/lib/utils";
import { tdsCalcOptions } from "@/content/rates/tds";
import { gstRates } from "@/content/rates/gst";

const num = (v: string | number) => {
  const n = Number(String(v ?? "").replace(/,/g, ""));
  return isNaN(n) ? 0 : n;
};

/* ─── TDS ─────────────────────────────────────────────────────────────── */
export function TdsCalc() {
  const [opt, setOpt] = useState(tdsCalcOptions[1].key);
  const [amount, setAmount] = useState(100000);
  const [hasPan, setHasPan] = useState(true);
  const sel = tdsCalcOptions.find((o) => o.key === opt)!;
  const rate = hasPan ? sel.rate : Math.max(sel.rate, 20);
  const tds = Math.round((amount * rate) / 100);

  return (
    <CalculatorShell
      ctaPractice="direct-tax"
      inputs={
        <>
          <FormField label="Nature of payment (section)" htmlFor="tds-sec">
            <Select id="tds-sec" value={opt} onChange={(e) => setOpt(e.target.value)}>
              {tdsCalcOptions.map((o) => <option key={o.key} value={o.key}>{o.label}</option>)}
            </Select>
          </FormField>
          <FormField label="Payment amount (₹)" htmlFor="tds-amt">
            <Input id="tds-amt" inputMode="numeric" value={amount} onChange={(e) => setAmount(num(e.target.value))} />
          </FormField>
          <label className="flex items-center gap-2 text-sm text-ink-700">
            <input type="checkbox" checked={hasPan} onChange={(e) => setHasPan(e.target.checked)} className="accent-navy-900" />
            Payee has provided PAN
          </label>
        </>
      }
      result={
        <div>
          <ResultLine label="Applicable rate" value={`${rate}%`} />
          <ResultLine label="TDS to deduct" value={formatINR(tds)} accent />
          <ResultLine label="Net payable" value={formatINR(amount - tds)} />
          {!hasPan && <p className="mt-2 text-xs text-error">Without PAN, section 206AA applies a minimum 20%.</p>}
          {sel.note && <p className="mt-2 text-xs text-ink-500">{sel.note}</p>}
        </div>
      }
      howItWorks={<p>TDS = payment × applicable rate for the selected section. Thresholds and special rates apply; without PAN, section 206AA mandates a minimum 20%.</p>}
    />
  );
}

/* ─── GST add ─────────────────────────────────────────────────────────── */
export function GstRateCalc() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(18);
  const [inter, setInter] = useState(false);
  const gst = (amount * rate) / 100;
  const total = amount + gst;

  return (
    <CalculatorShell
      ctaPractice="indirect-tax-gst"
      inputs={
        <>
          <FormField label="Taxable amount (₹)" htmlFor="g-amt">
            <Input id="g-amt" inputMode="numeric" value={amount} onChange={(e) => setAmount(num(e.target.value))} />
          </FormField>
          <FormField label="GST rate (%)" htmlFor="g-rate">
            <Select id="g-rate" value={rate} onChange={(e) => setRate(num(e.target.value))}>
              {gstRates.map((r) => <option key={r} value={r}>{r}%</option>)}
            </Select>
          </FormField>
          <label className="flex items-center gap-2 text-sm text-ink-700">
            <input type="checkbox" checked={inter} onChange={(e) => setInter(e.target.checked)} className="accent-navy-900" />
            Inter-state supply (IGST)
          </label>
        </>
      }
      result={
        <div>
          {inter ? (
            <ResultLine label={`IGST @ ${rate}%`} value={formatINR(gst)} />
          ) : (
            <>
              <ResultLine label={`CGST @ ${rate / 2}%`} value={formatINR(gst / 2)} />
              <ResultLine label={`SGST @ ${rate / 2}%`} value={formatINR(gst / 2)} />
            </>
          )}
          <ResultLine label="Total GST" value={formatINR(gst)} />
          <ResultLine label="Invoice total" value={formatINR(total)} accent />
        </div>
      }
      howItWorks={<p>GST = amount × rate. For intra-state supplies it splits equally into CGST and SGST; inter-state supplies attract IGST at the full rate.</p>}
    />
  );
}

/* ─── Reverse GST from MRP ────────────────────────────────────────────── */
export function GstMrpCalc() {
  const [mrp, setMrp] = useState(1180);
  const [rate, setRate] = useState(18);
  const base = mrp / (1 + rate / 100);
  const gst = mrp - base;

  return (
    <CalculatorShell
      ctaPractice="indirect-tax-gst"
      inputs={
        <>
          <FormField label="MRP / inclusive price (₹)" htmlFor="m-mrp">
            <Input id="m-mrp" inputMode="numeric" value={mrp} onChange={(e) => setMrp(num(e.target.value))} />
          </FormField>
          <FormField label="GST rate (%)" htmlFor="m-rate">
            <Select id="m-rate" value={rate} onChange={(e) => setRate(num(e.target.value))}>
              {gstRates.map((r) => <option key={r} value={r}>{r}%</option>)}
            </Select>
          </FormField>
        </>
      }
      result={
        <div>
          <ResultLine label="Base price" value={formatINR(base, { paise: true })} accent />
          <ResultLine label="GST component" value={formatINR(gst, { paise: true })} />
          <ResultLine label={`CGST / SGST (each)`} value={formatINR(gst / 2, { paise: true })} />
        </div>
      }
      howItWorks={<p>Base = MRP ÷ (1 + rate). The GST component is the difference, split equally into CGST and SGST for intra-state supplies.</p>}
    />
  );
}

/* ─── HRA exemption ───────────────────────────────────────────────────── */
export function HraCalc() {
  const [basic, setBasic] = useState(600000);
  const [da, setDa] = useState(0);
  const [hra, setHra] = useState(300000);
  const [rent, setRent] = useState(240000);
  const [metro, setMetro] = useState(true);

  const salary = basic + da;
  const opt1 = hra;
  const opt2 = metro ? 0.5 * salary : 0.4 * salary;
  const opt3 = Math.max(0, rent - 0.1 * salary);
  const exemption = Math.max(0, Math.min(opt1, opt2, opt3));
  const taxable = Math.max(0, hra - exemption);

  return (
    <CalculatorShell
      ctaPractice="direct-tax"
      inputs={
        <>
          <FormField label="Basic salary (annual ₹)" htmlFor="h-basic"><Input id="h-basic" inputMode="numeric" value={basic} onChange={(e) => setBasic(num(e.target.value))} /></FormField>
          <FormField label="DA forming part of salary (₹)" htmlFor="h-da"><Input id="h-da" inputMode="numeric" value={da} onChange={(e) => setDa(num(e.target.value))} /></FormField>
          <FormField label="HRA received (₹)" htmlFor="h-hra"><Input id="h-hra" inputMode="numeric" value={hra} onChange={(e) => setHra(num(e.target.value))} /></FormField>
          <FormField label="Rent paid (annual ₹)" htmlFor="h-rent"><Input id="h-rent" inputMode="numeric" value={rent} onChange={(e) => setRent(num(e.target.value))} /></FormField>
          <label className="flex items-center gap-2 text-sm text-ink-700">
            <input type="checkbox" checked={metro} onChange={(e) => setMetro(e.target.checked)} className="accent-navy-900" /> Metro city (50%)
          </label>
        </>
      }
      result={
        <div>
          <ResultLine label="HRA actually received" value={formatINR(opt1)} />
          <ResultLine label={`${metro ? "50%" : "40%"} of salary`} value={formatINR(opt2)} />
          <ResultLine label="Rent − 10% of salary" value={formatINR(opt3)} />
          <ResultLine label="Exemption (least of three)" value={formatINR(exemption)} accent />
          <ResultLine label="Taxable HRA" value={formatINR(taxable)} />
        </div>
      }
      howItWorks={<p>Section 10(13A): the exemption is the least of (i) HRA received, (ii) 50% of salary in metro (40% non-metro), and (iii) rent paid minus 10% of salary. Salary = basic + DA forming part of retirement benefits.</p>}
    />
  );
}

/* ─── EMI ─────────────────────────────────────────────────────────────── */
export function EmiCalc() {
  const [principal, setPrincipal] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const { emi, totalInterest, total } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    const emi = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emi * n;
    return { emi: Math.round(emi), totalInterest: Math.round(total - principal), total: Math.round(total) };
  }, [principal, rate, years]);

  return (
    <CalculatorShell
      ctaPractice="consulting-cfo"
      inputs={
        <>
          <FormField label="Loan amount (₹)" htmlFor="e-p"><Input id="e-p" inputMode="numeric" value={principal} onChange={(e) => setPrincipal(num(e.target.value))} /></FormField>
          <FormField label="Interest rate (% p.a.)" htmlFor="e-r"><Input id="e-r" inputMode="decimal" value={rate} onChange={(e) => setRate(num(e.target.value))} /></FormField>
          <FormField label="Tenure (years)" htmlFor="e-y"><Input id="e-y" inputMode="numeric" value={years} onChange={(e) => setYears(num(e.target.value))} /></FormField>
        </>
      }
      result={
        <div>
          <ResultLine label="Monthly EMI" value={formatINR(emi)} accent />
          <ResultLine label="Total interest" value={formatINR(totalInterest)} />
          <ResultLine label="Total payment" value={formatINR(total)} />
          <div className="mt-3 flex h-3 overflow-hidden rounded-full">
            <div className="bg-navy-900" style={{ width: `${(principal / total) * 100}%` }} title="Principal" />
            <div className="bg-brass-500" style={{ width: `${(totalInterest / total) * 100}%` }} title="Interest" />
          </div>
          <p className="mt-1 text-xs text-ink-500">Navy = principal · brass = interest</p>
        </div>
      }
      howItWorks={<p>EMI = P·r·(1+r)ⁿ / ((1+r)ⁿ − 1), where r is the monthly rate and n the number of months. Total interest = EMI × n − principal.</p>}
    />
  );
}

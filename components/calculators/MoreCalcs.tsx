"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, ResultLine } from "./CalculatorShell";
import { FormField, Input, Select } from "@/components/ui/Field";
import { formatINR } from "@/lib/utils";

const num = (v: string | number) => {
  const n = Number(String(v ?? "").replace(/,/g, ""));
  return isNaN(n) ? 0 : n;
};
const pct = (n: number) => `${(Math.round(n * 100) / 100).toFixed(2)}%`;

/* ─── Net Worth ───────────────────────────────────────────────────────── */
export function NetWorthCalc() {
  const [cash, setCash] = useState(500000);
  const [investments, setInvestments] = useState(2000000);
  const [property, setProperty] = useState(8000000);
  const [otherAssets, setOtherAssets] = useState(300000);
  const [homeLoan, setHomeLoan] = useState(4000000);
  const [otherLiab, setOtherLiab] = useState(200000);

  const assets = cash + investments + property + otherAssets;
  const liabilities = homeLoan + otherLiab;
  const netWorth = assets - liabilities;

  return (
    <CalculatorShell
      ctaPractice="family-office-wealth"
      inputs={
        <>
          <FormField label="Cash & bank balances (₹)" htmlFor="nw-cash"><Input id="nw-cash" inputMode="numeric" value={cash} onChange={(e) => setCash(num(e.target.value))} /></FormField>
          <FormField label="Investments — equity, MF, deposits (₹)" htmlFor="nw-inv"><Input id="nw-inv" inputMode="numeric" value={investments} onChange={(e) => setInvestments(num(e.target.value))} /></FormField>
          <FormField label="Real estate & property (₹)" htmlFor="nw-prop"><Input id="nw-prop" inputMode="numeric" value={property} onChange={(e) => setProperty(num(e.target.value))} /></FormField>
          <FormField label="Other assets (₹)" htmlFor="nw-oth"><Input id="nw-oth" inputMode="numeric" value={otherAssets} onChange={(e) => setOtherAssets(num(e.target.value))} /></FormField>
          <FormField label="Home / property loans outstanding (₹)" htmlFor="nw-hl"><Input id="nw-hl" inputMode="numeric" value={homeLoan} onChange={(e) => setHomeLoan(num(e.target.value))} /></FormField>
          <FormField label="Other liabilities (₹)" htmlFor="nw-ol"><Input id="nw-ol" inputMode="numeric" value={otherLiab} onChange={(e) => setOtherLiab(num(e.target.value))} /></FormField>
        </>
      }
      result={
        <div>
          <ResultLine label="Total assets" value={formatINR(assets)} />
          <ResultLine label="Total liabilities" value={formatINR(liabilities)} />
          <ResultLine label="Net worth" value={formatINR(netWorth)} accent />
        </div>
      }
      howItWorks={<p>Net worth = total assets − total liabilities. Value assets at current realistic market value, and include all outstanding loans and dues as liabilities.</p>}
    />
  );
}

/* ─── Net Profit ──────────────────────────────────────────────────────── */
export function NetProfitCalc() {
  const [revenue, setRevenue] = useState(10000000);
  const [cogs, setCogs] = useState(5500000);
  const [opex, setOpex] = useState(2500000);
  const [interest, setInterest] = useState(400000);
  const [tax, setTax] = useState(420000);

  const gross = revenue - cogs;
  const operating = gross - opex;
  const pbt = operating - interest;
  const net = pbt - tax;
  const margin = revenue > 0 ? (net / revenue) * 100 : 0;

  return (
    <CalculatorShell
      ctaPractice="consulting-cfo"
      inputs={
        <>
          <FormField label="Revenue / turnover (₹)" htmlFor="np-rev"><Input id="np-rev" inputMode="numeric" value={revenue} onChange={(e) => setRevenue(num(e.target.value))} /></FormField>
          <FormField label="Cost of goods sold (₹)" htmlFor="np-cogs"><Input id="np-cogs" inputMode="numeric" value={cogs} onChange={(e) => setCogs(num(e.target.value))} /></FormField>
          <FormField label="Operating expenses (₹)" htmlFor="np-opex"><Input id="np-opex" inputMode="numeric" value={opex} onChange={(e) => setOpex(num(e.target.value))} /></FormField>
          <FormField label="Interest / finance cost (₹)" htmlFor="np-int"><Input id="np-int" inputMode="numeric" value={interest} onChange={(e) => setInterest(num(e.target.value))} /></FormField>
          <FormField label="Tax (₹)" htmlFor="np-tax"><Input id="np-tax" inputMode="numeric" value={tax} onChange={(e) => setTax(num(e.target.value))} /></FormField>
        </>
      }
      result={
        <div>
          <ResultLine label="Gross profit" value={formatINR(gross)} />
          <ResultLine label="Operating profit (EBIT)" value={formatINR(operating)} />
          <ResultLine label="Profit before tax" value={formatINR(pbt)} />
          <ResultLine label="Net profit" value={formatINR(net)} accent />
          <ResultLine label="Net profit margin" value={pct(margin)} />
        </div>
      }
      howItWorks={<p>Gross profit = revenue − COGS. Operating profit = gross − operating expenses. Net profit = operating profit − interest − tax. Margin = net profit ÷ revenue.</p>}
    />
  );
}

/* ─── NSC (National Savings Certificate) ──────────────────────────────── */
export function NscCalc() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7.7);
  const [years, setYears] = useState(5);

  const maturity = principal * Math.pow(1 + rate / 100, years);
  const interest = maturity - principal;

  return (
    <CalculatorShell
      ctaPractice="direct-tax"
      inputs={
        <>
          <FormField label="Investment amount (₹)" htmlFor="nsc-p"><Input id="nsc-p" inputMode="numeric" value={principal} onChange={(e) => setPrincipal(num(e.target.value))} /></FormField>
          <FormField label="Interest rate (% p.a., compounded annually)" htmlFor="nsc-r"><Input id="nsc-r" inputMode="decimal" value={rate} onChange={(e) => setRate(num(e.target.value))} /></FormField>
          <FormField label="Tenure (years)" htmlFor="nsc-y"><Input id="nsc-y" inputMode="numeric" value={years} onChange={(e) => setYears(num(e.target.value))} /></FormField>
        </>
      }
      result={
        <div>
          <ResultLine label="Total interest earned" value={formatINR(interest)} />
          <ResultLine label="Maturity value" value={formatINR(maturity)} accent />
          <p className="mt-2 text-xs text-ink-500">NSC interest is compounded annually and currently 7.7% (Q-rate, verify the prevailing rate). Standard tenure is 5 years.</p>
        </div>
      }
      howItWorks={<p>Maturity = principal × (1 + rate)ⁿ, compounded annually over n years. The accrued interest each year (except the last) is deemed reinvested and is eligible for deduction under section 80C.</p>}
    />
  );
}

/* ─── CFO-as-a-Service ROI ────────────────────────────────────────────── */
export function CfoRoiCalc() {
  const [fee, setFee] = useState(1200000);
  const [inhouse, setInhouse] = useState(3600000);
  const [value, setValue] = useState(2500000);

  const saving = inhouse - fee;
  const roi = fee > 0 ? ((value + saving - fee) / fee) * 100 : 0;
  const netBenefit = value + saving - fee;

  return (
    <CalculatorShell
      ctaPractice="consulting-cfo"
      inputs={
        <>
          <FormField label="Fractional CFO annual fee (₹)" htmlFor="cfo-fee"><Input id="cfo-fee" inputMode="numeric" value={fee} onChange={(e) => setFee(num(e.target.value))} /></FormField>
          <FormField label="Full-time CFO annual cost — CTC + on-costs (₹)" htmlFor="cfo-ih"><Input id="cfo-ih" inputMode="numeric" value={inhouse} onChange={(e) => setInhouse(num(e.target.value))} /></FormField>
          <FormField label="Estimated annual value delivered — savings, funding, decisions (₹)" htmlFor="cfo-val"><Input id="cfo-val" inputMode="numeric" value={value} onChange={(e) => setValue(num(e.target.value))} /></FormField>
        </>
      }
      result={
        <div>
          <ResultLine label="Saving vs a full-time CFO" value={formatINR(saving)} />
          <ResultLine label="Net annual benefit" value={formatINR(netBenefit)} />
          <ResultLine label="Return on fee (ROI)" value={pct(roi)} accent />
          <p className="mt-2 text-xs text-ink-500">Indicative. ROI = (value delivered + cost saving − fee) ÷ fee.</p>
        </div>
      }
      howItWorks={<p>Compares a fractional CFO engagement against a full-time hire. Net benefit = estimated value delivered + saving versus a full-time CFO − the fractional fee; ROI expresses that against the fee.</p>}
    />
  );
}

/* ─── GST Refund Estimator (exporters, Rule 89(4)) ────────────────────── */
export function GstRefundCalc() {
  const [zeroRated, setZeroRated] = useState(8000000);
  const [totalTurnover, setTotalTurnover] = useState(10000000);
  const [netItc, setNetItc] = useState(900000);

  const refund = totalTurnover > 0 ? (zeroRated * netItc) / totalTurnover : 0;

  return (
    <CalculatorShell
      ctaPractice="indirect-tax-gst"
      inputs={
        <>
          <FormField label="Turnover of zero-rated supply — exports/SEZ (₹)" htmlFor="gr-zr"><Input id="gr-zr" inputMode="numeric" value={zeroRated} onChange={(e) => setZeroRated(num(e.target.value))} /></FormField>
          <FormField label="Adjusted total turnover (₹)" htmlFor="gr-tt"><Input id="gr-tt" inputMode="numeric" value={totalTurnover} onChange={(e) => setTotalTurnover(num(e.target.value))} /></FormField>
          <FormField label="Net ITC for the period (₹)" htmlFor="gr-itc"><Input id="gr-itc" inputMode="numeric" value={netItc} onChange={(e) => setNetItc(num(e.target.value))} /></FormField>
        </>
      }
      result={
        <div>
          <ResultLine label="Maximum refund (LUT / without payment of tax)" value={formatINR(refund)} accent />
          <p className="mt-2 text-xs text-ink-500">Rule 89(4): Refund = (Zero-rated turnover × Net ITC) ÷ Adjusted total turnover. Indicative only.</p>
        </div>
      }
      howItWorks={<p>For exports made without payment of tax under an LUT, the refund of unutilised ITC is capped by the formula in Rule 89(4): (turnover of zero-rated supply × net ITC) ÷ adjusted total turnover.</p>}
    />
  );
}

/* ─── RERA Delay-Possession Interest ──────────────────────────────────── */
export function ReraCalc() {
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(10.85);
  const [months, setMonths] = useState(12);

  const interest = (amount * rate * months) / (100 * 12);

  return (
    <CalculatorShell
      ctaPractice="real-estate-infra"
      inputs={
        <>
          <FormField label="Amount paid to the developer (₹)" htmlFor="rr-amt"><Input id="rr-amt" inputMode="numeric" value={amount} onChange={(e) => setAmount(num(e.target.value))} /></FormField>
          <FormField label="Interest rate (% p.a.)" htmlFor="rr-rate"><Input id="rr-rate" inputMode="decimal" value={rate} onChange={(e) => setRate(num(e.target.value))} /></FormField>
          <FormField label="Period of delay (months)" htmlFor="rr-m"><Input id="rr-m" inputMode="numeric" value={months} onChange={(e) => setMonths(num(e.target.value))} /></FormField>
        </>
      }
      result={
        <div>
          <ResultLine label="Delay interest payable" value={formatINR(interest)} accent />
          <ResultLine label="Total (amount + interest)" value={formatINR(amount + interest)} />
          <p className="mt-2 text-xs text-ink-500">Most RERA authorities prescribe SBI highest MCLR + 2% p.a. Confirm the prevailing rate and computation basis.</p>
        </div>
      }
      howItWorks={<p>Delay-possession interest is generally computed as amount paid × prescribed rate × period of delay. The prescribed rate is typically the State Bank of India highest marginal cost of lending rate plus 2%.</p>}
    />
  );
}

/* ─── AIF Waterfall / carry (European, whole-fund) ────────────────────── */
export function AifWaterfallCalc() {
  const [capital, setCapital] = useState(100000000);
  const [proceeds, setProceeds] = useState(180000000);
  const [hurdle, setHurdle] = useState(8);
  const [carry, setCarry] = useState(20);
  const [catchUp, setCatchUp] = useState("full");

  const result = useMemo(() => {
    const profit = Math.max(0, proceeds - capital);
    const pref = (capital * hurdle) / 100;
    const c = carry / 100;
    let gpCarry = 0;
    if (profit <= pref) {
      gpCarry = 0;
    } else {
      const afterPref = profit - pref;
      if (catchUp === "full" && c < 1) {
        const catchUpTarget = (pref * c) / (1 - c);
        const catchUpAmt = Math.min(afterPref, catchUpTarget);
        const remaining = afterPref - catchUpAmt;
        gpCarry = catchUpAmt + remaining * c;
      } else {
        gpCarry = afterPref * c;
      }
    }
    const lp = proceeds - gpCarry;
    const effCarry = profit > 0 ? (gpCarry / profit) * 100 : 0;
    return { profit, pref, gpCarry, lp, effCarry };
  }, [capital, proceeds, hurdle, carry, catchUp]);

  return (
    <CalculatorShell
      ctaPractice="aif-funds"
      inputs={
        <>
          <FormField label="Capital contributed by LPs (₹)" htmlFor="aif-cap"><Input id="aif-cap" inputMode="numeric" value={capital} onChange={(e) => setCapital(num(e.target.value))} /></FormField>
          <FormField label="Total proceeds at exit (₹)" htmlFor="aif-pro"><Input id="aif-pro" inputMode="numeric" value={proceeds} onChange={(e) => setProceeds(num(e.target.value))} /></FormField>
          <FormField label="Preferred return / hurdle (%)" htmlFor="aif-h"><Input id="aif-h" inputMode="decimal" value={hurdle} onChange={(e) => setHurdle(num(e.target.value))} /></FormField>
          <FormField label="Carried interest (%)" htmlFor="aif-c"><Input id="aif-c" inputMode="decimal" value={carry} onChange={(e) => setCarry(num(e.target.value))} /></FormField>
          <FormField label="GP catch-up" htmlFor="aif-cu">
            <Select id="aif-cu" value={catchUp} onChange={(e) => setCatchUp(e.target.value)}>
              <option value="full">Full catch-up</option>
              <option value="none">No catch-up</option>
            </Select>
          </FormField>
        </>
      }
      result={
        <div>
          <ResultLine label="Total profit" value={formatINR(result.profit)} />
          <ResultLine label="Preferred return to LPs" value={formatINR(result.pref)} />
          <ResultLine label="GP carried interest" value={formatINR(result.gpCarry)} accent />
          <ResultLine label="Total to LPs" value={formatINR(result.lp)} />
          <ResultLine label="Effective carry on profit" value={pct(result.effCarry)} />
          <p className="mt-2 text-xs text-ink-500">Simplified European (whole-fund) waterfall. Real PPM terms — multiple-tier hurdles, clawback, fees — will differ.</p>
        </div>
      }
      howItWorks={<p>LPs first receive their capital and a preferred return (hurdle). With a full catch-up, the GP then receives distributions until it holds the carry % of profit; the remainder is split carry %/balance. Models a single whole-fund tier.</p>}
    />
  );
}

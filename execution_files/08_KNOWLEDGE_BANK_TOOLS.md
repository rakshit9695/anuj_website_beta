# 08 — KNOWLEDGE BANK (CALCULATORS · UTILITIES · REPOSITORIES)

> Free tools and reference data — a major SEO magnet and lead-gen surface. Calculators are **client-side React** using the shared "Calculator shell" (`01 §5`). Use **correct, current Indian logic (FY 2025-26 / AY 2026-27)** and always show an indicative-only disclaimer + a "Talk to ADA" CTA. Rates that change must live in editable data files (so the firm updates a file, not code). Mark anything you cannot verify as `status:'stub'` with a visible "rates to be confirmed" note rather than shipping wrong numbers.

---

## 1. KNOWLEDGE BANK HUB — `/knowledge-bank`
Landing with sections: Calculators · Rates & Utilities · Important Dates (compliance calendar) · Acts · Rules · Forms · Bulletins · Quick Links. Each as a card grid linking onward. Eyebrow "FREE TOOLS & RESOURCES". Search across tools/utilities.

---

## 2. CALCULATORS — `/knowledge-bank/calculators` (+ `/[slug]`)
Registry (`CalculatorMeta[]`) drives the index. Build these (MUST-HAVE first):

### MUST-HAVE — full working logic
- **`income-tax`** — Income Tax Calculator, **Old vs New Regime (FY 2025-26)**. Inputs: residential status, age band, income heads (salary, house property, capital gains buckets, other), deductions (80C/80D/HRA/24b/NPS etc. for old regime; standard deduction for both), regime toggle/compare. Output: tax under each regime side-by-side, surcharge + cess, marginal relief, effective rate, "recommended regime". Use editable slab data files for both regimes. Tabular result panel + a small bar chart comparing regimes.
- **`tds`** — TDS Calculator, **section-wise** (192/194C/194J/194I/194H/194Q/195 etc.). Inputs: nature of payment (section), payee type (resident/non-resident, with/without PAN), amount, threshold check. Output: applicable rate, TDS amount, net payable, threshold note. Rates in editable data.
- **`gst-rate`** — GST Rate Calculator (HSN/SAC-based add GST). Inputs: amount, GST rate (or HSN/SAC lookup from a small dataset), intra/inter-state. Output: CGST/SGST or IGST split, total. 
- **`gst-mrp`** — Reverse GST from MRP. Inputs: MRP (inclusive), rate. Output: base price, GST component, split.
- **`hra`** — HRA Exemption Calculator (Section 10(13A)). Inputs: basic, DA(forming part), HRA received, rent paid, metro/non-metro. Output: exemption (least-of-three), taxable HRA, working shown.
- **`capital-gains`** — Capital Gains (Shares / Property / Mutual Funds), STCG & LTCG. Inputs: asset type, purchase/sale dates + values, expenses, indexation where applicable (CII data file), exemptions (54/54F/54EC). Output: holding period classification, gain, applicable rate (incl. 111A/112A specifics), tax. Honour current rules; flag rate assumptions clearly.
- **`esop`** — ESOP Taxation Calculator. Two stages: (1) perquisite at exercise (FMV − exercise price) taxed as salary; (2) capital gains at sale (sale − FMV at exercise), with holding-period rate. Inputs across grant/vest/exercise/sale. Output: tax at each stage + total. Strong lead magnet — link from Direct Tax + Startup hubs.
- **`emi`** — EMI Calculator (Home/Auto/Personal). Inputs: principal, rate, tenure. Output: EMI, total interest, total payment, amortization table + chart.

### SHOULD-HAVE
- **`net-worth`**, **`net-profit`**, **`rera`** (delay interest/refund), **`aif-waterfall`** (hurdle, carry/IRR for fund managers — gated lead magnet for AIF hub), **`cfo-roi`** (CFO-as-a-service ROI), **`gst-refund-estimator`** (exporters).

**Calculator shell requirements:** title + short intro; input column with labelled, validated fields (Zod), live recalculation; large tabular result panel; "How this is calculated" expandable note; **indicative-only disclaimer**; "Talk to ADA about this" CTA; optional "email me this result" (provider stub); shareable. Mobile: inputs stack above result. Each calculator page has its own SEO meta + `BreadcrumbList` (and `SoftwareApplication`/`HowTo` optional) JSON-LD, and links to the related practice/service.

---

## 3. RATES & UTILITIES — `/knowledge-bank/rates` (+ `/[slug]`)
Reference tables, downloadable PDF where useful, all from editable data files. Build:
- **TDS Rate Chart** (current year) + **TDS for NRI u/s 195** (section-wise).
- **Income Tax Rate Chart** (all categories, both regimes).
- **Cost Inflation Index (CII)** — all years (also consumed by the capital-gains calculator).
- **HSN / SAC GST Rate List** (searchable).
- **Depreciation Rates** — Companies Act 2013 & Income Tax Act.
- **ROC Filing Fees & Late-Filing Penalty** chart.
- **LLP Fee Structure**, **Stamp Duty (state-wise)**.
- (Optional) IFSC/MICR search, Gold/Silver historical rates.
Each: clean responsive table (horizontal scroll on mobile, sticky header), search/filter, "last updated" date, download.

---

## 4. ACTS · RULES · FORMS — `/knowledge-bank/{acts,rules,forms}`
- **Acts repository**: Income Tax, Companies Act 2013, CGST, FEMA, IBC, SEBI, LLP Act, etc. — browsable list; link out to official source or host reference (placeholder). Section-search optional.
- **Rules repository**: CGST Rules, Income Tax Rules, Companies Rules 2014, LLP Rules, etc.
- **Forms library**: IT / GST / ROC / LLP / FEMA / SEBI forms — categorized, searchable, **downloadable** (placeholder/official links). Forms cross-link from relevant service pages.
- Data-driven (a `repository.ts` of {category, name, type, link}). Search + category filter.

---

## 5. BULLETINS — `/knowledge-bank/bulletins`
- Category-wise regulatory bulletin board: **RBI/SEBI · GST · Income Tax · FEMA · IBC · Labour**. In production this is auto-updated (the blueprint references a Webtel-style feed). For the build: a data-driven, category-filtered list that the firm can populate/automate later; wire it so a single data source (or future API) feeds it. Color-code by category. Advanced search (keyword/date/category) over the entries.

---

## 6. IMPORTANT DATES / COMPLIANCE CALENDAR — `/knowledge-bank/important-dates`
- Full compliance due-date calendar (GST returns, TDS, advance tax, ROC, PF/ESI, etc.) from an editable data file: list + monthly calendar view, filter by category, "add to calendar" (.ics) per item.
- Feeds the **homepage "Important Dates" ticker** (`04`). One source of truth.

## 7. QUICK LINKS — `/knowledge-bank/quick-links`
- Curated outbound links: CBDT, MCA21, GSTN, RBI, SEBI, IRDAI, IBBI, DPIIT, Income-tax e-filing, ICEGATE, EPFO, etc. Grouped, with logos/labels. Plus GST/VAT department links. Data-driven.

---

## 8. SHARED
- Tables, calculator shell, search, and "last updated" badges are reusable.
- **Editable-data principle:** every rate/slab/date/link lives in a data file with a clear comment for the firm to maintain; calculators import from the same files so a rate change updates both the chart and the calculator.
- Add `CLIENT_TODO` entries for any rates/links/forms needing verification, and `status:'stub'` for tools whose logic the firm must confirm.
- Cross-link Knowledge Bank tools from the relevant service/industry pages (`05`).

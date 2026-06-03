/** Depreciation rates (Income-tax Act, WDV %) — indicative. EDITABLE. */
export const depreciationIT = [
  { asset: "Buildings (residential)", rate: 5 },
  { asset: "Buildings (other than residential)", rate: 10 },
  { asset: "Furniture & fittings", rate: 10 },
  { asset: "Plant & machinery (general)", rate: 15 },
  { asset: "Motor cars", rate: 15 },
  { asset: "Computers & software", rate: 40 },
  { asset: "Intangible assets", rate: 25 },
  { asset: "Books (annual publications)", rate: 40 },
];

/** Companies Act 2013 useful lives (Schedule II) — indicative. */
export const usefulLivesCompaniesAct = [
  { asset: "Buildings (RCC)", life: "60 years" },
  { asset: "Plant & machinery (general)", life: "15 years" },
  { asset: "Furniture & fittings", life: "10 years" },
  { asset: "Office equipment", life: "5 years" },
  { asset: "Computers (end-user devices)", life: "3 years" },
  { asset: "Computers (servers/networks)", life: "6 years" },
  { asset: "Motor vehicles", life: "8 years" },
];

/** ROC filing & late-fee structure — indicative. EDITABLE. */
export const rocFees = [
  { form: "AOC-4 / MGT-7", item: "Normal fee (capital-based)", value: "₹200–₹600" },
  { form: "Late filing", item: "Additional fee per day of delay", value: "₹100 / day" },
  { form: "DIR-3 KYC", item: "After due date", value: "₹5,000" },
  { form: "Strike-off (STK-2)", item: "Government fee", value: "₹10,000" },
];

/** LLP fee structure — indicative. */
export const llpFees = [
  { item: "Incorporation (contribution up to ₹1 lakh)", value: "₹500" },
  { item: "Form 11 (Annual Return)", value: "₹50" },
  { item: "Form 8 (Statement of Account & Solvency)", value: "₹50" },
  { item: "Late filing additional fee", value: "₹100 / day" },
];

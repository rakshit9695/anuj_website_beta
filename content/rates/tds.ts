/**
 * TDS rate card FY 2025-26 (resident, with PAN). EDITABLE. Without PAN, TDS is
 * generally 20% (or the rate in force, whichever higher) under section 206AA.
 * Verify against the latest provisions before relying on these.
 */
export interface TdsSection {
  section: string;
  nature: string;
  threshold: string;
  rateResident: number; // %
  note?: string;
}

export const tdsSections: TdsSection[] = [
  { section: "192", nature: "Salary", threshold: "As per slab", rateResident: 0, note: "At average rate of tax on estimated salary." },
  { section: "194A", nature: "Interest (other than securities)", threshold: "₹40,000 (₹50,000 senior; ₹5,000 others)", rateResident: 10 },
  { section: "194C", nature: "Payment to contractors", threshold: "₹30,000 single / ₹1,00,000 aggregate", rateResident: 1, note: "1% individual/HUF, 2% others." },
  { section: "194H", nature: "Commission or brokerage", threshold: "₹20,000", rateResident: 2 },
  { section: "194I", nature: "Rent — plant & machinery", threshold: "₹2,40,000", rateResident: 2 },
  { section: "194I", nature: "Rent — land/building/furniture", threshold: "₹2,40,000", rateResident: 10 },
  { section: "194J", nature: "Professional / technical fees", threshold: "₹30,000", rateResident: 10, note: "2% for technical services / call centres." },
  { section: "194Q", nature: "Purchase of goods", threshold: "₹50,00,000", rateResident: 0.1 },
  { section: "194O", nature: "E-commerce participant", threshold: "₹5,00,000 (individual/HUF)", rateResident: 0.1 },
  { section: "194", nature: "Dividend", threshold: "₹5,000", rateResident: 10 },
  { section: "194IA", nature: "Transfer of immovable property", threshold: "₹50,00,000", rateResident: 1 },
];

/** Section-wise options for the TDS calculator. */
export const tdsCalcOptions = tdsSections.map((t) => ({
  key: `${t.section}-${t.nature}`,
  label: `${t.section} — ${t.nature}`,
  rate: t.rateResident,
  note: t.note,
}));

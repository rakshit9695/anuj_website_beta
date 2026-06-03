/** GST rate slabs and a small HSN/SAC sample dataset. EDITABLE. */
export const gstRates = [0, 0.25, 3, 5, 12, 18, 28];

export interface HsnItem {
  code: string;
  description: string;
  rate: number; // %
  type: "HSN" | "SAC";
}

/** Indicative sample — the firm can extend this list. */
export const hsnSample: HsnItem[] = [
  { code: "1006", description: "Rice (branded)", rate: 5, type: "HSN" },
  { code: "0401", description: "Milk & cream", rate: 0, type: "HSN" },
  { code: "3004", description: "Medicaments", rate: 12, type: "HSN" },
  { code: "6403", description: "Footwear (above ₹1,000)", rate: 18, type: "HSN" },
  { code: "8517", description: "Telephones / smartphones", rate: 18, type: "HSN" },
  { code: "8703", description: "Motor cars", rate: 28, type: "HSN" },
  { code: "2106", description: "Food preparations (aerated)", rate: 28, type: "HSN" },
  { code: "9954", description: "Construction services", rate: 18, type: "SAC" },
  { code: "9971", description: "Financial services", rate: 18, type: "SAC" },
  { code: "9983", description: "Professional / technical services", rate: 18, type: "SAC" },
  { code: "9985", description: "Support services", rate: 18, type: "SAC" },
  { code: "996511", description: "Road transport of goods", rate: 5, type: "SAC" },
];

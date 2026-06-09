import type { Differentiator } from "./types";

/**
 * 14 differentiators (03 §4). Any badge implying regulatory empanelment is a
 * PLACEHOLDER until the firm confirms — see CLIENT_TODO.md / BUILD_NOTES.md.
 */
export const differentiators: Differentiator[] = [
  { title: "CA, CS & CMA under one roof", how: "Chartered accountancy, company-secretarial and cost & management expertise in a single, accountable team.", icon: "Layers" },
  { title: "Complete AIF practice (Cat I/II/III)", how: "A dedicated funds practice from SEBI registration to fund audit and investor reporting.", icon: "TrendingUp" },
  { title: "GIFT City IFSC expertise", how: "Fund and entity setup in India's international financial services centre.", icon: "Building2" },
  { title: "Startup → Series A → IPO → Listed", how: "Full-lifecycle coverage for founders, from incorporation to the main board.", icon: "Rocket" },
  { title: "US · UK · UAE · Singapore · Mauritius · Cayman", how: "Cross-border coverage across the jurisdictions that matter most to Indian capital.", icon: "Globe2" },
  { title: "Every regulator under one roof", how: "FEMA, RBI, SEBI, IRDAI and IBBI compliance handled by one accountable firm.", icon: "ShieldCheck" },
  { title: "Complete HNI solution", how: "Family office, AIF and private wealth combined for promoter families and UHNIs.", icon: "Gem" },
  { title: "TP + BEPS + Pillar 2 + APA", how: "International tax and transfer pricing in one integrated practice.", icon: "Network" },
  { title: "ESG / BRSR + CSR + Sustainability", how: "Strategy through assurance, in a single ESG practice.", icon: "Leaf" },
  { title: "IBBI-registered Insolvency Professional", how: "CIRP and resolution led in-house by a registered IP.", icon: "Scale" },
  { title: "Cost-Reduction Audit", how: "A signature standalone service that pays for itself — start with a free diagnostic.", icon: "Target" },
  { title: "India base with global reach", how: "Offices in Mumbai, Ahmedabad and Surat, with cross-border advisory capability.", icon: "MapPin" },
  { title: "Global Compliance Management", how: "One firm, every country — multi-jurisdiction compliance from a single point of contact.", icon: "Globe" },
  { title: "Cybersecurity & DPDP advisory", how: "Data-protection and cyber advisory aligned to the DPDP Act. (CERT-IN empanelment to be confirmed.)", icon: "Lock" },
];

/** The six surfaced on the homepage "Why ADA" navy band. */
export const homepageDifferentiators = differentiators.filter((_, i) =>
  [0, 1, 3, 7, 10, 12].includes(i),
);

/**
 * Qualitative trust pillars for the homepage band.
 *
 * Per client direction we do NOT display unverified scale numbers
 * (years / client counts / countries). These are defensible, non-numeric
 * positioning statements. Wording to be confirmed by the firm — see CLIENT_TODO.md.
 */
export type Pillar = { label: string; sub: string };

export const pillars: Pillar[] = [
  {
    label: "Long-standing experience",
    sub: "Decades of combined professional practice across disciplines.",
  },
  {
    label: "Integrated expertise",
    sub: "Chartered Accountancy, Company Secretarial and Cost & Management professionals under one roof.",
  },
  {
    label: "Partner-led delivery",
    sub: "Senior accountability and a single point of contact on every engagement.",
  },
  {
    label: "Mumbai · Ahmedabad · Surat",
    sub: "Serving entrepreneurs, funds and enterprises across India and overseas.",
  },
];

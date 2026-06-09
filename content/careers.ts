/** Career openings — placeholder roles the firm will replace. */
export interface Opening {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  date: string;
}

export const openings: Opening[] = [
  {
    slug: "manager-direct-tax",
    title: "Manager — Direct Tax",
    team: "Tax",
    location: "Mumbai",
    type: "Full-time",
    summary: "Lead corporate and HNI tax engagements — planning, compliance and representation.",
    responsibilities: ["Manage a portfolio of direct-tax clients", "Review returns and tax-audit particulars", "Support assessments and appeals", "Mentor articled assistants"],
    requirements: ["Qualified CA with 3–5 years' direct-tax experience", "Strong technical and drafting skills", "Litigation exposure preferred"],
    date: "2026-05-01",
  },
  {
    slug: "associate-aif-funds",
    title: "Associate — AIF & Funds",
    team: "Regulatory & Cross-Border",
    location: "Mumbai",
    type: "Full-time",
    summary: "Support fund formation, SEBI compliance and fund audit for our flagship funds practice.",
    responsibilities: ["Assist with AIF registration and PPM review", "Prepare SEBI filings and investor reports", "Support fund audits"],
    requirements: ["CA / CS with funds or audit exposure", "Interest in the alternative-investment space"],
    date: "2026-04-20",
  },
  {
    slug: "manager-gst",
    title: "Manager — Indirect Tax / GST",
    team: "Tax",
    location: "Surat",
    type: "Full-time",
    summary: "Own GST compliance, refunds and litigation for a portfolio of clients.",
    responsibilities: ["Manage GST compliance cycles", "Handle refunds and reconciliations", "Draft SCN replies and appeals"],
    requirements: ["Qualified CA with 3+ years in indirect tax", "GST litigation experience preferred"],
    date: "2026-04-10",
  },
];

export const openingBySlug = (slug: string) => openings.find((o) => o.slug === slug);

/**
 * Team members. ALL names, designations, bios and photos are PLACEHOLDERS the
 * firm must supply (CLIENT_TODO.md). Slugs are stable so profile pages resolve.
 */
export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  qualifications: string[];
  practice?: string; // practice slug
  leadership?: boolean;
  bio: string;
  expertise: string[];
}

export const team: TeamMember[] = [
  {
    slug: "managing-partner",
    name: "[Founder Name]",
    role: "Founder & Managing Partner",
    qualifications: ["CA", "CS"],
    practice: "ma-valuation",
    leadership: true,
    bio: "[Placeholder bio — the firm will supply the founder's profile, experience and notable engagements.] A multidisciplinary advisor with experience across audit, tax, transactions and cross-border structuring.",
    expertise: ["M&A & Valuation", "International Tax", "Audit & Assurance"],
  },
  {
    slug: "head-of-tax",
    name: "[Partner Name]",
    role: "Partner — Head of Tax",
    qualifications: ["CA"],
    practice: "direct-tax",
    leadership: true,
    bio: "[Placeholder bio.] Leads the direct and international tax practice, advising corporates and HNIs on planning, compliance and litigation.",
    expertise: ["Direct Tax", "International Tax & TP", "Tax Litigation"],
  },
  {
    slug: "head-of-funds",
    name: "[Partner Name]",
    role: "Partner — AIF & Funds",
    qualifications: ["CA", "CMA"],
    practice: "aif-funds",
    leadership: true,
    bio: "[Placeholder bio.] Leads the funds practice across AIF formation, SEBI compliance, fund audit and investor reporting.",
    expertise: ["AIF & Fund Management", "GIFT City IFSC", "Fund Audit"],
  },
  {
    slug: "head-of-assurance",
    name: "[Partner Name]",
    role: "Partner — Audit & Assurance",
    qualifications: ["CA"],
    practice: "audit-assurance",
    leadership: true,
    bio: "[Placeholder bio.] Leads listed-company and regulated-entity audits, internal audit and ESG assurance.",
    expertise: ["Statutory Audit", "Internal Audit", "BRSR Assurance"],
  },
  {
    slug: "head-of-regulatory",
    name: "[Partner Name]",
    role: "Partner — FEMA & Regulatory",
    qualifications: ["CS"],
    practice: "fema-rbi",
    leadership: true,
    bio: "[Placeholder bio.] Leads cross-border regulatory advisory across FEMA, RBI and company law.",
    expertise: ["FEMA & RBI", "Corporate Secretarial", "Cross-Border Structuring"],
  },
  {
    slug: "insolvency-professional",
    name: "[Partner Name]",
    role: "Partner — Insolvency (IBBI-registered IP)",
    qualifications: ["CA"],
    practice: "insolvency-ibc",
    leadership: true,
    bio: "[Placeholder bio.] An IBBI-registered Insolvency Professional leading CIRP and resolution mandates.",
    expertise: ["Insolvency & IBC", "Resolution", "Liquidation"],
  },
  { slug: "associate-1", name: "[Team Member]", role: "Senior Manager — Indirect Tax", qualifications: ["CA"], practice: "indirect-tax-gst", bio: "[Placeholder bio.]", expertise: ["GST", "Customs", "GST Litigation"] },
  { slug: "associate-2", name: "[Team Member]", role: "Senior Manager — Consulting & CFO", qualifications: ["CMA"], practice: "consulting-cfo", bio: "[Placeholder bio.]", expertise: ["Virtual CFO", "Cost Reduction", "MIS"] },
  { slug: "associate-3", name: "[Team Member]", role: "Manager — Startup Advisory", qualifications: ["CA"], practice: "startup-vc-pe", bio: "[Placeholder bio.]", expertise: ["Startup Structuring", "ESOPs", "Fundraising"] },
  { slug: "associate-4", name: "[Team Member]", role: "Manager — ESG & Sustainability", qualifications: ["CA"], practice: "esg-sustainability", bio: "[Placeholder bio.]", expertise: ["BRSR", "Carbon Accounting", "CSR"] },
  { slug: "associate-5", name: "[Team Member]", role: "Manager — Family Office", qualifications: ["CA", "CS"], practice: "family-office-wealth", bio: "[Placeholder bio.]", expertise: ["Succession", "Trusts", "Private Wealth"] },
  { slug: "associate-6", name: "[Team Member]", role: "Manager — Outsourcing", qualifications: ["CA"], practice: "finance-accounting-outsourcing", bio: "[Placeholder bio.]", expertise: ["Accounting", "Payroll", "GCC Delivery"] },
];

export const teamBySlug = (slug: string) => team.find((t) => t.slug === slug);
export const leadership = team.filter((t) => t.leadership);
export const wider = team.filter((t) => !t.leadership);

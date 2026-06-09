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
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    slug: "anuj-desai",
    name: "CA Anuj Desai",
    role: "Founder",
    qualifications: ["CA"],
    leadership: true,
    bio: "CA Anuj Desai is the Founder of Anuj Desai & Associates, a professional firm providing Chartered Accountancy, corporate advisory, compliance and business consulting solutions. A qualified Chartered Accountant with extensive experience across taxation, audit and assurance, corporate laws, regulatory compliance, startup advisory and strategic business consulting, he advises businesses ranging from startups and SMEs to established enterprises, funds, NGOs and family-owned businesses. His areas of focus include direct and indirect taxation, litigation support, statutory and internal audits, CFO and financial advisory services, business structuring, FEMA and cross-border transactions, Alternative Investment Funds (AIFs), NBFCs, foreign subsidiaries, NGO and Section 8 company advisory, corporate governance and transaction support. He is known for combining technical expertise with practical commercial insight to help clients manage compliance, mitigate risks and achieve sustainable growth. Through Anuj Desai & Associates, he works closely with entrepreneurs, promoters, investors and management teams, delivering solutions that go beyond compliance and contribute to long-term value creation.",
    expertise: ["Taxation", "Audit & Assurance", "Corporate & Regulatory Advisory", "FEMA & Cross-Border", "AIF & Funds", "CFO & Business Consulting"],
    linkedin: "https://www.linkedin.com/in/ca-anuj-desai-122547230",
  },
];

export const teamBySlug = (slug: string) => team.find((t) => t.slug === slug);
export const leadership = team.filter((t) => t.leadership);
export const wider = team.filter((t) => !t.leadership);

export type Cluster =
  | "Assurance"
  | "Tax"
  | "Regulatory & Cross-Border"
  | "Transactions & Capital"
  | "Advisory & Outsourcing"
  | "Sector & Specialist";

export const CLUSTERS: Cluster[] = [
  "Assurance",
  "Tax",
  "Regulatory & Cross-Border",
  "Transactions & Capital",
  "Advisory & Outsourcing",
  "Sector & Specialist",
];

export interface ServiceItem {
  name: string;
  slug?: string; // present => gets an individual /services/[practice]/[service] page
  blurb?: string;
}

export interface ServiceGroup {
  title: string;
  items: ServiceItem[];
}

export interface Practice {
  slug: string;
  title: string;
  cluster: Cluster;
  icon: string; // lucide icon name
  tagline: string;
  overview: string;
  groups: ServiceGroup[];
  relatedPractices: string[]; // ≥3 slugs
  industries: string[]; // relevant industry slugs
  leadMagnets: string[]; // ids from leadMagnets.ts
  faqs: { q: string; a: string }[]; // ≥6
  /** Optional placeholder credential badge label (flagged until confirmed). */
  credentialBadge?: string;
  flagship?: boolean;
}

export interface Industry {
  slug: string;
  title: string;
  icon: string;
  intro: string;
  challenges: string[];
  howWeHelp: ServiceItem[];
  relatedPractices: string[];
  leadMagnets: string[];
  faqs?: { q: string; a: string }[];
}

export interface Office {
  city: string;
  isHQ?: boolean;
  address: string;
  phone?: string;
  email?: string;
  mapEmbed?: string;
  partnerInCharge?: string;
  lat?: number;
  lng?: number;
}

export interface Differentiator {
  title: string;
  how: string;
  icon: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface CTA {
  id: string;
  label: string;
  toned?: string; // ICAI-toned-down alternative copy
  href: string;
  variant: "primary" | "brass";
}

export interface LeadMagnet {
  id: string;
  title: string;
  format: "PDF" | "Excel" | "Tool" | "Checklist";
  practice: string;
  gated: boolean;
  href?: string; // for Tool magnets that link to a live calculator
  blurb?: string;
}

export interface AlertCategory {
  key: string;
  label: string;
  color: string; // css var token name used by tailwind cat-* utilities
}

export interface CalculatorMeta {
  slug: string;
  title: string;
  summary: string;
  category: string;
  status: "live" | "stub";
  practice?: string;
}

export interface Corridor {
  slug: string;
  country: string;
  flag: string;
  intro: string;
  services: string[];
  relatedPractices: string[];
}

export const corridors: Corridor[] = [
  {
    slug: "usa",
    country: "USA",
    flag: "🇺🇸",
    intro: "Two-way advisory across the India–US corridor — inbound US investment into India and Indian businesses expanding to the United States.",
    services: ["India entry & subsidiary setup", "US federal & state tax filing (1120/1040)", "FBAR / FATCA compliance", "Transfer pricing (India–US)", "Treaty & withholding (Form W-8/W-9, 15CB)", "Delaware structuring & flips"],
    relatedPractices: ["global-entity-setup", "international-tax-tp", "fema-rbi", "startup-vc-pe"],
  },
  {
    slug: "uk",
    country: "UK",
    flag: "🇬🇧",
    intro: "Support for the India–UK corridor — UK company set-up, tax and the treaty interface for businesses and investors.",
    services: ["UK company setup", "Corporation Tax & Self Assessment", "VAT registration & returns", "India–UK DTAA advisory", "Transfer pricing", "Cross-border structuring"],
    relatedPractices: ["global-entity-setup", "international-tax-tp", "fema-rbi", "corporate-secretarial"],
  },
  {
    slug: "uae",
    country: "UAE",
    flag: "🇦🇪",
    intro: "A fast-growing corridor — UAE entity set-up, the new Corporate Tax and VAT regimes, and holding-structure advisory.",
    services: ["Mainland & free-zone setup", "UAE Corporate Tax (9%) advisory", "VAT registration & returns", "Holding-structure (UAE vs Singapore vs Mauritius)", "Economic-substance compliance", "India–UAE DTAA"],
    relatedPractices: ["global-entity-setup", "international-tax-tp", "fema-rbi", "family-office-wealth"],
  },
  {
    slug: "singapore",
    country: "Singapore",
    flag: "🇸🇬",
    intro: "A leading hub for funds and holding companies — Singapore incorporation, tax incentives and the India treaty interface.",
    services: ["Singapore Pte Ltd setup", "Corporate tax & incentives", "GST registration", "Fund & holding structuring", "Transfer pricing", "India–Singapore DTAA & flips"],
    relatedPractices: ["global-entity-setup", "aif-funds", "international-tax-tp", "startup-vc-pe"],
  },
];

export const corridorBySlug = (slug: string) => corridors.find((c) => c.slug === slug);

export interface Desk {
  slug: string;
  name: string;
  intro: string;
  note: string;
}

export const desks: Desk[] = [
  { slug: "korea", name: "Korea Desk", intro: "Dedicated support for Korean businesses investing and operating in India.", note: "Korean-language coordination available." },
  { slug: "japan", name: "Japan Desk", intro: "Advisory for Japanese corporates establishing and running India operations.", note: "Japanese-language coordination available." },
  { slug: "north-america", name: "North America Desk", intro: "A single point of contact for US and Canadian businesses across the India corridor.", note: "Aligned to US/Canada reporting timelines." },
  { slug: "europe", name: "Europe Desk", intro: "Support for European groups on India entry, tax and compliance.", note: "Multi-country European coordination." },
  { slug: "middle-east", name: "Middle East Desk", intro: "GCC-focused advisory spanning the UAE, Saudi Arabia and the wider region.", note: "GIFT City and free-zone expertise." },
];

export const deskBySlug = (slug: string) => desks.find((d) => d.slug === slug);

export const worldCoverage = [
  { flag: "🇺🇸", label: "USA", href: "/global/usa" },
  { flag: "🇬🇧", label: "UK", href: "/global/uk" },
  { flag: "🇦🇪", label: "UAE", href: "/global/uae" },
  { flag: "🇸🇬", label: "Singapore", href: "/global/singapore" },
  { flag: "🇲🇺", label: "Mauritius", href: "/global" },
  { flag: "🇰🇾", label: "Cayman", href: "/global" },
  { flag: "🏙️", label: "GIFT City IFSC", href: "/global/gift-city" },
];

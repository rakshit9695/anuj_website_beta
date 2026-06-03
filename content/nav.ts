import { practices } from "./practices";
import { industries } from "./industries";
import { CLUSTERS, type Cluster } from "./types";
import { site } from "@/lib/site";

export type NavLink = { label: string; href: string; desc?: string; icon?: string };

export const primaryNav: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Global Presence", href: "/global" },
  { label: "Insights", href: "/insights" },
  { label: "Knowledge Bank", href: "/knowledge-bank" },
  { label: "Media", href: "/media" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/** Practices grouped by cluster for the Services mega-menu. */
export const practiceClusters: { cluster: Cluster; practices: typeof practices }[] =
  CLUSTERS.map((cluster) => ({
    cluster,
    practices: practices.filter((p) => p.cluster === cluster),
  }));

export const practiceNavLinks: NavLink[] = practices.map((p) => ({
  label: p.title,
  href: `/services/${p.slug}`,
  desc: p.tagline,
  icon: p.icon,
}));

export const industryNavLinks: NavLink[] = industries.map((i) => ({
  label: i.title,
  href: `/industries/${i.slug}`,
  icon: i.icon,
}));

/** Sub-services revealed in the Services mega-menu third column. */
export function keyServicesFor(practiceSlug: string): NavLink[] {
  const p = practices.find((x) => x.slug === practiceSlug);
  if (!p) return [];
  return p.groups
    .flatMap((g) => g.items)
    .filter((i) => i.slug)
    .slice(0, 6)
    .map((i) => ({ label: i.name, href: `/services/${p.slug}/${i.slug}` }));
}

export const countries: NavLink[] = [
  { label: "India", href: "/global/india", icon: "🇮🇳" },
  { label: "Singapore", href: "/global/singapore", icon: "🇸🇬" },
  { label: "UAE", href: "/global/uae", icon: "🇦🇪" },
  { label: "USA", href: "/global/usa", icon: "🇺🇸" },
  { label: "UK", href: "/global/uk", icon: "🇬🇧" },
  { label: "GIFT City", href: "/global/gift-city", icon: "🏙️" },
];

export const globalNav: NavLink[] = [
  { label: "Global Presence", href: "/global" },
  { label: "Our Offices (India)", href: "/global/india" },
  { label: "USA", href: "/global/usa" },
  { label: "UK", href: "/global/uk" },
  { label: "UAE", href: "/global/uae" },
  { label: "Singapore", href: "/global/singapore" },
  { label: "GIFT City IFSC", href: "/global/gift-city" },
  { label: "International Desks", href: "/global/network" },
  { label: "India Entry", href: "/global/india-entry" },
];

export const insightsNav: NavLink[] = [
  { label: "Knowledge Centre", href: "/insights" },
  { label: "Thought Leadership", href: "/insights/thought-leadership" },
  { label: "Tax Alerts", href: "/insights/alerts" },
  { label: "Whitepapers", href: "/insights/whitepapers" },
  { label: "Budget 2026", href: "/insights/budget" },
  { label: "Blog", href: "/insights/blog" },
  { label: "Webinars", href: "/insights/webinars" },
  { label: "Podcasts", href: "/insights/podcasts" },
  { label: "Events", href: "/insights/events" },
  { label: "Surveys", href: "/insights/surveys" },
  { label: "Newsletters", href: "/insights/newsletters" },
  { label: "Case Studies", href: "/insights/case-studies" },
];

export const knowledgeBankNav: NavLink[] = [
  { label: "Calculators", href: "/knowledge-bank/calculators" },
  { label: "Rates & Utilities", href: "/knowledge-bank/rates" },
  { label: "Important Dates", href: "/knowledge-bank/important-dates" },
  { label: "Acts", href: "/knowledge-bank/acts" },
  { label: "Rules", href: "/knowledge-bank/rules" },
  { label: "Forms", href: "/knowledge-bank/forms" },
  { label: "Bulletins", href: "/knowledge-bank/bulletins" },
  { label: "Quick Links", href: "/knowledge-bank/quick-links" },
];

export const aboutNav: NavLink[] = [
  { label: "Our Story", href: "/about/our-story" },
  { label: "Our Journey", href: "/about/our-journey" },
  { label: "Mission, Vision & Values", href: "/about/mission-vision-values" },
  { label: "The ADA Way", href: "/about/the-ada-way" },
  { label: "Team", href: "/about/team" },
  { label: "Awards", href: "/about/awards" },
  { label: "Credentials", href: "/about/credentials" },
  { label: "Code of Ethics", href: "/about/code-of-ethics" },
  { label: "CSR", href: "/about/csr" },
];

export const careersNav: NavLink[] = [
  { label: "Life at ADA", href: "/careers" },
  { label: "Current Openings", href: "/careers/openings" },
  { label: "Articleship", href: "/careers/articleship" },
  { label: "Why Join ADA", href: "/careers/why-join" },
  { label: "Alumni", href: "/careers/alumni" },
];

export const footerColumns = {
  services: practiceNavLinks,
  explore: [
    { label: "Industries", href: "/industries" },
    { label: "Global Presence", href: "/global" },
    { label: "Insights", href: "/insights" },
    { label: "Knowledge Bank", href: "/knowledge-bank" },
    { label: "Calculators", href: "/knowledge-bank/calculators" },
    { label: "Careers", href: "/careers" },
    { label: "Media", href: "/media" },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],
};

export const socials = site.socials;

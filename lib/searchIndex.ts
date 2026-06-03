import { practices } from "@/content/practices";
import { industries } from "@/content/industries";
import { calculators } from "@/content/calculators";
import { aboutNav, insightsNav, knowledgeBankNav, globalNav } from "@/content/nav";

export type SearchGroup = "People" | "Knowledge" | "Practice" | "News";
export type SearchEntry = {
  title: string;
  href: string;
  group: SearchGroup;
  keywords?: string;
};

/** Static client-side search index built from the data layer + nav. */
export const searchIndex: SearchEntry[] = [
  ...practices.map((p) => ({
    title: p.title,
    href: `/services/${p.slug}`,
    group: "Practice" as const,
    keywords: `${p.tagline} ${p.cluster} ${p.groups.flatMap((g) => g.items.map((i) => i.name)).join(" ")}`,
  })),
  ...industries.map((i) => ({
    title: i.title,
    href: `/industries/${i.slug}`,
    group: "Practice" as const,
    keywords: i.intro,
  })),
  ...calculators.map((c) => ({
    title: c.title,
    href: `/knowledge-bank/calculators/${c.slug}`,
    group: "Knowledge" as const,
    keywords: c.summary,
  })),
  ...knowledgeBankNav.map((n) => ({ title: n.label, href: n.href, group: "Knowledge" as const })),
  ...insightsNav.map((n) => ({ title: n.label, href: n.href, group: "News" as const })),
  ...aboutNav.map((n) => ({ title: n.label, href: n.href, group: "People" as const })),
  ...globalNav.map((n) => ({ title: n.label, href: n.href, group: "Practice" as const })),
];

/** Simple case-insensitive fuzzy-ish search across title + keywords. */
export function search(query: string, group?: SearchGroup): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return searchIndex
    .filter((e) => !group || e.group === group)
    .map((e) => {
      const hay = `${e.title} ${e.keywords ?? ""}`.toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (e.title.toLowerCase().includes(t)) score += 3;
        else if (hay.includes(t)) score += 1;
      }
      return { e, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 24)
    .map((x) => x.e);
}

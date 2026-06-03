import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { getPostsByType } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "In the News",
  description: "External media coverage and partner commentary featuring Anuj Desai & Associates.",
  path: "/media/news",
});

export default function NewsPage() {
  const items = getPostsByType("news");
  return (
    <>
      <PageHero
        crumbs={[{ name: "Media", href: "/media" }, { name: "In the News", href: "/media/news" }]}
        eyebrow="Coverage"
        title="In the news"
        intro="External coverage and partner commentary. (Outbound links and publication logos are placeholders.)"
      />
      <Section tone="paper">
        <div className="space-y-4">
          {items.map((n) => (
            <div key={n.slug} className="flex items-start justify-between gap-6 rounded-xl border border-ink-300 bg-surface p-5">
              <div>
                <p className="text-sm text-ink-500">{formatDate(n.date)} · [Publication]</p>
                <h2 className="mt-1 font-display text-lg text-navy-900">{n.title}</h2>
                <p className="mt-1 text-sm text-ink-700">{n.excerpt}</p>
              </div>
              <span className="shrink-0 text-sm text-navy-700">Read →</span>
            </div>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

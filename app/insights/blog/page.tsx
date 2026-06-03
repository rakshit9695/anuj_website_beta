import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { InsightsExplorer } from "@/components/insights/InsightsExplorer";
import { CTABand } from "@/components/ui/CTABand";
import { getPostsByType } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Blog & Expert Articles",
  description: "In-depth articles on tax, GST, funds, cross-border and advisory topics from ADA's experts.",
  path: "/insights/blog",
});

export default function BlogIndex() {
  const posts = getPostsByType("blog").map((p) => ({
    title: p.title, slug: p.slug, type: p.type, category: p.category, author: p.author, date: p.date, excerpt: p.excerpt,
  }));
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }, { name: "Blog", href: "/insights/blog" }]}
        eyebrow="Knowledge Centre"
        title="Expert articles"
        intro="Practical, in-depth pieces from across the firm — clean editorial writing, no jargon walls."
      />
      <Section tone="paper">
        <InsightsExplorer posts={posts} />
      </Section>
      <CTABand />
    </>
  );
}

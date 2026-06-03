import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { InsightsExplorer } from "@/components/insights/InsightsExplorer";
import { CTABand } from "@/components/ui/CTABand";
import { getPostsByType } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Tax & Regulatory Alerts",
  description: "Date-stamped, colour-coded alerts across direct tax, GST, regulatory, litigation, GIFT City and trade.",
  path: "/insights/alerts",
});

export default function AlertsPage() {
  const posts = getPostsByType("alert").map((p) => ({
    title: p.title, slug: p.slug, type: p.type, category: p.category, author: p.author, date: p.date, excerpt: p.excerpt,
  }));
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }, { name: "Alerts", href: "/insights/alerts" }]}
        eyebrow="Knowledge Centre"
        title="Tax & regulatory alerts"
        intro="Concise, colour-coded updates on the changes that matter — filter by category."
      />
      <Section tone="paper">
        <InsightsExplorer posts={posts} />
      </Section>
      <CTABand />
    </>
  );
}

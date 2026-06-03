import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { GatedReport } from "@/components/insights/GatedReport";
import { CTABand } from "@/components/ui/CTABand";
import { getPostsByType } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Whitepapers & Reports",
  description: "In-depth reports on funds, M&A, IPO readiness and international tax — gated downloads.",
  path: "/insights/whitepapers",
});

export default function Whitepapers() {
  const reports = getPostsByType("whitepaper");
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }, { name: "Whitepapers", href: "/insights/whitepapers" }]}
        eyebrow="Thought leadership"
        title="Whitepapers & reports"
        intro="Deep dives from across the firm. Download is gated by a quick email capture; the PDFs are placeholders the firm will supply."
      />
      <Section tone="paper">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((r) => (
            <GatedReport key={r.slug} report={{ title: r.title, excerpt: r.excerpt, slug: r.slug, kind: "Whitepaper" }} />
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

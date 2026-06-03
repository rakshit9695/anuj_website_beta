import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { GatedReport } from "@/components/insights/GatedReport";
import { CTABand } from "@/components/ui/CTABand";
import { getPostsByType } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Surveys & Research",
  description: "ADA research and survey reports — gated downloads.",
  path: "/insights/surveys",
});

export default function Surveys() {
  const reports = getPostsByType("survey");
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }, { name: "Surveys", href: "/insights/surveys" }]}
        eyebrow="Research"
        title="Surveys & research"
        intro="Data-led reports on the priorities and concerns of India's finance leaders."
      />
      <Section tone="paper">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((r) => (
            <GatedReport key={r.slug} report={{ title: r.title, excerpt: r.excerpt, slug: r.slug, kind: "Survey" }} />
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

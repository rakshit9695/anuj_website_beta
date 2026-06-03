import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { IndustryCard } from "@/components/ui/Cards";
import { CTABand } from "@/components/ui/CTABand";
import { industries } from "@/content/industries";

export const metadata: Metadata = buildMetadata({
  title: "Industries — sector-specialist advisory",
  description:
    "ADA serves 25 industries — startups, technology, funds & AIFs, manufacturing, BFSI, real estate, healthcare and more — with sector-aware audit, tax and advisory.",
  path: "/industries",
});

export default function IndustriesLanding() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Industries", href: "/industries" }]}
        eyebrow="Industries We Serve"
        title="Advice shaped by how your sector works"
        intro="Twenty-five industries, each with its own regulatory pressures, capital needs and tax nuances. Our practices combine with deep sector knowledge to fit yours."
      />
      <Section tone="paper">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((i) => (
            <IndustryCard key={i.slug} href={`/industries/${i.slug}`} icon={i.icon} title={i.title} />
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

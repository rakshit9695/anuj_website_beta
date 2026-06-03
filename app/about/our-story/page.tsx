import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Our Story",
  description: "The founding, philosophy and multidisciplinary approach of Anuj Desai & Associates.",
  path: "/about/our-story",
});

export default function OurStory() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }, { name: "Our Story", href: "/about/our-story" }]}
        eyebrow="About ADA"
        title="Our story"
        intro="Why we built a firm around the idea that clients are better served when disciplines work together."
      />
      <Section tone="paper">
        <div className="prose-ada mx-auto">
          <p><em>[Placeholder narrative — the firm will supply approved copy.]</em></p>
          <p>Anuj Desai & Associates was founded on a simple conviction: that the boundaries between audit, tax, company law and management advisory are artificial — and that clients pay the price when their advisors work in silos.</p>
          <h2>What multidisciplinary means in practice</h2>
          <p>For a fund launch, a cross-border acquisition or an IPO, the questions span SEBI, the Income-tax Act, FEMA, the Companies Act and accounting standards at once. Our triple-qualified team — chartered accountants, company secretaries and cost & management accountants — answers them together, in one room.</p>
          <h2>Our philosophy</h2>
          <p>Earned authority over flashiness. Technical rigour over shortcuts. Long-term partnership over transactions. These principles shape every engagement.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-ink-300 bg-surface-alt p-6">
            <h3 className="font-display text-lg text-navy-900">Mission</h3>
            <p className="mt-2 text-sm text-ink-700">[Placeholder] To be the single, trusted advisor for India&rsquo;s most ambitious businesses and families — across every discipline they need.</p>
          </div>
          <div className="rounded-xl border border-ink-300 bg-surface-alt p-6">
            <h3 className="font-display text-lg text-navy-900">Vision</h3>
            <p className="mt-2 text-sm text-ink-700">[Placeholder] A Big-4 challenger firm defined by depth, integrity and the rare CA · CS · CMA combination.</p>
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}

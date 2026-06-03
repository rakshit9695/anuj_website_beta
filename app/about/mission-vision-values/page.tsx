import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/Icon";
import { CTABand } from "@/components/ui/CTABand";
import { values } from "@/content/firm";

export const metadata: Metadata = buildMetadata({
  title: "Mission, Vision & Values",
  description: "What drives Anuj Desai & Associates — our mission, vision and core values.",
  path: "/about/mission-vision-values",
});

export default function MVV() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }, { name: "Mission, Vision & Values", href: "/about/mission-vision-values" }]}
        eyebrow="About ADA"
        title="Mission, vision & values"
      />
      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-navy-100 bg-navy-50 p-8">
            <p className="eyebrow">Mission</p>
            <p className="mt-3 font-display text-2xl text-navy-900">
              [Placeholder] To be the single, trusted advisor for India&rsquo;s most ambitious businesses and families — across every discipline they need.
            </p>
          </div>
          <div className="rounded-xl border border-navy-100 bg-navy-50 p-8">
            <p className="eyebrow">Vision</p>
            <p className="mt-3 font-display text-2xl text-navy-900">
              [Placeholder] A Big-4 challenger firm defined by depth, integrity and the rare CA · CS · CMA combination.
            </p>
          </div>
        </div>
      </Section>
      <Section tone="alt">
        <SectionHeading eyebrow="What we stand for" title="Our core values" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-ink-300 bg-surface p-6">
              <IconTile name={v.icon} />
              <h3 className="mt-4 font-display text-lg text-navy-900">{v.title}</h3>
              <p className="mt-1 text-sm text-ink-700">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

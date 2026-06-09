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
              To be the single, trusted advisor for businesses, entrepreneurs,
              investment funds, institutions and families by delivering
              integrated solutions across finance, taxation, governance,
              compliance and strategic advisory.
            </p>
            <p className="mt-3 text-sm text-ink-700">
              We exist to help our clients navigate complexity, manage risk,
              seize opportunities and create sustainable long-term value through
              technical excellence, commercial insight and unwavering
              professional integrity.
            </p>
          </div>
          <div className="rounded-xl border border-navy-100 bg-navy-50 p-8">
            <p className="eyebrow">Vision</p>
            <p className="mt-3 font-display text-2xl text-navy-900">
              To build one of India&rsquo;s most respected multidisciplinary
              professional services firms — recognised for exceptional
              expertise, trusted relationships and the ability to solve complex
              business challenges across jurisdictions, industries and stages of
              growth.
            </p>
            <p className="mt-3 text-sm text-ink-700">
              Our vision is to become the first choice for ambitious
              organisations seeking a long-term advisory partner capable of
              supporting every aspect of their financial, regulatory and
              strategic journey.
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

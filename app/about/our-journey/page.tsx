import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { milestones } from "@/content/firm";

export const metadata: Metadata = buildMetadata({
  title: "Our Journey",
  description: "Milestones in the growth of Anuj Desai & Associates.",
  path: "/about/our-journey",
});

export default function OurJourney() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }, { name: "Our Journey", href: "/about/our-journey" }]}
        eyebrow="About ADA"
        title="Our journey"
        intro="Key milestones in the firm's growth. (Placeholder timeline — the firm will supply real dates and events.)"
      />
      <Section tone="paper">
        <ol className="relative mx-auto max-w-3xl border-l-2 border-navy-100 pl-8">
          {milestones.map((m, i) => (
            <Reveal as="li" key={m.year} delay={i * 0.05} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[2.6rem] top-1 grid h-9 w-9 place-items-center rounded-full border-2 border-brass-500 bg-paper font-display text-xs text-brass-600">
                {m.year.slice(2)}
              </span>
              <p className="font-display text-xl text-navy-900">{m.year}</p>
              <p className="mt-1 text-ink-700">{m.event}</p>
            </Reveal>
          ))}
        </ol>
      </Section>
      <CTABand />
    </>
  );
}

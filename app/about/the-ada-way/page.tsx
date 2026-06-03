import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { approach } from "@/content/firm";

export const metadata: Metadata = buildMetadata({
  title: "The ADA Way",
  description: "Our engagement methodology — Understand, Structure, Execute, Assure, Advise.",
  path: "/about/the-ada-way",
});

export default function TheAdaWay() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }, { name: "The ADA Way", href: "/about/the-ada-way" }]}
        eyebrow="Our approach"
        title="The ADA Way"
        intro="A consistent engagement methodology that turns multidisciplinary depth into clear outcomes."
      />
      <Section tone="paper">
        <div className="space-y-4">
          {approach.map((a, i) => (
            <Reveal key={a.step} delay={i * 0.05}>
              <div className="flex items-start gap-5 rounded-xl border border-ink-300 bg-surface p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-900 font-display text-lg text-brass-400">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl text-navy-900">{a.step}</h3>
                  <p className="mt-1 text-ink-700">{a.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

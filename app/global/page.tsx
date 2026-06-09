import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IndiaMap } from "@/components/ui/IndiaMap";
import { ButtonLink } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { corridors, desks, worldCoverage } from "@/content/global";

export const metadata: Metadata = buildMetadata({
  title: "Global Presence — India-rooted, globally connected",
  description:
    "Offices in Mumbai, Ahmedabad and Surat, with cross-border advisory across the US, UK, UAE, Singapore and the GIFT City IFSC.",
  path: "/global",
});

export default function GlobalHub() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Global Presence", href: "/global" }]}
        eyebrow="India & Global"
        title="India-rooted, globally connected"
        intro="Offices in Mumbai, Ahmedabad and Surat, with cross-border advisory across the jurisdictions that matter to Indian businesses, founders and inbound investors."
      />

      <Section tone="paper">
        <SectionHeading eyebrow="India" title="Our offices across India" intro="Hover or tap a marker to see office details. (Addresses are placeholders the firm will supply.)" />
        <div className="mt-8"><IndiaMap /></div>
        <div className="mt-6"><ButtonLink href="/global/india" variant="secondary">Office details</ButtonLink></div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Worldwide" title="Cross-border coverage" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {worldCoverage.map((c) => (
            <Link key={c.label} href={c.href} className="group flex items-center justify-between rounded-xl border border-ink-300 bg-surface p-5 transition-all hover:border-brass-400">
              <span className="flex items-center gap-2 font-medium text-navy-900"><span aria-hidden className="text-xl">{c.flag}</span>{c.label}</span>
              <ArrowRight className="h-4 w-4 text-ink-300 transition-colors group-hover:text-brass-500" aria-hidden />
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="Country corridors" title="Dedicated advisory by corridor" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {corridors.map((c) => (
            <Link key={c.slug} href={`/global/${c.slug}`} className="group rounded-xl border border-ink-300 bg-surface p-6 transition-all hover:shadow-card">
              <p className="text-2xl" aria-hidden>{c.flag}</p>
              <h3 className="mt-2 font-display text-xl text-navy-900">{c.country}</h3>
              <p className="mt-1 text-sm text-ink-700">{c.intro}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-navy-700">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden /></span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="International desks" title="Language-friendly country desks" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {desks.map((d) => (
            <Link key={d.slug} href={`/global/desks/${d.slug}`} className="rounded-xl border border-ink-300 bg-surface p-5 hover:border-brass-400">
              <p className="font-medium text-navy-900">{d.name}</p>
              <p className="mt-1 text-sm text-ink-700">{d.intro}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/global/network" variant="ghost">Associate & alliance network →</ButtonLink>
          <ButtonLink href="/global/india-entry" variant="ghost">India entry for foreign companies →</ButtonLink>
        </div>
      </Section>

      <CTABand title="Talk to our cross-border team" intro="Whether you're entering India or expanding abroad, we coordinate tax, FEMA and entity set-up under one roof." />
    </>
  );
}

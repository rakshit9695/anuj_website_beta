import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IndiaMap } from "@/components/ui/IndiaMap";
import { CTABand } from "@/components/ui/CTABand";
import { LocalBusinessJsonLd } from "@/components/ui/JsonLd";
import { offices } from "@/content/offices";

export const metadata: Metadata = buildMetadata({
  title: "Our Offices in India",
  description: "Anuj Desai & Associates' twelve-city Indian presence — offices, addresses and partners-in-charge.",
  path: "/global/india",
});

export default function IndiaOffices() {
  return (
    <>
      <LocalBusinessJsonLd offices={offices} />
      <PageHero
        crumbs={[{ name: "Global Presence", href: "/global" }, { name: "India", href: "/global/india" }]}
        eyebrow="Pan-India"
        title="Our offices across India"
        intro="Twelve cities, anchored in Mumbai. Addresses, phones and partners-in-charge are placeholders the firm will supply."
      />
      <Section tone="paper">
        <IndiaMap />
      </Section>
      <Section tone="alt">
        <SectionHeading eyebrow="Directory" title="Office details" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((o) => (
            <div key={o.city} className="rounded-xl border border-ink-300 bg-surface p-6">
              <p className="font-display text-lg text-navy-900">
                {o.city}{o.isHQ && <span className="ml-2 text-xs font-semibold uppercase text-brass-600">HQ</span>}
              </p>
              <p className="mt-2 text-sm text-ink-700">{o.address}</p>
              {o.partnerInCharge && <p className="mt-1 text-sm text-ink-500">Partner: {o.partnerInCharge}</p>}
              {o.phone && <p className="mt-1 text-sm text-ink-500">{o.phone}</p>}
            </div>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

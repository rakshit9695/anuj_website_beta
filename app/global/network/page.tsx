import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Associate & Alliance Network",
  description: "ADA's global associate and alliance network extends our reach across jurisdictions.",
  path: "/global/network",
});

export default function NetworkPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Global Presence", href: "/global" }, { name: "Network", href: "/global/network" }]}
        eyebrow="Global network"
        title="Associate & alliance network"
        intro="We extend our reach through a network of trusted associate firms and alliances, so multi-country mandates have a single accountable lead. (Partner logos are placeholders.)"
      />
      <Section tone="paper">
        <SectionHeading eyebrow="Partners" title="Our alliance partners" />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="grid h-24 place-items-center rounded-xl border border-ink-300 bg-surface text-xs uppercase tracking-widest text-ink-500">
              Partner {i + 1}
            </div>
          ))}
        </div>
        <div className="mt-10"><Placeholder ratio="21/9" label="World network map" tone="navy" /></div>
      </Section>
      <CTABand />
    </>
  );
}

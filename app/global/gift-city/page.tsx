import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { CredentialBadge } from "@/components/ui/Badge";
import { RelatedRail } from "@/components/ui/RelatedRail";
import { CTABand } from "@/components/ui/CTABand";
import { flags } from "@/lib/flags";

export const metadata: Metadata = buildMetadata({
  title: "GIFT City IFSC advisory",
  description: "Fund setup, IFSC entity formation and tax advisory in India's GIFT City international financial services centre.",
  path: "/global/gift-city",
});

const services = [
  "IFSCA registration & entity setup",
  "GIFT City fund (AIF) formation",
  "Finance company & treasury setup",
  "Tax holiday & concession structuring",
  "Aircraft / ship leasing structures",
  "Ongoing IFSC compliance",
];

export default function GiftCity() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Global Presence", href: "/global" }, { name: "GIFT City IFSC", href: "/global/gift-city" }]}
        eyebrow="🏙️ IFSC"
        title="GIFT City IFSC advisory"
        intro="India's international financial services centre offers a regulated, dollar-denominated jurisdiction with tax concessions — an onshore alternative to Singapore, Mauritius and Cayman."
      >
        {flags.SHOW_CREDENTIAL_BADGES && <CredentialBadge label="GIFT City IFSC expertise" />}
      </PageHero>
      <Section tone="paper">
        <SectionHeading eyebrow="What we do" title="GIFT City services" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s} className="flex items-start gap-3 rounded-xl border border-ink-300 bg-surface p-4 text-sm text-ink-700">
              <Icon name="ChevronRight" className="mt-0.5 h-4 w-4 shrink-0 text-brass-500" />{s}
            </div>
          ))}
        </div>
      </Section>
      <Section tone="alt">
        <SectionHeading eyebrow="Why GIFT City" title="GIFT City vs Singapore vs Cayman" />
        <p className="mt-4 max-w-prose text-ink-700">
          For India-focused managers, GIFT City can deliver many of the benefits of an offshore hub — foreign-investor access, dollar structures and tax concessions — while remaining onshore. Download our comparison guide from the AIF hub for a full side-by-side.
        </p>
      </Section>
      <Section tone="paper">
        <RelatedRail title="Related practices" links={[
          { label: "AIF & Fund Management", href: "/services/aif-funds" },
          { label: "International Tax & TP", href: "/services/international-tax-tp" },
          { label: "FEMA & RBI", href: "/services/fema-rbi" },
          { label: "Global Entity Setup", href: "/services/global-entity-setup" },
        ]} />
      </Section>
      <CTABand title="Set up in GIFT City with ADA" intro="From IFSCA registration to fund structuring and ongoing compliance." />
    </>
  );
}

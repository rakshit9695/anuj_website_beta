import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { RelatedRail } from "@/components/ui/RelatedRail";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "India Entry for Foreign Companies",
  description: "End-to-end India entry — entity options, FDI/FEMA, tax registrations and ongoing compliance for foreign companies.",
  path: "/global/india-entry",
});

const steps = [
  { t: "Entity option", d: "Choose between a wholly-owned subsidiary, branch, liaison or project office based on your activities and tax position." },
  { t: "FDI & FEMA", d: "Confirm the sectoral route and cap; complete FC-GPR and other RBI reporting." },
  { t: "Registrations", d: "PAN, TAN, GST, Professional Tax, PF/ESI and Importer-Exporter Code as applicable." },
  { t: "Banking & capital", d: "Open accounts and bring in capital compliantly, with valuation where required." },
  { t: "Ongoing compliance", d: "Accounting, payroll, tax, transfer pricing and statutory filings under one point of contact." },
];

export default function IndiaEntry() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Global Presence", href: "/global" }, { name: "India Entry", href: "/global/india-entry" }]}
        eyebrow="Inbound"
        title="India entry for foreign companies"
        intro="A single team to set up and run your India operations — entity, FDI/FEMA, registrations and ongoing compliance."
      />
      <Section tone="paper">
        <SectionHeading eyebrow="The path" title="How India entry works" />
        <div className="mt-8 space-y-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="flex items-start gap-5 rounded-xl border border-ink-300 bg-surface p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-900 font-display text-brass-400">{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg text-navy-900">{s.t}</h3>
                  <p className="mt-1 text-ink-700">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section tone="alt">
        <RelatedRail title="Relevant practices" links={[
          { label: "Global Entity Setup", href: "/services/global-entity-setup" },
          { label: "FEMA & RBI", href: "/services/fema-rbi" },
          { label: "International Tax & TP", href: "/services/international-tax-tp" },
          { label: "Corporate Secretarial", href: "/services/corporate-secretarial" },
          { label: "Finance & Accounting Outsourcing", href: "/services/finance-accounting-outsourcing" },
        ]} />
      </Section>
      <CTABand title="Enter India with confidence" intro="Tell us your plans and we'll map the fastest compliant path." />
    </>
  );
}

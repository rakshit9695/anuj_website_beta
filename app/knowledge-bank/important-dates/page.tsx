import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ComplianceCalendar } from "@/components/knowledge/ComplianceCalendar";
import { ComplianceCalendarFull } from "@/components/knowledge/ComplianceCalendarFull";
import { SectionHeading } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Compliance Calendar — Important Dates",
  description: "Statutory due dates across GST, TDS, advance tax, ROC, PF/ESI and FEMA — filter by category and add to your calendar.",
  path: "/knowledge-bank/important-dates",
});

export default function ImportantDates() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Knowledge Bank", href: "/knowledge-bank" }, { name: "Important Dates", href: "/knowledge-bank/important-dates" }]}
        eyebrow="Never miss a deadline"
        title="Compliance calendar"
        intro="Statutory due dates across GST, TDS, income tax, ROC, PF/ESI and FEMA. Filter by category and add any item to your calendar. Verify against the latest notifications."
      />
      <Section tone="paper">
        <SectionHeading eyebrow="At a glance" title="Recurring monthly & annual dates" />
        <div className="mt-6"><ComplianceCalendar /></div>
      </Section>
      <Section tone="alt">
        <SectionHeading
          eyebrow="Full calendar"
          title="Statutory compliance calendar"
          intro="The firm's complete compliance calendar across GST, Income Tax, MCA/ROC, FEMA, RBI/NBFC, SEBI, PF/ESIC, SEZ/STPI and more. Filter by category or search. Verify against the latest notifications before relying on any date."
        />
        <div className="mt-6"><ComplianceCalendarFull /></div>
      </Section>
      <CTABand title="Let ADA manage your compliance calendar" intro="Our outsourcing team keeps every filing on time, so you never miss a date." />
    </>
  );
}

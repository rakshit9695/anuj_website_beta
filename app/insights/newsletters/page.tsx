import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Newsletters",
  description: "Subscribe to ADA's topic-specific newsletters across tax, GST, AIF, FEMA and regulatory.",
  path: "/insights/newsletters",
});

const archive = [
  "Monthly Tax & Assurance Digest — May 2026",
  "GST Update — May 2026",
  "Funds & AIF Briefing — Q1 2026",
  "FEMA & Cross-Border Bulletin — April 2026",
];

export default function Newsletters() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }, { name: "Newsletters", href: "/insights/newsletters" }]}
        eyebrow="Subscribe"
        title="ADA newsletters"
        intro="Topic-specific newsletters delivered to your inbox. Choose the streams that matter to you."
      />
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-xl border border-ink-300 bg-surface-alt p-6">
            <h2 className="font-display text-h2 text-navy-900">Subscribe</h2>
            <p className="mt-2 text-ink-700">Pick your topics — Tax, GST, AIF, FEMA, Regulatory.</p>
            <div className="mt-4"><NewsletterSignup /></div>
          </div>
          <div>
            <SectionHeading eyebrow="Archive" title="Past editions" />
            <ul className="mt-6 space-y-2">
              {archive.map((a) => (
                <li key={a} className="rounded-lg border border-ink-300 bg-surface px-4 py-3 text-sm text-ink-700">
                  {a} <span className="text-ink-500">(placeholder)</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}

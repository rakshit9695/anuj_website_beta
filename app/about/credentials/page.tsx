import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CredentialBadge } from "@/components/ui/Badge";
import { CTABand } from "@/components/ui/CTABand";
import { credentials } from "@/content/firm";

export const metadata: Metadata = buildMetadata({
  title: "Credentials",
  description: "Regulatory registrations, empanelments, ISO certifications and ICAI peer review.",
  path: "/about/credentials",
});

export default function CredentialsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }, { name: "Credentials", href: "/about/credentials" }]}
        eyebrow="Trust"
        title="Credentials & registrations"
        intro="Regulatory registrations, empanelments and certifications. All badges below are indicative placeholders and will be displayed only once the firm confirms each registration."
      />
      <Section tone="paper">
        <SectionHeading eyebrow="Regulators" title="Empanelments & registrations" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((c) => (
            <div key={c.label} className="rounded-xl border border-ink-300 bg-surface p-6">
              <CredentialBadge label={c.label} />
              <p className="mt-3 text-sm text-ink-700">{c.note}</p>
              <p className="mt-1 text-xs text-ink-500">[To be confirmed by the firm]</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="alt">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-ink-300 bg-surface p-6">
            <h3 className="font-display text-lg text-navy-900">ICAI membership</h3>
            <p className="mt-2 text-sm text-ink-700">A firm of Chartered Accountants registered with the Institute of Chartered Accountants of India.</p>
          </div>
          <div className="rounded-xl border border-ink-300 bg-surface p-6">
            <h3 className="font-display text-lg text-navy-900">Peer Review</h3>
            <p className="mt-2 text-sm text-ink-700">Peer-reviewed in accordance with ICAI requirements (certificate placeholder).</p>
          </div>
          <div className="rounded-xl border border-ink-300 bg-surface p-6">
            <h3 className="font-display text-lg text-navy-900">ISO certification</h3>
            <p className="mt-2 text-sm text-ink-700">Quality management certification (placeholder — certificate to be supplied).</p>
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}

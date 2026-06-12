import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { Placeholder } from "@/components/ui/Placeholder";
import { ButtonLink } from "@/components/ui/Button";
import { aboutNav } from "@/content/nav";

export const metadata: Metadata = buildMetadata({
  title: "About ADA",
  description:
    "Anuj Desai & Associates is a client-centric Chartered Accountancy & consulting firm — audit, tax, regulatory, transaction and cross-border advisory under one roof.",
  path: "/about",
});

export default function AboutHub() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }]}
        eyebrow="About ADA"
        title="A Chartered Accountancy & consulting firm, built around the client"
        intro="A client-centric chartered accountancy and consulting firm, bringing together financial, regulatory and business expertise to deliver seamless, end-to-end solutions."
      />

      <Section tone="paper">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our firm</p>
            <h2 className="mt-3 font-display text-h2 text-navy-900">
              Integrated expertise, under one roof
            </h2>
            <p className="mt-4 text-ink-700">
              ADA is a chartered accountancy and consulting firm built around a
              simple principle: clients are best served when financial,
              regulatory and strategic advice work together seamlessly. By
              bringing Chartered Accountancy, Company Secretarial and Cost &amp;
              Management expertise under one roof, we deliver integrated
              solutions across audit, taxation, corporate law, regulatory
              compliance, transaction advisory and cross-border matters.
            </p>
            <p className="mt-3 text-ink-700">
              From its headquarters in Mumbai and through its presence across
              key business centres in India and overseas, ADA serves
              entrepreneurs, promoter-led businesses, family offices, investment
              funds, multinational enterprises and emerging growth companies.
              Our approach combines technical depth, commercial insight and
              partner-led execution, enabling clients to navigate complexity,
              manage risk and pursue growth with confidence.
            </p>
            <p className="mt-3 text-ink-700">
              At the heart of the firm is a commitment to long-term
              relationships, practical advice and uncompromising professional
              standards — providing clients with one trusted team and clear
              accountability across every stage of their business journey.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/about/our-story" variant="secondary">Our story</ButtonLink>
              <ButtonLink href="/about/team" variant="ghost">Meet the founder →</ButtonLink>
            </div>
          </div>
          <Placeholder ratio="4/3" label="Firm / Mumbai" tone="navy" />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Explore" title="Get to know ADA" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutNav.map((n) => (
            <Link key={n.href} href={n.href} className="group flex items-center justify-between rounded-xl border border-ink-300 bg-surface p-5 transition-all hover:border-brass-400 hover:shadow-sm">
              <span className="font-medium text-navy-900">{n.label}</span>
              <ArrowRight className="h-4 w-4 text-ink-300 transition-colors group-hover:text-brass-500" aria-hidden />
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-brass-400/60 bg-brass-100/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-navy-900">Firm profile</p>
            <p className="mt-1 text-sm text-ink-700">Download the full Anuj Desai &amp; Associates profile — services, sectors and approach.</p>
          </div>
          <a
            href="/anuj-desai-associates-firm-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brass-500 px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-brass-600"
          >
            <Download className="h-4 w-4" aria-hidden />
            Firm profile (PDF)
          </a>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

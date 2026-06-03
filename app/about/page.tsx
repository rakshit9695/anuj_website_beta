import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { Placeholder } from "@/components/ui/Placeholder";
import { ButtonLink } from "@/components/ui/Button";
import { aboutNav } from "@/content/nav";
import { stats } from "@/content/stats";

export const metadata: Metadata = buildMetadata({
  title: "About ADA",
  description:
    "Anuj Desai & Associates is India's rare triple-qualified CA · CS · CMA multidisciplinary firm — audit, tax, regulatory and cross-border advisory under one roof.",
  path: "/about",
});

export default function AboutHub() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }]}
        eyebrow="About ADA"
        title="A multidisciplinary firm, built around the client"
        intro="We bring chartered accountancy, company secretarial and cost & management expertise together — so audit, tax, regulatory and cross-border work is handled by one accountable team."
      />

      <Section tone="paper">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our firm</p>
            <h2 className="mt-3 font-display text-h2 text-navy-900">
              {stats[0]?.value}+ years of multidisciplinary excellence
            </h2>
            <p className="mt-4 text-ink-700">
              [Placeholder] From a Mumbai base, ADA has grown into a pan-India firm with global reach, serving founders, promoter families, funds and multinationals. The firm&rsquo;s defining idea is breadth with depth — the rare combination of CA, CS and CMA expertise under one roof.
            </p>
            <p className="mt-3 text-ink-700">
              Replace this section with the firm&rsquo;s approved narrative, history and leadership message.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/about/our-story" variant="secondary">Our story</ButtonLink>
              <ButtonLink href="/about/team" variant="ghost">Meet the team →</ButtonLink>
            </div>
          </div>
          <Placeholder ratio="4/3" label="Firm / Mumbai BKC" tone="navy" />
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
        <div className="mt-8 rounded-xl border border-brass-400/60 bg-brass-100/40 p-6">
          <p className="font-medium text-navy-900">Firm brochure &amp; credentials deck</p>
          <p className="mt-1 text-sm text-ink-700">A downloadable overview of the firm (placeholder PDF — the firm will supply).</p>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

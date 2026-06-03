import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/Icon";
import { Placeholder } from "@/components/ui/Placeholder";
import { ButtonLink } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Careers — Life at ADA",
  description: "Build a multidisciplinary career across CA, CS and CMA practices. Explore roles and articleship at Anuj Desai & Associates.",
  path: "/careers",
});

const benefits = [
  { icon: "Layers", title: "Multidisciplinary exposure", text: "Work across audit, tax, regulatory and advisory — not a single silo." },
  { icon: "TrendingUp", title: "Real growth", text: "Early responsibility, mentorship and a clear path to leadership." },
  { icon: "Globe2", title: "Marquee work", text: "Funds, cross-border deals and listed-company engagements." },
  { icon: "HeartHandshake", title: "Culture", text: "A collegial, ethics-first firm that invests in its people." },
];

export default function CareersHub() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Careers", href: "/careers" }]}
        eyebrow="Life at ADA"
        title="Build a career with real breadth"
        intro="At ADA you work across disciplines on work that matters — with the mentorship to grow fast. (Culture content is placeholder for the firm to complete.)"
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/careers/openings" variant="brass">View openings</ButtonLink>
          <ButtonLink href="/careers/articleship" variant="secondary">Articleship programme</ButtonLink>
        </div>
      </PageHero>
      <Section tone="paper">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Placeholder ratio="4/3" label="Life at ADA" tone="navy" />
          <div>
            <SectionHeading eyebrow="Why join" title="What you'll get" />
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title}>
                  <IconTile name={b.icon} />
                  <h3 className="mt-3 font-display text-lg text-navy-900">{b.title}</h3>
                  <p className="mt-1 text-sm text-ink-700">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section tone="alt">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Current openings", href: "/careers/openings" },
            { label: "Why join ADA", href: "/careers/why-join" },
            { label: "Alumni network", href: "/careers/alumni" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="group flex items-center justify-between rounded-xl border border-ink-300 bg-surface p-5 hover:border-brass-400">
              <span className="font-medium text-navy-900">{l.label}</span>
              <ArrowRight className="h-4 w-4 text-ink-300 transition-colors group-hover:text-brass-500" aria-hidden />
            </Link>
          ))}
        </div>
      </Section>
      <CTABand title="Don't see the right role?" intro="Send us your details and we'll keep you in mind." cta={{ id: "apply", label: "Apply to ADA", href: "/careers/openings", variant: "brass" }} secondary={null} />
    </>
  );
}

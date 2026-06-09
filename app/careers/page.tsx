import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { openings } from "@/content/careers";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description: "Build a multidisciplinary career across audit, tax, regulatory and advisory work at Anuj Desai & Associates. Explore current openings and articleship.",
  path: "/careers",
});

export default function CareersHub() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Careers", href: "/careers" }]}
        eyebrow="Careers"
        title="Work across disciplines, not silos"
        intro="At ADA you work across audit, tax, regulatory and advisory engagements, with the mentorship to grow quickly. Explore current openings and our articleship programme below."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/careers/openings" variant="brass">View openings</ButtonLink>
          <ButtonLink href="/careers/articleship" variant="secondary">Articleship programme</ButtonLink>
        </div>
      </PageHero>

      <Section tone="paper">
        <SectionHeading eyebrow="Open roles" title="Current openings" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {openings.map((o) => (
            <Link
              key={o.slug}
              href={`/careers/openings/${o.slug}`}
              className="group flex flex-col rounded-xl border border-ink-300 bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <h3 className="font-display text-lg text-navy-900">{o.title}</h3>
              <p className="mt-1 text-sm text-ink-500">{o.team} · {o.location} · {o.type}</p>
              <p className="mt-3 flex-1 text-sm text-ink-700">{o.summary}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-navy-700">
                View role <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-500">
          Applications submitted through the role pages reach our team at office@anujdesaiassociates.com.
        </p>
      </Section>

      <CTABand
        title="Don't see the right role?"
        intro="Send us your details and we'll keep you in mind for future openings."
        cta={{ id: "apply", label: "Apply to ADA", href: "/careers/openings", variant: "brass" }}
        secondary={null}
      />
    </>
  );
}

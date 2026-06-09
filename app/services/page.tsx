import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/Cards";
import { CTABand } from "@/components/ui/CTABand";
import { ButtonLink } from "@/components/ui/Button";
import { practiceClusters } from "@/content/nav";

export const metadata: Metadata = buildMetadata({
  title: "Services — Full-spectrum advisory under one roof",
  description:
    "Eighteen practice areas across assurance, tax, regulatory and cross-border, transactions, advisory and sector specialisms — from India's CA · CS · CMA multidisciplinary firm.",
  path: "/services",
});

export default function ServicesLanding() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", href: "/services" }]}
        eyebrow="Our Expertise"
        title="Full-spectrum advisory, under one roof"
        intro="Our integrated CA, CS & CMA team covers eighteen practice areas. Browse by cluster, or tell us your need and we'll point you to the right team."
      >
        <ButtonLink href="/contact?intent=quiz" variant="ghost">
          Not sure which service? Find My Service →
        </ButtonLink>
      </PageHero>

      {practiceClusters.map(({ cluster, practices }, idx) => (
        <Section key={cluster} tone={idx % 2 === 0 ? "paper" : "alt"} id={cluster.toLowerCase().replace(/[^a-z]+/g, "-")}>
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 className="font-display text-h2 text-navy-900">{cluster}</h2>
            <span className="text-sm text-ink-500">{practices.length} {practices.length === 1 ? "practice" : "practices"}</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {practices.map((p) => (
              <ServiceCard key={p.slug} href={`/services/${p.slug}`} icon={p.icon} title={p.title} tagline={p.tagline} />
            ))}
          </div>
        </Section>
      ))}

      <Section tone="navy">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-h2 text-paper">Serving 25 industries</h2>
            <p className="mt-2 max-w-xl text-[#C2CEDD]">
              Our practices combine with deep sector knowledge across technology, funds, manufacturing, BFSI and more.
            </p>
          </div>
          <ButtonLink href="/industries" variant="brass">Explore industries</ButtonLink>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

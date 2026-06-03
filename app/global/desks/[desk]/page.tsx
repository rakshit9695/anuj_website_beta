import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { desks, deskBySlug } from "@/content/global";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { RelatedRail } from "@/components/ui/RelatedRail";
import { CTABand } from "@/components/ui/CTABand";

export function generateStaticParams() {
  return desks.map((d) => ({ desk: d.slug }));
}
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { desk: string } }): Metadata {
  const d = deskBySlug(params.desk);
  if (!d) return {};
  return buildMetadata({ title: d.name, description: d.intro, path: `/global/desks/${d.slug}` });
}

export default function DeskPage({ params }: { params: { desk: string } }) {
  const d = deskBySlug(params.desk);
  if (!d) notFound();
  return (
    <>
      <PageHero
        crumbs={[{ name: "Global Presence", href: "/global" }, { name: d.name, href: `/global/desks/${d.slug}` }]}
        eyebrow="International Desk"
        title={d.name}
        intro={d.intro}
      />
      <Section tone="paper">
        <div className="prose-ada">
          <p>{d.note}</p>
          <p>[Placeholder] Our {d.name.toLowerCase()} provides a single, culturally-fluent point of contact for businesses operating between this region and India — coordinating India entry, tax, FEMA and ongoing compliance with timelines and reporting your head office expects.</p>
          <h2>How we help</h2>
          <ul>
            <li>India entry and entity set-up</li>
            <li>Tax, transfer pricing and treaty advisory</li>
            <li>Accounting, payroll and statutory compliance</li>
            <li>Consolidated reporting to the parent</li>
          </ul>
        </div>
      </Section>
      <Section tone="alt">
        <RelatedRail title="Relevant practices" links={[
          { label: "Global Entity Setup", href: "/services/global-entity-setup" },
          { label: "International Tax & TP", href: "/services/international-tax-tp" },
          { label: "FEMA & RBI", href: "/services/fema-rbi" },
          { label: "Finance & Accounting Outsourcing", href: "/services/finance-accounting-outsourcing" },
        ]} />
      </Section>
      <CTABand title={`Talk to the ${d.name}`} intro={d.intro} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { calculators, calculatorBySlug } from "@/content/calculators";
import { practiceBySlug } from "@/content/practices";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { RelatedRail } from "@/components/ui/RelatedRail";
import { CTABand } from "@/components/ui/CTABand";
import { calcComponents } from "@/components/calculators/registry";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = calculatorBySlug(params.slug);
  if (!c) return {};
  return buildMetadata({ title: c.title, description: c.summary, path: `/knowledge-bank/calculators/${c.slug}` });
}

export default function CalculatorPage({ params }: { params: { slug: string } }) {
  const c = calculatorBySlug(params.slug);
  if (!c) notFound();
  const component = calcComponents[c.slug];
  const practice = c.practice ? practiceBySlug(c.practice) : undefined;

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: c.title, applicationCategory: "FinanceApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }, url: `${site.url}/knowledge-bank/calculators/${c.slug}` }} />
      <PageHero
        crumbs={[{ name: "Knowledge Bank", href: "/knowledge-bank" }, { name: "Calculators", href: "/knowledge-bank/calculators" }, { name: c.title, href: `/knowledge-bank/calculators/${c.slug}` }]}
        eyebrow={c.category}
        title={c.title}
        intro={c.summary}
      />
      <Section tone="paper">
        {component ? (
          component
        ) : (
          <div className="rounded-xl border border-warning/30 bg-warning/5 p-8 text-center">
            <p className="font-display text-xl text-navy-900">This calculator is coming soon</p>
            <p className="mt-2 text-ink-700">The logic for this tool is being finalised. In the meantime, our team can run the numbers for you.</p>
          </div>
        )}
      </Section>
      {practice && (
        <Section tone="alt">
          <RelatedRail
            title="Related services"
            links={[
              { label: practice.title, href: `/services/${practice.slug}`, sub: practice.tagline },
              { label: "All calculators", href: "/knowledge-bank/calculators" },
              { label: "Rate charts", href: "/knowledge-bank/rates" },
            ]}
          />
        </Section>
      )}
      <CTABand />
    </>
  );
}

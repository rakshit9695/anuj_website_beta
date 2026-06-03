import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rateCharts, rateChartBySlug } from "@/content/rates/registry";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { DataTable } from "@/components/ui/DataTable";
import { CTABand } from "@/components/ui/CTABand";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return rateCharts.map((r) => ({ slug: r.slug }));
}
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const r = rateChartBySlug(params.slug);
  if (!r) return {};
  return buildMetadata({ title: r.title, description: r.summary, path: `/knowledge-bank/rates/${r.slug}` });
}

export default function RateChartPage({ params }: { params: { slug: string } }) {
  const r = rateChartBySlug(params.slug);
  if (!r) notFound();
  return (
    <>
      <PageHero
        crumbs={[{ name: "Knowledge Bank", href: "/knowledge-bank" }, { name: "Rates", href: "/knowledge-bank/rates" }, { name: r.title, href: `/knowledge-bank/rates/${r.slug}` }]}
        eyebrow="Reference"
        title={r.title}
        intro={r.summary}
      >
        <p className="text-sm text-ink-500">Last updated {formatDate(r.updated)}</p>
      </PageHero>
      <Section tone="paper">
        <DataTable columns={r.columns} rows={r.rows} />
      </Section>
      <CTABand />
    </>
  );
}

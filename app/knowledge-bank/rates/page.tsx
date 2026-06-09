import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { formatDate } from "@/lib/utils";
import { rateCharts } from "@/content/rates/registry";
import { ReferenceLibrary } from "@/components/knowledge/ReferenceLibrary";

export const metadata: Metadata = buildMetadata({
  title: "Rates & Utilities",
  description: "TDS, income-tax, CII, HSN/GST, depreciation and ROC rate charts — current and editable.",
  path: "/knowledge-bank/rates",
});

export default function RatesIndex() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Knowledge Bank", href: "/knowledge-bank" }, { name: "Rates & Utilities", href: "/knowledge-bank/rates" }]}
        eyebrow="Reference"
        title="Rates & utilities"
        intro="Current rate charts and reference tables, maintained in editable data files. Verify against the latest notifications before relying on them."
      />
      <Section tone="paper">
        <h2 className="font-display text-h2 text-navy-900">Live rate charts</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rateCharts.map((r) => (
            <Link key={r.slug} href={`/knowledge-bank/rates/${r.slug}`} className="group flex flex-col rounded-xl border border-ink-300 bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-card">
              <h3 className="font-display text-lg text-navy-900">{r.title}</h3>
              <p className="mt-1 flex-1 text-sm text-ink-700">{r.summary}</p>
              <p className="mt-2 text-xs text-ink-500">Updated {formatDate(r.updated)}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-navy-700">View chart <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden /></span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <div className="mb-8 max-w-prose">
          <p className="eyebrow">Reference Library</p>
          <p className="mt-3 text-ink-700">
            A complete, expanding reference library across direct &amp; indirect
            tax, corporate, FEMA/RBI, SEBI and business utilities. Linked items
            are live tools; the remainder are being populated. Verify all values
            against the latest notifications before relying on them.
          </p>
        </div>
        <ReferenceLibrary />
      </Section>

      <CTABand />
    </>
  );
}

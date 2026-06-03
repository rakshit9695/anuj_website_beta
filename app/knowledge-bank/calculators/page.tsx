import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { TypeBadge } from "@/components/ui/Badge";
import { CTABand } from "@/components/ui/CTABand";
import { calculators } from "@/content/calculators";

export const metadata: Metadata = buildMetadata({
  title: "Free Calculators",
  description: "Free, accurate Indian tax and finance calculators — income tax, TDS, GST, HRA, capital gains, ESOP and EMI.",
  path: "/knowledge-bank/calculators",
});

export default function CalculatorsIndex() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Knowledge Bank", href: "/knowledge-bank" }, { name: "Calculators", href: "/knowledge-bank/calculators" }]}
        eyebrow="Free Tools"
        title="Calculators"
        intro="Accurate, current Indian tax and finance calculators. For indicative purposes — verify with ADA before acting."
      />
      <Section tone="paper">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((c) => (
            <Link
              key={c.slug}
              href={`/knowledge-bank/calculators/${c.slug}`}
              className="group flex flex-col rounded-xl border border-ink-300 bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-ink-500">{c.category}</span>
                {c.status === "stub" && <TypeBadge label="Coming soon" />}
              </div>
              <h2 className="mt-2 font-display text-lg text-navy-900">{c.title}</h2>
              <p className="mt-1 flex-1 text-sm text-ink-700">{c.summary}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-navy-700">
                {c.status === "live" ? "Open calculator" : "Preview"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

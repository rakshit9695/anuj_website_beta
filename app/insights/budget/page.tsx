import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Budget Analysis",
  description: "ADA's annual Union Budget analysis — direct & indirect tax changes and sector impact.",
  path: "/insights/budget",
});

const editions = [
  { year: "2026-27", href: "/insights/budget/2026-27", live: true },
  { year: "2025-26", href: "/insights/budget", live: false },
  { year: "2024-25", href: "/insights/budget", live: false },
];

export default function BudgetLanding() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }, { name: "Budget", href: "/insights/budget" }]}
        eyebrow="Flagship analysis"
        title="Union Budget analysis"
        intro="Our annual, in-depth analysis of the Union Budget — what changed, and what it means for your business."
      />
      <Section tone="paper">
        <div className="grid gap-5 md:grid-cols-3">
          {editions.map((e) => (
            <Link
              key={e.year}
              href={e.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-ink-300 bg-surface transition-all hover:shadow-card"
            >
              <Placeholder ratio="16/9" label={`Budget ${e.year}`} rounded={false} />
              <div className="p-5">
                <h3 className="font-display text-xl text-navy-900">Budget {e.year}</h3>
                <p className="mt-1 text-sm text-ink-500">{e.live ? "Latest edition" : "Archive (placeholder)"}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-navy-700">
                  Read analysis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

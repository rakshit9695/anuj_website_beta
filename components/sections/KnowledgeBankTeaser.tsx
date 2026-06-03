import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { calculatorBySlug, featuredCalculatorSlugs } from "@/content/calculators";

const iconFor: Record<string, string> = {
  "income-tax": "Receipt",
  "gst-rate": "Percent",
  "capital-gains": "TrendingUp",
  emi: "Calculator",
};

/** Promote the free calculators — strong lead-gen and SEO hook. */
export function KnowledgeBankTeaser() {
  const cards = featuredCalculatorSlugs.map(calculatorBySlug).filter(Boolean);
  return (
    <Section tone="alt">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Free Tools & Resources"
          title="The ADA Knowledge Bank"
          intro="Free calculators, rate charts, a compliance calendar and a full library of acts, rules and forms."
        />
        <ButtonLink href="/knowledge-bank/calculators" variant="ghost">
          Explore all calculators &amp; utilities →
        </ButtonLink>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <Link
            key={c!.slug}
            href={`/knowledge-bank/calculators/${c!.slug}`}
            className="group flex flex-col rounded-xl border border-ink-300 bg-surface p-5 transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <IconTile name={iconFor[c!.slug] ?? "Calculator"} />
            <h3 className="mt-3 font-display text-lg text-navy-900">{c!.title}</h3>
            <p className="mt-1 flex-1 text-sm text-ink-700">{c!.summary}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-navy-700">
              Open tool <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

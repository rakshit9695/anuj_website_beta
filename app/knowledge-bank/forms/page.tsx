import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { RepositoryView } from "@/components/knowledge/RepositoryView";
import { CTABand } from "@/components/ui/CTABand";
import { SectionHeading } from "@/components/ui/Section";
import { ExternalLink } from "lucide-react";
import { forms, formSources } from "@/content/repository";

export const metadata: Metadata = buildMetadata({
  title: "Forms Library",
  description: "Income-tax, GST, ROC, LLP, FEMA and SEBI forms — categorised and downloadable.",
  path: "/knowledge-bank/forms",
});

export default function FormsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Knowledge Bank", href: "/knowledge-bank" }, { name: "Forms", href: "/knowledge-bank/forms" }]} eyebrow="Repository" title="Forms library" intro="Statutory forms across tax, corporate and regulatory filings, each linking to the live source list rather than a portal root." />

      <Section>
        <SectionHeading eyebrow="Official sources" title="Jump straight to the form lists" intro="Curated, regularly-used sources for each domain — open the authoritative list and download the exact form you need." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {formSources.map((s) => (
            <div key={s.group} className="rounded-xl border border-ink-300 bg-surface p-5">
              <h3 className="font-display text-base text-navy-900">{s.group}</h3>
              <ul className="mt-3 space-y-2">
                {s.links.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1.5 text-sm text-navy-700 hover:underline">
                      <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                      <span>{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper"><RepositoryView items={forms} /></Section>
      <CTABand />
    </>
  );
}

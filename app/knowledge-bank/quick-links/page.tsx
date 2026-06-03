import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { quickLinks } from "@/content/repository";

export const metadata: Metadata = buildMetadata({
  title: "Quick Links",
  description: "Curated links to CBDT, MCA, GSTN, RBI, SEBI, IBBI and other official portals.",
  path: "/knowledge-bank/quick-links",
});

export default function QuickLinksPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Knowledge Bank", href: "/knowledge-bank" }, { name: "Quick Links", href: "/knowledge-bank/quick-links" }]}
        eyebrow="Useful portals"
        title="Quick links"
        intro="Direct links to the government and regulatory portals you use most."
      />
      <Section tone="paper">
        <div className="grid gap-6 sm:grid-cols-2">
          {quickLinks.map((g) => (
            <div key={g.group} className="rounded-xl border border-ink-300 bg-surface p-6">
              <h2 className="font-display text-lg text-navy-900">{g.group}</h2>
              <ul className="mt-3 space-y-2">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-navy-700 hover:underline">
                      {l.label} <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

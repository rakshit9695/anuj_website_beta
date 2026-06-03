import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { awards } from "@/content/firm";

export const metadata: Metadata = buildMetadata({
  title: "Awards & Accolades",
  description: "Recognition and industry rankings for Anuj Desai & Associates.",
  path: "/about/awards",
});

export default function AwardsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }, { name: "Awards", href: "/about/awards" }]}
        eyebrow="Recognition"
        title="Awards & accolades"
        intro="Industry rankings and recognitions. (Placeholder entries — to be confirmed and reviewed against ICAI norms before publishing.)"
      />
      <Section tone="paper">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((a, i) => (
            <div key={i} className="rounded-xl border border-ink-300 bg-surface p-6">
              <p className="font-display text-3xl text-brass-600">{a.year}</p>
              <p className="mt-2 font-medium text-navy-900">{a.body}</p>
              <p className="text-sm text-ink-700">{a.category}</p>
              <p className="mt-2 text-xs text-ink-500">{a.note}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

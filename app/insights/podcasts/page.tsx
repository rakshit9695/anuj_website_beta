import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Podcasts",
  description: "The ADA podcast — conversations on tax, funds, regulation and entrepreneurship.",
  path: "/insights/podcasts",
});

const episodes = [
  { title: "Building a fund in India — from idea to first close", guest: "[Guest — placeholder]", duration: "38 min" },
  { title: "What founders get wrong about ESOPs", guest: "[Guest — placeholder]", duration: "29 min" },
  { title: "Cross-border tax in a Pillar Two world", guest: "[Guest — placeholder]", duration: "44 min" },
];

export default function Podcasts() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }, { name: "Podcasts", href: "/insights/podcasts" }]}
        eyebrow="Listen"
        title="The ADA Podcast"
        intro="Conversations with founders, fund managers and advisors. (Episodes and platform links are placeholders.)"
      />
      <Section tone="paper">
        <div className="space-y-4">
          {episodes.map((e, i) => (
            <div key={e.title} className="flex items-center gap-5 rounded-xl border border-ink-300 bg-surface p-4">
              <div className="hidden w-28 shrink-0 sm:block"><Placeholder ratio="1/1" label={`Ep ${i + 1}`} /></div>
              <div className="flex-1">
                <p className="font-display text-lg text-navy-900">{e.title}</p>
                <p className="mt-1 text-sm text-ink-500">{e.guest} · {e.duration}</p>
                <div className="mt-2 flex gap-3 text-sm text-navy-700">
                  <span className="hover:underline">Spotify</span>
                  <span className="hover:underline">Apple Podcasts</span>
                  <span className="hover:underline">YouTube</span>
                  <span className="text-ink-500">(links placeholder)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

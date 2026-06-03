import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { YouTubeFacade } from "@/components/insights/YouTubeFacade";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Videos",
  description: "Interviews, Budget analysis and explainer videos from Anuj Desai & Associates.",
  path: "/media/videos",
});

const videos = [
  "Budget 2026 — first reactions",
  "What is an AIF? A 3-minute explainer",
  "Setting up in GIFT City",
  "Cross-border tax basics for founders",
  "ESOPs and how they're taxed",
  "FEMA filings every startup should know",
];

export default function Videos() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Media", href: "/media" }, { name: "Videos", href: "/media/videos" }]}
        eyebrow="Watch"
        title="Videos"
        intro="Interviews, Budget analysis and explainers. (Video embeds are placeholders — click to load.)"
      />
      <Section tone="paper">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <div key={v}>
              <YouTubeFacade title={v} />
              <p className="mt-2 font-medium text-navy-900">{v}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

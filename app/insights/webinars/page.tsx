import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { YouTubeFacade } from "@/components/insights/YouTubeFacade";
import { ButtonLink } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Webinars",
  description: "Recorded and upcoming webinars from ADA on tax, regulatory and advisory topics.",
  path: "/insights/webinars",
});

const webinars = [
  { title: "Decoding Budget 2026 — direct & indirect tax", speaker: "[ADA Tax Desk]", date: "2026-02-05" },
  { title: "Setting up a Category II AIF — a practical walkthrough", speaker: "[ADA Funds Desk]", date: "2026-01-20" },
  { title: "Pillar Two readiness for Indian groups", speaker: "[ADA International Tax]", date: "2025-12-10" },
];

export default function Webinars() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }, { name: "Webinars", href: "/insights/webinars" }]}
        eyebrow="Watch"
        title="Webinars"
        intro="Recorded sessions and upcoming live webinars. (Video embeds are placeholders — click to load.)"
      >
        <ButtonLink href="/insights/events" variant="secondary">Register for upcoming events</ButtonLink>
      </PageHero>
      <Section tone="paper">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {webinars.map((w) => (
            <div key={w.title}>
              <YouTubeFacade title={w.title} />
              <h3 className="mt-3 font-display text-lg text-navy-900">{w.title}</h3>
              <p className="mt-1 text-sm text-ink-500">{w.speaker} · {formatDate(w.date)}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

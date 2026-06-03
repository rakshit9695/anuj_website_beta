import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Media Room",
  description: "ADA in the news, press releases and videos.",
  path: "/media",
});

const media = ["The Economic Times", "Mint", "CNBC-TV18", "Moneycontrol", "Business Standard"];
const sections = [
  { label: "In the News", href: "/media/news", desc: "External coverage and partner commentary." },
  { label: "Press Releases", href: "/media/press-releases", desc: "Firm announcements and milestones." },
  { label: "Videos", href: "/media/videos", desc: "Interviews, Budget analysis and explainers." },
];

export default function MediaHub() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Media", href: "/media" }]}
        eyebrow="Media room"
        title="ADA in the media"
        intro="Coverage, announcements and videos. (Logos and links are placeholders; confirm rights with the firm.)"
      />
      <Section tone="paper">
        <div className="grid gap-4 md:grid-cols-3">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="group rounded-xl border border-ink-300 bg-surface p-6 transition-all hover:shadow-card">
              <h2 className="font-display text-xl text-navy-900">{s.label}</h2>
              <p className="mt-1 text-sm text-ink-700">{s.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-navy-700">Open <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden /></span>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-ink-500">As featured in</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {media.map((m) => <span key={m} className="text-sm font-medium text-ink-500">{m}</span>)}
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}

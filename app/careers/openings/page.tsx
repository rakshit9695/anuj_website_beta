import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { openings } from "@/content/careers";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Current Openings",
  description: "Open roles at Anuj Desai & Associates across tax, audit, funds and advisory.",
  path: "/careers/openings",
});

export default function Openings() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Careers", href: "/careers" }, { name: "Openings", href: "/careers/openings" }]}
        eyebrow="Join us"
        title="Current openings"
        intro="Roles across our practices. (Placeholder listings — the firm will keep these current.)"
      />
      <Section tone="paper">
        {openings.length === 0 ? (
          <p className="text-ink-500">No open roles right now — check back soon, or send us a speculative application.</p>
        ) : (
          <div className="space-y-4">
            {openings.map((o) => (
              <Link key={o.slug} href={`/careers/openings/${o.slug}`} className="group flex items-center justify-between gap-6 rounded-xl border border-ink-300 bg-surface p-6 transition-all hover:shadow-card">
                <div>
                  <h2 className="font-display text-xl text-navy-900">{o.title}</h2>
                  <p className="mt-1 text-sm text-ink-700">{o.summary}</p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-ink-500">
                    <span className="rounded-full bg-navy-50 px-2 py-0.5 text-navy-700">{o.team}</span>
                    <span>{o.location}</span><span>·</span><span>{o.type}</span><span>·</span><span>Posted {formatDate(o.date)}</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-ink-300 transition-colors group-hover:text-brass-500" aria-hidden />
              </Link>
            ))}
          </div>
        )}
      </Section>
      <CTABand />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { corridors, corridorBySlug } from "@/content/global";
import { practiceBySlug } from "@/content/practices";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { RelatedRail } from "@/components/ui/RelatedRail";
import { CTABand } from "@/components/ui/CTABand";

export function generateStaticParams() {
  return corridors.map((c) => ({ country: c.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { country: string } }): Metadata {
  const c = corridorBySlug(params.country);
  if (!c) return {};
  return buildMetadata({ title: `India–${c.country} advisory`, description: c.intro, path: `/global/${c.slug}` });
}

export default function CorridorPage({ params }: { params: { country: string } }) {
  const c = corridorBySlug(params.country);
  if (!c) notFound();
  const related = c.relatedPractices
    .map(practiceBySlug)
    .filter(Boolean)
    .map((p) => ({ label: p!.title, href: `/services/${p!.slug}`, sub: p!.tagline }));

  return (
    <>
      <PageHero
        crumbs={[{ name: "Global Presence", href: "/global" }, { name: c.country, href: `/global/${c.slug}` }]}
        eyebrow={`${c.flag} India–${c.country} Corridor`}
        title={`${c.country} advisory`}
        intro={c.intro}
      />
      <Section tone="paper">
        <SectionHeading eyebrow="What we do" title={`Services for the ${c.country} corridor`} />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {c.services.map((s) => (
            <div key={s} className="flex items-start gap-3 rounded-xl border border-ink-300 bg-surface p-4 text-sm text-ink-700">
              <Icon name="ChevronRight" className="mt-0.5 h-4 w-4 shrink-0 text-brass-500" />
              {s}
            </div>
          ))}
        </div>
      </Section>
      <Section tone="alt">
        <RelatedRail title="Relevant practices" links={related} />
      </Section>
      <CTABand title={`Talk to our ${c.country} corridor team`} intro={c.intro.slice(0, 150)} />
    </>
  );
}

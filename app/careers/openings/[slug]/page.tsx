import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { openings, openingBySlug } from "@/content/careers";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { CareerForm } from "@/components/forms/CareerForm";
import { JobPostingJsonLd } from "@/components/ui/JsonLd";

export function generateStaticParams() {
  return openings.map((o) => ({ slug: o.slug }));
}
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const o = openingBySlug(params.slug);
  if (!o) return {};
  return buildMetadata({ title: o.title, description: o.summary, path: `/careers/openings/${o.slug}` });
}

export default function OpeningPage({ params }: { params: { slug: string } }) {
  const o = openingBySlug(params.slug);
  if (!o) notFound();
  return (
    <>
      <JobPostingJsonLd title={o.title} description={o.summary} location={o.location} date={o.date} />
      <PageHero
        crumbs={[{ name: "Careers", href: "/careers" }, { name: "Openings", href: "/careers/openings" }, { name: o.title, href: `/careers/openings/${o.slug}` }]}
        eyebrow={`${o.team} · ${o.location} · ${o.type}`}
        title={o.title}
        intro={o.summary}
      />
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <div>
              <SectionHeading eyebrow="The role" title="Responsibilities" as="h2" />
              <ul className="mt-4 space-y-2">
                {o.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-ink-700"><Icon name="ChevronRight" className="mt-1 h-4 w-4 shrink-0 text-brass-500" />{r}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="You" title="Requirements" as="h2" />
              <ul className="mt-4 space-y-2">
                {o.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-ink-700"><Icon name="ChevronRight" className="mt-1 h-4 w-4 shrink-0 text-brass-500" />{r}</li>
                ))}
              </ul>
            </div>
          </div>
          <aside>
            <div className="rounded-xl border border-ink-300 bg-surface-alt p-6">
              <h3 className="font-display text-lg text-navy-900">Apply for this role</h3>
              <div className="mt-4"><CareerForm role={o.title} /></div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

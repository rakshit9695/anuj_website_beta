import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { practiceBySlug, allServicePaths, servicedPagesForPractice } from "@/content/practices";
import { leadMagnetById } from "@/content/leadMagnets";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { FaqAccordion } from "@/components/ui/Accordion";
import { RelatedRail } from "@/components/ui/RelatedRail";
import { CTABand } from "@/components/ui/CTABand";
import { LeadMagnetBlock } from "@/components/forms/LeadMagnetBlock";
import { ServiceJsonLd, FaqJsonLd } from "@/components/ui/JsonLd";
import { ButtonLink } from "@/components/ui/Button";

export function generateStaticParams() {
  return allServicePaths();
}

function resolve(practiceSlug: string, serviceSlug: string) {
  const practice = practiceBySlug(practiceSlug);
  if (!practice) return null;
  const item = practice.groups.flatMap((g) => g.items).find((i) => i.slug === serviceSlug);
  if (!item) return null;
  return { practice, item };
}

export function generateMetadata({ params }: { params: { practice: string; service: string } }): Metadata {
  const r = resolve(params.practice, params.service);
  if (!r) return {};
  return buildMetadata({
    title: `${r.item.name} | ${r.practice.title}`,
    description: r.item.blurb ?? `${r.item.name} — part of ADA's ${r.practice.title} practice.`,
    path: `/services/${params.practice}/${params.service}`,
  });
}

export default function ServicePage({ params }: { params: { practice: string; service: string } }) {
  const r = resolve(params.practice, params.service);
  if (!r) notFound();
  const { practice, item } = r;

  const faqs = practice.faqs.slice(0, 4);
  const siblings = servicedPagesForPractice(practice.slug)
    .filter((s) => s.slug !== item.slug)
    .slice(0, 5)
    .map((s) => ({ label: s.name, href: `/services/${practice.slug}/${s.slug}` }));
  const related = [
    ...siblings,
    { label: `${practice.title} (hub)`, href: `/services/${practice.slug}` },
  ];
  const magnet = practice.leadMagnets.map(leadMagnetById).find(Boolean);

  return (
    <>
      <ServiceJsonLd
        name={item.name}
        description={item.blurb ?? `${item.name} — ${practice.title}`}
        href={`/services/${practice.slug}/${item.slug}`}
      />
      <FaqJsonLd faqs={faqs} />

      <PageHero
        crumbs={[
          { name: "Services", href: "/services" },
          { name: practice.title, href: `/services/${practice.slug}` },
          { name: item.name, href: `/services/${practice.slug}/${item.slug}` },
        ]}
        eyebrow={practice.title}
        title={item.name}
        intro={item.blurb ?? `Part of our ${practice.title} practice. ${practice.tagline}`}
      >
        <ButtonLink href={`/contact?intent=consultation&service=${practice.slug}`} variant="brass">
          Talk to an expert
        </ButtonLink>
      </PageHero>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-10">
            <div>
              <SectionHeading eyebrow="Our approach" title="What's included" as="h2" />
              <ul className="mt-5 space-y-3">
                {[
                  "Scoping and a clear engagement plan tailored to your situation",
                  "Hands-on execution by qualified CA / CS / CMA professionals",
                  "Coordination with related practices where the matter spans disciplines",
                  "Clear, defensible documentation and proactive communication",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3 text-ink-700">
                    <Icon name="ShieldCheck" className="mt-0.5 h-5 w-5 shrink-0 text-brass-600" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading eyebrow="Deliverables" title="What you receive" as="h2" />
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["Advisory note / opinion", "Filed forms & acknowledgements", "Reconciliations & working papers", "A point of contact for follow-through"].map((d) => (
                  <div key={d} className="rounded-xl border border-ink-300 bg-surface p-4 text-sm text-ink-700">{d}</div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="FAQ" title="Frequently asked questions" as="h2" />
              <div className="mt-5">
                <FaqAccordion faqs={faqs} />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-ink-300 bg-surface-alt p-5">
              <h3 className="font-display text-lg text-navy-900">Related tools &amp; forms</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/knowledge-bank/calculators" className="text-navy-700 hover:underline">Calculators</Link></li>
                <li><Link href="/knowledge-bank/forms" className="text-navy-700 hover:underline">Forms library</Link></li>
                <li><Link href="/knowledge-bank/rates" className="text-navy-700 hover:underline">Rate charts</Link></li>
                <li><Link href="/knowledge-bank/important-dates" className="text-navy-700 hover:underline">Compliance calendar</Link></li>
              </ul>
            </div>
            {magnet && <LeadMagnetBlock magnet={magnet} />}
          </aside>
        </div>
      </Section>

      <Section tone="alt">
        <RelatedRail title="Related services" links={related} />
      </Section>

      <CTABand
        title={`Need help with ${item.name.toLowerCase()}?`}
        intro={practice.tagline}
        cta={{ id: "s", label: "Book a Consultation", href: `/contact?intent=consultation&service=${practice.slug}`, variant: "brass" }}
      />
    </>
  );
}

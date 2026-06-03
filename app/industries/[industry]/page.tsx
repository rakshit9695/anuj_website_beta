import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, industryBySlug } from "@/content/industries";
import { practiceBySlug } from "@/content/practices";
import { leadMagnetById } from "@/content/leadMagnets";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { FaqAccordion } from "@/components/ui/Accordion";
import { RelatedRail } from "@/components/ui/RelatedRail";
import { CTABand } from "@/components/ui/CTABand";
import { LeadMagnetBlock } from "@/components/forms/LeadMagnetBlock";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceJsonLd, FaqJsonLd } from "@/components/ui/JsonLd";

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export function generateMetadata({ params }: { params: { industry: string } }): Metadata {
  const i = industryBySlug(params.industry);
  if (!i) return {};
  return buildMetadata({
    title: `${i.title} — audit, tax & advisory`,
    description: i.intro,
    path: `/industries/${i.slug}`,
  });
}

const defaultFaqs = [
  { q: "Which services are most relevant to our sector?", a: "We map your needs to the right mix of audit, tax, regulatory and advisory practices. Most engagements begin with a short scoping conversation to prioritise what matters most for your business." },
  { q: "Do you have experience in our industry?", a: "Yes — we combine practice depth with sector knowledge so the advice reflects how your industry actually operates, from regulation to capital structure to tax." },
  { q: "Can you act as a single point of contact across disciplines?", a: "That is the core of our model. One accountable team coordinates audit, tax, company-law and advisory work, so nothing falls between separate advisors." },
  { q: "How do we get started?", a: "Book a consultation and we'll assess your priorities, flag any compliance risks, and propose a clear plan." },
];

export default function IndustryPage({ params }: { params: { industry: string } }) {
  const i = industryBySlug(params.industry);
  if (!i) notFound();

  const faqs = i.faqs ?? defaultFaqs;
  const related = i.relatedPractices
    .map(practiceBySlug)
    .filter(Boolean)
    .map((p) => ({ label: p!.title, href: `/services/${p!.slug}`, sub: p!.tagline }));
  const magnet = i.leadMagnets.map(leadMagnetById).find(Boolean);

  return (
    <>
      <ServiceJsonLd name={`${i.title} advisory`} description={i.intro} href={`/industries/${i.slug}`} />
      <FaqJsonLd faqs={faqs} />

      <PageHero
        crumbs={[{ name: "Industries", href: "/industries" }, { name: i.title, href: `/industries/${i.slug}` }]}
        eyebrow="Industry"
        title={i.title}
        intro={i.intro}
      >
        <ButtonLink href="/contact?intent=consultation" variant="brass">Talk to an expert</ButtonLink>
      </PageHero>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="The challenge" title="Sector challenges" as="h2" />
            <ul className="mt-5 space-y-3">
              {i.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 text-ink-700">
                  <Icon name="ChevronRight" className="mt-1 h-4 w-4 shrink-0 text-brass-500" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Our response" title="How ADA helps" as="h2" />
            <div className="mt-5 grid gap-3">
              {i.howWeHelp.map((h) => (
                <div key={h.name} className="rounded-xl border border-ink-300 bg-surface p-4">
                  <p className="font-medium text-navy-900">{h.name}</p>
                  {h.blurb && <p className="mt-1 text-sm text-ink-700">{h.blurb}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {magnet && (
        <Section tone="alt">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <SectionHeading eyebrow="Free resource" title={`A head start for ${i.title.toLowerCase()}`} />
            <LeadMagnetBlock magnet={magnet} />
          </div>
        </Section>
      )}

      <Section tone={magnet ? "paper" : "alt"}>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title={`${i.title} — frequently asked questions`} />
          <div className="mt-8"><FaqAccordion faqs={faqs} /></div>
        </div>
      </Section>

      <Section tone={magnet ? "alt" : "paper"}>
        <RelatedRail title="Relevant practices" links={related} />
      </Section>

      <CTABand title={`Work with ADA on ${i.title.toLowerCase()}`} intro={i.intro.slice(0, 160)} />
    </>
  );
}

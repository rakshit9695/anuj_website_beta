import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { practices, practiceBySlug } from "@/content/practices";
import { industryBySlug } from "@/content/industries";
import { leadMagnetById } from "@/content/leadMagnets";
import { getPostsByType } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { CredentialBadge } from "@/components/ui/Badge";
import { FaqAccordion } from "@/components/ui/Accordion";
import { CaseStudyCard } from "@/components/ui/Cards";
import { RelatedRail } from "@/components/ui/RelatedRail";
import { CTABand } from "@/components/ui/CTABand";
import { ButtonLink } from "@/components/ui/Button";
import { LeadMagnetBlock } from "@/components/forms/LeadMagnetBlock";
import { PracticeFlagship } from "@/components/sections/PracticeFlagship";
import { ServiceJsonLd, FaqJsonLd } from "@/components/ui/JsonLd";
import { flags } from "@/lib/flags";

export function generateStaticParams() {
  return practices.map((p) => ({ practice: p.slug }));
}

export function generateMetadata({ params }: { params: { practice: string } }): Metadata {
  const p = practiceBySlug(params.practice);
  if (!p) return {};
  return buildMetadata({
    title: `${p.title} in Mumbai & across India`,
    description: `${p.tagline} ${p.overview}`.slice(0, 320),
    path: `/services/${p.slug}`,
  });
}

export default function PracticeHub({ params }: { params: { practice: string } }) {
  const p = practiceBySlug(params.practice);
  if (!p) notFound();

  const magnet = p.leadMagnets.map(leadMagnetById).find(Boolean);
  const caseStudies = getPostsByType("case-study")
    .filter((c) => c.practice === p.slug)
    .slice(0, 3);
  const fallbackCases = caseStudies.length ? caseStudies : getPostsByType("case-study").slice(0, 2);

  const relatedPractices = p.relatedPractices
    .map(practiceBySlug)
    .filter(Boolean)
    .map((rp) => ({ label: rp!.title, href: `/services/${rp!.slug}`, sub: rp!.tagline }));
  const relatedIndustries = p.industries
    .map(industryBySlug)
    .filter(Boolean)
    .map((i) => ({ label: i!.title, href: `/industries/${i!.slug}` }));

  return (
    <>
      <ServiceJsonLd name={p.title} description={p.tagline} href={`/services/${p.slug}`} />
      <FaqJsonLd faqs={p.faqs} />

      <PageHero
        crumbs={[{ name: "Services", href: "/services" }, { name: p.title, href: `/services/${p.slug}` }]}
        eyebrow={p.cluster}
        title={p.title}
        intro={p.overview}
      >
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href={`/contact?intent=consultation&service=${p.slug}`} variant="brass">
            Talk to an expert
          </ButtonLink>
          {magnet && magnet.href && (
            <ButtonLink href={magnet.href} variant="secondary">
              {magnet.title}
            </ButtonLink>
          )}
          {p.credentialBadge && flags.SHOW_CREDENTIAL_BADGES && (
            <CredentialBadge label={p.credentialBadge} />
          )}
        </div>
      </PageHero>

      {/* Sub-practice groups */}
      <Section tone="paper">
        <SectionHeading eyebrow="What we do" title={`${p.title} services`} />
        <div className="mt-8 space-y-8">
          {p.groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-display text-xl text-navy-900">{g.title}</h3>
              <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-2 text-sm text-ink-700">
                    <Icon name="ChevronRight" className="mt-1 h-3.5 w-3.5 shrink-0 text-brass-500" />
                    {item.slug ? (
                      <Link href={`/services/${p.slug}/${item.slug}`} className="hover:text-navy-900 hover:underline">
                        {item.name}
                      </Link>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <PracticeFlagship slug={p.slug} />

      {/* Lead magnet */}
      {magnet && (
        <Section tone={p.flagship ? "paper" : "alt"}>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading eyebrow="Free resource" title="Take the next step with a free tool or guide" />
              <p className="mt-3 text-ink-700">
                Practical, accurate resources from our {p.title.toLowerCase()} team — built to give you a head start.
              </p>
            </div>
            <LeadMagnetBlock magnet={magnet} />
          </div>
        </Section>
      )}

      {/* Case studies */}
      <Section tone={magnet ? (p.flagship ? "alt" : "paper") : "alt"}>
        <SectionHeading eyebrow="Outcomes" title={`Selected ${p.title.toLowerCase()} engagements`} intro="Anonymised outcomes; we never name clients." />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {fallbackCases.map((c) => (
            <CaseStudyCard key={c.slug} metric={c.metric ?? c.title} sector={c.sector ?? "Advisory"} context={c.excerpt} href={`/insights/case-studies/${c.slug}`} />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title={`${p.title} — frequently asked questions`} />
          <div className="mt-8">
            <FaqAccordion faqs={p.faqs} />
          </div>
        </div>
      </Section>

      {/* Related */}
      <Section tone="alt">
        <RelatedRail title="Related practices" links={relatedPractices} />
        {relatedIndustries.length > 0 && (
          <div className="mt-10">
            <RelatedRail eyebrow="Sectors" title="Industries we serve here" links={relatedIndustries} columns={3} />
          </div>
        )}
      </Section>

      <CTABand
        title={`Speak to our ${p.title} team`}
        intro={p.tagline}
        cta={{ id: "p", label: "Book a Consultation", toned: "Book a Consultation", href: `/contact?intent=consultation&service=${p.slug}`, variant: "brass" }}
      />
    </>
  );
}

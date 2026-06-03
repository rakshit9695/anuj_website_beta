import { Section, SectionHeading } from "@/components/ui/Section";
import { CaseStudyCard } from "@/components/ui/Cards";
import { ButtonLink } from "@/components/ui/Button";
import { getPostsByType } from "@/lib/content";

export function CaseStudiesHome() {
  const studies = getPostsByType("case-study").slice(0, 3);
  return (
    <Section tone="alt">
      <SectionHeading
        eyebrow="Outcomes"
        title="Selected engagements"
        intro="Anonymised outcomes from recent work. We never name clients."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {studies.map((s) => (
          <CaseStudyCard
            key={s.slug}
            metric={s.metric ?? s.title}
            sector={s.sector ?? "Advisory"}
            context={s.excerpt}
            href={`/insights/case-studies/${s.slug}`}
          />
        ))}
      </div>
      <div className="mt-8">
        <ButtonLink href="/insights/case-studies" variant="ghost">
          More case studies →
        </ButtonLink>
      </div>
    </Section>
  );
}

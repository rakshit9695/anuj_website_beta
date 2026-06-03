import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CaseStudyCard } from "@/components/ui/Cards";
import { CTABand } from "@/components/ui/CTABand";
import { getPostsByType } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description: "Anonymised engagement stories — challenge, approach and outcome. We never name clients.",
  path: "/insights/case-studies",
});

export default function CaseStudiesIndex() {
  const studies = getPostsByType("case-study");
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }, { name: "Case Studies", href: "/insights/case-studies" }]}
        eyebrow="Outcomes"
        title="Case studies"
        intro="Selected engagements, anonymised. Outcomes depend on facts and are not a guarantee of results."
      />
      <Section tone="paper">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((s) => (
            <CaseStudyCard key={s.slug} metric={s.metric ?? s.title} sector={s.sector ?? "Advisory"} context={s.excerpt} href={`/insights/case-studies/${s.slug}`} />
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

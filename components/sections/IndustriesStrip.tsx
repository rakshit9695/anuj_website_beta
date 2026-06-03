import { Section, SectionHeading } from "@/components/ui/Section";
import { IndustryCard } from "@/components/ui/Cards";
import { ButtonLink } from "@/components/ui/Button";
import { industries } from "@/content/industries";

/** Dense icon+label grid of all 25 industries. */
export function IndustriesStrip() {
  return (
    <Section tone="paper">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Sector depth across 25 industries"
        intro="From startups and funds to manufacturing, BFSI and infrastructure — advice shaped by how your sector actually works."
      />
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {industries.map((i) => (
          <IndustryCard key={i.slug} href={`/industries/${i.slug}`} icon={i.icon} title={i.title} />
        ))}
      </div>
      <div className="mt-8">
        <ButtonLink href="/industries" variant="ghost">
          View all industries →
        </ButtonLink>
      </div>
    </Section>
  );
}

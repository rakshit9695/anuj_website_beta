import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PersonCard } from "@/components/ui/Cards";
import { CTABand } from "@/components/ui/CTABand";
import { leadership, wider } from "@/content/team";

export const metadata: Metadata = buildMetadata({
  title: "Our Team",
  description: "Meet the leadership and professionals of Anuj Desai & Associates.",
  path: "/about/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }, { name: "Team", href: "/about/team" }]}
        eyebrow="Our people"
        title="The team behind the firm"
        intro="A multidisciplinary group of chartered accountants, company secretaries and cost & management accountants. (Placeholder profiles — the firm will supply real bios and photos.)"
      />
      <Section tone="paper">
        <SectionHeading eyebrow="Leadership" title="Senior management & practice leadership" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {leadership.map((m) => (
            <PersonCard key={m.slug} href={`/about/team/${m.slug}`} name={m.name} role={m.role} qualifications={m.qualifications} />
          ))}
        </div>
      </Section>
      <Section tone="alt">
        <SectionHeading eyebrow="The wider team" title="Managers & specialists" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wider.map((m) => (
            <PersonCard key={m.slug} name={m.name} role={m.role} qualifications={m.qualifications} />
          ))}
        </div>
      </Section>
      <CTABand title="Want to join the team?" intro="We're always interested in talented professionals and articleship candidates." cta={{ id: "careers", label: "See careers at ADA", href: "/careers", variant: "brass" }} secondary={null} />
    </>
  );
}

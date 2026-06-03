import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { CareerForm } from "@/components/forms/CareerForm";

export const metadata: Metadata = buildMetadata({
  title: "Articleship at ADA",
  description: "Train across audit, tax, regulatory and advisory in a multidisciplinary articleship programme.",
  path: "/careers/articleship",
});

const highlights = [
  "Rotation across audit, tax and regulatory practices",
  "Exposure to funds, cross-border and listed-company work",
  "Structured mentorship from qualified professionals",
  "Support for CA / CS / CMA examinations",
];

export default function Articleship() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Careers", href: "/careers" }, { name: "Articleship", href: "/careers/articleship" }]}
        eyebrow="Train with the best"
        title="Articleship programme"
        intro="A multidisciplinary articleship that gives you breadth few firms can — across audit, tax, regulatory and advisory."
      />
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading eyebrow="The programme" title="What you'll experience" as="h2" />
            <ul className="mt-5 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-ink-700"><Icon name="ChevronRight" className="mt-1 h-4 w-4 shrink-0 text-brass-500" />{h}</li>
              ))}
            </ul>
          </div>
          <aside>
            <div className="rounded-xl border border-ink-300 bg-surface-alt p-6">
              <h3 className="font-display text-lg text-navy-900">Apply for articleship</h3>
              <div className="mt-4"><CareerForm articleship /></div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

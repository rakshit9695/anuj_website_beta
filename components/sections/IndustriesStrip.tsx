import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { industryCategories } from "@/content/industries";

const chipBase =
  "rounded-full border border-ink-300 bg-surface px-3 py-1.5 text-sm text-navy-800 transition-colors";

/** Industries presented as sector categories (client direction). */
export function IndustriesStrip() {
  return (
    <Section tone="paper">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Sector expertise, organised the way you think about your business"
        intro="From financial services and technology to manufacturing, infrastructure and social impact — advice shaped by how your sector actually works."
      />
      <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {industryCategories.map((cat) => (
          <div key={cat.group}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-brass-600">
              {cat.group}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {cat.items.map((item) =>
                item.slug ? (
                  <Link
                    key={item.label}
                    href={`/industries/${item.slug}`}
                    className={`${chipBase} hover:border-navy-700 hover:text-navy-900`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span key={item.label} className={chipBase}>
                    {item.label}
                  </span>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <ButtonLink href="/industries" variant="ghost">
          View all industries →
        </ButtonLink>
      </div>
    </Section>
  );
}

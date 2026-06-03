import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/Icon";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Why Join ADA",
  description: "Growth, exposure across CA/CS/CMA practices and mentorship — why talented professionals choose ADA.",
  path: "/careers/why-join",
});

const reasons = [
  { icon: "Layers", title: "Breadth you won't get elsewhere", text: "Work across disciplines instead of being boxed into one." },
  { icon: "Target", title: "Ownership early", text: "Real client responsibility from the start, with support." },
  { icon: "TrendingUp", title: "A clear path", text: "Transparent progression toward managership and partnership." },
  { icon: "ShieldCheck", title: "Ethics-first", text: "A firm that puts professional integrity above shortcuts." },
];

export default function WhyJoin() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Careers", href: "/careers" }, { name: "Why Join", href: "/careers/why-join" }]}
        eyebrow="Your growth"
        title="Why join ADA"
        intro="A multidisciplinary firm where you grow faster, see more, and are trusted sooner. (Placeholder EVP copy.)"
      />
      <Section tone="paper">
        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-xl border border-ink-300 bg-surface p-6">
              <IconTile name={r.icon} />
              <h3 className="mt-3 font-display text-lg text-navy-900">{r.title}</h3>
              <p className="mt-1 text-sm text-ink-700">{r.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand title="Ready to grow with us?" intro="Explore our open roles and articleship programme." cta={{ id: "o", label: "View openings", href: "/careers/openings", variant: "brass" }} secondary={null} />
    </>
  );
}

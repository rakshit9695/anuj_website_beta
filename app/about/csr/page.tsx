import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/Icon";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "CSR & Sustainability",
  description: "The firm's CSR initiatives and its own sustainability commitments.",
  path: "/about/csr",
});

const focus = [
  { icon: "GraduationCap", title: "Education & skilling", text: "[Placeholder] Supporting access to education and professional skilling." },
  { icon: "HeartHandshake", title: "Community & health", text: "[Placeholder] Community health and welfare initiatives." },
  { icon: "Leaf", title: "Environment", text: "[Placeholder] Reducing our footprint and supporting green initiatives." },
];

export default function CsrPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }, { name: "CSR", href: "/about/csr" }]}
        eyebrow="Responsibility"
        title="CSR & sustainability"
        intro="Our community initiatives and our own sustainability commitments. (Distinct from our ESG advisory service.) Placeholder content for the firm to complete."
      />
      <Section tone="paper">
        <SectionHeading eyebrow="Our focus" title="Where we contribute" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {focus.map((f) => (
            <div key={f.title} className="rounded-xl border border-ink-300 bg-surface p-6">
              <IconTile name={f.icon} />
              <h3 className="mt-4 font-display text-lg text-navy-900">{f.title}</h3>
              <p className="mt-1 text-sm text-ink-700">{f.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-xl border border-brass-400/60 bg-brass-100/40 p-6">
          <p className="font-medium text-navy-900">CSR policy</p>
          <p className="mt-1 text-sm text-ink-700">Download our CSR policy (placeholder PDF — the firm will supply).</p>
        </div>
      </Section>
      <CTABand />
    </>
  );
}

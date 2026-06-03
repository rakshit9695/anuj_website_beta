import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Alumni Network",
  description: "Stay connected with the ADA alumni network.",
  path: "/careers/alumni",
});

export default function Alumni() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Careers", href: "/careers" }, { name: "Alumni", href: "/careers/alumni" }]}
        eyebrow="Once ADA, always ADA"
        title="Alumni network"
        intro="Our alumni go on to lead finance teams, build companies and join the profession's best firms. Stay connected. (Placeholder content.)"
      />
      <Section tone="paper">
        <div className="mx-auto max-w-xl rounded-xl border border-ink-300 bg-surface-alt p-8 text-center">
          <h2 className="font-display text-h2 text-navy-900">Join the alumni list</h2>
          <p className="mt-2 text-ink-700">Get alumni news, events and opportunities.</p>
          <div className="mt-5"><NewsletterSignup compact /></div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Code of Ethics",
  description: "Our commitment to professional ethics, independence and conduct.",
  path: "/about/code-of-ethics",
});

export default function CodeOfEthics() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }, { name: "Code of Ethics", href: "/about/code-of-ethics" }]}
        eyebrow="Trust"
        title="Code of ethics & professional conduct"
        intro="We operate within the ICAI Code of Ethics and hold independence and integrity above commercial expedience."
      />
      <Section tone="paper">
        <div className="prose-ada mx-auto">
          <p><em>[Placeholder — the firm will supply its approved code of conduct.]</em></p>
          <h2>Independence</h2>
          <p>We maintain auditor independence in line with section 144 of the Companies Act and the ICAI Code, and decline engagements that would create a conflict.</p>
          <h2>Confidentiality</h2>
          <p>Client information is held in strict confidence and processed in line with the DPDP Act and our data-protection commitments.</p>
          <h2>Integrity & objectivity</h2>
          <p>We provide advice that is technically correct and defensible, free from undue influence.</p>
          <p>A downloadable copy of our full policy is available on request (placeholder).</p>
        </div>
      </Section>
      <CTABand />
    </>
  );
}

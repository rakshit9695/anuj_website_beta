import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms governing the use of the Anuj Desai & Associates website.",
  path: "/legal/terms",
});

export default function Terms() {
  return (
    <>
      <PageHero crumbs={[{ name: "Terms & Conditions", href: "/legal/terms" }]} eyebrow="Legal" title="Terms & Conditions" intro="Placeholder terms for legal review." />
      <Section tone="paper">
        <div className="prose-ada mx-auto">
          <p><em>[CLIENT TO PROVIDE — final terms of use.]</em></p>
          <h2>1. Use of this site</h2>
          <p>This website is provided for general information about our firm and services. By using it you agree to these terms.</p>
          <h2>2. No professional advice</h2>
          <p>Content on this site — including calculators and articles — is for general information only and does not constitute professional advice. Engage us formally for advice on your specific situation.</p>
          <h2>3. Intellectual property</h2>
          <p>All content is owned by the firm or its licensors and may not be reproduced without permission.</p>
          <h2>4. Limitation of liability</h2>
          <p>To the extent permitted by law, we are not liable for any loss arising from reliance on website content.</p>
          <h2>5. Governing law</h2>
          <p>These terms are governed by the laws of India, subject to the jurisdiction of the courts at Mumbai.</p>
        </div>
      </Section>
    </>
  );
}

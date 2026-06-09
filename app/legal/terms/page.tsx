import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms governing the use of the Anuj Desai & Associates website.",
  path: "/legal/terms",
});

export default function Terms() {
  return (
    <>
      <PageHero crumbs={[{ name: "Terms of Use", href: "/legal/terms" }]} eyebrow="Legal" title="Terms of Use" intro="By accessing this website, you agree to these Terms of Use." />
      <Section tone="paper">
        <div className="prose-ada mx-auto">
          <h2>Informational Purpose Only</h2>
          <p>The information provided on this website is for general informational purposes only and does not constitute professional, legal, tax, accounting, financial, investment or regulatory advice.</p>

          <h2>No Client Relationship</h2>
          <p>Use of this website, submission of forms, emails or inquiries does not create a client-professional relationship unless formally agreed through an executed engagement arrangement.</p>

          <h2>Intellectual Property</h2>
          <p>All website content, including text, graphics, branding, logos and materials, is owned by or licensed to Anuj Desai &amp; Associates and may not be reproduced without permission.</p>

          <h2>Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Anuj Desai &amp; Associates shall not be liable for any direct, indirect, incidental, consequential or special damages arising from the use of this website or reliance on its contents.</p>

          <h2>Modifications</h2>
          <p>We reserve the right to modify these Terms at any time without prior notice.</p>

          <h2>Governing Law</h2>
          <p>These Terms shall be governed by the laws of India, and disputes shall be subject to the jurisdiction of courts located in Mumbai, Maharashtra.</p>
        </div>
      </Section>
    </>
  );
}

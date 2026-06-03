import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Anuj Desai & Associates collects, uses and protects your personal data, aligned to the DPDP Act.",
  path: "/legal/privacy",
});

export default function Privacy() {
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy Policy", href: "/legal/privacy" }]} eyebrow="Legal" title="Privacy Policy" intro="Placeholder policy for legal review. Aligned to India's Digital Personal Data Protection Act, 2023." />
      <Section tone="paper">
        <div className="prose-ada mx-auto">
          <p><em>[CLIENT TO PROVIDE — final, lawyer-reviewed privacy policy. The structure below is a starting point.]</em></p>
          <h2>1. Who we are</h2>
          <p>{site.name} (&ldquo;ADA&rdquo;, &ldquo;we&rdquo;) is the data fiduciary for personal data collected through this website.</p>
          <h2>2. What we collect</h2>
          <p>Contact details you submit through our forms (name, email, phone, company), the content of your enquiry, and limited technical data (with consent) for analytics.</p>
          <h2>3. How we use it</h2>
          <p>To respond to your enquiry, provide our services, send you material you request, and improve the website. We process data on the basis of your consent and our legitimate professional interests.</p>
          <h2>4. Cookies & analytics</h2>
          <p>We load analytics and marketing cookies only after you consent via our cookie banner. You can change your choice at any time using &ldquo;Cookie settings&rdquo; in the footer.</p>
          <h2>5. Your rights (DPDP Act)</h2>
          <p>You may request access to, correction of, or erasure of your personal data, and may withdraw consent. Contact us at {site.email}.</p>
          <h2>6. Retention & security</h2>
          <p>We retain data only as long as necessary and apply appropriate technical and organisational safeguards.</p>
          <h2>7. Contact</h2>
          <p>For privacy queries, email {site.email}.</p>
        </div>
      </Section>
    </>
  );
}

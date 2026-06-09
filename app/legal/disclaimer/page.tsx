import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description: "Professional disclaimer for the Anuj Desai & Associates website, consistent with ICAI guidelines.",
  path: "/legal/disclaimer",
});

export default function Disclaimer() {
  return (
    <>
      <PageHero crumbs={[{ name: "Disclaimer", href: "/legal/disclaimer" }]} eyebrow="Legal" title="Disclaimer" intro="Please read this disclaimer carefully before using this website." />
      <Section tone="paper">
        <div className="prose-ada mx-auto">
          <p>This website is intended to provide general information about Anuj Desai &amp; Associates and is not an advertisement or solicitation of work. By accessing this site, the user acknowledges that there has been no inducement, advertisement or solicitation of any sort whatsoever from the firm to create a professional relationship.</p>

          <h2>Professional Disclaimer</h2>
          <p>The content published on this website is intended solely for informational and educational purposes.</p>
          <p>Nothing contained on this website should be construed as professional advice, legal advice, tax advice, investment advice, accounting advice or a recommendation to undertake any specific course of action.</p>
          <p>Professional advice should always be obtained based on the specific facts and circumstances of each matter.</p>

          <h2>Regulatory Disclaimer</h2>
          <p>Any references to services, experience, sectors or technical expertise are intended to provide general information regarding the Firm&rsquo;s capabilities and should not be interpreted as guarantees of future outcomes.</p>
          <p>Past experience does not guarantee future results.</p>

          <h2>No Warranty</h2>
          <p>While reasonable efforts are made to ensure accuracy, Anuj Desai &amp; Associates makes no representations or warranties regarding the completeness, accuracy, reliability or suitability of any information available on this website.</p>
          <p>Users rely on website content entirely at their own risk.</p>

          <h2>Contact</h2>
          <p>
            For any questions regarding this policy or disclaimer, please contact:<br />
            Anuj Desai &amp; Associates<br />
            Email: anujdesaioff@gmail.com<br />
            Phone: +91 96194 56656
          </p>
        </div>
      </Section>
    </>
  );
}

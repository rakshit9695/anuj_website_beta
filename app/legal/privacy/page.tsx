import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Anuj Desai & Associates collects, uses and protects the personal information you provide through this website.",
  path: "/legal/privacy",
});

export default function Privacy() {
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy Policy", href: "/legal/privacy" }]} eyebrow="Legal" title="Privacy Policy" intro="How we collect, use and protect the personal information you provide through this website." />
      <Section tone="paper">
        <div className="prose-ada mx-auto">
          <p>
            Anuj Desai &amp; Associates (&ldquo;Firm&rdquo;, &ldquo;we&rdquo;,
            &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is
            committed to protecting the personal information you provide through
            this website.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Telephone number</li>
            <li>Company information</li>
            <li>Information submitted through contact forms</li>
            <li>Information voluntarily provided during inquiries or engagements</li>
          </ul>
          <p>We may also collect certain technical information such as IP address, browser type, device information and website usage data.</p>

          <h2>How We Use Information</h2>
          <p>We may use collected information to:</p>
          <ul>
            <li>Respond to inquiries</li>
            <li>Provide professional services</li>
            <li>Communicate updates regarding our services</li>
            <li>Improve website performance and user experience</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>We do not sell personal information.</p>
          <p>Information may be shared with employees, consultants, service providers, regulators or governmental authorities where necessary for providing services or complying with legal obligations.</p>

          <h2>Data Security</h2>
          <p>We implement reasonable administrative, technical and physical safeguards to protect information from unauthorized access, disclosure, alteration or destruction.</p>

          <h2>Third-Party Links</h2>
          <p>This website may contain links to third-party websites. We are not responsible for their privacy practices or content.</p>

          <h2>Contact</h2>
          <p>
            For privacy-related inquiries, please contact:<br />
            Anuj Desai &amp; Associates<br />
            Email: anujdesaioff@gmail.com<br />
            Phone: +91 96194 56656
          </p>
        </div>
      </Section>
    </>
  );
}

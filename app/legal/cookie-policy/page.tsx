import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CookieSettingsLink } from "@/components/layout/FooterClient";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How Anuj Desai & Associates uses cookies and how to manage your preferences.",
  path: "/legal/cookie-policy",
});

export default function CookiePolicy() {
  return (
    <>
      <PageHero crumbs={[{ name: "Cookie Policy", href: "/legal/cookie-policy" }]} eyebrow="Legal" title="Cookie Policy" intro="How we use cookies, and how to manage them." />
      <Section tone="paper">
        <div className="prose-ada mx-auto">
          <p><em>[CLIENT TO PROVIDE — final cookie policy.]</em></p>
          <h2>Categories of cookies</h2>
          <ul>
            <li><strong>Necessary</strong> — required for the site to function; always on.</li>
            <li><strong>Analytics</strong> — help us understand usage (e.g. GA4); loaded only with consent.</li>
            <li><strong>Marketing</strong> — used for retargeting (e.g. Meta, LinkedIn); loaded only with consent.</li>
          </ul>
          <h2>Managing your choices</h2>
          <p>We do not load analytics or marketing cookies until you accept them. You can change your choice at any time:</p>
          <p><CookieSettingsLink /></p>
        </div>
      </Section>
    </>
  );
}

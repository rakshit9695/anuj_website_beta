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
      <PageHero crumbs={[{ name: "Disclaimer", href: "/legal/disclaimer" }]} eyebrow="Legal" title="Disclaimer" intro="Placeholder professional disclaimer for review against ICAI guidelines." />
      <Section tone="paper">
        <div className="prose-ada mx-auto">
          <p><em>[CLIENT TO PROVIDE — final disclaimer reviewed against the ICAI Code of Ethics.]</em></p>
          <p>This website is intended to provide general information about Anuj Desai &amp; Associates and is not an advertisement or solicitation of work. By accessing this site, the user acknowledges that there has been no inducement, advertisement or solicitation of any sort whatsoever from the firm to create a professional relationship.</p>
          <p>The information on this site is not professional advice and should not be relied upon as a substitute for advice tailored to your circumstances. The firm is not liable for any consequence of action taken by relying on the material on this website.</p>
          <p>Calculators and tools are provided for indicative purposes only and use rules current at the time of publication; verify your position with the firm before acting.</p>
        </div>
      </Section>
    </>
  );
}

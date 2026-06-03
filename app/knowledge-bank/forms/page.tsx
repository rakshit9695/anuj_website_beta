import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { RepositoryView } from "@/components/knowledge/RepositoryView";
import { CTABand } from "@/components/ui/CTABand";
import { forms } from "@/content/repository";

export const metadata: Metadata = buildMetadata({
  title: "Forms Library",
  description: "Income-tax, GST, ROC, LLP, FEMA and SEBI forms — categorised and downloadable.",
  path: "/knowledge-bank/forms",
});

export default function FormsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Knowledge Bank", href: "/knowledge-bank" }, { name: "Forms", href: "/knowledge-bank/forms" }]} eyebrow="Repository" title="Forms library" intro="Statutory forms across tax, corporate and regulatory filings, with links to official portals." />
      <Section tone="paper"><RepositoryView items={forms} /></Section>
      <CTABand />
    </>
  );
}

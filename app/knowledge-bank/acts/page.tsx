import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { RepositoryView } from "@/components/knowledge/RepositoryView";
import { CTABand } from "@/components/ui/CTABand";
import { acts } from "@/content/repository";

export const metadata: Metadata = buildMetadata({
  title: "Acts Repository",
  description: "Browse key Indian acts — Income Tax, Companies, GST, FEMA, IBC, SEBI and more.",
  path: "/knowledge-bank/acts",
});

export default function ActsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Knowledge Bank", href: "/knowledge-bank" }, { name: "Acts", href: "/knowledge-bank/acts" }]} eyebrow="Repository" title="Acts" intro="Key legislation, with links to official sources." />
      <Section tone="paper"><RepositoryView items={acts} /></Section>
      <CTABand />
    </>
  );
}

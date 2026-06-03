import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { RepositoryView } from "@/components/knowledge/RepositoryView";
import { CTABand } from "@/components/ui/CTABand";
import { rules } from "@/content/repository";

export const metadata: Metadata = buildMetadata({
  title: "Rules Repository",
  description: "CGST, Income-tax, Companies, LLP and FEMA rules with official links.",
  path: "/knowledge-bank/rules",
});

export default function RulesPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Knowledge Bank", href: "/knowledge-bank" }, { name: "Rules", href: "/knowledge-bank/rules" }]} eyebrow="Repository" title="Rules" intro="Subordinate legislation and rules, with links to official sources." />
      <Section tone="paper"><RepositoryView items={rules} /></Section>
      <CTABand />
    </>
  );
}

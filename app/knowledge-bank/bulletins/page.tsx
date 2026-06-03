import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Bulletins } from "@/components/knowledge/Bulletins";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Regulatory Bulletins",
  description: "Category-wise regulatory bulletins across RBI/SEBI, GST, Income Tax, FEMA, IBC and Labour.",
  path: "/knowledge-bank/bulletins",
});

export default function BulletinsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Knowledge Bank", href: "/knowledge-bank" }, { name: "Bulletins", href: "/knowledge-bank/bulletins" }]}
        eyebrow="Stay current"
        title="Regulatory bulletins"
        intro="Updates across the major regulators, filterable by stream. Search by keyword."
      />
      <Section tone="paper"><Bulletins /></Section>
      <CTABand />
    </>
  );
}

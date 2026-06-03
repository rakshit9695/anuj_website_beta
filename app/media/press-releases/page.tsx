import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PostGrid } from "@/components/insights/PostGrid";
import { CTABand } from "@/components/ui/CTABand";
import { getPostsByType } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Press Releases",
  description: "Official announcements and milestones from Anuj Desai & Associates.",
  path: "/media/press-releases",
});

export default function PressReleases() {
  const items = getPostsByType("press");
  return (
    <>
      <PageHero
        crumbs={[{ name: "Media", href: "/media" }, { name: "Press Releases", href: "/media/press-releases" }]}
        eyebrow="Announcements"
        title="Press releases"
        intro="Firm announcements and milestones. (Placeholder content for the firm to replace.)"
      />
      <Section tone="paper">
        <PostGrid posts={items} basePath="/media/press-releases" />
      </Section>
      <CTABand />
    </>
  );
}

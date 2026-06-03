import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PostGrid } from "@/components/insights/PostGrid";
import { CTABand } from "@/components/ui/CTABand";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Thought Leadership",
  description: "Perspective and analysis from ADA's experts on the issues shaping Indian business.",
  path: "/insights/thought-leadership",
});

export default function ThoughtLeadership() {
  const posts = getAllPosts().filter((p) => ["blog", "whitepaper"].includes(p.type)).slice(0, 9);
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }, { name: "Thought Leadership", href: "/insights/thought-leadership" }]}
        eyebrow="Perspective"
        title="Thought leadership"
        intro="Considered views on the regulatory, tax and capital-market changes shaping Indian business."
      />
      <Section tone="paper">
        <PostGrid posts={posts} basePath="/insights/blog" />
      </Section>
      <CTABand />
    </>
  );
}

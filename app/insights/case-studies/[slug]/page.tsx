import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsByType, getPost } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { ArticleView } from "@/components/insights/ArticleView";

export function generateStaticParams() {
  return getPostsByType("case-study").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost("case-study", params.slug);
  if (!p) return {};
  return buildMetadata({ title: p.title, description: p.excerpt, path: `/insights/case-studies/${p.slug}`, type: "article" });
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const post = getPost("case-study", params.slug);
  if (!post) notFound();
  return <ArticleView post={post} basePath="/insights/case-studies" />;
}

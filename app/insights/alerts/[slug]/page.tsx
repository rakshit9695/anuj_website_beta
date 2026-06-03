import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsByType, getPost } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { ArticleView } from "@/components/insights/ArticleView";

export function generateStaticParams() {
  return getPostsByType("alert").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost("alert", params.slug);
  if (!p) return {};
  return buildMetadata({ title: p.title, description: p.excerpt, path: `/insights/alerts/${p.slug}`, type: "article" });
}

export default function AlertPage({ params }: { params: { slug: string } }) {
  const post = getPost("alert", params.slug);
  if (!post) notFound();
  return <ArticleView post={post} basePath="/insights/alerts" />;
}

import Link from "next/link";
import { Download } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CategoryTag } from "@/components/ui/Badge";
import { Placeholder } from "@/components/ui/Placeholder";
import { InsightCard } from "@/components/ui/Cards";
import { CTABand } from "@/components/ui/CTABand";
import { Mdx } from "@/components/insights/Mdx";
import { ShareButtons } from "@/components/insights/ShareButtons";
import { ArticleJsonLd } from "@/components/ui/JsonLd";
import { formatDate } from "@/lib/utils";
import { practiceBySlug } from "@/content/practices";
import { getRelated, type Post } from "@/lib/content";

const sectionLabel: Record<string, { label: string; href: string }> = {
  alert: { label: "Alerts", href: "/insights/alerts" },
  blog: { label: "Blog", href: "/insights/blog" },
  "case-study": { label: "Case Studies", href: "/insights/case-studies" },
  press: { label: "Press Releases", href: "/media/press-releases" },
  news: { label: "In the News", href: "/media/news" },
};

const hrefFor = (type: string, slug: string) =>
  type === "blog" ? `/insights/blog/${slug}` : type === "alert" ? `/insights/alerts/${slug}` : type === "case-study" ? `/insights/case-studies/${slug}` : "/insights";

export function ArticleView({ post, basePath }: { post: Post; basePath: string }) {
  const sec = sectionLabel[post.type] ?? { label: "Insights", href: "/insights" };
  const practice = post.practice ? practiceBySlug(post.practice) : undefined;
  const related = getRelated(post, 3);
  const path = `${basePath}/${post.slug}`;

  return (
    <>
      <ArticleJsonLd title={post.title} description={post.excerpt} author={post.author ?? "ADA"} date={post.date} href={path} />

      <section className="border-b border-ink-300 bg-surface-alt">
        <div className="container py-10 md:py-14">
          <Breadcrumb items={[{ name: "Insights", href: "/insights" }, { name: sec.label, href: sec.href }, { name: post.title, href: path }]} />
          <div className="mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              {post.category && <CategoryTag categoryKey={post.category} />}
              {post.sample && <span className="rounded-full bg-navy-50 px-2.5 py-0.5 text-[0.7rem] font-medium uppercase text-navy-700">Sample</span>}
            </div>
            <h1 className="mt-3 font-display text-h1 text-navy-900">{post.title}</h1>
            <p className="mt-4 text-body-lg text-ink-700">{post.excerpt}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-500">
              {post.author && <span>{post.author}</span>}
              <span>{formatDate(post.date)}</span>
              <span>{post.readingTime}</span>
              {practice && (
                <Link href={`/services/${practice.slug}`} className="text-navy-700 hover:underline">
                  {practice.title}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr]">
          <article>
            <Placeholder ratio="21/9" label={post.heroImage ? undefined : "Article image"} />
            <div className="mt-8">
              <Mdx source={post.body} />
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="rounded-full bg-surface-alt px-3 py-1 text-xs text-ink-700">{t}</span>
                ))}
              </div>
            )}
            <div className="mt-8 flex items-center justify-between border-t border-ink-300 pt-6">
              <ShareButtons path={path} title={post.title} />
              {post.pdf && (
                <span className="inline-flex items-center gap-1.5 text-sm text-ink-500">
                  <Download className="h-4 w-4" aria-hidden /> PDF (placeholder)
                </span>
              )}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-xl border border-ink-300 bg-surface-alt p-5">
              <p className="text-sm font-medium text-navy-900">{post.author ?? "ADA"}</p>
              <p className="mt-1 text-sm text-ink-700">
                {practice ? `${practice.title} practice.` : "Anuj Desai & Associates."} For tailored advice, book a consultation.
              </p>
              <Link href="/contact?intent=consultation" className="mt-3 inline-flex text-sm font-medium text-navy-700 hover:underline">
                Talk to an expert →
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="alt">
          <h2 className="font-display text-h2 text-navy-900">Related insights</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <InsightCard key={r.slug} href={hrefFor(r.type, r.slug)} title={r.title} category={r.category} date={r.date} excerpt={r.excerpt} />
            ))}
          </div>
        </Section>
      )}

      <CTABand />
    </>
  );
}

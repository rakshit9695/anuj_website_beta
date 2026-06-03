import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { InsightCard } from "@/components/ui/Cards";
import { InsightsExplorer } from "@/components/insights/InsightsExplorer";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { CTABand } from "@/components/ui/CTABand";
import { getAllPosts, getFeatured } from "@/lib/content";
import { insightsNav } from "@/content/nav";

export const metadata: Metadata = buildMetadata({
  title: "Knowledge Centre",
  description: "Tax alerts, expert articles, whitepapers, the Budget microsite, webinars and case studies from Anuj Desai & Associates.",
  path: "/insights",
});

const hrefFor = (type: string, slug: string) =>
  type === "blog" ? `/insights/blog/${slug}` : type === "alert" ? `/insights/alerts/${slug}` : type === "case-study" ? `/insights/case-studies/${slug}` : "/insights";

export default function InsightsHub() {
  const all = getAllPosts();
  const featured = getFeatured(3);
  const lite = all.map((p) => ({
    title: p.title, slug: p.slug, type: p.type, category: p.category, author: p.author, date: p.date, excerpt: p.excerpt,
  }));

  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }]}
        eyebrow="Knowledge Centre"
        title="Insight, analysis and alerts"
        intro="Stay ahead of tax, regulatory and cross-border change with analysis from across the firm."
      />

      {/* Featured */}
      {featured.length > 0 && (
        <Section tone="paper">
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-1 lg:row-span-2">
              <InsightCard
                href={hrefFor(featured[0].type, featured[0].slug)}
                title={featured[0].title}
                category={featured[0].category}
                author={featured[0].author}
                date={featured[0].date}
                excerpt={featured[0].excerpt}
              />
            </div>
            {featured.slice(1, 3).map((p) => (
              <InsightCard key={p.slug} href={hrefFor(p.type, p.slug)} title={p.title} category={p.category} author={p.author} date={p.date} excerpt={p.excerpt} />
            ))}
          </div>
        </Section>
      )}

      <Section tone="alt">
        <div className="grid gap-10 lg:grid-cols-[2.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Browse" title="All insights" />
            <div className="mt-8"><InsightsExplorer posts={lite} /></div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-xl border border-ink-300 bg-surface p-5">
              <h3 className="font-display text-lg text-navy-900">Subscribe</h3>
              <p className="mt-1 text-sm text-ink-700">Pick your topics and get ADA insights by email.</p>
              <div className="mt-3"><NewsletterSignup /></div>
            </div>
            <div className="rounded-xl border border-ink-300 bg-surface p-5">
              <h3 className="font-display text-lg text-navy-900">Sections</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {insightsNav.slice(1).map((n) => (
                  <li key={n.href}><Link href={n.href} className="text-navy-700 hover:underline">{n.label}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

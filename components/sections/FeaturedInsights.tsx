import { Section, SectionHeading } from "@/components/ui/Section";
import { InsightCard } from "@/components/ui/Cards";
import { ButtonLink } from "@/components/ui/Button";
import { getFeatured } from "@/lib/content";

const typeLabel: Record<string, string> = {
  alert: "Alert",
  blog: "Article",
  whitepaper: "Whitepaper",
  budget: "Budget",
  survey: "Survey",
  press: "Press",
  news: "News",
  "case-study": "Case Study",
};

const hrefFor = (type: string, slug: string) => {
  if (type === "blog") return `/insights/blog/${slug}`;
  if (type === "alert") return `/insights/alerts/${slug}`;
  if (type === "case-study") return `/insights/case-studies/${slug}`;
  return `/insights`;
};

export function FeaturedInsights() {
  const posts = getFeatured(3);
  return (
    <Section tone="paper">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Knowledge Centre"
          title="Latest insights"
          intro="Tax alerts, expert articles and analysis from across the firm."
        />
        <ButtonLink href="/insights" variant="ghost">
          Visit the Knowledge Centre →
        </ButtonLink>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {posts.map((p) => (
          <InsightCard
            key={p.slug}
            href={hrefFor(p.type, p.slug)}
            title={p.title}
            category={p.category}
            type={typeLabel[p.type]}
            author={p.author}
            date={p.date}
            excerpt={p.excerpt}
          />
        ))}
      </div>
    </Section>
  );
}

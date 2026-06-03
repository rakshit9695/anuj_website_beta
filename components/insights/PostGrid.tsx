import { InsightCard } from "@/components/ui/Cards";
import type { Post } from "@/lib/content";

const typeLabel: Record<string, string> = {
  alert: "Alert", blog: "Article", whitepaper: "Whitepaper", budget: "Budget",
  survey: "Survey", press: "Press", news: "News", "case-study": "Case Study",
};

export function PostGrid({ posts, basePath }: { posts: Post[]; basePath: string }) {
  if (posts.length === 0) {
    return <p className="text-ink-500">No items yet — check back soon.</p>;
  }
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <InsightCard
          key={p.slug}
          href={`${basePath}/${p.slug}`}
          title={p.title}
          category={p.category}
          type={typeLabel[p.type]}
          author={p.author}
          date={p.date}
          excerpt={p.excerpt}
        />
      ))}
    </div>
  );
}

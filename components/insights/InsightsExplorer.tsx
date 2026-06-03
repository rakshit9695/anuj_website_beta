"use client";

import { useMemo, useState } from "react";
import { InsightCard } from "@/components/ui/Cards";
import { cn } from "@/lib/utils";
import { alertCategories } from "@/content/alerts";

export type Liter = {
  title: string;
  slug: string;
  type: string;
  category?: string;
  author?: string;
  date: string;
  excerpt: string;
};

const typeFilters = [
  { key: "all", label: "All" },
  { key: "alert", label: "Alerts" },
  { key: "blog", label: "Articles" },
  { key: "whitepaper", label: "Whitepapers" },
  { key: "case-study", label: "Case Studies" },
  { key: "survey", label: "Surveys" },
];

const typeLabel: Record<string, string> = {
  alert: "Alert", blog: "Article", whitepaper: "Whitepaper", budget: "Budget",
  survey: "Survey", press: "Press", news: "News", "case-study": "Case Study",
};

const hrefFor = (type: string, slug: string) => {
  if (type === "blog") return `/insights/blog/${slug}`;
  if (type === "alert") return `/insights/alerts/${slug}`;
  if (type === "case-study") return `/insights/case-studies/${slug}`;
  if (type === "whitepaper") return `/insights/whitepapers`;
  if (type === "survey") return `/insights/surveys`;
  if (type === "press") return `/media/press-releases`;
  if (type === "news") return `/media/news`;
  return "/insights";
};

export function InsightsExplorer({ posts }: { posts: Liter[] }) {
  const [type, setType] = useState("all");
  const [cat, setCat] = useState("all");
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const filtered = useMemo(() => {
    return posts.filter(
      (p) => (type === "all" || p.type === type) && (cat === "all" || p.category === cat),
    );
  }, [posts, type, cat]);

  const shown = filtered.slice(0, page * pageSize);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {typeFilters.map((t) => (
          <button
            key={t.key}
            onClick={() => { setType(t.key); setPage(1); }}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
              type === t.key ? "bg-navy-900 text-paper" : "border border-ink-300 bg-surface text-ink-700 hover:border-brass-400",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <button
          onClick={() => { setCat("all"); setPage(1); }}
          className={cn("rounded-full px-2.5 py-1 text-xs transition-colors", cat === "all" ? "bg-brass-500 text-navy-900" : "border border-ink-300 text-ink-700")}
        >
          All categories
        </button>
        {alertCategories.map((c) => (
          <button
            key={c.key}
            onClick={() => { setCat(c.key); setPage(1); }}
            className={cn("rounded-full px-2.5 py-1 text-xs transition-colors", cat === c.key ? "bg-brass-500 text-navy-900" : "border border-ink-300 text-ink-700 hover:border-brass-400")}
          >
            {c.label}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="mt-10 text-center text-ink-500">No items match these filters.</p>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <InsightCard
              key={p.slug + p.type}
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
      )}

      {shown.length < filtered.length && (
        <div className="mt-8 text-center">
          <button onClick={() => setPage((p) => p + 1)} className="rounded-lg border border-navy-900 px-5 py-2.5 text-sm font-medium text-navy-900 hover:bg-navy-50">
            Load more
          </button>
        </div>
      )}
    </div>
  );
}

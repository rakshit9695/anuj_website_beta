import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { search } from "@/lib/searchIndex";

export const metadata: Metadata = buildMetadata({
  title: "Search",
  description: "Search the ADA website.",
  path: "/search",
  noindex: true,
});

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q ?? "";
  const results = q ? search(q) : [];
  return (
    <>
      <PageHero crumbs={[{ name: "Search", href: "/search" }]} eyebrow="Search" title={q ? `Results for “${q}”` : "Search"} intro={q ? `${results.length} result${results.length === 1 ? "" : "s"}.` : "Use the search icon in the header for instant results."} />
      <Section tone="paper">
        {results.length === 0 ? (
          <p className="text-ink-500">{q ? "No results found." : "Type a query to search."}</p>
        ) : (
          <ul className="divide-y divide-ink-300 rounded-xl border border-ink-300 bg-surface">
            {results.map((r) => (
              <li key={r.href + r.title}>
                <Link href={r.href} className="flex items-center justify-between px-5 py-3.5 hover:bg-navy-50">
                  <span className="font-medium text-navy-900">{r.title}</span>
                  <span className="text-xs uppercase tracking-wide text-ink-500">{r.group}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}

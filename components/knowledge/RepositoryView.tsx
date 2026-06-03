"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import type { RepoItem } from "@/content/repository";
import { cn } from "@/lib/utils";

export function RepositoryView({ items }: { items: RepoItem[] }) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = items.filter(
    (i) => (cat === "All" || i.category === cat) && i.name.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn("rounded-full px-3 py-1.5 text-sm font-medium transition-colors", cat === c ? "bg-navy-900 text-paper" : "border border-ink-300 bg-surface text-ink-700 hover:border-brass-400")}
          >
            {c}
          </button>
        ))}
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search…"
          className="ml-auto h-9 w-44 rounded-lg border border-ink-300 bg-surface px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-500/40"
          aria-label="Search repository"
        />
      </div>
      <ul className="mt-6 divide-y divide-ink-300 rounded-xl border border-ink-300 bg-surface">
        {filtered.map((i) => (
          <li key={i.name} className="flex items-center justify-between gap-4 px-5 py-3.5">
            <span>
              <span className="font-medium text-navy-900">{i.name}</span>
              <span className="ml-2 rounded-full bg-navy-50 px-2 py-0.5 text-xs text-navy-700">{i.category}</span>
            </span>
            <a href={i.link} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1 text-sm text-navy-700 hover:underline">
              Open <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </li>
        ))}
        {filtered.length === 0 && <li className="px-5 py-8 text-center text-ink-500">No matches.</li>}
      </ul>
    </div>
  );
}

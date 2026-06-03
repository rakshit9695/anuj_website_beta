"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, X } from "lucide-react";
import { search, type SearchGroup } from "@/lib/searchIndex";

const groups: (SearchGroup | "All")[] = ["All", "People", "Knowledge", "Practice", "News"];

export function SearchOverlay({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState<(typeof groups)[number]>("All");

  const results = useMemo(
    () => search(q, group === "All" ? undefined : group),
    [q, group],
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm data-[state=open]:animate-fade-up" />
        <Dialog.Content className="fixed left-1/2 top-[12vh] z-50 w-[92vw] max-w-2xl -translate-x-1/2 rounded-xl border border-ink-300 bg-surface shadow-card focus:outline-none">
          <Dialog.Title className="sr-only">Search</Dialog.Title>
          <div className="flex items-center gap-3 border-b border-ink-300 px-4">
            <Search className="h-5 w-5 text-ink-500" aria-hidden />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search services, tools, insights, people…"
              className="h-14 flex-1 bg-transparent text-base text-ink-900 placeholder:text-ink-500 focus:outline-none"
              aria-label="Search"
            />
            <Dialog.Close aria-label="Close search" className="rounded-md p-1 text-ink-500 hover:bg-navy-50">
              <X className="h-5 w-5" aria-hidden />
            </Dialog.Close>
          </div>
          <div className="flex gap-1 border-b border-ink-300 px-3 py-2">
            {groups.map((g) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className={
                  "rounded-full px-3 py-1 text-xs font-medium transition-colors " +
                  (group === g ? "bg-navy-900 text-paper" : "text-ink-700 hover:bg-navy-50")
                }
              >
                {g}
              </button>
            ))}
          </div>
          <div className="max-h-[50vh] overflow-y-auto p-2">
            {q && results.length === 0 && (
              <p className="px-3 py-8 text-center text-sm text-ink-500">
                No results for &ldquo;{q}&rdquo;.
              </p>
            )}
            {!q && (
              <p className="px-3 py-8 text-center text-sm text-ink-500">
                Start typing to search across practices, industries, calculators and insights.
              </p>
            )}
            <ul>
              {results.map((r) => (
                <li key={r.href + r.title}>
                  <Link
                    href={r.href}
                    onClick={() => onOpenChange(false)}
                    className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 hover:bg-navy-50"
                  >
                    <span className="text-sm font-medium text-navy-900">{r.title}</span>
                    <span className="text-[0.7rem] uppercase tracking-wide text-ink-500">{r.group}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

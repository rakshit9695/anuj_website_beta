"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

/** Responsive, searchable table with sticky header and horizontal scroll. */
export function DataTable({
  columns,
  rows,
  searchable = true,
}: {
  columns: string[];
  rows: (string | number)[][];
  searchable?: boolean;
}) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    if (!q.trim()) return rows;
    const t = q.toLowerCase();
    return rows.filter((r) => r.some((c) => String(c).toLowerCase().includes(t)));
  }, [q, rows]);

  return (
    <div>
      {searchable && (
        <div className="mb-4 flex max-w-sm items-center gap-2 rounded-lg border border-ink-300 bg-surface px-3">
          <Search className="h-4 w-4 text-ink-500" aria-hidden />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search…"
            className="h-10 flex-1 bg-transparent text-sm focus:outline-none"
            aria-label="Search table"
          />
        </div>
      )}
      <div className="scroll-fade-x overflow-x-auto rounded-xl border border-ink-300">
        <table className="w-full min-w-[32rem] text-sm">
          <thead className="sticky top-0 bg-navy-900 text-paper">
            <tr>
              {columns.map((c) => (
                <th key={c} className="px-4 py-3 text-left font-medium">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-300 bg-surface">
            {filtered.map((r, i) => (
              <tr key={i} className="hover:bg-navy-50">
                {r.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-ink-700">{cell}</td>
                ))}
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={columns.length} className="px-4 py-8 text-center text-ink-500">No matches.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

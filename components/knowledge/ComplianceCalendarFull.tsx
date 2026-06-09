"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  complianceCalendar,
  complianceCalendarCategories,
} from "@/content/complianceCalendar";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fmt(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/**
 * Full statutory compliance calendar (firm-supplied). Filter by category and
 * search by form/applicability; results are grouped by date.
 */
export function ComplianceCalendarFull() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return complianceCalendar.filter(
      (e) =>
        (cat === "All" || e.category === cat) &&
        (query === "" ||
          e.form.toLowerCase().includes(query) ||
          e.applicability.toLowerCase().includes(query) ||
          e.act.toLowerCase().includes(query)),
    );
  }, [cat, q]);

  const groups = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    for (const e of filtered) {
      if (!map.has(e.date)) map.set(e.date, []);
      map.get(e.date)!.push(e);
    }
    return Array.from(map.entries());
  }, [filtered]);

  const cats = ["All", ...complianceCalendarCategories];

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
              cat === c
                ? "bg-navy-900 text-paper"
                : "border border-ink-300 bg-surface text-ink-700 hover:border-brass-400",
            )}
          >
            {c}
          </button>
        ))}
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search form or applicability…"
          className="ml-auto h-9 w-56 rounded-lg border border-ink-300 bg-surface px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-500/40"
          aria-label="Search compliance calendar"
        />
      </div>

      <p className="mt-3 text-sm text-ink-500">{filtered.length} due dates</p>

      <div className="mt-4 space-y-6">
        {groups.map(([date, entries]) => (
          <div key={date} className="rounded-xl border border-ink-300 bg-surface">
            <div className="border-b border-ink-300 px-5 py-2.5">
              <p className="font-display text-navy-900">{fmt(date)}</p>
            </div>
            <ul className="divide-y divide-ink-300">
              {entries.map((e, i) => (
                <li key={i} className="px-5 py-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 rounded-full bg-navy-50 px-2 py-0.5 text-xs font-medium text-navy-700">
                      {e.category}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-navy-900">{e.form}</p>
                      {e.applicability && (
                        <p className="mt-0.5 text-sm text-ink-500">{e.applicability}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {groups.length === 0 && (
          <p className="py-8 text-center text-ink-500">No due dates match your filter.</p>
        )}
      </div>
    </div>
  );
}

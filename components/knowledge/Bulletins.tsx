"use client";

import { useState } from "react";
import { bulletinStreams } from "@/content/alerts";
import { cn, formatDate } from "@/lib/utils";

// Placeholder bulletin entries — in production this is fed by a data source/feed.
const entries = [
  { stream: "RBI/SEBI", title: "RBI circular on overseas investment reporting", date: "2026-05-18" },
  { stream: "GST", title: "Clarification on ITC for the financial year", date: "2026-05-12" },
  { stream: "Income Tax", title: "Notification revising TDS thresholds", date: "2026-05-05" },
  { stream: "FEMA", title: "Updated LRS reporting guidance", date: "2026-04-28" },
  { stream: "IBC", title: "IBBI amends CIRP regulations", date: "2026-04-20" },
  { stream: "Labour", title: "Update on EPFO contribution rules", date: "2026-04-15" },
  { stream: "GST", title: "E-invoicing threshold reminder", date: "2026-04-10" },
  { stream: "Income Tax", title: "Faceless assessment procedural update", date: "2026-04-02" },
];

export function Bulletins() {
  const [stream, setStream] = useState<string>("All");
  const [q, setQ] = useState("");
  const filtered = entries.filter(
    (e) => (stream === "All" || e.stream === stream) && e.title.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {["All", ...bulletinStreams].map((s) => (
          <button
            key={s}
            onClick={() => setStream(s)}
            className={cn("rounded-full px-3 py-1.5 text-sm font-medium transition-colors", stream === s ? "bg-navy-900 text-paper" : "border border-ink-300 bg-surface text-ink-700 hover:border-brass-400")}
          >
            {s}
          </button>
        ))}
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className="ml-auto h-9 w-44 rounded-lg border border-ink-300 bg-surface px-3 text-sm focus:outline-none" aria-label="Search bulletins" />
      </div>
      <ul className="mt-6 divide-y divide-ink-300 rounded-xl border border-ink-300 bg-surface">
        {filtered.map((e, i) => (
          <li key={i} className="flex items-center justify-between gap-4 px-5 py-3.5">
            <div>
              <span className="rounded-full bg-navy-50 px-2 py-0.5 text-xs text-navy-700">{e.stream}</span>
              <p className="mt-1 font-medium text-navy-900">{e.title}</p>
            </div>
            <span className="shrink-0 text-sm text-ink-500">{formatDate(e.date)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-ink-500">Placeholder entries — in production this board is fed by a regulatory update source.</p>
    </div>
  );
}

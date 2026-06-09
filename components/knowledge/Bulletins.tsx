"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { bulletinStreams } from "@/content/alerts";
import { cn, formatDate } from "@/lib/utils";

/**
 * Official regulator sources for the "auto" feed section. Per client direction
 * the Bulletins page has two parts: (1) live regulatory sources (to be wired to
 * an automated feed service) and (2) bulletins published by the firm's team.
 */
const autoSources = [
  { label: "CBIC — GST", href: "https://www.cbic.gov.in/entities/gst" },
  { label: "RBI — Notifications", href: "https://www.rbi.org.in/Scripts/NotificationUser.aspx" },
  { label: "SEBI — Legal / Circulars", href: "https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=2&ssid=9&smid=2" },
  { label: "SEBI — Enforcement Orders", href: "https://www.sebi.gov.in/enforcement/orders.html" },
  { label: "Income Tax — Latest", href: "https://incometaxindia.gov.in/Pages/communications/index.aspx" },
  { label: "TDS Section Codes", href: "https://taxationupdates.com/TDS-SECTION-CODE.html" },
  { label: "MCA — Notifications", href: "https://www.mca.gov.in/content/mca/global/en/notifications-tab.html" },
  { label: "DGFT — Notifications", href: "https://www.dgft.gov.in/CP/" },
];

// Firm-published bulletins (editable by the team / via the planned editor).
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
    <div className="space-y-12">
      {/* Section 1 — live regulatory sources (auto) */}
      <div>
        <h2 className="font-display text-h2 text-navy-900">Live regulatory sources</h2>
        <p className="mt-2 max-w-prose text-sm text-ink-700">
          Direct links to the official regulators&rsquo; latest notifications and
          circulars. An automated feed that pulls these into the page is planned
          (it requires a data service and ongoing upkeep).
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {autoSources.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 rounded-xl border border-ink-300 bg-surface px-4 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-brass-400"
            >
              {s.label}
              <ExternalLink className="h-4 w-4 shrink-0 text-ink-500" aria-hidden />
            </a>
          ))}
        </div>
      </div>

      {/* Section 2 — bulletins published by the firm (manual) */}
      <div>
        <h2 className="font-display text-h2 text-navy-900">Bulletins from the firm</h2>
        <p className="mt-2 max-w-prose text-sm text-ink-700">
          Updates curated and published by our team. Filter by stream or search by keyword.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
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
        <p className="mt-3 text-xs text-ink-500">Sample entries — the team will publish and manage these via the planned editor.</p>
      </div>
    </div>
  );
}

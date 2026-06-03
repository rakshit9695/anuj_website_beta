"use client";

import { useState } from "react";
import { CalendarPlus } from "lucide-react";
import { complianceDates, complianceCategories, type ComplianceItem } from "@/content/complianceDates";
import { cn } from "@/lib/utils";

const monthShort = (m: number) => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m - 1];

function icsFor(item: ComplianceItem) {
  // Use next occurrence year placeholder 2026; recurring monthly handled via RRULE.
  const month = item.month ?? 1;
  const dt = `2026${String(month).padStart(2, "0")}${String(item.day).padStart(2, "0")}`;
  const rrule = item.month === null ? "\nRRULE:FREQ=MONTHLY" : "\nRRULE:FREQ=YEARLY";
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ADA//Compliance//EN",
    "BEGIN:VEVENT",
    `UID:${item.title.replace(/\s+/g, "-")}-${dt}@ada`,
    `DTSTART;VALUE=DATE:${dt}`,
    `SUMMARY:${item.title} (${item.category})`,
    `DESCRIPTION:${item.detail}${rrule}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
}

export function ComplianceCalendar() {
  const [cat, setCat] = useState<string>("All");
  const filtered = complianceDates.filter((d) => cat === "All" || d.category === cat);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["All", ...complianceCategories].map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn("rounded-full px-3 py-1.5 text-sm font-medium transition-colors", cat === c ? "bg-navy-900 text-paper" : "border border-ink-300 bg-surface text-ink-700 hover:border-brass-400")}
          >
            {c}
          </button>
        ))}
      </div>
      <ul className="mt-6 divide-y divide-ink-300 rounded-xl border border-ink-300 bg-surface">
        {filtered.map((d, i) => (
          <li key={i} className="flex items-center gap-4 px-5 py-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-navy-50 text-center">
              <span className="font-display text-lg leading-none text-navy-900">{d.day}</span>
              <span className="text-[10px] uppercase text-ink-500">{d.month ? monthShort(d.month) : "Monthly"}</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-navy-900">{d.title}</p>
              <p className="text-sm text-ink-700">{d.detail}</p>
              <span className="mt-1 inline-block rounded-full bg-surface-alt px-2 py-0.5 text-xs text-ink-700">{d.category}</span>
            </div>
            <a href={icsFor(d)} download={`${d.title}.ics`} className="inline-flex shrink-0 items-center gap-1 text-sm text-navy-700 hover:underline" aria-label={`Add ${d.title} to calendar`}>
              <CalendarPlus className="h-4 w-4" aria-hidden /> <span className="hidden sm:inline">Add</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

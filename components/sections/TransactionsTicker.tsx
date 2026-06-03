"use client";

import { Marquee } from "@/components/ui/Marquee";
import { flags } from "@/lib/flags";

const transactions = [
  "Advised on a cross-border acquisition in the pharma sector",
  "Structured a Category II AIF for a domestic manager",
  "Secured a unilateral APA for a technology captive",
  "Supported a D2C brand through a growth fundraise",
  "Completed FEMA compounding for an inbound investor",
  "Set up a GIFT City IFSC fund vehicle",
  "Led IPO readiness for a manufacturing group",
];

/** Anonymised recent-transactions marquee — ICAI-flagged, behind a config flag. */
export function TransactionsTicker() {
  if (!flags.SHOW_TRANSACTIONS) return null;
  return (
    <div className="border-y border-white/10 bg-navy-950">
      <div className="container-bleed flex items-center gap-4 py-2.5">
        <span className="hidden shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brass-400 sm:flex">
          Recent engagements
        </span>
        <Marquee
          label="Recent anonymised engagements"
          durationSec={50}
          items={transactions.map((t, i) => (
            <span key={i} className="text-sm text-[#C2CEDD]">
              {t}
            </span>
          ))}
        />
      </div>
    </div>
  );
}

"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Consistent framed calculator: inputs (left) + live result (right) + notes. */
export function CalculatorShell({
  inputs,
  result,
  howItWorks,
  ctaPractice,
}: {
  inputs: ReactNode;
  result: ReactNode;
  howItWorks?: ReactNode;
  ctaPractice?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-ink-300 bg-surface p-6">
          <h2 className="font-display text-lg text-navy-900">Your details</h2>
          <div className="mt-4 space-y-4">{inputs}</div>
        </div>
        <div className="rounded-xl border border-navy-100 bg-navy-50 p-6">
          <h2 className="font-display text-lg text-navy-900">Result</h2>
          <div className="mt-4">{result}</div>
        </div>
      </div>

      {howItWorks && (
        <div className="mt-4 rounded-xl border border-ink-300 bg-surface">
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex w-full items-center justify-between px-5 py-3.5 text-left font-medium text-navy-900"
            aria-expanded={open}
          >
            How this is calculated
            <ChevronDown className={cn("h-5 w-5 text-brass-600 transition-transform", open && "rotate-180")} aria-hidden />
          </button>
          {open && <div className="border-t border-ink-300 px-5 py-4 text-sm text-ink-700">{howItWorks}</div>}
        </div>
      )}

      <div className="mt-4 rounded-xl border border-warning/30 bg-warning/5 p-4 text-sm text-ink-700">
        <strong className="text-navy-900">For indicative purposes only.</strong> This tool uses
        current Indian rules (FY 2025-26 / AY 2026-27) but does not constitute advice. Verify your
        position with ADA before acting.
        {" "}
        <Link
          href={`/contact?intent=consultation${ctaPractice ? `&service=${ctaPractice}` : ""}`}
          className="font-medium text-navy-700 underline underline-offset-2"
        >
          Talk to ADA about this →
        </Link>
      </div>
    </div>
  );
}

/** Big tabular result line. */
export function ResultLine({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-ink-300/60 py-2 last:border-0">
      <span className="text-sm text-ink-700">{label}</span>
      <span className={cn("font-mono tabular-nums", accent ? "text-xl font-semibold text-navy-900" : "text-navy-900")}>{value}</span>
    </div>
  );
}

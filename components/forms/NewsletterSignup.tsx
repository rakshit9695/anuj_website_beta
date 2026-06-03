"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { submitLead } from "@/components/forms/submit";

const TOPICS = ["Tax", "GST", "AIF", "FEMA", "Regulatory"];

/** Email + topic-interest chips → provider stub. Used in footer, inline and popup. */
export function NewsletterSignup({
  onDark = false,
  compact = false,
}: {
  onDark?: boolean;
  compact?: boolean;
}) {
  const [topics, setTopics] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string>();

  const toggle = (t: string) =>
    setTopics((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  if (done) {
    return (
      <p className={cn("text-sm", onDark ? "text-brass-400" : "text-success")} role="status">
        Thanks — you&rsquo;re subscribed. Confirmation on its way.
      </p>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setError(undefined);
        const fd = new FormData(e.currentTarget);
        const res = await submitLead("newsletter", {
          email: fd.get("email"),
          topics,
          company_website: fd.get("company_website"),
        });
        setBusy(false);
        if (res.ok) setDone(true);
        else setError(res.error ?? "Something went wrong.");
      }}
      className="space-y-3"
    >
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="flex gap-2">
        <label htmlFor="nl-email" className="sr-only">Email address</label>
        <input
          id="nl-email"
          name="email"
          type="email"
          required
          placeholder="Your email"
          className={cn(
            "h-11 flex-1 rounded-lg border px-3.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500/50",
            onDark
              ? "border-white/20 bg-white/10 text-paper placeholder:text-paper/60"
              : "border-ink-300 bg-surface text-ink-900 placeholder:text-ink-500",
          )}
        />
        <button
          type="submit"
          disabled={busy}
          className="h-11 shrink-0 rounded-lg bg-brass-500 px-4 text-sm font-semibold text-navy-900 transition-colors hover:bg-brass-400 disabled:opacity-50"
        >
          {busy ? "…" : "Subscribe"}
        </button>
      </div>
      {!compact && (
        <div className="flex flex-wrap gap-1.5">
          {TOPICS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => toggle(t)}
              aria-pressed={topics.includes(t)}
              className={cn(
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                topics.includes(t)
                  ? "border-brass-500 bg-brass-500 text-navy-900"
                  : onDark
                    ? "border-white/25 text-[#C2CEDD] hover:border-brass-400"
                    : "border-ink-300 text-ink-700 hover:border-brass-400",
              )}
            >
              {t}
            </button>
          ))}
        </div>
      )}
      {error && <p className="text-xs text-error">{error}</p>}
    </form>
  );
}

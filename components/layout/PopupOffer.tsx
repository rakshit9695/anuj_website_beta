"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Placeholder } from "@/components/ui/Placeholder";

const KEY = "ada-popup-seen";

/**
 * Tasteful lead-magnet slide-in. Triggers once per session at 60% scroll OR
 * 30s, whichever first. Dismissible; never blocks content on mobile (bottom
 * sheet on small screens). Respects reduced-motion via CSS.
 */
export function PopupOffer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(KEY)) return;
    let done = false;
    const fire = () => {
      if (done) return;
      done = true;
      setOpen(true);
      sessionStorage.setItem(KEY, "1");
      window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled >= 0.6) fire();
    };
    const t = setTimeout(fire, 30000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 print:hidden sm:bottom-5 sm:left-auto sm:right-5 sm:px-0">
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl border border-ink-300 bg-surface shadow-card sm:mx-0">
        <div className="relative">
          <Placeholder ratio="21/9" label="Budget 2026 Analysis" tone="navy" rounded={false} />
          <button
            onClick={() => setOpen(false)}
            aria-label="Dismiss offer"
            className="absolute right-2 top-2 rounded-md bg-navy-950/40 p-1 text-paper transition-colors hover:bg-navy-950/70"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <div className="p-4">
          <p className="eyebrow no-rule mb-1">Free Download</p>
          <h3 className="font-display text-lg text-navy-900">
            Budget 2026 Analysis
          </h3>
          <p className="mt-1 text-sm text-ink-700">
            Direct &amp; indirect tax changes, sector impact and what they mean
            for your business.
          </p>
          <Link
            href="/insights/budget/2026-27"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex rounded-lg bg-brass-500 px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-brass-400"
          >
            Get the PDF
          </Link>
        </div>
      </div>
    </div>
  );
}

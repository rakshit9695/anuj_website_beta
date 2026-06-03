"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { ctaLabel, primaryConsultationCta } from "@/content/ctas";

/** Slim dismissible bottom CTA bar that appears after the user scrolls. */
export function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("ada-sticky-cta-dismissed")) {
      setDismissed(true);
      return;
    }
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 hidden border-t border-white/10 bg-navy-900 text-paper print:hidden md:block">
      <div className="container-bleed flex items-center justify-between gap-4 py-2.5">
        <p className="text-sm">
          <span className="font-medium">{ctaLabel(primaryConsultationCta)}</span>
        </p>
        <div className="flex items-center gap-2">
          <Link
            href={primaryConsultationCta.href}
            className="rounded-lg bg-brass-500 px-4 py-1.5 text-sm font-semibold text-navy-900 hover:bg-brass-400"
          >
            Book now
          </Link>
          <button
            onClick={() => {
              sessionStorage.setItem("ada-sticky-cta-dismissed", "1");
              setDismissed(true);
            }}
            aria-label="Dismiss"
            className="rounded-md p-1.5 hover:bg-white/10"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}

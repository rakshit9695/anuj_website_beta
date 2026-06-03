"use client";

import { ArrowUp } from "lucide-react";

/** Re-opens the cookie preferences banner. */
export function CookieSettingsLink() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("ada-open-cookie-settings"))}
      className="hover:text-brass-400"
    >
      Cookie settings
    </button>
  );
}

export function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 hover:border-brass-400 hover:text-brass-400"
    >
      <ArrowUp className="h-3.5 w-3.5" aria-hidden /> Top
    </button>
  );
}

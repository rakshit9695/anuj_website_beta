"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Consent = { necessary: true; analytics: boolean; marketing: boolean };
const KEY = "ada-consent";

function read(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function write(c: Consent) {
  localStorage.setItem(KEY, JSON.stringify(c));
  window.dispatchEvent(new CustomEvent("ada-consent-change", { detail: c }));
}

/**
 * In-house DPDP/GDPR-style consent banner. Blocks analytics/marketing tags
 * until the visitor chooses. Re-openable via the footer "Cookie settings" link
 * (listens for the `ada-open-cookie-settings` event).
 */
export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!read()) setOpen(true);
    const reopen = () => {
      const c = read();
      setAnalytics(c?.analytics ?? false);
      setMarketing(c?.marketing ?? false);
      setPrefs(true);
      setOpen(true);
    };
    window.addEventListener("ada-open-cookie-settings", reopen);
    return () => window.removeEventListener("ada-open-cookie-settings", reopen);
  }, []);

  if (!open) return null;

  const save = (c: Consent) => {
    write(c);
    setOpen(false);
    setPrefs(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-950 px-4 py-4 text-paper shadow-2xl print:hidden sm:px-6"
    >
      <div className="mx-auto max-w-bleed">
        {!prefs ? (
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm text-[#C2CEDD]">
              We use necessary cookies to run this site and, with your consent,
              analytics and marketing cookies to improve it. See our{" "}
              <Link href="/legal/cookie-policy" className="underline decoration-brass-400 underline-offset-2">
                Cookie Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 flex-wrap gap-2">
              <button
                onClick={() => setPrefs(true)}
                className="rounded-lg border border-paper/40 px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-white/10"
              >
                Preferences
              </button>
              <button
                onClick={() => save({ necessary: true, analytics: false, marketing: false })}
                className="rounded-lg border border-paper/40 px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-white/10"
              >
                Reject all
              </button>
              <button
                onClick={() => save({ necessary: true, analytics: true, marketing: true })}
                className="rounded-lg bg-brass-500 px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-brass-400"
              >
                Accept all
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="font-display text-lg">Cookie preferences</p>
            <div className="grid gap-2 sm:grid-cols-3">
              <label className="flex items-start gap-2 rounded-lg border border-white/10 p-3 text-sm opacity-70">
                <input type="checkbox" checked readOnly className="mt-1 accent-brass-500" />
                <span>
                  <span className="block font-medium">Necessary</span>
                  Always on
                </span>
              </label>
              <label className="flex items-start gap-2 rounded-lg border border-white/10 p-3 text-sm">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 accent-brass-500"
                />
                <span>
                  <span className="block font-medium">Analytics</span>
                  GA4 / measurement
                </span>
              </label>
              <label className="flex items-start gap-2 rounded-lg border border-white/10 p-3 text-sm">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 accent-brass-500"
                />
                <span>
                  <span className="block font-medium">Marketing</span>
                  Retargeting pixels
                </span>
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => save({ necessary: true, analytics, marketing })}
                className="rounded-lg bg-brass-500 px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-brass-400"
              >
                Save preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

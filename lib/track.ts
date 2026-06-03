"use client";

/**
 * Centralised analytics dispatch. No-ops until cookie consent for analytics is
 * granted (see CookieBanner). All conversion events route through here so that
 * nothing fires before consent. GA4/GTM IDs come from env (placeholders, 10).
 */
export type TrackEvent =
  | "consultation_submit"
  | "lead_magnet_submit"
  | "newsletter_submit"
  | "event_register"
  | "career_apply"
  | "contact_submit"
  | "calculator_email_result"
  | "whatsapp_click"
  | "phone_click"
  | "pdf_download";

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem("ada-consent");
    if (!raw) return false;
    return JSON.parse(raw)?.analytics === true;
  } catch {
    return false;
  }
}

export function track(event: TrackEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;
  // dataLayer push for GTM/GA4 — only present after consent loads the scripts.
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...payload });
}

/** Read UTM params + landing source for attaching to lead submissions. */
export function captureUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string> = { page: window.location.pathname };
  for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
    const v = params.get(k);
    if (v) out[k] = v;
  }
  if (document.referrer) out.referrer = document.referrer;
  return out;
}

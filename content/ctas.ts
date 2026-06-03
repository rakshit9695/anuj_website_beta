import type { CTA } from "./types";
import { flags } from "@/lib/flags";

/**
 * High-conversion CTAs. Aggressive "free / zero-cost" copy may conflict with
 * ICAI norms (BUILD_NOTES.md). Each carries a toned-down alternative; the
 * AGGRESSIVE_CTA_COPY flag selects which is shown sitewide.
 */
export const ctas: CTA[] = [
  { id: "tax-health-check", label: "Get Your Free Tax Health Check — Book a 30-Min Consultation", toned: "Book a Tax Consultation", href: "/contact?intent=consultation", variant: "brass" },
  { id: "aif-guide", label: "Download Free AIF Setup Guide", toned: "Download the AIF Setup Guide", href: "/services/aif-funds#lead-magnet", variant: "primary" },
  { id: "gst-refund", label: "Calculate Your Potential GST Refund — Try Our Free Tool", toned: "Estimate Your GST Refund", href: "/knowledge-bank/calculators/gst-rate", variant: "primary" },
  { id: "intl-tax", label: "Speak to an International Tax Expert Today — Free First Call", toned: "Speak to an International Tax Expert", href: "/contact?intent=consultation&service=international-tax-tp", variant: "primary" },
  { id: "fema-review", label: "Get Your FEMA Compliance Review — Zero Risk, Zero Cost", toned: "Request a FEMA Compliance Review", href: "/contact?intent=consultation&service=fema-rbi", variant: "primary" },
  { id: "cost-reduction", label: "Request a Free Cost-Reduction Audit", toned: "Request a Cost-Reduction Audit", href: "/services/consulting-cfo#lead-magnet", variant: "brass" },
  { id: "cfo-session", label: "Book a Free CFO Strategy Session", toned: "Book a CFO Strategy Session", href: "/contact?intent=consultation&service=consulting-cfo", variant: "primary" },
  { id: "aif-discovery", label: "Talk to Our AIF Expert — Free 45-Min Discovery Call", toned: "Talk to Our AIF Expert", href: "/contact?intent=consultation&service=aif-funds", variant: "brass" },
  { id: "startup-review", label: "Get Your Startup Tax & ESOP Structure Reviewed — Free", toned: "Review Your Startup's Tax & ESOP Structure", href: "/contact?intent=consultation&service=startup-vc-pe", variant: "primary" },
  { id: "esg-assessment", label: "Request Your ESG Readiness Assessment", toned: "Request an ESG Readiness Assessment", href: "/services/esg-sustainability#lead-magnet", variant: "primary" },
  { id: "budget-pdf", label: "Download the Budget 2026 Analysis — Free PDF", toned: "Read the Budget 2026 Analysis", href: "/insights/budget/2026-27", variant: "primary" },
  { id: "angel-tax", label: "Check Your Angel-Tax Exemption Eligibility — Free Tool", toned: "Check Angel-Tax Exemption Eligibility", href: "/contact?intent=consultation&service=startup-vc-pe", variant: "primary" },
];

export const ctaById = (id: string) => ctas.find((c) => c.id === id);

/** Resolve the display label honouring the ICAI tone switch. */
export function ctaLabel(c: CTA) {
  return flags.AGGRESSIVE_CTA_COPY ? c.label : c.toned ?? c.label;
}

/** The default consultation CTA used in CTA bands. */
export const primaryConsultationCta = ctas[0];

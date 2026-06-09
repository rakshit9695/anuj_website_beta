/**
 * Central config flags. Several modules are ICAI-advertising-sensitive
 * (testimonials, client logos/names, comparative claims, "recent transactions",
 * aggressive free/zero-cost CTA copy). The firm must review these against the
 * ICAI Code of Ethics before going live. They are ON for the local demo so every
 * section renders; flip to false (or drive from env) to disable centrally.
 * See BUILD_NOTES.md.
 */
const bool = (v: string | undefined, fallback: boolean) =>
  v === undefined ? fallback : v === "true" || v === "1";

export const flags = {
  // Per client direction (Book1) these ICAI-sensitive modules are OFF by
  // default — client logos/names, testimonials, awards and unconfirmed
  // credential/empanelment badges are not displayed until the firm confirms.
  SHOW_CLIENT_LOGOS: bool(process.env.NEXT_PUBLIC_SHOW_CLIENT_LOGOS, false),
  SHOW_TESTIMONIALS: bool(process.env.NEXT_PUBLIC_SHOW_TESTIMONIALS, false),
  SHOW_TRANSACTIONS: bool(process.env.NEXT_PUBLIC_SHOW_TRANSACTIONS, false),
  SHOW_AWARDS: bool(process.env.NEXT_PUBLIC_SHOW_AWARDS, false),
  /** When false, "free / zero-cost" CTA copy is toned down sitewide. */
  AGGRESSIVE_CTA_COPY: bool(process.env.NEXT_PUBLIC_AGGRESSIVE_CTA_COPY, true),
  /** Show regulatory empanelment/registration badges (placeholder until confirmed). */
  SHOW_CREDENTIAL_BADGES: bool(
    process.env.NEXT_PUBLIC_SHOW_CREDENTIAL_BADGES,
    false,
  ),
  /** Online payment (Razorpay/PayU) slot — off until keys + ICAI review. */
  ENABLE_PAYMENTS: bool(process.env.NEXT_PUBLIC_ENABLE_PAYMENTS, false),
  /** Optional captcha slot on forms. */
  ENABLE_CAPTCHA: bool(process.env.NEXT_PUBLIC_ENABLE_CAPTCHA, false),
} as const;

export type Flags = typeof flags;

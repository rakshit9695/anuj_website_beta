/**
 * Pluggable lead backend. The firm connects HubSpot/Zoho/Salesforce later by
 * implementing LeadProvider and selecting it via env — no other code changes.
 * See BUILD_NOTES.md for the swap recipe. Never lose a submission silently.
 */
export type LeadForm =
  | "consultation"
  | "query"
  | "newsletter"
  | "lead-magnet"
  | "event"
  | "career"
  | "contact";

export const LEAD_FORMS: LeadForm[] = [
  "consultation",
  "query",
  "newsletter",
  "lead-magnet",
  "event",
  "career",
  "contact",
];

export interface LeadProvider {
  submit(
    form: LeadForm,
    payload: Record<string, unknown>,
  ): Promise<{ ok: boolean; id?: string; error?: string }>;
}

/** Default provider — logs the submission server-side and acknowledges. */
export class ConsoleLeadProvider implements LeadProvider {
  async submit(form: LeadForm, payload: Record<string, unknown>) {
    const id = `lead_${form}_${Math.round(Number(payload.__ts ?? 0)) || "x"}_${Math.random()
      .toString(36)
      .slice(2, 8)}`;
    // In production this would call the CRM. Here we record it to the server log.
    // eslint-disable-next-line no-console
    console.log(`[lead:${form}]`, JSON.stringify({ id, ...payload }));
    return { ok: true, id };
  }
}

/** No-op email provider stub (transactional email integration point). */
export class NoopEmailProvider {
  async send() {
    return { ok: true };
  }
}

let provider: LeadProvider | null = null;

/** Resolve the configured provider. Extend here to switch on env. */
export function getLeadProvider(): LeadProvider {
  if (provider) return provider;
  // e.g. if (process.env.LEAD_PROVIDER === "hubspot") provider = new HubSpotProvider();
  provider = new ConsoleLeadProvider();
  return provider;
}

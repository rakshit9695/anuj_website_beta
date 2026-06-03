"use client";

import type { LeadForm } from "@/lib/providers";
import { captureUtm, track, type TrackEvent } from "@/lib/track";

const eventByForm: Partial<Record<LeadForm, TrackEvent>> = {
  consultation: "consultation_submit",
  "lead-magnet": "lead_magnet_submit",
  newsletter: "newsletter_submit",
  event: "event_register",
  career: "career_apply",
  contact: "contact_submit",
};

/** POST a lead to the typed API and fire the conversion event on success. */
export async function submitLead(
  form: LeadForm,
  payload: Record<string, unknown>,
): Promise<{ ok: boolean; id?: string; error?: string }> {
  try {
    const res = await fetch(`/api/lead/${form}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, ...captureUtm() }),
    });
    const data = (await res.json()) as { ok: boolean; id?: string; error?: string };
    if (data.ok) {
      const ev = eventByForm[form];
      if (ev) track(ev, { form });
    }
    return data;
  } catch {
    return { ok: false, error: "Network error — please try again." };
  }
}

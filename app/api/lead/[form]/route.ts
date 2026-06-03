import { NextRequest, NextResponse } from "next/server";
import { getLeadProvider, LEAD_FORMS, type LeadForm } from "@/lib/providers";

export const runtime = "nodejs";

/**
 * Typed lead intake. Validates the form type, runs a honeypot + minimal checks,
 * and hands off to the configured LeadProvider. Always returns a clear ok/error
 * so the client never loses a submission silently.
 */
export async function POST(
  req: NextRequest,
  { params }: { params: { form: string } },
) {
  const form = params.form as LeadForm;
  if (!LEAD_FORMS.includes(form)) {
    return NextResponse.json({ ok: false, error: "Unknown form" }, { status: 404 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden "company_website" field.
  if (typeof payload.company_website === "string" && payload.company_website.length > 0) {
    return NextResponse.json({ ok: true, id: "ignored" });
  }

  // Consent gate for forms that require it.
  if (["consultation", "query", "contact", "career"].includes(form) && payload.consent !== true) {
    return NextResponse.json(
      { ok: false, error: "Consent is required to submit this form." },
      { status: 400 },
    );
  }

  try {
    const result = await getLeadProvider().submit(form, {
      ...payload,
      __form: form,
      __ts: Date.now(),
    });
    return NextResponse.json(result, { status: result.ok ? 200 : 502 });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Submission failed — please try again or email us." },
      { status: 500 },
    );
  }
}

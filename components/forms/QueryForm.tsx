"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FormField, Input, Select, Textarea, SuccessCard } from "@/components/ui/Field";
import { submitLead } from "@/components/forms/submit";
import { practices } from "@/content/practices";
import { cn } from "@/lib/utils";

/** Two-step "Send Query" form with a progress indicator. */
export function QueryForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<Record<string, string>>({});

  if (done) return <SuccessCard message="We'll contact you within 24 hours." />;

  const set = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));

  return (
    <div>
      <div className="mb-6 flex items-center gap-2">
        {[1, 2].map((s) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <span className={cn("grid h-7 w-7 place-items-center rounded-full text-sm font-semibold", step >= s ? "bg-navy-900 text-paper" : "bg-navy-50 text-ink-500")}>{s}</span>
            <span className="text-sm text-ink-700">{s === 1 ? "Your details" : "Your query"}</span>
            {s === 1 && <span className="h-px flex-1 bg-ink-300" />}
          </div>
        ))}
      </div>

      {step === 1 ? (
        <form
          className="space-y-4"
          onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); set("name", String(fd.get("name"))); set("email", String(fd.get("email"))); set("phone", String(fd.get("phone"))); setStep(2); }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Name" htmlFor="q-name" required><Input id="q-name" name="name" required defaultValue={data.name} /></FormField>
            <FormField label="Email" htmlFor="q-email" required><Input id="q-email" name="email" type="email" required defaultValue={data.email} /></FormField>
            <FormField label="Phone" htmlFor="q-phone"><Input id="q-phone" name="phone" defaultValue={data.phone} /></FormField>
          </div>
          <Button type="submit" variant="primary">Continue</Button>
        </form>
      ) : (
        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy(true); setError(undefined);
            const fd = new FormData(e.currentTarget);
            const res = await submitLead("query", {
              ...data,
              queryType: fd.get("queryType"), service: fd.get("service"), message: fd.get("message"),
              consent: fd.get("consent") === "on", company_website: fd.get("company_website"),
            });
            setBusy(false);
            if (res.ok) setDone(true); else setError(res.error ?? "Submission failed.");
          }}
        >
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Query type" htmlFor="q-type">
              <Select id="q-type" name="queryType">
                <option>General enquiry</option><option>New engagement</option><option>Existing client</option><option>Careers</option>
              </Select>
            </FormField>
            <FormField label="Service" htmlFor="q-service">
              <Select id="q-service" name="service">
                <option value="">Select…</option>
                {practices.map((p) => <option key={p.slug} value={p.slug}>{p.title}</option>)}
              </Select>
            </FormField>
          </div>
          <FormField label="Message" htmlFor="q-msg" required><Textarea id="q-msg" name="message" required /></FormField>
          <label className="flex items-start gap-2 text-sm text-ink-700">
            <input type="checkbox" name="consent" required className="mt-1 accent-navy-900" />
            <span>I agree to the <Link href="/legal/privacy" className="underline">Privacy Policy</Link>.</span>
          </label>
          {error && <p className="text-sm text-error">{error}</p>}
          <div className="flex gap-2">
            <Button type="button" variant="secondary" onClick={() => setStep(1)}>Back</Button>
            <Button type="submit" variant="brass" disabled={busy}>{busy ? "Sending…" : "Send query"}</Button>
          </div>
          <p className="text-xs text-ink-500">We&rsquo;ll contact you within 24 hours.</p>
        </form>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, FormField, SuccessCard } from "@/components/ui/Field";
import { submitLead } from "@/components/forms/submit";

export function EventRegister({ event }: { event: string }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string>();

  if (done) return <SuccessCard title="You're registered" message="We've noted your spot and will email joining details (placeholder)." />;

  if (!open) return <Button variant="brass" size="sm" onClick={() => setOpen(true)}>Register</Button>;

  return (
    <form
      className="mt-3 space-y-2"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setError(undefined);
        const fd = new FormData(e.currentTarget);
        const res = await submitLead("event", { event, name: fd.get("name"), email: fd.get("email"), org: fd.get("org"), company_website: fd.get("company_website") });
        setBusy(false);
        if (res.ok) setDone(true);
        else setError(res.error ?? "Something went wrong.");
      }}
    >
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <FormField label="Name" htmlFor={`ev-name-${event}`} required><Input id={`ev-name-${event}`} name="name" required /></FormField>
      <FormField label="Email" htmlFor={`ev-email-${event}`} required error={error}><Input id={`ev-email-${event}`} name="email" type="email" required /></FormField>
      <FormField label="Organisation" htmlFor={`ev-org-${event}`}><Input id={`ev-org-${event}`} name="org" /></FormField>
      <Button type="submit" variant="brass" size="sm" disabled={busy}>{busy ? "Registering…" : "Confirm registration"}</Button>
    </form>
  );
}

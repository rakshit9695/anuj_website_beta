"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FormField, Input, Textarea, SuccessCard } from "@/components/ui/Field";
import { submitLead } from "@/components/forms/submit";

/** Career / articleship application. Resume upload is a stub (filename only). */
export function CareerForm({ role = "", articleship = false }: { role?: string; articleship?: boolean }) {
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string>();
  const [fileName, setFileName] = useState("");

  if (done) return <SuccessCard title="Application received" message="Thank you — our talent team will be in touch if there's a fit." />;

  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true); setError(undefined);
        const fd = new FormData(e.currentTarget);
        const res = await submitLead("career", {
          type: articleship ? "articleship" : "role",
          role: fd.get("role"), name: fd.get("name"), email: fd.get("email"), phone: fd.get("phone"),
          resumeName: fileName, message: fd.get("message"),
          consent: fd.get("consent") === "on", company_website: fd.get("company_website"),
        });
        setBusy(false);
        if (res.ok) setDone(true); else setError(res.error ?? "Submission failed.");
      }}
    >
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label={articleship ? "Programme" : "Role"} htmlFor="cr-role">
          <Input id="cr-role" name="role" defaultValue={articleship ? "Articleship" : role} />
        </FormField>
        <FormField label="Name" htmlFor="cr-name" required><Input id="cr-name" name="name" required /></FormField>
        <FormField label="Email" htmlFor="cr-email" required><Input id="cr-email" name="email" type="email" required /></FormField>
        <FormField label="Phone" htmlFor="cr-phone"><Input id="cr-phone" name="phone" /></FormField>
      </div>
      <FormField label="Resume (PDF)" htmlFor="cr-resume" hint="Upload is a stub in this build; the filename is captured.">
        <input
          id="cr-resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          className="block w-full text-sm text-ink-700 file:mr-3 file:rounded-lg file:border-0 file:bg-navy-900 file:px-4 file:py-2 file:text-paper"
        />
      </FormField>
      <FormField label="Message" htmlFor="cr-msg"><Textarea id="cr-msg" name="message" /></FormField>
      <label className="flex items-start gap-2 text-sm text-ink-700">
        <input type="checkbox" name="consent" required className="mt-1 accent-navy-900" />
        <span>I agree to the <Link href="/legal/privacy" className="underline">Privacy Policy</Link> and to ADA processing my application.</span>
      </label>
      {error && <p className="text-sm text-error">{error}</p>}
      <Button type="submit" variant="brass" disabled={busy}>{busy ? "Submitting…" : "Submit application"}</Button>
    </form>
  );
}

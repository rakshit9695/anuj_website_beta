"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Placeholder } from "@/components/ui/Placeholder";
import { Button } from "@/components/ui/Button";
import { Input, FormField, SuccessCard } from "@/components/ui/Field";
import { TypeBadge } from "@/components/ui/Badge";
import { submitLead } from "@/components/forms/submit";

export type Report = { title: string; excerpt: string; slug: string; kind: string };

/** Cover + gated email capture for whitepapers / surveys. PDF is a placeholder. */
export function GatedReport({ report }: { report: Report }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string>();

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-ink-300 bg-surface">
      <Placeholder ratio="4/3" label={report.kind} rounded={false} />
      <div className="flex flex-1 flex-col p-5">
        <TypeBadge label={report.kind} />
        <h3 className="mt-2 font-display text-lg text-navy-900">{report.title}</h3>
        <p className="mt-1 flex-1 text-sm text-ink-700">{report.excerpt}</p>
        <div className="mt-4">
          {done ? (
            <SuccessCard title="Check your inbox" message="We've emailed your download link (placeholder file)." />
          ) : open ? (
            <form
              className="space-y-2"
              onSubmit={async (e) => {
                e.preventDefault();
                setBusy(true);
                setError(undefined);
                const fd = new FormData(e.currentTarget);
                const res = await submitLead("lead-magnet", {
                  report: report.slug, title: report.title, name: fd.get("name"), email: fd.get("email"), company_website: fd.get("company_website"),
                });
                setBusy(false);
                if (res.ok) setDone(true);
                else setError(res.error ?? "Something went wrong.");
              }}
            >
              <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <FormField label="Name" htmlFor={`${report.slug}-name`} required>
                <Input id={`${report.slug}-name`} name="name" required />
              </FormField>
              <FormField label="Work email" htmlFor={`${report.slug}-email`} required error={error}>
                <Input id={`${report.slug}-email`} name="email" type="email" required />
              </FormField>
              <Button type="submit" variant="brass" size="sm" disabled={busy}>{busy ? "Sending…" : "Get the report"}</Button>
            </form>
          ) : (
            <Button variant="secondary" size="sm" onClick={() => setOpen(true)} className="inline-flex items-center gap-2">
              <Download className="h-4 w-4" aria-hidden /> Download
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Download, ArrowRight } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Input, FormField, SuccessCard } from "@/components/ui/Field";
import { TypeBadge } from "@/components/ui/Badge";
import { submitLead } from "@/components/forms/submit";
import type { LeadMagnet } from "@/content/types";

/**
 * Lead-magnet block. Tool-type magnets link to the live calculator; gated
 * magnets capture name+email (provider stub) before revealing the download.
 * Actual files are placeholders the client supplies (CLIENT_TODO.md).
 */
export function LeadMagnetBlock({ magnet }: { magnet: LeadMagnet }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>();

  return (
    <div id="lead-magnet" className="rounded-xl border border-brass-400/60 bg-brass-100/40 p-6">
      <div className="flex items-center gap-2">
        <TypeBadge label={magnet.format} />
        <span className="text-xs font-semibold uppercase tracking-wide text-brass-600">
          {magnet.gated ? "Free download" : "Free tool"}
        </span>
      </div>
      <h3 className="mt-3 font-display text-xl text-navy-900">{magnet.title}</h3>
      {magnet.blurb && <p className="mt-1 text-sm text-ink-700">{magnet.blurb}</p>}

      {/* Tool magnet → link to calculator */}
      {magnet.format === "Tool" && magnet.href && (
        <ButtonLink href={magnet.href} variant="brass" className="mt-4">
          Open the tool <ArrowRight className="h-4 w-4" aria-hidden />
        </ButtonLink>
      )}

      {/* Gated downloadable */}
      {magnet.gated && magnet.format !== "Tool" && (
        <div className="mt-4">
          {done ? (
            <SuccessCard
              title="Your download is ready."
              message="We've emailed you the link. (Placeholder file — the firm will supply the final asset.)"
            />
          ) : !open ? (
            <Button variant="brass" onClick={() => setOpen(true)} className="inline-flex items-center gap-2">
              <Download className="h-4 w-4" aria-hidden /> Get the {magnet.format}
            </Button>
          ) : (
            <form
              className="space-y-3"
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                setError(undefined);
                const fd = new FormData(e.currentTarget);
                const res = await submitLead("lead-magnet", {
                  magnet: magnet.id,
                  title: magnet.title,
                  name: fd.get("name"),
                  email: fd.get("email"),
                  company_website: fd.get("company_website"),
                });
                setSubmitting(false);
                if (res.ok) setDone(true);
                else setError(res.error ?? "Something went wrong.");
              }}
            >
              <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <FormField label="Name" htmlFor="lm-name" required>
                <Input id="lm-name" name="name" required placeholder="Your name" />
              </FormField>
              <FormField label="Work email" htmlFor="lm-email" required error={error}>
                <Input id="lm-email" name="email" type="email" required placeholder="you@company.com" />
              </FormField>
              <Button type="submit" variant="brass" disabled={submitting}>
                {submitting ? "Sending…" : "Email me the download"}
              </Button>
            </form>
          )}
        </div>
      )}

      {/* Ungated, non-tool */}
      {!magnet.gated && magnet.format !== "Tool" && (
        <Button variant="secondary" className="mt-4 inline-flex items-center gap-2">
          <Download className="h-4 w-4" aria-hidden /> Download (placeholder)
        </Button>
      )}
    </div>
  );
}

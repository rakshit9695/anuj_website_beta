"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FormField, Input, Select, Textarea, SuccessCard } from "@/components/ui/Field";
import { submitLead } from "@/components/forms/submit";
import { practices } from "@/content/practices";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().optional(),
  mode: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, { message: "Please accept the privacy policy" }),
  company_website: z.string().max(0).optional(), // honeypot
});

type Values = z.infer<typeof schema>;

export function ConsultationForm({ defaultService }: { defaultService?: string }) {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { service: defaultService, mode: "Video call" },
  });

  if (done) return <SuccessCard />;

  return (
    <form
      noValidate
      className="space-y-4"
      onSubmit={handleSubmit(async (v) => {
        const res = await submitLead("consultation", v);
        if (res.ok) setDone(true);
        else setError("root", { message: res.error ?? "Submission failed." });
      })}
    >
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden {...register("company_website")} />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Name" htmlFor="c-name" required error={errors.name?.message}>
          <Input id="c-name" {...register("name")} />
        </FormField>
        <FormField label="Email" htmlFor="c-email" required error={errors.email?.message}>
          <Input id="c-email" type="email" {...register("email")} />
        </FormField>
        <FormField label="Phone" htmlFor="c-phone" required error={errors.phone?.message}>
          <Input id="c-phone" {...register("phone")} />
        </FormField>
        <FormField label="Company" htmlFor="c-company">
          <Input id="c-company" {...register("company")} />
        </FormField>
        <FormField label="Service interest" htmlFor="c-service">
          <Select id="c-service" {...register("service")}>
            <option value="">Select a service…</option>
            {practices.map((p) => <option key={p.slug} value={p.slug}>{p.title}</option>)}
          </Select>
        </FormField>
        <FormField label="Preferred mode" htmlFor="c-mode">
          <Select id="c-mode" {...register("mode")}>
            <option>Video call</option>
            <option>Phone call</option>
            <option>In person</option>
          </Select>
        </FormField>
      </div>
      <FormField label="How can we help?" htmlFor="c-msg">
        <Textarea id="c-msg" {...register("message")} placeholder="A few lines about your requirement…" />
      </FormField>
      <label className="flex items-start gap-2 text-sm text-ink-700">
        <input type="checkbox" className="mt-1 accent-navy-900" {...register("consent")} />
        <span>
          I agree to the <Link href="/legal/privacy" className="text-navy-700 underline">Privacy Policy</Link> and to being contacted about my enquiry.
        </span>
      </label>
      {errors.consent && <p className="text-sm text-error">{errors.consent.message}</p>}
      {errors.root && <p className="text-sm text-error">{errors.root.message}</p>}
      <Button type="submit" variant="brass" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Request consultation"}
      </Button>
      <p className="text-xs text-ink-500">We&rsquo;ll respond within one business day.</p>
    </form>
  );
}

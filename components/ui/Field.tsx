import * as React from "react";
import { cn } from "@/lib/utils";

const baseField =
  "w-full rounded-lg border border-ink-300 bg-surface px-3.5 py-2.5 text-[0.95rem] text-ink-900 placeholder:text-ink-500 transition-colors focus:border-navy-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500/40 disabled:opacity-50";

export function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy-900">
      {children}
      {required && <span className="ml-0.5 text-error" aria-hidden>*</span>}
    </label>
  );
}

export function FieldError({ id, children }: { id?: string; children?: React.ReactNode }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-1 text-sm text-error" role="alert">
      {children}
    </p>
  );
}

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(baseField, className)} {...props} />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(baseField, "min-h-[120px]", className)} {...props} />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select ref={ref} className={cn(baseField, "appearance-none bg-[length:1rem] pr-9", className)} {...props}>
    {children}
  </select>
));
Select.displayName = "Select";

/** Wraps label + control + error with the right aria wiring. */
export function FormField({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor} required={required}>
        {label}
      </Label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-ink-500">{hint}</p>}
      <FieldError id={`${htmlFor}-error`}>{error}</FieldError>
    </div>
  );
}

/** Inline success confirmation card (forms never hard-redirect). */
export function SuccessCard({
  title = "Thank you — we've received your details.",
  message = "A member of our team will be in touch within one business day.",
}: {
  title?: string;
  message?: string;
}) {
  return (
    <div className="rounded-xl border border-success/30 bg-success/5 p-6 text-center" role="status">
      <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-success/15 text-success">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className="font-display text-lg text-navy-900">{title}</h3>
      <p className="mt-1 text-sm text-ink-700">{message}</p>
    </div>
  );
}

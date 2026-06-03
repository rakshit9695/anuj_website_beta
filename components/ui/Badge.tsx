import { cn } from "@/lib/utils";
import { categoryTagClass, alertCategoryByKey } from "@/content/alerts";

/** Credential / empanelment pill — brass-100 fill, brass-600 text. */
export function CredentialBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-brass-100 px-3 py-1 text-xs font-semibold text-brass-600",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brass-500" aria-hidden />
      {label}
    </span>
  );
}

/** Category tag, coloured by alert category key. */
export function CategoryTag({
  categoryKey,
  className,
}: {
  categoryKey: string;
  className?: string;
}) {
  const cat = alertCategoryByKey(categoryKey);
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wide",
        categoryTagClass[categoryKey] ?? "bg-navy-50 text-navy-700",
        className,
      )}
    >
      {cat?.label ?? categoryKey}
    </span>
  );
}

/** Type badge (PDF / Excel / Tool / Checklist, or content type). */
export function TypeBadge({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-ink-300 bg-surface px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-wide text-ink-700",
        className,
      )}
    >
      {label}
    </span>
  );
}

/** CA / CS / CMA qualification chips — navy outline pills. */
export function QualificationChips({ chips }: { chips: string[] }) {
  return (
    <span className="flex flex-wrap gap-1.5">
      {chips.map((c) => (
        <span
          key={c}
          className="inline-flex items-center rounded-full border border-navy-700/40 px-2 py-0.5 text-[0.7rem] font-semibold text-navy-700"
        >
          {c}
        </span>
      ))}
    </span>
  );
}

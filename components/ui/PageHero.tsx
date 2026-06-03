import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";
import { Eyebrow } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

/** Standard interior-page hero: breadcrumb + eyebrow + H1 + lede. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  children,
  tone = "alt",
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  tone?: "alt" | "navy" | "paper";
}) {
  const onDark = tone === "navy";
  return (
    <section
      className={cn(
        "border-b",
        tone === "navy" && "border-white/10 bg-navy-900 text-paper",
        tone === "alt" && "border-ink-300 bg-surface-alt",
        tone === "paper" && "border-ink-300 bg-paper",
      )}
    >
      <div className="container py-10 md:py-14">
        <Breadcrumb items={crumbs} />
        <div className="mt-6 max-w-3xl">
          {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
          <h1 className={cn("mt-3 font-display text-h1", onDark ? "text-paper" : "text-navy-900")}>
            {title}
          </h1>
          {intro && (
            <p className={cn("mt-4 text-body-lg", onDark ? "text-[#C2CEDD]" : "text-ink-700")}>
              {intro}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Section";

export type RelatedLink = { label: string; href: string; sub?: string };

/** Related-content rail — drives the ≥5 internal-links requirement on pages. */
export function RelatedRail({
  eyebrow = "Explore more",
  title,
  links,
  columns = 3,
}: {
  eyebrow?: string;
  title: string;
  links: RelatedLink[];
  columns?: 2 | 3;
}) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-h2 text-navy-900">{title}</h2>
      <div
        className={
          "mt-6 grid gap-3 sm:grid-cols-2 " + (columns === 3 ? "lg:grid-cols-3" : "")
        }
      >
        {links.map((l) => (
          <Link
            key={l.href + l.label}
            href={l.href}
            className="group flex items-start justify-between gap-3 rounded-xl border border-ink-300 bg-surface p-4 transition-all hover:border-brass-400 hover:shadow-sm"
          >
            <span>
              <span className="font-medium text-navy-900">{l.label}</span>
              {l.sub && <span className="mt-0.5 block text-sm text-ink-500">{l.sub}</span>}
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-300 transition-colors group-hover:text-brass-500" aria-hidden />
          </Link>
        ))}
      </div>
    </div>
  );
}

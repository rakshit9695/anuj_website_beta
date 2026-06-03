import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/ui/JsonLd";

export type Crumb = { name: string; href: string };

/** Home › Section › Page with brass separators + BreadcrumbList JSON-LD. */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-ink-500">
          {full.map((c, i) => {
            const last = i === full.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="text-ink-700">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-navy-700">
                    {c.name}
                  </Link>
                )}
                {!last && <ChevronRight className="h-3.5 w-3.5 text-brass-500" aria-hidden />}
              </li>
            );
          })}
        </ol>
      </nav>
      <BreadcrumbJsonLd items={full} />
    </>
  );
}

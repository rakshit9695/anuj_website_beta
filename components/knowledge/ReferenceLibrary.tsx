import Link from "next/link";
import { referenceLibrary } from "@/content/rates/referenceLibrary";

/**
 * Renders the full reference-library taxonomy (Book1 KB #37). Items with an
 * href link to a live tool; the rest are catalogued and being populated.
 */
export function ReferenceLibrary() {
  return (
    <div className="space-y-12">
      {referenceLibrary.map((sec) => (
        <div key={sec.section}>
          <h2 className="font-display text-h2 text-navy-900">{sec.section}</h2>
          <div className="mt-5 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {sec.groups.map((g) => (
              <div key={g.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-brass-600">
                  {g.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) =>
                    item.href ? (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="inline-block rounded-full border border-navy-700/40 bg-navy-50 px-3 py-1.5 text-sm font-medium text-navy-800 transition-colors hover:border-navy-700"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ) : (
                      <li key={item.label}>
                        <span
                          className="inline-block rounded-full border border-ink-300 bg-surface px-3 py-1.5 text-sm text-ink-700"
                          title="Being populated by the firm"
                        >
                          {item.label}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { practices } from "@/content/practices";
import { CLUSTERS } from "@/content/types";
import { cn } from "@/lib/utils";

const filters = ["All", ...CLUSTERS] as const;

/** 18 practice cards with an optional cluster filter row. */
export function ServicesGridHome() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = active === "All" ? practices : practices.filter((p) => p.cluster === active);

  return (
    <section className="bg-surface-alt py-12 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Practice Areas"
          title="Full-spectrum expertise"
          intro="Eighteen practice areas across assurance, tax, regulatory, transactions, advisory and sector specialisms."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                active === f
                  ? "bg-navy-900 text-paper"
                  : "border border-ink-300 bg-surface text-ink-700 hover:border-brass-400",
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i, 6) * 0.05}>
              <ServiceCard
                href={`/services/${p.slug}`}
                icon={p.icon}
                title={p.title}
                tagline={p.tagline}
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <ButtonLink href="/services" variant="secondary">
            View all practice areas
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

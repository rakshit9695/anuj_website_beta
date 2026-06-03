"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { practiceClusters, industryNavLinks } from "@/content/nav";

/** Right-rail promoted feature tile shared by both mega-menus. */
function FeatureTile({
  eyebrow,
  title,
  href,
  desc,
}: {
  eyebrow: string;
  title: string;
  href: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-xl bg-navy-900 p-5 text-paper transition-colors hover:bg-navy-800"
    >
      <div>
        <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-brass-400">
          {eyebrow}
        </span>
        <p className="mt-2 font-display text-lg">{title}</p>
        <p className="mt-1 text-sm text-[#C2CEDD]">{desc}</p>
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brass-400">
        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}

export function ServicesMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
      <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {practiceClusters.map((c) => (
          <div key={c.cluster}>
            <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-widest text-brass-600">
              {c.cluster}
            </p>
            <ul className="space-y-1">
              {c.practices.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/services/${p.slug}`}
                    onClick={onNavigate}
                    className="group flex items-start gap-2 rounded-md px-2 py-1.5 text-sm text-ink-700 hover:bg-navy-50 hover:text-navy-900"
                  >
                    <span className="mt-0.5 text-brass-600">
                      <Icon name={p.icon} className="h-4 w-4" />
                    </span>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <FeatureTile
          eyebrow="Flagship"
          title="AIF & Fund Management"
          href="/services/aif-funds"
          desc="Cat I/II/III formation, SEBI compliance, fund audit & investor reporting."
        />
        <Link
          href="/services"
          onClick={onNavigate}
          className="rounded-xl border border-ink-300 px-4 py-3 text-sm font-medium text-navy-700 hover:border-brass-400"
        >
          View all 18 practice areas →
        </Link>
      </div>
    </div>
  );
}

export function IndustriesMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
      <div className="grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3 lg:grid-cols-4">
        {industryNavLinks.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            onClick={onNavigate}
            className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-ink-700 hover:bg-navy-50 hover:text-navy-900"
          >
            <span className="text-brass-600">
              <Icon name={i.icon ?? "Layers"} className="h-4 w-4" />
            </span>
            {i.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <FeatureTile
          eyebrow="Featured sector"
          title="Funds & AIFs"
          href="/industries/funds-aif"
          desc="From SEBI registration to fund audit — our flagship sector practice."
        />
        <Link
          href="/industries"
          onClick={onNavigate}
          className="rounded-xl border border-ink-300 px-4 py-3 text-sm font-medium text-navy-700 hover:border-brass-400"
        >
          View all 25 industries →
        </Link>
      </div>
    </div>
  );
}

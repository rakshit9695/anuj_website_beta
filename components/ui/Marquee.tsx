"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Seamless looping marquee, pause-on-hover. Content is duplicated for the loop;
 * the same items also live elsewhere (calendar/transactions pages) so the
 * marquee is never the only place the information appears.
 */
export function Marquee({
  items,
  durationSec = 40,
  label,
  className,
}: {
  items: React.ReactNode[];
  durationSec?: number;
  label?: string;
  className?: string;
}) {
  const [paused, setPaused] = useState(false);
  return (
    <div
      className={cn("scroll-fade-x overflow-hidden", className)}
      role="marquee"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex w-max gap-8 motion-reduce:animate-none"
        style={{
          animation: `marquee-x ${durationSec}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/** "Important Dates" ticker band that links to the compliance calendar. */
export function DatesTicker({ dates }: { dates: string[] }) {
  return (
    <div className="border-y border-ink-300 bg-surface-alt">
      <div className="container-bleed flex items-center gap-4 py-2.5">
        <Link
          href="/knowledge-bank/important-dates"
          className="hidden shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brass-600 sm:flex"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-brass-500" aria-hidden />
          Important Dates
        </Link>
        <Marquee
          label="Upcoming compliance due dates"
          durationSec={55}
          items={dates.map((d, i) => (
            <span key={i} className="text-sm text-ink-700">
              {d}
            </span>
          ))}
        />
      </div>
    </div>
  );
}

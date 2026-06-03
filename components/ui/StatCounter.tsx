"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn, formatNumberIN } from "@/lib/utils";

/** Counts up to `value` when scrolled into view; reduced-motion shows it instantly. */
export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  onDark = false,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  onDark?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          obs.disconnect();
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, reduce]);

  return (
    <div ref={ref} className="text-center">
      <p className={cn("font-display text-4xl tabular-nums md:text-5xl", onDark ? "text-paper" : "text-navy-900")}>
        {prefix}
        {formatNumberIN(display)}
        {suffix}
      </p>
      <div className="mx-auto mt-2 h-0.5 w-8 bg-brass-500" />
      <p className={cn("mt-2 text-sm", onDark ? "text-[#C2CEDD]" : "text-ink-500")}>{label}</p>
    </div>
  );
}

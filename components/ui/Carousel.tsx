"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Accessible carousel: keyboard arrows, swipe, dots, autoplay with
 * pause-on-hover. Autoplay is disabled under reduced-motion.
 */
export function Carousel({
  slides,
  autoplayMs = 6000,
  className,
  ariaLabel = "Carousel",
  arrows = true,
}: {
  slides: React.ReactNode[];
  autoplayMs?: number;
  className?: string;
  ariaLabel?: string;
  arrows?: boolean;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );
  const goTo = (i: number) => setIndex(i);

  useEffect(() => {
    if (reduce || paused || count <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), autoplayMs);
    return () => clearInterval(t);
  }, [reduce, paused, count, autoplayMs]);

  return (
    <div
      className={cn("relative", className)}
      role="group"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
      tabIndex={0}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
        touchX.current = null;
      }}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="w-full shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
            >
              {s}
            </div>
          ))}
        </div>
      </div>

      {arrows && count > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-surface/90 text-navy-900 shadow-sm transition-colors hover:bg-surface"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-surface/90 text-navy-900 shadow-sm transition-colors hover:bg-surface"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </>
      )}

      {count > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-brass-500" : "w-2 bg-ink-300 hover:bg-ink-500",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

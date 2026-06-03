import { StatCounter } from "@/components/ui/StatCounter";
import { stats } from "@/content/stats";

/** Slim navy band of animated count-up stats bridging hero and body. */
export function StatsBar() {
  return (
    <section className="border-y border-white/10 bg-navy-950">
      <div className="container-bleed grid grid-cols-2 gap-8 py-10 md:grid-cols-3 lg:grid-cols-5">
        {stats.map((s) => (
          <StatCounter
            key={s.label}
            value={s.value}
            prefix={s.prefix}
            suffix={s.suffix}
            label={s.label}
            onDark
          />
        ))}
      </div>
    </section>
  );
}

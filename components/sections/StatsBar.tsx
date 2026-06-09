import { pillars } from "@/content/stats";

/**
 * Slim brand band of qualitative trust pillars bridging hero and body.
 * Per client direction this carries positioning statements, not unverified
 * numeric claims.
 */
export function StatsBar() {
  return (
    <section className="border-y border-white/10 bg-navy-950 text-paper">
      <div className="container-bleed grid gap-x-8 gap-y-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <div key={p.label} className="border-l-2 border-brass-500/70 pl-4">
            <p className="font-display text-lg leading-snug text-paper">{p.label}</p>
            <p className="mt-1.5 text-sm text-[#C2CEDD]">{p.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

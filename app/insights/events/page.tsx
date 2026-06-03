import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { EventRegister } from "@/components/insights/EventRegister";
import { CTABand } from "@/components/ui/CTABand";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Events",
  description: "Upcoming and past events, seminars and webinars from Anuj Desai & Associates.",
  path: "/insights/events",
});

const upcoming = [
  { title: "Post-Budget 2026 roundtable", date: "2026-07-15", mode: "In person · Mumbai" },
  { title: "AIF compliance masterclass", date: "2026-08-02", mode: "Online webinar" },
];
const past = [
  { title: "GST annual return clinic", date: "2026-04-10", mode: "Online" },
  { title: "Family office governance forum", date: "2026-03-05", mode: "In person · Mumbai" },
];

export default function Events() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }, { name: "Events", href: "/insights/events" }]}
        eyebrow="Calendar"
        title="Events"
        intro="Roundtables, masterclasses and webinars. Register for upcoming sessions below. (Placeholder events.)"
      />
      <Section tone="paper">
        <SectionHeading eyebrow="Upcoming" title="Register now" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {upcoming.map((e) => (
            <div key={e.title} className="rounded-xl border border-ink-300 bg-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brass-600">{formatDate(e.date)}</p>
              <h3 className="mt-2 font-display text-xl text-navy-900">{e.title}</h3>
              <p className="mt-1 text-sm text-ink-500">{e.mode}</p>
              <div className="mt-4"><EventRegister event={e.title} /></div>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="alt">
        <SectionHeading eyebrow="Past" title="Recent events" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {past.map((e) => (
            <div key={e.title} className="rounded-xl border border-ink-300 bg-surface p-5">
              <p className="text-sm text-ink-500">{formatDate(e.date)} · {e.mode}</p>
              <p className="mt-1 font-medium text-navy-900">{e.title}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

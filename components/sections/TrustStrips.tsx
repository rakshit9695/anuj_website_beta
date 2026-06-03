"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { Carousel } from "@/components/ui/Carousel";
import { Marquee } from "@/components/ui/Marquee";
import { Placeholder } from "@/components/ui/Placeholder";
import { flags } from "@/lib/flags";

const testimonials = [
  { quote: "They structured our fund and handled the SEBI process end to end. The depth across tax and regulatory in one team is rare.", who: "[Fund Manager — placeholder]", role: "Category II AIF" },
  { quote: "Our cross-border acquisition needed tax, FEMA and valuation in lockstep. ADA gave us one accountable point of contact.", who: "[CFO — placeholder]", role: "Listed manufacturer" },
  { quote: "From cap table to ESOPs to fundraising, they have been our finance partner since incorporation.", who: "[Founder — placeholder]", role: "SaaS startup" },
];

const awards = ["ITR World Tax", "Chambers Asia-Pacific", "Legal500", "ALB India", "IFLR1000"];
const media = ["The Economic Times", "Mint", "CNBC-TV18", "Moneycontrol", "Business Standard"];

/** Client logos — gated; named clients/logos may be ICAI-restricted. */
export function ClientLogosStrip() {
  if (!flags.SHOW_CLIENT_LOGOS) return null;
  return (
    <Section tone="paper">
      <p className="text-center text-sm font-medium uppercase tracking-widest text-ink-500">Trusted by</p>
      <div className="mt-6">
        <Marquee
          label="Client logos"
          durationSec={36}
          items={Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="grid h-12 w-32 place-items-center rounded-lg border border-ink-300 bg-surface text-[10px] uppercase tracking-widest text-ink-500">
              Client {i + 1}
            </div>
          ))}
        />
      </div>
      <p className="mt-4 text-center text-xs text-ink-500">Placeholder logos — client list pending ICAI review.</p>
    </Section>
  );
}

/** Testimonials carousel — gated; placeholder personas, never fabricated as real. */
export function TestimonialsCarousel() {
  if (!flags.SHOW_TESTIMONIALS) return null;
  return (
    <Section tone="alt">
      <SectionHeading eyebrow="In their words" title="What clients say" align="center" />
      <div className="mx-auto mt-8 max-w-3xl">
        <Carousel
          ariaLabel="Client testimonials"
          arrows={false}
          slides={testimonials.map((t, i) => (
            <div key={i} className="px-2 text-center">
              <blockquote className="font-display text-2xl leading-snug text-navy-900">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-medium text-navy-900">{t.who}</p>
              <p className="text-sm text-ink-500">{t.role}</p>
            </div>
          ))}
        />
      </div>
      <p className="mt-4 text-center text-xs text-ink-500">
        Illustrative placeholder testimonials — to be reviewed against ICAI norms before publishing.
      </p>
    </Section>
  );
}

/** Awards + media mention strips — gated. */
export function AwardsMediaStrip() {
  return (
    <Section tone="paper">
      {flags.SHOW_AWARDS && (
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-ink-500">Recognition</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {awards.map((a) => (
              <div key={a} className="rounded-lg border border-ink-300 bg-surface px-4 py-2 text-sm text-ink-700">
                {a} <span className="text-ink-500">· [year]</span>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-10 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-ink-500">As featured in</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {media.map((m) => (
            <span key={m} className="text-sm font-medium text-ink-500">{m}</span>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-500">
          Award and media references are placeholders; confirm rankings and rights with the firm.
        </p>
      </div>
    </Section>
  );
}

import { Section } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { Quote } from "lucide-react";

/** Founder's message — placeholder photo + pull-quote. All content client-supplied. */
export function FoundersDesk() {
  return (
    <Section tone="alt">
      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="mx-auto w-full max-w-sm">
          <Placeholder ratio="3/4" label="Founder portrait" tone="navy" />
          <p className="mt-3 text-center text-xs text-ink-500">[CLIENT TO PROVIDE — founder photo]</p>
        </div>
        <div>
          <p className="eyebrow">From the Founder&rsquo;s desk</p>
          <Quote className="mt-4 h-8 w-8 text-brass-500" aria-hidden />
          <blockquote className="mt-3 font-display text-2xl leading-snug text-navy-900 md:text-3xl">
            &ldquo;We built ADA on a simple conviction: that clients are better
            served when audit, tax, company law and advisory speak the same
            language. One team, accountable end to end — that is the whole
            idea.&rdquo;
          </blockquote>
          <p className="mt-6 font-medium text-navy-900">[Founder Name]</p>
          <p className="text-sm text-ink-500">Founder &amp; Managing Partner · [CLIENT TO PROVIDE]</p>
        </div>
      </div>
    </Section>
  );
}

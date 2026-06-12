import { Section } from "@/components/ui/Section";
import { Quote } from "lucide-react";

/** Founder's message. (Portrait omitted until the client supplies one.) */
export function FoundersDesk() {
  return (
    <Section tone="alt">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">From the Founder&rsquo;s desk</p>
        <Quote className="mt-4 h-8 w-8 text-brass-500" aria-hidden />
        <blockquote className="mt-3 font-display text-2xl leading-snug text-navy-900 md:text-[1.75rem]">
          &ldquo;When I founded Anuj Desai &amp; Associates, the vision was
          simple: to build a professional services firm that businesses could
          rely upon not just for compliance, but for clarity, strategy and
          long-term value creation. Our philosophy is built on three
          principles — integrity, technical excellence and client-centric
          thinking.&rdquo;
        </blockquote>
        <p className="mt-6 font-medium text-navy-900">CA Anuj Desai</p>
        <p className="text-sm text-ink-500">Founder</p>
      </div>
    </Section>
  );
}

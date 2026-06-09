import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { Placeholder } from "@/components/ui/Placeholder";
import { Quote } from "lucide-react";
import { teamBySlug } from "@/content/team";

export const metadata: Metadata = buildMetadata({
  title: "Founder",
  description: "Anuj Desai, Founder & Managing Partner of Anuj Desai & Associates.",
  path: "/about/team",
});

export default function TeamPage() {
  const founder = teamBySlug("anuj-desai");

  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }, { name: "Founder", href: "/about/team" }]}
        eyebrow="Our people"
        title="Founder & Managing Partner"
        intro="The firm is led personally by its founder, with a partner-led approach to every engagement."
      />
      <Section tone="paper">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="mx-auto w-full max-w-sm">
            <Placeholder ratio="3/4" label="Founder portrait" tone="navy" />
            <p className="mt-3 text-center text-xs text-ink-500">[CLIENT TO PROVIDE — founder photo]</p>
          </div>
          <div>
            <h2 className="font-display text-h2 text-navy-900">{founder?.name ?? "Anuj Desai"}</h2>
            <p className="mt-1 text-brass-600">{founder?.role ?? "Founder & Managing Partner"}</p>

            <Quote className="mt-6 h-8 w-8 text-brass-500" aria-hidden />
            <div className="prose-ada mt-3 max-w-none">
              <p className="font-display text-xl leading-snug text-navy-900">
                When I founded Anuj Desai &amp; Associates, the vision was
                simple: to build a professional services firm that businesses
                could rely upon not just for compliance, but for clarity,
                strategy and long-term value creation.
              </p>
              <p>
                In today&rsquo;s environment, businesses face increasing
                regulatory complexity, rapid technological change and growing
                stakeholder expectations. Success requires more than technical
                expertise — it requires advisors who understand the commercial
                realities behind every decision.
              </p>
              <p>
                At Anuj Desai &amp; Associates, we strive to be that trusted
                partner. Whether assisting a startup through its growth journey,
                supporting an established enterprise with governance and
                compliance, advising investment funds, or helping business
                owners navigate critical decisions, our approach remains the
                same: deliver practical, precise and commercially sound
                solutions.
              </p>
              <p>
                Our philosophy is built on three principles — integrity,
                technical excellence and client-centric thinking. As we continue
                to expand our capabilities across taxation, audit, corporate
                advisory, compliance, transaction support, international business
                and strategic consulting, our commitment remains unchanged: to
                provide exceptional service, independent judgment and enduring
                value to every client we serve.
              </p>
            </div>

            <p className="mt-6 text-ink-700">{founder?.bio}</p>
            {founder?.linkedin && (
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy-700 hover:underline"
              >
                Connect on LinkedIn →
              </a>
            )}
          </div>
        </div>
      </Section>
      <CTABand
        title="Speak with our team"
        intro="Tell us what you're working on and we'll point you to the right starting step."
      />
    </>
  );
}

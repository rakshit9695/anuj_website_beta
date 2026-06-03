import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { homepageDifferentiators } from "@/content/differentiators";

/** Navy "Why ADA" band — six selected differentiators. */
export function WhyADA() {
  return (
    <Section tone="navy">
      <SectionHeading
        eyebrow="What sets us apart"
        title="Why clients choose ADA"
        intro="Depth that usually takes several firms — combined into one accountable team."
        onDark
      />
      <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {homepageDifferentiators.map((d, i) => (
          <Reveal key={d.title} delay={Math.min(i, 5) * 0.06}>
            <div className="flex gap-4">
              <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-brass-400">
                <Icon name={d.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg text-paper">{d.title}</h3>
                <p className="mt-1 text-sm text-[#C2CEDD]">{d.how}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10">
        <ButtonLink href="/about" variant="outline-light">
          More about the firm
        </ButtonLink>
      </div>
    </Section>
  );
}

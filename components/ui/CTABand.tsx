import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { ctaLabel, primaryConsultationCta } from "@/content/ctas";
import type { CTA } from "@/content/types";

/** Full-width navy CTA band reused at the bottom of most pages. */
export function CTABand({
  eyebrow = "Work with ADA",
  title = "Ready to talk to an advisor?",
  intro = "Book a consultation and get a clear, considered view from a team that handles audit, tax, regulatory and cross-border work under one roof.",
  cta = primaryConsultationCta,
  secondary = { label: "Talk to an Expert", href: "/contact" },
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  cta?: CTA;
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="bg-navy-900">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow onDark className="justify-center">
            {eyebrow}
          </Eyebrow>
          <h2 className="mt-3 font-display text-h2 text-paper">{title}</h2>
          <p className="mx-auto mt-4 max-w-lede text-body-lg text-[#C2CEDD]">{intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={cta.href} variant="brass" size="lg">
              {ctaLabel(cta)}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="outline-light" size="lg">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

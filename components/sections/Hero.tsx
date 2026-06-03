"use client";

import Link from "next/link";
import { Carousel } from "@/components/ui/Carousel";
import { ButtonLink } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { stats } from "@/content/stats";

type Slide = {
  eyebrow: string;
  title: string;
  support: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

const slides: Slide[] = [
  {
    eyebrow: "One firm. Every discipline.",
    title: "India's rare CA · CS · CMA multidisciplinary firm",
    support:
      "Audit, tax, AIF/fund, FEMA, M&A and global-entity advisory that normally takes three firms — delivered under one roof.",
    primary: { label: "Book a Consultation", href: "/contact?intent=consultation" },
    secondary: { label: "Explore Services", href: "/services" },
  },
  {
    eyebrow: "AIF & Cross-Border Capital",
    title: "From SEBI registration to fund audit — a complete AIF practice",
    support:
      "Category I/II/III fund formation, FEMA-compliant cross-border structuring and GIFT City IFSC set-up.",
    primary: { label: "Talk to our AIF Expert", href: "/contact?intent=consultation&service=aif-funds" },
    secondary: { label: "AIF & Funds", href: "/services/aif-funds" },
  },
  {
    eyebrow: "Founder to Listed",
    title: "Startup → Series A → IPO → Listed, with one team",
    support:
      "Structuring, fundraising, ESOPs, compliance and IPO readiness across the entire company lifecycle.",
    primary: { label: "Review Your Structure", href: "/contact?intent=consultation&service=startup-vc-pe" },
    secondary: { label: "Startup Advisory", href: "/services/startup-vc-pe" },
  },
  {
    eyebrow: "Global Compliance",
    title: "One Firm. Every Country.",
    support:
      "Pan-India presence and cross-border coverage across the US, UK, UAE, Singapore, Mauritius and Cayman.",
    primary: { label: "Talk to the Cross-Border Team", href: "/contact" },
    secondary: { label: "Global Presence", href: "/global" },
  },
  {
    eyebrow: "Budget 2026",
    title: "Read the Budget 2026 analysis",
    support:
      "Direct and indirect tax changes, sector impact, and what they mean for your business.",
    primary: { label: "Open the Analysis", href: "/insights/budget/2026-27" },
    secondary: { label: "All Insights", href: "/insights" },
  },
];

export function Hero() {
  const years = stats[0]?.value ?? 25;
  return (
    <section className="relative bg-navy-900 text-paper">
      <Carousel
        ariaLabel="Featured highlights"
        slides={slides.map((s, i) => (
          <div key={i} className="relative">
            {/* duotone background */}
            <div className="absolute inset-0">
              <Placeholder ratio="auto" rounded={false} className="h-full w-full opacity-25" label="" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/70" />
            </div>
            <div className="container-bleed relative grid min-h-[78vh] items-center py-20 lg:min-h-[80vh]">
              <div className="max-w-3xl">
                <p className="eyebrow no-rule text-brass-400">{s.eyebrow}</p>
                <h1 className="mt-4 font-display text-display text-paper">{s.title}</h1>
                <p className="mt-5 max-w-xl text-body-lg text-[#C8D3E2]">{s.support}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href={s.primary.href} variant="brass" size="lg">
                    {s.primary.label}
                  </ButtonLink>
                  <ButtonLink href={s.secondary.href} variant="outline-light" size="lg">
                    {s.secondary.label}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      />

      {/* Floating badges — anchored to the lower-right, clear of the sticky header */}
      <div className="pointer-events-none absolute bottom-12 right-[clamp(1rem,5vw,4rem)] z-10 hidden flex-col items-end gap-2 lg:flex">
        <span className="pointer-events-auto rounded-full border border-brass-400/40 bg-navy-950/60 px-4 py-1.5 text-sm font-medium text-brass-400 backdrop-blur">
          {years}+ years of practice
        </span>
        <Link
          href="/about"
          className="pointer-events-auto rounded-full border border-white/20 bg-navy-950/60 px-4 py-1.5 text-sm font-medium text-paper backdrop-blur hover:border-brass-400"
        >
          CA · CS · CMA under one roof
        </Link>
      </div>
    </section>
  );
}

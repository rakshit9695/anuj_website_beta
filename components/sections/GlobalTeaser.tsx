import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { offices } from "@/content/offices";

const countries = [
  { flag: "🇺🇸", label: "USA", href: "/global/usa" },
  { flag: "🇬🇧", label: "UK", href: "/global/uk" },
  { flag: "🇦🇪", label: "UAE", href: "/global/uae" },
  { flag: "🇸🇬", label: "Singapore", href: "/global/singapore" },
  { flag: "🏙️", label: "GIFT City", href: "/global/gift-city" },
];

/** Compact pan-India + global preview. Full maps live on /global. */
export function GlobalTeaser() {
  return (
    <Section tone="navy">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Pan-India & Global"
            title="One firm. Every country."
            intro="A twelve-city Indian footprint anchored in Mumbai, with cross-border coverage across the jurisdictions that matter to Indian capital."
            onDark
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {countries.map((c) => (
              <ButtonLink key={c.label} href={c.href} variant="outline-light" size="sm">
                <span aria-hidden className="mr-1">{c.flag}</span> {c.label}
              </ButtonLink>
            ))}
          </div>
          <div className="mt-6">
            <ButtonLink href="/global" variant="brass">Explore our global presence</ButtonLink>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-medium uppercase tracking-widest text-brass-400">12 Indian offices</p>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-[#C2CEDD] sm:grid-cols-3">
            {offices.map((o) => (
              <span key={o.city}>{o.city}{o.isHQ ? " ★" : ""}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

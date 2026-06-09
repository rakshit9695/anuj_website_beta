import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

/** Bespoke depth blocks for flagship hubs (05 §2). Returns null for others. */
export function PracticeFlagship({ slug }: { slug: string }) {
  if (slug === "aif-funds") return <AifComparison />;
  if (slug === "startup-vc-pe") return <StartupLifecycle />;
  if (slug === "international-tax-tp") return <IntlTaxHighlight />;
  if (slug === "consulting-cfo") return <CostReduction />;
  if (slug === "fema-rbi") return <FemaHighlight />;
  return null;
}

function AifComparison() {
  const cats = [
    { cat: "Category I", desc: "VC, angel, SME, infrastructure & social-impact funds.", note: "Pass-through; concessional treatment for some sub-types." },
    { cat: "Category II", desc: "Private equity, private credit & real-estate funds.", note: "Pass-through; no leverage except for operations." },
    { cat: "Category III", desc: "Hedge & long-short funds using diverse strategies.", note: "May use leverage; generally taxed at fund level." },
  ];
  return (
    <Section tone="alt">
      <SectionHeading eyebrow="AIF Categories" title="Category I · II · III at a glance" />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cats.map((c) => (
          <div key={c.cat} className="rounded-xl border border-ink-300 bg-surface p-6">
            <p className="font-display text-xl text-navy-900">{c.cat}</p>
            <p className="mt-2 text-sm text-ink-700">{c.desc}</p>
            <p className="mt-3 text-xs text-ink-500">{c.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-ink-500">
        Minimum investor commitment ₹1 crore; minimum scheme corpus ₹20 crore (₹10 crore for angel funds).
      </p>
    </Section>
  );
}

function StartupLifecycle() {
  const stages = ["Incorporate", "Seed / Angel", "Series A+", "Pre-IPO", "IPO", "Listed"];
  return (
    <Section tone="navy">
      <SectionHeading eyebrow="Full lifecycle coverage" title="Startup → Series A → IPO → Listed" onDark />
      <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center">
        {stages.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-brass-500 font-display text-brass-400">
                {i + 1}
              </span>
              <span className="mt-2 text-sm text-paper">{s}</span>
            </div>
            {i < stages.length - 1 && <ArrowRight className="hidden h-5 w-5 text-brass-500 md:block" aria-hidden />}
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-[#C2CEDD]">
        One team across the journey — structuring, fundraising, ESOPs, compliance and IPO readiness — so nothing falls between advisors.
      </p>
    </Section>
  );
}

function IntlTaxHighlight() {
  return (
    <Section tone="alt">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-brass-400/60 bg-brass-100/40 p-6">
          <p className="eyebrow no-rule">GloBE / Pillar Two</p>
          <h3 className="mt-2 font-display text-xl text-navy-900">Pillar Two readiness</h3>
          <p className="mt-2 text-sm text-ink-700">
            We model your jurisdiction-by-jurisdiction effective tax rate, identify top-up exposure and prepare the GloBE Information Return.
          </p>
          <Link href="/insights/alerts/pillar-two-what-indian-groups-should-do" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-navy-700">
            Read the Pillar Two bulletin <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="rounded-xl border border-ink-300 bg-surface p-6">
          <h3 className="font-display text-xl text-navy-900">DTAA coverage</h3>
          <p className="mt-2 text-sm text-ink-700">
            Treaty analysis across 95+ countries — withholding optimisation, treaty relief, beneficial ownership and POEM/PE risk.
          </p>
        </div>
      </div>
    </Section>
  );
}

function CostReduction() {
  return (
    <Section tone="navy">
      <div className="rounded-xl border border-brass-400/40 bg-white/5 p-8 text-center">
        <p className="eyebrow no-rule justify-center text-brass-400">Signature service</p>
        <h3 className="mt-3 font-display text-h2 text-paper">The Cost-Reduction Audit</h3>
        <p className="mx-auto mt-3 max-w-2xl text-[#C2CEDD]">
          A structured diagnostic across procurement, overheads, logistics, tax and financing — most engagements identify savings well in excess of the fee. Start with a complimentary opportunity assessment.
        </p>
        <Link href="/contact?intent=consultation&service=consulting-cfo" className="mt-6 inline-flex rounded-lg bg-brass-500 px-5 py-2.5 font-semibold text-paper hover:bg-brass-600">
          Request a Cost-Reduction Audit
        </Link>
      </div>
    </Section>
  );
}

function FemaHighlight() {
  const items = ["FDI (Automatic & Govt route)", "ODI & APR", "ECB advisory", "FC-GPR / FC-TRS / FLA", "Compounding of contraventions"];
  return (
    <Section tone="alt">
      <SectionHeading eyebrow="Every RBI filing" title="Cross-border capital, fully compliant" />
      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i} className="rounded-full border border-ink-300 bg-surface px-4 py-2 text-sm text-ink-700">{i}</span>
        ))}
      </div>
    </Section>
  );
}

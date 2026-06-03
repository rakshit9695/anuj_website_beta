import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Budget 2026-27 Analysis",
  description: "Direct and indirect tax changes in the Union Budget 2026-27, sector-wise impact and what they mean for you.",
  path: "/insights/budget/2026-27",
});

const highlights = [
  { k: "Personal tax", v: "Revised slabs and rebate under the new regime (illustrative)." },
  { k: "Corporate tax", v: "Continued concessional regime; compliance simplification." },
  { k: "Capital gains", v: "Rationalised holding periods and rates across asset classes." },
  { k: "Indirect tax", v: "GST procedural easing and rate rationalisation (illustrative)." },
];

const directRows = [
  ["Standard deduction", "Increased (illustrative)"],
  ["New-regime rebate threshold", "Revised (illustrative)"],
  ["TDS/TCS rationalisation", "Selected sections simplified"],
];
const indirectRows = [
  ["GST rate slabs", "Rationalisation proposed (illustrative)"],
  ["Input tax credit", "Process easing (illustrative)"],
  ["Customs duties", "Selected changes by sector"],
];

function Table({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <tbody className="divide-y divide-ink-300">
          {rows.map((r) => (
            <tr key={r[0]}>
              <td className="py-3 pr-4 font-medium text-navy-900">{r[0]}</td>
              <td className="py-3 text-ink-700">{r[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Budget202627() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insights", href: "/insights" }, { name: "Budget", href: "/insights/budget" }, { name: "2026-27", href: "/insights/budget/2026-27" }]}
        eyebrow="Budget 2026-27"
        title="What the Budget means for you"
        intro="A practical analysis of the direct and indirect tax proposals and their sector impact. Figures below are illustrative placeholders pending the firm's final analysis."
        tone="navy"
      >
        <Button variant="brass">Download the Budget PDF (placeholder)</Button>
      </PageHero>

      <Section tone="paper">
        <SectionHeading eyebrow="At a glance" title="Key highlights" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.k} className="rounded-xl border border-ink-300 bg-surface p-5">
              <p className="font-display text-lg text-navy-900">{h.k}</p>
              <p className="mt-1 text-sm text-ink-700">{h.v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="The detail" title="Tax change tables" />
        <div className="mt-8 rounded-xl border border-ink-300 bg-surface p-6">
          <Tabs
            items={[
              { value: "direct", label: "Direct tax", content: <Table rows={directRows} /> },
              { value: "indirect", label: "Indirect tax", content: <Table rows={indirectRows} /> },
            ]}
          />
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="Impact" title="Sector-wise impact" />
        <Tabs
          className="mt-8"
          items={[
            { value: "startups", label: "Startups", content: <p className="text-ink-700">[Placeholder] Implications for founders, ESOPs and funding.</p> },
            { value: "funds", label: "Funds & AIFs", content: <p className="text-ink-700">[Placeholder] Fund taxation and investor impact.</p> },
            { value: "mfg", label: "Manufacturing", content: <p className="text-ink-700">[Placeholder] Indirect tax, incentives and customs.</p> },
            { value: "individuals", label: "Individuals", content: <p className="text-ink-700">[Placeholder] Personal tax and investment impact.</p> },
          ]}
        />
      </Section>

      <CTABand title="Book a post-Budget consultation" intro="Understand exactly how the Budget affects your business or portfolio." />
    </>
  );
}

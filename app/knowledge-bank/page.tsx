import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/Icon";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Knowledge Bank — free tools & resources",
  description: "Free calculators, rate charts, compliance calendar, acts, rules, forms, bulletins and quick links.",
  path: "/knowledge-bank",
});

const sections = [
  { icon: "Calculator", label: "Calculators", href: "/knowledge-bank/calculators", desc: "Income tax, TDS, GST, capital gains, ESOP, EMI and more." },
  { icon: "Percent", label: "Rates & Utilities", href: "/knowledge-bank/rates", desc: "TDS, income-tax, CII, HSN, depreciation and ROC charts." },
  { icon: "CalendarDays", label: "Important Dates", href: "/knowledge-bank/important-dates", desc: "A full statutory compliance calendar with reminders." },
  { icon: "BookOpen", label: "Acts", href: "/knowledge-bank/acts", desc: "Income Tax, Companies, GST, FEMA, IBC and more." },
  { icon: "FileText", label: "Rules", href: "/knowledge-bank/rules", desc: "CGST, Income-tax, Companies and LLP rules." },
  { icon: "Files", label: "Forms", href: "/knowledge-bank/forms", desc: "IT, GST, ROC, LLP, FEMA and SEBI forms." },
  { icon: "Bell", label: "Bulletins", href: "/knowledge-bank/bulletins", desc: "Regulatory bulletins by category." },
  { icon: "Link2", label: "Quick Links", href: "/knowledge-bank/quick-links", desc: "CBDT, MCA, GSTN, RBI, SEBI and other portals." },
];

export default function KnowledgeBankHub() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Knowledge Bank", href: "/knowledge-bank" }]}
        eyebrow="Free Tools & Resources"
        title="The ADA Knowledge Bank"
        intro="Free calculators, reference charts, a compliance calendar and a library of acts, rules and forms — built to be genuinely useful."
      />
      <Section tone="paper">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="group flex flex-col rounded-xl border border-ink-300 bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-card">
              <IconTile name={s.icon} />
              <h2 className="mt-3 font-display text-lg text-navy-900">{s.label}</h2>
              <p className="mt-1 flex-1 text-sm text-ink-700">{s.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-navy-700">Open <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden /></span>
            </Link>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}

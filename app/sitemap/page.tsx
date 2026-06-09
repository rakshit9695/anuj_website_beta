import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { practices } from "@/content/practices";
import { industries } from "@/content/industries";
import { calculators } from "@/content/calculators";
import { aboutNav, insightsNav, knowledgeBankNav, globalNav, careersNav } from "@/content/nav";

export const metadata: Metadata = buildMetadata({
  title: "Sitemap",
  description: "A complete map of the Anuj Desai & Associates website.",
  path: "/sitemap",
});

function Col({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-lg text-navy-900">{title}</h2>
      <ul className="mt-3 space-y-1.5 text-sm">
        {links.map((l) => (
          <li key={l.href}><Link href={l.href} className="text-navy-700 hover:underline">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default function HumanSitemap() {
  return (
    <>
      <PageHero crumbs={[{ name: "Sitemap", href: "/sitemap" }]} eyebrow="Navigate" title="Sitemap" intro="Every section of the site in one place." />
      <Section tone="paper">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Col title="Services" links={practices.map((p) => ({ label: p.title, href: `/services/${p.slug}` }))} />
          <Col title="Industries" links={industries.map((i) => ({ label: i.title, href: `/industries/${i.slug}` }))} />
          <div className="space-y-10">
            <Col title="About" links={aboutNav} />
            <Col title="Global" links={globalNav} />
          </div>
          <Col title="Insights" links={insightsNav} />
          <div className="space-y-10">
            <Col title="Knowledge Bank" links={knowledgeBankNav} />
            <Col title="Calculators" links={calculators.map((c) => ({ label: c.title, href: `/knowledge-bank/calculators/${c.slug}` }))} />
          </div>
          <div className="space-y-10">
            <Col title="Careers" links={careersNav} />
            <Col title="Company" links={[{ label: "Contact", href: "/contact" }, { label: "Privacy", href: "/legal/privacy" }, { label: "Terms", href: "/legal/terms" }, { label: "Cookie Policy", href: "/legal/cookie-policy" }, { label: "Disclaimer", href: "/legal/disclaimer" }]} />
          </div>
        </div>
      </Section>
    </>
  );
}

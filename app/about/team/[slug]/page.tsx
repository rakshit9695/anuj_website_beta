import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { team, teamBySlug } from "@/content/team";
import { practiceBySlug } from "@/content/practices";
import { getAllPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { QualificationChips } from "@/components/ui/Badge";
import { InsightCard } from "@/components/ui/Cards";
import { CTABand } from "@/components/ui/CTABand";
import { PersonJsonLd } from "@/components/ui/JsonLd";

export function generateStaticParams() {
  return team.filter((t) => t.leadership).map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = teamBySlug(params.slug);
  if (!m) return {};
  return buildMetadata({ title: `${m.name} — ${m.role}`, description: m.bio.slice(0, 200), path: `/about/team/${m.slug}` });
}

export default function ProfilePage({ params }: { params: { slug: string } }) {
  const m = teamBySlug(params.slug);
  if (!m) notFound();
  const practice = m.practice ? practiceBySlug(m.practice) : undefined;
  const authored = getAllPosts().filter((p) => p.author === m.name).slice(0, 3);

  return (
    <>
      <PersonJsonLd name={m.name} role={m.role} href={`/about/team/${m.slug}`} />
      <PageHero
        crumbs={[{ name: "About", href: "/about" }, { name: "Team", href: "/about/team" }, { name: m.name, href: `/about/team/${m.slug}` }]}
        eyebrow="Profile"
        title={m.name}
        intro={m.role}
      />
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <Placeholder ratio="1/1" label="Headshot" tone="light" />
            <div className="mt-4"><QualificationChips chips={m.qualifications} /></div>
            {practice && (
              <p className="mt-4 text-sm text-ink-700">
                Practice: <Link href={`/services/${practice.slug}`} className="text-navy-700 hover:underline">{practice.title}</Link>
              </p>
            )}
            <p className="mt-2 text-xs text-ink-500">[CLIENT TO PROVIDE — photo, LinkedIn, bio]</p>
          </div>
          <div>
            <h2 className="font-display text-h2 text-navy-900">About {m.name.replace(/[[\]]/g, "")}</h2>
            <p className="mt-3 text-ink-700">{m.bio}</p>
            <h3 className="mt-6 font-display text-xl text-navy-900">Areas of expertise</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {m.expertise.map((e) => (
                <span key={e} className="rounded-full border border-ink-300 bg-surface px-3 py-1 text-sm text-ink-700">{e}</span>
              ))}
            </div>
            {authored.length > 0 && (
              <>
                <h3 className="mt-8 font-display text-xl text-navy-900">Authored insights</h3>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  {authored.map((p) => (
                    <InsightCard key={p.slug} href={`/insights/${p.type === "blog" ? "blog" : p.type === "alert" ? "alerts" : "case-studies"}/${p.slug}`} title={p.title} category={p.category} date={p.date} excerpt={p.excerpt} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}

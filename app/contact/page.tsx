import type { Metadata } from "next";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { buildMetadata, geoMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { QueryForm } from "@/components/forms/QueryForm";
import { FindMyService } from "@/components/forms/FindMyService";
import { IndiaMap } from "@/components/ui/IndiaMap";
import { Placeholder } from "@/components/ui/Placeholder";
import { LocalBusinessJsonLd } from "@/components/ui/JsonLd";
import { site, whatsappUrl } from "@/lib/site";
import { offices } from "@/content/offices";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Contact ADA",
    description: "Get in touch with Anuj Desai & Associates — offices across India, plus consultation and enquiry forms.",
    path: "/contact",
  }),
  other: geoMeta,
};

export default function ContactPage({ searchParams }: { searchParams: { intent?: string; service?: string } }) {
  const intent = searchParams.intent;
  const isConsult = intent === "consultation";
  const isQuiz = intent === "quiz";

  return (
    <>
      <LocalBusinessJsonLd offices={offices} />
      <PageHero
        crumbs={[{ name: "Contact", href: "/contact" }]}
        eyebrow="Contact"
        title={isQuiz ? "Find the right service" : "Talk to ADA"}
        intro={isQuiz ? "Answer three quick questions and we'll point you to the right team." : "Tell us what you need. We respond within one business day."}
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {isQuiz ? (
              <FindMyService />
            ) : (
              <>
                <SectionHeading
                  eyebrow={isConsult ? "Consultation" : "Send a query"}
                  title={isConsult ? "Book a consultation" : "How can we help?"}
                  as="h2"
                />
                <div className="mt-6">
                  {isConsult ? <ConsultationForm defaultService={searchParams.service} /> : <QueryForm />}
                </div>
              </>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-ink-300 bg-surface-alt p-6">
              <h3 className="font-display text-lg text-navy-900">Quick actions</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href={site.phoneHref} className="flex items-center gap-2 text-ink-700 hover:text-navy-900"><Phone className="h-4 w-4 text-brass-600" aria-hidden /> {site.phone}</a></li>
                <li><a href={`mailto:${site.email}`} className="flex items-center gap-2 text-ink-700 hover:text-navy-900"><Mail className="h-4 w-4 text-brass-600" aria-hidden /> {site.email}</a></li>
                <li><a href={whatsappUrl()} className="flex items-center gap-2 text-ink-700 hover:text-navy-900"><MessageCircle className="h-4 w-4 text-brass-600" aria-hidden /> WhatsApp us</a></li>
              </ul>
            </div>
            <div className="rounded-xl border border-ink-300 bg-surface p-6">
              <h3 className="font-display text-lg text-navy-900">{site.hq.city} HQ</h3>
              <p className="mt-2 text-sm text-ink-700">{site.hq.address}</p>
              <div className="mt-3"><Placeholder ratio="4/3" label="Map embed" /></div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Our offices" title="Find us across India" />
        <div className="mt-8"><IndiaMap /></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((o) => (
            <div key={o.city} className="rounded-xl border border-ink-300 bg-surface p-5">
              <p className="font-display text-lg text-navy-900">{o.city}{o.isHQ && <span className="ml-2 text-xs font-semibold uppercase text-brass-600">HQ</span>}</p>
              <p className="mt-1 text-sm text-ink-700">{o.address}</p>
              {o.phone && <a href={site.phoneHref} className="mt-1 block text-sm text-navy-700">{o.phone}</a>}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

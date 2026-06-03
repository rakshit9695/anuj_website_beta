import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button, ButtonLink } from "@/components/ui/Button";
import { IconTile } from "@/components/ui/Icon";
import {
  CredentialBadge,
  CategoryTag,
  TypeBadge,
  QualificationChips,
} from "@/components/ui/Badge";
import {
  ServiceCard,
  IndustryCard,
  InsightCard,
  StatCard,
  CaseStudyCard,
  PersonCard,
} from "@/components/ui/Cards";
import { StatCounter } from "@/components/ui/StatCounter";
import { FaqAccordion } from "@/components/ui/Accordion";
import { Tabs } from "@/components/ui/Tabs";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABand } from "@/components/ui/CTABand";
import { FormField, Input, Select, Textarea } from "@/components/ui/Field";
import { Placeholder } from "@/components/ui/Placeholder";
import { alertCategories } from "@/content/alerts";

export const metadata: Metadata = {
  title: "Component Kit",
  robots: { index: false, follow: false },
};

export default function KitPage() {
  return (
    <>
      <Section>
        <Breadcrumb items={[{ name: "Component Kit", href: "/_kit" }]} />
        <SectionHeading
          eyebrow="QA"
          title="Design-system kit"
          intro="Hidden, noindex page to visually verify the core components from the design system."
          className="mt-6"
        />
      </Section>

      <Section tone="alt">
        <h2 className="mb-6 font-display text-h2">Buttons</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="brass">Brass primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost link</Button>
          <ButtonLink href="/contact">Button link</ButtonLink>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section>
        <h2 className="mb-6 font-display text-h2">Badges &amp; chips</h2>
        <div className="flex flex-wrap items-center gap-3">
          <CredentialBadge label="IBBI Registered IP" />
          <CredentialBadge label="SEBI-recognised AIF Advisor" />
          <TypeBadge label="PDF" />
          <TypeBadge label="Tool" />
          <QualificationChips chips={["CA", "CS", "CMA"]} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {alertCategories.map((c) => (
            <CategoryTag key={c.key} categoryKey={c.key} />
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <h2 className="mb-6 font-display text-h2">Cards</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard href="#" icon="TrendingUp" title="AIF & Fund Management" tagline="Category I/II/III formation, SEBI compliance and fund audit." />
          <InsightCard href="#" category="direct" type="Alert" title="CBDT extends due date for tax-audit reports" author="ADA Tax Desk" date="2026-05-20" excerpt="A short, clean editorial excerpt demonstrating the insight card layout and meta." />
          <CaseStudyCard metric="Reduced ETR by 8%" sector="Manufacturing" context="Restructured a group's holding chain to optimise effective tax rate." />
          <PersonCard name="[Partner Name]" role="Managing Partner" qualifications={["CA", "CS"]} />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <IndustryCard href="#" icon="Rocket" title="Startups" />
          <IndustryCard href="#" icon="Cpu" title="Technology" />
          <IndustryCard href="#" icon="TrendingUp" title="Funds & AIFs" />
          <IndustryCard href="#" icon="Ship" title="Exporters" />
        </div>
      </Section>

      <Section tone="navy">
        <h2 className="mb-6 font-display text-h2 text-paper">Stat counters (on navy)</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <StatCounter value={25} suffix="+" label="Years" onDark />
          <StatCounter value={1500} suffix="+" label="Clients" onDark />
          <StatCounter value={15} suffix="+" label="Countries" onDark />
          <StatCounter value={120} suffix="+" label="Professionals" onDark />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          <StatCard value="₹500cr+" label="Transactions advised" onDark />
          <StatCard value="18" label="Practice areas" onDark />
          <StatCard value="25" label="Industries" onDark />
          <StatCard value="12" label="Cities" onDark />
        </div>
      </Section>

      <Section>
        <h2 className="mb-6 font-display text-h2">Tabs &amp; accordion</h2>
        <Tabs
          items={[
            { value: "a", label: "Overview", content: <p className="text-ink-700">Tab content A.</p> },
            { value: "b", label: "Approach", content: <p className="text-ink-700">Tab content B.</p> },
            { value: "c", label: "FAQ", content: <p className="text-ink-700">Tab content C.</p> },
          ]}
        />
        <div className="mt-8 max-w-2xl">
          <FaqAccordion
            faqs={[
              { q: "Is this accordion accessible?", a: "Yes — it is built on Radix with keyboard support and smooth height animation." },
              { q: "Does it respect reduced-motion?", a: "Global reduced-motion handling shortens the animation to near-instant." },
            ]}
          />
        </div>
      </Section>

      <Section tone="alt">
        <h2 className="mb-6 font-display text-h2">Form fields</h2>
        <div className="grid max-w-2xl gap-4 sm:grid-cols-2">
          <FormField label="Name" htmlFor="k-name" required>
            <Input id="k-name" placeholder="Your name" />
          </FormField>
          <FormField label="Service interest" htmlFor="k-svc">
            <Select id="k-svc">
              <option>Audit &amp; Assurance</option>
              <option>Direct Tax</option>
            </Select>
          </FormField>
          <FormField label="Message" htmlFor="k-msg" error="This is an example error state">
            <Textarea id="k-msg" />
          </FormField>
          <div>
            <p className="mb-1.5 text-sm font-medium text-navy-900">IconTile + Placeholder</p>
            <div className="flex items-center gap-3">
              <IconTile name="ShieldCheck" />
              <Placeholder ratio="1/1" className="h-16 w-16" label="" tone="brass" />
            </div>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

import { Section } from "@/components/ui/Section";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";

export function NewsletterBand() {
  return (
    <Section tone="paper">
      <div className="rounded-xl border border-ink-300 bg-surface-alt p-8 md:p-10">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">Stay informed</p>
            <h2 className="mt-3 font-display text-h2 text-navy-900">
              ADA insights, in your inbox
            </h2>
            <p className="mt-2 max-w-md text-ink-700">
              Tax alerts, regulatory updates and analysis — pick the topics that
              matter to you.
            </p>
          </div>
          <div>
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </Section>
  );
}

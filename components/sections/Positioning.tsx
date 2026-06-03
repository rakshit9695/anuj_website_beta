import { Section, Eyebrow } from "@/components/ui/Section";
import { QualificationChips, CredentialBadge } from "@/components/ui/Badge";
import { flags } from "@/lib/flags";

const regulators = ["SEBI", "RBI", "IRDAI", "IBBI", "GIFT City IFSC"];

/** The firm's thesis — triple-qualified, all under one roof. */
export function Positioning() {
  return (
    <Section tone="paper">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow className="justify-center">All under one roof</Eyebrow>
        <p className="mt-5 font-display text-h2 leading-tight text-navy-900">
          Most firms do one thing well. We bring chartered accountancy, company
          secretarial and cost &amp; management expertise together — so audit,
          tax, regulatory and cross-border work is handled by a single,
          accountable team.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <QualificationChips chips={["CA", "CS", "CMA"]} />
        </div>
        {flags.SHOW_CREDENTIAL_BADGES && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {regulators.map((r) => (
              <CredentialBadge key={r} label={r} />
            ))}
          </div>
        )}
        <p className="mt-3 text-xs text-ink-500">
          Regulatory registrations and empanelments shown are indicative and to
          be confirmed by the firm.
        </p>
      </div>
    </Section>
  );
}

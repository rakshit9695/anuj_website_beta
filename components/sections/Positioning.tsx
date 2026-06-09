import { Section, Eyebrow } from "@/components/ui/Section";
import { QualificationChips } from "@/components/ui/Badge";

/**
 * Authorities and regulators the firm regularly interfaces with on behalf of
 * clients. Framed as practice scope (not empanelment/registration claims) per
 * client direction (Book1, Home #7). The firm should confirm this list.
 */
const authorities = [
  "MCA",
  "ROC",
  "NCLT / NCLAT",
  "CCI",
  "Income Tax (CBDT)",
  "GST (CBIC)",
  "Enforcement Directorate",
  "Customs",
  "RBI",
  "FEMA",
  "SEBI",
  "NSE",
  "BSE",
  "NSDL",
  "CDSL",
  "IFSCA (GIFT City)",
  "IRDAI",
  "PFRDA",
  "IBBI",
  "DGFT",
  "EPFO",
  "ESIC",
  "FIU-IND",
  "FCRA",
  "Charity Commissioner",
  "FSSAI",
  "CDSCO",
  "RERA",
];

/** The firm's thesis — integrated expertise, all under one roof. */
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
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.12em] text-brass-600">
          Regulators &amp; authorities we regularly engage with
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {authorities.map((a) => (
            <span
              key={a}
              className="rounded-full border border-ink-300 bg-surface px-3 py-1.5 text-sm text-navy-800"
            >
              {a}
            </span>
          ))}
          <span className="px-2 py-1.5 text-sm italic text-ink-500">
            …and other Central, State &amp; sectoral regulatory authorities
          </span>
        </div>
      </div>
    </Section>
  );
}

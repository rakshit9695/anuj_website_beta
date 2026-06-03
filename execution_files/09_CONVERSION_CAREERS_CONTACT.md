# 09 — CONVERSION · FORMS · CAREERS · CONTACT

> All lead-capture, the contact experience, careers, and the form infrastructure. Every form is real (validates, shows states, posts to a typed stub) but the CRM/email backend is pluggable — the firm connects HubSpot/Zoho/Salesforce later by implementing one interface.

---

## 1. FORM INFRASTRUCTURE (build first in this phase)
- **Stack:** React Hook Form + Zod. Accessible labels/errors, keyboard-friendly, ≥44px targets, inline success card (no hard redirect), error handling with retry. Honeypot + basic rate-limit; optional reCAPTCHA/Turnstile slot (config flag).
- **Provider interface:** a single `LeadProvider` abstraction:
```ts
interface LeadProvider {
  submit(form: 'consultation'|'query'|'newsletter'|'lead-magnet'|'event'|'career'|'contact', payload: Record<string,unknown>): Promise<{ok:boolean; id?:string; error?:string}>;
}
```
  Provide a `ConsoleLeadProvider` (logs + returns ok) as default and a `NoopEmailProvider`. API routes under `/app/api/lead/[form]/route.ts` call the configured provider. Document in `BUILD_NOTES.md` how to swap in HubSpot/Zoho (env-driven). **Never lose a submission silently.**
- **Consent:** forms include a privacy/consent checkbox linking to the Privacy Policy; store consent in payload (DPDP-minded).
- **UTM/analytics:** capture UTM params + page source on every submission; fire a conversion event (see `10`) on success.

## 2. FORM TYPES
- **Book a Consultation** (the primary CTA everywhere): Name · Email · Phone · Company · Service interest (select from practices) · Preferred time/mode · Message. Brass primary submit.
- **Multi-step Inquiry / "Send Query"**: step 1 contact, step 2 query type + service + message; progress indicator; "We'll contact you within 24 hours" promise. Used on Contact + homepage.
- **Newsletter signup**: email + topic-interest chips (Tax/GST/AIF/FEMA/Regulatory). Footer + inline + popup.
- **Lead-magnet / gated download**: email (+ name) → returns download link/file; ties to `LeadMagnet` (`03 §6`). Reused on hubs/whitepapers/surveys.
- **Event / Webinar registration**: name · email · org · which event → confirmation state + (stub) calendar invite.
- **Career application**: role · name · email · phone · resume upload (stub storage) · message; plus **Articleship application**.
- **Contact form**: general enquiry.

## 3. SITEWIDE CONVERSION ELEMENTS (from `02 §6`, implement here)
- **Floating WhatsApp button** (prefilled message; desktop hover QR popover — placeholder number).
- **Sticky "Book Consultation / Get a Quote"** in header; optional slim bottom CTA bar after scroll (dismissible).
- **Click-to-call** phone in utility bar (mobile tap-to-call), **mailto** with prefilled subject/body, **WhatsApp** prefilled link — all placeholder values from data.
- **Pop-up / slide-in** lead-magnet or newsletter offer (60% scroll OR 30s, once/session, dismissible, never blocks mobile content).
- **"Find My Service" quiz** (differentiator): answer ~3 questions (business type · need · stage) → recommended practice/service + consultation CTA. Client-side logic mapping answers → `03` practices. First-mover feature; keep it elegant.
- **Online payment** button (Razorpay/PayU) — a stub/config-flagged placeholder for retainer/consultation fees (don't integrate live keys; provide the slot + clear `CLIENT_TODO`).

## 4. CONTACT PAGE — `/contact`
- Hero (eyebrow "CONTACT", H1, lede + 24-hour response promise).
- **Multi-city offices**: cards per office (city, address, phone click-to-call, email, **Google Maps embed**, partner-in-charge) — all placeholder; HQ Mumbai first. Reuse office data from `03`.
- **Multi-step query form** (primary) beside contact details.
- WhatsApp / phone / email quick actions; social links.
- Map of offices (reuse India map component, `06`).
- `LocalBusiness` + `Organization` JSON-LD with office data (`10`).

## 5. CAREERS — `/careers` (+ sub-pages)
- **Careers hub / Life at ADA**: culture section, photos (placeholder), values, benefits, "Why join" highlights, EVP copy (placeholder). 
- **Current Openings** `/careers/openings` (+ `[slug]`): role listings from data (title, team, location, type, description, responsibilities, requirements) + apply form. Empty-state handled gracefully.
- **Articleship / Internship** `/careers/articleship`: dedicated programme page + "Apply for Articleship" CTA/form (a header CTA too).
- **Why Join ADA** `/careers/why-join`: talent-acquisition culture page (growth, exposure across CA/CS/CMA practices, mentorship).
- **Alumni** `/careers/alumni`: alumni network page (sign-up + value prop) — placeholder.
- Optional: Code of Conduct for candidates, D&I/culture content.
- `JobPosting` JSON-LD on each opening (`10`).

## 6. SHARED
- One form-field component set, one submit-handler pattern, consistent success/error UX everywhere.
- All CTA copy from `03 §7` and honours the tone/config switch (ICAI-aware) from `03`.
- Every gated asset + office + phone/email/WhatsApp/number is placeholder → `CLIENT_TODO.md`.
- Flag in `BUILD_NOTES.md`: aggressive lead-gen/popups and payment collection should be reviewed against ICAI norms before launch.

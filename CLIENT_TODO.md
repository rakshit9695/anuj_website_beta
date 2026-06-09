# CLIENT_TODO.md — data & assets the firm must supply

Every item below is a clearly-marked placeholder in the build. The firm replaces values by editing **data files only** (no code changes) unless noted. Search the codebase for `[CLIENT TO PROVIDE]` and `placeholder`.

---

## ⚑ Book1 revision round (client change-list) — applied & blocked

**Applied** from `Book1.xlsx`: theme recoloured to white/blue/green; tagline → "India's leading Chartered Accountancy & consulting firm"; wordmark sub-label → "Chartered Accountants"; removed "25+ years"/"15+ countries" claims (now qualitative); homepage industries categorised; authorities-interface block added; new founder message + About / Our Story / Mission-Vision-Values copy; team reduced to the founder only; offices reduced to **Mumbai, Ahmedabad, Surat**; removed client logos / testimonials / awards / "recent recognition" (ICAI) via flags; removed About sub-pages (Our Journey, Awards, Credentials, Code of Ethics, CSR) and the **/media** section; removed "Peer-Reviewed Firm" badge; acts/rules/forms repositories and the rates Reference Library expanded to the client's full catalogue; all calculator stubs implemented + **Net Profit** and **NSC** added.

---

## ✅ Client documents round (9 June 2026) — what was applied from `/public`

Mapped from `2026-06-09_ADA_Website_Information_Request.docx`, `2026-06-06_Services.docx`, the compliance workbooks and `White Background Logo`:

**Applied (live in the site now):**
- **Contact details** → real phone `+91 96194 56656`, email `office@anujdesaiassociates.com`, WhatsApp, and the Ghatkopar (Mumbai) HQ address in `lib/site.ts` + footer/contact.
- **Socials** → only the two real profiles (LinkedIn `ca-anuj-desai-122547230`, Instagram `anuj_desai_associates`); X/YouTube/Facebook placeholders removed.
- **Offices** → real Mumbai HQ + Surat addresses; coordinates refined; map pins accurate. (**Ahmedabad address still pending** — not supplied.)
- **Founder** → CA Anuj Desai real bio, LinkedIn and full Founder's-Desk message on home + `/about/team`.
- **About / Our Story / Mission-Vision-Values** → client's real narrative + the 8 core values (Integrity, Excellence, Client First, Accountability, Innovation, Collaboration, Value Creation, Trust).
- **Logo** → `White Background Logo` used in header + footer (in a white chip) and as the default social-share/OG image.
- **Guiding pillars** removed from the homepage (client request), and **transactions/case-study strips** removed (ICAI: "display nothing").
- **Legal pages** → Privacy, Terms, Cookie Policy and Disclaimer now carry the client's supplied text.
- **Compliance calendar** → the firm's full FY calendar (743 entries: GST, Income Tax, MCA/ROC, FEMA, RBI/NBFC, SEBI, PF/ESIC, SEZ/STPI, DGFT, PT) is live on `/knowledge-bank/important-dates`, filterable by category.
- **Bulletins** → two sections, as requested: live regulatory sources (auto, to be wired to a feed) + firm-published bulletins.
- **Careers** → "Life at ADA" culture content removed; current openings listed; applications routed to `office@anujdesaiassociates.com`.
- **Services** → the `2026-06-06_Services.docx` 15-area taxonomy is fully covered by the existing 18 practice pages (verified). Deeper per-service copy from the doc can be folded in on request.
- **ICAI** → confirmed "display nothing": client logos, testimonials, transactions, awards, media and all credential/empanelment badges stay OFF.

**Still pending from the client (kept empty / decisions):**
- [ ] **All photographs** — founder portrait, any team photos, article/hero images, award & certificate images. Kept as empty placeholders per instruction.
- [ ] **Ahmedabad office address** (only Mumbai + Surat were supplied).
- [ ] **CMS / simple editor** — client chose option (b): build a simple in-site editor for News/Articles/Case Studies/Careers. This is a backend feature beyond the current static build — scope & build separately. (Articles, downloadable resources, case studies and job postings will be managed there.)
- [ ] **Analytics & verification IDs** — client wants GA + Search Console; IDs not yet supplied (`NEXT_PUBLIC_GA_ID`, verification metas).
- [ ] **Enquiry handling / email service** — undecided; currently the console lead-provider stub. Recommend a simple transactional-email + inbox to `office@` to start.
- [ ] **Credentials / awards / testimonials / media / ISO / Peer-Review** — client to confirm under ICAI before any are shown (currently all hidden).
- [ ] Verify deep links for acts/rules/forms (they point to official source roots) and re-confirm rate figures (`verified` by client, but re-check at launch).

## Contact & firm details — `lib/site.ts`
- [x] HQ address, phone, email, WhatsApp number — **supplied & applied**
- [x] Social profile URLs — LinkedIn + Instagram applied (no others provided)
- [ ] Confirm the production URL before launch (currently `www.anujdesaiassociates.com`)

## Offices — `content/offices.ts`
- [x] Mumbai HQ + Surat — real addresses, phone, email, partner-in-charge applied
- [ ] **Ahmedabad address** still pending (not supplied)
- [ ] (Optional) Set `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY` to switch the map from the keyless embed to the official Google Maps Embed API (removes the "for development only" treatment).

## Team — `content/team.ts`
- [x] Founder (CA Anuj Desai) — real bio + LinkedIn applied
- [ ] Founder **photo** still pending (placeholder kept). Add more members later if desired.

## Differentiators / credentials — `content/differentiators.ts`, `content/firm.ts`
- [ ] Confirm each regulatory empanelment/registration before the badge is shown (SEBI, RBI, IRDAI, IBBI, CAG, DPIIT, CERT-IN)
- [ ] ISO certificate(s) and ICAI Peer Review certificate (images/PDFs)

## Firm narrative — `content/firm.ts`, About pages
- [ ] Our Story copy, real journey/timeline milestones, Mission/Vision/Values wording
- [ ] Founder's name, photo and message (homepage Founder's Desk + About)
- [ ] CSR initiatives and policy PDF

## Awards — `content/firm.ts` (`awards`)
- [ ] Real awards/rankings with year, body, category, logo — **and confirm ICAI permits display**

## Lead magnets — `content/leadMagnets.ts` + files
- [ ] The actual PDF/Excel/checklist files for every gated/ungated magnet

## Insights / content — `content/posts/*.mdx`
- [ ] Replace all `sample: true` posts with real alerts, articles, whitepapers, surveys, case studies, press releases and news
- [ ] Per-article hero images and downloadable PDFs
- [ ] Real video IDs for webinars/podcasts/videos (YouTube facade currently uses placeholders)

## Trust modules (ICAI review first — see BUILD_NOTES.md)
- [ ] Testimonials (real, permitted), client logos, recent-transaction examples, media-mention logos + rights

## Knowledge Bank — `content/rates/*`, `content/repository.ts`, `content/complianceDates.ts`
- [ ] Verify all rate values (TDS, slabs, CII, HSN/GST, depreciation, ROC/LLP fees) against latest notifications
- [ ] Verify compliance due dates each year
- [ ] Confirm/expand acts, rules, forms and quick-link destinations; add hosted/official file links
- [ ] Confirm logic for the `status:'stub'` calculators (net-worth, aif-waterfall, cfo-roi, gst-refund-estimator, rera)

## Careers — `content/careers.ts`
- [ ] Real openings; "Life at ADA" culture copy and photos; resume upload storage (currently a stub)

## SEO / analytics / legal
- [ ] `NEXT_PUBLIC_GA_ID` (+ GTM/Meta Pixel/LinkedIn IDs if used); Search Console / Bing verification metas
- [ ] Default OG image asset
- [ ] Lawyer-reviewed Privacy, Terms, Cookie Policy and Disclaimer (current pages are placeholders)
- [ ] CRM provider wiring (HubSpot/Zoho) per BUILD_NOTES.md; transactional email provider
- [ ] Payment gateway keys if `ENABLE_PAYMENTS` is turned on

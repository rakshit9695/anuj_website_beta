# CLIENT_TODO.md — data & assets the firm must supply

Every item below is a clearly-marked placeholder in the build. The firm replaces values by editing **data files only** (no code changes) unless noted. Search the codebase for `[CLIENT TO PROVIDE]` and `placeholder`.

## Contact & firm details — `lib/site.ts`
- [ ] HQ address, phone, email, WhatsApp number
- [ ] Production URL (for canonical/OG/sitemap)
- [ ] Social profile URLs (LinkedIn, Instagram, X, YouTube, Facebook)

## Offices — `content/offices.ts`
- [ ] Address, phone, email, partner-in-charge and (optional) Google Maps embed for all 12 cities
- [ ] Confirm the city list and which is HQ

## Stats — `content/stats.ts`
- [ ] Confirm/replace: years, clients served, countries, professionals, engagements

## Team — `content/team.ts`
- [ ] Real names, designations, qualifications, bios, photos, LinkedIn URLs for all members
- [ ] Confirm which members get individual profile pages (`leadership: true`)

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

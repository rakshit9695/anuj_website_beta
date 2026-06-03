# BUILD_NOTES.md — ADA website

Decisions, conflicts, provider-swap, content authoring, and ICAI-compliance flags.

## Tech & decisions
- **Next.js 14.2 (App Router), React 18, TypeScript strict, Tailwind** with a CSS-variable token theme (no raw hex in components). Matches the existing dev site family so it can replace it.
- **Fonts:** Fraunces (display), Inter (body), IBM Plex Mono (calculator readouts) via `next/font/google`.
- **UI primitives:** Radix (dialog, accordion, tabs, dropdown, popover) styled to the design system; `cva` + `clsx` + `tailwind-merge` for variants.
- **Motion:** Framer Motion, restrained; all motion respects `prefers-reduced-motion`.
- **Content:** structured data in `/content/*.ts`; long-form as **MDX** in `/content/posts` parsed with `gray-matter` + `reading-time`, rendered via `next-mdx-remote/rsc`.
- **Icons:** `lucide-react`. NOTE: lucide removed brand/social icons in the installed version, so social icons are inline SVGs in `components/ui/SocialIcon.tsx`.
- **Zod v4** is installed — use `z.boolean().refine(...)` (not `z.literal(true,{errorMap})`).

### Windows path caveat (important for local dev)
The project path contains `&` (`...\AD&A\website`), which breaks npm's Windows script shim. Use **either**:
- the no-ampersand junction created at `C:\Users\Rakshit Mishra\Desktop\ADA-site` → run `npm run dev` / `npm run build` there, **or**
- `node "node_modules/next/dist/bin/next" dev|build` directly from the real folder.

## Forms / provider swap
- All forms post to typed routes `app/api/lead/[form]/route.ts`, which call the configured `LeadProvider` (`lib/providers.ts`). Default is `ConsoleLeadProvider` (logs server-side + acknowledges) so **no submission is lost silently**.
- To connect HubSpot/Zoho/Salesforce: implement `LeadProvider.submit()` in `lib/providers.ts` and select it in `getLeadProvider()` (env-driven, e.g. `LEAD_PROVIDER=hubspot`). No other code changes needed.
- Forms capture consent + UTM/source, include a honeypot (`company_website`), and show inline success cards (no hard redirect). Optional captcha slot behind `NEXT_PUBLIC_ENABLE_CAPTCHA`.

## Analytics (consent-gated)
- `components/layout/Analytics.tsx` loads GA4 **only after** analytics consent (cookie banner). Set `NEXT_PUBLIC_GA_ID`. GTM / Meta Pixel / LinkedIn Insight slots can be added the same way. The `track()` util (`lib/track.ts`) no-ops before consent.

## Content authoring (how the firm adds posts)
- Add an `.mdx` file under `content/posts/` with frontmatter (`title, slug, type, category, practice, author, date, excerpt, tags, featured?, pdf?, sample?`).
- `type` routes it automatically: `alert → /insights/alerts`, `blog → /insights/blog`, `case-study → /insights/case-studies`, `whitepaper → /insights/whitepapers`, `survey → /insights/surveys`, `press → /media/press-releases`, `news → /media/news`.
- Keep titles clean editorial sentences and tags short (≤6). **No hashtag walls.**
- All current posts are flagged `sample: true` — replace with real content.

## Config flags (`lib/flags.ts`)
ICAI-sensitive modules are **ON for the local demo** so everything renders, but must be reviewed before launch:
- `SHOW_CLIENT_LOGOS`, `SHOW_TESTIMONIALS`, `SHOW_TRANSACTIONS`, `SHOW_AWARDS`, `SHOW_CREDENTIAL_BADGES`
- `AGGRESSIVE_CTA_COPY` — when false, "free/zero-cost" CTA copy switches to toned-down alternatives sitewide.
- `ENABLE_PAYMENTS` (off), `ENABLE_CAPTCHA` (off).
Drive any of these from env (e.g. `NEXT_PUBLIC_SHOW_TESTIMONIALS=false`).

## ⚠️ ICAI Code of Ethics review (do before going live)
The following must be reviewed against ICAI advertising/solicitation guidelines and disabled or toned down as required:
1. **Testimonials** (`SHOW_TESTIMONIALS`) — placeholder personas; client names/quotes likely restricted.
2. **Client logos / "Trusted by"** (`SHOW_CLIENT_LOGOS`).
3. **Recent-transactions ticker** (`SHOW_TRANSACTIONS`).
4. **Awards / rankings** (`SHOW_AWARDS`) — confirm each ranking and permitted display.
5. **Regulatory empanelment badges** (`SHOW_CREDENTIAL_BADGES`) — SEBI/RBI/IRDAI/IBBI/CAG/DPIIT/CERT-IN — display only once each registration is confirmed.
6. **Aggressive "free / zero-cost" CTA copy** (`AGGRESSIVE_CTA_COPY`) — consider the toned-down set.
7. **Pop-up lead-magnet offer** and sticky CTA bar — aggressive solicitation review.
8. **Online payment** collection — review before enabling.
The site `/legal/disclaimer` already carries a non-solicitation statement; have counsel finalise it.

## Calculators
- 8 must-have calculators have full FY 2025-26 / AY 2026-27 logic (income tax old-vs-new, TDS, GST add, reverse-GST, HRA, capital gains, ESOP, EMI). Rates live in `content/rates/*` (editable) and are shared with the rate charts.
- Should-have calculators (net-worth, aif-waterfall, cfo-roi, gst-refund-estimator, rera) are registered with `status:'stub'` and show a "coming soon" panel — no wrong numbers shipped.
- Every calculator shows an **indicative-only** disclaimer and a "Talk to ADA" CTA.

## Known conflicts / notes
- App Router treats underscore-prefixed folders as private, so the QA kit lives at `app/%5Fkit` to serve `/_kit` (noindex) per the brief.
- `app/sitemap.ts` serves `/sitemap.xml`; the human-readable sitemap is `app/sitemap/page.tsx` at `/sitemap`.

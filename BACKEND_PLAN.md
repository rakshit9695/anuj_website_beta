# BACKEND_PLAN.md — admin & publishing backend for the ADA website

> **Status: PLAN ONLY — not implemented.** This documents the backend the firm
> needs so the team can (a) **publish and update Insights / Articles / Case
> Studies** without a developer, and (b) **manage Careers** (post openings,
> receive applications). Requested by the client on 12 Jun 2026
> ("backend de please i will publish and update", "sabka backend access dia hai
> to publish articles insights and stuff", and a managed Careers backend).
>
> The current site is a **static Next.js 14 build** — content lives in
> `content/**` data files and `content/posts/**.mdx`, and is changed only by
> editing code and redeploying. The goal below is to add a lightweight admin
> layer so non-technical staff can manage content from a browser.

---

## 1. What the backend must do

| Capability | Detail |
|---|---|
| **Publish Insights/Articles** | Create, edit, draft, schedule and unpublish posts (alerts, blog, thought-leadership, whitepapers, newsletters). Rich text + cover image (optional), category, tags, author, SEO fields. |
| **Case Studies** | Same as articles, with the anonymised-outcome fields (metric, sector, context). |
| **Careers — openings** | Create/edit/close job openings (title, team, location, type, summary, responsibilities, requirements). |
| **Careers — applications** | Receive applications (name, email, phone, role, message, **résumé upload**), list them in the admin, export, and notify `office@anujdesaiassociates.com`. |
| **Media library** | Upload images/PDFs (article covers, downloadable resources, firm profile) — currently photos are deliberately empty placeholders. |
| **Auth & roles** | Email/password (or Google) login for firm staff. Roles: **Admin** (everything), **Editor** (content only). |
| **Audit/draft safety** | Draft vs published state; preview before publishing; who-changed-what timestamp. |

---

## 2. Recommended architecture (lowest-effort, Vercel-native)

The site already deploys on Vercel. Two viable paths — **Option A is recommended**.

### Option A — Headless CMS (recommended: least code, fastest to ship)

Use a hosted headless CMS for content + a forms/storage service for Careers.

- **Content (Insights / Case Studies / Openings): [Sanity](https://www.sanity.io/) or [Payload CMS](https://payloadcms.com/).**
  - Non-technical staff edit in a polished web studio; no redeploy needed for content.
  - The Next.js site reads content at request/build time via the CMS API and uses **ISR / on-demand revalidation** (`revalidateTag`) so edits appear within seconds.
  - Sanity = hosted, generous free tier, great editing UX. Payload = self-hostable on Vercel + Postgres, owns its data.
- **Résumé uploads & media: [Vercel Blob](https://vercel.com/docs/vercel-blob)** (public for media, private for résumés).
- **Application submissions:** a Next.js Route Handler (`/api/lead/career`) writes to the DB and emails via **Resend**; or use the CMS to store submissions.
- **Auth:** the CMS provides its own admin auth (Sanity/Payload). No separate auth to build.

**Why recommended:** the firm gets a real editing UI on day one, minimal custom code, and content is decoupled from deploys — exactly the "I will publish and update" ask.

### Option B — Custom admin in this Next.js app (more control, more build)

Build `/admin` routes inside this project.

- **DB:** Postgres via a Vercel Marketplace provider (Neon / Supabase) + **Prisma** or **Drizzle** ORM. (Note: Vercel Postgres/KV are discontinued — use the Marketplace.)
- **Auth:** **Auth.js (NextAuth)** with email/password or Google, plus a `role` column. Protect `/admin/**` with middleware.
- **Storage:** Vercel Blob for résumés/media.
- **Email:** Resend (or AWS SES) for application notifications + newsletter confirmations.
- **Editor:** a rich-text editor (TipTap) or keep MDX and store the body as Markdown.
- **Revalidation:** on save, call `revalidatePath`/`revalidateTag` to refresh the affected pages.

**Why you might pick B:** everything lives in one repo/domain, full control of the data model, no third-party editor. Costs more developer time.

---

## 3. Data model (applies to either option)

```
Post            id, type(enum: alert|blog|thought-leadership|whitepaper|newsletter|case-study),
                title, slug, excerpt, body(markdown/portable-text), category, tags[],
                author, coverImageUrl?, seoTitle?, seoDescription?,
                status(draft|published), publishedAt, createdAt, updatedAt

CaseStudyMeta   (on Post when type=case-study) metric, sector, context, anonymised(bool)

Opening         id, slug, title, team, location, type, summary,
                responsibilities[], requirements[], status(open|closed), postedAt

Application     id, openingSlug, name, email, phone, message,
                resumeBlobUrl, utm?, createdAt, status(new|reviewing|archived)

MediaAsset      id, url, kind(image|pdf), alt?, uploadedBy, createdAt

User            id, email, name, role(admin|editor), passwordHash|oauthId, createdAt
```

The existing TypeScript shapes already match this closely — see `content/posts/**` frontmatter, `content/careers.ts` (`Opening`), and `components/ui/Cards.tsx` (`CaseStudyCard`). The CMS/DB schema should mirror them so the front-end components need minimal change.

---

## 4. How the existing site plugs in

- **Insights pages** (`app/insights/**`) and **Case Studies** (`app/insights/case-studies/**`) currently read MDX/`content` files. Swap the data source to the CMS/DB query, keep the same components (`InsightCard`, `PostGrid`, `ArticleView`). Note: per the 12 Jun request, **article cards now render without a cover image** — the editor can still attach one later by re-enabling the thumbnail in `components/ui/Cards.tsx`.
- **Careers** (`app/careers/**`) read `content/careers.ts`. Replace with a DB/CMS query for `Opening`. Wire the application form to `/api/lead/career` → DB + Resend + Blob (résumé).
- **Revalidation:** use Next.js **on-demand revalidation** so publishing updates the live page in seconds without a full redeploy.

---

## 5. Environment / accounts the firm must provide

- A CMS account (Sanity org) **or** a Postgres database (Neon/Supabase) — depending on Option A vs B.
- `RESEND_API_KEY` (or SES creds) + a verified sending domain for `office@anujdesaiassociates.com`.
- `BLOB_READ_WRITE_TOKEN` (Vercel Blob).
- Auth secrets (`AUTH_SECRET`, Google OAuth client if used).
- List of staff who get admin/editor logins.

---

## 6. Rough effort estimate

| Scope | Option A (CMS) | Option B (custom admin) |
|---|---|---|
| Insights + Case Studies publishing | ~2–3 days | ~5–7 days |
| Careers openings + applications + résumé upload + email | ~2 days | ~3–4 days |
| Auth & roles | included | ~1–2 days |
| **Total (indicative)** | **~1 week** | **~2 weeks** |

---

## 7. Recommendation

Go with **Option A (Sanity or Payload + Vercel Blob + Resend)**. It delivers a real editing experience for the firm fastest, keeps the published site fast and static, and avoids building and maintaining a bespoke auth + editor. Revisit Option B only if the firm wants every byte of data self-hosted in one repo.

> Nothing in this document is built yet. Confirm Option A/B and the CMS choice,
> then this becomes a scoped implementation ticket.

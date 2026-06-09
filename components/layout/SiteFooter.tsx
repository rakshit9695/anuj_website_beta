import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";
import { footerColumns, socials } from "@/content/nav";
import { offices } from "@/content/offices";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { CookieSettingsLink, BackToTop } from "@/components/layout/FooterClient";

export function SiteFooter() {
  const half = Math.ceil(footerColumns.services.length / 2);
  const servicesA = footerColumns.services.slice(0, half);
  const servicesB = footerColumns.services.slice(half);

  return (
    <footer className="bg-navy-950 text-[#C2CEDD] print:hidden">
      <div className="container-bleed py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Col 1 — firm */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-ada.jpg"
                alt={`${site.name} logo`}
                className="h-11 w-11 shrink-0 rounded-md bg-white object-contain p-0.5"
              />
              <p className="font-display text-xl text-paper">{site.name}</p>
            </div>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-brass-400">Chartered Accountants</p>
            <p className="mt-4 max-w-xs text-sm">{site.tagline}</p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/15 p-2 hover:border-brass-400 hover:text-brass-400">
                  <SocialIcon name={s.icon ?? "linkedin"} className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs text-[#8FA0B8]">
              Membership &amp; registration details to be confirmed by the firm.
            </p>
          </div>

          {/* Col 2 — services (SEO quick-links) */}
          <div className="lg:col-span-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-paper">Services</h2>
            <div className="mt-4 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              <ul className="space-y-2 text-sm">
                {servicesA.map((l) => (
                  <li key={l.href}><Link href={l.href} className="hover:text-brass-400">{l.label}</Link></li>
                ))}
              </ul>
              <ul className="space-y-2 text-sm">
                {servicesB.map((l) => (
                  <li key={l.href}><Link href={l.href} className="hover:text-brass-400">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3 — explore */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-paper">Explore</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {footerColumns.explore.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:text-brass-400">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 4 — contact + newsletter */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-paper">Get in touch</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" aria-hidden /> <span>{site.hq.address}</span></li>
              <li><a href={site.phoneHref} className="flex items-center gap-2 hover:text-brass-400"><Phone className="h-4 w-4 text-brass-400" aria-hidden /> {site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-brass-400"><Mail className="h-4 w-4 text-brass-400" aria-hidden /> {site.email}</a></li>
              <li><a href={whatsappUrl()} className="flex items-center gap-2 hover:text-brass-400"><MessageCircle className="h-4 w-4 text-brass-400" aria-hidden /> WhatsApp</a></li>
            </ul>
            <div className="mt-5">
              <p className="mb-2 text-sm font-medium text-paper">Subscribe to ADA insights</p>
              <NewsletterSignup onDark />
            </div>
          </div>
        </div>

        {/* Office cities quick list */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs uppercase tracking-wide text-[#8FA0B8]">Our offices</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {offices.map((o) => (
              <Link key={o.city} href="/global/india" className="hover:text-brass-400">
                {o.city}{o.isHQ ? " (HQ)" : ""}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Lower bar */}
      <div className="border-t border-white/10">
        <div className="container-bleed flex flex-col items-center justify-between gap-3 py-5 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/legal/privacy" className="hover:text-brass-400">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-brass-400">Terms</Link>
            <Link href="/legal/cookie-policy" className="hover:text-brass-400">Cookie Policy</Link>
            <Link href="/legal/disclaimer" className="hover:text-brass-400">Disclaimer</Link>
            <Link href="/sitemap" className="hover:text-brass-400">Sitemap</Link>
            <CookieSettingsLink />
          </div>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}

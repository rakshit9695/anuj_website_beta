"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, whatsappUrl, mailtoUrl } from "@/lib/site";
import { primaryNav, socials } from "@/content/nav";
import { ButtonLink } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { CountrySelector } from "@/components/layout/CountrySelector";
import { SearchOverlay } from "@/components/layout/SearchOverlay";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { ServicesMega, IndustriesMega } from "@/components/layout/MegaMenu";
import { track } from "@/lib/track";

type MenuKey = "Services" | "Industries" | null;

/** Shorter labels for the dense top bar (full labels live in the drawer/footer). */
const shortLabel: Record<string, string> = {
  "About Us": "About",
  "Global Presence": "Global",
};

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega-menu on route change.
  useEffect(() => setMenu(null), [pathname]);

  // Esc closes mega-menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMenu = (k: MenuKey) => {
    clearTimeout(closeTimer.current);
    setMenu(k);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };

  const dark = !scrolled;
  const hasMega = (label: string) => label === "Services" || label === "Industries";

  return (
    <header className="sticky top-0 z-30 print:hidden">
      {/* Layer A — utility bar */}
      <div
        className={cn(
          "bg-navy-950 text-paper transition-all",
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100",
        )}
      >
        <div className="container-bleed hidden items-center justify-between py-1.5 text-xs md:flex">
          <div className="flex items-center gap-4">
            <a href={site.phoneHref} onClick={() => track("phone_click")} className="flex items-center gap-1.5 hover:text-brass-400">
              <Phone className="h-3.5 w-3.5" aria-hidden /> {site.phone}
            </a>
            <a href={mailtoUrl()} className="flex items-center gap-1.5 hover:text-brass-400">
              <Mail className="h-3.5 w-3.5" aria-hidden /> {site.email}
            </a>
            <a href={whatsappUrl()} onClick={() => track("whatsapp_click")} className="flex items-center gap-1.5 hover:text-brass-400">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden /> WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" className="hover:text-brass-400">
                <SocialIcon name={s.icon ?? "linkedin"} className="h-3.5 w-3.5" />
              </a>
            ))}
            <span className="h-3 w-px bg-white/20" />
            <Link href="/contact" className="hover:text-brass-400">Client Login</Link>
          </div>
        </div>
      </div>

      {/* Layer B — main nav */}
      <div
        className={cn(
          "border-b transition-colors duration-200",
          dark ? "border-white/10 bg-navy-900 text-paper" : "border-ink-300 bg-surface/95 text-navy-900 shadow-sm backdrop-blur",
        )}
        onMouseLeave={scheduleClose}
      >
        <div className={cn("container-bleed flex items-center gap-4 transition-all", scrolled ? "h-14" : "h-[68px]")}>
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${site.name} home`}>
            <span
              className={cn(
                "grid h-9 w-9 shrink-0 place-items-center rounded-md font-display text-[13px] font-semibold tracking-tight",
                dark ? "bg-brass-500 text-navy-900" : "bg-navy-900 text-paper",
              )}
            >
              ADA
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block whitespace-nowrap font-display text-[15px] font-medium">{site.name}</span>
              <span className={cn("block text-[9px] uppercase tracking-[0.22em]", dark ? "text-brass-400" : "text-brass-600")}>
                CA · CS · CMA
              </span>
            </span>
          </Link>

          {/* Primary nav — only when it comfortably fits */}
          <nav className="ml-auto hidden items-center min-[1320px]:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const label = shortLabel[item.label] ?? item.label;
              const linkCls = cn(
                "flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-[0.875rem] font-medium transition-colors",
                dark ? "hover:bg-white/10" : "hover:bg-navy-50",
              );
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => (hasMega(item.label) ? openMenu(item.label as MenuKey) : openMenu(null))}
                >
                  {hasMega(item.label) ? (
                    <button
                      className={cn(linkCls, menu === item.label && (dark ? "bg-white/10" : "bg-navy-50"))}
                      aria-expanded={menu === item.label}
                      onClick={() => setMenu(menu === item.label ? null : (item.label as MenuKey))}
                    >
                      {label}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", menu === item.label && "rotate-180")} aria-hidden />
                    </button>
                  ) : (
                    <Link href={item.href} className={linkCls}>
                      {label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="ml-auto flex shrink-0 items-center gap-1 min-[1320px]:ml-3">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className={cn("rounded-md p-2 transition-colors", dark ? "hover:bg-white/10" : "hover:bg-navy-50")}
            >
              <Search className="h-5 w-5" aria-hidden />
            </button>
            <div className="hidden sm:block">
              <CountrySelector onDark={dark} />
            </div>
            <ButtonLink href="/contact?intent=consultation" variant="brass" size="sm" className="ml-1 hidden whitespace-nowrap sm:inline-flex">
              Book Consultation
            </ButtonLink>
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className={cn("rounded-md p-2 transition-colors min-[1320px]:hidden", dark ? "hover:bg-white/10" : "hover:bg-navy-50")}
            >
              <Menu className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </div>

        {/* Layer C — mega-menu panel */}
        {menu && (
          <div
            className="absolute inset-x-0 top-full border-t border-ink-300 bg-surface text-ink-900 shadow-card"
            onMouseEnter={() => openMenu(menu)}
            onMouseLeave={scheduleClose}
          >
            <div className="container-bleed py-8">
              {menu === "Services" ? (
                <ServicesMega onNavigate={() => setMenu(null)} />
              ) : (
                <IndustriesMega onNavigate={() => setMenu(null)} />
              )}
            </div>
          </div>
        )}
      </div>

      <SearchOverlay open={searchOpen} onOpenChange={setSearchOpen} />
      <MobileDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
    </header>
  );
}

"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, X, Phone, Mail, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { CountrySelector } from "@/components/layout/CountrySelector";
import { site, whatsappUrl } from "@/lib/site";
import {
  practiceClusters,
  industryNavLinks,
  globalNav,
  insightsNav,
  knowledgeBankNav,
  aboutNav,
  careersNav,
} from "@/content/nav";

function Group({ value, label, children }: { value: string; label: string; children: React.ReactNode }) {
  return (
    <Accordion.Item value={value} className="border-b border-ink-300">
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full items-center justify-between py-3 text-left font-medium text-navy-900">
          {label}
          <ChevronDown className="h-4 w-4 text-brass-600 transition-transform group-data-[state=open]:rotate-180" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="pb-3">{children}</div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export function MobileDrawer({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const close = () => onOpenChange(false);
  const linkCls = "block py-1.5 text-sm text-ink-700 hover:text-navy-900";

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[88vw] max-w-sm flex-col bg-surface shadow-2xl focus:outline-none">
          <div className="flex items-center justify-between border-b border-ink-300 px-4 py-3">
            <Dialog.Title className="font-display text-lg text-navy-900">Menu</Dialog.Title>
            <Dialog.Close aria-label="Close menu" className="rounded-md p-1 text-ink-500 hover:bg-navy-50">
              <X className="h-5 w-5" aria-hidden />
            </Dialog.Close>
          </div>

          <div className="flex-1 overflow-y-auto px-4">
            <Accordion.Root type="multiple">
              <Group value="services" label="Services">
                {practiceClusters.map((c) => (
                  <div key={c.cluster} className="mb-2">
                    <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-wide text-brass-600">
                      {c.cluster}
                    </p>
                    {c.practices.map((p) => (
                      <Link key={p.slug} href={`/services/${p.slug}`} onClick={close} className={linkCls}>
                        {p.title}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link href="/services" onClick={close} className="mt-1 block py-1.5 text-sm font-medium text-navy-700">
                  View all services →
                </Link>
              </Group>

              <Group value="industries" label="Industries">
                <div className="grid grid-cols-2 gap-x-3">
                  {industryNavLinks.map((i) => (
                    <Link key={i.href} href={i.href} onClick={close} className={linkCls}>
                      {i.label}
                    </Link>
                  ))}
                </div>
              </Group>

              <Group value="global" label="Global Presence">
                {globalNav.map((n) => (
                  <Link key={n.href} href={n.href} onClick={close} className={linkCls}>
                    {n.label}
                  </Link>
                ))}
              </Group>

              <Group value="insights" label="Insights">
                {insightsNav.map((n) => (
                  <Link key={n.href} href={n.href} onClick={close} className={linkCls}>
                    {n.label}
                  </Link>
                ))}
              </Group>

              <Group value="kb" label="Knowledge Bank">
                {knowledgeBankNav.map((n) => (
                  <Link key={n.href} href={n.href} onClick={close} className={linkCls}>
                    {n.label}
                  </Link>
                ))}
              </Group>

              <Group value="about" label="About Us">
                {aboutNav.map((n) => (
                  <Link key={n.href} href={n.href} onClick={close} className={linkCls}>
                    {n.label}
                  </Link>
                ))}
              </Group>

              <Group value="careers" label="Careers">
                {careersNav.map((n) => (
                  <Link key={n.href} href={n.href} onClick={close} className={linkCls}>
                    {n.label}
                  </Link>
                ))}
              </Group>
            </Accordion.Root>

            <div className="space-y-2 py-4">
              <Link href="/media" onClick={close} className="block font-medium text-navy-900">Media</Link>
              <Link href="/contact" onClick={close} className="block font-medium text-navy-900">Contact</Link>
            </div>

            <div className="space-y-2 border-t border-ink-300 py-4 text-sm">
              <a href={site.phoneHref} className="flex items-center gap-2 text-ink-700">
                <Phone className="h-4 w-4 text-brass-600" aria-hidden /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-ink-700">
                <Mail className="h-4 w-4 text-brass-600" aria-hidden /> {site.email}
              </a>
              <a href={whatsappUrl()} className="flex items-center gap-2 text-ink-700">
                <MessageCircle className="h-4 w-4 text-brass-600" aria-hidden /> WhatsApp
              </a>
              <div className="pt-1">
                <CountrySelector onDark={false} />
              </div>
            </div>
          </div>

          <div className="border-t border-ink-300 p-4">
            <ButtonLink href="/contact?intent=consultation" variant="brass" className="w-full">
              Book a Consultation
            </ButtonLink>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

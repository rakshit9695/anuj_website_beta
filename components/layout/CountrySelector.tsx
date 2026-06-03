"use client";

import { useState } from "react";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { countries } from "@/content/nav";

export function CountrySelector({ onDark = true }: { onDark?: boolean }) {
  const [active, setActive] = useState(countries[0]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={
          "inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm transition-colors focus-visible:outline-none " +
          (onDark ? "text-paper hover:bg-white/10" : "text-navy-900 hover:bg-navy-50")
        }
        aria-label="Select country"
      >
        <span aria-hidden>{active.icon}</span>
        <span className="hidden 2xl:inline">{active.label}</span>
        <ChevronDown className="h-4 w-4" aria-hidden />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-[12rem] rounded-xl border border-ink-300 bg-surface p-1.5 shadow-card"
        >
          {countries.map((c) => (
            <DropdownMenu.Item key={c.href} asChild>
              <Link
                href={c.href}
                onClick={() => setActive(c)}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-navy-900 outline-none hover:bg-navy-50 data-[highlighted]:bg-navy-50"
              >
                <span aria-hidden>{c.icon}</span>
                {c.label}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

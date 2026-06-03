"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";

/** Sticky bottom-right WhatsApp button with a desktop hover QR popover. */
export function WhatsAppFloat() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="fixed bottom-5 right-5 z-40 print:hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={cn(
          "absolute bottom-16 right-0 w-48 origin-bottom-right rounded-xl border border-ink-300 bg-surface p-3 text-center shadow-card transition-all",
          hover ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
        aria-hidden={!hover}
      >
        <div className="mb-2 grid h-28 place-items-center rounded-lg bg-navy-50 text-[10px] uppercase tracking-widest text-navy-700">
          QR placeholder
        </div>
        <p className="text-xs text-ink-700">Scan to chat on WhatsApp</p>
      </div>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${site.shortName} on WhatsApp`}
        onClick={() => track("whatsapp_click")}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform hover:scale-105 focus-visible:scale-105"
      >
        <MessageCircle className="h-7 w-7" aria-hidden />
      </a>
    </div>
  );
}

/** Small inline dismiss control reused elsewhere. */
export function DismissButton({ onClick, label = "Dismiss" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="rounded-md p-1 text-ink-500 transition-colors hover:bg-navy-50 hover:text-navy-900"
    >
      <X className="h-4 w-4" aria-hidden />
    </button>
  );
}

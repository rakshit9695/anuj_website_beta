"use client";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { site } from "@/lib/site";

/** LinkedIn · X · WhatsApp share for articles. */
export function ShareButtons({ path, title }: { path: string; title: string }) {
  const url = `${site.url}${path}`;
  const enc = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc}`, icon: "linkedin" },
    { label: "Share on X", href: `https://twitter.com/intent/tweet?url=${enc}&text=${t}`, icon: "twitter" },
    { label: "Share on WhatsApp", href: `https://wa.me/?text=${t}%20${enc}`, icon: "whatsapp" },
  ];
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-ink-500">Share</span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="grid h-9 w-9 place-items-center rounded-full border border-ink-300 text-ink-700 transition-colors hover:border-brass-400 hover:text-navy-900"
        >
          {l.icon === "whatsapp" ? (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.8-1.6-4-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2z" />
            </svg>
          ) : (
            <SocialIcon name={l.icon} className="h-4 w-4" />
          )}
        </a>
      ))}
    </div>
  );
}

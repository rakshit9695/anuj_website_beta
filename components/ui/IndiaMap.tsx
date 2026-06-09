"use client";

import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { offices } from "@/content/offices";
import { cn } from "@/lib/utils";

/**
 * Office locator backed by a real, interactive Google Map.
 *
 * Works with no API key via the keyless Maps embed. If
 * NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY is set, it uses the official Google
 * Maps Embed API instead (no "for development only" overlay). Markers are
 * placed by coordinate, so it is accurate even while street addresses are
 * still placeholders.
 */
const EMBED_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;

function embedSrc(lat: number, lng: number, zoom = 11) {
  if (EMBED_KEY) {
    return `https://www.google.com/maps/embed/v1/place?key=${EMBED_KEY}&q=${lat},${lng}&zoom=${zoom}`;
  }
  return `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&hl=en&output=embed`;
}

function directionsUrl(lat: number, lng: number) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

export function IndiaMap({ interactive = true }: { interactive?: boolean }) {
  const located = offices.filter((o) => o.lat != null && o.lng != null);
  const [active, setActive] = useState(located[0]?.city ?? offices[0]?.city);
  const office = located.find((o) => o.city === active) ?? located[0];

  if (!office || office.lat == null || office.lng == null) {
    return (
      <div className="rounded-xl border border-ink-300 bg-surface p-6 text-sm text-ink-500">
        Office locations will appear here once coordinates are supplied.
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
      {/* Map */}
      <div className="overflow-hidden rounded-xl border border-ink-300 bg-navy-50 shadow-card">
        <iframe
          key={office.city}
          title={`Map — ${office.city} office`}
          src={embedSrc(office.lat, office.lng)}
          className="h-[300px] w-full sm:h-[420px]"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* City switcher + details */}
      <div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Offices">
          {located.map((o) => (
            <button
              key={o.city}
              role="tab"
              aria-selected={o.city === active}
              onClick={() => interactive && setActive(o.city)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                o.city === active
                  ? "bg-navy-900 text-paper"
                  : "border border-ink-300 bg-surface text-ink-700 hover:border-brass-400",
              )}
            >
              {o.city}
              {o.isHQ ? " (HQ)" : ""}
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-ink-300 bg-surface p-5">
          <p className="flex items-center gap-2 font-display text-lg text-navy-900">
            <MapPin className="h-4 w-4 text-brass-500" aria-hidden />
            {office.city}
            {office.isHQ && (
              <span className="ml-1 rounded-full bg-brass-100 px-2 py-0.5 text-xs font-semibold uppercase text-brass-600">
                HQ
              </span>
            )}
          </p>
          <p className="mt-2 text-sm text-ink-700">{office.address}</p>
          {office.partnerInCharge && (
            <p className="mt-1 text-sm text-ink-500">Partner-in-charge: {office.partnerInCharge}</p>
          )}
          {office.phone && <p className="mt-1 text-sm text-ink-500">{office.phone}</p>}
          {office.email && <p className="text-sm text-ink-500">{office.email}</p>}
          <a
            href={directionsUrl(office.lat, office.lng)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-navy-700 hover:underline"
          >
            Open in Google Maps <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}

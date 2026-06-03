"use client";

import { useState } from "react";
import { offices } from "@/content/offices";

// Approximate India bounding box for a simple linear projection.
const LAT_MAX = 37,
  LAT_MIN = 7,
  LNG_MIN = 68,
  LNG_MAX = 98;
const W = 420,
  H = 480;

function project(lat: number, lng: number) {
  const x = ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * W;
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H;
  return { x, y };
}

// A simplified, stylised India silhouette (not survey-accurate; decorative).
const INDIA_PATH =
  "M150 40 L210 55 L250 45 L300 70 L330 60 L360 95 L345 130 L370 160 L350 200 L300 230 L290 270 L250 320 L240 380 L210 440 L185 460 L175 420 L150 360 L120 320 L95 270 L80 220 L70 170 L95 150 L80 120 L110 95 L120 60 Z";

/** Stylised India map with brass city markers; click reveals office details. */
export function IndiaMap({ interactive = true }: { interactive?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const activeOffice = offices.find((o) => o.city === active);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="relative mx-auto w-full max-w-md">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="ADA offices across India">
          <path d={INDIA_PATH} fill="var(--navy-900)" opacity="0.9" />
          <path d={INDIA_PATH} fill="none" stroke="var(--brass-500)" strokeWidth="1.5" opacity="0.5" />
          {offices.map((o) => {
            if (o.lat == null || o.lng == null) return null;
            const { x, y } = project(o.lat, o.lng);
            const isActive = active === o.city;
            return (
              <g key={o.city} transform={`translate(${x},${y})`}>
                <circle
                  r={o.isHQ ? 7 : 5}
                  className="cursor-pointer"
                  fill={isActive ? "var(--brass-400)" : "var(--brass-500)"}
                  stroke="var(--paper)"
                  strokeWidth="1.5"
                  onClick={() => interactive && setActive(isActive ? null : o.city)}
                  onMouseEnter={() => interactive && setActive(o.city)}
                />
                {o.isHQ && <circle r="11" fill="none" stroke="var(--brass-500)" strokeWidth="1" opacity="0.6" />}
              </g>
            );
          })}
        </svg>
      </div>
      <div>
        {interactive ? (
          activeOffice ? (
            <div className="rounded-xl border border-ink-300 bg-surface p-5">
              <p className="font-display text-lg text-navy-900">
                {activeOffice.city}
                {activeOffice.isHQ && <span className="ml-2 text-xs font-semibold uppercase text-brass-600">HQ</span>}
              </p>
              <p className="mt-2 text-sm text-ink-700">{activeOffice.address}</p>
              {activeOffice.partnerInCharge && (
                <p className="mt-1 text-sm text-ink-500">Partner-in-charge: {activeOffice.partnerInCharge}</p>
              )}
            </div>
          ) : (
            <p className="text-sm text-ink-500">Hover or tap a city marker to see office details.</p>
          )
        ) : null}
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-ink-700">
          {offices.map((o) => (
            <li key={o.city}>
              <button
                onClick={() => interactive && setActive(o.city)}
                className="hover:text-navy-900"
              >
                {o.city}
                {o.isHQ ? " (HQ)" : ""}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

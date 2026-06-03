"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

/**
 * Loads GA4 / GTM ONLY after analytics consent is granted (cookie banner).
 * IDs come from env (placeholders). Nothing loads before consent, satisfying
 * the DPDP/GDPR-style "block until consent" rule.
 */
export function Analytics() {
  const [consented, setConsented] = useState(false);
  const ga = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    const read = () => {
      try {
        const raw = localStorage.getItem("ada-consent");
        setConsented(raw ? JSON.parse(raw)?.analytics === true : false);
      } catch {
        setConsented(false);
      }
    };
    read();
    window.addEventListener("ada-consent-change", read);
    return () => window.removeEventListener("ada-consent-change", read);
  }, []);

  if (!consented || !ga) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}

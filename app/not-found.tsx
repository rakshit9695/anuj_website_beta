import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-navy-900 text-paper">
      <div className="container flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-7xl text-brass-400">404</p>
        <h1 className="mt-4 font-display text-h1 text-paper">This page could not be found</h1>
        <p className="mt-3 max-w-md text-[#C2CEDD]">
          The page may have moved. Try the homepage, our services, or the Knowledge Bank.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" variant="brass">Back to home</ButtonLink>
          <ButtonLink href="/services" variant="outline-light">Browse services</ButtonLink>
          <ButtonLink href="/sitemap" variant="outline-light">Sitemap</ButtonLink>
        </div>
      </div>
    </section>
  );
}

import { Hero } from "@/components/sections/Hero";
import { DatesTicker } from "@/components/ui/Marquee";
import { Positioning } from "@/components/sections/Positioning";
import { ServicesGridHome } from "@/components/sections/ServicesGridHome";
import { IndustriesStrip } from "@/components/sections/IndustriesStrip";
import { WhyADA } from "@/components/sections/WhyADA";
import { FoundersDesk } from "@/components/sections/FoundersDesk";
import { FeaturedInsights } from "@/components/sections/FeaturedInsights";
import { GlobalTeaser } from "@/components/sections/GlobalTeaser";
import { KnowledgeBankTeaser } from "@/components/sections/KnowledgeBankTeaser";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { CTABand } from "@/components/ui/CTABand";
import { tickerDates } from "@/content/complianceDates";

export default function Home() {
  return (
    <>
      <Hero />
      <DatesTicker dates={tickerDates} />
      <Positioning />
      <ServicesGridHome />
      <IndustriesStrip />
      <WhyADA />
      <FoundersDesk />
      <FeaturedInsights />
      <GlobalTeaser />
      <KnowledgeBankTeaser />
      <NewsletterBand />
      <CTABand
        title="Book a free 5-minute consultation"
        intro="A quick call with a team that handles audit, tax, regulatory and cross-border work under one roof — and a clear sense of your next step."
      />
    </>
  );
}

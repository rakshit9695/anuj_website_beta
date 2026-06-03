import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { DatesTicker } from "@/components/ui/Marquee";
import { Positioning } from "@/components/sections/Positioning";
import { ServicesGridHome } from "@/components/sections/ServicesGridHome";
import { IndustriesStrip } from "@/components/sections/IndustriesStrip";
import { WhyADA } from "@/components/sections/WhyADA";
import { FoundersDesk } from "@/components/sections/FoundersDesk";
import { FeaturedInsights } from "@/components/sections/FeaturedInsights";
import { CaseStudiesHome } from "@/components/sections/CaseStudiesHome";
import { ClientLogosStrip, TestimonialsCarousel, AwardsMediaStrip } from "@/components/sections/TrustStrips";
import { GlobalTeaser } from "@/components/sections/GlobalTeaser";
import { KnowledgeBankTeaser } from "@/components/sections/KnowledgeBankTeaser";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { TransactionsTicker } from "@/components/sections/TransactionsTicker";
import { CTABand } from "@/components/ui/CTABand";
import { tickerDates } from "@/content/complianceDates";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <DatesTicker dates={tickerDates} />
      <Positioning />
      <ServicesGridHome />
      <IndustriesStrip />
      <WhyADA />
      <FoundersDesk />
      <FeaturedInsights />
      <CaseStudiesHome />
      <TransactionsTicker />
      <ClientLogosStrip />
      <TestimonialsCarousel />
      <AwardsMediaStrip />
      <GlobalTeaser />
      <KnowledgeBankTeaser />
      <NewsletterBand />
      <CTABand
        title="Get your free tax health check"
        intro="Book a 30-minute consultation with a team that handles audit, tax, regulatory and cross-border work under one roof."
      />
    </>
  );
}

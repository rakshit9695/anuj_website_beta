import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Our Story",
  description: "The founding, philosophy and integrated approach of Anuj Desai & Associates.",
  path: "/about/our-story",
});

export default function OurStory() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about" }, { name: "Our Story", href: "/about/our-story" }]}
        eyebrow="About ADA"
        title="Our story"
        intro="Built on the belief that businesses deserve advice that works together."
      />
      <Section tone="paper">
        <div className="prose-ada mx-auto">
          <p>
            Anuj Desai &amp; Associates was founded with a clear purpose: to
            redefine the role of professional advisors in an increasingly
            complex business environment. We believe businesses deserve more
            than fragmented compliance support — they deserve a trusted advisory
            partner capable of addressing financial, regulatory, strategic and
            operational challenges under one roof.
          </p>
          <p>
            What began as a vision to build a modern professional services firm
            has evolved into a multidisciplinary practice serving entrepreneurs,
            startups, SMEs, family-owned businesses, corporates, investment
            funds, non-profit organisations and international enterprises. Our
            approach combines deep technical expertise with commercial
            practicality, enabling clients to make informed decisions while
            remaining fully compliant with evolving regulations.
          </p>
          <p>
            Our firm operates at the intersection of finance, governance,
            taxation and business strategy. We provide comprehensive solutions
            across audit and assurance, direct and indirect taxation, corporate
            law and secretarial compliance, regulatory advisory, transaction
            support, CFO services, business consulting, FEMA and cross-border
            matters, fund advisory, NGO and Section 8 compliance, labour law and
            specialised regulatory domains.
          </p>
          <p>
            What distinguishes us is our commitment to understanding the
            business behind every engagement. We do not view our role as merely
            preparing reports, filing returns or satisfying statutory
            requirements. Instead, we work closely with clients to identify
            opportunities, mitigate risks, strengthen governance frameworks,
            improve financial efficiency and support long-term growth.
          </p>

          <h2>The principles that guide us</h2>
          <ul>
            <li><strong>Integrity</strong> — we uphold the highest standards of professional ethics, independence and transparency.</li>
            <li><strong>Excellence</strong> — we combine technical precision with continuous learning to deliver work of the highest quality.</li>
            <li><strong>Client-centricity</strong> — every recommendation is tailored to the client&rsquo;s unique objectives, challenges and growth aspirations.</li>
            <li><strong>Value creation</strong> — we focus on outcomes that extend beyond compliance and contribute meaningfully to our clients&rsquo; success.</li>
          </ul>

          <p>
            Today, Anuj Desai &amp; Associates serves clients across multiple
            industries and jurisdictions through a growing network of
            professionals and strategic capabilities. With presence and support
            capabilities spanning India, the United States and Canada, we are
            positioned to assist businesses that operate locally, nationally and
            globally.
          </p>
          <p>
            Our ambition is simple: to become the most trusted advisor for
            ambitious businesses, entrepreneurs, investment funds, institutions
            and families — delivering insight, confidence and lasting value at
            every stage of their journey.
          </p>
        </div>
      </Section>
      <CTABand />
    </>
  );
}

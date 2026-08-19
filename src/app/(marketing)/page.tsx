import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { HeroSection } from "@/sections/hero/hero-section";
import { TechStackMarquee } from "@/sections/tech-stack/tech-stack-marquee";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};
import { FeaturesSection } from "@/sections/features/features-section";
import { ShowcaseSection } from "@/sections/showcase/showcase-section";
import { PricingSection } from "@/sections/pricing/pricing-section";
import { TimelineSection } from "@/sections/timeline/timeline-section";
import { TipsSection } from "@/sections/tips/tips-section";
import { StatisticsSection } from "@/sections/statistics/statistics-section";
import { TestimonialsSection } from "@/sections/testimonials/testimonials-section";
import { FAQSection } from "@/sections/faq/faq-section";
import { CTASection } from "@/sections/cta/cta-section";
import { AboutHeroSection } from "@/sections/about/about-hero-section";
import { TeamSection } from "@/sections/about/team-section";

import { client } from "@/sanity/lib/client";

export default async function Home() {
  let projectCount = 12;
  try {
    if (client.config().projectId) {
      const count = await client.fetch<number>(`count(*[_type == "portfolio"])`, {}, { next: { revalidate: 60 } });
      if (typeof count === 'number' && count > 0) {
        // Tampilkan sesuai jumlah aslinya di Sanity, berapapun itu.
        projectCount = count;
      }
    }
  } catch (error) {
    console.warn("Failed to fetch project count:", error);
  }

  return (
    <div className="flex flex-col">
      <HeroSection projectCount={projectCount} />
      <TechStackMarquee />
      <FeaturesSection />
      <ShowcaseSection />
      <PricingSection />
      <TimelineSection />
      <TipsSection />
      <StatisticsSection />
      <div id="about">
        <AboutHeroSection />
        <TeamSection />
      </div>
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

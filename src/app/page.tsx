import { HeroSection } from "@/sections/hero/hero-section";
import { TechStackMarquee } from "@/sections/tech-stack/tech-stack-marquee";
import { FeaturesSection } from "@/sections/features/features-section";
import { ShowcaseSection } from "@/sections/showcase/showcase-section";
import { PricingSection } from "@/sections/pricing/pricing-section";
import { TimelineSection } from "@/sections/timeline/timeline-section";
import { TipsSection } from "@/sections/tips/tips-section";
import { StatisticsSection } from "@/sections/statistics/statistics-section";
import { TestimonialsSection } from "@/sections/testimonials/testimonials-section";
import { FAQSection } from "@/sections/faq/faq-section";
import { CTASection } from "@/sections/cta/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TechStackMarquee />
      <FeaturesSection />
      <ShowcaseSection />
      <PricingSection />
      <TimelineSection />
      <TipsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

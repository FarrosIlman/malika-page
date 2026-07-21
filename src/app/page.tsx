import { HeroSection } from "@/sections/hero/hero-section";
import { FeaturesSection } from "@/sections/features/features-section";
import { ShowcaseSection } from "@/sections/showcase/showcase-section";
import { PricingSection } from "@/sections/pricing/pricing-section";
import { TimelineSection } from "@/sections/timeline/timeline-section";
import { TipsSection } from "@/sections/tips/tips-section";
import { StatisticsSection } from "@/sections/statistics/statistics-section";
import { TestimonialsSection } from "@/sections/testimonials/testimonials-section";
import { CTASection } from "@/sections/cta/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <PricingSection />
      <TimelineSection />
      <TipsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

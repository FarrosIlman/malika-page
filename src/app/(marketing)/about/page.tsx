import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AboutHeroSection } from "@/sections/about/about-hero-section";
import { TeamSection } from "@/sections/about/team-section";
import { CTASection } from "@/sections/cta/cta-section";

export const metadata: Metadata = {
  title: `Tentang Kami - ${siteConfig.title}`,
  description: "Menjadi partner teknologi terpercaya yang mengubah ide menjadi solusi digital yang berdampak.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHeroSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}

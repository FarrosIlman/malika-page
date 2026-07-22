import { AcademicHero } from "@/sections/academic/academic-hero";
import { AcademicPricing } from "@/sections/academic/academic-pricing";
import { TechStackMarquee } from "@/sections/tech-stack/tech-stack-marquee";
import { FAQSection } from "@/sections/faq/faq-section";
import { CTASection } from "@/sections/cta/cta-section";
import { TestimonialsSection } from "@/sections/testimonials/testimonials-section";
import { ShowcaseSection } from "@/sections/showcase/showcase-section";

export const metadata = {
  title: "Jasa Skripsi IT & Tugas Akhir Terpercaya",
  description: "Layanan konsultasi, bimbingan, dan pembuatan aplikasi skripsi / tugas akhir IT (Informatika, Sistem Informasi). Pengerjaan rapi, privasi terjaga, bergaransi.",
};

export default function AcademicPage() {
  return (
    <div className="flex flex-col">
      <AcademicHero />
      <TechStackMarquee />
      <AcademicPricing />
      <ShowcaseSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

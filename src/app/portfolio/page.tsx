import { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { showcase as fallbackShowcase } from "@/data/showcase";
import { ProjectCard } from "@/sections/showcase/project-card";
import { TextReveal } from "@/components/shared/text-reveal";
import { client } from "@/sanity/lib/client";
import { portfolioQuery } from "@/sanity/lib/queries";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: `Semua Portofolio | ${siteConfig.name}`,
  description: "Kumpulan seluruh proyek software, website, dan sistem yang telah dikembangkan oleh Malika Digital Solutions.",
  alternates: {
    canonical: `${siteConfig.url}/portfolio`,
  },
};

export default async function FullPortfolioPage() {
  let projects = fallbackShowcase;

  try {
    if (client.config().projectId) {
      const sanityData = await client.fetch(portfolioQuery, {}, { next: { revalidate: 60 } });
      if (sanityData && sanityData.length > 0) {
        projects = sanityData;
      }
    }
  } catch (error) {
    console.warn("Failed to fetch portfolio from Sanity, using fallback data.");
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Container>
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>

        {/* Header */}
        <div className="relative flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
          {/* Subtle Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] -z-10 rounded-full pointer-events-none" />

          <span className="badge-terminal w-max">
            <span aria-hidden="true">&gt;_</span>
            Our Portfolio
          </span>
          <TextReveal 
            text="Seluruh Software & Sistem yang Kami Kembangkan" 
            className="text-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground justify-center" 
          />
          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
            Eksplorasi kumpulan project digital yang telah kami bangun dengan teknologi modern dan performa tinggi untuk mendukung pertumbuhan bisnis serta operasional mitra kami.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project: any, index: number) => (
            <ProjectCard
              key={project.id || project._id}
              index={index}
              title={project.title}
              category={project.category}
              description={project.description}
              tags={project.tags}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

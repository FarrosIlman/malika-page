"use client";

import { m as motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { showcase } from "@/data/showcase";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

import Image from "next/image";

/**
 * Browser-frame mockup placeholder
 */
function ProjectImageFrame({
  image,
  title,
  link,
}: {
  image: string;
  title: string;
  link: string;
}) {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden relative"
      style={{ border: "1px solid rgba(139,128,248,0.15)", aspectRatio: "16/10" }}
    >
      {/* Browser chrome */}
      <div
        className="absolute top-0 w-full z-10 flex items-center gap-1.5 px-4 py-2.5 border-b"
        style={{
          backgroundColor: "rgba(15, 15, 28, 0.9)",
          backdropFilter: "blur(4px)",
          borderColor: "rgba(139,128,248,0.1)",
        }}
      >
        <span className="w-2 h-2 rounded-full bg-red-500/50" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <span className="w-2 h-2 rounded-full bg-green-500/50" />
        {/* URL bar */}
        <div
          className="ml-2 flex-1 h-4 rounded text-[10px] text-muted/40 flex items-center px-2 font-mono"
          style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
        >
          {title.toLowerCase().replace(/\s+/g, "-")}.co
        </div>
      </div>

      {/* Page body - using Image instead of tailwind gradient + skeleton */}
      <div className="relative w-full h-full pt-[36px] bg-[#0f0f1c]">
        {image.startsWith("/") ? (
          <Image
            src={image}
            alt={`${title} mockup`}
            fill
            className="object-cover object-top pt-[36px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className={`w-full h-full ${image}`} />
        )}
        
        {/* Zoom-in overlay on hover */}
        <a
          href={link}
          aria-label={`View ${title} project`}
          className="absolute inset-0 flex items-center justify-center z-20
                     bg-black/0 hover:bg-black/40 transition-colors duration-300 group"
        >
          <span
            className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-md
                       flex items-center justify-center
                       opacity-0 group-hover:opacity-100
                       scale-90 group-hover:scale-100
                       transition-all duration-300
                       hover:bg-primary hover:text-primary-foreground border border-white/10"
          >
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </a>
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  category,
  description,
  tags,
  image,
  link,
  index,
}: {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
      aria-label={`Project: ${title}`}
      className="flex flex-col h-full"
    >
      {/* Image with browser frame + zoom hover */}
      <div className="mb-5 overflow-hidden rounded-2xl group transition-transform duration-300 hover:scale-[1.02]">
        <ProjectImageFrame image={image} title={title} link={link} />
      </div>

      {/* Meta */}
      <div className="flex-1">
        <p className="text-xs text-primary font-mono mb-2">{category}</p>
        <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-muted mt-2 leading-relaxed">{description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-5" aria-label="Technologies used">
        {tags.map((tag) => (
          <span
            key={tag}
            className="badge-tech"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function ShowcaseSection() {
  return (
    <section
      id="portfolio"
      className="py-24"
      style={{ borderTop: "1px solid rgba(139,128,248,0.07)" }}
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="space-y-4 max-w-xl">
            <span className="badge-terminal">
              <span aria-hidden="true">&gt;_</span>
              Featured Portfolio
            </span>
            <h2 className="text-display text-4xl md:text-5xl leading-[1.1] text-foreground">
              Software & sistem yang kami kembangkan
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors whitespace-nowrap font-medium"
            aria-label="View all projects"
          >
            Explore all works
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
          {showcase.map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

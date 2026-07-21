"use client";

import { m as motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

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
        <div
          className="ml-2 flex-1 h-4 rounded text-[10px] text-muted/40 flex items-center px-2 font-mono"
          style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
        >
          {title.toLowerCase().replace(/\s+/g, "-")}.co
        </div>
      </div>

      <div className="relative w-full h-full pt-[36px] bg-[#0f0f1c]">
        {image && (image.startsWith("/") || image.startsWith("http")) ? (
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
        
        <a
          href={link || "#"}
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

export function ProjectCard({
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
      <div className="mb-5 overflow-hidden rounded-2xl group transition-transform duration-300 hover:scale-[1.02]">
        <ProjectImageFrame image={image} title={title} link={link} />
      </div>

      <div className="flex-1">
        <p className="text-xs text-primary font-mono mb-2">{category}</p>
        <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-muted mt-2 leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-5" aria-label="Technologies used">
        {tags && tags.map((tag) => (
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

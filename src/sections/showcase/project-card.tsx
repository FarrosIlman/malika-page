"use client";

import { m as motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  index: number;
}

export function ProjectCard({ title, category, description, image, tags, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative rounded-3xl overflow-hidden glass border border-border"
    >
      <div className={`w-full h-64 ${image} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
          <a href={link} aria-label="View Project" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      
      <div className="p-8">
        <p className="text-primary text-sm font-semibold mb-2">{category}</p>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted mb-6 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

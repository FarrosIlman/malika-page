"use client";

import { Container } from "@/components/shared/container";
import { Database, Cloud, FileJson, LayoutTemplate, Palette, Code, Cpu, Binary } from "lucide-react";
import { m as motion } from "framer-motion";

const technologies = [
  { name: "Next.js", icon: LayoutTemplate },
  { name: "React", icon: Code },
  { name: "TypeScript", icon: FileJson },
  { name: "Node.js", icon: Cpu },
  { name: "Python", icon: Binary },
  { name: "PostgreSQL", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "Figma", icon: Palette },
  { name: "TailwindCSS", icon: LayoutTemplate },
];

export function TechStackMarquee() {
  return (
    <section className="py-12 border-b border-white/5 bg-background/50 overflow-hidden relative">
      {/* Gradient masks for fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <Container>
        <p className="text-center text-xs font-medium text-muted uppercase tracking-widest mb-8">
          Powered by Modern Technologies
        </p>
      </Container>

      {/* Marquee Container */}
      <div className="flex w-fit">
        <motion.div
          animate={{ x: [0, -1035] }} // Adjust width based on total items
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex gap-12 px-6 items-center"
        >
          {/* We duplicate the array 3 times for a seamless infinite loop */}
          {[...technologies, ...technologies, ...technologies].map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-3 text-muted hover:text-foreground transition-colors duration-300"
              >
                <Icon className="w-5 h-5 opacity-70" />
                <span className="text-sm font-semibold tracking-wide">{tech.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

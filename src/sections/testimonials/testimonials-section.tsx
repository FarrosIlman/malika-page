"use client";

import { m as motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { testimonials } from "@/data/testimonials";
import { TextReveal } from "@/components/shared/text-reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Deterministic color mapping dari initial avatar (A-Z) ke pair gradient.
 * Tidak menggunakan random — konsisten antar render.
 */
const AVATAR_GRADIENTS: Record<string, [string, string]> = {
  A: ["#8b80f8", "#5f5e7a"],
  B: ["#22d3ee", "#0f172a"],
  C: ["#22c55e", "#0f172a"],
  D: ["#8b80f8", "#3b82f6"],
  E: ["#22d3ee", "#8b80f8"],
  F: ["#ec4899", "#8b80f8"],
  G: ["#eab308", "#22c55e"],
  H: ["#3b82f6", "#22d3ee"],
  I: ["#8b80f8", "#ec4899"],
  J: ["#22c55e", "#3b82f6"],
  K: ["#ec4899", "#f43f5e"],
  L: ["#22d3ee", "#22c55e"],
  M: ["#8b80f8", "#2dd4bf"],
  N: ["#22c55e", "#8b80f8"],
  O: ["#f43f5e", "#ec4899"],
  P: ["#8b80f8", "#3b82f6"],
  Q: ["#22d3ee", "#8b80f8"],
  R: ["#ec4899", "#f43f5e"],
  S: ["#3b82f6", "#8b80f8"],
  T: ["#22c55e", "#2dd4bf"],
  U: ["#8b80f8", "#f43f5e"],
  V: ["#2dd4bf", "#3b82f6"],
  W: ["#f43f5e", "#eab308"],
  X: ["#3b82f6", "#22c55e"],
  Y: ["#eab308", "#f43f5e"],
  Z: ["#ec4899", "#8b80f8"],
};

function getAvatarGradient(initial: string): [string, string] {
  const key = initial.toUpperCase();
  return AVATAR_GRADIENTS[key] ?? ["#8b80f8", "#3b82f6"];
}

function TestimonialCard({
  name,
  role,
  content,
  avatar,
  index,
}: {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}) {
  const [colorStart, colorEnd] = getAvatarGradient(avatar);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
      className="p-8 rounded-2xl flex flex-col h-full"
      style={{
        backgroundColor: "#141416",
        border: "1px solid rgba(139,128,248,0.15)",
      }}
    >
      {/* Quote */}
      <blockquote className="flex-1">
        <p className="text-foreground/80 leading-relaxed text-[15px] italic">
          {"\u201c"}{content}{"\u201d"}
        </p>
      </blockquote>

      {/* Author */}
      <figcaption className="flex items-center gap-3 mt-8">
        {/* Avatar with unique per-person gradient + border */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center
                     text-sm font-semibold flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${colorStart}, ${colorEnd})`,
            border: "1.5px solid rgba(139,128,248,0.3)",
            color: "#0d0d0f",
          }}
          aria-label={`Avatar for ${name}`}
        >
          {avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted">{role}</p>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export function TestimonialsSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
    >
      <Container>
        <div className="space-y-5 mb-14 max-w-xl">
          <span className="badge-terminal">
            <span aria-hidden="true">&gt;_</span>
            Client Feedback
          </span>
          <TextReveal 
            text="What clients say after working with us" 
            className="text-display text-4xl md:text-5xl leading-[1.1] text-foreground" 
          />
        </div>

        {/* Grid — 1 col mobile, 2 col md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} index={i} {...t} />
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { m as motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const easing = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: easing },
});

export function HeroText() {
  return (
    <div className="flex-1 z-10 space-y-10">
      {/* Label - Terminal Style */}
      <motion.div {...fadeUp(0)}>
        <span className="badge-terminal">
          <span aria-hidden="true">&gt;_</span>
          Premium Software House & IT Consultant
        </span>
      </motion.div>

      {/* h1 — Tech forward & SEO optimized */}
      <motion.h1
        {...fadeUp(0.1)}
        className="text-display text-5xl md:text-7xl leading-[1.05] tracking-tight text-foreground"
      >
        Code. Design. <br className="hidden sm:block" />
        <span className="text-gradient">Accelerate.</span>
      </motion.h1>

      {/* Subline */}
      <motion.p
        {...fadeUp(0.2)}
        className="text-lg text-muted max-w-xl leading-relaxed"
      >
        Membangun high-performance web apps, merancang UI/UX modern, dan menyediakan end-to-end academic assistance untuk memastikan project IT Anda selesai tepat waktu dengan kualitas industri.
      </motion.p>

      {/* CTA */}
      <motion.div
        {...fadeUp(0.3)}
        className="flex flex-col sm:flex-row items-start gap-3 pt-2"
      >
        {/* Primary CTA */}
        <Link
          href="#contact"
          className="btn-primary"
          aria-label="Start a new project with Malika Digital Solutions"
        >
          Start Project
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </Link>

        {/* Secondary CTA */}
        <Link
          href="#portfolio"
          className="btn-ghost"
        >
          View Portfolio
        </Link>
      </motion.div>

      {/* Social proof */}
      <motion.div
        {...fadeUp(0.5)}
        className="flex items-center gap-3 text-sm text-muted font-mono"
      >
        <div className="flex gap-0.5" role="img" aria-label="Build Status Passing">
          <span className="text-success">✔</span>
        </div>
        <span>150+ projects successfully shipped</span>
      </motion.div>
    </div>
  );
}

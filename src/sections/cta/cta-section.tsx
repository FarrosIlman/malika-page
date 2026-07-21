"use client";

import { m as motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CTASection() {
  return (
    <section id="contact" className="py-24" style={{ borderTop: "1px solid rgba(139,128,248,0.07)" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="rounded-3xl p-12 md:p-20 relative overflow-hidden"
          style={{
            backgroundColor: "#141416",
            border: "1px solid rgba(139,128,248,0.15)",
          }}
        >
          {/* Subtle ambient light — bukan blob besar bergerak */}
          <div
            className="absolute top-0 right-0 w-[50%] h-[100%] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 80% at 100% 0%, rgba(139,128,248,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-2xl">
            <span className="badge-terminal mb-8 inline-flex">
              <span aria-hidden="true">&gt;_</span>
              Mulai Project Anda
            </span>

            <h2 className="text-display text-4xl md:text-6xl leading-[1.05] text-foreground mb-6">
              Siap untuk scale up bisnis Anda?{" "}
              <span className="text-gradient">Mari kita berkolaborasi.</span>
            </h2>

            <p className="text-muted text-lg leading-relaxed mb-10 max-w-lg">
              Konsultasikan kebutuhan pembuatan website, sistem enterprise, atau pendampingan skripsi IT Anda bersama kami. We deliver high-quality solutions tailored for your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Chat on WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="#portfolio"
                className="inline-flex items-center px-7 py-3.5 rounded-full text-foreground/70 text-sm hover:text-foreground transition-colors"
                style={{ border: "1px solid rgba(139,128,248,0.15)" }}
              >
                Or check our portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

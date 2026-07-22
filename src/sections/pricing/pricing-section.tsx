"use client";

import { m as motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { pricingPlans } from "@/data/pricing";
import { CheckCircle2, ShieldCheck, Clock, Award } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(139,128,248,0.03) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 relative z-10">
          <span className="badge-terminal">
            <span aria-hidden="true">&gt;_</span>
            Investment
          </span>
          <h2 className="text-display text-4xl md:text-5xl leading-[1.1] text-foreground">
            Rentang biaya jasa digital
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            Estimasi harga untuk layanan digital profesional yang kami sediakan. Transparan, kompetitif, dan dapat disesuaikan dengan kebutuhan proyek Anda.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(20,20,22,0.5)",
                  border: "1px solid rgba(139,128,248,0.1)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(139,128,248,0.1), transparent 50%)"
                  }}
                />

                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-1">{plan.title}</h3>
                    <div className="text-primary font-mono text-lg font-semibold">{plan.priceRange}</div>
                    <div className="text-xs text-muted/60">{plan.subtext}</div>
                  </div>
                </div>

                <ul className="space-y-3 relative z-10 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted/90">
                      <CheckCircle2 className="w-4 h-4 text-primary/70 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.id === "joki-tugas" && (
                  <div className="relative z-10 mt-auto pt-4 border-t border-white/5">
                    <Link 
                      href="/academic" 
                      className="inline-flex items-center justify-center w-full py-2.5 px-4 text-sm font-medium text-white bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-xl transition-colors"
                    >
                      Lihat Detail Layanan Akademik
                    </Link>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
          style={{
            background: "linear-gradient(90deg, rgba(139,128,248,0.05) 0%, rgba(139,128,248,0.02) 100%)",
            border: "1px solid rgba(139,128,248,0.1)",
          }}
        >
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-medium text-foreground">
              Ide Anda, <span className="text-primary">Solusi Kami.</span>
            </h4>
            <p className="text-sm text-muted">
              Harga di atas adalah estimasi dasar dan dapat disesuaikan sepenuhnya dengan kebutuhan, fitur, dan tingkat kompleksitas proyek Anda.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-foreground/80 bg-background/50 px-3 py-1.5 rounded-full border border-white/5">
              <ShieldCheck className="w-4 h-4 text-primary" /> Kualitas Terbaik
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-foreground/80 bg-background/50 px-3 py-1.5 rounded-full border border-white/5">
              <Clock className="w-4 h-4 text-primary" /> Tepat Waktu
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-foreground/80 bg-background/50 px-3 py-1.5 rounded-full border border-white/5">
              <Award className="w-4 h-4 text-primary" /> Harga Kompetitif
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

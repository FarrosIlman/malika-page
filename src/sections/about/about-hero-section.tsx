"use client";

import { m as motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { CheckCircle2 } from "lucide-react";

const missions = [
  {
    title: "Build with Purpose",
    desc: "Membangun solusi digital berdasarkan kebutuhan dan tujuan yang jelas."
  },
  {
    title: "Design with Impact",
    desc: "Menghadirkan desain dan pengalaman pengguna yang modern, intuitif, dan bermakna."
  },
  {
    title: "Engineer with Quality",
    desc: "Mengembangkan teknologi yang scalable, aman, performant, dan mudah dikembangkan."
  },
  {
    title: "Grow Together",
    desc: "Membantu klien berkembang melalui transformasi dan inovasi digital yang berkelanjutan."
  },
  {
    title: "Keep Innovating",
    desc: "Terus belajar, beradaptasi, dan memanfaatkan teknologi baru untuk menciptakan solusi yang lebih baik."
  }
];

export function AboutHeroSection() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      <Container>
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-20 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge-terminal border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
          >
            <span aria-hidden="true">&gt;_</span>
            Tentang Kami
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground"
          >
            Ide Anda, Solusi Kami.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted leading-relaxed text-lg md:text-xl"
          >
            Menjadi partner teknologi terpercaya yang mengubah ide menjadi solusi digital yang berdampak.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Misi Kami</h2>
            <div className="space-y-6">
              {missions.map((mission, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">{mission.title}</h3>
                    <p className="text-muted leading-relaxed text-sm md:text-base">{mission.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <div className="w-full h-full bg-gradient-to-br from-[#0a0a0c] via-[#141416] to-[#0a0a0c] flex items-center justify-center p-8">
                <div className="text-center space-y-4 relative z-20">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-4 shadow-[0_0_30px_rgba(52,211,153,0.1)]">
                     <span className="text-3xl font-bold text-emerald-400">&gt;_</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Build With Purpose</h3>
                  <p className="text-muted text-sm max-w-xs mx-auto">Kami merancang kode dengan dedikasi penuh untuk masa depan digital Anda.</p>
                </div>
                <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-emerald-500/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

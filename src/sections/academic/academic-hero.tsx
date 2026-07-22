"use client";

import { m as motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Code2, Database } from "lucide-react";

const easing = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: easing },
});

export function AcademicHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background glow specific to academic */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[60%] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(139,128,248,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 relative z-10">
          
          {/* Left Text Content */}
          <div className="flex-1 space-y-10">
            <motion.div {...fadeUp(0)}>
              <span className="badge-terminal" style={{ borderColor: 'rgba(52, 211, 153, 0.3)', color: '#34d399', backgroundColor: 'rgba(52, 211, 153, 0.1)' }}>
                <GraduationCap className="w-3.5 h-3.5 mr-1.5 inline" aria-hidden="true" />
                Layanan Khusus Mahasiswa
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-display text-5xl md:text-7xl leading-[1.05] tracking-tight text-foreground"
            >
              Skripsi IT. <br className="hidden sm:block" />
              Selesai <span className="text-gradient">Tepat Waktu.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg text-muted max-w-xl leading-relaxed"
            >
              Pusing dengan error koding? Kami membantu pembuatan Sistem Informasi, Aplikasi Mobile, Machine Learning, dan IoT untuk Skripsi/Tugas Akhir. 100% aman, rahasia, dan bergaransi sampai revisi dosen selesai.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-col sm:flex-row items-start gap-3 pt-2"
            >
              <Link
                href="#pricing"
                className="btn-primary"
              >
                Cek Harga & Paket
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>
              <a
                href="https://wa.me/6285960120259?text=Halo%20Malika%20Digital,%20saya%20butuh%20bantuan%20untuk%20Tugas%20Akhir/Skripsi%20IT%20saya."
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Konsultasi Gratis
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.5)}>
              <div className="flex flex-wrap items-center gap-6 mt-8 text-sm font-medium text-muted/80">
                <span className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Privasi Terjamin
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Free Revisi Minor
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Bimbingan Koding
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Element (Code/Student theme) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 w-full max-w-lg"
          >
            <div className="relative rounded-2xl border border-white/5 bg-[#06060c] shadow-2xl">
              {/* Fake IDE Header */}
              <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#0a0a14] rounded-t-2xl">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="mx-auto text-[11px] font-mono text-muted/50">skripsi_final_banget_v4.py</div>
              </div>
              {/* Fake IDE Body */}
              <div className="p-6 font-mono text-xs leading-loose overflow-hidden relative h-56 rounded-b-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#06060c] z-10 top-1/2" />
                <div className="flex"><span className="w-6 text-muted/30">1</span><span className="text-[#c678dd]">import</span>&nbsp;<span className="text-[#56b6c2]">tensorflow</span>&nbsp;<span className="text-[#c678dd]">as</span>&nbsp;tf</div>
                <div className="flex"><span className="w-6 text-muted/30">2</span><span className="text-[#c678dd]">from</span>&nbsp;<span className="text-[#98c379]">flask</span>&nbsp;<span className="text-[#c678dd]">import</span>&nbsp;Flask, jsonify</div>
                <div className="flex"><span className="w-6 text-muted/30">3</span><span className="text-foreground"></span></div>
                <div className="flex"><span className="w-6 text-muted/30">4</span><span className="text-muted/50"># "Semoga di-ACC dosen pembimbing hari ini"</span></div>
                <div className="flex"><span className="w-6 text-muted/30">5</span><span className="text-[#c678dd]">def</span>&nbsp;<span className="text-[#61afef]">train_model</span>(dataset):</div>
                <div className="flex"><span className="w-6 text-muted/30">6</span><span className="pl-4 text-[#e5c07b]">model</span>&nbsp;=&nbsp;tf.keras.Sequential([</div>
                <div className="flex"><span className="w-6 text-muted/30">7</span><span className="pl-8 text-foreground">tf.keras.layers.Dense(<span className="text-[#d19a66]">128</span>, activation=<span className="text-[#98c379]">'relu'</span>),</span></div>
                <div className="flex"><span className="w-6 text-muted/30">8</span><span className="pl-8 text-foreground">tf.keras.layers.Dropout(<span className="text-[#d19a66]">0.2</span>),</span></div>
                <div className="flex"><span className="w-6 text-muted/30">9</span><span className="pl-8 text-foreground">tf.keras.layers.Dense(<span className="text-[#d19a66]">10</span>)</span></div>
                <div className="flex"><span className="w-6 text-muted/30">10</span><span className="pl-4 text-foreground">])</span></div>
              </div>
              {/* Overlay elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 md:-right-8 top-1/4 p-3 bg-[#0d0d12]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-primary/20 text-primary"><Database className="w-5 h-5" /></div>
                <div className="pr-2 hidden sm:block">
                  <div className="text-xs font-bold text-foreground">MySQL / Postgre</div>
                  <div className="text-[10px] text-muted">Database Design</div>
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-6 bottom-1/4 p-3 bg-[#0d0d12]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400"><Code2 className="w-5 h-5" /></div>
                <div className="pr-2 hidden sm:block">
                  <div className="text-xs font-bold text-foreground">Web / Mobile App</div>
                  <div className="text-[10px] text-muted">API & UI Dev</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

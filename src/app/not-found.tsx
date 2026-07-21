"use client";

import Link from "next/link";
import { m as motion } from "framer-motion";
import { ArrowLeft, SearchX } from "lucide-react";
import { MotionProvider } from "@/components/shared/motion-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <MotionProvider>
      <Navbar />
      <main className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-4 overflow-hidden z-10">
        
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 space-y-6 max-w-2xl mx-auto"
        >
          {/* Glitch 404 Text */}
          <div className="relative inline-block">
            <h1 className="text-display text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/20">
              404
            </h1>
            <motion.div 
              animate={{ 
                x: [-2, 2, -1, 1, 0],
                opacity: [1, 0.5, 0.8, 1, 1]
              }}
              transition={{ 
                duration: 0.2, 
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="absolute inset-0 text-display text-8xl md:text-9xl font-bold text-primary/30 mix-blend-screen ml-1"
            >
              404
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-3 text-muted">
            <SearchX className="w-5 h-5 text-primary" />
            <h2 className="text-xl md:text-2xl font-mono">Halaman Tidak Ditemukan</h2>
          </div>

          <p className="text-muted leading-relaxed max-w-md mx-auto">
            Ups! Sepertinya Anda tersesat di dimensi lain. Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau memang tidak pernah ada.
          </p>

          <div className="pt-8">
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:gap-3 hover:-translate-y-1 shadow-[0_0_20px_rgba(139,128,248,0.3)]"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Bumi (Beranda)
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </MotionProvider>
  );
}

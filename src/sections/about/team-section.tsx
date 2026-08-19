"use client";

import { m as motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { Code2, Globe, Mail } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Dimas Wibowo",
    role: "Operations & Client Relations",
    desc: "Bertanggung jawab pada komunikasi klien, manajemen layanan, dan memastikan setiap kebutuhan proyek klien terakomodasi dengan baik.",
    initials: "DW",
  },
  {
    name: "Mohammad Firdan",
    role: "Full-Stack Developer",
    desc: "Mengeksekusi pengembangan produk secara end-to-end, merancang arsitektur aplikasi, dan menjaga standar kualitas kode yang efisien.",
    initials: "MF",
  },
  {
    name: "Muchammad Farros Ilman Haq",
    role: "Full-Stack Developer",
    desc: "Mengeksekusi pengembangan produk secara end-to-end, merancang arsitektur aplikasi, dan menjaga standar kualitas kode yang efisien.",
    initials: "FI",
  }
];

export function TeamSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.02] border-y border-white/5">
      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 relative z-10">
          <span className="badge-terminal border-blue-500/30 text-blue-400 bg-blue-500/10">
            <span aria-hidden="true">&gt;_</span>
            Tim Kami
          </span>
          <h2 className="text-display text-4xl md:text-5xl leading-[1.1] text-foreground">
            Orang Di Balik Layar
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            Kami adalah tim yang berdedikasi tinggi, siap membantu Anda mewujudkan ide digital menjadi kenyataan dengan solusi teknologi terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "rgba(20,20,22,0.5)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top right, rgba(52, 211, 153, 0.08), transparent 50%)"
                }}
              />
              
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 bg-white/5 border border-emerald-500/10 relative shadow-[0_0_20px_rgba(52,211,153,0.05)]">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1f] to-[#0a0a0c]">
                   <span className="text-2xl font-bold text-white/20 uppercase group-hover:scale-110 transition-transform duration-500 group-hover:text-emerald-400/40">{member.initials}</span>
                </div>
              </div>

              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-emerald-400 font-medium text-sm mb-4">{member.role}</p>
                <p className="text-muted text-sm leading-relaxed mb-6 h-[80px]">{member.desc}</p>
                
                <div className="flex items-center justify-center gap-4">
                  <Link href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-colors">
                    <Code2 className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-colors">
                    <Globe className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

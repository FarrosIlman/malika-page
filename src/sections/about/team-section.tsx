"use client";

import { m as motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { Code2, Globe, Mail, Bird, Rabbit, Cat } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Dimas Wibowo",
    role: "Operations & Client Relations",
    desc: "Bertanggung jawab pada komunikasi klien, manajemen layanan, dan memastikan setiap kebutuhan proyek klien terakomodasi dengan baik.",
    avatar: Bird,
  },
  {
    name: "Mohammad Firdan",
    role: "Full-Stack Developer",
    desc: "Mengeksekusi pengembangan produk secara end-to-end, merancang arsitektur aplikasi, dan menjaga standar kualitas kode yang efisien.",
    avatar: Rabbit,
  },
  {
    name: "Muchammad Farros Ilman Haq",
    role: "Full-Stack Developer",
    desc: "Mengeksekusi pengembangan produk secara end-to-end, merancang arsitektur aplikasi, dan menjaga standar kualitas kode yang efisien.",
    avatar: Cat,
  }
];

export function TeamSection() {
  return (
    <section className="py-16 relative overflow-hidden bg-white/[0.02] border-y dark:border-white/5 border-black/5">
      <Container>
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 relative z-10">
          <span className="badge-terminal border-blue-500/30 text-blue-400 bg-blue-500/10 text-xs">
            <span aria-hidden="true">&gt;_</span>
            Tim Kami
          </span>
          <h2 className="text-display text-3xl md:text-4xl leading-[1.1] text-foreground">
            Orang Di Balik Layar
          </h2>
          <p className="text-muted leading-relaxed text-base">
            Kami adalah tim yang berdedikasi tinggi, siap membantu Anda mewujudkan ide digital menjadi kenyataan dengan solusi teknologi terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-[#141416]/50 backdrop-blur-md border border-black/5 dark:border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top right, rgba(52, 211, 153, 0.08), transparent 50%)"
                }}
              />
              
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-5 dark:bg-white/5 bg-black/5 border border-emerald-500/20 relative shadow-[0_0_20px_rgba(52,211,153,0.1)] group-hover:border-emerald-400/50 transition-colors duration-300">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/5 to-black/10 dark:from-[#1a1a1f] dark:to-[#0a0a0c]">
                  {(() => {
                    const Icon = member.avatar;
                    return <Icon className="w-8 h-8 text-emerald-400/80 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6" strokeWidth={1.5} />;
                  })()}
                </div>
              </div>

              <div className="relative z-10 text-center">
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-emerald-400 font-medium text-xs mb-3">{member.role}</p>
                <p className="text-muted text-xs leading-relaxed mb-5 h-[70px]">{member.desc}</p>
                
                <div className="flex items-center justify-center gap-3">
                  <Link href="#" className="w-7 h-7 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 flex items-center justify-center text-muted hover:text-foreground hover:dark:bg-white/10 bg-black/10 transition-colors">
                    <Code2 className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="#" className="w-7 h-7 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 flex items-center justify-center text-muted hover:text-foreground hover:dark:bg-white/10 bg-black/10 transition-colors">
                    <Globe className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="#" className="w-7 h-7 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 flex items-center justify-center text-muted hover:text-foreground hover:dark:bg-white/10 bg-black/10 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
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

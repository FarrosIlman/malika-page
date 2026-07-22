"use client";

import { m as motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { CheckCircle2, Code2, Database, Smartphone } from "lucide-react";
import Link from "next/link";

const academicServices = [
  {
    id: "tugas-harian",
    title: "Tugas Harian / Praktikum",
    icon: Code2,
    priceRange: "Mulai Rp 50k",
    subtext: "Per modul / tugas",
    features: [
      "Penyelesaian soal algoritma (Python, C++, Java)",
      "Tugas struktur data & logika pemrograman",
      "Laporan praktikum IT",
      "Selesai dalam 24-48 jam",
    ],
  },
  {
    id: "proyek-akhir",
    title: "Sistem Informasi / Web App",
    icon: Database,
    priceRange: "Mulai Rp 800k",
    subtext: "Projek Akhir / Skripsi",
    features: [
      "Website (Laravel, CodeIgniter, Next.js, React)",
      "Database MySQL / PostgreSQL",
      "Termasuk Source Code penuh",
      "Gratis Revisi Minor (sampai ACC)",
      "Bimbingan penjelasan alur kode",
    ],
  },
  {
    id: "machine-learning",
    title: "AI / Mobile / IoT",
    icon: Smartphone,
    priceRange: "Mulai Rp 1.5jt",
    subtext: "Topik Skripsi Lanjutan",
    features: [
      "Klasifikasi & Deteksi Gambar (Tensorflow, YOLO)",
      "Aplikasi Android (Flutter / Kotlin)",
      "Sistem IoT (Arduino, ESP32)",
      "Integrasi API & Cloud",
    ],
  },
];

export function AcademicPricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 relative z-10">
          <span className="badge-terminal border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
            <span aria-hidden="true">&gt;_</span>
            Paket & Biaya
          </span>
          <h2 className="text-display text-4xl md:text-5xl leading-[1.1] text-foreground">
            Transparan. Terjangkau.
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            Kami memahami *budget* mahasiswa. Harga kami sangat kompetitif dengan jaminan kualitas kode yang rapi dan siap dipresentasikan di depan dosen penguji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {academicServices.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{
                  backgroundColor: "rgba(20,20,22,0.5)",
                  border: "1px solid rgba(52, 211, 153, 0.15)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(52, 211, 153, 0.08), transparent 50%)"
                  }}
                />

                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">{plan.title}</h3>
                    <div className="text-emerald-400 font-mono text-lg font-semibold">{plan.priceRange}</div>
                    <div className="text-xs text-muted/60">{plan.subtext}</div>
                  </div>
                </div>

                <ul className="space-y-3 relative z-10 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400/70 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="https://wa.me/6285960120259?text=Halo%20Malika%20Digital,%20saya%20ingin%20tanya%20harga%20untuk%20tugas/skripsi%20saya."
                  target="_blank"
                  className="mt-auto inline-flex items-center justify-center w-full py-2.5 px-4 text-sm font-medium text-white bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-xl transition-colors relative z-10"
                >
                  Tanya Harga (Konsultasi)
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

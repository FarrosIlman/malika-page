import { Palette, MonitorSmartphone, Code2, Mail } from "lucide-react";

export const pricingPlans = [
  {
    id: "graphic-design",
    title: "Desain Grafis",
    icon: Palette,
    priceRange: "Mulai Rp 50k - Rp 1,2jt",
    subtext: "(Satuan / Paket Bulanan)",
    features: [
      "Feed & Story Instagram",
      "Logo & Branding Kit",
      "Poster, Banner, Brosur",
      "Konten Media Sosial",
      "Dan lainnya",
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: MonitorSmartphone,
    priceRange: "Mulai Rp 800k - Rp 3,5jt+",
    subtext: "(Sesuai Kompleksitas)",
    features: [
      "Landing Page (1 Halaman)",
      "Website Company Profile",
      "E-Commerce / Toko Online",
      "Desain Responsif",
      "Domain & Hosting 1 Tahun",
      "SEO Dasar",
    ],
  },
  {
    id: "joki-tugas",
    title: "Joki Tugas Informatika",
    icon: Code2,
    priceRange: "Mulai Rp 50k - Rp 1,5jt",
    subtext: "(Tugas Harian / Proyek Skripsi)",
    features: [
      "Tugas Logika Dasar (Python, C++, Java, dll)",
      "Projek Web / App / Database",
      "API Integration",
      "Projek Akhir / Skripsi",
      "Revisi & Bimbingan",
    ],
  },
  {
    id: "digital-invitation",
    title: "Undangan Online",
    icon: Mail,
    priceRange: "Mulai Rp 75k - Rp 250k",
    subtext: "(Berbagai Pilihan Paket)",
    features: [
      "Template Modern & Elegan",
      "Musik Latar & Gallery",
      "RSVP via WhatsApp",
      "Amplop Digital (e-Wallet)",
      "Google Maps Integration",
      "Nama Tamu Tanpa Batas",
    ],
  },
];

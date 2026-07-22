"use client";

import { useState, useRef, useEffect } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";
import { Send, MessageSquare, ChevronDown } from "lucide-react";

// Custom Select Component
function CustomSelect({ 
  label, 
  options, 
  value, 
  onChange 
}: { 
  label: string; 
  options: string[]; 
  value: string; 
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative" ref={dropdownRef}>
      <label className="text-xs font-medium text-foreground/80 uppercase tracking-wide">{label}</label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground cursor-pointer flex justify-between items-center hover:bg-white/10 transition-colors"
      >
        <span>{value}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-muted" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-[#18181b] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto custom-scrollbar py-1">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                    value === option 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-foreground/80 hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    service: "Web Development",
    budget: "Di bawah Rp 2 Juta",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const text = `Halo Malika Digital, saya tertarik untuk berdiskusi mengenai proyek.\n\n*Nama:* ${formData.name}\n*Layanan:* ${formData.service}\n*Estimasi Budget:* ${formData.budget}\n*Pesan:* ${formData.message}\n\nMohon informasi lebih lanjut. Terima kasih!`;
    const encodedText = encodeURIComponent(text);
    
    // Using the WA link from config but stripping the base url to just use wa.me standard format
    const waNumber = siteConfig.links.whatsapp.split('/').pop()?.split('?')[0];
    const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;
    
    window.open(waUrl, "_blank");
  };

  const serviceOptions = [
    "Web Development",
    "Desain Grafis",
    "Bimbingan Akademik IT",
    "Undangan Online",
    "Lainnya"
  ];

  const budgetOptions = [
    "Di bawah Rp 1 Juta",
    "Rp 1 Juta - Rp 3 Juta",
    "Di atas Rp 3 Juta",
    "Belum Yakin / Diskusikan"
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-8 md:p-16 relative overflow-hidden"
          style={{
            backgroundColor: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex flex-col lg:flex-row gap-16 relative z-10">
            {/* Left Column: Text */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <span className="badge-terminal mb-6 inline-flex w-fit">
                <span aria-hidden="true">&gt;_</span>
                Mulai Project Anda
              </span>

              <h2 className="text-display text-4xl md:text-5xl leading-[1.1] text-foreground mb-6">
                Siap untuk scale up bisnis Anda?{" "}
                <span className="text-primary">Mari berkolaborasi.</span>
              </h2>

              <p className="text-muted text-lg leading-relaxed mb-10 max-w-lg">
                Konsultasikan kebutuhan pembuatan website, sistem enterprise, desain grafis, atau pendampingan IT Anda. Isi form di samping dan tim kami akan merespons secepatnya.
              </p>

              <div className="flex items-center gap-4 text-sm text-muted bg-background/50 w-fit px-5 py-3 rounded-full border border-white/5">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>Atau hubungi langsung via <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">WhatsApp</a></span>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:w-1/2">
              <form onSubmit={handleSubmit} className="bg-background/80 p-8 rounded-2xl border border-white/10 space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium text-foreground/80 uppercase tracking-wide">Nama Lengkap / Instansi</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <CustomSelect 
                    label="Layanan" 
                    options={serviceOptions}
                    value={formData.service}
                    onChange={(val) => setFormData({ ...formData, service: val })}
                  />
                  <CustomSelect 
                    label="Estimasi Budget" 
                    options={budgetOptions}
                    value={formData.budget}
                    onChange={(val) => setFormData({ ...formData, budget: val })}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-medium text-foreground/80 uppercase tracking-wide">Detail Proyek</label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors resize-none"
                    placeholder="Ceritakan sedikit tentang kebutuhan atau masalah yang ingin diselesaikan..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity mt-2"
                >
                  Kirim Pesan
                  <Send className="w-4 h-4" />
                </button>
                <p className="text-center text-xs text-muted mt-4">
                  Form ini akan otomatis menyusun pesan dan diarahkan ke WhatsApp kami.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

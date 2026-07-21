import { Container } from "@/components/shared/container";
import Link from "next/link";
import { siteConfig } from "@/config/site";

import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 mt-12" style={{ borderTop: "1px solid rgba(139,128,248,0.1)" }}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-14">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image 
                src="/logo.jpg" 
                alt="Malika Digital Logo" 
                width={32} 
                height={32} 
                className="rounded-full object-cover border border-white/10"
              />
              <span className="text-sm font-medium tracking-widest uppercase text-foreground/90">
                Malika
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Membangun scalable digital solutions — untuk mereka yang peduli pada kualitas dan attention to detail.
            </p>
            <div className="flex gap-4 text-sm text-muted">
              <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Instagram</a>
              <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
              <a href={siteConfig.links.email} className="hover:text-primary transition-colors">Email</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs text-muted tracking-widest uppercase mb-5">Layanan</h4>
            <ul className="space-y-3 text-sm text-muted/80">
              <li><Link href="#services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Design & Branding</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Academic Assistance</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Digital Invitations</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs text-muted tracking-widest uppercase mb-5">Perusahaan</h4>
            <ul className="space-y-3 text-sm text-muted/80">
              <li><Link href="#about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary transition-colors">Portofolio</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs text-muted tracking-widest uppercase mb-5">Legal</h4>
            <ul className="space-y-3 text-sm text-muted/80">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privasi</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Ketentuan</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted/50" style={{ borderTop: "1px solid rgba(139,128,248,0.1)", paddingTop: "2rem" }}>
          <p>© {year} Malika Digital Solutions. All rights reserved.</p>
          <p>Made with intention.</p>
        </div>
      </Container>
    </footer>
  );
}

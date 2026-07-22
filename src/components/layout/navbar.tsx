"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { m as motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/shared/container";
import Image from "next/image";

import { usePathname } from "next/navigation";

const homeLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Layanan" },
  { href: "/academic", label: "Akademik" },
  { href: "/#portfolio", label: "Portofolio" },
  { href: "/#contact", label: "Kontak" },
];

const academicLinks = [
  { href: "/", label: "Home" },
  { href: "#pricing", label: "Harga" },
  { href: "#portfolio", label: "Portofolio" },
  { href: "#testimonials", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const currentLinks = pathname === "/academic" ? academicLinks : homeLinks;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[9999] transition-all duration-500",
        scrolled || isMobileMenuOpen
          ? "border-b py-4"
          : "border-b border-transparent py-6"
      )}
      style={scrolled || isMobileMenuOpen ? {
        backgroundColor: "rgba(13, 13, 15, 0.85)",
        backdropFilter: "blur(16px)",
        borderColor: "rgba(139, 128, 248, 0.1)",
      } : {}}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 relative z-50">
          <Image 
            src="/logo.jpg" 
            alt="Malika Digital Logo" 
            width={40} 
            height={40} 
            className="rounded-full object-cover border border-white/10 shadow-sm"
          />
          <span className="text-base font-bold tracking-widest text-foreground uppercase">
            Malika
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          {currentLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="text-sm font-medium text-primary-foreground bg-primary hover:opacity-90 transition-opacity px-5 py-2 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            Mulai Diskusi
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-foreground rounded-full transition-colors"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-foreground rounded-full transition-colors"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-foreground rounded-full transition-colors"
          />
        </button>
      </Container>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ top: "72px" }}
            />
            
            {/* Dropdown Card */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[72px] left-0 right-0 bg-[#0d0d0f]/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl overflow-hidden z-50 md:hidden rounded-none"
            >
              <div className="flex flex-col p-4">
                {currentLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-4 text-base font-medium text-foreground/80 hover:text-primary hover:bg-white/5 rounded-none transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-white/5 my-2 mx-4" />
                <div className="p-4">
                  <Link
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex justify-center items-center text-sm font-medium text-primary-foreground bg-primary hover:opacity-90 transition-opacity px-5 py-3.5 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                  >
                    Mulai Diskusi
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

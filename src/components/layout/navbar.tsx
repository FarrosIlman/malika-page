"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/shared/container";

import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Layanan" },
  { href: "#portfolio", label: "Portofolio" },
  { href: "#process", label: "Proses" },
  { href: "#contact", label: "Kontak" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "border-b py-4"
          : "border-b border-transparent py-6"
      )}
      style={scrolled ? {
        backgroundColor: "rgba(13, 13, 15, 0.85)",
        backdropFilter: "blur(16px)",
        borderColor: "rgba(139, 128, 248, 0.1)",
      } : {}}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <Image 
            src="/logo.jpg" 
            alt="Malika Digital Logo" 
            width={32} 
            height={32} 
            className="rounded-full object-cover border border-white/10"
          />
          <span className="text-base font-medium tracking-wider text-foreground/90 uppercase hidden sm:block">
            Malika
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          {navLinks.map((link) => (
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
            className="text-sm font-medium text-primary-foreground bg-primary hover:opacity-90 transition-opacity px-5 py-2 rounded-full"
          >
            Mulai Diskusi
          </Link>
        </div>
      </Container>
    </header>
  );
}

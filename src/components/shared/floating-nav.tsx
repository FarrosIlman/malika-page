"use client";

import { useEffect, useState } from "react";
import { m as motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingNav() {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the progress bar movement
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the back to top button after scrolling down 400px
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar at the very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Floating Buttons Container - Bottom Right */}
      <div className="fixed bottom-8 right-6 md:bottom-12 md:right-8 flex flex-col items-end gap-4 z-[999]">
        
        {/* Back to Top Button */}
        <AnimatePresence>
          {isScrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              className="p-3 bg-surface border border-white/10 rounded-full shadow-lg text-foreground hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="relative p-4 bg-green-500 rounded-full shadow-[0_8px_32px_rgba(34,197,94,0.3)] text-white hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 focus:outline-none flex items-center justify-center group"
          aria-label="Chat via WhatsApp"
        >
          {/* Continuous pulsing ring */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-green-500 -z-10"
          />
          <MessageCircle className="w-6 h-6 relative z-10" />
          
          {/* Tooltip that shows on hover (desktop only) */}
          <div className="absolute right-full mr-4 px-3 py-1.5 bg-surface border border-white/10 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap hidden md:block text-foreground">
            Konsultasi via WhatsApp
          </div>
        </motion.a>
      </div>
    </>
  );
}

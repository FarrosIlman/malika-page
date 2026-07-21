"use client";

import { useEffect, useState } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Custom Luxury Cubic-Bezier Curve (Khas Apple & Luxury Motion Graphics)
const LUXURY_EASE = [0.19, 1, 0.22, 1] as const;
const CINEMATIC_EASE = [0.16, 1, 0.3, 1] as const;

export function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Total durasi 5.2 detik — memberikan pengalaman visual yang tenang & elegan
    const timer = setTimeout(() => setShow(false), 5200);
    return () => clearTimeout(timer);
  }, []);

  const title = "Malika Digital Solutions";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden bg-[#020204] px-4 select-none"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(28px) brightness(1.3)",
          }}
          transition={{ duration: 1.2, ease: LUXURY_EASE }}
        >
          {/* 1. ULTRA-FINE SPECULAR AMBIENT GLOW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0.15, 0.35, 0.2],
              scale: [0.9, 1.1, 1],
            }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            className="absolute h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-indigo-900/10 to-transparent blur-[130px] pointer-events-none"
          />

          <div className="relative flex flex-col items-center">

            {/* 2. LOGO CONTAINER — Specular Glass Light Pass */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: LUXURY_EASE, delay: 0.1 }}
              className="relative group"
            >
              {/* Outer Subtle Radial Aura */}
              <div className="absolute -inset-4 rounded-full bg-blue-500/10 blur-xl opacity-70 transition-all" />

              {/* Logo Wrapper */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
                className="relative h-20 w-20 overflow-hidden rounded-full sm:h-24 sm:w-24 shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-white/10"
              >
                <Image
                  src="/logo.jpg"
                  alt="Malika Logo"
                  fill
                  sizes="96px"
                  className="object-cover scale-105"
                  priority
                />

                {/* Sweeping Light Pass di atas Logo */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "200%", opacity: [0, 0.5, 0] }}
                  transition={{
                    duration: 2.2,
                    delay: 1.4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2.5,
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                />
              </motion.div>
            </motion.div>

            {/* 3. WORDMARK — Kinetic Curved Wave & Character Blur Expansion */}
            <div className="mt-9 overflow-hidden py-1">
              <motion.div className="flex justify-center text-2xl font-light tracking-tight text-white sm:text-3xl font-serif">
                {title.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 40,
                      filter: "blur(16px)",
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      scale: 1,
                    }}
                    transition={{
                      duration: 1.1,
                      ease: LUXURY_EASE,
                      delay: 0.5 + index * 0.025,
                    }}
                    className={char === " " ? "mr-2" : "inline-block"}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* 4. TAGLINE — Kinetic Tracking Spacing (Huruf Merenggang Halus) */}
            <div className="mt-3 overflow-hidden py-1">
              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                  filter: "blur(12px)",
                  letterSpacing: "0.1em",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  letterSpacing: "0.38em",
                }}
                transition={{
                  duration: 1.6,
                  ease: LUXURY_EASE,
                  delay: 1.2,
                }}
                className="text-[10px] font-medium uppercase text-white/35 sm:text-[11px]"
              >
                IDE ANDA,{" "}
                <span className="font-semibold text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.6)]">
                  SOLUSI KAMI
                </span>
              </motion.p>
            </div>

            {/* 5. PROGRESS LINE — Micro-Glow Hairline (Garis Tipis Super Mewah) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="relative mt-12 h-[1px] w-40 overflow-hidden bg-white/[0.04]"
            >
              {/* Hairline Progress Fill */}
              <motion.div
                className="h-full origin-left bg-gradient-to-r from-transparent via-blue-400 to-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 3.5, delay: 0.9, ease: CINEMATIC_EASE }}
              />

              {/* Ultra-Fast Beam Sweep */}
              <motion.div
                className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "300%" }}
                transition={{
                  duration: 2,
                  delay: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.8,
                }}
              />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
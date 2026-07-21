"use client";

import { useEffect, useState } from "react";
import { m as motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth out the movement using a spring
  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const mouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center the 32px cursor (16px offset)
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeave = () => setIsVisible(false);
    const mouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseleave", mouseLeave);
    window.addEventListener("mouseenter", mouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeave);
      window.removeEventListener("mouseenter", mouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99999] flex items-center justify-center border border-white/20 bg-white/5 backdrop-blur-sm shadow-sm"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
      }}
      transition={{ duration: 0.15 }}
    >
      <div className={`w-1.5 h-1.5 rounded-full bg-primary/80 transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`} />
    </motion.div>
  );
}

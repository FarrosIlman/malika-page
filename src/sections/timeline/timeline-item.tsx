"use client";

import { m as motion } from "framer-motion";

interface TimelineItemProps {
  step: string;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ step, title, description, index, isLast }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-[23px] top-12 bottom-[-24px] w-[2px] bg-white/10" />
      )}
      
      {/* Node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
        className="relative z-10 w-12 h-12 flex-shrink-0 rounded-full bg-background border border-primary flex items-center justify-center text-primary font-bold shadow-[0_0_15px_rgba(59,130,246,0.3)]"
      >
        {step}
      </motion.div>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="pb-12"
      >
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 mt-2">{title}</h3>
        <p className="text-muted text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      </motion.div>
    </div>
  );
}

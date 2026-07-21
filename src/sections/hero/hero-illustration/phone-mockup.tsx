"use client";

import { m as motion } from "framer-motion";

export function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: 50 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute bottom-[-10%] right-[-5%] w-[180px] h-[360px] bg-background border-4 border-white/20 rounded-[2rem] shadow-2xl overflow-hidden glass z-30"
      style={{
        boxShadow: "-10px 20px 40px rgba(0,0,0,0.5)",
      }}
    >
      {/* Dynamic Island / Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
      
      {/* App Content */}
      <div className="pt-10 p-4 h-full flex flex-col gap-3">
        <div className="w-full h-24 bg-primary/20 rounded-xl" />
        <div className="flex gap-2">
          <div className="w-1/2 h-20 bg-secondary/20 rounded-xl" />
          <div className="w-1/2 h-20 bg-white/10 rounded-xl" />
        </div>
        <div className="flex-1 bg-white/5 rounded-xl border border-white/10 flex flex-col justify-end p-2 gap-2">
          <div className="w-[80%] h-2 bg-white/20 rounded-full" />
          <div className="w-[60%] h-2 bg-white/10 rounded-full" />
          <div className="w-[90%] h-2 bg-white/10 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}

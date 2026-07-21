"use client";

import { m as motion } from "framer-motion";

export function LaptopDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] bg-background border-2 border-border rounded-xl shadow-2xl overflow-hidden glass z-20"
      style={{
        transformPerspective: 1000,
        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
      }}
    >
      {/* Browser Chrome */}
      <div className="h-8 border-b border-border bg-black/40 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="mx-auto h-4 w-48 bg-white/10 rounded-md" />
      </div>

      {/* Dashboard Content */}
      <div className="p-6 flex flex-col gap-4 h-full">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="w-32 h-6 bg-white/10 rounded-md" />
          <div className="w-10 h-10 rounded-full bg-primary/20" />
        </div>

        {/* Chart Area */}
        <div className="flex-1 flex gap-4">
          <div className="w-2/3 h-full rounded-lg bg-white/5 border border-white/10 p-4 flex flex-col justify-end gap-2">
            <div className="w-full h-32 flex items-end justify-between gap-2">
              {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  className="w-full bg-primary/40 rounded-t-sm"
                />
              ))}
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full mt-2" />
          </div>
          <div className="w-1/3 h-full flex flex-col gap-4">
            <div className="flex-1 rounded-lg bg-secondary/10 border border-secondary/20 p-4" />
            <div className="flex-1 rounded-lg bg-primary/10 border border-primary/20 p-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

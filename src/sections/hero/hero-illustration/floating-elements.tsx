"use client";

import { m as motion } from "framer-motion";
import { Activity, Bell } from "lucide-react";

export function FloatingElements() {
  return (
    <>
      {/* Analytics Card */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-10 -left-10 bg-background/80 backdrop-blur-xl border border-border p-4 rounded-xl shadow-lg z-30 flex items-center gap-4"
        style={{
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <Activity size={20} />
        </div>
        <div>
          <p className="text-xs text-muted">Total Traffic</p>
          <p className="text-lg font-bold text-white">+245%</p>
        </div>
      </motion.div>

      {/* Notification Card */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute top-20 -right-8 bg-background/80 backdrop-blur-xl border border-border p-3 rounded-xl shadow-lg z-30 flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
          <Bell size={16} />
        </div>
        <div>
          <p className="text-sm font-medium text-white">System Deployed</p>
          <p className="text-xs text-muted">Just now</p>
        </div>
      </motion.div>

      {/* 3D Sphere / Blur Blob */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-10 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary blur-md opacity-60 z-10"
      />
    </>
  );
}

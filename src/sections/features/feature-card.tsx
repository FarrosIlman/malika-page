"use client";

import { m as motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  index: number;
}

export function FeatureCard({ title, description, icon: Icon, color, bgColor, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative p-8 rounded-2xl glass border border-border hover:border-primary/50 transition-colors overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className={`w-14 h-14 rounded-xl ${bgColor} flex items-center justify-center mb-6`}>
        <Icon className={`w-7 h-7 ${color}`} />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

"use client";

import { m as motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { statistics } from "@/data/statistics";

export function StatisticsSection() {
  return (
    <section
      className="py-16"
      style={{
        borderTop:    "1px solid rgba(139,128,248,0.07)",
        borderBottom: "1px solid rgba(139,128,248,0.07)",
        backgroundColor: "rgba(139,128,248,0.02)",
      }}
    >
      <Container>
        {/*
         * Responsive:
         * mobile  → 1 column, stacked
         * sm      → 2 columns
         * md+     → 4 columns
         * Divider antar kolom hanya muncul di md+
         */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={
                "flex flex-col gap-1 " +
                // Right border on md+ except last
                (index < statistics.length - 1
                  ? "md:border-r md:pr-8 md:mr-0"
                  : "") +
                // Left padding for md+ except first
                (index > 0 ? " md:pl-8" : "")
              }
              style={
                index < statistics.length - 1
                  ? { borderColor: "rgba(139,128,248,0.15)" }
                  : {}
              }
            >
              <span
                className="text-4xl font-semibold text-foreground tabular-nums"
                aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-muted">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

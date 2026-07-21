"use client";

import { m as motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { features } from "@/data/features";
import { LucideIcon } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

function FeatureRow({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
      className="group flex flex-col sm:flex-row items-start gap-6 py-8 border-b last:border-0 rounded-xl px-4
                 transition-all duration-200 ease-out code-block my-4"
    >
      {/* Icon container */}
      <div
        className="relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                   transition-colors duration-200 bg-[#0a0a14] z-10"
        style={{
          border: "1px solid rgba(139,128,248,0.2)",
        }}
        aria-hidden="true"
      >
        <Icon className="text-primary group-hover:text-accent transition-colors" size={24} aria-hidden="true" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0 z-10">
        <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-[15px] text-muted leading-relaxed max-w-2xl">{description}</p>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section id="services" className="py-24">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-6">
          <span className="badge-terminal">
            <span aria-hidden="true">&gt;_</span>
            Core Expertise & Services
          </span>
          <h2 className="text-display text-4xl md:text-5xl leading-[1.1] text-foreground">
            Solusi digital end-to-end untuk bisnis dan akademik
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            Sebagai digital agency & software house terpercaya, kami mendeliver exceptional digital products dan menyediakan technical consulting terbaik untuk memastikan setiap project Anda sukses.
          </p>
        </div>

        <div role="list" aria-label="Our core services">
          {features.map((feature, i) => (
            <div key={feature.id} role="listitem">
              <FeatureRow
                index={i}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { m as motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { costSavingTips } from "@/data/tips";
import { Lightbulb, CheckCircle2 } from "lucide-react";

export function TipsSection() {
  return (
    <section id="tips" className="py-24 relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Heading */}
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32 lg:h-fit">
            <span className="badge-terminal">
              <span aria-hidden="true">&gt;_</span>
              Optimization
            </span>
            <h2 className="text-display text-4xl md:text-5xl leading-[1.1] text-foreground">
              Cara hemat biaya proyek
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Langkah cerdas untuk mendapatkan hasil maksimal dengan budget yang lebih efisien tanpa mengorbankan kualitas.
            </p>
            
            <div className="pt-6 hidden lg:block">
              <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10 text-primary">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium leading-tight">
                  Perencanaan matang = Hemat budget di masa depan.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Tips List */}
          <div className="lg:w-2/3 space-y-6">
            {costSavingTips.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col sm:flex-row gap-6 p-6 md:p-8 rounded-3xl transition-all duration-300 hover:bg-white/[0.02]"
                  style={{ border: "1px solid rgba(139,128,248,0.1)" }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-background border border-white/10 flex items-center justify-center text-muted group-hover:text-primary group-hover:border-primary/30 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-mono text-primary/50 font-light tabular-nums leading-none">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Tip Box */}
                    <div className="mt-4 p-4 rounded-2xl flex items-start gap-3 bg-white/[0.02] border border-white/[0.05]">
                      <Lightbulb className="w-5 h-5 text-yellow-500/80 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-semibold text-foreground/80 tracking-wider uppercase mb-1">
                          Pro Tip
                        </span>
                        <p className="text-sm text-muted/90 italic">
                          "{item.tip}"
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

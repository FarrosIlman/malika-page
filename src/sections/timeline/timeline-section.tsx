"use client";

import { useState } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/shared/container";
import { projectTimeline, academicTimeline } from "@/data/timeline";
import { TextReveal } from "@/components/shared/text-reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function TimelineSection() {
  const [activeTab, setActiveTab] = useState<"project" | "academic">("project");
  
  const currentTimeline = activeTab === "project" ? projectTimeline : academicTimeline;

  return (
    <section
      id="process"
      className="py-24 relative overflow-clip"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          {/* Sticky heading */}
          <div className="lg:sticky lg:top-32 lg:self-start space-y-5">
            <span className="badge-terminal">
              <span aria-hidden="true">&gt;_</span>
              Development Workflow
            </span>
            <TextReveal 
              text="Proses kerja yang transparan & terukur" 
              className="text-display text-4xl md:text-5xl leading-[1.1] text-foreground" 
            />
            <p className="text-muted leading-relaxed text-sm">
              Baik dalam mendevelop aplikasi skala enterprise maupun menyediakan layanan bimbingan skripsi IT, kami menerapkan workflow yang agile, terstruktur, dan transparan.
            </p>
            
            {/* Tab Switcher */}
            <div className="flex bg-[#0f0f1c] p-1 rounded-lg border border-border mt-8 max-w-fit">
              <button
                onClick={() => setActiveTab("project")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeTab === "project" 
                    ? "bg-[#8b80f8]/20 text-primary border border-primary/30 shadow-sm" 
                    : "text-muted hover:text-foreground hover:bg-white/5 border border-transparent"
                }`}
              >
                Project Development
              </button>
              <button
                onClick={() => setActiveTab("academic")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeTab === "academic" 
                    ? "bg-[#8b80f8]/20 text-primary border border-primary/30 shadow-sm" 
                    : "text-muted hover:text-foreground hover:bg-white/5 border border-transparent"
                }`}
              >
                Academic Assistance
              </button>
            </div>
          </div>

          {/* Timeline steps with connector line */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.ol
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                aria-label={`Our ${activeTab} process steps`}
              >
                {currentTimeline.map((item, index) => {
                  const isLast = index === currentTimeline.length - 1;
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
                      className="relative flex gap-6"
                    >
                      {/* Left column: number + connector line */}
                      <div className="flex flex-col items-center flex-shrink-0 w-8">
                        {/* Step number circle */}
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center
                                     text-[10px] font-medium font-mono tabular-nums flex-shrink-0 z-10 bg-[#08080f]"
                          style={{
                            border: "1px solid rgba(139,128,248,0.4)",
                            color: "rgba(139,128,248,0.9)",
                          }}
                          aria-hidden="true"
                        >
                          {item.step}
                        </div>

                        {/* Connector line — gradient from primary to transparent */}
                        {!isLast && (
                          <div
                            className="w-px flex-1 mt-2 mb-0"
                            style={{
                              background:
                                "linear-gradient(to bottom, rgba(139,128,248,0.4), rgba(139,128,248,0))",
                              minHeight: "2rem",
                            }}
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className={`flex-1 pb-8 ${isLast ? "pb-0" : ""}`}>
                        <h3 className="font-medium text-foreground mb-2 text-lg">{item.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ol>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

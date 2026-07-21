"use client";

import { useState } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/shared/container";
import { faqData } from "@/data/faq";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>("Software Development-0"); // Open first item by default

  const toggleOpen = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Heading */}
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32 lg:h-fit">
            <span className="badge-terminal">
              <span aria-hidden="true">&gt;_</span>
              FAQ
            </span>
            <h2 className="text-display text-4xl md:text-5xl leading-[1.1] text-foreground">
              Pertanyaan yang sering diajukan
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Jawaban atas hal-hal yang mungkin sedang Anda pertimbangkan sebelum memulai proyek bersama kami.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-2/3 space-y-12">
            {faqData.map((category) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6 pl-4 border-l-2 border-primary/30">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((q, idx) => {
                    const id = `${category.category}-${idx}`;
                    const isOpen = openIndex === id;

                    return (
                      <div
                        key={id}
                        className="rounded-2xl overflow-hidden transition-colors"
                        style={{
                          backgroundColor: isOpen ? "rgba(255,255,255,0.02)" : "transparent",
                          border: "1px solid",
                          borderColor: isOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
                        }}
                      >
                        <button
                          onClick={() => toggleOpen(id)}
                          className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                          <span className="text-foreground font-medium pr-8">{q.question}</span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-muted"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-6 pt-2 text-muted text-sm leading-relaxed border-t border-white/5 mx-6">
                                {q.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

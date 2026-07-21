"use client";

import { m as motion } from "framer-motion";

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="flex-1 w-full max-w-lg flex flex-col gap-4 relative"
      aria-hidden="true"
    >
      {/* ── Graphic Design Mockup (Behind) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20, rotate: -2 }}
        animate={{ opacity: 0.6, scale: 0.95, y: -40, rotate: -4 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-0 right-2 sm:right-4 w-[95%] sm:w-[90%] rounded-2xl border overflow-hidden shadow-2xl z-0"
        style={{ backgroundColor: "#1c1c28", borderColor: "rgba(139,128,248,0.15)" }}
      >
        {/* Figma-like topbar */}
        <div className="flex items-center justify-between px-3 py-2 border-b" style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#252536" }}>
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded bg-[#f24e1e] flex items-center justify-center">
              <div className="w-2 h-2 border-[1.5px] border-white rounded-full" />
            </div>
            <div className="text-[10px] text-muted">Brand Identity.fig</div>
          </div>
          <div className="flex gap-1.5">
            <div className="w-4 h-4 rounded-full bg-white/10" />
            <div className="w-4 h-4 rounded-full bg-white/10" />
          </div>
        </div>
        {/* Figma canvas area */}
        <div className="h-48 p-4 flex gap-4" style={{ backgroundColor: "#0f0f1c", backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "12px 12px" }}>
           <div className="w-1/3 bg-[#8b80f8] rounded shadow-lg" />
           <div className="w-2/3 bg-[#1c1c28] border border-white/10 rounded shadow-lg p-2">
              <div className="w-1/2 h-2 bg-white/20 rounded mb-2" />
              <div className="w-3/4 h-2 bg-white/10 rounded mb-1" />
              <div className="w-5/6 h-2 bg-white/10 rounded" />
           </div>
        </div>
      </motion.div>

      {/* ── Code Editor Mockup (Front) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full rounded-2xl border overflow-hidden shadow-2xl z-10"
        style={{ backgroundColor: "#06060c", borderColor: "rgba(139,128,248,0.15)" }}
      >
        {/* Editor tabs */}
        <div
          className="flex items-end px-2 pt-2 border-b"
          style={{ borderColor: "rgba(139,128,248,0.1)", backgroundColor: "#0a0a14" }}
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg bg-[#06060c] border border-b-0" style={{ borderColor: "rgba(139,128,248,0.15)" }}>
            <span className="text-[#22d3ee] text-xs">TS</span>
            <span className="text-xs text-foreground/80 font-mono">App.tsx</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg opacity-50">
            <span className="text-[#facc15] text-xs">JS</span>
            <span className="text-xs text-foreground/60 font-mono">api.js</span>
          </div>
        </div>

        {/* Code content */}
        <div className="p-4 font-mono text-[11px] leading-relaxed overflow-x-auto">
          <div className="flex">
            <div className="text-muted/40 select-none pr-4 text-right w-6">1</div>
            <div className="text-foreground">
              <span className="text-[#c678dd]">import</span> {"{"} useState {"}"} <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">{"'"}react{"'"}</span>;
            </div>
          </div>
          <div className="flex">
            <div className="text-muted/40 select-none pr-4 text-right w-6">2</div>
            <div className="text-foreground">
              <span className="text-[#c678dd]">import</span> {"{"} ClientData {"}"} <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">{"'"}@/types{"'"}</span>;
            </div>
          </div>
          <div className="flex">
            <div className="text-muted/40 select-none pr-4 text-right w-6">3</div>
            <div className="text-foreground"></div>
          </div>
          <div className="flex">
            <div className="text-muted/40 select-none pr-4 text-right w-6">4</div>
            <div className="text-foreground">
              <span className="text-[#c678dd]">export</span> <span className="text-[#56b6c2]">function</span> <span className="text-[#61afef]">Dashboard</span>() {"{"}
            </div>
          </div>
          <div className="flex">
            <div className="text-muted/40 select-none pr-4 text-right w-6">5</div>
            <div className="text-foreground ml-4">
              <span className="text-[#c678dd]">const</span> [data, setData] = <span className="text-[#56b6c2]">useState</span>&lt;<span className="text-[#e5c07b]">ClientData</span>&gt;();
            </div>
          </div>
          <div className="flex">
            <div className="text-muted/40 select-none pr-4 text-right w-6">6</div>
            <div className="text-foreground ml-4">
              <span className="text-[#c678dd]">const</span> isAssisting = <span className="text-[#d19a66]">true</span>;
            </div>
          </div>
          <div className="flex">
            <div className="text-muted/40 select-none pr-4 text-right w-6">7</div>
            <div className="text-foreground"></div>
          </div>
          <div className="flex">
            <div className="text-muted/40 select-none pr-4 text-right w-6">8</div>
            <div className="text-foreground ml-4">
              <span className="text-[#c678dd]">return</span> (
            </div>
          </div>
          <div className="flex">
            <div className="text-muted/40 select-none pr-4 text-right w-6">9</div>
            <div className="text-foreground ml-8">
              &lt;<span className="text-[#e06c75]">SystemArchitecture</span> 
            </div>
          </div>
          <div className="flex">
            <div className="text-muted/40 select-none pr-4 text-right w-6">10</div>
            <div className="text-foreground ml-12">
              <span className="text-[#d19a66]">scalable</span>={"{"}<span className="text-[#d19a66]">true</span>{"}"}
            </div>
          </div>
          <div className="flex">
            <div className="text-muted/40 select-none pr-4 text-right w-6">11</div>
            <div className="text-foreground ml-8">
              /&gt;
            </div>
          </div>
          <div className="flex">
            <div className="text-muted/40 select-none pr-4 text-right w-6">12</div>
            <div className="text-foreground ml-4">
              );
            </div>
          </div>
          <div className="flex">
            <div className="text-muted/40 select-none pr-4 text-right w-6">13</div>
            <div className="text-foreground">{"}"}</div>
          </div>
        </div>

        {/* Terminal panel */}
        <div className="border-t bg-[#0a0a14] p-3 font-mono text-[10px]" style={{ borderColor: "rgba(139,128,248,0.1)" }}>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-muted uppercase">Terminal</span>
          </div>
          <div className="text-success flex items-center gap-2">
            <span>✓</span>
            <span>Compiled successfully in 1240ms</span>
          </div>
          <div className="text-foreground/70 flex items-center gap-2">
            <span className="text-[#22d3ee]">➜</span>
            <span>Local: http://localhost:3000</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

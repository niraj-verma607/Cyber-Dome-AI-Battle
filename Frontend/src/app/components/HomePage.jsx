import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.2),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.15),transparent_45%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 sm:py-10 md:px-10">
        <header className="mb-12 flex flex-wrap items-center justify-between gap-3 sm:mb-14">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-xs shadow-[0_0_15px_rgba(249,115,22,0.3)] backdrop-blur-md"
          >
            Cyber Dome
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.18em] text-zinc-400 sm:text-xs"
          >
            AI Battle Platform
          </motion.span>
        </header>

        <main className="flex flex-1 flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl drop-shadow-lg"
          >
            Mistral vs Cohere
            <span className="block mt-2 bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Judged by Gemini.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg lg:text-xl font-light"
          >
            Submit one prompt. Watch Mistral and Cohere go head-to-head generating rival responses. Gemini acts as the ultimate judge, scoring each answer for quality, reasoning, and usefulness before declaring the winner.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4 sm:mt-12 sm:gap-6"
          >
            <button
              type="button"
              onClick={() => navigate("/battle-arena")}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-orange-500 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all hover:bg-orange-400 sm:px-8 sm:py-4 sm:text-sm shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
            >
              <span className="relative z-10">Access Battle Arena</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">
                →
              </span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            <span className="text-xs font-medium text-zinc-400 sm:text-sm uppercase tracking-wider">
              Real-time duel. Instant judging.
            </span>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

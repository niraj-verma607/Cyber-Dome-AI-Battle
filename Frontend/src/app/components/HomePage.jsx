import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.3),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.28),transparent_45%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 sm:py-10 md:px-10">
        <header className="mb-12 flex flex-wrap items-center justify-between gap-3 sm:mb-14">
          <span className="rounded-full border border-orange-300/35 bg-orange-400/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-200 sm:text-xs">
            Cyber Dome
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-400 sm:text-xs">
            AI Battle Platform
          </span>
        </header>

        <main className="flex flex-1 flex-col justify-center">
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Enter the Cyber Dome.
            <span className="block text-orange-300">
              Watch AI Models Compete.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg">
            Submit one prompt. Two AI models generate rival responses. A third
            AI judge scores each answer for quality, reasoning, and usefulness,
            then declares the winner.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
            <button
              type="button"
              onClick={() => navigate("/battle-arena")}
              className="group inline-flex items-center gap-2 rounded-full bg-orange-400 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-950 transition hover:bg-orange-300 sm:px-7 sm:py-3 sm:text-sm"
            >
              Access Battle Arena
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <span className="text-xs text-zinc-400 sm:text-sm">
              Real-time duel. Instant judging.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}

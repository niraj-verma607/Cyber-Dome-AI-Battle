import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { motion } from "framer-motion";

export default function ArenaResponse({ solution1, solution2, judge }) {
  useEffect(() => {
    hljs.highlightAll();
  }, [solution1, solution2, judge]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="my-6 flex w-full flex-col gap-6 px-1 sm:my-8 sm:px-2 md:px-4"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
        {/* Solution 1 */}
        <motion.div variants={itemVariants} className="relative flex flex-col rounded-3xl border border-orange-500/30 bg-zinc-900/60 p-5 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] sm:p-6 md:p-8">
          <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-bl from-orange-500/10 to-transparent opacity-50 blur-xl"></div>
          <h3 className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400 sm:mb-6 sm:text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>{" "}
            Mistral
          </h3>
          <div className="text-zinc-300 relative z-10">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => <h1 className="mb-4 mt-6 text-2xl font-bold text-white drop-shadow-sm" {...props} />,
                h2: ({ node, ...props }) => <h2 className="mb-3 mt-5 text-xl font-bold text-white" {...props} />,
                h3: ({ node, ...props }) => <h3 className="mb-2 mt-4 text-lg font-bold text-orange-200" {...props} />,
                p: ({ node, ...props }) => <p className="mb-4 leading-relaxed text-zinc-300" {...props} />,
                ul: ({ node, ...props }) => <ul className="mb-4 list-disc space-y-1 pl-6 text-zinc-300" {...props} />,
                ol: ({ node, ...props }) => <ol className="mb-4 list-decimal space-y-1 pl-6 text-zinc-300" {...props} />,
                a: ({ node, ...props }) => <a className="text-orange-400 underline hover:text-orange-300" {...props} />,
                code: ({ node, inline, className, children, ...props }) => {
                  return !inline ? (
                    <div className="rounded-xl overflow-hidden my-4 border border-zinc-700/50 shadow-inner">
                      <pre className="p-4 bg-zinc-950/80 overflow-x-auto text-sm text-zinc-100">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    </div>
                  ) : (
                    <code className="rounded-md bg-orange-500/10 px-1.5 py-0.5 text-sm font-mono text-orange-300 border border-orange-500/20" {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {solution1}
            </ReactMarkdown>
          </div>
        </motion.div>

        {/* Solution 2 */}
        <motion.div variants={itemVariants} className="relative flex flex-col rounded-3xl border border-amber-500/30 bg-zinc-900/60 p-5 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] sm:p-6 md:p-8">
          <div className="absolute top-0 left-0 h-24 w-24 rounded-br-full bg-gradient-to-br from-amber-500/10 to-transparent opacity-50 blur-xl"></div>
          <h3 className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 sm:mb-6 sm:text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>{" "}
            Cohere
          </h3>
          <div className="text-zinc-300 relative z-10">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => <h1 className="mb-4 mt-6 text-2xl font-bold text-white drop-shadow-sm" {...props} />,
                h2: ({ node, ...props }) => <h2 className="mb-3 mt-5 text-xl font-bold text-white" {...props} />,
                h3: ({ node, ...props }) => <h3 className="mb-2 mt-4 text-lg font-bold text-amber-200" {...props} />,
                p: ({ node, ...props }) => <p className="mb-4 leading-relaxed text-zinc-300" {...props} />,
                ul: ({ node, ...props }) => <ul className="mb-4 list-disc space-y-1 pl-6 text-zinc-300" {...props} />,
                ol: ({ node, ...props }) => <ol className="mb-4 list-decimal space-y-1 pl-6 text-zinc-300" {...props} />,
                a: ({ node, ...props }) => <a className="text-amber-400 underline hover:text-amber-300" {...props} />,
                code: ({ node, inline, className, children, ...props }) => {
                  return !inline ? (
                    <div className="rounded-xl overflow-hidden my-4 border border-zinc-700/50 shadow-inner">
                      <pre className="p-4 bg-zinc-950/80 overflow-x-auto text-sm text-zinc-100">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    </div>
                  ) : (
                    <code className="rounded-md bg-amber-500/10 px-1.5 py-0.5 text-sm font-mono text-amber-300 border border-amber-500/20" {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {solution2}
            </ReactMarkdown>
          </div>
        </motion.div>
      </div>

      {/* Judge Panel */}
      {judge && (
        <motion.div variants={itemVariants} className="mt-2 relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-zinc-900/80 p-5 shadow-[0_0_25px_rgba(16,185,129,0.1)] backdrop-blur-xl sm:mt-4 sm:p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-zinc-900/0 to-emerald-900/20 pointer-events-none" />
          <h3 className="relative z-10 mb-5 flex items-center gap-3 text-lg font-bold tracking-widest uppercase text-emerald-400 sm:mb-6 sm:text-xl drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
            <span className="text-2xl">⚖️</span> Gemini Verdict
          </h3>
          <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-orange-500/20 bg-black/40 px-5 py-4 shadow-inner backdrop-blur-md">
                <span className="font-semibold text-zinc-400 uppercase tracking-widest text-sm">
                  Mistral Score
                </span>
                <span className="text-3xl font-black text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                  {judge.solution_1_score}/10
                </span>
              </div>
              <p className="px-1 text-sm leading-relaxed text-zinc-400 sm:px-2">
                {judge.solution_1_reasoning}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-amber-500/20 bg-black/40 px-5 py-4 shadow-inner backdrop-blur-md">
                <span className="font-semibold text-zinc-400 uppercase tracking-widest text-sm">
                  Cohere Score
                </span>
                <span className="text-3xl font-black text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                  {judge.solution_2_score}/10
                </span>
              </div>
              <p className="px-1 text-sm leading-relaxed text-zinc-400 sm:px-2">
                {judge.solution_2_reasoning}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export default function ArenaResponse({ solution1, solution2, judge }) {
  useEffect(() => {
    hljs.highlightAll();
  }, [solution1, solution2]);

  return (
    <div className="my-6 flex w-full flex-col gap-6 px-1 sm:my-8 sm:px-2 md:px-4">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
        {/* Solution 1 */}
        <div className="flex flex-col rounded-3xl border border-orange-200 bg-white p-5 shadow-sm transition-all hover:shadow-md sm:p-6 md:p-8">
          <h3 className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-orange-700 sm:mb-6 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>{" "}
            Solution 1
          </h3>
          <div className="text-zinc-700">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1
                    className="mb-4 mt-6 text-2xl font-bold text-zinc-900"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="mb-3 mt-5 text-xl font-bold text-zinc-900"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="mb-2 mt-4 text-lg font-bold text-zinc-900"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="mb-4 leading-relaxed text-zinc-700"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul
                    className="mb-4 list-disc space-y-1 pl-6 text-zinc-700"
                    {...props}
                  />
                ),
                ol: ({ node, ...props }) => (
                  <ol
                    className="mb-4 list-decimal space-y-1 pl-6 text-zinc-700"
                    {...props}
                  />
                ),
                a: ({ node, ...props }) => (
                  <a
                    className="text-orange-700 underline hover:text-orange-600"
                    {...props}
                  />
                ),
                code: ({ node, inline, className, children, ...props }) => {
                  return !inline ? (
                    <div className="rounded-xl overflow-hidden my-4 border border-zinc-200 dark:border-zinc-800">
                      <pre className="p-4 bg-zinc-950 overflow-x-auto text-sm text-zinc-100">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    </div>
                  ) : (
                    <code
                      className="rounded-md bg-orange-100 px-1.5 py-0.5 text-sm font-mono text-zinc-900"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {solution1}
            </ReactMarkdown>
          </div>
        </div>

        {/* Solution 2 */}
        <div className="flex flex-col rounded-3xl border border-orange-200 bg-white p-5 shadow-sm transition-all hover:shadow-md sm:p-6 md:p-8">
          <h3 className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-orange-700 sm:mb-6 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500"></span> Solution
            2
          </h3>
          <div className="text-zinc-700">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1
                    className="mb-4 mt-6 text-2xl font-bold text-zinc-900"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="mb-3 mt-5 text-xl font-bold text-zinc-900"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="mb-2 mt-4 text-lg font-bold text-zinc-900"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="mb-4 leading-relaxed text-zinc-700"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul
                    className="mb-4 list-disc space-y-1 pl-6 text-zinc-700"
                    {...props}
                  />
                ),
                ol: ({ node, ...props }) => (
                  <ol
                    className="mb-4 list-decimal space-y-1 pl-6 text-zinc-700"
                    {...props}
                  />
                ),
                a: ({ node, ...props }) => (
                  <a
                    className="text-orange-700 underline hover:text-orange-600"
                    {...props}
                  />
                ),
                code: ({ node, inline, className, children, ...props }) => {
                  return !inline ? (
                    <div className="rounded-xl overflow-hidden my-4 border border-zinc-200 dark:border-zinc-800">
                      <pre className="p-4 bg-zinc-950 overflow-x-auto text-sm text-zinc-100">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    </div>
                  ) : (
                    <code
                      className="rounded-md bg-orange-100 px-1.5 py-0.5 text-sm font-mono text-zinc-900"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {solution2}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Judge Panel */}
      {judge && (
        <div className="mt-2 rounded-3xl border border-orange-200 bg-orange-50 p-5 shadow-sm sm:mt-4 sm:p-8">
          <h3 className="mb-5 flex items-center gap-3 text-base font-semibold text-orange-900 sm:mb-6 sm:text-lg">
            ⚖️ Judge Recommendations
          </h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl border border-orange-200 bg-white px-4 py-3 sm:px-5">
                <span className="font-medium text-zinc-600">
                  Solution 1 Score
                </span>
                <span className="text-2xl font-bold text-orange-600">
                  {judge.solution_1_score}/10
                </span>
              </div>
              <p className="px-1 text-sm leading-relaxed text-zinc-600 sm:px-2">
                {judge.solution_1_reasoning}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl border border-orange-200 bg-white px-4 py-3 sm:px-5">
                <span className="font-medium text-zinc-600">
                  Solution 2 Score
                </span>
                <span className="text-2xl font-bold text-amber-600">
                  {judge.solution_2_score}/10
                </span>
              </div>
              <p className="px-1 text-sm leading-relaxed text-zinc-600 sm:px-2">
                {judge.solution_2_reasoning}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

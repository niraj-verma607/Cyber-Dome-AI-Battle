import React from "react";
import { motion } from "framer-motion";

export default function UserMessage({ message }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
      className="my-5 flex justify-end sm:my-6"
    >
      <div className="relative max-w-[90%] rounded-2xl rounded-br-sm border border-orange-500/50 bg-gradient-to-br from-orange-600/90 to-amber-600/90 px-5 py-4 text-base leading-relaxed text-white shadow-[0_0_15px_rgba(249,115,22,0.4)] backdrop-blur-md sm:max-w-[75%] sm:px-6 sm:py-5 sm:text-lg">
        <div className="absolute top-0 right-0 h-full w-full rounded-2xl rounded-br-sm bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
        <div className="relative z-10 font-medium tracking-wide">
          {message}
        </div>
      </div>
    </motion.div>
  );
}

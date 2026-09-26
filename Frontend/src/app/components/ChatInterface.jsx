import React, { useState, useRef, useEffect } from "react";
import UserMessage from "./UserMessage";
import ArenaResponse from "./ArenaResponse";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Optional UI response indicating wait state here
    
    try {
      const response = await axios.post("http://localhost:3000/invoke", {
        input: inputValue,
      });

      const data = response.data;

      const newMessage = {
        id: Date.now(),
        problem: inputValue,
        ...data.result,
      };

      setMessages([...messages, newMessage]);
    } catch (error) {
      console.error("Error invoking model", error);
    }
    setInputValue("");
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-100">
      <header className="sticky top-0 z-10 flex justify-center border-b border-orange-500/20 bg-zinc-950/80 px-4 py-4 backdrop-blur-lg sm:px-6 sm:py-5 md:px-8 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-bold tracking-widest uppercase text-orange-400 sm:text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]"
        >
          Cyber Dome Arena
        </motion.h1>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col overflow-y-auto px-3 py-6 sm:px-4 sm:py-8 md:px-8">
        {messages.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-1 items-center justify-center text-zinc-400"
          >
            <div className="text-center">
              <h2 className="mb-3 text-2xl font-bold tracking-wider text-orange-400 sm:text-3xl drop-shadow-md">
                Welcome to the Arena
              </h2>
              <p className="px-2 text-sm sm:text-base md:text-lg font-light text-zinc-300">
                Type a problem below to see two AI solutions go head-to-head.
              </p>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="mb-12"
              >
                <UserMessage message={msg.problem} />
                <ArenaResponse
                  solution1={msg.solution_1}
                  solution2={msg.solution_2}
                  judge={msg.judge}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
        <div ref={endOfMessagesRef} />
      </main>

      <div className="border-t border-orange-500/20 bg-zinc-950/90 px-3 py-4 sm:px-4 sm:py-5 md:px-6 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSend} className="relative flex items-center group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Deploy a challenge..."
              className="w-full rounded-full border border-orange-500/30 bg-zinc-900/80 py-3.5 pl-5 pr-14 text-base text-zinc-100 shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 placeholder:text-zinc-500 sm:py-4 sm:pl-6 sm:pr-16 sm:text-lg"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="absolute right-2 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-amber-500 p-2.5 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!inputValue.trim()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
              </svg>
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}

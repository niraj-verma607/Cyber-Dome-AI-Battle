import React, { useState, useRef, useEffect } from "react";
import UserMessage from "./UserMessage";
import ArenaResponse from "./ArenaResponse";
import axios from "axios";

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

    const response = await axios.post("http://localhost:3000/invoke", {
      input: inputValue,
    });

    const data = response.data;

    // console.log(data);

    const newMessage = {
      id: Date.now(),
      problem: inputValue,
      // simulate the delay or instantly add dummy response
      ...data.result,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-100">
      <header className="sticky top-0 z-10 flex justify-center border-b border-orange-900/50 bg-zinc-900/90 px-4 py-3 backdrop-blur-md sm:px-6 sm:py-4 md:px-8">
        <h1 className="text-base font-semibold tracking-tight text-orange-100 sm:text-xl">
          Cyber Dome
        </h1>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col overflow-y-auto px-3 py-6 sm:px-4 sm:py-8 md:px-8">
        {messages.length === 0 ? (
          <div className="flex flex-1 items-center justify-center text-zinc-400">
            <div className="text-center">
              <h2 className="mb-2 text-xl font-medium text-orange-300 sm:text-2xl">
                Welcome to the Arena
              </h2>
              <p className="px-2 text-sm sm:text-base">
                Type a problem below to see two AI solutions go head-to-head.
              </p>
            </div>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out"
            >
              <UserMessage message={msg.problem} />
              <ArenaResponse
                solution1={msg.solution_1}
                solution2={msg.solution_2}
                judge={msg.judge}
              />
            </div>
          ))
        )}
        <div ref={endOfMessagesRef} />
      </main>

      <div className="border-t border-orange-900/50 bg-zinc-900 px-3 py-3 sm:px-4 sm:py-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSend} className="relative flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question..."
              className="w-full rounded-full border border-orange-900/50 bg-zinc-800 py-3 pl-4 pr-14 text-base text-zinc-100 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-zinc-500 sm:py-4 sm:pl-6 sm:pr-16 sm:text-lg"
            />
            <button
              type="submit"
              className="absolute right-2 flex items-center justify-center rounded-full bg-orange-500 p-2.5 text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!inputValue.trim()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

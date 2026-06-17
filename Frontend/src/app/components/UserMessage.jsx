import React from "react";

export default function UserMessage({ message }) {
  return (
    <div className="my-5 flex justify-end sm:my-6">
      <div className="max-w-[90%] rounded-2xl rounded-br-sm bg-orange-500 px-4 py-3 text-base leading-relaxed text-white shadow-sm sm:max-w-[75%] sm:px-6 sm:py-4 sm:text-lg">
        {message}
      </div>
    </div>
  );
}

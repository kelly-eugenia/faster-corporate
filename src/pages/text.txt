import React, { useState } from "react";

type Message = {
  id: number;
  from: "user" | "support";
  text: string;
};

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "support",
      text: "Hi there 👋 How can we help today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "user", text: input.trim() },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 md:right-12 z-50 flex flex-col items-end">
      {/* Chat panel */}
      {isOpen && (
        <div className="w-full md:w-[360px] h-[480px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex items-center gap-2 flex-1">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                  F
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-gray-900">Hi there</span>
                <span>👋</span>
              </div>
            </div>

            <button className="p-1 rounded-full hover:bg-gray-100">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
              >
                <circle cx="5" cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="19" cy="12" r="1.5" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 px-4 pt-4 pb-2 overflow-y-auto bg-white">
            <div className="space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                      m.from === "user"
                        ? "bg-blue-600 text-white rounded-br-sm"
                        : "bg-gray-100 text-gray-900 rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t px-4 py-3 bg-white flex flex-col gap-2"
          >
            <div className="flex-1 flex items-center rounded-full border px-3 bg-gray-50">
              <input
                className="pl-2 flex-1 bg-transparent border-none outline-none text-sm text-secondary placeholder:text-gray-400"
                placeholder="Enter your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="ml-2 disabled:opacity-40"
                disabled={!input.trim()}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                >
                  <path d="M3.4 20.6L21 12 3.4 3.4 3 10l9 2-9 2z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="size-20 rounded-full bg-primary shadow-xl flex items-center justify-center text-bg-primary"
      >
        {isOpen ? (
          <span className="text-4xl text-bg-primary leading-none -mt-1">×</span>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

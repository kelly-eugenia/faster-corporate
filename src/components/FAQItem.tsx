import { type ReactNode } from "react";

type FAQProps = {
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  white?: boolean;
};

export default function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  white = false,
}: FAQProps) {
  return (
    <div
      className={`self-start w-full rounded-3xl p-2 ${white ? "bg-bg-primary" : "bg-bg-secondary"}`}
    >
      {/* Header row */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 text-left place-content-between"
        aria-expanded={isOpen}
      >
        <span
          className={`text-wrap text-lg md:text-xl lg:text-2xl font-semibold ${
            isOpen ? "text-primary" : "text-text-primary"
          }`}
        >
          {question}
        </span>

        <span className="flex size-6 lg:size-9 items-center justify-center text-3xl md:text-4xl leading-none font-bold text-primary">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Body */}
      <div
        className={`overflow-hidden text-text-primary transition-all duration-300 ${
          isOpen ? "opacity-100 mb-6 -mt-2" : "max-h-0 opacity-0 mb-0"
        }`}
      >
        <div className="px-6 text-base md:text-lg lg:text-xl leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

import { type ReactNode } from "react";

type FAQProps = {
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQProps) {
  return (
    <div className="self-start w-full rounded-3xl bg-bg-secondary px-2 lg:px-10">
      {/* Header row */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 py-0 lg:py-2 text-left place-content-between"
        aria-expanded={isOpen}
      >
        <span
          className={`text-lg md:text-xl lg:text-2xl font-semibold ${
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
          isOpen ? "-mt-2 opacity-100 mb-8" : "max-h-0 opacity-0 mb-0"
        }`}
      >
        <div className="px-4 lg:px-0 text-base md:text-lg lg:text-xl leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

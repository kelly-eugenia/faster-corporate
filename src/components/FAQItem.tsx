type FAQProps = {
  question: string;
  answer: string;
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
    <div className="self-start w-full rounded-3xl bg-bg-secondary px-4 py-2 md:px-10">
      {/* Header row */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 text-left place-content-between"
        aria-expanded={isOpen}
      >
        <span
          className={`text-2xl font-semibold ${
            isOpen ? "text-primary" : "text-text-primary"
          }`}
        >
          {question}
        </span>

        <span className="flex h-9 w-9 items-center justify-center text-4xl leading-none font-bold text-primary">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Body */}
      <div
        className={`mt-3 overflow-hidden text-text-primary transition-all duration-300 ${
          isOpen ? "opacity-100 mb-8" : "max-h-0 opacity-0 mb-0"
        }`}
      >
        <div className="text-xl leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}

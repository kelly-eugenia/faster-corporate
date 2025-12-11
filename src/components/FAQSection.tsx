import { useState, type ReactNode } from "react";

import FAQItem from "./FAQItem";

export type Faq = {
  question: string;
  answer: ReactNode;
};

type FaqSectionProps = {
  faqs: Faq[];
};

export default function FAQSection({ faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqsWithIndex = faqs.map((faq, index) => ({ ...faq, index }));

  const leftFaqs = faqsWithIndex.filter((f) => f.index % 2 === 0);
  const rightFaqs = faqsWithIndex.filter((f) => f.index % 2 === 1);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index)); // close if same, otherwise open new
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left column */}
      <div className="flex flex-col gap-8">
        {leftFaqs.map((faq) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === faq.index}
            onToggle={() => handleToggle(faq.index)}
          />
        ))}
      </div>

      {/* Right column */}
      <div className="flex flex-col gap-8">
        {rightFaqs.map((faq) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === faq.index}
            onToggle={() => handleToggle(faq.index)}
          />
        ))}
      </div>
    </div>
  );
}

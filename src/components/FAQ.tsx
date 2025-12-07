import { useState } from "react";

import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Do I need an account with Faster to use the service?",
    answer: (
      <>
        Yes — you’ll need to create a Faster account to apply for our Line of
        Credit and manage your repayments. Your account gives you secure access
        to your application, contract, transaction history and support.
      </>
    ),
  },
  {
    question: "Which banks are supported by Faster?",
    answer: (
      <>
        We support most major Australian banks and credit unions through our
        secure bank-verification partner. When you connect your bank, it’s
        read-only access — we cannot move your money.
      </>
    ),
  },
  {
    question: "Are there any fees for using Faster?",
    answer: (
      <>
        Yes — as a credit provider, our Line of Credit includes:
        <br />
        <span className="mr-4">•</span>
        a one-off establishment fee (20% of your approved limit)
        <br />
        <span className="mr-4">•</span>
        interest at 47% p.a. on your outstanding balance
        <br />
        <span className="mr-4">•</span>
        a $15 monthly fee
        <br />
        <span className="mr-4">•</span>
        a $3.50 fee per repayment
        <br />
        All fees are shown clearly before you sign your contract.
        <br />
        <button className="btn-primary text-lg">See Our Fees</button>
      </>
    ),
  },
  {
    question: "How long does it take for a payment or drawdown to go through?",
    answer: (
      <>
        Once your Line of Credit is approved and you make a drawdown request,
        funds typically arrive the same day — depending on your bank’s
        processing times. Some transfers may take longer, especially outside
        business hours.
      </>
    ),
  },
  {
    question: "What should I do if my payment doesn’t go through?",
    answer: (
      <>
        If a repayment fails, we’ll notify you. The most common reasons are
        insufficient funds or a bank delay. Log into your Faster dashboard to
        retry the payment or contact us if you need support.
      </>
    ),
  },
  {
    question: "How can I contact Faster for support or enquiries?",
    answer: (
      <>
        You can reach our team anytime at{" "}
        <a href="mailto:support@faster.com.au" className="hover:underline">
          support@faster.com.au
        </a>
        . We’re here to help with account access, repayments, fee questions, or
        anything else you’re unsure about.
      </>
    ),
  },
  {
    question: "Is Faster safe to use?",
    answer: (
      <>
        Yes — we use secure, industry-standard technology to protect your data,
        and all information is encrypted in transit and at rest. We also comply
        with Australian credit laws, privacy requirements, and
        responsible-lending regulations.
        <br />
        <button className="btn-primary text-lg">See Our Security</button>
      </>
    ),
  },
];

type FaqWithIndex = (typeof faqs)[number] & { index: number };

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqsWithIndex: FaqWithIndex[] = faqs.map((f, index) => ({
    ...f,
    index,
  }));

  const leftFaqs = faqsWithIndex.filter((f) => f.index % 2 === 0);
  const rightFaqs = faqsWithIndex.filter((f) => f.index % 2 === 1);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index)); // close if same, otherwise open new
  };

  return (
    <section className="py-24 md:py-12 mb-12 content-center">
      <h1 className="text-center mb-12">Customers frequently ask</h1>
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
    </section>
  );
}

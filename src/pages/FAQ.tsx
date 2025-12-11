import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";

import FAQSection, { type Faq } from "../components/FAQSection";

import "../App.css";

const topFaqs: Faq[] = [
  {
    question: "What is Faster?",
    answer: (
      <>
        Faster offers a flexible Line of Credit you can draw from, repay, and
        reuse up to your approved limit. It’s designed to help manage short-term
        cashflow, not as a long-term loan.
      </>
    ),
  },
  {
    question: "Do I need an account with Faster to use the service?",
    answer: (
      <>
        Yes. You’ll need a Faster account to apply for our Line of Credit and
        manage your repayments. Your account gives you secure access to your
        application, contract, transaction history and support.
      </>
    ),
  },
  {
    question: "Which banks are supported by Faster?",
    answer: (
      <>
        We support most major Australian banks and credit unions through our
        secure bank-verification partner. When you connect your bank, the
        connection is read-only — we cannot move your money.
      </>
    ),
  },
  {
    question: "How much can I borrow with Faster?",
    answer: (
      <>
        Eligible customers may be approved for a Line of Credit of up to
        $10,000, subject to our lending criteria and your financial situation.
      </>
    ),
  },
  {
    question: "Are there any fees for using Faster?",
    answer: (
      <>
        Yes — as a credit provider, our Line of Credit includes:
        <ul className="mt-3 space-y-1">
          <li>• a one-off establishment fee (20% of your approved limit)</li>
          <li>• interest at 47% p.a. on your outstanding balance</li>
          <li>• a $15 monthly fee</li>
          <li>• a $3.50 fee per repayment</li>
        </ul>
        <p className="my-3 text-xl">
          All fees are shown clearly before you sign your contract.
        </p>
        <button className="btn-primary mt-4 text-lg">See Our Fees</button>
      </>
    ),
  },
  {
    question: "Is Faster safe to use?",
    answer: (
      <>
        Yes. We use secure, industry-standard technology to protect your data,
        including encryption and strict access controls. We also comply with
        Australian credit and privacy laws and apply responsible-lending
        practices.
        <div className="mt-4">
          <button className="btn-primary mt-4 text-lg">See Our Security</button>
        </div>
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
        <div className="mt-4">
          <button className="btn-primary mt-4 text-lg">Contact Us</button>
        </div>
      </>
    ),
  },
];

const applicationFaqs: Faq[] = [
  {
    question: "Do I need an account with Faster to use the service?",
    answer: (
      <>
        Yes. You’ll need a Faster account to apply for the Line of Credit and
        manage your repayments. Your account gives you secure access to your
        application, contract, transaction history and support.
      </>
    ),
  },
  {
    question: "How do I apply for Faster?",
    answer: (
      <>
        You apply online by creating a Faster account, providing your details,
        securely connecting your bank, and submitting your application for
        assessment.
      </>
    ),
  },
  {
    question: "What information do I need to provide?",
    answer: (
      <>
        We will need basic personal details like your name, age, address, phone
        numbers, email address, bank account details and employment information.
        This information is required so we can verify your identity. We take
        every effort to protect your information by using encryption and secure
        connections.
      </>
    ),
  },
  {
    question: "How is my application assessed?",
    answer: (
      <>
        We assess your application against our lending criteria and the
        information you provide, including your income, expenses, and financial
        situation. Approval is not guaranteed and is always subject to your
        financial circumstances.
      </>
    ),
  },
  {
    question: "How long will it take for me to be approved?",
    answer: (
      <>
        We cannot guarantee your loan will be approved, and we cannot
        definitively advise how long it will take for us to process your
        application, as it depends on the number of applications we have in our
        system and whether we have all of the information we require.
        <br />
        <br />
        But our online loan application is quick and clear and should take less
        than 5 minutes for you to complete. We will then ask you to complete a
        few more things. If you complete these straight away, this will make it
        a lot easier for us to process your application.
      </>
    ),
  },
  {
    question: "Why was I declined?",
    answer: (
      <>
        You will be declined if:
        <ul className="mt-3 space-y-2">
          <li>
            • You provided false or misleading information or withheld relevant
            information
          </li>
          <li>• You're bankrupt</li>
          <li>• Your income cannot be confirmed as ongoing</li>
          <li>
            • Your current expenses or debt repayments are too high for the loan
            to be affordable
          </li>
          <li>• We could not successfully verify your personal information</li>
          <li>
            • Your contact information or reference information provided on your
            application is either invalid, incorrect or fraudulent
          </li>
          <li>• We were not able to verify your bank account information</li>
          <li>
            • The bank account provided does not have your income deposited into
            it
          </li>
          <li>• You do not hold permission for the bank account provided</li>
          <li>
            • Your bank account conduct, as shown on your bank statement, shows
            concerning behaviour or affordability issues
          </li>
          <li>
            • You have adverse or poor credit history, which indicates you are
            still experiencing financial difficulties
          </li>
          <li>• We were unable to locate or validate your employer</li>
          <li>
            • If there are any other concerns indicating that the loan may be
            unaffordable, that it may cause you financial difficulties, or that
            it is not suitable for your requirements
          </li>
        </ul>
      </>
    ),
  },
];

const creditFaqs: Faq[] = [
  {
    question: "What fees apply to my Faster Line of Credit?",
    answer: (
      <>
        Our standard fees are:
        <ul className="mt-3 space-y-1">
          <li>• a one-off establishment fee (20% of your approved limit)</li>
          <li>• interest at 47% p.a. on your outstanding balance</li>
          <li>• a $15 monthly fee</li>
          <li>• a $3.50 fee per repayment</li>
        </ul>
        <p className="my-3 text-xl">
          This does not include any additional charges that may apply if you
          miss a payment or fall behind on your account. All fees are shown
          clearly before you sign your contract.
        </p>
        <button className="btn-primary mt-4 text-lg">See Our Fees</button>
      </>
    ),
  },
  {
    question: "How is interest calculated?",
    answer: (
      <>
        Interest is charged daily on your outstanding balance, not your full
        credit limit, and applied at 47% per annum (about 3.92% per month).
      </>
    ),
  },
  {
    question: "How long does it take for a payment or drawdown to go through?",
    answer: (
      <>
        Once your Line of Credit is approved and you make a drawdown request,
        funds typically arrive the same day, depending on your bank’s processing
        times. Some transfers may take longer, especially outside business hours
        or on weekends.
      </>
    ),
  },
  {
    question: "What should I do if my payment doesn’t go through?",
    answer: (
      <>
        If a repayment fails, we’ll notify you. Common reasons include
        insufficient funds or a bank delay. Log into your Faster account to
        retry the payment, update your details, or contact us if you need
        support.
      </>
    ),
  },
  {
    question: "Can I get a refund for a Faster repayment?",
    answer: (
      <>
        Repayments made toward your Line of Credit generally can’t be
        “refunded”, but if a payment was taken in error or duplicated, please
        contact support immediately and we’ll review it for you.
      </>
    ),
  },
  {
    question: "Can I repay my balance early?",
    answer: (
      <>
        Yes, absolutely. We don’t charge any extra fees if you repay your loan
        early. Because interest is calculated on a daily basis on your
        outstanding balance, paying earlier may reduce the interest you pay.
      </>
    ),
  },
  {
    question: "Are there extra charges if I miss a payment?",
    answer: (
      <>
        Additional fees or charges may apply if you miss a payment or fall
        behind on your account. Any such fees are set out in your credit
        contract and fee schedule.
      </>
    ),
  },
];

const securityFaqs: Faq[] = [
  {
    question: "Is Faster safe to use?",
    answer: (
      <>
        Yes — we use secure, industry-standard technology to protect your data,
        and all information is encrypted in transit and at rest. We also comply
        with Australian credit laws, privacy requirements, and
        responsible-lending regulations.
        <div className="mt-4">
          <button className="btn-primary text-lg">See Our Security</button>
        </div>
      </>
    ),
  },
  {
    question: "How is my personal and financial information used?",
    answer: (
      <>
        We use your information to assess your application, manage your Line of
        Credit, meet our legal obligations, and help keep your account secure.
        Full details are set out in our{" "}
        <a href="privacy-policy" className="hover:underline">
          Privacy Policy
        </a>{" "}
        and your credit contract.
      </>
    ),
  },
  {
    question: "Can Faster move money from my bank account?",
    answer: (
      <>
        When you connect your bank, the connection is read-only — we cannot move
        your money. Any repayments are made using the payment methods and
        authorities you agree to in your contract and account setup.
      </>
    ),
  },
  {
    question: "How will Faster contact me about security or account issues?",
    answer: (
      <>
        We’ll only contact you through official Faster channels. We’ll never ask
        you for your password or full card details over email or SMS.
      </>
    ),
  },
  {
    question: "Do you store my online banking password?",
    answer: (
      <>
        No. When you connect your bank, that process is handled by an accredited
        third-party provider. We don’t see or store your online banking
        password.
      </>
    ),
  },
];

type CategoryKey = "top" | "application" | "credit" | "security";

const categories: {
  key: CategoryKey;
  label: string;
  faqs: Faq[];
}[] = [
  {
    key: "top",
    label: "Top questions",
    faqs: topFaqs,
  },
  {
    key: "application",
    label: "Application and approval process",
    faqs: applicationFaqs,
  },
  {
    key: "credit",
    label: "About your Faster credit",
    faqs: creditFaqs,
  },
  {
    key: "security",
    label: "Security and privacy",
    faqs: securityFaqs,
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("top");

  const currentCategory = categories.find((c) => c.key === activeCategory)!;

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg-primary px-12 py-6 mx-auto">
        <NavBar />
      </header>
      <div className="w-full lg:px-40 sm:px-12 mx-auto">
        {/* Hero */}
        <section className="bg-secondary rounded-2xl px-8 py-12 sm:px-16 md:py-24 mb-12 gap-8 content-center text-center">
          <Pill text="Support" color="bg-primary" />
          <h1 className="mt-12 my-8 text-6xl text-bg-primary">
            Frequently Asked Questions
          </h1>
          <p className="text-2xl font-medium my-8 text-bg-primary">
            Need support? We're here to help.
          </p>
        </section>

        {/* Menu */}
        <section className="grid xl:grid-cols-4 lg:grid-cols-2 px-8 sm:px-16 mb-12 gap-4 item-stretch content-center text-center">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className="bg-bg-secondary hover:bg-primary/20 rounded-2xl py-12 px-8 md:px-12 my-2 content-center transition"
            >
              <p className="text-3xl font-bold">{category.label}</p>
            </button>
          ))}
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-12 mb-12 content-center">
          <h1 className="text-center mb-12 text-5xl font-bold">
            {currentCategory.label}
          </h1>
          <FAQSection faqs={currentCategory.faqs} />
        </section>

        <hr className="border-t border-[#D4D6E5] lg:-mx-40 sm:-mx-12" />

        {/* Support */}
        <section className="py-12 mb-12 content-center text-center">
          <div className="mx-auto bg-bg-secondary rounded-2xl grid place-items-center h-32 w-32 text-text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-16"
            >
              <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
              <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
            </svg>
          </div>

          <h1 className="mt-12 text-6xl">Still have unanswered questions?</h1>
          <p className="text-3xl font-medium mt-8">
            Email us anytime at{" "}
            <a
              href="mailto:support@faster.com.au"
              className="text-primary font-bold underline hover:text-secondary"
            >
              support@faster.com.au.
            </a>
          </p>

          <button className="mt-12 btn-primary">Contact Us</button>
        </section>
      </div>
      <Footer />
    </>
  );
}

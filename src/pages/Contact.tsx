import { useState } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import FAQSection from "../components/FAQSection";

import "../App.css";

const homeFaqs = [
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
          <li>• a one-off drawdown fee (20% of your approved limit)</li>
          <li>• interest at 47% p.a. on your outstanding balance</li>
          <li>• a $15 monthly fee</li>
          <li>• a $3.50 fee per repayment</li>
        </ul>
        <p className="my-3 text-xl">
          All fees are shown clearly before you sign your contract.
        </p>
        <button className="btn-primary mt-4 text-lg">
          <Link to="/fees" className="font-medium text-bg-primary">
            See Our Fees
          </Link>
        </button>
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
          <button className="btn-primary mt-4 text-lg">
            <Link to="/security" className="font-medium text-bg-primary">
              See Our Security
            </Link>
          </button>
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
          <button className="btn-primary mt-4 text-lg">
            <Link to="/contact" className="font-medium text-bg-primary">
              Contact Us
            </Link>
          </button>
        </div>
      </>
    ),
  },
];

export default function Contact() {
  return (
    <>
      <NavBar />

      <div className="w-full lg:px-40 sm:px-12 mx-auto">
        {/* Hero */}
        <section className="lg:-mx-40 sm:-mx-12 mx-auto mb-12 px-8 sm:px-16 py-24 pt-32 lg:pt-40 gap-8 content-center bg-gradient-to-b from-secondary to-primary">
          <div className="text-center mb-16">
            <Pill text="Get in touch" color="bg-primary" />
            <h1 className="mt-12 my-8 text-6xl text-bg-primary">
              We're here to help
            </h1>
            <p className="text-2xl font-medium my-8 text-bg-primary">
              Whether you're looking for more information about our fees or need
              support with your account, we're just a message away.
            </p>
          </div>

          <div className="max-w-4xl grid lg:grid-cols-2 gap-8 mx-auto items-stretch">
            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="bg-bg-primary rounded-xl grid place-items-center size-14 mb-6 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </div>
              <h2>Send us an email</h2>
              <p>Reach out to our support email.</p>
              <div className="mt-8">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 inline mr-2 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <a
                  href="mailto:support@faster.com.au"
                  className="text-xl text-primary hover:underline"
                >
                  support@faster.com.au
                </a>
              </div>
            </div>

            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="bg-bg-primary rounded-xl grid place-items-center size-14 mb-6 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2>Chat with us live</h2>
              <p>Speak to our support team directly.</p>
              <div className="mt-8">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 inline mr-2 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <a href="" className="text-xl text-primary hover:underline">
                  Start chat
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-12 mb-12 content-center text-center">
          <h1 className="mb-12">Customers frequently ask</h1>
          <FAQSection faqs={homeFaqs} />
          <button className="mt-12 btn-primary">
            <Link to="/faq" className="font-medium text-xl text-bg-primary">
              View More
            </Link>
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
}

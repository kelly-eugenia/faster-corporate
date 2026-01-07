import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import SEO from "../components/SEO";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import Reviews from "../components/Reviews";
import CTA from "../components/CTA";
import FAQSection from "../components/FAQSection";

import HeroPhoto from "../assets/clear-fees.webp";
import CoinsPhoto from "../assets/coins.png";

import "../App.css";

const feesFaqs = [
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
    question: "What fees apply to my Faster Line of Credit?",
    answer: (
      <>
        Our standard fees are:
        <ul className="mt-3 space-y-1">
          <li>• a one-off drawdown fee (20% of your approved limit)</li>
          <li>• interest at 47% p.a. on your outstanding balance</li>
        </ul>
        <p className="my-3 text-base md:text-xl">
          This does not include any additional charges that may apply, and if
          you miss a payment or fall behind on your account. All fees are shown
          clearly before you sign your contract.
        </p>
        <Link
          to="/fees"
          className="btn btn-primary text-base md:text-lg mt-4 font-medium"
        >
          See Our Fees
        </Link>
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
    question: "Can I get a refund for a Faster repayment?",
    answer: (
      <>
        Repayments made toward your Line of Credit can’t be “refunded,” but if a
        payment was taken in error or duplicated, please contact support
        immediately and we’ll review it for you.
      </>
    ),
  },
];

export default function Fees() {
  return (
    <>
      <SEO
        title="Our Fees — Clear, Simple, and Upfront | Faster.com.au"
        description="View Faster’s fees, interest rates, and charges. Everything is explained clearly so you know exactly what to expect before applying."
      />

      <NavBar />

      <div className="w-full mx-auto">
        {/* Hero */}
        <section className="pt-16 md:pt-20 lg:pt-24 px-8 sm:px-12 lg:px-16 xl:px-40 bg-gradient-to-bl from-secondary to-primary">
          <div className="xl:max-w-[1920px] mx-auto">
            <div className="grid gap-4 lg:gap-32 lg:grid-cols-2 items-center content-center text-center lg:text-left">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  delay: 0.05,
                }}
                className="pt-12 sm:pt-16 md:pt-16 py-0 lg:py-16 lg:text-left sm:text-center"
              >
                <Pill text="Our fees" color="bg-primary" />
                <h1 className="mt-8 sm:mt-8 lg:mt-12 my-4 md:my-8 text-4xl md:text-5xl lg:text-6xl text-bg-primary">
                  Clear, simple, and upfront.
                </h1>
                <p className="my-8 px-4 md:px-0 text-bg-primary text-lg md:text-2xl font-medium">
                  Every cost of your Faster Line of Credit is set out before you
                  borrow, so you always know what you’ll pay and why.
                </p>
                <p className="text-base px-4 md:px-0 md:text-lg text-bg-primary">
                  Our fees are straightforward and easy to understand. You’ll
                  see a full breakdown in your credit contract before you decide
                  to go ahead.
                </p>
                <div className="mt-6 lg:mb-6">
                  <Link
                    to="/fees#how-fees-work"
                    className="btn btn-primary-light text-base md:text-lg font-medium"
                  >
                    See How Our Fees Work
                  </Link>
                </div>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  delay: 0.05,
                }}
                className="lg:pt-24 rounded-2xl flex items-end justify-center h-full"
              >
                <img
                  className="block w-auto h-full scale-[1.05] lg:scale-[1.1] origin-bottom"
                  src={HeroPhoto}
                  alt="Our Fees"
                />{" "}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trustpilot */}
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-12 bg-bg-secondary text-xl text-center text-bg-primary">
          <div className="xl:max-w-[1920px] mx-auto">
            <Pill text="What the people say" color="bg-primary" />
            <Reviews />
          </div>
        </section>

        {/* Why people choose us */}
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-12 mb-12 content-center">
          <div className="rounded-2xl pb-0 sm:pb-4 mb-8 content-center text-center">
            <h1 className="mt-8 lg:mt-12 my-2 text-4xl sm:text-5xl lg:text-6xl">
              Why people choose Faster’s fee structure
            </h1>
            <p className="text-lg md:text-2xl mt-4 md:mt-8">
              We’ve designed our fees to be transparent and predictable, so you
              can plan ahead and stay in control.
            </p>
          </div>

          <div className="lg:max-w-6xl xl:max-w-[1440px] mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl">One clear drawdown fee</h2>
              <p>
                A single upfront fee when your Line of Credit is opened — not
                every time you draw down.
              </p>
            </div>
            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                  <path
                    fillRule="evenodd"
                    d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl">
                Only pay interest on what you actually use
              </h2>
              <p>
                Interest is charged on your outstanding balance, not your full
                credit limit.
              </p>
            </div>
          </div>
        </section>

        {/* Fee structure */}
        <section
          id="how-fees-work"
          className="bg-gradient-to-bl from-primary to-secondary px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-16 mb-12 gap-8 content-center text-center"
        >
          <div className="xl:max-w-[1920px] mx-auto">
            {/* In practice */}
            <section className="grid grid-cols-1 lg:grid-cols-2 mt-6 md:mt-8 my-16 md:my-20 gap-2 sm:gap-10 content-center items-stretch">
              <div className=" text-center lg:text-left p-6 sm:px-16 sm:py-0 rounded-2xl content-center">
                <Pill text="Example in practice" color="bg-primary" />
                <h1 className="mt-8 lg:mt-12 my-6 md:my-8 text-4xl sm:text-6xl text-bg-primary">
                  What does this look like on a{" "}
                  <span className="text-bg-secondary font-[800]">$450 </span>
                  limit?
                </h1>
                <p className="text-bg-primary text-lg md:text-2xl">
                  You only pay for credit while you're using it — and you always
                  see the cost upfront.
                </p>
              </div>

              <div className="bg-bg-primary rounded-2xl text-left px-8 md:px-12 py-10 md:py-12">
                <p className="font-medium text-lg md:text-xl">
                  Using $450 for one month — Real example, not a quote
                </p>

                <ul className=" my-6 md:my-8 list-inside text-base md:text-lg text-text-primary">
                  <li className="my-2 md:my-4 font-bold text-xl md:text-2xl relative pl-8 md:pl-10 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                    <span className="text-primary mr-2 font-medium">
                      One-time drawdown fee:
                    </span>
                    $90
                    <span className="ml-2 text-base md:text-lg font-medium">
                      (20% of $450, charged once at the start)
                    </span>
                  </li>
                  <li className="my-2 md:my-4 font-bold text-xl md:text-2xl relative pl-8 md:pl-10 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                    <span className="text-primary mr-2 font-medium">
                      Interest for month one:
                    </span>
                    $17.64
                    <span className="ml-2 text-base md:text-lg font-medium">
                      (3.92% of $450)
                    </span>
                  </li>
                </ul>

                <p className="my-6 md:my-8 font-bold text-xl md:text-2xl">
                  Total charges for the first month:
                  <span className="text-primary ml-2 font-bold">$107.64</span>
                  <span className="text-base md:text-lg font-medium">
                    <br />
                    Repaying sooner reduces interest. Interest does not
                    compound.
                  </span>
                </p>

                <div className="mt-8 bg-bg-secondary/50 rounded-xl p-6">
                  <p className=" text-text-primary text-sm font-medium">
                    Important: This is an example only and does not include any
                    additional charges that may apply, and if you miss a payment
                    or fall behind on your account.
                  </p>

                  <div className="mt-8 grid sm:grid-cols-2  gap-4">
                    <p className="text-sm flex items-start leading-snug font-medium text-muted-primary">
                      <span className="mr-3 text-primary font-bold">✓</span>
                      Interest applies only while a balance is outstanding
                    </p>

                    <p className="text-sm flex items-start leading-snug font-medium text-muted-primary">
                      <span className="mr-3 text-primary font-bold">✓</span>
                      Costs vary based on repayment timing
                    </p>

                    <p className="text-sm flex items-start leading-snug font-medium text-muted-primary">
                      <span className="mr-3 text-primary font-bold">✓</span>
                      Early repayment reduces total cost
                    </p>

                    <p className="text-sm flex items-start leading-snug font-medium text-muted-primary">
                      <span className="mr-3 text-primary font-bold">✓</span>
                      Credit subject to suitability
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-t border-bg-secondary/40 -mx-8 sm:-mx-12 lg:-mx-16 xl:-mx-[1920px]" />

            {/* How it works */}
            <div className="w-full lg:max-w-[80%] mx-auto my-16 md:my-20 mb-8 md:mb-12 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-bg-primary">
                How our fees work
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mt-8 lg:mt-12 items-stretch">
                <div className="flex flex-col justify-between lg:px-12 lg:py-12 sm:px-8 sm:py-10 p-8 bg-bg-secondary rounded-2xl">
                  <div>
                    <Pill text="One-time drawdown fee" color="bg-primary" />
                    <h1 className="mt-4 lg:mt-6 lg:text-3xl text-2xl text-text-primary">
                      Charged once, when you first access your credit
                    </h1>
                    <p className="lg:text-xl text-lg mt-2 sm:mt-4 text-muted-primary">
                      No ongoing fee if you don't draw.
                    </p>
                  </div>
                  <p className="lg:text-lg text-base mt-6 sm:mt-8 font-bold text-primary">
                    20%
                  </p>
                </div>
                <div className="flex flex-col justify-between lg:px-12 lg:py-12 sm:px-8 sm:py-10 p-8 bg-bg-secondary rounded-2xl">
                  <div>
                    <Pill text="Interest while in use" color="bg-primary" />
                    <h1 className="mt-4 lg:mt-6 lg:text-3xl text-2xl text-text-primary">
                      Only applies to the amount you've drawn, for the days it's
                      outstanding
                    </h1>
                    <p className="md:text-xl text-lg mt-2 sm:mt-4 text-muted-primary">
                      Calculated daily. Repaying sooner reduces interest.
                    </p>
                  </div>

                  <p className="lg:text-lg text-base mt-6 sm:mt-8 font-bold text-primary">
                    47% p.a.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How we think about fees */}
        <div className="xl:max-w-[1920px] mx-auto">
          <section className="grid grid-cols-1 lg:grid-cols-2 bg-bg-secondary rounded-2xl mx-8 sm:mx-12 lg:mx-32 xl:mx-40 px-8 sm:px-16 mt-16 md:mt-24 mb-12 gap-8 sm:gap-16">
            <div className="lg:text-left text-center content-center py-12 lg:py-16 pb-0">
              <Pill text="Our approach to fees" color="bg-primary" />
              <h1 className="my-6 md:my-8 text-4xl sm:text-5xl lg:text-6xl">
                We’re serious about
                <span className="text-primary font-[800]">
                  {" "}
                  fair and responsible{" "}
                </span>{" "}
                fees
              </h1>

              <ul className="list-inside text-base md:text-lg font-medium text-text-primary">
                <li className="my-4 relative pl-6 lg:pl-8 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                  Fees and interest are set within Australian regulatory limits
                  and clearly disclosed in your credit contract — no hidden
                  charges.
                </li>
                <li className="my-4 relative pl-6 lg:pl-8 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                  Each application is assessed against our lending criteria and
                  your financial situation as part of responsible lending.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl -mt-12 md:-mt-24 lg:-mt-0 flex items-bottom justify-center">
              <img
                src={CoinsPhoto}
                alt="Illustration of coins"
                className="block w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          {/* Support */}
          <section className="px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-12 gap-8 mb-12 content-center text-center">
            <div className="mx-auto bg-bg-secondary rounded-2xl grid place-items-center size-24 md:size-32 text-text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-12 md:size-16"
              >
                <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
              </svg>
            </div>

            <h1 className="mt-8 md:mt-12 text-4xl sm:text-5xl lg:text-6xl">
              Need support?
            </h1>
            <p className="text-lg md:text-2xl mt-4 md:mt-8">
              Questions about fees, interest, or how our costs work? We’re here
              to help.
            </p>
            <p className="text-xl md:text-3xl font-medium mt-4 md:mt-8">
              Email us anytime at{" "}
              <a
                href="mailto:support@faster.com.au"
                className="text-primary font-bold underline hover:text-secondary"
              >
                support@faster.com.au.
              </a>
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to="/contact"
                className="btn btn-primary text-base md:text-lg font-medium"
              >
                Contact Us
              </Link>
            </div>
          </section>

          {/* CTA */}
          <CTA />

          {/* FAQ */}
          <section className="px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-12 mb-12 content-center">
            <h1 className="mb-8 md:mb-12 text-4xl sm:text-5xl lg:text-6xl text-center">
              Customers frequently ask
            </h1>
            <FAQSection faqs={feesFaqs} />
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

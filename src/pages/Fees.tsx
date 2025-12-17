import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import CTA from "../components/CTA";
import FAQSection from "../components/FAQSection";

import HeroPhoto from "../assets/clear-fees.png";
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
          <li>• a $15 monthly fee</li>
          <li>• a $3.50 fee per repayment</li>
        </ul>
        <p className="my-3 text-xl">
          This does not include any additional charges that may apply if you
          miss a payment or fall behind on your account. All fees are shown
          clearly before you sign your contract.
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
      <NavBar />

      <div className="w-full lg:px-40 sm:px-12 mx-auto">
        {/* Hero */}
        <section className="lg:-mx-40 sm:-mx-12 mx-auto px-6 sm:px-12 lg:px-40 pt-8 lg:pt-12 bg-gradient-to-bl from-secondary to-primary">
          <div className="pt-24 grid gap-32 lg:grid-cols-2 items-center">
            {/* Left */}
            <div className="pb-16 lg:text-left sm:text-center">
              <Pill text="Our fees" color="bg-primary" />
              <h1 className="my-8 text-6xl text-bg-primary">
                Clear, simple and upfront.
              </h1>
              <p className="text-2xl font-medium my-8 text-bg-primary">
                Every cost of your Faster Line of Credit is set out before you
                borrow, so you always know what you’ll pay and why.
              </p>
              <p className="text-bg-primary">
                Our fees are straightforward and easy to understand. You’ll see
                a full breakdown in your credit contract before you decide to go
                ahead.
              </p>
              <button className="btn-primary-light mt-12">
                <Link
                  to="/fees#how-fees-work"
                  className="font-medium text-bg-primary"
                >
                  See How Our Fees Work
                </Link>
              </button>
            </div>

            {/* Right */}
            <div className="rounded-2xl flex items-end justify-center">
              <img
                className="block w-full h-auto rounded-2xl"
                src={HeroPhoto}
                alt="Our Fees"
              />{" "}
            </div>
          </div>
        </section>

        {/* Trustpilot */}
        <section className="lg:-mx-40 sm:-mx-12 mx-auto sm:px-12 lg:px-40 py-12 bg-bg-secondary py-8text-xl text-center text-bg-primary">
          <Pill text="What the people say" color="bg-primary" />
          <div
            className="trustpilot-widget mt-8"
            data-locale="en-US"
            data-template-id="54ad5defc6454f065c28af8b"
            data-businessunit-id="65b19266fd020b5cdce866e7"
            data-style-height="240px"
            data-style-width="100%"
            data-token="a19c9066-5a27-4aed-b43e-6129e09e819c"
            data-stars="1,2,3,4,5"
            data-review-languages="en"
          >
            <a
              href="https://www.trustpilot.com/review/cashfaster.com.au"
              target="_blank"
              rel="noopener"
            >
              Trustpilot
            </a>
          </div>
        </section>

        {/* Why people choose us */}
        <section className="py-40 md:py-32 mb-12 content-center">
          <div className="text-center mb-12">
            <h1 className="mt-8 text-6xl">
              Why people choose Faster’s fee structure
            </h1>
            <p className="text-2xl mt-8">
              We’ve designed our fees to be transparent and predictable, so you
              can plan ahead and stay in control.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
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
              <h2>One clear drawdown fee</h2>
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
              <h2>Only pay interest on what you actually use</h2>
              <p>
                Interest is charged on your outstanding balance, not your full
                credit limit.
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
                  <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
                </svg>
              </div>
              <h2>Simple ongoing costs</h2>
              <p>
                A fixed monthly fee and a small fee per repayment, so you know
                what to expect.
              </p>
            </div>
          </div>
        </section>

        {/* Fee structure */}
        <section
          id="how-fees-work"
          className="bg-gradient-to-bl from-primary to-secondary lg:-mx-40 sm:-mx-12 lg:px-40 sm:px-12 py-24 md:py-16 mb-12 gap-8 content-center text-center"
        >
          <Pill text="How our fees work" color="bg-primary" />

          {/* Stat style */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-12 mb-24 items-stretch text-center">
            <div className="lg:px-12 lg:py-16 sm:px-8 sm:py-12 bg-bg-primary rounded-2xl content-center">
              <h1 className="lg:text-8xl sm:text-7xl text-primary font-[1000]">
                20%
              </h1>
              <h2 className="text-secondary lg:text-4xl sm:text-3xl mt-1">
                Drawdown fee
              </h2>
              <p className="text-xl mt-6">
                20% of your credit limit, charged once at the start.
              </p>
            </div>
            <div className="lg:px-12 lg:py-16 sm:px-8 sm:py-12 bg-bg-primary rounded-2xl content-center">
              <h1 className="lg:text-8xl sm:text-7xl text-primary font-[1000]">
                47%{" "}
              </h1>
              <h2 className="text-secondary lg:text-4xl sm:text-3xl mt-1">
                p.a. Interest rate
              </h2>
              <p className="text-xl mt-6">
                47% per annum (approx. 3.92% per month) calculated daily on your
                balance.
              </p>
            </div>
          </div>

          {/* In practice */}
          <section className="grid lg:grid-cols-2 gap-8 mb-12 items-stretch">
            <div className="rounded-2xl p-12 content-center text-left">
              <Pill text="Example in practice" color="bg-primary" />
              <h1 className="my-12 text-bg-primary">
                What does this look like on a{" "}
                <span className="text-bg-secondary font-[800]">$450 </span>
                limit?
              </h1>
              <p className="text-bg-primary text-2xl">
                Here’s an example only — your actual costs will depend on how
                much you draw, how quickly you repay, and may be subject to
                further fees.
              </p>
            </div>

            <div className="bg-bg-secondary rounded-2xl text-left px-12 py-24 md:py-16">
              <p className="font-medium text-xl mb-8">
                For a customer with a $450 credit limit who uses the full amount
                for one month:
              </p>

              <ul className="list-inside text-lg text-text-primary">
                <li className="my-4 font-bold text-2xl relative pl-10 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                  <span className="text-primary mr-4 font-medium">
                    Drawdown fee:
                  </span>
                  $90
                  <span className="ml-2 text-lg font-medium">
                    (20% of $450, charged once at the start)
                  </span>
                </li>
                <li className="my-4 font-bold text-2xl relative pl-10 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                  <span className="text-primary mr-4 font-medium">
                    Interest for month one:
                  </span>
                  $17.64
                  <span className="ml-2 text-lg font-medium">
                    (3.92% of $450)
                  </span>
                </li>
                <li className="my-4 font-bold text-2xl relative pl-10 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                  <span className="text-primary mr-4 font-medium">
                    Monthly fees:
                  </span>
                  $15
                </li>
                <li className="my-4 font-bold text-2xl relative pl-10 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                  <span className="text-primary mr-4 font-medium">
                    Repayment fees:
                  </span>
                  $14
                  <span className="ml-2 text-lg font-medium">
                    (4 weekly repayments × $3.50)
                  </span>
                </li>
              </ul>

              <p className="my-12 mb-4 font-bold text-2xl">
                Total charges for the first month:
                <span className="text-primary ml-4 font-bold">$136.64</span>
              </p>

              <p className="mt-12 text-muted-primary text-sm font-medium">
                Important: This is an example only and does not include any
                additional charges that may apply if you miss a payment or fall
                behind on your account.
              </p>
            </div>
          </section>
        </section>

        {/* How we think about fees */}
        <section className="grid lg:grid-cols-2 bg-bg-secondary rounded-2xl px-8 sm:px-16 mt-24 mb-12 gap-16 content-center ">
          <div className="lg:text-left sm:text-center py-24 md:py-16 content-center">
            <Pill text="Our approach to fees" color="bg-primary" />
            <h1 className="mt-12 my-8 text-6xl">
              We’re serious about
              <span className="text-primary font-[800]">
                {" "}
                fair and responsible{" "}
              </span>{" "}
              fees
            </h1>

            <ul className="list-inside text-lg font-medium text-text-primary">
              <li className="my-4 relative pl-8 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                Fees and interest are set within Australian regulatory limits
                and clearly disclosed in your credit contract — no hidden
                charges.
              </li>
              <li className="my-4 relative pl-8 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                Each application is assessed against our lending criteria and
                your financial situation as part of responsible lending.
              </li>
            </ul>
          </div>

          <div className="px-8">
            <img
              className="bottom-0 object-cover h-full rounded-2xl"
              src={CoinsPhoto}
              alt="Illustration of coins"
            />
          </div>
        </section>

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

          <h1 className="mt-12 text-6xl">Need support?</h1>
          <p className="text-2xl mt-8">
            Questions about fees, interest, or how our costs work? We’re here to
            help.
          </p>
          <p className="text-3xl font-medium mt-8">
            Email us anytime at{" "}
            <a
              href="mailto:support@faster.com.au"
              className="text-primary font-bold underline hover:text-secondary"
            >
              support@faster.com.au.
            </a>
          </p>

          <button className="mt-12 btn-primary">
            <Link to="/contact" className="font-medium text-bg-primary">
              Contact Us
            </Link>
          </button>
        </section>

        {/* CTA */}
        <CTA />

        {/* FAQ */}
        <section className="py-24 md:py-12 mb-12 content-center">
          <h1 className="text-center mb-12">Customers frequently ask</h1>
          <FAQSection faqs={feesFaqs} />
        </section>
      </div>
      <Footer />
    </>
  );
}

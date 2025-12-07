import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";

import Photo1 from "../assets/person-smiling.png";
import Photo2 from "../assets/man-smiling.png";
import Photo3 from "../assets/secure.jpeg";

import "../App.css";

export default function Fees() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-bg-primary px-12 py-6 mx-auto">
        <NavBar />
      </header>
      <div className="w-full lg:px-40 sm:px-12 mx-auto">
        {/* Hero */}
        <section className="grid lg:grid-cols-2 bg-gradient-to-br from-bg-secondary to-[#709FFF] rounded-2xl px-8 sm:px-16 mb-12 gap-8 content-center lg:text-left sm:text-center">
          <div className="pt-8">
            <img
              className="bottom-0 object-cover h-full rounded-3xl"
              src={Photo2}
              alt="Smiling customer enjoying simple, secure banking"
            />
          </div>

          <div className="py-24 md:py-16">
            <Pill text="Our fees" color="bg-primary" />
            <h1 className="my-8 text-6xl">Clear, simple and upfront.</h1>
            <p className="text-2xl font-medium my-8">
              We don’t believe in surprises. Every cost of your Faster Line of
              Credit is set out before you borrow, so you always know what
              you’ll pay and why.
            </p>
            <p>
              With Faster, you’re paying for access to a flexible Line of Credit
              — not for confusing extras. Our fees are straightforward, easy to
              understand, and the same for every approved customer on the same
              limit. You’ll see a full breakdown in your credit contract before
              you decide to go ahead.
            </p>
            <button className="mt-12 btn-primary">See How Our Fees Work</button>
          </div>
        </section>

        {/* Why people choose us */}
        <section className="py-24 md:py-12 mb-12 content-center">
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
              <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-4 text-text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                    clipRule="evenodd"
                  />
                  <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                </svg>
              </div>
              <h2>One clear establishment fee</h2>
              <p>
                A single upfront fee when your Line of Credit is opened — not
                every time you draw down.
              </p>
            </div>
            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-4 text-text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
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
              <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-4 text-text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
                    clipRule="evenodd"
                  />
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
        <section className="bg-bg-secondary lg:-mx-40 sm:-mx-12 lg:px-40 sm:px-12 py-24 md:py-16 mb-12 gap-8 content-center text-center">
          <Pill text="How our fees work" color="bg-primary" />

          {/* Stat style */}
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8 mt-8 mb-12 items-stretch text-left">
            <div className="p-8 content-top">
              <h1 className="text-6xl text-primary font-[1000]">20%</h1>
              <h2 className="text-secondary mt-2">Establishment fee</h2>
              <p className="text-2xl mt-4">
                20% of your approved credit limit (e.g. $90 on a $450 limit),
                charged once when your account is opened.
              </p>
            </div>
            <div className="p-8 content-top">
              <h1 className="text-6xl text-primary font-[1000]">
                47%{" "}
                <span className="text-4xl text-primary font-[1000]">p.a.</span>
              </h1>
              <h2 className="text-secondary mt-2">Interest rate</h2>
              <p className="text-2xl mt-4">
                47% per annum (approximately 3.92% per month) on your
                outstanding balance.
              </p>
            </div>
            <div className="p-8 content-top">
              <h1 className="text-6xl text-primary font-[1000]">
                $15{" "}
                <span className="text-4xl text-primary font-[1000]">
                  / month
                </span>
              </h1>
              <h2 className="text-secondary mt-2">Monthly fee</h2>
              <p className="text-2xl mt-4">
                A flat monthly maintenance fee for keeping your Line of Credit
                open.
              </p>
            </div>
            <div className="p-8 content-top">
              <h1 className="text-6xl text-primary font-[1000]">$3.50</h1>
              <h2 className="text-secondary mt-2">Per repayment</h2>
              <p className="text-2xl mt-4">
                A $3.50 payment fee each time a repayment is processed.
              </p>
            </div>
          </div>

          {/* In practice */}
          <section className="grid lg:grid-cols-2 gap-8 mb-12 items-stretch">
            <div className="bg-secondary rounded-2xl p-12 content-center text-left">
              <Pill text="Example in practice" color="bg-primary" />
              <h1 className="my-12 text-bg-primary">
                What does this look like on a{" "}
                <span className="text-bg-secondary font-[800]">$450 </span>
                limit?
              </h1>
              <p className="text-bg-primary text-2xl">
                Here’s an example to help you see how the fees can add up. This
                is a guide only — your actual costs will depend on how much you
                draw and how quickly you repay.
              </p>
            </div>

            <div className="bg-bg-primary rounded-2xl text-left px-12 py-24 md:py-16">
              <p className="font-medium text-xl mb-8">
                For a customer with a $450 credit limit who uses the full amount
                for one month:
              </p>

              <ul className="list-inside text-lg text-text-primary">
                <li className="my-4 font-bold text-2xl relative pl-10 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                  <span className="text-primary mr-4 font-medium">
                    Establishment fee:
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
              <p className="font-medium text-lg">
                The representative APR is approximately
                <span className="text-primary font-bold"> 221.36%</span>, which
                reflects all charges annualised over an 8-week period.
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
        <section className="grid lg:grid-cols-2 bg-gradient-to-br from-bg-secondary to-[#709FFF] rounded-2xl px-8 sm:px-16 mb-12 gap-8 content-center ">
          <div className="lg:text-left sm:text-center py-24 md:py-16">
            <Pill text="How we think about fees" color="bg-primary" />
            <h1 className="mt-12 my-8 text-6xl">
              We’re serious about
              <span className="text-primary font-[800]">
                {" "}
                fair and responsible{" "}
              </span>{" "}
              fees
            </h1>
            <p className="font-bold text-xl mb-8">
              Faster.com.au follows Australian credit laws, including the
              National Consumer Credit Protection Act.
            </p>

            <ul className="list-inside text-lg font-medium text-text-primary">
              <li className="my-4 relative pl-8 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                Our fees and interest are set within regulatory limits and are
                fully disclosed in your credit contract.
              </li>
              <li className="my-4 relative pl-8 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                We assess every application carefully and will only provide
                credit where it’s suitable for your circumstances.
              </li>
              <li className="my-4 relative pl-8 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                No hidden or undisclosed charges.
              </li>
              <li className="my-4 relative pl-8 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                Clear explanation of every fee before you sign.
              </li>
              <li className="my-4 relative pl-8 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                Support available if you’re worried about making a repayment.
              </li>
              <li className="my-4 relative pl-8 list-none before:absolute before:left-0 before:content-['▶'] before:text-primary">
                We lend responsibly. Approval is subject to our lending criteria
                and your financial circumstances.
              </li>
            </ul>
          </div>

          <div className="pt-8 px-8">
            <img
              className="bottom-0 object-cover h-full rounded-3xl"
              src={Photo1}
              alt="Smiling customer enjoying simple, secure banking"
            />
          </div>
        </section>

        {/* Support */}
        <section className="py-12 mb-12 content-center text-center">
          <div>
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
              If you’re unsure about any fee, interest charge, or how our costs
              work, get in touch before you borrow. <br /> We’re here to explain
              everything in plain language so you can decide what’s right for
              you.
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
          </div>
        </section>

        {/* CTA */}
        <CTA />

        {/* FAQ */}
        <FAQ />
      </div>
      <Footer />
    </>
  );
}

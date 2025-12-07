import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import LoanCalculator from "../components/LoanCalculator";
import CTA from "../components/CTA";

import Photo1 from "../assets/person-smiling.png";
import Photo2 from "../assets/man-smiling.png";
import "../App.css";

const xlLinkClass =
  "relative text-6xl font-[800] text-primary \
    after:content-[''] after:absolute after:right-0 after:-bottom-0.5 \
    after:h-[6px] after:w-0 after:bg-primary \
    after:transition-all after:duration-300 \
    hover:after:w-full hover:after:left-0";

const smLinkClass =
  "relative text-xl font-medium text-bg-primary \
    after:content-[''] after:absolute after:right-0 after:-bottom-2 \
    after:h-[3px] after:w-0 after:bg-bg-primary \
    after:transition-all after:duration-300 \
    hover:after:w-full hover:after:left-0";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-bg-primary px-12 py-6 mx-auto">
        <NavBar />
      </header>
      <div className="w-full lg:px-40 sm:px-12 mx-auto">
        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left */}
          <div className="bg-gradient-to-br from-bg-secondary to-[#709FFF] rounded-2xl px-8 py-24 sm:px-16 md:py-32 content-center text-center">
            <Pill text="Fast credit, made simple." color="bg-primary" />
            <h1 className="mt-12 my-8 text-6xl">
              Access to credit when you need it most
            </h1>
            <p>
              When traditional banks say no, <strong>Faster says yes</strong>.
              <br />
              Get a line of credit up to $10,000 with clear terms, no surprises,
              and decisions in minutes.
            </p>
            <button className="mt-16 btn-primary w-48 ">Apply Now</button>
          </div>

          {/* Right */}
          <div className="bg-primary rounded-2xl relative overflow-hidden flex items-center justify-center px-8 pt-8">
            {/* Floating chips */}
            <div className="absolute top-32 left-32">
              <Pill text="Fast" color="bg-primary" />
            </div>
            <div className="absolute bottom-32 left-20">
              <Pill text="Simple" color="bg-primary" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-10">
              <Pill text="Secure" color="bg-primary" />
            </div>

            {/* Image */}
            <img
              className="bottom-0 object-cover h-full rounded-3xl"
              src={Photo1}
              alt="Smiling customer enjoying simple, secure banking"
            />
          </div>
        </section>

        {/* About */}
        <section className="py-24 md:py-16 mb-12 content-center">
          <div className="text-center mb-12">
            <h1 className="mt-12 text-6xl">
              We pride ourselves on delivering credit with a{" "}
            </h1>
            <Link to="about" className={xlLinkClass}>
              commitment to fairness.
            </Link>
            <p className="text-2xl mt-8">
              Every part of Faster is designed to help you stay in control:
              <br />
              secure systems, clear fees and dedicated support at every stage.
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
              <h2>Fast. Secure. Simple.</h2>
              <p>
                Technology designed for a smooth, efficient borrowing
                experience.
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
              <h2>Secure by Design</h2>
              <p>
                Your data is encrypted and protected under strict privacy
                standards.
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
              <h2>Built for Australians</h2>
              <p>
                Our Line of Credit is designed to be flexible, accessible and
                easy to understand.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-primary rounded-2xl px-8 py-24 sm:px-16 mb-12">
          <div className="grid gap-32 lg:grid-cols-2 items-center">
            {/* Left */}
            <div>
              <Pill text="How Faster works" color="bg-primary" />
              <h1 className="mt-12 my-8 text-bg-primary text-6xl">
                Fast to set up, easy to use
              </h1>
              <p className="text-bg-primary">
                Faster’s reusable Line of Credit lets you access funds when you
                need them – without applying for a new loan every time. Apply
                once, and you can draw, repay, and reuse up to your approved
                limit!
              </p>

              {/* Steps */}
              <div className="mt-16 space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6 items-start">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-primary font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h2 className="text-bg-primary font-semibold">
                      Apply in minutes
                    </h2>
                    <p className="mt-2 text-bg-secondary">
                      We verify your details securely, then assess your
                      application against our lending criteria.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 items-start">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-primary font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h2 className="text-bg-primary font-semibold">
                      Get your Faster limit
                    </h2>
                    <p className="mt-2 text-bg-secondary">
                      If approved, you’ll receive an ongoing credit limit. This
                      is the maximum you can borrow at any one time.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 items-start">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-primary font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h2 className="text-bg-primary font-semibold">
                      Draw when you need it
                    </h2>
                    <p className="mt-2 text-bg-secondary">
                      Make a draw from your Faster limit to your nominated bank
                      account. Each drawdown comes with a clear repayment
                      schedule and total cost upfront.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6 items-start">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-primary font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h2 className="text-bg-primary font-semibold">
                      Repay, reuse, stay in control
                    </h2>
                    <p className="mt-2 text-bg-secondary">
                      As you repay, your available balance refreshes, and you
                      can draw again up to your limit without reapplying each
                      time.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs under steps */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="btn-secondary-light">See Our Fees</button>
                <button className="btn-primary-light">Apply Now</button>
              </div>
            </div>

            {/* Right: Loan calculator */}
            <div className="bg-bg-primary rounded-2xl p-6 lg:p-8 shadow-lg">
              <LoanCalculator />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="grid lg:grid-cols-2 gap-8 mb-12 items-stretch">
          {/* Left */}
          <div className="rounded-2xl pr-8 py-24 content-center lg:text-left sm:text-center">
            <h1 className="mt-12 my-8 text-6xl">
              Faster is{" "}
              <span className="text-primary font-[800]">deeply invested</span>{" "}
              in our customers.
            </h1>
            <p>
              Our commitment to responsible lending means we’ll always be
              transparent about fees, repayments and how our Line of Credit
              works. No pressure. No misleading terms. Just clear communication
              backed by secure technology.
            </p>
            <div className="my-6 mt-8">
              <Pill text="Transparent Practices" color="bg-secondary" />
              <Pill text="Responsible Lending" color="bg-secondary" />
              <Pill text="Customer Commitment" color="bg-secondary" />
            </div>

            <button className="btn-primary w-48">Apply Now</button>
          </div>

          {/* Right */}
          <div className="bg-gradient-to-br from-bg-secondary to-[#709FFF] rounded-2xl relative overflow-hidden flex items-center justify-center px-8 pt-8">
            <img
              className="bottom-0 object-cover h-full rounded-3xl"
              src={Photo2}
              alt="Smiling customer enjoying simple, secure banking"
            />
          </div>
        </section>

        {/* Reasons */}
        <section className="grid lg:grid-cols-2 gap-8 mb-12 items-stretch">
          <div className="bg-secondary rounded-2xl px-12 py-8 content-center text-center">
            <Pill text="Fast credit, made simple." color="bg-primary" />
            <h1 className="mt-12 my-24 text-6xl text-bg-primary">
              There's a lot to love <br />{" "}
              <span className="text-bg-secondary font-[800]">about Faster</span>
            </h1>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 inline mb-1 mr-3 text-bg-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <Link to="testimonials" className={smLinkClass}>
              1M+ people trusted our services
            </Link>
          </div>

          <div className="rounded-2xl relative overflow-hidden flex items-center justify-center">
            <section className="grid lg:grid-cols-2 gap-8 items-stretch">
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
                <h2>Advanced Security</h2>
                <p>
                  Your information is encrypted, monitored and protected across
                  every step of the process.
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
                    <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                    <path
                      fillRule="evenodd"
                      d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2>Clear, Fair Fees</h2>
                <p>
                  No hidden extras — just a transparent cost for using your Line
                  of Credit.
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
                <h2>Customer-First Support</h2>
                <p>
                  Real people ready to help with repayments, account access, and
                  questions.
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
                      d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2>Technology That Works</h2>
                <p>
                  Built by a tech-focused team to give you a smooth, reliable
                  borrowing experience.
                </p>
              </div>
            </section>
          </div>
        </section>

        {/* CTA */}
        <CTA />
      </div>
      <Footer />
    </>
  );
}

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import CTA from "../components/CTA";

import Photo1 from "../assets/person-smiling.png";
import Photo2 from "../assets/man-smiling.png";
import Photo3 from "../assets/secure.jpeg";

import "../App.css";

export default function About() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-bg-primary px-12 py-6 mx-auto">
        <NavBar />
      </header>
      <div className="w-full lg:px-40 sm:px-12 mx-auto">
        {/* Hero */}
        <section className="grid lg:grid-cols-2 bg-gradient-to-br from-bg-secondary to-[#709FFF] rounded-2xl px-8 sm:px-16 mb-12 gap-8 content-center lg:text-left sm:text-center">
          <div className="py-24 md:py-16">
            <Pill text="About Faster" color="bg-primary" />
            <h1 className="my-8 text-6xl">
              We believe borrowing should be{" "}
              <span className="text-primary font-[800]">
                clear, fair, and actually make sense.
              </span>
            </h1>
            <p>
              Faster isn’t about payday loans or fast promises — it’s about
              giving everyday Australians a smarter, more flexible way to manage
              short-term cashflow.
            </p>
          </div>
          <div className="pt-8">
            <img
              className="bottom-0 object-cover h-full rounded-3xl"
              src={Photo1}
              alt="Smiling customer enjoying simple, secure banking"
            />
          </div>
        </section>

        {/* What we do */}
        <section className="grid lg:grid-cols-2 gap-16 mb-12 items-stretch">
          <div className="rounded-2xl pr-8 py-12 content-center">
            <Pill text="What we do" color="bg-secondary" />
            <h1 className="my-8 text-5xl">
              Our Line of Credit (LOC) gives you access to funds{" "}
              <span className="text-primary font-[800]">
                when you need them, without reapplying every time.
              </span>{" "}
            </h1>
            <p className="font-medium text-xl">
              You can draw, repay, and reuse — up to your approved limit.
            </p>
          </div>

          <div className="rounded-2xl relative overflow-hidden flex items-center justify-center py-8">
            <img
              className="object-cover h-full rounded-3xl"
              src={Photo3}
              alt="Smiling customer enjoying simple, secure banking"
            />
          </div>
        </section>

        <hr className="border-t border-[#D4D6E5] lg:-mx-40 sm:-mx-12" />

        {/* Promises */}
        <section className="py-24 md:py-12 mb-12 content-center">
          <div className="text-center mb-12">
            <Pill text="Our promise" color="bg-secondary" />
            <h1 className="mt-8 text-6xl">
              We built Faster because we were tired of <br />
              credit that felt confusing.
            </h1>
            <p className="text-2xl mt-8">
              You deserve transparency, not fine print.
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
              <h2>We’ll keep it simple</h2>
              <p>
                No jargon, no gimmicks. Just clear information so you always
                know where you stand.
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
              <h2>We’ll be upfront</h2>
              <p>
                All our fees are explained before you commit — no hidden costs
                or surprise charges.
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
              <h2>We’ll lend responsibly</h2>
              <p>
                Every application is reviewed against our lending criteria and
                your financial situation. We only approve credit that is right
                for you.
              </p>
            </div>
          </div>
        </section>

        {/* How we're different */}
        <section className="grid lg:grid-cols-2 bg-gradient-to-br from-bg-secondary to-[#709FFF] rounded-2xl px-8 sm:px-16 mb-12 gap-8 content-center ">
          <div className="pt-8 px-8">
            <img
              className="bottom-0 object-cover h-full rounded-3xl"
              src={Photo2}
              alt="Smiling customer enjoying simple, secure banking"
            />
          </div>
          <div className="lg:text-left sm:text-center py-24 md:py-16">
            <Pill text="Why people choose us" color="bg-primary" />
            <h1 className="mt-12 my-8 text-6xl">
              How we're{" "}
              <span className="text-primary font-[800]">different</span>
            </h1>
            <p className="font-medium text-xl mb-8">
              Traditional short-term loans often come with fixed terms and
              reapplications.
              <br />
              Faster’s Line of Credit works differently —{" "}
              <strong>it’s ongoing.</strong>
            </p>

            <p>Once approved, you can:</p>
            <ul className="list-inside text-lg font-bold text-text-primary">
              <li className="my-4">
                <span className="text-primary mr-4 text-lg">▶</span>
                Borrow up to your limit (e.g. $450)
              </li>
              <li className="my-4">
                <span className="text-primary mr-4 text-lg">▶</span>
                Repay and reuse when you need it
              </li>
              <li className="my-4">
                <span className="text-primary mr-4 text-lg">▶</span>
                Only pay interest on what you’ve actually borrowed
              </li>
            </ul>

            <p className="mt-12 my-8 font-bold text-2xl">
              With Faster, it is{" "}
              <span className="text-primary font-bold">
                flexibility — with fairness built in.
              </span>
            </p>

            <button className="btn-primary w-48 ">Apply Now</button>
          </div>
        </section>

        {/* Registered */}
        <section className="bg-bg-secondary lg:-mx-40 sm:-mx-12 lg:px-24 sm:px-12 py-24 md:py-16 mb-12 gap-8 content-center text-center">
          <Pill text="Why people trust us" color="bg-primary" />
          <h1 className="mt-8 text-6xl">Registered and Responsible</h1>

          <div className="grid lg:grid-cols-2 gap-8 px-24 mt-12 my-8 items-stretch">
            <div className="bg-bg-primary rounded-2xl p-12 content-center">
              <h2>
                Faster.com.au is a registered credit provider in Australia
              </h2>
              <p>
                We comply with the National Consumer Credit Protection Act 2009
                and follow ASIC Regulatory Guide 234 to ensure our communication
                is fair, accurate, and transparent.
              </p>
            </div>
            <div className="bg-bg-primary rounded-2xl p-12 content-center">
              <h2>We lend responsibly</h2>
              <p>
                Approval is subject to our lending criteria and your financial
                circumstances.
              </p>
            </div>
          </div>

          <button className="btn-primary w-48">See Our Security</button>
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
              If you ever have questions about your account, repayments, or how
              our products work — we’re here to help.
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
          <div className="items-center gap-2 mt-8 mx-auto">
            <button className="btn-primary mr-4">Learn How It Works</button>
            <button className="btn-primary">See Our Fees</button>
          </div>
        </section>

        {/* CTA */}
        <CTA />
      </div>
      <Footer />
    </>
  );
}

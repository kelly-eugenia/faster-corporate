import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import CTA from "../components/CTA";

import TeamPhoto from "../assets/about-faster.jpg";
import Phone from "../assets/how-faster-differs.png";
import SecurePhoto from "../assets/responsible.png";

import "../App.css";

export default function Careers() {
  return (
    <>
      <NavBar />

      <div className="w-full lg:px-40 sm:px-12 mx-auto">
        {/* Hero */}
        <section className="lg:-mx-40 sm:-mx-12 mx-auto mb-12 px-8 sm:px-16 py-24 pt-32 lg:pt-40 gap-8 content-center text-center bg-gradient-to-b from-secondary to-primary">
          <Pill text="Work with Faster" color="bg-primary" />
          <h1 className="mt-12 my-8 text-6xl text-bg-primary">
            Let's build the future of fair, fast credit
          </h1>
          <p className="text-2xl font-medium my-8 mb-4 text-bg-primary">
            If you care about technology and responsible, fast lending,
            <br /> we’d love to meet you.
          </p>
          <button className="btn-primary-light">
            <Link
              to="/careers#open-roles"
              className="font-medium text-bg-primary"
            >
              View Open Roles
            </Link>
          </button>
        </section>

        <section className="py-8">
          {/* About Faster */}
          <section className="grid xl:grid-cols-2 gap-8 mb-12 items-stretch">
            {/* Left */}
            <div className="rounded-2xl flex items-bottom justify-center px-6 py-12 sm:py-6">
              <img
                src={TeamPhoto}
                alt="Faster is deeply invested in our customers"
                className="block w-full h-auto rounded-2xl"
              />
            </div>

            {/* Right */}
            <div className="rounded-2xl px-8 py-24 content-center lg:text-left sm:text-center">
              <h1 className="text-6xl">Who we are</h1>
              <p className="text-xl my-8">
                Faster is a forward-thinking financial technology company
                dedicated to advancing credit inclusion – giving more people{" "}
                <span className="text-primary font-bold">
                  fair, swift, and transparent access to credit.
                </span>
                <br />
                <br />
                We're proud to help thousands of customers manage short-term
                cashflow with personal credit solutions that are built to be
                clear, not confusing.
              </p>

              <button className="btn-primary">
                <Link to="/about" className="font-medium text-bg-primary">
                  Learn More
                </Link>
              </button>
            </div>
          </section>

          {/* Values */}
          <section className="grid lg:grid-cols-3 rounded-2xl bg-bg-secondary lg:px-24 sm:px-16 lg:py-16 md:py-12 mt-24 mb-12 gap-16 content-top">
            <div className="lg:text-left sm:text-center content-top">
              <Pill text="Our values" color="bg-primary" />
              <h1 className="my-8 text-6xl">We believe in</h1>
            </div>
            <div className="col-span-2 rounded-2xl px-8 content-center lg:text-left sm:text-center">
              <div className="flex gap-6 justify-start my-12">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-12 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                      clipRule="evenodd"
                    />
                    <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                  </svg>
                </span>
                <div>
                  <h2>Customer first</h2>
                  <p>
                    We design credit solutions that help people stay in control,
                    not stuck in fine print.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 justify-start my-12">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-12 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <h2>Responsible by default</h2>
                  <p>
                    We follow both the rules and the intent behind them, aiming
                    for lending that is sustainable and suitable.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 justify-start my-12">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-12 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <h2>Security and trust</h2>
                  <p>
                    We treat customer data with care. Security, privacy and
                    reliability are built into everything we ship.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 justify-start my-12">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-12 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <h2>One team, many disciplines</h2>
                  <p>
                    All roles and divisions work together to solve problems
                    end-to-end.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why work here */}
          <section className="grid xl:grid-cols-2 gap-8 mb-12 items-stretch">
            {/* Left */}
            <div className="rounded-2xl px-8 py-24 content-center lg:text-left sm:text-center">
              <h1 className="mt-12 my-8 text-4xl">
                Joining Faster means working at the intersection of fintech,
                data and real-world impact.
              </h1>

              <div>
                <div className="flex gap-6 justify-start my-12">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-12 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                        clipRule="evenodd"
                      />
                      <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                    </svg>
                  </span>
                  <div>
                    <h2>Make a meaningful difference</h2>
                    <p>
                      Your work helps people access credit that’s clearer, more
                      transparent, and easier to manage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 justify-start my-12">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-12 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2>Tech at the core</h2>
                    <p>
                      We’re a technology-driven company: from our Line of Credit
                      platform to our security systems, engineering is front and
                      centre.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 justify-start my-12">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-12 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2>Customer-first mindset</h2>
                    <p>
                      We design products, campaigns, and processes around
                      clarity and transparency, not fine print.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 justify-start my-12">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-12 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h2>Flexible work</h2>
                    <p>
                      We design products, campaigns, and processes around
                      clarity and transparency, not fine print.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-2xl flex items-bottom justify-center px-6 py-12 sm:py-6">
              <img
                src={TeamPhoto}
                alt="Faster website on phone and laptop"
                className="block w-full h-auto rounded-2xl"
              />
            </div>
          </section>
        </section>

        {/* Open roles */}
        <section className="bg-bg-secondary lg:-mx-40 sm:-mx-12 lg:px-40 sm:px-12 py-12 md:py-8 gap-8 content-center">
          <section className="py-24 md:py-12 mb-12 content-center">
            <div className="text-center mb-12">
              <Pill text="We're hiring" color="bg-primary" />
              <h1 className="my-8 text-6xl">Open Roles</h1>
              <p className="text-xl">
                Join Faster in helping Australians access fair, flexible credit
              </p>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}

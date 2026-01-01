import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import Reviews from "../components/Reviews";
import CTA from "../components/CTA";

import TeamPhoto from "../assets/about-faster.png";
import Phone from "../assets/how-faster-differs.png";
import SecurePhoto from "../assets/responsible.png";

import "../App.css";

export default function About() {
  return (
    <>
      <NavBar />

      <div className="w-full mx-auto">
        {/* Hero */}
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 pt-16 md:pt-20 lg:pt-24 bg-gradient-to-b from-secondary to-primary">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.05,
            }}
            className="pt-12 sm:pt-16 py-16 md:pt-16 md:py-32 gap-8 content-center text-center"
          >
            <Pill text="About Faster" color="bg-primary" />

            <h1 className="mt-8 sm:mt-8 lg:mt-12 my-4 md:my-8 text-4xl md:text-5xl lg:text-6xl text-bg-primary">
              Borrowing that’s clear, fair, and makes sense.
            </h1>
            <p className="mb-16 md:mb-20 lg:mb-24 px-6 sm:px-12 md:px-24 text-bg-secondary text-base sm:text-lg md:text-2xl font-medium">
              Faster.com.au isn’t about payday loans or empty promises — it’s
              about giving everyday Australians a more flexible way to manage
              short-term cashflow.
            </p>
          </motion.div>
        </section>

        {/* What we do */}
        <section className="rounded-2xl -mt-32 md:-mt-48 px-8 sm:px-12 md:px-16 lg:px-32 py-8 sm:py-12 pb-6 content-center mb-8 items-stretch">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.05,
            }}
            className="relative mx-auto item-center"
          >
            <div className="overflow-hidden">
              <img
                src={TeamPhoto}
                alt="The Faster team"
                className="block rounded-2xl h-auto object-cover"
              />
            </div>
          </motion.div>

          <div className="mt-8 md:mt-12 text-center md:text-left">
            <Pill text="What we do" color="bg-secondary" />
            <h1 className="mt-8 lg:mt-12 my-6 md:my-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Our Line of Credit gives you access to funds{" "}
              <span className="text-primary font-[800]">
                when you need them
              </span>
              , without reapplying every time.
            </h1>
            <p className="font-medium text-lg md:text-2xl">
              You can draw, repay, and reuse — up to your approved limit.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/fees"
                className="btn btn-secondary text-base md:text-lg my-0 font-medium"
              >
                See Our Fees
              </Link>
              <Link
                to="/home#how-it-works"
                className="btn btn-primary text-base md:text-lg my-0 font-medium"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Trustpilot */}
        <section className="rounded-2xl mx-8 sm:mx-12 lg:mx-32 px-6 py-8 md:py-12 mb-12 md:mb-24 bg-bg-secondary text-xl text-center text-bg-primary">
          <Pill text="What the people say" color="bg-primary" />
          <Reviews />
        </section>

        <section className="bg-bg-secondary px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-16 mb-12 gap-8 content-center">
          {/* Promises */}
          <section className="mb-12 content-center">
            <div className="text-center mb-12">
              <Pill text="Our promise" color="bg-primary" />
              <h1 className="w-full md:w-2/3 mx-auto mt-8 lg:mt-12 my-6 md:my-8 text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
                We built Faster because we were tired of credit that felt
                confusing.
              </h1>
              <p className="text-lg md:text-2xl">
                You deserve transparency, not fine print.
              </p>
            </div>

            <div>
              {/* MOBILE: swipeable carousel */}
              <div className="md:hidden">
                <div className="-mx-8 px-8">
                  <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
                    {/* Card 1 */}
                    <div className="snap-start shrink-0 w-[80%] bg-bg-primary rounded-2xl p-8 flex flex-col justify-start">
                      <div className="bg-bg-secondary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl sm:text-3xl mb-2">
                        We’ll keep it simple
                      </h2>
                      <p>
                        No jargon, no gimmicks. Just clear information so you
                        always know where you stand.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="snap-start shrink-0 w-[80%] bg-bg-primary rounded-2xl p-8 flex flex-col justify-start">
                      <div className="bg-bg-secondary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl sm:text-3xl mb-2">
                        We’ll be upfront
                      </h2>
                      <p>
                        All our fees are explained before you commit — no hidden
                        costs.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="snap-start shrink-0 w-[80%] bg-bg-primary rounded-2xl p-8 flex flex-col justify-start">
                      <div className="bg-bg-secondary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
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
                      <h2 className="text-2xl sm:text-3xl mb-2">
                        We’ll lend responsibly
                      </h2>
                      <p>
                        Every application is reviewed against our lending
                        criteria and your financial situation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DESKTOP: 3-column grid (original layout) */}
              <div className="hidden md:grid md:grid-cols-3 gap-8 items-stretch">
                <div className="bg-bg-primary rounded-2xl p-8 content-center">
                  <div className="bg-bg-secondary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl">We’ll keep it simple</h2>
                  <p>
                    No jargon, no gimmicks. Just clear information so you always
                    know where you stand.
                  </p>
                </div>
                <div className="bg-bg-primary rounded-2xl p-8 content-center">
                  <div className="bg-bg-secondary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl">We’ll be upfront</h2>
                  <p>
                    All our fees are explained before you commit — no hidden
                    costs.
                  </p>
                </div>
                <div className="bg-bg-primary rounded-2xl p-8 content-center">
                  <div className="bg-bg-secondary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
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
                    We’ll lend responsibly
                  </h2>
                  <p>
                    Every application is reviewed against our lending criteria
                    and your financial situation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How we're different */}
          <section className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-tr from-primary to-secondary rounded-2xl px-8 sm:px-16 mb-12 gap-2 sm:gap-16 content-center">
            <div className="order-2 lg:order-1 rounded-2xl lg:pt-8 lg:px-8 flex items-bottom justify-center">
              <img
                src={Phone}
                alt="Faster website on phone"
                className="block object-cover w-full h-auto rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left py-12 lg:py-16 pb-0">
              <Pill text="Why people choose us" color="bg-primary" />
              <h1 className="mt-8 lg:mt-12 my-6 md:my-8 text-4xl sm:text-5xl lg:text-6xl text-bg-primary">
                How we're{" "}
                <span className="text-bg-secondary font-[800]">different</span>
              </h1>
              <p className="font-medium text-lg md:text-xl mb-8 text-bg-primary">
                Traditional short-term loans often come with fixed terms and
                reapplications.
                <br />
                Faster’s Line of Credit works differently —{" "}
                <strong>it’s ongoing.</strong>
              </p>

              <p className="text-bg-primary">Once approved, you can:</p>
              <ul className="list-inside text-base md:text-lg font-bold text-bg-primary">
                <li className="mt-4 my-2 md:my-4">
                  <span className="text-bg-primary lg:text-primary mr-4 text-lg">
                    ▶
                  </span>
                  Borrow up to your limit (e.g. $450)
                </li>
                <li className="my-2 md:my-4">
                  <span className="text-bg-primary lg:text-primary mr-4 text-lg">
                    ▶
                  </span>
                  Repay and reuse when you need it
                </li>
                <li className="my-2 md:my-4">
                  <span className="text-bg-primary lg:text-primary mr-4 text-lg">
                    ▶
                  </span>
                  Only pay interest on what you’ve actually borrowed
                </li>
              </ul>

              <p className="mt-12 my-6 md:my-8 font-bold text-2xl text-bg-primary">
                With Faster, you get{" "}
                <span className="text-bg-secondary font-bold">
                  flexibility with fairness built in.
                </span>
              </p>

              <Link
                to="/apply"
                className="btn btn-primary-light text-base md:text-lg my-0 font-medium"
              >
                Apply Now
              </Link>
            </div>
          </section>

          {/* Security */}
          <section className="grid grid-cols-1 lg:grid-cols-2 bg-bg-primary rounded-2xl px-8 sm:px-16 mb-12 gap-8 sm:gap-16 content-center">
            <div className="lg:text-left text-center py-12 lg:py-16 pb-0">
              <Pill text="Why people trust us" color="bg-secondary" />
              <h1 className="my-6 md:my-8 text-4xl sm:text-5xl lg:text-6xl">
                We are registered and responsible
              </h1>
              <p>Faster.com.au is:</p>
              <ul className="list-inside text-base md:text-lg font-medium text-text-primary">
                <li className="my-2 md:my-4 relative pl-4 lg:pl-8 list-none before:absolute before:left-0 before:content-['✓'] before:text-primary">
                  A registered credit provider in Australia
                </li>
                <li className="my-2 md:my-4 relative pl-4 lg:pl-8 list-none before:absolute before:left-0 before:content-['✓'] before:text-primary">
                  Compliant with Australian credit laws and privacy requirements
                </li>
                <li className="my-2 md:my-4 relative pl-4 lg:pl-8 list-none before:absolute before:left-0 before:content-['✓'] before:text-primary">
                  Committed to responsible lending through careful assessment of
                  every applications
                </li>
              </ul>
              <Link
                to="/security"
                className="btn btn-primary text-base md:text-lg my-0 font-medium"
              >
                See Our Security
              </Link>
            </div>
            <div className="rounded-2xl lg:pt-8 lg:px-8 flex items-bottom justify-center">
              <img
                src={SecurePhoto}
                alt="Faster is registered and responsible"
                className="block object-cover w-full h-auto rounded-2xl"
              />
            </div>
          </section>
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
            Questions about your account, repayments, or how it works? We’re
            here to help.
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
        <div className="mb-24">
          <CTA />
        </div>
      </div>

      <Footer />
    </>
  );
}

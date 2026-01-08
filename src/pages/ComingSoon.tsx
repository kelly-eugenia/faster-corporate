import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import SEO from "../components/SEO";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Logo from "../assets/lettermark.svg";

import "../App.css";

export default function ComingSoon() {
  const hasSubmittedRef = useRef(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <SEO
        title="Applications Opening Soon | Faster.com.au"
        description="Faster.com.au applications are launching soon. Get notified to access our flexible Line of Credit designed for transparency, speed, and control."
      />

      <NavBar />

      <div className="w-full mx-auto">
        <section className="min-h-[100vh] content-center px-8 sm:px-12 lg:px-16 xl:px-40 pt-16 sm:pt-24 lg:pt-40 pb-12 lg:pb-24 bg-gradient-to-tr from-secondary to-primary">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.05,
            }}
            className="content-center text-center"
          >
            <div className="mb-16 rounded-2xl flex items-end justify-center h-full">
              <img
                className="block size-24 md:size-28"
                src={Logo}
                alt="Faster logo"
              />
            </div>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              <h1 className="my-8 md:my-12 text-5xl md:text-6xl lg:text-7xl text-bg-primary">
                Applications Opening Soon
              </h1>
            </motion.div>
            <p className="mb-16 md:mb-12 lg:mb-16 text-bg-secondary text-base sm:text-lg md:text-xl">
              Hold tight, we will launch our Faster platform soon!
            </p>

            <div className="bg-secondary/50 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-6xl mx-auto rounded-2xl p-8 m:px-12 md:px-24 lg:px-32 sm:py-10 md:py-12 mb-6">
              <h2 className="text-bg-primary text-2xl sm:text-3xl lg:text-4xl mb-4">
                Get notified when applications open
              </h2>
              {!submitted ? (
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSepIRActyRZE6DU8Lyue1iM1q2XhhMjTd26yImcJT-IO4Tzjw/formResponse"
                  method="POST"
                  target="hidden_iframe"
                  onSubmit={() => {
                    hasSubmittedRef.current = true;
                  }}
                >
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <input
                      type="email"
                      name="entry.254947007"
                      required
                      placeholder="Email address"
                      className="w-full sm:w-[70%] rounded-lg text-text-primary px-4 py-3"
                    />

                    <button
                      type="submit"
                      className="w-full sm:w-[30%] flex-shrink-0 btn btn-primary text-base sm:text-lg font-medium"
                    >
                      Notify Me
                    </button>
                  </div>

                  <iframe
                    name="hidden_iframe"
                    className="hidden"
                    onLoad={() => {
                      if (hasSubmittedRef.current) {
                        setSubmitted(true);
                        hasSubmittedRef.current = false;
                      }
                    }}
                  />
                </form>
              ) : (
                <p className="mt-6 text-lg font-medium text-bg-primary">
                  Thanks! We’ll notify you when applications open 🎉
                </p>
              )}
            </div>

            <Link
              to="/home"
              className=" text-bg-secondary/70 text-lg font-medium hover:underline"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </section>
      </div>

      <Footer />
    </>
  );
}

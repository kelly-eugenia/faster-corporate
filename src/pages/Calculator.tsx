import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import CTA from "../components/CTA";
import LoanCalculator from "../components/LoanCalculator";

import "../App.css";

export default function Calculator() {
  return (
    <>
      <NavBar />

      <div className="w-full mx-auto">
        {/* Hero */}
        <section
          className="
            bg-gradient-to-bl from-secondary to-primary
            pt-12 md:pt-16 lg:pt-24 px-8 sm:px-12 lg:px-16 xl:px-40
        "
        >
          <div className="w-full py-24 lg:py-32 gap-16 grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left */}
            <div className="lg:text-left text-center">
              <h1 className="my-4 md:my-8 text-4xl md:text-5xl lg:text-6xl text-bg-primary">
                Line of Credit calculator
              </h1>
              <p className="text-2xl font-medium my-4 lg:my-8 text-bg-primary">
                Want to know what you're getting into? Estimate your monthly
                repayments in less than 30 seconds.
              </p>
              <button className="btn-primary-light mb-24 lg:mb-0">
                <Link
                  to="/fees#how-fees-work"
                  className="font-medium text-bg-primary text-base md:text-lg"
                >
                  See How Our Fees Work
                </Link>
              </button>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="w-full mx-auto pt-20 lg:pt-0">
          <div className="px-8 sm:px-12 lg:px-16 xl:px-24 flex justify-center lg:justify-end">
            <div
              className="
                -mt-[20vh] lg:-mt-[50vh]       
                w-full max-w-2xl lg:max-w-xl xl:max-w-2xl
                rounded-xl shadow-lg
                bg-bg-primary
                p-4 md:p-6 lg:p-8
                "
            >
              <LoanCalculator />
            </div>
          </div>

          {/* Fee structure */}
          <div className="mt-2 lg:mt-8">
            <section
              id="how-fees-work"
              className="px-8 sm:px-12 lg:px-16 xl:px-40 py-12 md:py-16 lg:py-24 mb-8 md:mb-12 gap-8 content-center text-center"
            >
              <Pill text="How our fees work" color="bg-secondary" />

              {/* Stat style */}
              <div className="text-center sm:text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-8 items-stretch">
                <div className="p-8 sm:p-10 lg:p-12 bg-bg-secondary rounded-2xl content-top">
                  <h1 className="lg:text-7xl sm:text-6xl text-5xl text-primary font-[1000]">
                    20%
                  </h1>
                  <h2 className="text-secondary lg:text-3xl sm:text-2xl text-xl mt-3">
                    Drawdown fee
                  </h2>
                  <p className="sm:text-xl text-lg mt-3 sm:mt-6">
                    20% of your credit limit, charged once at the start.
                  </p>
                </div>
                <div className="p-8 sm:p-10 lg:p-12 bg-bg-secondary rounded-2xl content-top">
                  <h1 className="lg:text-7xl sm:text-6xl text-5xl text-primary font-[1000]">
                    47%{" "}
                  </h1>
                  <h2 className="text-secondary lg:text-3xl sm:text-2xl text-xl mt-3">
                    p.a. Interest rate
                  </h2>
                  <p className="sm:text-xl text-lg mt-3 sm:mt-6">
                    47% per annum (approx. 3.92% per month) calculated daily on
                    your balance.
                  </p>
                </div>
                <div className="p-8 sm:p-10 lg:p-12 bg-bg-secondary rounded-2xl content-top">
                  <h1 className="lg:text-7xl sm:text-6xl text-5xl text-primary font-[1000]">
                    $15{" "}
                  </h1>
                  <h2 className="text-secondary lg:text-3xl sm:text-2xl text-xl mt-3">
                    Monthly fee
                  </h2>
                  <p className="sm:text-xl text-lg mt-3 sm:mt-6">
                    A flat maintenance fee for keeping your LOC open.
                  </p>
                </div>
                <div className="p-8 sm:p-10 lg:p-12 bg-bg-secondary rounded-2xl content-top">
                  <h1 className="lg:text-7xl sm:text-6xl text-5xl text-primary font-[1000]">
                    $3.50
                  </h1>
                  <h2 className="text-secondary lg:text-3xl sm:text-2xl text-xl mt-3">
                    Per repayment
                  </h2>
                  <p className="sm:text-xl text-lg mt-3 sm:mt-6">
                    A $3.50 fee each time a repayment is processed.
                  </p>
                </div>
              </div>
            </section>
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

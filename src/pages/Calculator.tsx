import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import CTA from "../components/CTA";
import LoanCalculator from "../components/LoanCalculator";

import HeroPhoto from "../assets/clear-fees.png";
import CoinsPhoto from "../assets/coins.png";

import "../App.css";

export default function Calculator() {
  return (
    <>
      <NavBar />

      <div className="w-full lg:px-40 sm:px-12 mx-auto">
        {/* Hero */}
        <section
          className="
            bg-gradient-to-bl from-secondary to-primary
            lg:-mx-40 sm:-mx-12 mx-auto
            px-6 sm:px-12 lg:px-40
            pt-12 lg:pt-16
        "
        >
          <div className="w-full py-24 lg:py-32 grid gap-16 lg:grid-cols-2 items-center">
            {/* Left */}
            <div className="lg:text-left sm:text-center">
              <h1 className="my-8 text-6xl text-bg-primary">
                Line of Credit calculator
              </h1>
              <p className="text-2xl font-medium my-8 text-bg-primary">
                Want to know what you're getting into? Estimate your monthly
                repayments in less than 30 seconds.
              </p>
              <button className="btn-primary-light">
                <Link
                  to="/fees#how-fees-work"
                  className="font-medium text-bg-primary"
                >
                  See How Our Fees Work
                </Link>
              </button>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="w-full mx-auto">
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                -mt-[20vh] lg:-mt-[50vh]       
                w-full max-w-2xl
                rounded-xl shadow-lg
                bg-bg-primary
                p-6 lg:p-8
                "
            >
              <LoanCalculator />
            </div>
          </div>

          {/* Fee structure */}
          <div className="mt-8">
            <section
              id="how-fees-work"
              className="lg:-mx-40 sm:-mx-12 lg:px-40 sm:px-12 py-24 md:py-16 mb-12 gap-8 content-center text-center"
            >
              <Pill text="How our fees work" color="bg-secondary" />

              {/* Stat style */}
              <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8 mt-8 mb-12 items-stretch text-left">
                <div className="p-12 bg-bg-secondary rounded-2xl content-top">
                  <h1 className="text-7xl text-primary font-[1000]">20%</h1>
                  <h2 className="text-secondary text-3xl mt-3">Drawdown fee</h2>
                  <p className="text-xl mt-6">
                    20% of your credit limit, charged once at the start.
                  </p>
                </div>
                <div className="p-12 bg-bg-secondary rounded-2xl content-top">
                  <h1 className="text-7xl text-primary font-[1000]">47% </h1>
                  <h2 className="text-secondary text-3xl mt-3">
                    p.a. Interest rate
                  </h2>
                  <p className="text-xl mt-6">
                    47% per annum (approx. 3.92% per month) calculated daily on
                    your balance.
                  </p>
                </div>
                <div className="p-12 bg-bg-secondary rounded-2xl content-top">
                  <h1 className="text-7xl text-primary font-[1000]">$15 </h1>
                  <h2 className="text-secondary text-3xl mt-3">Monthly fee</h2>
                  <p className="text-xl mt-6">
                    A flat maintenance fee for keeping your LOC open.
                  </p>
                </div>
                <div className="p-12 bg-bg-secondary rounded-2xl content-top">
                  <h1 className="text-7xl text-primary font-[1000]">$3.50</h1>
                  <h2 className="text-secondary text-3xl mt-3">
                    Per repayment
                  </h2>
                  <p className="text-xl mt-6">
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

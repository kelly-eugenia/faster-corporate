import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import CTA from "../components/CTA";
import LoanCalculator from "../components/LoanCalculator";

import "../App.css";

export default function Calculator() {
  return (
    <>
      <SEO
        title="Line of Credit Calculator| Faster.com.au"
        description="Use our calculator to estimate repayments and costs based on your credit limit, so you can understand your options upfront."
      />

      <NavBar />

      <div className="w-full mx-auto">
        {/* Hero */}
        <section
          className="
            bg-gradient-to-bl from-secondary to-primary
            pt-12 md:pt-16 lg:pt-24 px-8 sm:px-12 lg:px-16 xl:px-40
        "
        >
          <div className="xl:max-w-[1920px] mx-auto">
            <div className="w-full py-24 lg:py-32 gap-16 grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left */}
              <div className="lg:text-left text-center">
                <h1 className="my-4 md:my-8 text-4xl md:text-5xl lg:text-6xl text-bg-primary">
                  Line of Credit Calculator
                </h1>
                <p className="text-base sm:text-lg md:text-2xl font-medium my-4 lg:my-8 text-bg-primary">
                  Want to know what you're getting into? Estimate your monthly
                  repayments in less than 30 seconds.
                </p>
                <div className="mb-12 lg:mb-0">
                  <Link
                    to="/fees#how-fees-work"
                    className="btn btn-primary-light text-base md:text-lg font-medium"
                  >
                    See How Our Fees Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="xl:max-w-[1920px] mx-auto">
          {/* Calculator */}
          <section className="w-full mx-auto pt-20 lg:pt-0">
            <div className="px-8 sm:px-12 lg:px-16 xl:px-24 flex justify-center lg:justify-end">
              <div
                className="
                -mt-[150px] lg:-mt-[450px] xl:-mt-[400px]     
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
              <section className="px-8 sm:px-12 lg:px-16 xl:px-40 py-12 md:py-16 lg:py-24 mb-8 md:mb-12 content-center text-center">
                <Pill text="How our fees work" color="bg-secondary" />

                {/* Stat style */}
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
                        Only applies to the amount you've drawn, for the days
                        it's outstanding
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
              </section>
            </div>
          </section>

          {/* CTA */}
          <div className="mb-24">
            <CTA />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

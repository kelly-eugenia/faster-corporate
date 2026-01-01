import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import Reviews from "../components/Reviews";
import MobileCarousel from "../components/MobileCarousel";
import LoanCalculator from "../components/LoanCalculator";
import CTA from "../components/CTA";
import FAQSection from "../components/FAQSection";

import HeroPhoto from "../assets/hero-sect.png";
import TeamPhoto from "../assets/faster-team-values.jpg";
import WebsitePhoto from "../assets/faster-website.png";

import FeesIcon from "../assets/fair-fees.png";
import SecurityIcon from "../assets/advanced-security.png";
import TechIcon from "../assets/technology-that-works.png";
import CustomerIcon from "../assets/customer-support.png";
import "../App.css";

const currency0 = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0,
});

const xlLinkClass =
  "relative text-4xl sm:text-5xl lg:text-6xl font-[800] text-primary \
    after:content-[''] after:absolute after:right-0 after:-bottom-0.5 \
    after:h-[6px] after:w-0 after:bg-primary \
    after:transition-all after:duration-300 \
    hover:after:w-full hover:after:left-0";

const homeFaqs = [
  {
    question: "What is Faster?",
    answer: (
      <>
        Faster offers a flexible Line of Credit you can draw from, repay, and
        reuse up to your approved limit. It’s designed to help manage short-term
        cashflow, not as a long-term loan.
      </>
    ),
  },
  {
    question: "Do I need an account with Faster to use the service?",
    answer: (
      <>
        Yes. You’ll need a Faster account to apply for our Line of Credit and
        manage your repayments. Your account gives you secure access to your
        application, contract, transaction history and support.
      </>
    ),
  },
  {
    question: "How much can I borrow with Faster?",
    answer: (
      <>
        Eligible customers may be approved for a Line of Credit of up to
        $10,000, subject to our lending criteria and your financial situation.
      </>
    ),
  },
  {
    question: "Are there any fees for using Faster?",
    answer: (
      <>
        Yes — as a credit provider, our Line of Credit includes:
        <ul className="mt-3 space-y-1">
          <li>• a one-off drawdown fee (20% of your approved limit)</li>
          <li>• interest at 47% p.a. on your outstanding balance</li>
          <li>• a $15 monthly fee</li>
          <li>• a $3.50 fee per repayment</li>
        </ul>
        <p className="my-3 text-base md:text-xl">
          All fees are shown clearly before you sign your contract.
        </p>
        <Link
          to="/fees"
          className="btn btn-primary text-base md:text-lg mt-4 font-medium"
        >
          See Our Fees
        </Link>
      </>
    ),
  },
  {
    question: "Is Faster safe to use?",
    answer: (
      <>
        Yes. We use secure, industry-standard technology to protect your data,
        including encryption and strict access controls. We also comply with
        Australian credit and privacy laws and apply responsible-lending
        practices.
        <div className="mt-2">
          <Link
            to="/security"
            className="btn btn-primary text-base md:text-lg font-medium"
          >
            See Our Security
          </Link>
        </div>
      </>
    ),
  },
  {
    question: "How can I contact Faster for support or enquiries?",
    answer: (
      <>
        You can reach our team anytime at{" "}
        <a href="mailto:support@faster.com.au" className="hover:underline">
          support@faster.com.au
        </a>
        . We’re here to help with account access, repayments, fee questions, or
        anything else you’re unsure about.
        <Link
          to="/contact"
          className="btn btn-primary text-base md:text-lg font-medium"
        >
          Contact Us
        </Link>
      </>
    ),
  },
];

export default function Home() {
  const navigate = useNavigate();

  // motion value for the number
  const amount = useMotionValue(5000);

  // format it as $10,000
  const amountFormatted = useTransform(amount, (latest) =>
    currency0.format(latest)
  );

  useEffect(() => {
    const controls = animate(amount, 10000, {
      duration: 0.8,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [amount]);

  return (
    <>
      <NavBar />

      <div className="w-full mx-auto">
        {/* Hero */}
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 pt-16 sm:pt-24 lg:pt-40 pb-12 lg:pb-24 bg-gradient-to-tr from-secondary to-primary">
          <div className="grid gap-24 lg:grid-cols-2 items-stretch">
            {/* Left */}
            <div className="pt-12 pb-0 lg:pb-12 flex flex-col justify-center">
              <div className="lg:mt-8 lg:text-left text-center">
                <Pill text="Fast credit, made simple." color="bg-primary" />
                <h1 className="mt-8 lg:mt-12 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-bg-primary">
                  Access up to{" "}
                  <span className="inline-block w-[7ch] align-baseline text-center">
                    <motion.span className="text-bg-primary font-[800] tabular-nums whitespace-nowrap">
                      {amountFormatted}
                    </motion.span>
                  </span>{" "}
                  when you need it most
                </h1>
                <p className="mt-6 lg:mt-8 text-bg-secondary text-base sm:text-lg md:text-2xl">
                  When traditional banks say no,{" "}
                  <strong>Faster says yes</strong>. Get a Line of Credit with
                  clear terms, no surprises, and decisions in minutes.
                </p>

                <motion.button
                  className="my-10 lg:my-12 btn-primary text-base sm:text-lg"
                  onClick={() => navigate("/apply")}
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
                  Apply Now
                </motion.button>
              </div>
            </div>

            {/* Right */}
            <div className="-mt-28 -mb-12 lg:-mb-24 lg:pt-20 flex items-end justify-center">
              <img
                className="block w-auto max-w-full h-full scale-100 lg:scale-[1.05] origin-bottom-left"
                src={HeroPhoto}
                alt="Smiling customer enjoying Faster"
              />
            </div>
          </div>
        </section>

        {/* Trustpilot */}
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-12 bg-bg-secondary text-xl text-center text-bg-primary">
          <Pill text="What the people say" color="bg-primary" />
          <Reviews />
        </section>

        {/* About */}
        <section className="py-8 pb-0 md:py-12 md:pb-6 grid gap-8 mb-12 items-stretch">
          <div className="rounded-2xl px-8 sm:px-12 lg:px-16 xl:px-40 pb-0 sm:pb-4 content-center text-center">
            <Pill text="Why choose Faster" color="bg-secondary" />
            <h1 className="mt-8 lg:mt-12 my-2 text-4xl sm:text-5xl lg:text-6xl">
              There's a lot to love{" "}
              <span className="hidden sm:inline">
                <br />
              </span>
              <span>
                <Link to="about" className={xlLinkClass}>
                  about Faster.com.au
                </Link>
              </span>
            </h1>
          </div>

          <div>
            {/* Mobile Looping Carousel */}
            <MobileCarousel
              items={[
                {
                  icon: SecurityIcon,
                  title: "Advanced Security",
                  desc: "Your data is encrypted and monitored throughout the process.",
                },
                {
                  icon: FeesIcon,
                  title: "Clear, Fair Fees",
                  desc: "No hidden fees — just a transparent cost for using your Line of Credit.",
                },
                {
                  icon: CustomerIcon,
                  title: "Customer Support",
                  desc: "Real people ready to help with any question and issue.",
                },
                {
                  icon: TechIcon,
                  title: "Reliable Tech",
                  desc: "Built by a tech-focused team to give you a smooth, reliable experience.",
                },
              ]}
            />

            {/* Desktop Grid */}
            <div className="hidden px-8 sm:px-12 lg:px-16 xl:px-40 md:grid xl:grid-cols-4 md:grid-cols-2 gap-8 items-stretch text-center md:text-left">
              <div className="bg-bg-secondary rounded-2xl p-8">
                <div className="w-1/5 mx-auto md:mx-0 mb-6">
                  <img src={SecurityIcon} alt="Security" />
                </div>
                <h2 className="text-3xl sm:text-4xl">Advanced Security</h2>
                <p>
                  Your data is encrypted and monitored throughout the process.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-2xl p-8">
                <div className="w-1/5 mx-auto md:mx-0 mb-6">
                  <img src={FeesIcon} alt="Fees" />
                </div>
                <h2 className="text-3xl sm:text-4xl">Clear, Fair Fees</h2>
                <p>
                  No hidden fees — just a transparent cost for using your Line
                  of Credit.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-2xl p-8">
                <div className="w-1/5 mx-auto md:mx-0 mb-6">
                  <img src={CustomerIcon} alt="Customer Support" />
                </div>
                <h2 className="text-3xl sm:text-4xl">Customer Support</h2>
                <p>Real people ready to help with any question and issue.</p>
              </div>

              <div className="bg-bg-secondary rounded-2xl p-8">
                <div className="w-1/5 mx-auto md:mx-0 mb-6">
                  <img src={TechIcon} alt="Reliable Tech" />
                </div>
                <h2 className="text-3xl sm:text-4xl">Reliable Tech</h2>
                <p>
                  Built by a tech-focused team to give you a smooth, reliable
                  experience.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/about"
              className="btn btn-primary text-base md:text-lg font-medium"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="bg-bg-secondary px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-16 mb-12"
        >
          <div className="grid gap-16 lg:gap-32 lg:grid-cols-2 items-center">
            {/* Left */}
            <div className="text-center md:text-left">
              <Pill text="How Faster works" color="bg-primary" />
              <h1 className="mt-8 lg:mt-12 my-4 text-4xl sm:text-5xl lg:text-6xl">
                Fast to set up, easy to use
              </h1>
              <p>
                Faster’s Line of Credit lets you access funds when you need
                them, without reapplying each time. Credit is subject to
                eligibility and approval.
              </p>

              {/* Steps */}
              <div className="mt-16 space-y-12 md:space-y-8 w-full mx-auto max-w-2xl md:mx-0 md:max-w-3xl">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start text-center md:text-left">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center 
                  rounded-full bg-primary text-bg-primary font-bold 
                  lg:text-xl text-lg self-start mx-auto md:mx-0"
                  >
                    1
                  </div>
                  <div className="mx-auto md:mx-0">
                    <h2 className="font-semibold text-2xl sm:text-3xl">
                      Apply in minutes
                    </h2>
                    <p className="mt-2 text-muted-primary">
                      Complete a quick online application and securely verify
                      your details.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start text-center md:text-left">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center 
                  rounded-full bg-primary text-bg-primary font-bold 
                  lg:text-xl text-lg self-start mx-auto md:mx-0"
                  >
                    2
                  </div>
                  <div className="mx-auto md:mx-0">
                    <h2 className="font-semibold text-2xl sm:text-3xl">
                      Get your Faster limit
                    </h2>
                    <p className="mt-2 text-muted-primary">
                      If approved, you will receive an ongoing credit limit —
                      the maximum you can borrow at a time.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start text-center md:text-left">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center 
                  rounded-full bg-primary text-bg-primary font-bold 
                  lg:text-xl text-lg self-start mx-auto md:mx-0"
                  >
                    3
                  </div>
                  <div className="mx-auto md:mx-0">
                    <h2 className="font-semibold text-2xl sm:text-3xl">
                      Draw when you need it
                    </h2>
                    <p className="mt-2 text-muted-primary">
                      Make a draw from your limit to your bank account — with a
                      clear repayment schedule and total cost shown upfront.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start text-center md:text-left">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center 
                  rounded-full bg-primary text-bg-primary font-bold 
                  lg:text-xl text-lg self-start mx-auto md:mx-0"
                  >
                    4
                  </div>
                  <div className="mx-auto md:mx-0">
                    <h2 className="font-semibold text-2xl sm:text-3xl">
                      Repay, reuse, stay in control
                    </h2>
                    <p className="mt-2 text-muted-primary">
                      As you repay, your available balance refreshes. You can
                      draw again up to your limit.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start sm:mb-8">
                <Link
                  to="/fees"
                  className="btn btn-secondary text-primary text-base md:text-lg my-0 font-medium"
                >
                  See Our Fees
                </Link>
                <Link
                  to="/apply"
                  className="btn btn-primary text-base md:text-lg my-0 font-medium"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Right: Loan calculator */}
            <div className="bg-gradient-to-tr from-secondary to-primary rounded-2xl p-2 sm:p-4 md:p-8 mb-4 lg:mb-0">
              <LoanCalculator />
            </div>
          </div>
        </section>

        {/* Values 1 */}
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 py-4 md:py-12 grid lg:grid-cols-2 gap-8 mb-2 lg:mb-6 items-stretch">
          {/* Left */}
          <div className="rounded-2xl px-4 flex items-bottom justify-center">
            <img
              src={TeamPhoto}
              alt="Faster is deeply invested in our customers"
              className="block w-full h-auto rounded-2xl"
            />
          </div>

          {/* Right */}
          <div className="rounded-2xl p-0 lg:px-8 lg:py-10 content-center lg:text-left text-center">
            <h1 className="mt-0 mb-6 sm:my-6 md:my-8 text-4xl sm:text-5xl lg:text-6xl">
              Faster is{" "}
              <span className="text-primary font-[800]">deeply invested</span>{" "}
              in our customers.
            </h1>
            <p className="text-lg md:text-xl">
              We believe borrowing should be clear, fair, and designed to help
              you always stay in control.
            </p>
            <div className="my-6 sm:mt-8">
              <Pill text="Transparent Practices" color="bg-secondary" />
              <Pill text="Responsible Lending" color="bg-secondary" />
              <Pill text="Customer Commitment" color="bg-secondary" />
            </div>
          </div>
        </section>

        {/* Values 2 */}
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 py-4 md:py-12 grid lg:grid-cols-2 gap-8 mb-12 items-stretch">
          {/* Left */}
          <div className="order-2 lg:order-1 rounded-2xl p-0 lg:px-8 lg:py-10 content-center lg:text-left text-center">
            <h1 className="mt-0 mb-6 sm:my-6 md:my-8 text-4xl sm:text-5xl lg:text-6xl">
              Fast. Secure. Simple.
            </h1>

            <div>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start text-center lg:text-left lg:justify-start my-12">
                <span className="flex items-center mx-auto lg:mx-0">
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
                <div className="mx-auto lg:mx-0">
                  <h2 className="text-3xl sm:text-4xl">
                    Fast, simple experience
                  </h2>
                  <p>
                    Our technology is built for a smooth, efficient borrowing
                    experience.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start text-center lg:text-left lg:justify-start my-12">
                <span className="flex items-center mx-auto lg:mx-0">
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
                <div className="mx-auto lg:mx-0">
                  <h2 className="text-3xl sm:text-4xl">Secure by Design</h2>
                  <p>
                    Your data is encrypted and protected under strict privacy
                    standards.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start text-center lg:text-left lg:justify-start my-12">
                <span className="flex items-center mx-auto lg:mx-0">
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
                <div className="mx-auto lg:mx-0">
                  <h2 className="text-3xl sm:text-4xl">
                    Built for Australians
                  </h2>
                  <p>
                    Our Line of Credit is designed to be flexible, accessible
                    and easy to understand.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="order-1 lg:order-2 rounded-2xl px-4 flex items-bottom justify-center">
            <img
              src={WebsitePhoto}
              alt="Faster platform on phone and laptop"
              className="block w-full h-auto rounded-2xl"
            />
          </div>
        </section>

        {/* CTA */}
        <CTA />

        {/* FAQ */}
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-12 mb-12 content-center">
          <h1 className="mb-8 md:mb-12 text-4xl sm:text-5xl lg:text-6xl text-center">
            Customers frequently ask
          </h1>
          <FAQSection faqs={homeFaqs} />
        </section>
      </div>

      <Footer />
    </>
  );
}

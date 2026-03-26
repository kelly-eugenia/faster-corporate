import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import SEO from "../components/SEO";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import Slideshow from "../components/Slideshow";
import Collapsible from "../components/Collapsible";
import RegistrationForm from "../components/RegistrationForm";
import "../App.css";

function Table({
  rows,
}: {
  rows: Array<{ label: string; value: string; color?: string }>;
}) {
  return (
    <>
      {rows.map(({ label, value, color }, i) => (
        <div
          key={i}
          className="flex items-center justify-between py-3 border-b border-gray-300 last:border-0 text-base md:text-lg"
        >
          <span className="text-muted-primary font-medium">{label}</span>
          <span
            className={`font-bold text-right ${color ? color : "text-text-primary"}`}
          >
            {value}
          </span>
        </div>
      ))}
    </>
  );
}

const heroRows = [
  { label: "Distribution", value: "Monthly", color: "text-primary" },
  { label: "Security", value: "Loan Book Assets" },
  { label: "First Loss Capital", value: "10%" },
  { label: "Track Record", value: "3+ Years" },
  { label: "Operator Licence", value: "ACL 569825" },
  { label: "Reporting", value: "Monthly" },
];

const fundTerms = [
  {
    label: "Structure",
    value: "Fixed Income · Private Credit",
  },
  { label: "Investor Return", value: "11% p.a. Fixed", color: "text-primary" },
  { label: "Distribution", value: "Monthly", color: "text-accent" },
  { label: "Security", value: "Loan Book Assets" },
  { label: "First Loss Capital", value: "10%" },
  { label: "Loan Duration", value: "Short-term · Revolving" },
  { label: "Geography", value: "Australia Only" },
  { label: "Reporting", value: "Monthly" },
  { label: "Operator Licence", value: "ACL 569825" },
  { label: "Minimum Investment", value: "TBC — Register Below" },
];

const features = [
  {
    header: "Australian Credit Licence",
    text: (
      <p>
        ACL 569825 — fully regulated under the NCCP Act. All lending compliant
        with responsible lending obligations and NCC requirements.
      </p>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
        />
      </svg>
    ),
  },
  {
    header: "3+ Years Live Data",
    text: (
      <p>
        A proven operator with 3+ years of real collections history. Loan-level
        performance data verifiable on request.
      </p>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
        />
      </svg>
    ),
  },
  {
    header: "Institutional Debt Facility",
    text: (
      <p>
        A senior debt facility is already in place with an institutional private
        debt fund — validating the book quality and operational credibility of
        the business.
      </p>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
  },
  {
    header: "Institutional Payment Infrastructure",
    text: (
      <p>
        Millions processed monthly via institutional-grade direct debit and
        real-time payment rails. Automated collection and instant disbursement
        at scale.
      </p>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    header: "AI Credit Decisioning",
    text: (
      <p>
        Automated credit assessment using bureau data and bank statement
        analysis for every applicant — consistent decisions improving credit
        quality over time.
      </p>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
        />
      </svg>
    ),
  },
  {
    header: "AFCA Member",
    text: (
      <p>
        Full AFCA membership with regulated complaint resolution. Meets all
        consumer protection obligations under Australian financial services law.
      </p>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
];
const leftFeatures = features.slice(0, 3);
const rightFeatures = features.slice(3, 6);

const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6 text-accent mr-2 mt-[1.5px] shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Invest() {
  return (
    <>
      <SEO
        title="Faster.com.au | Fast, Flexible Line of Credit in Australia"
        description="Access a flexible Line of Credit designed for short-term cashflow needs. Clear fees, fast decisions, and technology built to work for you."
      />

      <NavBar />

      <div className="w-full mx-auto">
        {/* Hero */}
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 pt-16 sm:pt-24 lg:pt-40 pb-12 lg:pb-24 bg-gradient-to-tr from-secondary to-primary">
          <div className="xl:max-w-[1920px] mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-stretch">
              {/* Left */}
              <div className="pt-12 pb-0 lg:pb-12 flex flex-col justify-center">
                <div className="lg:mt-8 lg:text-left text-center">
                  <Pill
                    text="ACL 569825 · AFCA Member · Regulated Australian Lender"
                    color="bg-primary"
                  />

                  <div className="mt-8 lg:mt-12 flex flex-wrap lg:block gap-2 space-y-2 items-center justify-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-bg-primary">
                      Fixed Income.
                    </h1>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-accent">
                      11% p.a.
                    </h1>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-bg-primary">
                      Paid Monthly.
                    </h1>
                  </div>

                  <p className="mt-6 lg:mt-8 text-bg-secondary text-base sm:text-lg md:text-2xl">
                    A fixed return secured against a growing Australian consumer
                    credit book — with 3+ years of verifiable performance
                    history.
                  </p>

                  <div className="my-2 mt-8 flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-4">
                    <div className="rounded-full flex border bg-accent/20 px-4 py-2 w-fit">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="inline text-bg-secondary mr-2 size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="font-medium text-bg-secondary text-base md:text-lg">
                        Asset-Backed Security
                      </span>
                    </div>

                    <div className="rounded-full flex border bg-accent/20 px-4 py-2 w-fit">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="inline text-bg-secondary mr-2 size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="font-medium text-bg-secondary text-base md:text-lg">
                        Monthly Distributions
                      </span>
                    </div>

                    <div className="rounded-full flex border bg-accent/20 px-4 py-2 w-fit">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="inline text-bg-secondary mr-2 size-6"
                        >
                          <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                          <path
                            fillRule="evenodd"
                            d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="font-medium text-bg-secondary text-base md:text-lg">
                        Australian Credit Licence
                      </span>
                    </div>

                    <div className="rounded-full flex border bg-accent/20 px-4 py-2 w-fit">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="inline text-bg-secondary mr-2 size-6"
                        >
                          <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                        </svg>
                      </span>
                      <span className="font-medium text-bg-secondary text-base md:text-lg">
                        3+ Years Track Record
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <Link
                      to="#register"
                      className="btn my-10 lg:my-12 btn-primary text-xl sm:text-2xl font-medium"
                    >
                      Register Interest
                    </Link>
                    <Link
                      to="#how-it-works"
                      className="btn my-10 lg:my-12 btn-secondary-light text-xl sm:text-2xl font-medium"
                    >
                      How It Works
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex justify-center">
                <div className="w-full md:w-[70%] bg-bg-primary rounded-2xl text-center lg:text-left px-8 md:px-12 py-10 md:py-12 space-y-6">
                  <Pill text="Faster Fixed Income Fund" color="bg-secondary" />

                  <div className="bg-gradient-to-br from-secondary to-primary rounded-xl p-6 md:p-8 text-center">
                    <p className="font-medium text-base text-bg-secondary">
                      Fixed Annual Return
                    </p>
                    <h1 className="text-6xl md:text-8xl text-bg-primary">
                      11
                      <span className="text-5xl text-bg-secondary font-bold">
                        %
                      </span>
                    </h1>
                    <p className="text-bg-primary text-base md:text-xl">
                      Paid monthly · 2026
                    </p>
                  </div>

                  {/* Table */}
                  <Table rows={heroRows} />

                  <div className="mt-8 bg-bg-secondary/50 text-center rounded-xl p-6">
                    <p className=" text-text-primary text-sm font-medium">
                      For sophisticated investors only. Not financial advice.
                      Past performance is not indicative of future results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-secondary grid grid-cols-2 lg:grid-cols-4 px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-16 mb-8">
          <div className="text-center p-8 border-r-[0.5px] border-b-[0.5px] lg:border-b-0 border-bg-secondary/30 space-y-2">
            <h1 className="text-6xl md:text-7xl text-accent">11%</h1>
            <p className="text-xl md:text-3xl font-medium text-bg-secondary/70">
              Fixed Return p.a.
            </p>
          </div>

          <div className="text-center p-8 border-r-0 lg:border-r-[0.5px] border-b-[0.5px] lg:border-b-0 border-bg-secondary/30 space-y-2">
            <h1 className="text-6xl md:text-7xl text-bg-primary">$15M+</h1>
            <p className="text-xl md:text-3xl font-medium text-bg-secondary/70">
              Total Capital Lent
            </p>
          </div>

          <div className="text-center p-8 border-r-[0.5px] border-r-bg-secondary/30 space-y-2">
            <h1 className="text-6xl md:text-7xl text-bg-primary">3+</h1>
            <p className="text-xl md:text-3xl font-medium text-bg-secondary/70">
              Years Track Record
            </p>
          </div>

          <div className="text-center p-8 space-y-2">
            <h1 className="text-6xl md:text-7xl text-bg-primary">Monthly</h1>
            <p className="text-xl md:text-3xl font-medium text-bg-secondary/70">
              Distributions
            </p>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-12 mb-12 content-center"
        >
          <div className="pb-0 sm:pb-4 mb-8 content-center text-center">
            <Pill text="How it works" color="bg-secondary" />
            <h1 className="mt-8 lg:mt-12 my-2 text-4xl sm:text-5xl lg:text-6xl">
              Simple. Transparent. Monthly.
            </h1>
            <p className="text-lg md:text-2xl mt-4 md:mt-8">
              Investors provide capital to the Faster Fixed Income Fund, which
              deploys it into the Australian consumer credit book. Returns are
              fixed and distributed monthly.
            </p>
          </div>

          <div className="lg:max-w-6xl xl:max-w-[1440px] mx-auto grid md:grid-cols-3 gap-6 md:gap-10 items-stretch">
            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="rounded-full grid place-items-center h-12 w-12 mb-6 text-bg-primary bg-primary">
                <h3 className="font-semibold text-2xl">1</h3>
              </div>
              <h2 className="text-2xl sm:text-3xl">You Invest</h2>
              <p>
                Register your interest and complete investor verification. Once
                approved, your capital is deployed into the Faster Fixed Income
                Fund, secured against the underlying loan book.
              </p>
            </div>

            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="rounded-full grid place-items-center h-12 w-12 mb-6 text-bg-primary bg-primary">
                <h3 className="font-semibold text-2xl">2</h3>
              </div>
              <h2 className="text-2xl sm:text-3xl">Capital Is Deployed</h2>
              <p>
                Your capital funds Australian consumer loans through Faster — a
                licensed, automated lender with 3+ years of live performance
                history and institutional-grade infrastructure.
              </p>
            </div>

            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="rounded-full grid place-items-center h-12 w-12 mb-6 text-bg-primary bg-primary">
                <h3 className="font-semibold text-2xl">3</h3>
              </div>
              <h2 className="text-2xl sm:text-3xl">You Receive 11% p.a.</h2>
              <p>
                Returns are fixed at 11% per annum and paid directly to your
                nominated account every month. Fixed, predictable income — no
                variable exposure.
              </p>
            </div>
          </div>
        </section>

        {/* The fund */}
        <section className="bg-bg-secondary px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-16 mb-12">
          <div className="xl:max-w-[1920px] mx-auto">
            <div className="grid gap-16 lg:gap-32 lg:grid-cols-2 items-end">
              {/* Left */}
              <div className="text-center lg:text-left">
                <Pill text="About the Fund" color="bg-primary" />
                <h1 className="mt-8 lg:mt-12 my-2 text-4xl sm:text-5xl lg:text-6xl">
                  Built for yield.
                  <br />
                  Backed by assets.
                </h1>
                <p className="text-lg md:text-2xl mt-4 md:mt-8">
                  High-yield consumer credit exposure with a fixed investor
                  return — structured to protect capital while delivering
                  consistent monthly income.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-1 md:space-x-12 lg:space-x-0 mt-8 sm:mt-12 mx-auto lg:mx-0 lg:max-w-3xl">
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start text-center lg:text-left lg:justify-start my-6 lg:my-8">
                    <span className="flex items-center mx-auto lg:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-12 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div className="mx-auto lg:mx-0">
                      <h2 className="text-2xl sm:text-3xl">
                        Fixed 11% Return — Paid Monthly
                      </h2>
                      <p>
                        Investors receive a fixed 11% p.a., distributed monthly.
                        Predictable, fixed income — not subject to market
                        fluctuations or variable performance.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start text-center lg:text-left lg:justify-start my-6 lg:my-8">
                    <span className="flex items-center mx-auto lg:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-12 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div className="mx-auto lg:mx-0">
                      <h2 className="text-2xl sm:text-3xl">
                        Asset-Backed Security
                      </h2>
                      <p>
                        Your investment is secured against the underlying
                        Australian consumer loan book. A 10% first loss capital
                        buffer is maintained at all times, with covenant
                        monitoring providing an additional layer of protection.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start text-center lg:text-left lg:justify-start my-6 lg:my-8">
                    <span className="flex items-center mx-auto lg:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-12 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div className="mx-auto lg:mx-0">
                      <h2 className="text-2xl sm:text-3xl">
                        Short Duration, Revolving
                      </h2>
                      <p>
                        Short-term consumer loans with rapid capital turnover.
                        Continuous reinvestment at high yield with minimal
                        duration exposure and early default signals built in.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start text-center lg:text-left lg:justify-start my-6 lg:my-8">
                    <span className="flex items-center mx-auto lg:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-12 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div className="mx-auto lg:mx-0">
                      <h2 className="text-2xl sm:text-3xl">
                        Monthly Reporting
                      </h2>
                      <p>
                        Investors receive monthly covenant reports, portfolio
                        performance metrics, and collection summaries — full
                        transparency at all times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="bg-bg-primary rounded-2xl text-center lg:text-left p-8 md:p-10 mb-6 space-y-6">
                <Pill text="Fund Terms" color="bg-secondary" />

                {/* Table */}
                <Table rows={fundTerms} />
              </div>
            </div>
          </div>

          <Slideshow />
        </section>

        {/* Security */}
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-12 mb-12 content-center">
          <div className="pb-0 sm:pb-4 mb-8 content-center text-center">
            <Pill text="Security & risk" color="bg-secondary" />
            <h1 className="mt-8 lg:mt-12 my-2 text-4xl sm:text-5xl lg:text-6xl">
              Institutional-grade risk controls
            </h1>
            <p className="text-lg md:text-2xl mt-4 md:mt-8">
              A multi-layered covenant framework built to protect investor
              capital — monitored daily and reported monthly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 items-stretch">
            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="mb-4 rounded-full flex border bg-accent/10 px-4 py-2 w-fit">
                <span className="font-medium text-accent text-sm">Active</span>
              </div>
              <h2 className="text-2xl sm:text-3xl">Loss Rate Covenants</h2>
              <p>
                Ongoing vintage loss monitoring across loan cohorts with
                covenant limits to protect investor capital.
              </p>
            </div>

            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="mb-4 rounded-full flex border bg-primary/10 px-4 py-2 w-fit">
                <span className="font-medium text-primary text-sm">Daily</span>
              </div>
              <h2 className="text-2xl sm:text-3xl">Loan-to-Value Monitoring</h2>
              <p>
                Debt-to-asset ratio monitored daily. Covenant limits ensure the
                book remains adequately capitalised at all times. ✓ Daily
              </p>
            </div>

            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="mb-4 rounded-full flex border bg-primary/10 px-4 py-2 w-fit">
                <span className="font-medium text-primary text-sm">10%</span>
              </div>
              <h2 className="text-2xl sm:text-3xl">10% First Loss Capital</h2>
              <p>
                A 10% first loss capital buffer is maintained at all times —
                absorbing losses before they impact investor returns.
              </p>
            </div>

            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="mb-4 rounded-full flex border bg-accent/10 px-4 py-2 w-fit">
                <span className="font-medium text-accent text-sm">
                  Enforced
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl">Eligible Loan Criteria</h2>
              <p>
                Only performing Australian loans meeting defined eligibility
                criteria count toward secured assets.
              </p>
            </div>

            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="mb-4 rounded-full flex border bg-accent/10 px-4 py-2 w-fit">
                <span className="font-medium text-accent text-sm">Active</span>
              </div>
              <h2 className="text-2xl sm:text-3xl">
                Institutional Debt Facility
              </h2>
              <p>
                A senior debt facility is already in place with an institutional
                private debt fund — validating the book quality and providing
                additional capital discipline.
              </p>
            </div>

            <div className="bg-bg-secondary rounded-2xl p-8 content-center">
              <div className="mb-4 rounded-full flex border bg-primary/10 px-4 py-2 w-fit">
                <span className="font-medium text-primary text-sm">
                  Monthly
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl">Monthly Reporting</h2>
              <p>
                Full covenant status, portfolio performance, and collection
                summaries delivered to investors every month.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t border-[#D4D6E5]" />

        {/* Operator */}
        <div className="xl:max-w-[1920px] mx-auto mt-4">
          <section className="px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-12 grid gap-8 mb-12 items-stretch">
            <div className="pb-0 sm:pb-4 mb-8 content-center text-center">
              <Pill text="The operator" color="bg-secondary" />
              <h1 className="mt-8 lg:mt-12 my-2 text-4xl sm:text-5xl lg:text-6xl">
                Licensed. Proven. Institutionally backed.
              </h1>
              <p className="text-lg md:text-2xl mt-4 md:mt-8">
                Faster is operated by a fully licensed Australian consumer
                lender with institutional infrastructure and 3+ years of live
                performance data.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Left column */}
              <div className="flex flex-col gap-4 md:gap-8">
                {leftFeatures.map((feature) => (
                  <Collapsible
                    key={feature.header}
                    header={feature.header}
                    text={feature.text}
                    icon={feature.icon}
                  />
                ))}
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-4 md:gap-8">
                {rightFeatures.map((feature) => (
                  <Collapsible
                    key={feature.header + "-right"}
                    header={feature.header}
                    text={feature.text}
                    icon={feature.icon}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Form */}
        <section id="register" className="px-8 sm:px-12 lg:px-16 xl:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-b from-secondary to-primary rounded-2xl mb-24 gap-12 sm:gap-16 lg:gap-32 items-center px-8 sm:px-16 py-12 lg:py-16">
            <div>
              <div className="text-center lg:text-left">
                <Pill text="Register interest" color="bg-primary" />
                <h1 className="mt-8 lg:mt-12 my-6 md:my-8 text-4xl sm:text-5xl lg:text-6xl text-bg-primary">
                  Earn <span className="text-accent font-[800]">11%</span> p.a.
                  Paid monthly.
                </h1>
                <p className="font-medium text-lg md:text-xl mb-8 text-bg-primary">
                  Register your interest and our team will be in touch with the
                  full Information Memorandum, fund terms, and minimum
                  investment details.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <p className="text-base md:text-lg flex items-start leading-snug font-medium text-bg-secondary">
                  {checkIcon}
                  Fixed 11% return — no variable exposure
                </p>

                <p className="text-base md:text-lg flex items-start leading-snug font-medium text-bg-secondary">
                  {checkIcon}
                  Monthly distributions to your account
                </p>

                <p className="text-base md:text-lg flex items-start leading-snug font-medium text-bg-secondary">
                  {checkIcon}
                  10% first loss capital buffer
                </p>

                <p className="text-base md:text-lg flex items-start leading-snug font-medium text-bg-secondary">
                  {checkIcon}
                  3+ years of verifiable performance
                </p>

                <p className="text-base md:text-lg flex items-start leading-snug font-medium text-bg-secondary">
                  {checkIcon}
                  ACL 569825 — fully regulated operator
                </p>

                <p className="text-base md:text-lg flex items-start leading-snug font-medium text-bg-secondary">
                  {checkIcon}
                  AFSL 557810 — licensed fund (CAR 001319872)
                </p>
              </div>
            </div>

            <RegistrationForm />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

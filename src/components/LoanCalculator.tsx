import { useState } from "react";
import Pill from "../components/Pill";
import "../App.css";

const MIN_AMOUNT = 0;
const MAX_AMOUNT = 10000;
const STEP_AMOUNT = 100;

type Frequency = "weekly" | "fortnightly" | "monthly";

export default function LoanCalculator() {
  const [amount, setAmount] = useState(2000);
  const [frequency, setFrequency] = useState<Frequency>("weekly");

  // Currency formatters
  const currency0 = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  });

  const currency2 = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // --- Formula ---

  // Estimated repayment amount
  const repaymentAmount =
    frequency === "weekly" ? 55 : frequency === "fortnightly" ? 110 : 220;

  const frequencyLabel =
    frequency === "weekly"
      ? "per week"
      : frequency === "fortnightly"
      ? "per fortnight"
      : "per month";

  return (
    <div
      className="w-full max-w-full rounded-2xl border-4 border-secondary bg-bg-primary 
                px-5 py-6 sm:px-8 sm:py-8 shadow-sm overflow-hidden"
    >
      <div className="mt-0 md:mt-4 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <Pill text="Line of Credit calculator" color="bg-secondary" />

          {/* Frequency tabs */}
          <div className="mt-8 sm:mt-10 mb-2">
            <h2 className="text-xl sm:text-2xl -mb-2 font-medium text-text-primary">
              Select repayment frequency
            </h2>
            <div className="grid grid-cols-3 gap-2 justify-center text-sm sm:text-base">
              <button
                type="button"
                onClick={() => setFrequency("weekly")}
                className={`
                    ${
                      frequency === "weekly" ? "btn-primary" : "btn-secondary"
                    }`}
              >
                Weekly
              </button>

              <button
                type="button"
                onClick={() => setFrequency("fortnightly")}
                className={`
                    ${
                      frequency === "fortnightly"
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
              >
                Fortnightly
              </button>

              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                className={`
                    ${
                      frequency === "monthly" ? "btn-primary" : "btn-secondary"
                    }`}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Output card */}
      <div className="bg-bg-secondary mt-2 sm:mt-4 rounded-2xl px-4 py-8 sm:px-6 sm:py-10">
        {/* Output */}
        <div className="grid justify-center text-center">
          <p className="text-sm sm:text-base font-medium text-text-primary">
            Estimated repayment amount
          </p>
          <div className="my-2 text-4xl sm:text-5xl font-bold text-foreground leading-tight break-words">
            {currency2.format(repaymentAmount)}{" "}
            <span className="text-sm sm:text-base font-normal text-muted-primary align-middle">
              {frequencyLabel}
            </span>
          </div>
        </div>

        <div className="mt-2 rounded-2xl bg-bg-primary px-4 py-2 w-fit mx-auto">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="inline mr-2 size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </span>
          <span className="font-medium text-muted-primary text-xs sm:text-sm">
            Estimated amount for any credit limit from{" "}
            <strong>$0–$10,000</strong>
          </span>
        </div>

        <hr className="border-t border-[#D4D6E5] my-6 sm:my-8" />

        <p className="text-xs leading-snug text-muted-primary text-center sm:text-left">
          This Line of Credit calculator provides{" "}
          <strong>estimates only</strong>. Actual results may vary based on how
          and when funds are drawn, repaid, or re-drawn, and may be affected by
          interest, fees, charges, and repayment behaviour. <br />
          <br />
          All credit is{" "}
          <strong>
            subject to eligibility criteria, credit assessment, and approval
          </strong>
          . Final terms, costs, and repayments will be set out in your credit
          contract and disclosure documents. This is not an offer or financial
          advice.
        </p>
      </div>
    </div>
  );
}

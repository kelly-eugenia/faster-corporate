import { useState } from "react";
import Pill from "../components/Pill";
import "../App.css";

const MIN_AMOUNT = 0;
const MAX_AMOUNT = 10000;
const STEP_AMOUNT = 100;

const REPAYMENT_AMOUNT = {
  weekly: 55,
  fortnightly: 110,
  monthly: 220,
};

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
    frequency === "weekly"
      ? REPAYMENT_AMOUNT.weekly
      : frequency === "fortnightly"
      ? REPAYMENT_AMOUNT.fortnightly
      : REPAYMENT_AMOUNT.monthly;

  const durationPeriods = Math.ceil(Math.ceil(amount / repaymentAmount) * 1.2);

  const frequencyLabel =
    frequency === "weekly"
      ? "per week"
      : frequency === "fortnightly"
      ? "per fortnight"
      : "per month";

  const durationLabel =
    frequency === "weekly"
      ? "weeks"
      : frequency === "fortnightly"
      ? "fortnights"
      : "months";

  return (
    <div
      className="w-full max-w-full rounded-2xl border-4 border-secondary bg-bg-primary 
                px-5 py-6 sm:px-8 sm:py-8 shadow-sm overflow-hidden"
    >
      <div className="mt-0 md:mt-4 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <Pill text="Line of Credit calculator" color="bg-secondary" />

          {/* Loan amount */}
          <div className="my-6 sm:my-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-text-primary">
              How much would you like to borrow?
            </h2>

            <div className="p-4 border border-bg-secondary rounded-2xl">
              {/* Current amount */}
              <h1 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-primary">
                {currency0.format(amount)}
              </h1>

              {/* Amount slider */}
              <div className="mt-4">
                <input
                  type="range"
                  min={MIN_AMOUNT}
                  max={MAX_AMOUNT}
                  step={STEP_AMOUNT}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="range-slider w-full"
                />
                <div className="mt-2 flex justify-between text-xs sm:text-sm text-muted-primary">
                  <span>{currency0.format(MIN_AMOUNT)}</span>
                  <span>{currency0.format(MAX_AMOUNT)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Frequency tabs */}
          <div>
            <h2 className="text-base sm:text-lg -mb-2 font-medium text-text-primary">
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
        <div className="mb-4 grid justify-center text-center">
          <p className="text-sm sm:text-base font-medium text-text-primary">
            Estimated repayment amount
          </p>
          <div className="my-2 text-3xl sm:text-5xl font-bold text-foreground leading-tight break-words">
            {currency2.format(repaymentAmount)}{" "}
            <span className="text-xs sm:text-base font-normal text-muted-primary align-middle">
              {frequencyLabel}
            </span>
          </div>
          <div className="mt-0 sm:mt-2 rounded-2xl px-4 py-2 bg-bg-primary w-fit mx-auto">
            <p className="font-medium text-muted-primary text-sm sm:text-base">
              For approximately{" "}
              <span className="font-bold text-primary">
                {durationPeriods} {durationLabel}
              </span>
            </p>
          </div>
        </div>

        <hr className="border-t border-[#D4D6E5] my-6 sm:my-8" />

        <p className="text-xs leading-snug text-muted-primary text-center sm:text-left">
          This Line of Credit calculator provides{" "}
          <strong>estimates only</strong>. Results may vary based on how and
          when funds are drawn, repaid, or re-drawn, and may be affected by
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

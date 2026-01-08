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

  const getWeeklyRepayment = (amount: number): number => {
    if (amount < 500) return 55;
    if (amount < 1000) return 85;
    if (amount < 2000) return 110;
    return 200;
  };

  const weeklyBase = getWeeklyRepayment(amount);

  const frequencyLabel =
    frequency === "weekly"
      ? "per week"
      : frequency === "fortnightly"
      ? "per fortnight"
      : "per month";

  // Estimated repayment amount
  const perPayment =
    frequency === "weekly"
      ? weeklyBase
      : frequency === "fortnightly"
      ? weeklyBase * 2
      : weeklyBase * 4;

  return (
    <div
      className="w-full max-w-full rounded-2xl border-4 border-secondary bg-bg-primary 
                px-5 py-6 sm:px-8 sm:py-8 shadow-sm overflow-hidden"
    >
      <div className="mt-2 md:mt-8 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <Pill text="Line of Credit calculator" color="bg-secondary" />

          {/* Loan amount */}
          <div className="mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-text-primary">
              How much would you like to borrow?
            </h2>

            {/* Current amount */}
            <div className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              {currency0.format(amount)}
            </div>

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
      </div>

      {/* Output card */}
      <div className="bg-bg-secondary mt-8 sm:mt-10 rounded-2xl px-4 py-8 sm:px-6 sm:py-10">
        {/* Output */}
        <div className="mb-4 text-center">
          <p className="text-sm sm:text-base font-medium text-text-primary">
            Estimated repayment amount
          </p>
          <div className="mt-2 text-3xl sm:text-5xl font-bold text-foreground leading-tight break-words">
            {currency2.format(perPayment)}{" "}
            <span className="text-xs sm:text-base font-normal text-muted-primary align-middle">
              {frequencyLabel}
            </span>
          </div>
        </div>

        {/* Frequency tabs */}
        <div className="text-center">
          <div className="mt-2 inline-flex flex-wrap justify-center rounded-full border-[1.5px] border-secondary text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => setFrequency("weekly")}
              className={`m-0 px-4 py-3 sm:py-4 font-medium rounded-full transition 
                    ${
                      frequency === "weekly"
                        ? "bg-bg-primary"
                        : "text-secondary hover:text-primary"
                    }`}
            >
              Weekly
            </button>

            <button
              type="button"
              onClick={() => setFrequency("fortnightly")}
              className={`m-0 px-4 py-3 sm:py-4 font-medium rounded-full transition
                    ${
                      frequency === "fortnightly"
                        ? "bg-bg-primary"
                        : "text-secondary hover:text-primary"
                    }`}
            >
              Fortnightly
            </button>

            <button
              type="button"
              onClick={() => setFrequency("monthly")}
              className={`m-0 px-4 py-3 sm:py-4 font-medium rounded-full transition
                    ${
                      frequency === "monthly"
                        ? "bg-bg-primary"
                        : "text-secondary hover:text-primary"
                    }`}
            >
              Monthly
            </button>
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

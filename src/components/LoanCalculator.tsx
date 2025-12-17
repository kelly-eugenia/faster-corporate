import React, { useState } from "react";
import Pill from "../components/Pill";
import "../App.css";

const MIN_AMOUNT = 500;
const MAX_AMOUNT = 10000;
const STEP_AMOUNT = 100;

// Product constants
const DRAWDOWN_RATE = 0.2; // 20%
const ANNUAL_RATE = 0.47; // 47% p.a.
const MONTHLY_FEE = 15;
const REPAYMENT_FEE = 3.5;

// Term assumption: 1 month
const MONTHLY_INTEREST_RATE = ANNUAL_RATE / 12; // ≈ 3.92% per month

type Frequency = "weekly" | "fortnightly";

const LoanCalculator: React.FC = () => {
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

  // --- Calculations for fixed 1-month term ---

  const drawdownFee = amount * DRAWDOWN_RATE;
  const interest = amount * MONTHLY_INTEREST_RATE;
  const monthlyFees = MONTHLY_FEE;

  // Number of repayments over the month
  const numberOfPayments = frequency === "weekly" ? 4 : 2;
  const frequencyLabel = frequency === "weekly" ? "per week" : "per fortnight";

  // Per-repayment fees
  const repaymentFees = numberOfPayments * REPAYMENT_FEE;

  // Total charges and total repayable
  const totalCharges = drawdownFee + interest + monthlyFees + repaymentFees;
  const totalRepayable = amount + totalCharges;

  // Estimated repayment amount
  const perPayment = totalRepayable / numberOfPayments;

  return (
    <div className="relative w-full rounded-2xl border border-4 border-secondary bg-bg-primary px-6 pt-6 pb-8 shadow-sm sm:px-10 sm:pt-2 sm:pb-10">
      <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <Pill text="Line of Credit calculator" color="bg-secondary" />

          {/* Loan amount */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-text-primary">
              How much would you like to borrow?
            </h2>

            {/* Current amount */}
            <div className="mt-8 text-3xl font-semibold tracking-tight text-foreground">
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
                className="range-slider"
              />
              <div className="mt-2 flex justify-between text-sm text-muted-primary">
                <span>{currency0.format(MIN_AMOUNT)}</span>
                <span>{currency0.format(MAX_AMOUNT)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Output card */}
      <div className="bg-bg-secondary mt-12 rounded-2xl px-6 py-10">
        {/* Output */}
        <div className="mb-4 text-center">
          <p className="text-md font-medium text-text-primary">
            Estimated repayment amount
          </p>
          <div className="mt-2 text-5xl font-bold text-foreground">
            {currency2.format(perPayment)}{" "}
            <span className="text-base font-normal text-muted-primary">
              {frequencyLabel}
            </span>
          </div>
        </div>

        {/* Frequency tabs */}
        <div className="text-center">
          <div className="mt-2 inline-flex rounded-full border border-2 border-secondary text-xs">
            <button
              type="button"
              onClick={() => setFrequency("weekly")}
              className={`m-0 rounded-full px-4 py-4 font-medium transition ${
                frequency === "weekly"
                  ? "bg-bg-primary border border-0 border-r-2 border-secondary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Weekly
            </button>
            <button
              type="button"
              onClick={() => setFrequency("fortnightly")}
              className={`m-0 rounded-full px-4 py-4 font-medium transition ${
                frequency === "fortnightly"
                  ? "bg-bg-primary border border-0 border-l-2 border-secondary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Fortnightly
            </button>
          </div>
        </div>

        <hr className="border-t border-[#D4D6E5] my-8" />

        <p className="text-xs leading-snug text-muted-primary">
          This is an estimate only. It assumes you use the full amount for 1
          month, repay it in {numberOfPayments}{" "}
          {frequency === "weekly" ? "weekly" : "fortnightly"} repayments, and
          don't miss or dishonour any payments. Your actual costs will depend on
          how much you draw, how quickly you repay, and may be subject to
          further fees.
        </p>
      </div>
    </div>
  );
};

export default LoanCalculator;

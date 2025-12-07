import React, { useState } from "react";
import Pill from "../components/Pill";
import "../App.css";

const MIN_AMOUNT = 500;
const MAX_AMOUNT = 10000;
const STEP_AMOUNT = 100;

const MIN_WEEKS = 4; // 1 month
const MAX_WEEKS = 12; // 3 months
const STEP_WEEKS = 1;

// Product constants
const ESTABLISHMENT_RATE = 0.2; // 20%
const ANNUAL_RATE = 0.47; // 47% p.a.
const MONTHLY_FEE = 15;
const REPAYMENT_FEE = 3.5;

type Frequency = "weekly" | "fortnightly";

const LoanCalculator: React.FC = () => {
  const [amount, setAmount] = useState(2000);
  const [termWeeks, setTermWeeks] = useState(8); // default 8 weeks
  const [frequency, setFrequency] = useState<Frequency>("fortnightly");

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

  // --- Derived values based on sliders + frequency ---

  const termDays = termWeeks * 7;
  const monthsInTerm = termDays / 30; // rough month length

  const numberOfPayments =
    frequency === "weekly" ? termWeeks : Math.max(1, Math.ceil(termWeeks / 2)); // at least 1 payment

  const frequencyLabel = frequency === "weekly" ? "per week" : "per fortnight";

  const termLabel = `${termWeeks} week${termWeeks === 1 ? "" : "s"}`;

  // Fees & interest
  const establishmentFee = amount * ESTABLISHMENT_RATE;

  const dailyRate = ANNUAL_RATE / 365;
  const interest = amount * dailyRate * termDays;

  const monthlyFees = MONTHLY_FEE * monthsInTerm;

  const repaymentFees = numberOfPayments * REPAYMENT_FEE;

  const totalCharges =
    establishmentFee + interest + monthlyFees + repaymentFees;

  const totalRepayable = amount + totalCharges;

  const perPayment = totalRepayable / numberOfPayments;

  return (
    <div className="relative w-full rounded-2xl border border-4 border-primary bg-bg-primary px-6 pt-6 pb-8 shadow-sm sm:px-10 sm:pt-2 sm:pb-10">
      <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <Pill text="Loan calculator" color="bg-secondary" />
          {/* Loan amount */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-text-primary">
              How much would you like to borrow?
            </h2>

            {/* Current amount */}
            <div className="mt-8 text-3xl font-semibold tracking-tight text-foreground">
              {currency0.format(amount)}
            </div>

            {/* Amount slider */}
            <div>
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

          <hr className="border-t border-[#D4D6E5] my-8" />

          {/* Loan term */}
          <div>
            <h2 className="text-2xl font-semibold text-text-primary">
              How long would you take to repay?
            </h2>

            {/* Current amount */}
            <div className="mt-8 text-3xl font-semibold tracking-tight text-foreground">
              {termLabel}
            </div>

            {/* Term slider */}
            <div>
              <input
                type="range"
                min={MIN_WEEKS}
                max={MAX_WEEKS}
                step={STEP_WEEKS}
                value={termWeeks}
                onChange={(e) => setTermWeeks(Number(e.target.value))}
                className="range-slider mt-3"
              />
              <div className="mt-2 flex justify-between text-sm text-muted-primary">
                <span>{MIN_WEEKS} weeks</span>
                <span>{MAX_WEEKS} weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-bg-secondary mt-12 rounded-2xl p-8">
        {/* Output */}
        <div className="mb-4 text-center">
          <p className="text-md font-medium text-text-primary">
            Monthly repayment amount
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
          <div className="mt-3 inline-flex rounded-full border border-2 border-primary text-xs">
            <button
              type="button"
              onClick={() => setFrequency("weekly")}
              className={`m-0 rounded-full px-4 py-4 font-medium transition ${
                frequency === "weekly"
                  ? "bg-bg-primary text-primary border border-0 border-r-2 border-primary"
                  : "text-primary hover:text-secondary"
              }`}
            >
              Weekly
            </button>
            <button
              type="button"
              onClick={() => setFrequency("fortnightly")}
              className={`m-0 rounded-full px-4 py-4 font-medium transition ${
                frequency === "fortnightly"
                  ? "bg-bg-primary text-primary border border-0 border-l-2 border-primary"
                  : "text-primary hover:text-secondary"
              }`}
            >
              Fortnightly
            </button>
          </div>
        </div>

        <hr className="border-t border-[#D4D6E5] my-8" />

        {/* Fee breakdown */}
        {/*
        <div className="grid gap-4 text-xs text-foreground sm:grid-cols-4 sm:text-sm justify-between">
          <div>
            <div className="font-medium">Establishment fee</div>
            <div className="text-muted-primary">
              20% of your loan amount (charged once)
            </div>
            <div className="mt-1 text-lg font-semibold">
              {currency2.format(establishmentFee)}
            </div>
          </div>

          <div>
            <div className="font-medium">Estimated interest</div>
            <div className="text-muted-primary">
              47% p.a., over {termLabel.toLowerCase()}
            </div>
            <div className="mt-1 text-lg font-semibold">
              {currency2.format(interest)}
            </div>
          </div>

          <div>
            <div className="font-medium">Other fees</div>
            <div className="text-muted-primary">
              ${MONTHLY_FEE} / month + ${REPAYMENT_FEE.toFixed(2)} per payment
            </div>
            <div className="mt-1 text-lg font-semibold">
              {currency2.format(monthlyFees + repaymentFees)}
            </div>
          </div>

          <div>
            <div className="font-medium">Estimated total to repay</div>
            <div className="text-muted-primary">
              Over {termLabel.toLowerCase()}
            </div>
            <div className="mt-1 text-lg font-semibold">
              {currency2.format(totalRepayable)}
            </div>
          </div>
        </div>
        */}

        <p className="mt-3 text-[11px] leading-snug text-muted-primary">
          This is an estimate only. It assumes you draw the full amount once,
          repay over {termLabel.toLowerCase()} with {numberOfPayments}{" "}
          {frequency === "weekly" ? "weekly" : "fortnightly"} repayments, and
          don&apos;t miss or dishonour any payments. Your actual cost will
          depend on how much you draw, how long you keep your balance, and
          whether any extra fees or repayments apply.
        </p>
      </div>
    </div>
  );
};

export default LoanCalculator;

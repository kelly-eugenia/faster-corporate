import React, { useMemo, useState } from "react";

const MIN_AMOUNT = 300;
const MAX_AMOUNT = 5000;
const STEP_AMOUNT = 100;

const MIN_WEEKS = 4;
const MAX_WEEKS = 12;
const STEP_WEEKS = 1;

// Fee assumptions
const ESTABLISHMENT_FEE_RATE = 0.2; // 20%
const MONTHLY_FEE_RATE = 0.04; // 4% per month

const currency = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 2,
});

const Calc: React.FC = () => {
  const [amount, setAmount] = useState(3300);
  const [weeks, setWeeks] = useState(12);

  const { weeklyPayment, totalRepayable } = useMemo(() => {
    const months = weeks / 4; // simple conversion, adjust if needed
    const total =
      amount * (1 + ESTABLISHMENT_FEE_RATE + MONTHLY_FEE_RATE * months);
    const weekly = total / weeks;

    return {
      weeklyPayment: weekly,
      totalRepayable: total,
    };
  }, [amount, weeks]);

  return (
    <div className="bg-gradient-to-br from-bg-secondary to-[#709FFF] rounded-2xl p-12">
      {/* Top rows – single grid with 3 columns */}
      <div className="grid items-center gap-x-16 gap-y-8 md:grid-cols-[auto,1fr,auto]">
        {/* ROW 1 – Loan Amount */}
        {/* Col 1: label */}
        <p className="text-lg font-semibold">Loan Amount</p>

        {/* Col 2: slider + min/max */}
        <div className="space-y-2">
          <input
            type="range"
            min={MIN_AMOUNT}
            max={MAX_AMOUNT}
            step={STEP_AMOUNT}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="range-slider w-full"
          />
          <div className="flex justify-between text-sm text-muted-primary">
            <span>{currency.format(MIN_AMOUNT)}</span>
            <span>{currency.format(MAX_AMOUNT)}</span>
          </div>
        </div>

        {/* Col 3: current value */}
        <div className="text-right">
          <p className="text-xs uppercase tracking-wide text-muted-primary">
            Amount
          </p>
          <p className="text-2xl font-semibold">{currency.format(amount)}</p>
        </div>

        {/* ROW 2 – Loan Term */}
        {/* Col 1: label */}
        <p className="text-lg font-semibold">Loan Term (weeks)</p>

        {/* Col 2: slider + min/max */}
        <div className="space-y-2">
          <input
            type="range"
            min={MIN_WEEKS}
            max={MAX_WEEKS}
            step={STEP_WEEKS}
            value={weeks}
            onChange={(e) => setWeeks(Number(e.target.value))}
            className="range-slider w-full"
          />
          <div className="flex justify-between text-sm text-muted-primary">
            <span>{MIN_WEEKS}</span>
            <span>{MAX_WEEKS}</span>
          </div>
        </div>

        {/* Col 3: current value */}
        <div className="text-right">
          <p className="text-xs uppercase tracking-wide text-muted-primary">
            Term
          </p>
          <p className="text-2xl font-semibold">{weeks}</p>
        </div>
      </div>

      {/* Weekly payment */}
      <div className="mt-4 text-center">
        <p className="text-xl md:text-2xl">Approximate Weekly Payment</p>
        <div className="mt-3 flex items-baseline justify-center gap-1">
          <span className="text-2xl md:text-3xl font-semibold">$</span>
          <span className="text-4xl md:text-5xl font-extrabold text-primary drop-shadow-sm">
            {weeklyPayment.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Total repayment line */}
      <p className="mt-4 text-center font-bold text-primary text-sm md:text-base">
        {currency.format(amount)} over {weeks} weeks – Approximate Total
        Repayment {currency.format(totalRepayable)}
      </p>

      {/* Legal copy */}
      <p className="mt-12 text-center text-sm leading-relaxed md:text-sm">
        Loan Amount of $1,000 over the period of up 84 days, repayable weekly
        (12 weekly repayments). $1,000(Principal Amount) + $200(20%
        Establishment Fee) + $120(4% Per Month Service Fee Over 12 Weeks) =
        $1,320 total repayable in 12 weekly instalments of $110.
        <br />
        Under the current legislation, most small personal loan providers don’t
        charge an annual interest rate (you’ll know this as an APR %). The
        maximum you will be charged is a flat 20% Establishment Fee and a flat
        4% Monthly Fee. The maximum comparison rate on loans between $300 and
        $2000 is 199.43%. This comparison rate is true only for the examples
        given and may not include all fees and charges. Different terms, fees or
        other loan amounts might result in a different comparison rate.
      </p>
    </div>
  );
};

export default Calc;

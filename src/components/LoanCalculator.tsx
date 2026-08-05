import { useState, useMemo } from "react";
import "../App.css";

type Frequency = "weekly" | "fortnightly" | "monthly";

const FIXED_REPAYMENT = {
  weekly: { amount: 55.0, per: "week", unit: "weeks", daysPerPeriod: 7 },
  fortnightly: {
    amount: 110.0,
    per: "fortnight",
    unit: "fortnights",
    daysPerPeriod: 14,
  },
  monthly: { amount: 220.0, per: "month", unit: "months", daysPerPeriod: 30 },
};

const ANNUAL_RATE = 0.47;

const fmtAUD = (n: number) =>
  "$" +
  n.toLocaleString("en-AU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

function calcRepayment(drawn: number, frequency: Frequency) {
  const f = FIXED_REPAYMENT[frequency];
  const dailyRate = ANNUAL_RATE / 365;
  // Reducing-balance, NON-compounding
  // Interest is only ever charged on outstanding PRINCIPAL. Any interest that a
  // payment doesn't cover accumulates in a separate `unpaidInterest` bucket that
  // itself never earns interest — so interest can never be charged on interest.
  // Each payment is applied to outstanding interest first, then to principal.
  let principal = drawn;
  let unpaidInterest = 0;
  let periods = 0;
  let totalInterest = 0;
  const maxPeriods =
    frequency === "monthly" ? 120 : frequency === "fortnightly" ? 260 : 520;

  while ((principal > 0 || unpaidInterest > 0) && periods < maxPeriods) {
    // Interest accrues on principal only.
    const interestThisPeriod = principal * dailyRate * f.daysPerPeriod;
    totalInterest += interestThisPeriod;
    unpaidInterest += interestThisPeriod;

    // Apply this period's payment: interest first, then principal.
    let payment = f.amount;
    const toInterest = Math.min(payment, unpaidInterest);
    unpaidInterest -= toInterest;
    payment -= toInterest;
    const toPrincipal = Math.min(payment, principal);
    principal -= toPrincipal;

    periods++;
  }

  return {
    totalInterest,
    totalRepaid: drawn + totalInterest,
    periods,
    maxPeriods,
    f,
  };
}

const freqOptions: { key: Frequency; label: string; sub: string }[] = [
  { key: "weekly", label: "Weekly", sub: "$55.00 / week" },
  { key: "fortnightly", label: "Fortnightly", sub: "$110.00 / fortnight" },
  { key: "monthly", label: "Monthly", sub: "$220.00 / month" },
];

export default function LoanCalculator() {
  const [drawAmount, setDrawAmount] = useState(1000);
  const [frequency, setFrequency] = useState<Frequency>("weekly");

  const { totalInterest, totalRepaid, periods, maxPeriods, f } = useMemo(
    () => calcRepayment(drawAmount, frequency),
    [drawAmount, frequency],
  );

  const sliderPct = ((drawAmount - 100) / (10000 - 100)) * 100;
  const termLabel =
    periods >= maxPeriods
      ? "10+ years"
      : `${periods} ${periods === 1 ? f.per : f.unit}`;

  return (
    <div className="w-full rounded-card-lg border-2 border-border-default bg-bg-primary p-6 sm:p-10 text-left shadow-card overflow-hidden">
      {/* Draw amount */}
      <div className="mt-4 mb-8">
        <h2 className="text-[17px] font-semibold text-text-primary mb-3">
          How much do you want to draw?
        </h2>
        <div className="flex items-baseline gap-2.5 mb-3">
          <span className="text-[38px] font-bold tracking-[-0.025em] text-primary leading-none tabular-nums">
            ${drawAmount.toLocaleString("en-AU")}
          </span>
          <span className="text-[13px] text-muted-secondary">
            from your approved limit
          </span>
        </div>
        <input
          type="range"
          min="100"
          max="10000"
          step="50"
          value={drawAmount}
          onChange={(e) => setDrawAmount(Number(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none outline-none cursor-pointer"
          style={{
            background: `linear-gradient(90deg, #1C41E6 ${sliderPct}%, #E7EAF3 ${sliderPct}%)`,
          }}
        />
        <div className="flex justify-between text-[11px] text-ink-light mt-2">
          <span>$100</span>
          <span>$10,000</span>
        </div>
      </div>

      {/* Frequency */}
      <div className="mb-8 md:mb-6">
        <h2 className="text-[17px] font-semibold text-text-primary mb-3">
          How often will you repay?
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {freqOptions.map(({ key, label, sub }) => (
            <button
              key={key}
              type="button"
              onClick={() => setFrequency(key)}
              className={`grid py-3 px-1 sm:px-2 rounded-[10px] border font-semibold text-[12px] sm:text-[14px] cursor-pointer transition-all text-center
                ${
                  frequency === key
                    ? "bg-primary border-primary text-bg-primary"
                    : "bg-white border-border-default text-muted-primary hover:border-primary hover:text-primary"
                }`}
            >
              {label}
              <small className="text-wrap block text-[10px] sm:text-[11px] leading-tight font-medium mt-0.5 opacity-75">
                {sub}
              </small>
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="bg-bg-secondary rounded-2xl px-4 py-6 sm:px-6 sm:py-8">
        <p className="text-[18px] leading-[1.45] text-text-primary font-medium tracking-[-0.005em] mb-4 sm:mb-5">
          You'd draw{" "}
          <strong className="text-primary font-bold tabular-nums">
            ${drawAmount.toLocaleString("en-AU")}
          </strong>{" "}
          and repay{" "}
          <strong className="text-primary font-bold tabular-nums">
            {fmtAUD(f.amount)}
          </strong>{" "}
          every <strong className="text-primary font-bold">{f.per}</strong> for
          about <strong className="text-primary font-bold">{termLabel}</strong>.
        </p>

        {/* Results */}
        <div className="grid grid-cols-2 border border-border-default rounded-xl overflow-hidden bg-bg-primary mb-4">
          {[
            {
              lbl: "Total interest",
              val: fmtAUD(totalInterest),
              sub: "47% p.a.",
            },
            { lbl: "Total to repay", val: fmtAUD(totalRepaid), sub: "" },
          ].map((cell, i) => (
            <div
              key={i}
              className="p-[14px_16px] border-r border-border-default last:border-r-0"
            >
              <div className="text-[10px] text-muted-secondary uppercase tracking-[0.12em] font-semibold mb-1.5">
                {cell.lbl}
              </div>
              <div className="text-[18px] font-bold text-text-primary tracking-[-0.015em] tabular-nums">
                {cell.val}
              </div>
              {cell.sub && (
                <div className="text-[11px] text-muted-secondary mt-0.5">
                  {cell.sub}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-[10px] leading-snug text-muted-primary text-left">
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

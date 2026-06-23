import { Link } from "react-router-dom";
import React, { useState } from "react";

import SEO from "../components/SEO";
import { useSEO } from "../utils/useSEO";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import FAQSection from "../components/FAQSection";

import "../App.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const ANATOMY_CARDS = [
  {
    tag: "FEE 01",
    name: "One-time drawdown fee",
    rate: "20%",
    rateSub: "%",
    rateUnit: "of your approved limit",
    rows: [
      {
        k: "Triggered",
        v: (
          <>
            The first time you draw funds from your line of credit, ever. Not
            when you&apos;re approved — when you actually move money.
          </>
        ),
      },
      {
        k: "Calculated",
        v: (
          <>
            <strong className="text-text-primary font-semibold">
              Limit × 20%
            </strong>
            . Based on your <em>approved limit</em>, not the amount you choose
            to draw on that first transaction.
          </>
        ),
      },
      {
        k: "Charged to",
        v: (
          <>
            Added to your outstanding balance at the moment of your first
            drawdown. You don&apos;t pay it from your bank account separately.
          </>
        ),
      },
      {
        k: "Recurs?",
        v: (
          <>
            <strong className="text-text-primary font-semibold">No.</strong>{" "}
            Once paid, you can draw and repay against your limit as many times
            as you want with no further drawdown fee.
          </>
        ),
      },
    ],
    exCalc: (
      <>
        <span className="text-muted-secondary">$450 limit </span>× 20%{" "}
        <span className="text-primary font-bold bg-bg-primary px-2 py-0.5 rounded ml-1">
          = $90.00 fee
        </span>
      </>
    ),
    exNote:
      "If you're later approved for a higher limit, no additional drawdown fee is charged on the existing portion — only 20% × the increase.",
  },
  {
    tag: "FEE 02",
    name: "Daily interest while in use",
    rate: "47%",
    rateSub: "p.a.",
    rateUnit: "on outstanding balance",
    rows: [
      {
        k: "Triggered",
        v: (
          <>
            Each day you have an outstanding balance. If your balance reaches
            $0, no interest accrues — even if your limit stays open.
          </>
        ),
      },
      {
        k: "Calculated",
        v: (
          <>
            <strong className="text-text-primary font-semibold">
              Outstanding balance × (47% ÷ 365)
            </strong>
            , applied daily. Charged against your balance once per repayment
            period.
          </>
        ),
      },
      {
        k: "Compounds?",
        v: (
          <>
            <strong className="text-text-primary font-semibold">No.</strong>{" "}
            Interest does not capitalise — accrued interest doesn&apos;t earn
            further interest of its own.
          </>
        ),
      },
      {
        k: "Reduce it by",
        v: (
          <>
            Repaying sooner, or making extra repayments. There&apos;s{" "}
            <strong className="text-text-primary font-semibold">
              no early-repayment fee
            </strong>{" "}
            — every extra dollar comes off your balance.
          </>
        ),
      },
    ],
    exCalc: (
      <>
        <span className="text-muted-secondary">$540 balance </span>× (47% ÷ 365)
        × 31 days{" "}
        <span className="text-primary font-bold bg-bg-primary px-2 py-0.5 rounded ml-1">
          = $21.55 month one
        </span>
      </>
    ),
    exNote:
      "Balance shrinks as you repay, so each subsequent month's interest is smaller. The schedule below shows it month-by-month.",
  },
];

const WORKED_SUMMARY_ROWS: {
  label: React.ReactNode;
  amount: string;
  total?: boolean;
}[] = [
  { label: "Limit drawn", amount: "$450.00" },
  {
    label: (
      <>
        Drawdown fee{" "}
        <span className="font-mono text-[12px] text-bg-secondary/50">
          · 20% × $450
        </span>
      </>
    ),
    amount: "$90.00",
  },
  {
    label: (
      <>
        Total interest{" "}
        <span className="font-mono text-[12px] text-bg-secondary/50">
          · 47% p.a., 4 weeks
        </span>
      </>
    ),
    amount: "$17.64",
  },
  { label: "Total to repay", amount: "$557.64", total: true },
];

interface SchedRow {
  week: string;
  opening: string;
  interest: string;
  repayment: React.ReactNode;
  closing: string;
}

const SCHEDULE_ROWS: SchedRow[] = [
  {
    week: "Draw",
    opening: "$0.00",
    interest: "—",
    repayment: (
      <>
        +$450.00 drawn
        <br />
        <span className="text-bg-secondary/60 text-[12px]">
          +$90.00 drawdown fee
        </span>
      </>
    ),
    closing: "$540.00",
  },
  {
    week: "W1",
    opening: "$540.00",
    interest: "$4.87",
    repayment: "− $55.00",
    closing: "$489.87",
  },
  {
    week: "W2",
    opening: "$489.87",
    interest: "$4.42",
    repayment: "− $55.00",
    closing: "$439.29",
  },
  {
    week: "W3",
    opening: "$439.29",
    interest: "$3.96",
    repayment: "− $55.00",
    closing: "$388.25",
  },
  {
    week: "W4",
    opening: "$388.25",
    interest: "$3.50",
    repayment: "− $55.00",
    closing: "$336.75",
  },
];

interface FeeTableRow {
  scope?: string;
  title?: string;
  desc?: React.ReactNode;
  when?: React.ReactNode;
  whenSub?: string;
  amount?: string;
  amountSub?: string;
  amountKind?: "charged" | "penalty" | "zero";
}

const FEE_TABLE: FeeTableRow[] = [
  { scope: "Costs of borrowing" },
  {
    title: "One-time drawdown fee",
    desc: (
      <>
        Charged once at your first drawdown.{" "}
        <a href="#anatomy" className="text-primary font-semibold">
          See anatomy ↑
        </a>
      </>
    ),
    when: "First drawdown only.",
    whenSub: "Once per account, lifetime",
    amount: "20%",
    amountSub: "of your approved limit",
    amountKind: "charged",
  },
  {
    title: "Interest",
    desc: (
      <>
        Calculated daily on outstanding balance, no compounding.{" "}
        <a href="#anatomy" className="text-primary font-semibold">
          See anatomy ↑
        </a>
      </>
    ),
    when: "Daily, on any outstanding balance.",
    whenSub: "Stops when balance = $0",
    amount: "47%",
    amountSub: "p.a.",
    amountKind: "charged",
  },
  { scope: "If a payment fails" },
  {
    title: "Late payment fee",
    desc: "Charged if a scheduled repayment isn't received by the due date. Charged once per missed payment, not per day overdue.",
    when: "When a scheduled payment is overdue.",
    whenSub: "Max once per missed payment",
    amount: "$35.00",
    amountSub: "per missed payment",
    amountKind: "penalty",
  },
  {
    title: "Dishonour fee",
    desc: "Charged if a direct debit fails (e.g. insufficient funds in your nominated account). Reimburses the bank's chargeback to us.",
    when: "When a direct debit is returned.",
    whenSub: "Per failed debit",
    amount: "$15.00",
    amountSub: "per failed debit",
    amountKind: "penalty",
  },
  { scope: "Things we don't charge" },
  {
    title: "Establishment fee",
    desc: "To set up your account or assess your application.",
    when: "—",
    amount: "$0",
    amountKind: "zero",
  },
  {
    title: "Monthly account-keeping fee",
    desc: "To keep your line of credit open.",
    when: "—",
    amount: "$0",
    amountKind: "zero",
  },
  {
    title: "Redraw fee",
    desc: "For any subsequent drawdown after your first.",
    when: "—",
    amount: "$0",
    amountKind: "zero",
  },
  {
    title: "Early-repayment penalty",
    desc: "For paying off your balance ahead of schedule.",
    when: "—",
    amount: "$0",
    amountKind: "zero",
  },
  {
    title: "Annual fee",
    desc: "For having an open line of credit.",
    when: "—",
    amount: "$0",
    amountKind: "zero",
  },
  {
    title: "Statement fee",
    desc: "For paper or PDF statements.",
    when: "—",
    amount: "$0",
    amountKind: "zero",
  },
];

const CT_MINI_ROWS = [
  { label: "Drawdown fee · once", value: "$640.00" },
  { label: "Repayment · weekly", value: "$55.00" },
  { label: "Total interest · est.", value: "$432.18" },
];

const REVIEWS = [
  {
    stars: 5,
    title: "Knew exactly what I was paying",
    body: "The fee structure was clearer than anywhere else I looked. No surprises after I drew the money.",
    author: "Kyle",
    time: "4 days ago",
  },
  {
    stars: 5,
    title: "Repaid early, no penalty",
    body: "Paid the whole balance off six weeks early after a tax refund came in. They actually credited the unused interest back. Nice surprise.",
    author: "Hannah K.",
    time: "2 weeks ago",
  },
  {
    stars: 4,
    title: "Not the cheapest, but the clearest",
    body: "Did the math against my credit card cash advance and it cost more. But for me it was about knowing the total upfront. Will use again.",
    author: "James O.",
    time: "1 month ago",
  },
  {
    stars: 5,
    title: "Drew again, no new fee",
    body: "Repaid the first lot, then drew again two months later for a car repair. Didn't get hit with another 20% fee — same as advertised.",
    author: "Andrew Reynolds",
    time: "May 13",
  },
];

const FEES_FAQS = [
  {
    question: "How is interest calculated, day-by-day?",
    answer: (
      <>
        Each day, we take your outstanding balance, multiply by{" "}
        <code className="font-mono text-[13px] bg-bg-secondary px-1.5 py-0.5 rounded text-primary">
          47% ÷ 365
        </code>{" "}
        (≈ 0.1288% per day), and add that as accrued interest. We charge it
        against your balance once per repayment period. Interest stops the day
        your balance reaches $0 — so paying anything extra immediately reduces
        the next day&apos;s interest charge.
      </>
    ),
  },
  {
    question:
      "What's the 221.36% representative APR and why is it so different from 47%?",
    answer: (
      <>
        The 47% is just the interest rate. The{" "}
        <strong className="text-text-primary">representative APR</strong>{" "}
        includes the 20% drawdown fee, annualised over the example term. Because
        the drawdown fee is paid once but the example only runs for a month, the
        equivalent annualised rate is high. On a longer-term draw, the same fee
        structure produces a lower APR. We use the $450 / 1-month example
        because that&apos;s the typical first-time draw on this product.
      </>
    ),
  },
  {
    question:
      "If I draw, repay, and then draw again — do I pay another 20% drawdown fee?",
    answer: (
      <>
        <strong className="text-text-primary">No.</strong> The 20% fee is
        charged once, on the first drawdown against your limit, ever. After that
        you can repay and re-draw against the same limit as many times as you
        want — only interest applies to subsequent draws. If your limit is later
        increased, the 20% applies only to the increase, not the original
        amount.
      </>
    ),
  },
  {
    question: "Are there any fees if I repay early or in full?",
    answer: (
      <>
        <strong className="text-text-primary">None.</strong> No early-repayment
        fee, no balance closeout fee, no minimum interest period. Pay any
        amount, any time, with no penalty — and you only pay interest for the
        days the balance was outstanding.
      </>
    ),
  },
  {
    question: "When does the $35 late fee and $15 dishonour fee get charged?",
    answer: (
      <>
        <strong className="text-text-primary">$35 late fee</strong> applies once
        a scheduled repayment is overdue — once per missed payment, not per day
        overdue.{" "}
        <strong className="text-text-primary">$15 dishonour fee</strong> applies
        if a direct debit fails (e.g. insufficient funds). Both are waived if
        you contact us before the due date and agree a revised arrangement, or
        if you&apos;re in hardship.
      </>
    ),
  },
  {
    question: "Why is my weekly repayment $55 regardless of how much I draw?",
    answer: (
      <>
        We use a fixed-amount repayment schedule so your per-period commitment
        stays predictable. Drawing more <em>extends</em> the time you&apos;ll
        spend repaying — it doesn&apos;t raise the weekly amount. You can always
        make extra repayments to clear it sooner.
      </>
    ),
  },
  {
    question: "What happens to the interest I'd have paid if I repay early?",
    answer: (
      <>
        You simply don&apos;t pay it. Interest only accrues on days you have an
        outstanding balance — repay early and the future days never happen.
        There&apos;s nothing to refund because we never charged it.
      </>
    ),
  },
  {
    question: "Where can I see all of this in writing before I commit?",
    answer: (
      <>
        Every fee disclosed on this page is also set out in your{" "}
        <a href="#" className="text-primary font-semibold">
          Credit Contract
        </a>
        , with the exact amounts and timings for your specific limit. You see
        the contract before you accept — never after.
      </>
    ),
  },
];

// ─── Small presentational helpers ──────────────────────────────────────────────

function TrustpilotStars({ count }: { count: number }) {
  return (
    <div className="inline-flex gap-px bg-trustpilot p-[3px_4px]">
      {Array.from({ length: 5 }).map((_, j) => (
        <span
          key={j}
          className={`w-3.5 h-3.5 inline-flex items-center justify-center ${
            j < count ? "bg-bg-primary" : "bg-border-default"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-3.5 h-3.5 ${
              j < count ? "text-trustpilot" : "text-border-default"
            }`}
          >
            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Fees() {
  const seo = useSEO("fees");

  return (
    <>
      <SEO
        title={
          seo?.title ||
          "Faster.com.au | Fees — every cost, in writing, before you borrow"
        }
        description={
          seo?.description ||
          "Every cost that can apply to a Faster Line of Credit — what triggers each fee, how it's calculated, the worked example behind our representative APR, and what we don't charge."
        }
        ogTitle={seo?.ogTitle || "Faster.com.au | Fees, itemised"}
        ogDescription={
          seo?.ogDescription ||
          "Two charged fees, two penalty fees, and a full list of the things we don't charge. The same content that appears in your credit contract."
        }
        canonicalUrl={seo?.canonicalUrl}
      />

      <div className="font-sans antialiased text-text-primary bg-bg-primary">
        <NavBar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden section-padding py-[6em] sm:py-[7em] bg-hero-gradient">
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage:
                "linear-gradient(180deg, transparent, black 30%, black 70%, transparent)",
            }}
          />
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8">
            <div className="max-w-[780px]">
              <Pill text="Fees" variant="light" className="mb-[22px]" />
              <h1
                className="text-[clamp(40px,5.2vw,68px)] leading-[1.0] tracking-[-0.025em] font-bold mb-[22px] text-bg-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Fees,{" "}
                <em className="not-italic bg-text-gradient bg-clip-text text-transparent italic font-medium">
                  itemised
                </em>
                .
              </h1>
              <p className="text-[18px] text-bg-secondary/80 max-w-[64ch] leading-[1.6] m-0">
                This page sets out every cost that can apply to a Faster Line of
                Credit — what triggers each fee, how it&apos;s calculated, the
                worked example we use for our representative APR, and the things
                we don&apos;t charge at all. The same content appears in your
                credit contract before you commit.
              </p>
            </div>
          </div>
        </section>

        {/* ── Anatomy of each fee ── */}
        <section id="anatomy" className="section-padding bg-bg-primary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="text-center max-w-[740px] mx-auto mb-14">
              <Pill text="Anatomy of each fee" className="mb-[18px]" />
              <h2
                className="text-[clamp(34px,4vw,50px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                What triggers each fee, how it&apos;s calculated, what it costs.
              </h2>
              <p className="text-[18px] text-muted-secondary m-0 leading-[1.55]">
                Two boxes. Every input, every formula, every example — laid out
                the same way the credit contract sets them out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ANATOMY_CARDS.map((card) => (
                <div
                  key={card.tag}
                  className="bg-bg-secondary border border-border-subtle rounded-card-lg p-[32px_32px_28px] flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 pb-[22px] border-b border-border-subtle mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold mb-3.5">
                        <span className="bg-bg-primary border border-border-subtle text-primary px-2 py-0.5 rounded-md font-mono">
                          {card.tag}
                        </span>
                      </div>
                      <h3 className="text-[22px] font-bold tracking-[-0.015em] text-text-primary m-0 leading-[1.2]">
                        {card.name}
                      </h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-[38px] font-bold tracking-[-0.025em] text-primary leading-none tabular-nums">
                        {card.rate}
                        <small className="text-[14px] text-muted-secondary font-semibold ml-0.5">
                          {card.rateSub}
                        </small>
                      </div>
                      <div className="text-[12px] text-muted-secondary mt-1 font-mono">
                        {card.rateUnit}
                      </div>
                    </div>
                  </div>

                  {/* Rows */}
                  <div className="flex flex-col gap-3.5 mb-6">
                    {card.rows.map((row) => (
                      <div
                        key={row.k}
                        className="grid grid-cols-[90px_1fr] sm:grid-cols-[110px_1fr] gap-4 items-start text-[14.5px]"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-secondary font-semibold pt-0.5">
                          {row.k}
                        </span>
                        <span className="text-muted-primary leading-[1.5]">
                          {row.v}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Example */}
                  <div className="mt-auto bg-bg-primary border border-border-subtle rounded-[12px] p-[18px_20px]">
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold mb-2.5">
                      Example
                    </div>
                    <div className="text-[14.5px] text-muted-primary leading-[1.6] font-mono">
                      {card.exCalc}
                    </div>
                    <div className="text-[12px] text-ink-light mt-2.5 leading-[1.45]">
                      {card.exNote}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APR equal-prominence strip ── */}
        <section
          id="apr"
          role="region"
          aria-label="Representative APR disclosure"
          className="bg-[#0a1140] text-bg-primary border-y border-[rgba(255,208,102,0.18)]"
        >
          <div className="w-full max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[auto_auto_1fr_auto] gap-4 md:gap-8 items-center py-[26px]">
            <div className="flex flex-col gap-1">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#ffd066] font-semibold">
                Representative APR
              </div>
              <div className="text-[clamp(36px,5vw,44px)] font-bold tracking-[-0.025em] text-[#ffd066] leading-none tabular-nums">
                221.36%
                <small className="text-[16px] text-[rgba(255,208,102,0.7)] font-semibold ml-1.5">
                  p.a.
                </small>
              </div>
            </div>
            <div className="hidden md:block w-px h-14 bg-[rgba(255,208,102,0.22)]" />
            <p className="text-[14.5px] text-bg-primary/85 leading-[1.55] max-w-[78ch] m-0">
              <strong className="text-bg-primary">
                This is what 20% upfront + 47% p.a. interest costs once you
                express it as a single annualised comparison rate.
              </strong>{" "}
              Calculated on a $450 limit drawn in full and repaid over one month
              ($90 drawdown + $17.64 interest = $107.64). Different amounts and
              repayment periods will produce different rates.
            </p>
            <a
              href="#worked"
              className="inline-flex items-center gap-1.5 text-[13px] text-[#ffd066] font-mono border border-[rgba(255,208,102,0.35)] px-3.5 py-2 rounded-lg hover:bg-[rgba(255,208,102,0.08)] transition-colors whitespace-nowrap justify-self-start md:justify-self-auto"
            >
              See the working →
            </a>
          </div>
        </section>

        {/* ── Worked example ── */}
        <section
          id="worked"
          className="section-padding relative overflow-hidden bg-fees-gradient text-bg-primary"
        >
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="text-center max-w-[740px] mx-auto mb-14">
              <Pill
                text="Worked example"
                variant="light"
                className="mb-[18px]"
              />
              <h2
                className="text-[clamp(34px,4vw,50px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-bg-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                $450 drawn in full. Repaid over four weeks.
              </h2>
              <p className="text-[18px] text-bg-secondary/70 m-0 leading-[1.55]">
                This is the canonical example we use for the representative APR.
                Every cent shown — and every weekly repayment — comes from the
                formulas on the cards above.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-9 items-start">
              {/* Summary */}
              <aside className="bg-bg-primary/5 border border-bg-primary/10 rounded-card-lg p-[32px_32px_28px] backdrop-blur-lg lg:sticky lg:top-[92px]">
                <div className="font-mono text-[13px] uppercase tracking-[0.14em] text-[#b8c4ff] mb-4">
                  Summary
                </div>
                <p className="text-[17px] leading-[1.45] text-bg-secondary/85 mb-[22px]">
                  You&apos;re approved for a{" "}
                  <strong className="text-bg-primary font-semibold">
                    $450 limit
                  </strong>
                  , draw the full amount, and repay{" "}
                  <strong className="text-bg-primary font-semibold">
                    $55 / week
                  </strong>{" "}
                  over the next four weeks.
                </p>

                <table className="w-full border-collapse text-[14.5px]">
                  <tbody>
                    {WORKED_SUMMARY_ROWS.map((row, i) => (
                      <tr key={i} className={row.total ? "" : ""}>
                        <td
                          className={`py-3.5 border-b border-bg-primary/10 text-bg-secondary/80 ${
                            row.total
                              ? "font-bold text-bg-primary text-[17px] border-b-0 pt-[18px]"
                              : ""
                          }`}
                        >
                          {row.label}
                        </td>
                        <td
                          className={`py-3.5 text-right font-mono tabular-nums text-bg-primary font-medium border-b border-bg-primary/10 ${
                            row.total
                              ? "font-bold text-[21px] border-b-0 pt-[18px]"
                              : ""
                          }`}
                        >
                          {row.amount}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td
                        colSpan={2}
                        className="pt-1.5 pb-3.5 text-bg-secondary/55 text-[12.5px] font-mono"
                      >
                        Representative APR · 221.36% p.a.
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-[22px] pt-[22px] border-t border-bg-primary/10 text-[12.5px] text-bg-secondary/55 font-mono leading-[1.6]">
                  Repaying sooner reduces interest. Repaying later (within your
                  contract terms) increases it. Late and dishonour fees are not
                  part of this example — they apply only if a payment fails.
                </div>
              </aside>

              {/* Schedule */}
              <div className="bg-bg-primary/[0.04] border border-bg-primary/[0.08] rounded-card-lg p-[28px_8px_18px]">
                <div className="flex items-center justify-between px-[22px] pb-[18px] border-b border-bg-primary/[0.08]">
                  <div className="text-[18px] font-bold text-bg-primary tracking-[-0.01em]">
                    Repayment schedule
                  </div>
                  <div className="inline-flex gap-1 bg-bg-primary/[0.06] border border-bg-primary/10 rounded-lg p-[3px]">
                    <button className="bg-[rgba(184,196,255,0.16)] text-bg-primary px-3 py-1.5 text-[12px] rounded-md font-semibold font-mono tracking-[0.04em] uppercase">
                      Weekly
                    </button>
                    <button className="bg-transparent text-bg-secondary/70 px-3 py-1.5 text-[12px] rounded-md font-semibold font-mono tracking-[0.04em] uppercase cursor-pointer">
                      Fortnightly
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        {[
                          "Week",
                          "Opening balance",
                          "Interest accrued",
                          "Repayment",
                        ].map((h) => (
                          <th
                            key={h}
                            className="text-left px-[22px] py-3 text-[11px] text-bg-secondary/50 font-semibold font-mono uppercase tracking-[0.12em] bg-bg-primary/[0.02]"
                          >
                            {h}
                          </th>
                        ))}
                        <th className="text-right px-[22px] py-3 text-[11px] text-bg-secondary/50 font-semibold font-mono uppercase tracking-[0.12em] bg-bg-primary/[0.02]">
                          Closing balance
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {SCHEDULE_ROWS.map((row, i) => (
                        <tr key={i}>
                          <td className="px-[22px] py-3 text-[13.5px] border-b border-bg-primary/[0.05] font-mono">
                            <span className="inline-block px-[7px] py-0.5 bg-[rgba(184,196,255,0.12)] text-[#b8c4ff] rounded text-[11px] font-semibold">
                              {row.week}
                            </span>
                          </td>
                          <td className="px-[22px] py-3 text-[13.5px] text-bg-secondary/85 border-b border-bg-primary/[0.05] font-mono tabular-nums">
                            {row.opening}
                          </td>
                          <td className="px-[22px] py-3 text-[13.5px] text-bg-secondary/85 border-b border-bg-primary/[0.05] font-mono tabular-nums">
                            {row.interest}
                          </td>
                          <td className="px-[22px] py-3 text-[13.5px] text-bg-secondary/85 border-b border-bg-primary/[0.05] font-mono tabular-nums leading-[1.4]">
                            {row.repayment}
                          </td>
                          <td className="px-[22px] py-3 text-[13.5px] text-bg-secondary/85 border-b border-bg-primary/[0.05] font-mono tabular-nums text-right">
                            {row.closing}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td
                          colSpan={5}
                          className="text-center text-bg-secondary/40 py-2 text-[11px] font-mono"
                        >
                          … continues through W11 …
                        </td>
                      </tr>
                      <tr>
                        <td className="px-[22px] py-3 text-[13.5px] border-b border-bg-primary/[0.05] font-mono">
                          <span className="inline-block px-[7px] py-0.5 bg-[rgba(184,196,255,0.12)] text-[#b8c4ff] rounded text-[11px] font-semibold">
                            W10
                          </span>
                        </td>
                        <td className="px-[22px] py-3 text-[13.5px] text-bg-secondary/85 border-b border-bg-primary/[0.05] font-mono tabular-nums">
                          $54.18
                        </td>
                        <td className="px-[22px] py-3 text-[13.5px] text-bg-secondary/85 border-b border-bg-primary/[0.05] font-mono tabular-nums">
                          $0.49
                        </td>
                        <td className="px-[22px] py-3 text-[13.5px] text-bg-secondary/85 border-b border-bg-primary/[0.05] font-mono tabular-nums">
                          − $54.67
                        </td>
                        <td className="px-[22px] py-3 text-[13.5px] text-bg-secondary/85 border-b border-bg-primary/[0.05] font-mono tabular-nums text-right">
                          $0.00
                        </td>
                      </tr>
                      <tr className="bg-[rgba(125,220,145,0.05)] text-[#c8f3d2]">
                        <td className="px-[22px] py-3 text-[13.5px] font-mono">
                          <span className="inline-block px-[7px] py-0.5 bg-[rgba(125,220,145,0.15)] text-[#7ddc91] rounded text-[11px] font-semibold">
                            Done
                          </span>
                        </td>
                        <td
                          colSpan={3}
                          className="px-[22px] py-3 text-[13.5px] font-mono"
                        >
                          Total repaid: <strong>$557.64</strong> ($450 drawn +
                          $90 fee + $17.64 interest)
                        </td>
                        <td className="px-[22px] py-3 text-[13.5px] font-mono tabular-nums text-right">
                          $0.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Complete fee list ── */}
        <section id="all" className="section-padding bg-bg-secondary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="max-w-[760px] mb-14">
              <Pill
                text="The complete fee list"
                variant="white"
                className="mb-[18px]"
              />
              <h2
                className="text-[clamp(30px,3.4vw,42px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Everything that can be charged — in one table.
              </h2>
              <p className="text-[16px] text-muted-secondary m-0 leading-[1.55]">
                The two charged fees are detailed above. This is the canonical
                reference: every fee, every $0 row that says what we don&apos;t
                charge.
              </p>
            </div>

            <div className="bg-bg-primary border border-border-subtle rounded-card-lg overflow-hidden shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left px-6 py-[18px] text-[11px] font-mono uppercase tracking-[0.14em] text-muted-secondary font-semibold bg-[#eef1f8] border-b border-border-subtle w-1/2">
                        Fee
                      </th>
                      <th className="text-left px-6 py-[18px] text-[11px] font-mono uppercase tracking-[0.14em] text-muted-secondary font-semibold bg-[#eef1f8] border-b border-border-subtle">
                        When it applies
                      </th>
                      <th className="text-right px-6 py-[18px] text-[11px] font-mono uppercase tracking-[0.14em] text-muted-secondary font-semibold bg-[#eef1f8] border-b border-border-subtle">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEE_TABLE.map((row, i) =>
                      row.scope ? (
                        <tr key={i}>
                          <td
                            colSpan={3}
                            className="bg-[#eef1f8] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold border-b border-border-subtle"
                          >
                            {row.scope}
                          </td>
                        </tr>
                      ) : (
                        <tr key={i}>
                          <td className="px-6 py-[22px] border-b border-border-subtle align-top text-muted-primary text-[14.5px] leading-[1.5]">
                            <span className="font-bold text-text-primary text-[16px] tracking-[-0.005em] mb-1 block">
                              {row.title}
                            </span>
                            {row.desc}
                          </td>
                          <td className="px-6 py-[22px] border-b border-border-subtle align-top text-muted-primary text-[14.5px] leading-[1.5]">
                            {row.when}
                            {row.whenSub && (
                              <div className="text-[12.5px] text-muted-secondary font-mono tracking-[0.02em] mt-1">
                                {row.whenSub}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-[22px] border-b border-border-subtle align-top text-right">
                            <span
                              className={`font-mono tabular-nums font-bold tracking-[-0.015em] leading-none ${
                                row.amountKind === "zero"
                                  ? "text-[#00824f] text-[18px]"
                                  : row.amountKind === "penalty"
                                    ? "text-[#b87900] text-[22px]"
                                    : "text-primary text-[22px]"
                              }`}
                            >
                              {row.amount}
                              {row.amountSub && (
                                <small className="block text-[11px] text-muted-secondary font-medium mt-1 tracking-[0.02em]">
                                  {row.amountSub}
                                </small>
                              )}
                            </span>
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-[18px] p-[18px_22px] bg-bg-primary border border-dashed border-border-default rounded-[12px] text-[13px] text-muted-secondary leading-[1.6] flex gap-3 items-start">
              <span className="w-[22px] h-[22px] flex-shrink-0 rounded-full bg-primary text-bg-primary inline-flex items-center justify-center font-bold text-[12px] font-mono mt-px">
                i
              </span>
              <div>
                <strong className="text-muted-primary">
                  In financial difficulty?
                </strong>{" "}
                Late and dishonour fees are waived if you contact us before a
                payment is due and we agree a hardship arrangement. Call the
                National Debt Helpline <strong>1800&nbsp;007&nbsp;007</strong>{" "}
                for free, independent advice — or{" "}
                <a href="#" className="text-primary font-semibold">
                  apply for hardship support directly
                </a>
                .
              </div>
            </div>
          </div>
        </section>

        {/* ── Calculator teaser ── */}
        <section className="section-padding bg-bg-secondary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div
              className="border border-bg-secondary rounded-card-lg p-8 md:p-[48px_56px] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center shadow-card"
              style={{
                background: "linear-gradient(135deg, #FCFDFF 0%, #EAEDF5 100%)",
              }}
            >
              <div>
                <Pill
                  text="Run your own numbers"
                  variant="white"
                  className="mb-3.5"
                />
                <h3
                  className="text-[30px] font-bold tracking-[-0.02em] mb-3 text-text-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Try the calculator with your scenario.
                </h3>
                <p className="text-[16px] text-muted-secondary mb-6 leading-[1.55] max-w-[44ch]">
                  The figures above all use our canonical $450 worked example.
                  The calculator lets you slide in any draw amount from $100 to
                  $10,000 against weekly, fortnightly or monthly repayments —
                  and shows the same fee structure applied to your numbers.
                </p>
                <Link to="/#calculator" className="btn btn-primary group">
                  Open the calculator
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Mini card */}
              <div
                className="bg-bg-primary border border-border-subtle rounded-card p-[22px]"
                aria-hidden="true"
                style={{ boxShadow: "0 6px 20px -6px rgba(11,16,36,0.1)" }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold mb-3">
                  If you drew
                </div>
                <div className="text-[28px] font-bold text-primary tracking-[-0.02em] tabular-nums mb-3">
                  $3,200
                </div>
                <div className="h-1.5 bg-border-subtle rounded-full mb-3.5 overflow-hidden">
                  <div className="w-[32%] h-full bg-primary rounded-full" />
                </div>
                {CT_MINI_ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between text-[12px] text-muted-secondary font-mono py-1"
                  >
                    <span>{row.label}</span>
                    <strong className="text-text-primary font-semibold">
                      {row.value}
                    </strong>
                  </div>
                ))}
                <div className="flex justify-between text-[12px] font-mono py-1 mt-2 pt-2.5 border-t border-border-subtle">
                  <span className="text-text-primary">Total to repay</span>
                  <strong className="text-primary text-[14px]">
                    $4,272.18
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trustpilot ── */}
        <section className="section-padding bg-bg-primary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="text-center mb-6">
              <Pill text="What customers say about the fees" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {REVIEWS.map((r, i) => (
                <div
                  key={i}
                  className="bg-bg-secondary border border-border-subtle rounded-[6px] p-[18px_20px] flex flex-col gap-2.5 min-h-[200px]"
                >
                  <div className="flex items-center justify-between">
                    <TrustpilotStars count={r.stars} />
                    <span className="text-[11px] text-muted-secondary font-medium inline-flex items-center gap-1">
                      <span className="w-3 h-3 bg-trustpilot rounded-full inline-flex items-center justify-center text-bg-primary text-[9px] font-bold">
                        ✓
                      </span>
                      Verified
                    </span>
                  </div>
                  <h4 className="text-[14px] font-bold text-text-primary m-0 leading-[1.3] tracking-[-0.005em]">
                    {r.title}
                  </h4>
                  <p className="text-[13px] text-muted-primary leading-[1.5] m-0 flex-1">
                    {r.body}
                  </p>
                  <div className="text-[11.5px] text-muted-secondary">
                    <strong className="text-muted-primary font-semibold">
                      {r.author}
                    </strong>
                    , {r.time}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6 text-[13.5px] text-muted-secondary">
              Rated <strong className="text-text-primary">4.4 / 5</strong> based
              on <strong className="text-text-primary">1,500 reviews</strong>.
              Showing reviews mentioning fees, costs and clarity.
              <span className="inline-flex items-center gap-1.5 text-text-primary font-semibold ml-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-trustpilot"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                Trustpilot
              </span>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-padding bg-bg-secondary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="text-center mb-12">
              <Pill text="Fees FAQ" variant="white" className="mb-[18px]" />
              <h2
                className="text-[clamp(34px,4vw,52px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                The questions people ask before they apply.
              </h2>
              <p className="text-[18px] text-muted-secondary m-0 leading-[1.55]">
                If you don&apos;t see your question here, ask{" "}
                <a
                  href="mailto:support@faster.com.au"
                  className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
                >
                  support@faster.com.au
                </a>{" "}
                — we&apos;ll add it.
              </p>
            </div>

            <FAQSection faqs={FEES_FAQS} white />
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section
          id="apply"
          className="section-padding relative overflow-hidden bg-final-gradient"
        >
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="bg-bg-primary/[0.04] border border-bg-primary/10 rounded-card-lg p-8 md:p-[56px_64px] grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center relative overflow-hidden">
              <div>
                <Pill
                  text="Ready when you are"
                  variant="light"
                  className="mb-[18px]"
                />
                <h2
                  className="text-[clamp(34px,4vw,48px)] leading-[1.05] tracking-[-0.025em] font-bold mb-4 text-bg-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Now you&apos;ve seen the receipt. Apply in about five minutes.
                </h2>
                <p className="text-[17px] text-bg-secondary/72 mb-7 max-w-[46ch] leading-[1.55]">
                  You&apos;ll see the same fees again in your credit contract
                  before you commit — no hidden terms, no after-the-fact
                  changes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-[22px]">
                  {[
                    "Australian resident, 18+",
                    "Government-issued ID",
                    "90+ days of regular income",
                    "Bank account in your name",
                  ].map((req) => (
                    <div
                      key={req}
                      className="flex items-center gap-2.5 text-[13.5px] text-bg-secondary/78"
                    >
                      <span className="w-[22px] h-[22px] rounded-full bg-[rgba(184,196,255,0.16)] text-[#b8c4ff] inline-flex items-center justify-center flex-shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="w-3 h-3"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      {req}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-left lg:text-right">
                <Link to="/apply" className="btn btn-primary text-base group">
                  Apply Now
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <div className="mt-3.5 text-[12.5px] text-bg-secondary/55 font-mono">
                  Takes 5 minutes · No impact on credit score for pre-qual
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

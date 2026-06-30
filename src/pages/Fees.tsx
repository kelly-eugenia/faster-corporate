import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

import React, { type ReactNode } from "react";

import SEO from "../components/SEO";
import { useSEO } from "../utils/useSEO";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import FAQSection from "../components/FAQSection";
import Reviews from "../components/Reviews";

import { FEES_FAQS } from "../utils/faqs";
import CTA from "../components/CTA";

import "../App.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

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
  { scope: "Cost of borrowing" },
  {
    title: "Interest",
    desc: "Calculated daily on outstanding balance. No compounding — accrued interest doesn't earn further interest.",
    when: "Daily, on any outstanding balance.",
    whenSub: "Stops when balance = $0",
    amount: "47%",
    amountSub: "p.a.",
    amountKind: "charged",
  },
  { scope: "Only in specific circumstances" },
  {
    title: "Manual reassessment fee",
    desc: (
      <>
        20% of your drawdown amount. Charged only if we need to manually
        reassess your account — for example, if your circumstances have changed
        significantly since your original approval.{" "}
        <strong className="text-text-primary">
          Never charged on your first loan.
        </strong>
      </>
    ),
    when: "Only if a manual reassessment is required.",
    whenSub: "Never on your first loan.",
    amount: "20%",
    amountSub: "of drawdown amount",
    amountKind: "penalty",
  },
  { scope: "Things we don't charge" },
  {
    title: "Establishment fee",
    desc: "To set up your account or assess your application for the first time.",
    when: "—",
    amount: "$0",
    amountKind: "zero",
  },
  {
    title: "Early-repayment fee",
    desc: "For paying off your balance ahead of schedule.",
    when: "—",
    amount: "$0",
    amountKind: "zero",
  },
];

interface SchedRow {
  period: string;
  open: string;
  interest: string;
  repaid: string;
  close: string;
  isDraw?: boolean;
  isDone?: boolean;
  doneText?: ReactNode;
}

const WORKED_SUMMARY_ROWS: {
  label: string;
  value: string;
  total?: boolean;
  zero?: boolean;
}[] = [
  { label: "Limit drawn", value: "$450.00" },
  { label: "Drawdown / establishment fee", value: "$0.00", zero: true },
  { label: "Total interest · 47% p.a. over ~9 weeks", value: "$19.62" },
  { label: "Total you repay", value: "$469.62", total: true },
];

const SCHEDULE_ROWS: SchedRow[] = [
  {
    period: "Draw",
    open: "$0.00",
    interest: "—",
    repaid: "+$450.00",
    close: "$450.00",
    isDraw: true,
  },
  {
    period: "W1",
    open: "$450.00",
    interest: "+$4.06",
    repaid: "−$55.00",
    close: "$399.06",
  },
  {
    period: "W2",
    open: "$399.06",
    interest: "+$3.60",
    repaid: "−$55.00",
    close: "$347.66",
  },
  {
    period: "W3",
    open: "$347.66",
    interest: "+$3.13",
    repaid: "−$55.00",
    close: "$295.79",
  },
  {
    period: "W4",
    open: "$295.79",
    interest: "+$2.67",
    repaid: "−$55.00",
    close: "$243.46",
  },
  {
    period: "W5",
    open: "$243.46",
    interest: "+$2.19",
    repaid: "−$55.00",
    close: "$190.65",
  },
  {
    period: "W6",
    open: "$190.65",
    interest: "+$1.72",
    repaid: "−$55.00",
    close: "$137.37",
  },
  {
    period: "W7",
    open: "$137.37",
    interest: "+$1.24",
    repaid: "−$55.00",
    close: "$83.61",
  },
  {
    period: "W8",
    open: "$83.61",
    interest: "+$0.75",
    repaid: "−$55.00",
    close: "$29.36",
  },
  {
    period: "W9",
    open: "$29.36",
    interest: "+$0.26",
    repaid: "−$29.62",
    close: "$0.00",
  },
  {
    period: "Done",
    open: "",
    interest: "",
    repaid: "",
    close: "",
    isDone: true,
    doneText: (
      <>
        Total repaid: <span className="text-primary font-bold">$469.62</span>{" "}
        ($450 drawn + $19.62 interest)
      </>
    ),
  },
];

const CT_MINI_ROWS = [
  { label: "Repayment · weekly", value: "$55.00" },
  { label: "Total interest · est.", value: "$19.62" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Fees() {
  const seo = useSEO("fees");

  return (
    <>
      <SEO
        title={seo?.title || "Our Fees — Clear and Upfront | Faster.com.au"}
        description={
          seo?.description ||
          "The cost of a Faster Line of Credit is simple: interest only on your outstanding balance, calculated daily. No upfront fee on your first loan, no hidden charges."
        }
        ogTitle={seo?.ogTitle || "Our Fees — Clear and Upfront | Faster.com.au"}
        ogDescription={
          seo?.ogDescription ||
          "Interest at 47% p.a. on your outstanding balance is the only cost while you're borrowing. No drawdown fee, no establishment fee, no monthly fee."
        }
        canonicalUrl={seo?.canonicalUrl}
      />

      <div className="font-sans antialiased text-text-primary bg-bg-primary">
        <NavBar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden hero-padding bg-hero-gradient">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="z-10 w-full max-w-[1440px] grid text-center lg:text-left justify-center lg:justify-start mx-auto px-6"
          >
            <div className="max-w-[880px]">
              <Pill text="Fees" variant="light" className="mb-[22px]" />
              <h1
                className="text-[clamp(40px,5.2vw,68px)] leading-[1.0] tracking-[-0.025em] font-bold mb-[22px] text-bg-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Our fees,{" "}
                <em className="bg-text-gradient bg-clip-text text-transparent font-[700] italic">
                  clear and upfront
                </em>
                .
              </h1>
              <p className="text-[16px] sm:text-[18px] text-bg-secondary/80 max-w-[64ch] leading-[1.6] mx-auto lg:mx-0">
                Interest at 47% p.a. on your outstanding balance, calculated
                daily and only on what you’ve actually drawn. There’s nothing
                ongoing and no early-repayment penalty. You’ll see the exact
                figures in your credit contract before you commit.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── How interest works ── */}
        <section id="interest" className="section-padding bg-bg-primary">
          <div className="w-full max-w-[1440px] mx-auto px-6">
            <div className="text-center max-w-[800px] mx-auto mb-8 sm:mb-12 md:mb-14">
              <Pill text="What we charge" className="mb-[18px]" />
              <h2
                className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                One cost. Calculated daily on what you owe.
              </h2>
              <p className="text-[clamp(16px,3.5vw,18px)] text-muted-secondary m-0 leading-[1.6]">
                Interest accrues each day you have a balance. It stops the
                moment your balance reaches $0.
              </p>
            </div>

            <div className="max-w-[880px] mx-auto">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-bg-secondary border border-border-subtle rounded-card-lg p-[30px_24px_28px] sm:p-[32px_32px_28px] flex flex-col"
              >
                <div className="flex flex-col sm:flex-row items-start justify-center sm:justify-between text-center sm:text-left mx-auto sm:mx-0 gap-5 sm:gap-4 pb-[22px] border-b border-border-subtle sm:mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] mb-3.5">
                      <span className="bg-bg-primary border border-border-subtle text-primary font-[400] px-2 py-0.5 rounded-md">
                        The only cost
                      </span>
                    </div>
                    <h3 className="text-[22px] font-bold tracking-[-0.015em] text-text-primary m-0 leading-[1.2]">
                      Daily interest while in use
                    </h3>
                  </div>
                  <div className="text-center sm:text-right mx-auto sm:mx-0 flex-shrink-0">
                    <div className="text-[44px] sm:text-[38px] font-bold tracking-[-0.025em] text-primary leading-none tabular-nums">
                      47%
                      <small className="text-[16px] sm:text-[14px] text-muted-secondary font-semibold ml-0.5">
                        p.a.
                      </small>
                    </div>
                    <div className="text-[14px] sm:text-[12px] text-muted-secondary mt-1">
                      on outstanding balance
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 mb-6">
                  {[
                    {
                      k: "Triggered",
                      v: "Each day you have an outstanding balance. If your balance reaches $0, no interest accrues — even if your limit stays open.",
                    },
                    {
                      k: "Calculated",
                      v: (
                        <>
                          <strong className="text-text-primary font-semibold">
                            Outstanding balance × (47% ÷ 365)
                          </strong>
                          , applied daily. Charged against your balance once per
                          repayment period.
                        </>
                      ),
                    },
                    {
                      k: "Compounds?",
                      v: (
                        <>
                          <strong className="text-text-primary font-semibold">
                            No.
                          </strong>{" "}
                          Interest does not capitalise — accrued interest
                          doesn't earn further interest of its own.
                        </>
                      ),
                    },
                    {
                      k: "Reduce it by",
                      v: (
                        <>
                          Repaying sooner, or making extra repayments. There's{" "}
                          <strong className="text-text-primary font-semibold">
                            no early-repayment fee
                          </strong>{" "}
                          — every extra dollar comes off your balance.
                        </>
                      ),
                    },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="grid grid-cols-[90px_1fr] sm:grid-cols-[110px_1fr] gap-4 items-start text-[14.5px]"
                    >
                      <span className="text-[11px] uppercase tracking-[0.12em] text-muted-secondary font-semibold pt-0.5">
                        {row.k}
                      </span>
                      <span className="text-muted-primary leading-[1.5]">
                        {row.v}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto bg-bg-primary border border-border-subtle rounded-[12px] p-[18px_20px]">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold mb-2.5">
                    Example
                  </div>
                  <div className="text-[14.5px] text-muted-primary leading-[1.6]">
                    <span className="text-muted-secondary">$450 balance</span> ×
                    (47% ÷ 365){" "}
                    <span className="text-primary font-bold ml-1">
                      = about $4.06 across week one
                    </span>
                  </div>
                  <div className="text-[12px] text-ink-light mt-2.5 leading-[1.45]">
                    Balance shrinks as you repay, so each week's interest is
                    smaller than the last.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Worked example ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="worked"
          className="section-padding relative overflow-hidden bg-fees-gradient text-bg-primary"
        >
          <div className="w-full max-w-[1440px] mx-auto px-6">
            <div className="text-center max-w-[740px] mx-auto mb-8 sm:mb-12 md:mb-14">
              <Pill
                text="Example in practice"
                variant="light"
                className="mb-[18px]"
              />
              <h2
                className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-bg-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                What does this look like on a $450 limit?
              </h2>
              <p className="text-[clamp(16px,3.5vw,18px)] text-bg-secondary/70 m-0 leading-[1.55]">
                This is a first-loan example — interest only on the drawn
                amount, weekly $55 repayments, no drawdown or establishment fee.
                Your balance shrinks each week; so does the interest.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.15fr] gap-8 md:gap-12 items-start">
              {/* Summary */}
              <aside className="bg-bg-primary/5 border border-bg-primary/10 rounded-card-lg p-[30px_24px_28px] sm:p-[32px_32px_28px] backdrop-blur-lg lg:sticky lg:top-[92px]">
                <div className="text-[13px] uppercase tracking-[0.14em] text-[#b8c4ff] mb-4 font-semibold">
                  Summary
                </div>
                <p className="text-[17px] leading-[1.45] text-bg-secondary/85 mb-[22px]">
                  You're approved for a{" "}
                  <strong className="text-bg-primary font-semibold">
                    $450 limit
                  </strong>
                  , draw the full amount, and repay{" "}
                  <strong className="text-bg-primary font-semibold">
                    $55/week
                  </strong>{" "}
                  over the next 9 weeks.
                </p>

                <table className="w-full border-collapse text-[14.5px]">
                  <tbody>
                    {WORKED_SUMMARY_ROWS.map((row, i) => (
                      <tr key={i}>
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
                          className={`py-3.5 text-right tabular-nums text-bg-primary font-medium border-b border-bg-primary/10 ${
                            row.total
                              ? "font-bold text-[21px] border-b-0 pt-[18px]"
                              : ""
                          }`}
                        >
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-[8px] pt-[22px] border-t border-bg-primary/10 text-[12.5px] text-bg-secondary/55 leading-[1.6]">
                  Repay sooner and you'll pay less — no penalty for clearing
                  early.
                </div>
              </aside>

              {/* Schedule table */}
              <div className="bg-bg-primary border border-border-subtle rounded-card-lg overflow-hidden">
                <div className="flex items-center justify-between px-[22px] py-[18px] border-b border-bg-primary/[0.08]">
                  <div className="text-[18px] font-bold text-muted-primary tracking-[-0.01em]">
                    Repayment schedule
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        {[
                          "Period",
                          "Opening",
                          "Interest",
                          "Repayment",
                          "Closing",
                        ].map((h, hi) => (
                          <th
                            key={h}
                            className={`px-[22px] py-3 text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold bg-[#eef1f8] border-b border-border-subtle ${hi === 0 ? "text-left" : hi === 4 ? "text-right" : "text-left"}`}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {SCHEDULE_ROWS.map((row, i) =>
                        row.isDone ? (
                          <tr key={i} className="bg-[#eef1f8]">
                            <td
                              colSpan={5}
                              className="p-5 text-[13.5px] text-muted-secondary font-semibold text-center border-t border-border-subtle"
                            >
                              {row.doneText}
                            </td>
                          </tr>
                        ) : (
                          <tr
                            key={i}
                            className={
                              row.isDraw
                                ? "bg-bg-secondary"
                                : "hover:bg-bg-secondary/40 transition-colors"
                            }
                          >
                            <td className="px-[22px] py-[12px] text-[13px] font-semibold text-text-primary border-b border-border-subtle">
                              {row.period}
                            </td>
                            <td className="px-[22px] py-[12px] text-[13px] text-muted-primary border-b border-border-subtle tabular-nums">
                              {row.open}
                            </td>
                            <td className="px-[22px] py-[12px] text-[13px] text-muted-primary border-b border-border-subtle tabular-nums">
                              {row.interest}
                            </td>
                            <td
                              className={`px-[22px] py-[12px] text-[13px] border-b border-border-subtle tabular-nums ${row.isDraw ? "text-primary font-semibold" : "text-muted-primary"}`}
                            >
                              {row.repaid}
                            </td>
                            <td className="px-[22px] py-[12px] text-[13px] text-right border-b border-border-subtle tabular-nums font-semibold text-text-primary">
                              {row.close}
                            </td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Complete fee list ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="all"
          className="section-padding bg-bg-secondary"
        >
          <div className="w-full max-w-[1440px] mx-auto px-6">
            <div className="max-w-[760px] mb-8 sm:mb-12 md:mb-14 mx-auto text-center">
              <Pill
                text="Every fee, in one place"
                variant="white"
                className="mb-[18px]"
              />
              <h2
                className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Everything that can be charged.
              </h2>
              <p className="text-[clamp(16px,3.5vw,18px)] text-muted-secondary m-0 leading-[1.55]">
                Interest is the only regular cost. The fees in the second group
                apply only in specific circumstances — most customers never pay
                them. The $0 rows confirm what we don't charge.
              </p>
            </div>

            {/* Mobile: card layout */}
            <div className="sm:hidden bg-bg-primary border border-border-subtle rounded-card-lg overflow-hidden shadow-card">
              {FEE_TABLE.map((row, i) =>
                row.scope ? (
                  <div
                    key={i}
                    className="bg-[#e3e7f1] px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold border-b border-border-subtle"
                  >
                    {row.scope}
                  </div>
                ) : (
                  <div
                    key={i}
                    className={`flex justify-between items-start gap-4 px-4 py-[18px] ${i === FEE_TABLE.length - 1 ? "" : "border-b border-border-subtle"}`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-text-primary text-[clamp(14px,3.8vw,16px)] tracking-[-0.005em] mb-1">
                        {row.title}
                      </div>
                      {row.desc && (
                        <div className="text-[clamp(12px,3.2vw,14px)] text-muted-primary leading-[1.5] mb-1">
                          {row.desc}
                        </div>
                      )}
                      {row.amountKind !== "zero" && (
                        <div className="text-[11.5px] text-muted-secondary leading-[1.45] mt-3">
                          {row.when}
                          {row.whenSub && (
                            <span className="block">{row.whenSub}</span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span
                        className={`tabular-nums font-bold tracking-[-0.015em] leading-none ${row.amountKind === "zero" ? "text-accent text-[17px]" : row.amountKind === "penalty" ? "text-primary-light text-[clamp(20px,3.8vw,24px)]" : "text-primary text-[clamp(20px,3.8vw,24px)]"}`}
                      >
                        {row.amount}
                        {row.amountSub && (
                          <small className="block text-[10px] text-muted-secondary font-medium mt-0.5 tracking-[0.02em]">
                            {row.amountSub}
                          </small>
                        )}
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Desktop: table */}
            <div className="hidden sm:block bg-bg-primary border border-border-subtle rounded-card-lg overflow-hidden shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left px-6 py-[18px] text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold bg-[#eef1f8] border-b border-border-subtle w-1/2">
                        Fee
                      </th>
                      <th className="text-left px-6 py-[18px] text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold bg-[#eef1f8] border-b border-border-subtle">
                        When it applies
                      </th>
                      <th className="text-right px-6 py-[18px] text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold bg-[#eef1f8] border-b border-border-subtle">
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
                            className="bg-[#e3e7f1] px-6 py-3 text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold border-b border-border-subtle"
                          >
                            {row.scope}
                          </td>
                        </tr>
                      ) : (
                        <tr key={i}>
                          <td
                            className={`px-6 py-[22px] align-top text-muted-primary text-[14.5px] leading-[1.5] 
                              ${i == FEE_TABLE.length - 1 ? "" : "border-b border-border-subtle"}`}
                          >
                            <span className="font-bold text-text-primary text-[16px] tracking-[-0.005em] mb-1 block">
                              {row.title}
                            </span>
                            {row.desc}
                          </td>
                          <td
                            className={`px-6 py-[22px] align-top text-muted-primary text-[14.5px] leading-[1.5] 
                              ${i == FEE_TABLE.length - 1 ? "" : "border-b border-border-subtle"}`}
                          >
                            {row.when}
                            {row.whenSub && (
                              <div className="text-[12.5px] text-muted-secondary tracking-[0.02em] mt-1">
                                {row.whenSub}
                              </div>
                            )}
                          </td>
                          <td
                            className={`px-6 py-[22px] align-top text-right 
                              ${i == FEE_TABLE.length - 1 ? "" : "border-b border-border-subtle"}`}
                          >
                            <span
                              className={`tabular-nums font-bold tracking-[-0.015em] leading-none ${
                                row.amountKind === "zero"
                                  ? "text-accent text-[18px]"
                                  : row.amountKind === "penalty"
                                    ? "text-primary-light text-[22px]"
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
              <span className="size-[18px] sm:size-[22px] flex-shrink-0 rounded-full bg-primary text-bg-primary inline-flex items-center justify-center font-bold text-[12px] mt-px">
                i
              </span>
              <div>
                <strong className="text-muted-primary">
                  In financial difficulty?
                </strong>{" "}
                Contact us before a payment is due and we can discuss a hardship
                arrangement. Call the National Debt Helpline{" "}
                <strong>1800&nbsp;007&nbsp;007</strong> for free, independent
                advice — or{" "}
                <Link
                  to="/contact"
                  className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
                >
                  contact us directly
                </Link>
                .
              </div>
            </div>
          </div>

          {/* ── Calculator ── */}
          <div className="w-full max-w-[1440px] mt-12 md:mt-20 mx-auto px-6">
            <div
              className="border border-bg-secondary rounded-card-lg p-[32px] md:p-[48px_56px] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center shadow-card"
              style={{
                background: "linear-gradient(135deg, #FCFDFF 0%, #EAEDF5 100%)",
              }}
            >
              <div className="text-center lg:text-left">
                <Pill text="Run your own numbers" className="mb-6" />
                <h3
                  className="text-[clamp(28px,3.8vw,40px)] leading-[1.05] font-bold tracking-[-0.02em] mb-3 text-text-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Try the calculator with your scenario.
                </h3>
                <p className="text-[clamp(14px,3.5vw,16px)] text-muted-secondary mb-6 leading-[1.55] max-w-[48ch] mx-auto lg:mx-0">
                  The calculator lets you slide in any draw amount from $100 to
                  $10,000 against weekly, fortnightly or monthly repayments —
                  and shows the same fee structure applied to your numbers.
                </p>
                <Link to="/home#calculator" className="btn btn-primary group">
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

              {/* Mini preview card */}
              <div
                className="bg-bg-primary border border-border-subtle rounded-card p-[22px]"
                aria-hidden="true"
                style={{ boxShadow: "0 6px 20px -6px rgba(11,16,36,0.1)" }}
              >
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold mb-3">
                  If you drew
                </div>
                <div className="text-[28px] font-bold text-primary tracking-[-0.02em] tabular-nums mb-3">
                  $450
                </div>
                <div className="h-1.5 bg-border-subtle rounded-full mb-3.5 overflow-hidden">
                  <div className="w-[25%] h-full bg-primary rounded-full" />
                </div>
                {CT_MINI_ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between text-[12px] text-muted-secondary py-1"
                  >
                    <span>{row.label}</span>
                    <strong className="text-text-primary font-semibold">
                      {row.value}
                    </strong>
                  </div>
                ))}
                <div className="flex justify-between text-[12px] py-1 mt-2 pt-2.5 border-t border-border-subtle">
                  <span className="text-text-primary">Total to repay</span>
                  <strong className="text-primary text-[14px]">$469.62</strong>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Reviews ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-padding bg-bg-primary"
        >
          <div className="w-full max-w-[1440px] mx-auto px-6">
            <div className="text-center mb-4">
              <Pill
                text="What customers say about the fees"
                className="mb-[18px]"
              />
              <Reviews />
            </div>
          </div>
        </motion.section>

        {/* ── Final CTA ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <CTA
            text="Now you've seen the costs."
            desc="You'll see the same fees again in your credit contract before
                  you commit — no hidden terms, no after-the-fact changes."
          />
        </motion.section>

        {/* ── FAQ ── */}
        <section className="section-padding bg-bg-secondary">
          <div className="w-full max-w-[1440px] mx-auto px-6">
            <div className="text-center  mb-8 sm:mb-10 md:mb-12">
              <Pill text="FAQ" variant="white" className="mb-[18px]" />
              <h2
                className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Customers frequently ask
              </h2>
              <p className="text-[clamp(16px,3.5vw,18px)] text-muted-secondary m-0 leading-[1.55]">
                If you don't see your question here,{" "}
                <Link
                  to="/faq"
                  className="px-1 text-primary font-semibold border-b border-border-default hover:border-primary transition-colors"
                >
                  read more FAQs
                </Link>{" "}
                or ask{" "}
                <a
                  href="mailto:support@faster.com.au"
                  className="px-1 text-primary font-semibold border-b border-border-default hover:border-primary transition-colors"
                >
                  support@faster.com.au
                </a>
                .
              </p>
            </div>
            <FAQSection faqs={FEES_FAQS} white />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

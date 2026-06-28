import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

import SEO from "../components/SEO";
import { useSEO } from "../utils/useSEO";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import LoanCalculator from "../components/LoanCalculator";
import CTA from "../components/CTA";

import "../App.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const BENCH_CHIPS = [
  { value: "47% p.a.", label: "interest" },
  { value: "$0", label: "hidden fees" },
];

const IS_POINTS = [
  {
    strong: "Revolving.",
    text: " Repay what you draw and the limit is ready to use again — no reapplying.",
  },
  {
    strong: "A fixed schedule.",
    text: " Your per-period repayment stays the same, so it's easy to plan around.",
  },
  {
    strong: "Daily interest, only while drawn.",
    text: " Repay early with no penalty and you pay less.",
  },
];

const ISNT_POINTS = [
  {
    strong: "Not open-ended.",
    text: " Unlike a credit card, there's a clear path to a $0 balance.",
  },
  {
    strong: "No compounding surprises.",
    text: " No monthly account fee, no establishment fee, no redraw fee.",
  },
  {
    strong: "Not a one-off lump-sum loan.",
    text: " You only draw and pay for what you actually need.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Calculator() {
  const seo = useSEO("calculator");

  return (
    <>
      <SEO
        title={seo?.title || "Line of Credit Calculator | Faster.com.au"}
        description={
          seo?.description ||
          "Estimate your repayment schedule against our 47% p.a. interest in under 30 seconds, with nothing hidden."
        }
        ogTitle={seo?.ogTitle || "Line of Credit Calculator | Faster.com.au"}
        ogDescription={
          seo?.ogDescription ||
          "Estimate your repayment schedule against our 47% p.a. interest in under 30 seconds, with nothing hidden."
        }
        canonicalUrl={seo?.canonicalUrl}
      />

      <div className="font-sans antialiased text-text-primary bg-bg-primary">
        <NavBar />

        {/* ── Calculator workbench ── */}
        <section className="relative overflow-hidden hero-padding bg-hero-gradient">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="z-10 w-full max-w-[1440px] text-center lg:text-left mx-auto px-6"
          >
            {/* Header row */}
            <div className="flex items-end justify-center lg:justify-between gap-6 mb-12 flex-wrap">
              <div className="max-w-[880px]">
                <Pill
                  text="Line of Credit calculator"
                  variant="light"
                  className="mb-[22px]"
                />
                <h1
                  className="text-[clamp(38px,5vw,52px)] leading-[1.02] tracking-[-0.025em] font-bold mb-5 text-bg-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Drag the dials. Watch what you&apos;d repay.
                </h1>
                <p className="text-[16px] sm:text-[18px] text-bg-secondary/80 m-0 max-w-[50ch] leading-[1.55] mx-auto lg:mx-0">
                  Estimate your repayment schedule against our two real fees —
                  in under 30 seconds, with nothing hidden.
                </p>
              </div>
              <div className="flex gap-2.5 flex-wrap">
                {BENCH_CHIPS.map((chip) => (
                  <span
                    key={chip.label}
                    className="font-bold text-[14px] px-3 py-2 rounded-[9px] bg-bg-primary/10 border border-bg-primary/30 text-bg-secondary/80"
                  >
                    <b className="text-bg-primary">{chip.value}</b> {chip.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Calculator */}
            <LoanCalculator />
          </motion.div>
        </section>

        {/* ── Comparison honesty ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-padding bg-bg-primary"
        >
          <div className="w-full max-w-[1440px] mx-auto px-6">
            <div className="text-center max-w-[600px] mx-auto mb-8 sm:mb-12 md:mb-14">
              <Pill
                text="So you know exactly what it is"
                className="mb-[18px]"
              />
              <h2
                className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-[18px] text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                A line of credit — not a credit card, not a payday loan.
              </h2>
              <p className="text-[clamp(16px,3.5vw,18px)] text-muted-secondary m-0 leading-[1.55]">
                The repayment is fixed and predictable. Drawing more extends
                your term, it doesn&apos;t raise your weekly cost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] max-w-[940px] mx-auto">
              {/* What Faster is */}
              <div className="rounded-card-lg p-[30px_32px] border border-bg-secondary bg-bg-secondary">
                <span className="inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.12em] font-semibold text-primary mb-[18px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="size-12"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  What Faster is
                </span>
                <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
                  {IS_POINTS.map((pt) => (
                    <li
                      key={pt.strong}
                      className="grid grid-cols-[22px_1fr] gap-3 text-[14.5px] text-muted-primary leading-[1.5] items-start"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="w-[18px] h-[18px] mt-px text-accent"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>
                        <strong className="text-text-primary font-semibold">
                          {pt.strong}
                        </strong>
                        {pt.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What it isn't */}
              <div className="rounded-card-lg p-[30px_32px] border border-border-subtle bg-bg-secondary">
                <span className="inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.12em] font-semibold text-muted-secondary mb-[18px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="size-12"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  What it isn&apos;t
                </span>
                <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
                  {ISNT_POINTS.map((pt) => (
                    <li
                      key={pt.strong}
                      className="grid grid-cols-[22px_1fr] gap-3 text-[14.5px] text-muted-primary leading-[1.5] items-start"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="w-[18px] h-[18px] mt-px text-ink-light"
                      >
                        <path d="M18 6 6 18M6 6l12 12" />
                      </svg>
                      <span>
                        <strong className="text-text-primary font-semibold">
                          {pt.strong}
                        </strong>
                        {pt.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── CTA ── */}
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

        <Footer />
      </div>
    </>
  );
}

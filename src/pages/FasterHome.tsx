"use client";

import React, { useState, useMemo } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Frequency = "weekly" | "fortnightly" | "monthly";

interface RepaymentConfig {
  amount: number;
  per: string;
  unit: string;
  daysPerPeriod: number;
}

interface CalcResult {
  fee: number;
  totalInterest: number;
  totalRepaid: number;
  periods: number;
  maxPeriods: number;
  f: RepaymentConfig;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const FIXED_REPAYMENT: Record<Frequency, RepaymentConfig> = {
  weekly: { amount: 55.0, per: "week", unit: "weeks", daysPerPeriod: 7 },
  fortnightly: {
    amount: 110.0,
    per: "fortnight",
    unit: "fortnights",
    daysPerPeriod: 14,
  },
  monthly: { amount: 238.33, per: "month", unit: "months", daysPerPeriod: 30 },
};

const ANNUAL_RATE = 0.47;
const DRAWDOWN_FEE_PCT = 0.2;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmtAUD = (n: number): string =>
  "$" +
  n.toLocaleString("en-AU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

function calcRepayment(drawn: number, frequency: Frequency): CalcResult {
  const fee = drawn * DRAWDOWN_FEE_PCT;
  const f = FIXED_REPAYMENT[frequency];
  const dailyRate = ANNUAL_RATE / 365;
  let balance = drawn + fee;
  let periods = 0;
  let totalInterest = 0;
  const maxPeriods =
    frequency === "monthly" ? 120 : frequency === "fortnightly" ? 260 : 520;

  while (balance > 0 && periods < maxPeriods) {
    const interestThisPeriod = balance * dailyRate * f.daysPerPeriod;
    totalInterest += interestThisPeriod;
    balance = balance + interestThisPeriod - f.amount;
    periods++;
    if (balance < 0) balance = 0;
  }

  return {
    fee,
    totalInterest,
    totalRepaid: drawn + fee + totalInterest,
    periods,
    maxPeriods,
    f,
  };
}

// ─── Shared UI primitives ─────────────────────────────────────────────────────

interface PillProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

function Pill({ children, light = false, className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[13px] font-medium tracking-[0.01em]
        ${
          light
            ? "bg-bg-primary border border-bg-secondary text-primary"
            : "bg-white/[0.08] border border-white/[0.16] text-white"
        } ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
          light
            ? "bg-primary shadow-[0_0_0_3px_rgba(28,65,230,0.14)]"
            : "bg-[#7d9bff] shadow-[0_0_0_3px_rgba(125,155,255,0.18)]"
        }`}
      />
      {children}
    </span>
  );
}

/** Reusable primary CTA button */
function BtnPrimary({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold text-white bg-primary border border-transparent
        shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_8px_18px_-6px_rgba(28,65,230,0.55)]
        hover:brightness-110 hover:-translate-y-px transition-all cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
}

function ArrowRightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
    </svg>
  );
}

const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`w-full max-w-[1200px] mx-auto px-8 ${className}`}>
    {children}
  </div>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/[0.06] text-white"
      style={{
        background: "rgba(22,22,48,0.85)",
        backdropFilter: "saturate(140%) blur(14px)",
      }}
    >
      <Container>
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-[68px] gap-8">
          {/* Logo */}
          <a
            href="#"
            aria-label="Faster.com.au home"
            className="inline-flex items-baseline no-underline font-extrabold text-[22px] tracking-[-0.02em] italic text-white"
          >
            Faster
            <span className="not-italic font-medium text-[13px] text-white/60 tracking-normal ml-[2px] translate-y-[-1px]">
              .com.au
            </span>
          </a>

          {/* Nav links */}
          <nav
            className="hidden md:flex gap-1 justify-center"
            aria-label="Primary"
          >
            {(
              [
                ["#", "Home"],
                ["#how", "How it works"],
                ["#about", "About"],
                ["#fees", "Fees"],
                ["#calculator", "Calculator"],
              ] as [string, string][]
            ).map(([href, label]) => (
              <a
                key={label}
                href={href}
                className="px-[14px] py-2 text-[14.5px] text-white/[0.78] rounded-lg font-medium hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex gap-[10px] items-center">
            <a
              href="#"
              className="hidden sm:inline-flex items-center justify-center px-[18px] py-[10px] rounded-[10px] font-semibold text-[14px] border border-white/[0.22] text-white bg-transparent hover:bg-white/[0.06] transition-all"
            >
              Log In
            </a>
            <BtnPrimary
              href="#apply"
              className="px-[18px] py-[10px] text-[14px]"
            >
              Apply Now
            </BtnPrimary>
          </div>
        </div>
      </Container>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative text-white overflow-hidden py-[80px] pb-[100px]"
      style={{
        background:
          "radial-gradient(1200px 600px at 85% -10%, rgba(59,86,255,0.6), transparent 60%), radial-gradient(900px 500px at 10% 100%, rgba(21,50,184,0.55), transparent 55%), linear-gradient(180deg, #050a2e 0%, #0b1a6b 50%, #1532b8 100%)",
      }}
    >
      {/* Dot-grid overlay */}
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

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          {/* ── Left: Copy ── */}
          <div>
            <Pill>Line of credit · Up to $10,000</Pill>

            <h1
              className="text-[clamp(44px,5.5vw,76px)] leading-[0.98] tracking-[-0.03em] font-bold mt-[22px] mb-[18px]"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Two fees.
              <br />
              <span
                style={{
                  background: "linear-gradient(180deg, #fff 60%, #b8c4ff 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                That&apos;s it.
              </span>
            </h1>

            <p className="text-[18px] text-white/[0.78] max-w-[52ch] leading-[1.55] mb-7">
              A revolving line of credit you don&apos;t have to reapply for. One
              drawdown fee when you first access your limit. Interest only on
              what you&apos;ve actually drawn — calculated daily.
            </p>

            {/* CTA block */}
            <div className="flex items-center gap-4 flex-wrap mb-9">
              <div className="inline-flex flex-col gap-2">
                <BtnPrimary
                  href="#apply"
                  className="px-[26px] py-[15px] text-[15.5px] group"
                >
                  Apply Now
                  <span className="transition-transform group-hover:translate-x-0.5">
                    <ArrowRightIcon />
                  </span>
                </BtnPrimary>
                <span className="text-[12.5px] text-white/[0.62] font-mono tracking-[0.02em]">
                  Takes 5 minutes · ID + bank details
                </span>
              </div>
              <a
                href="#fees"
                className="text-[14.5px] font-medium text-white/[0.82] inline-flex items-center gap-1.5 py-2 px-1 border-b border-white/[0.18] hover:text-white hover:border-white/60 transition-all"
              >
                See full fees example
              </a>
            </div>

            {/* Trust strip */}
            <div
              className="inline-flex items-center gap-7 flex-wrap p-[18px_22px] border border-white/[0.1] rounded-[14px]"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(6px)",
              }}
              role="region"
              aria-label="Trust signals"
            >
              {/* Trustpilot rating */}
              <div className="flex items-center gap-2.5">
                <div
                  className="inline-flex gap-px"
                  aria-label="4.4 out of 5 stars"
                >
                  {Array.from({ length: 4 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-[18px] h-[18px]"
                    >
                      <path d="M0 0h24v24H0z" fill="#00b67a" />
                      <path
                        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
                        fill="#fff"
                      />
                    </svg>
                  ))}
                  {/* Half star */}
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                    <defs>
                      <linearGradient id="halfstar">
                        <stop offset="40%" stopColor="#00b67a" />
                        <stop offset="40%" stopColor="#d6dae6" />
                      </linearGradient>
                    </defs>
                    <path d="M0 0h24v24H0z" fill="url(#halfstar)" />
                    <path
                      d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[15px] text-white">
                    4.4 / 5
                  </div>
                  <div className="text-[12.5px] text-white/[0.62] leading-[1.3]">
                    1,500+ Trustpilot reviews
                  </div>
                </div>
              </div>

              <div className="w-px h-8 bg-white/[0.14]" />

              {/* ISO 27001 */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white/[0.08] inline-flex items-center justify-center text-[#b8c4ff]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] text-white/[0.85] font-medium">
                    ISO 27001 Certified
                  </div>
                  <div className="text-[11px] text-white/50 font-mono tracking-[0.04em]">
                    Lloyd&apos;s Register
                  </div>
                </div>
              </div>

              <div className="w-px h-8 bg-white/[0.14]" />

              {/* ACL */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white/[0.08] inline-flex items-center justify-center text-[#b8c4ff]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M3 12l2 2 4-4M3 6h18M3 18h18" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] text-white/[0.85] font-medium">
                    Aust. Credit Licence
                  </div>
                  <div className="text-[11px] text-white/50 font-mono tracking-[0.04em]">
                    ACL 569825 · ABN 42 096 001 900
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Phone mockup ── */}
          <div
            className="relative flex justify-center items-center min-h-[580px]"
            aria-hidden="true"
          >
            {/* hero section photo */}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const HOW_STEPS = [
  {
    num: "01",
    icon: (
      <path d="M9 12l2 2 4-4M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    ),
    title: "Apply in minutes",
    desc: "A quick online application. We assess your situation against our lending criteria.",
  },
  {
    num: "02",
    icon: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M7 15h4" />
      </>
    ),
    title: "Get your limit",
    desc: "If approved, you'll receive a credit limit of up to $10,000. This is the maximum you can draw at a time.",
  },
  {
    num: "03",
    icon: <path d="M12 5v14M5 12l7 7 7-7" />,
    title: "Draw when you need it",
    desc: "Transfer funds from your limit to your bank account — same business day, with a clear repayment schedule.",
  },
  {
    num: "04",
    icon: <path d="M21 12a9 9 0 1 1-9-9M21 3v6h-6" />,
    title: "Repay & reuse",
    desc: "As you repay, your available balance refreshes. Draw again — up to your limit — without a new application.",
  },
];

function HowItWorksSection() {
  return (
    <section id="how" className="py-[110px] pb-[100px] bg-white">
      <Container>
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <Pill light className="mb-[18px]">
            How it works
          </Pill>
          <h2
            className="text-[clamp(34px,4vw,52px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-text-primary"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Not a loan. A credit limit you control.
          </h2>
          <p className="text-[18px] text-muted-secondary m-0 leading-[1.55]">
            A Faster Line of Credit gives you an approved limit you can draw
            from when you need it. Repay, and the balance is ready to use again.
            No reapplying every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {HOW_STEPS.map((step) => (
            <div
              key={step.num}
              className="bg-bg-secondary border border-border-subtle rounded-[14px] p-[24px_22px] relative transition-all duration-150 hover:border-bg-secondary hover:-translate-y-0.5"
            >
              <div className="w-8 h-8 rounded-full bg-primary text-white inline-flex items-center justify-center font-bold text-[13px] font-mono mb-4">
                {step.num}
              </div>
              <div className="absolute top-[22px] right-[22px] text-primary opacity-35">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-[22px] h-[22px]"
                >
                  {step.icon}
                </svg>
              </div>
              <h3 className="text-[18px] font-bold tracking-[-0.01em] mb-1.5 m-0 text-text-primary">
                {step.title}
              </h3>
              <p className="text-[14px] text-muted-secondary m-0 leading-[1.5]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── Why / About ──────────────────────────────────────────────────────────────

const TRUST_ROWS: {
  title: string;
  badge: string | null;
  body: React.ReactNode;
}[] = [
  {
    title: "Australian Credit Licence",
    badge: "ACL 569825",
    body: (
      <>
        Held by Lightspeed CashFaster Ventures Pty Ltd (ABN 42 096 001 900).
        Bound by Chapter 3 of the{" "}
        <em>National Consumer Credit Protection Act 2009</em> — the same
        responsible-lending obligations the banks operate under.{" "}
        <a
          href="https://connectonline.asic.gov.au/RegistrySearch/"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors whitespace-nowrap"
          target="_blank"
          rel="noopener noreferrer"
        >
          Verify on ASIC&apos;s register
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="inline w-3 h-3 ml-0.5 align-[-1px]"
          >
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </>
    ),
  },
  {
    title: "Independently security-certified",
    badge: "ISO 27001",
    body: "Audited and certified by Lloyd's Register for Information Security Management. Bank-grade encryption, real-time monitoring, multi-layered protection and documented incident-response apply to your personal data and account activity.",
  },
  {
    title: "Advertising compliant with ASIC",
    badge: "RG 234",
    body: "Representative APR (221.36% p.a.) shown at equal prominence to the headline rate. All fees — including late ($35) and dishonour ($15) fees — set out in your credit contract before you commit. No fine print that wasn't in the example.",
  },
  {
    title: "Responsible-lending assessment, every application",
    badge: null,
    body: (
      <>
        Every application is reviewed against our lending criteria and your
        individual financial situation. If you&apos;re already in financial
        difficulty, we won&apos;t lend — and we&apos;ll point you to the{" "}
        <a
          href="https://ndh.org.au"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          National Debt Helpline (1800 007 007)
        </a>{" "}
        instead.
      </>
    ),
  },
];

const REVIEWS = [
  {
    stars: 5,
    title: "Great service",
    body: "Very easy to get approved and great service",
    author: "Kyle",
    time: "4 days ago",
  },
  {
    stars: 5,
    title: "Helpful and made things quick and easy",
    body: "Helpful and made things quick and easy!",
    author: "Jessica Smith",
    time: "4 days ago",
  },
  {
    stars: 4,
    title: "Great service and very quick to get…",
    body: "Great service and very quick to get back to about my loan.",
    author: "John Clements",
    time: "5 days ago",
  },
  {
    stars: 5,
    title: "Easy to deal with and fast payment",
    body: "Easy to deal with and fast payment",
    author: "Andrew Reynolds",
    time: "May 13",
  },
  {
    stars: 5,
    title: "Great Service",
    body: "Great Service",
    author: "Jodie McGowan",
    time: "May 12",
  },
];

function TrustpilotStars({ count }: { count: number }) {
  return (
    <div className="inline-flex gap-px bg-[#00b67a] p-[3px_4px]">
      {Array.from({ length: 5 }).map((_, j) => (
        <span
          key={j}
          className={`w-3.5 h-3.5 inline-flex items-center justify-center ${j < count ? "bg-white" : "bg-[#d6dae6]"}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-3.5 h-3.5 ${j < count ? "text-[#00b67a]" : "text-[#d6dae6]"}`}
          >
            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

function WhySection() {
  return (
    <section id="about" className="py-[110px] bg-bg-secondary">
      <Container>
        {/* Two-column about grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          {/* ── Left ── */}
          <div>
            <Pill light className="mb-[18px]">
              About Faster · Why trust us
            </Pill>
            <h2
              className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-[18px] text-text-primary"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Trust is what you can verify yourself.
            </h2>
            <p className="text-[17px] text-muted-primary leading-[1.6] mb-4 max-w-[52ch]">
              A{" "}
              <strong className="text-text-primary font-semibold">
                line of credit
              </strong>{" "}
              is a pre-approved limit you draw from when you need it — not a
              one-off lump sum like a personal loan, and not the open-ended
              habit-loop of a credit card. Repay, and the balance is ready to
              use again.
            </p>
            <p className="text-[17px] text-muted-primary leading-[1.6] mb-0 max-w-[52ch]">
              Faster is an Australian digital credit provider. We design{" "}
              <strong className="text-text-primary font-semibold">
                one product
              </strong>{" "}
              — a small, revolving line of credit — and we run it against
              specific obligations you can check, not just claims you have to
              take on faith.
            </p>

            {/* Trust ledger */}
            <div className="mt-7 border-t border-border-subtle">
              {TRUST_ROWS.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[28px_1fr] gap-4 py-[18px] border-b border-border-subtle items-start"
                >
                  <span className="w-6 h-6 rounded-full bg-bg-primary border border-bg-secondary text-primary inline-flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="w-[13px] h-[13px]"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="m-0 mb-1 text-[15px] font-bold text-text-primary tracking-[-0.005em]">
                      {row.title}
                      {row.badge && (
                        <span className="inline-block ml-2 font-mono text-[11px] font-semibold text-primary bg-bg-primary px-[7px] py-[2px] rounded-[4px] tracking-[0.04em] align-[1px]">
                          {row.badge}
                        </span>
                      )}
                    </h4>
                    <p className="m-0 text-[13.5px] text-muted-secondary leading-[1.5]">
                      {row.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-primary font-semibold text-[15px] mt-6 pb-0.5 border-b border-bg-secondary hover:border-primary transition-colors"
            >
              Read the full Security &amp; Compliance page
              <ArrowRightIcon />
            </a>
          </div>

          {/* ── Right: photo + quote ── */}
          <div className="relative">
            <div
              className="w-full aspect-[4/5] rounded-[22px] overflow-hidden bg-bg-secondary border border-border-subtle flex items-center justify-center text-muted-secondary text-sm text-center p-8"
              style={{ boxShadow: "0 20px 50px -16px rgba(11,16,36,0.3)" }}
            >
              <span className="opacity-50">Customer photo placeholder</span>
            </div>

            {/* Floating quote card */}
            <div
              className="absolute bottom-[-28px] left-[-28px] bg-white border border-border-subtle rounded-[14px] p-[18px_20px] max-w-[280px]"
              style={{ boxShadow: "0 10px 30px -8px rgba(11,16,36,0.18)" }}
            >
              <div className="inline-flex gap-px text-[#00b67a] mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] text-text-primary m-0 mb-2 leading-[1.45] font-medium">
                &ldquo;The fee structure was clearer than anywhere else I
                looked.&rdquo;
              </p>
              <div className="text-[12px] text-muted-secondary">
                <strong className="text-muted-primary font-semibold">
                  Kyle
                </strong>{" "}
                · verified Trustpilot review
              </div>
            </div>
          </div>
        </div>

        {/* ── Trustpilot reviews sub-section ── */}
        <div className="relative mt-20 text-center pb-2">
          <div className="absolute top-[14px] left-0 right-0 h-px bg-border-subtle z-0" />
          <Pill light className="relative z-10 bg-bg-secondary">
            What customers say
          </Pill>
          <div
            className="mt-3.5 text-[26px] font-bold text-text-primary tracking-[-0.015em]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Rated 4.4 / 5 by 1,500+ Australian borrowers.
          </div>
        </div>

        {/* Trustpilot reviews grid == use component from src/components/Reviews.tsx */}
      </Container>
    </section>
  );
}

// ─── Fees + Calculator ────────────────────────────────────────────────────────

function FeesSection() {
  const [drawAmount, setDrawAmount] = useState(450);
  const [frequency, setFrequency] = useState<Frequency>("weekly");

  const { fee, totalInterest, totalRepaid, periods, maxPeriods, f } = useMemo(
    () => calcRepayment(drawAmount, frequency),
    [drawAmount, frequency],
  );

  const sliderPct = ((drawAmount - 100) / (10000 - 100)) * 100;

  const termLabel =
    periods >= maxPeriods
      ? "10+ years"
      : `${periods} ${periods === 1 ? f.per : f.unit}`;

  const freqOptions: { key: Frequency; label: string; sub: string }[] = [
    { key: "weekly", label: "Weekly", sub: "$55.00 / week" },
    { key: "fortnightly", label: "Fortnightly", sub: "$110.00 / fortnight" },
    { key: "monthly", label: "Monthly", sub: "$238.33 / month" },
  ];

  return (
    <section
      id="fees"
      className="py-[110px] pb-[100px] text-white relative overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 500px at 10% 0%, rgba(59,86,255,0.5), transparent 60%), radial-gradient(900px 500px at 100% 100%, rgba(21,50,184,0.5), transparent 60%), linear-gradient(180deg, #0b1a6b 0%, #050a2e 100%)",
      }}
    >
      <Container>
        {/* Section head */}
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <Pill className="mb-[18px]">Two fees · Nothing else</Pill>
          <h2
            className="text-[clamp(34px,4vw,52px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-white"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Two numbers. See what you&apos;d pay.
          </h2>
          <p className="text-[18px] text-white/70 m-0 leading-[1.55]">
            Every cost is set out before you borrow. The drawdown fee is charged
            once. Interest only accrues on what you&apos;ve actually drawn.
          </p>
        </div>

        {/* Fee cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {[
            {
              label: "Fee 01",
              when: "Charged once",
              big: "20%",
              bigSub: "of your limit",
              title: "One-time drawdown fee",
              desc: "A single fee when you first access your line of credit. Never charged again — no matter how many times you draw or repay.",
            },
            {
              label: "Fee 02",
              when: "Calculated daily",
              big: "47%",
              bigSub: "p.a. on balance",
              title: "Interest while in use",
              desc: "Charged only on the amount you've drawn, for the days it's outstanding. Interest doesn't compound. Repay sooner, pay less.",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="bg-white/[0.05] border border-white/[0.1] rounded-[22px] p-[36px] backdrop-blur-lg"
            >
              <div className="flex items-center justify-between mb-[18px]">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#b8c4ff] px-[10px] py-1 bg-[rgba(184,196,255,0.1)] border border-[rgba(184,196,255,0.2)] rounded-[6px]">
                  {card.label}
                </span>
                <span className="text-[12px] text-white/50 font-mono tracking-[0.04em]">
                  {card.when}
                </span>
              </div>
              <div
                className="text-[clamp(56px,7vw,88px)] font-bold tracking-[-0.035em] leading-[0.95] mb-1"
                style={{
                  background: "linear-gradient(180deg, #fff 30%, #b8c4ff 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {card.big}
                <small
                  className="text-[22px] font-semibold ml-1"
                  style={{
                    WebkitTextFillColor: "rgba(255,255,255,0.7)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {card.bigSub}
                </small>
              </div>
              <h3 className="text-[20px] font-bold mt-3.5 mb-2 tracking-[-0.01em]">
                {card.title}
              </h3>
              <p className="text-[14.5px] text-white/70 leading-[1.55] m-0">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* APR bar */}
        <div
          className="rounded-[14px] p-[22px_28px] grid grid-cols-1 md:grid-cols-[auto_auto_1fr] items-center gap-7 mb-6"
          style={{
            background: "rgba(255,200,80,0.06)",
            border: "1px solid rgba(255,200,80,0.22)",
          }}
          role="region"
          aria-label="Representative APR disclosure"
        >
          <div>
            <div className="text-[13px] font-semibold text-[#ffd066] uppercase tracking-[0.12em] mb-1 font-mono">
              Representative APR
            </div>
            <div className="text-[36px] font-bold tracking-[-0.02em] text-[#ffd066] leading-none tabular-nums">
              221.36%
              <small className="text-[14px] text-[rgba(255,208,102,0.7)] font-semibold ml-1.5">
                p.a.
              </small>
            </div>
          </div>
          <div className="hidden md:block h-14 w-px bg-[rgba(255,208,102,0.25)]" />
          <p className="text-[14.5px] text-white/[0.85] leading-[1.5] max-w-[64ch] m-0">
            <strong className="text-white">
              Based on a $450 limit drawn in full for one month.
            </strong>{" "}
            Total charges: $107.64 ($90 one-time drawdown fee + $17.64
            interest). Your actual APR varies with how much you draw, how long
            it&apos;s outstanding, and your repayment behaviour.
          </p>
        </div>

        {/* ── Calculator sub-divider ── */}
        <div id="calculator" className="relative text-center mt-14 mb-7">
          <div className="absolute top-[14px] left-0 right-0 h-px bg-white/[0.12] z-0" />
          <span className="relative z-10 inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[13px] font-medium bg-secondary border border-white/[0.18] text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7d9bff] shadow-[0_0_0_3px_rgba(125,155,255,0.18)]" />
            Try it on your numbers
          </span>
          <div
            className="mt-3.5 text-[26px] font-bold text-white tracking-[-0.015em]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            What it&apos;d look like for you.
          </div>
          <p className="text-[15px] text-white/70 max-w-[56ch] mx-auto mt-1 m-0">
            Three steps. The numbers update against the same fee structure.
          </p>
        </div>

        {/* ── Calculator card ── */}
        <div
          className="bg-white border border-border-subtle rounded-[22px] overflow-hidden max-w-[880px] mx-auto"
          style={{
            boxShadow:
              "0 1px 2px rgba(11,16,36,0.04), 0 8px 24px -8px rgba(11,16,36,0.08)",
          }}
        >
          {/* Step 1 — draw amount */}
          <div className="p-[32px_40px] border-b border-border-subtle grid grid-cols-1 sm:grid-cols-[56px_1fr] gap-6 items-start">
            <div className="w-9 h-9 rounded-full bg-bg-primary text-primary inline-flex items-center justify-center font-mono text-[13px] font-bold border border-bg-secondary flex-shrink-0">
              01
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-secondary mb-1.5">
                First
              </div>
              <h3 className="text-[20px] font-bold tracking-[-0.01em] mb-[18px] text-text-primary m-0">
                How much do you want to draw?
              </h3>
              <div className="flex items-baseline gap-2.5 mb-3">
                <span className="text-[44px] font-bold tracking-[-0.025em] text-primary leading-none tabular-nums">
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
              <div className="flex justify-between text-[11px] text-ink-light font-mono mt-2">
                <span>$100</span>
                <span>$10,000</span>
              </div>
            </div>
          </div>

          {/* Step 2 — frequency */}
          <div className="p-[32px_40px] border-b border-border-subtle grid grid-cols-1 sm:grid-cols-[56px_1fr] gap-6 items-start">
            <div className="w-9 h-9 rounded-full bg-bg-primary text-primary inline-flex items-center justify-center font-mono text-[13px] font-bold border border-bg-secondary flex-shrink-0">
              02
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-secondary mb-1.5">
                Then
              </div>
              <h3 className="text-[20px] font-bold tracking-[-0.01em] mb-[18px] text-text-primary m-0">
                How often will you repay?
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {freqOptions.map(({ key, label, sub }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFrequency(key)}
                    className={`py-3.5 px-2.5 rounded-[10px] border font-semibold text-[14px] cursor-pointer transition-all text-center
                      ${
                        frequency === key
                          ? "bg-primary border-primary text-white"
                          : "bg-white border-border-default text-muted-primary hover:border-primary hover:text-primary"
                      }`}
                  >
                    {label}
                    <small className="block text-[11px] font-medium mt-0.5 opacity-75">
                      {sub}
                    </small>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3 — outcome */}
          <div
            className="p-[36px_40px_40px] grid grid-cols-1 sm:grid-cols-[56px_1fr] gap-6 items-start"
            style={{ background: "linear-gradient(180deg, #EAEDF5, #fff)" }}
          >
            <div className="w-9 h-9 rounded-full bg-bg-primary text-primary inline-flex items-center justify-center font-mono text-[13px] font-bold border border-bg-secondary flex-shrink-0">
              03
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-secondary mb-1.5">
                Result
              </div>
              <h3 className="text-[20px] font-bold tracking-[-0.01em] mb-[18px] text-text-primary m-0">
                What you&apos;d repay
              </h3>

              <p
                className="text-[22px] leading-[1.45] text-text-primary font-medium tracking-[-0.005em] mb-6"
                style={{ textWrap: "pretty" } as React.CSSProperties}
              >
                You&apos;d draw{" "}
                <strong className="text-primary font-bold tabular-nums">
                  ${drawAmount.toLocaleString("en-AU")}
                </strong>{" "}
                and repay{" "}
                <strong className="text-primary font-bold tabular-nums">
                  {fmtAUD(f.amount)}
                </strong>{" "}
                every{" "}
                <strong className="text-primary font-bold">{f.per}</strong> for
                about{" "}
                <strong className="text-primary font-bold">{termLabel}</strong>.
              </p>

              {/* Outcome grid */}
              <div className="grid grid-cols-3 border border-bg-secondary rounded-xl overflow-hidden bg-white mb-[18px]">
                {[
                  { lbl: "Drawdown fee", val: fmtAUD(fee), sub: " · 20% once" },
                  {
                    lbl: "Total interest",
                    val: fmtAUD(totalInterest),
                    sub: " · 47% p.a.",
                  },
                  { lbl: "Total to repay", val: fmtAUD(totalRepaid), sub: "" },
                ].map((cell, i) => (
                  <div
                    key={i}
                    className="p-[18px_20px] border-r border-bg-secondary last:border-r-0"
                  >
                    <div className="text-[11px] text-muted-secondary uppercase tracking-[0.12em] font-semibold font-mono mb-2">
                      {cell.lbl}
                    </div>
                    <div className="text-[22px] font-bold text-text-primary tracking-[-0.015em] tabular-nums">
                      {cell.val}
                      {cell.sub && (
                        <small className="text-[13px] font-medium text-muted-secondary ml-0.5">
                          {cell.sub}
                        </small>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* APR inline */}
              <div
                className="mt-1 p-[12px_16px] rounded-[10px] flex justify-between items-center text-[13px] text-muted-primary"
                style={{
                  background: "rgba(255,200,80,0.08)",
                  border: "1px solid rgba(255,200,80,0.35)",
                }}
              >
                <span>
                  Representative APR (canonical $450 / 1-month example)
                </span>
                <strong className="font-mono text-[#b87900] text-[14px] font-bold">
                  221.36% p.a.
                </strong>
              </div>

              <p className="text-[11.5px] text-ink-light leading-[1.55] mt-3.5">
                Estimate only. The representative APR is calculated against the
                canonical example shown above and does not vary with your
                inputs. Interest accrues daily on outstanding balance; repaying
                sooner reduces interest. Excludes any late ($35) or dishonour
                ($15) fee. All credit subject to eligibility, assessment and
                approval. This is not an offer or financial advice.
              </p>
            </div>
          </div>
        </div>

        {/* Why-fixed note */}
        <div className="max-w-[880px] mx-auto mt-4 p-[14px_20px] bg-white border border-dashed border-border-default rounded-[10px] text-[13px] text-muted-secondary leading-[1.55] flex gap-3 items-start">
          <span className="w-5 h-5 flex-shrink-0 rounded-full bg-primary text-white inline-flex items-center justify-center font-bold text-[11px] font-mono mt-0.5">
            i
          </span>
          <div>
            <strong className="text-muted-primary">
              Why is the repayment amount the same regardless of how much I
              draw?
            </strong>{" "}
            Faster uses a fixed repayment schedule so your per-period amount
            stays predictable. Drawing more extends the time you&apos;ll spend
            repaying — it doesn&apos;t raise your weekly cost. You can make
            extra repayments any time with no penalty to clear the balance
            sooner.
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── App / Apply ──────────────────────────────────────────────────────────────

const APP_FEATURES = [
  {
    strong: "Apply in around 5 minutes.",
    text: " ID, residency and bank details captured securely in-app.",
  },
  {
    strong: "Draw to your bank instantly.",
    text: " Funds reach your linked account on the same business day.",
  },
  {
    strong: "Track every dollar.",
    text: " See your balance, next repayment and full activity history.",
  },
  {
    strong: "Repay early, anytime.",
    text: " Extra repayments lower your interest — no penalty, no friction.",
  },
];

function AppSection() {
  return (
    <section id="apply" className="py-[100px] bg-white overflow-hidden">
      <Container>
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center text-white rounded-[22px] p-16 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(900px 500px at -10% 100%, rgba(59,86,255,0.4), transparent 60%), radial-gradient(800px 400px at 110% 0%, rgba(21,50,184,0.45), transparent 55%), linear-gradient(135deg, #0b1a6b 0%, #1532b8 100%)",
          }}
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "linear-gradient(180deg, transparent, black 30%, black 70%, transparent)",
            }}
          />
          {/* Glow */}
          <div
            className="absolute w-80 h-80 right-[12%] top-1/2 -translate-y-1/2 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(125,155,255,0.4) 0%, transparent 60%)",
              filter: "blur(40px)",
            }}
          />

          {/* ── Left ── */}
          <div className="relative z-10">
            <Pill className="mb-[18px]">Get started in 5 minutes</Pill>
            <h2
              className="text-[clamp(34px,4vw,50px)] leading-[1.05] tracking-[-0.025em] font-bold mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Apply, draw and repay — all from the app.
            </h2>
            <p className="text-[17px] text-white/[0.78] max-w-[44ch] leading-[1.55] mb-6">
              Most customers apply, get an outcome, and request their first
              drawdown without ever opening a laptop. The Faster app is how
              you&apos;ll manage your credit — download it to start.
            </p>

            <div className="grid gap-3 my-6 mb-8">
              {APP_FEATURES.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-[14.5px] text-white/[0.85]"
                >
                  <span className="w-6 h-6 rounded-full bg-[rgba(184,196,255,0.16)] text-[#b8c4ff] inline-flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="w-[13px] h-[13px]"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span>
                    <strong className="text-white font-semibold">
                      {feat.strong}
                    </strong>
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Store buttons */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                aria-label="Download on the App Store"
                className="inline-flex items-center gap-3 bg-[#0b1024] text-white px-[22px] py-[11px] rounded-xl border border-white/[0.14] hover:-translate-y-0.5 hover:border-white/[0.35] transition-all no-underline"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 flex-shrink-0"
                >
                  <path d="M17.05 12.04c-.03-3.13 2.55-4.62 2.67-4.7-1.46-2.14-3.74-2.43-4.55-2.47-1.94-.2-3.78 1.14-4.76 1.14-.99 0-2.5-1.11-4.11-1.08-2.11.03-4.07 1.23-5.16 3.12-2.2 3.82-.56 9.47 1.58 12.57 1.05 1.52 2.3 3.22 3.93 3.16 1.58-.06 2.18-1.02 4.09-1.02 1.91 0 2.45 1.02 4.12.99 1.7-.03 2.78-1.55 3.82-3.08 1.2-1.77 1.7-3.49 1.72-3.58-.04-.02-3.3-1.27-3.34-5.05zM13.94 2.7c.87-1.06 1.46-2.52 1.3-3.98-1.25.05-2.78.84-3.68 1.89-.81.93-1.52 2.42-1.33 3.85 1.4.11 2.83-.71 3.71-1.76z" />
                </svg>
                <span className="flex flex-col items-start leading-[1.3]">
                  <span className="text-[10px] text-white/65 tracking-[0.04em]">
                    Download on the
                  </span>
                  <span className="text-[18px] font-semibold tracking-[-0.01em]">
                    App Store
                  </span>
                </span>
              </a>

              <a
                href="#"
                aria-label="Get it on Google Play"
                className="inline-flex items-center gap-3 bg-[#0b1024] text-white px-[22px] py-[11px] rounded-xl border border-white/[0.14] hover:-translate-y-0.5 hover:border-white/[0.35] transition-all no-underline"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 flex-shrink-0">
                  <path
                    d="M3.61 1.81c-.39.4-.61.99-.61 1.74v17c0 .75.22 1.34.61 1.74l.06.06 9.53-9.53v-.22L3.67 1.75z"
                    fill="#a8c8ff"
                  />
                  <path
                    d="M16.81 15.31l-3.18-3.18v-.22l3.18-3.18.07.04 3.76 2.14c1.08.61 1.08 1.61 0 2.22l-3.76 2.13z"
                    fill="#ffd066"
                  />
                  <path
                    d="M16.88 15.27l-3.25-3.25-10.02 10.02c.36.38.94.42 1.6.05l11.67-6.82"
                    fill="#ff6b6b"
                  />
                  <path
                    d="M16.88 8.73L5.21 1.91C4.55 1.54 3.97 1.59 3.61 1.97l10.02 10.02 3.25-3.26z"
                    fill="#7ddc91"
                  />
                </svg>
                <span className="flex flex-col items-start leading-[1.3]">
                  <span className="text-[10px] text-white/65 tracking-[0.04em]">
                    GET IT ON
                  </span>
                  <span className="text-[18px] font-semibold tracking-[-0.01em]">
                    Google Play
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-[22px] pt-[22px] border-t border-white/[0.1] text-[13.5px] text-white/70 leading-[1.55]">
              Prefer your computer?{" "}
              <a
                href="#"
                className="text-white font-semibold border-b border-white/40 hover:border-white transition-colors pb-px"
              >
                Apply on the web →
              </a>
              <span className="block mt-2 text-[12.5px] text-white/55 font-mono tracking-[0.01em]">
                You&apos;ll need: Australian residency · government-issued ID ·
                90+ days of income · a bank account in your name.
              </span>
            </div>
          </div>

          {/* ── Right: App UI card ── */}
          <div className="relative z-10 flex items-center justify-center min-h-[540px]">
            {/* Photo placeholder */}
            <div
              className="w-full max-w-[360px] aspect-[3/4] rounded-[22px] bg-secondary/50 border border-white/10 flex items-center justify-center relative"
              style={{ boxShadow: "0 20px 50px -16px rgba(0,0,0,0.5)" }}
            >
              <span className="text-white/30 text-sm">
                App photo placeholder
              </span>

              {/* Floating UI card */}
              <div
                className="absolute right-[-8%] bottom-[8%] w-[230px] bg-white rounded-[18px] overflow-hidden p-4"
                style={{
                  boxShadow:
                    "0 20px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.05)",
                }}
              >
                <div className="text-[10px] text-muted-secondary uppercase tracking-[0.14em] font-semibold mb-1 font-mono">
                  Outstanding balance
                </div>
                <div
                  className="rounded-xl p-[12px_14px] mb-2.5 text-white"
                  style={{
                    background: "linear-gradient(135deg, #1C41E6, #161630)",
                  }}
                >
                  <div className="text-[10px] text-white/65 uppercase tracking-[0.14em] font-semibold mb-1 font-mono">
                    Available to draw
                  </div>
                  <div className="text-[22px] font-bold tracking-[-0.02em]">
                    $1,280 of $2,200
                  </div>
                  <div className="h-1 bg-white/[0.16] rounded-full mt-2.5 overflow-hidden">
                    <div className="w-[42%] h-full bg-[#b8c4ff]" />
                  </div>
                </div>
                <div
                  className="bg-primary text-white text-center py-2.5 rounded-[10px] font-semibold text-[12px]"
                  style={{ boxShadow: "0 4px 12px -2px rgba(28,65,230,0.45)" }}
                >
                  + Draw funds
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const FOOTER_COLS = [
  {
    title: "Product",
    links: [
      { href: "#how", label: "How it works" },
      { href: "#fees", label: "Fees" },
      { href: "#calculator", label: "Calculator" },
      { href: "#apply", label: "Apply now" },
      { href: "#", label: "Log in" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#", label: "Contact us" },
      { href: "#", label: "FAQs" },
      { href: "#", label: "hello@faster.com.au" },
      { href: "#", label: "Financial hardship", hardship: true },
      { href: "#", label: "Security" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About us" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Credit Guide" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms & Conditions" },
    ],
  },
] as const;

function Footer() {
  return (
    <footer className="bg-[#030621] text-white/[0.78] pt-16 pb-8 border-t border-white/[0.05]">
      <Container>
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-white/[0.07]">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="inline-flex items-baseline font-extrabold text-[22px] tracking-[-0.02em] italic text-white no-underline"
            >
              Faster
              <span className="not-italic font-medium text-[13px] text-white/60 tracking-normal ml-[2px]">
                .com.au
              </span>
            </a>
            <p className="text-[14px] text-white/55 leading-[1.6] mt-[18px] mb-[18px] max-w-[36ch]">
              A revolving line of credit for short-term cashflow needs, built
              and operated in Australia.
            </p>
            <div className="flex gap-3.5 items-center">
              {(
                [
                  {
                    icon: (
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    ),
                    label: "ISO 27001",
                  },
                  {
                    icon: (
                      <>
                        <path d="M3 12l2 2 4-4M3 6h18M3 18h18" />
                      </>
                    ),
                    label: "ACL 569825",
                  },
                ] as { icon: React.ReactNode; label: string }[]
              ).map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[12px] text-white/70"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-3.5 h-3.5 text-[#7d9bff]"
                  >
                    {badge.icon}
                  </svg>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40 font-medium m-0 mb-[18px]">
                {col.title}
              </h4>
              <ul className="list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.label} className="mb-2.5">
                    {"hardship" in link && link.hardship ? (
                      <a
                        href={link.href}
                        className="text-[#ffd066] hover:text-[#ffe199] transition-colors text-[14px] inline-flex items-center gap-1.5"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        >
                          <path d="M12 8v4M12 16h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                        </svg>
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-[14px] text-white/[0.78] hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mid row */}
        <div className="py-7 border-b border-white/[0.07] flex justify-between items-center flex-wrap gap-5">
          <div className="flex gap-6 flex-wrap">
            {[
              "Terms & Conditions",
              "Privacy Policy",
              "Refund Policy",
              "Credit Guide",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[13.5px] text-white/65 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="text-[12px] text-white/55 font-mono">
            Need help with repayments? Call National Debt Helpline{" "}
            <strong className="text-[#ffd066]">1800 007 007</strong> (free,
            confidential).
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="pt-6 text-[11.5px] text-white/[0.42] leading-[1.7] font-mono tracking-[0.02em]">
          <p className="m-0 mb-2">
            <strong className="text-white/70">Comparison rate warning:</strong>{" "}
            The representative APR of 221.36% p.a. is based on a $450 limit
            drawn in full for one month, comprising the 20% one-time drawdown
            fee and 47% p.a. interest. Different amounts and terms may result in
            different comparison rates. WARNING: This comparison rate applies
            only to the example given. Different amounts and terms will result
            in different comparison rates. Costs such as redraw fees and cost
            savings such as fee waivers are not included in the comparison rate
            but may influence the cost of the loan.
          </p>
          <p className="m-0 mb-2">
            Late payment fee: $35 per missed payment. Dishonour fee: $15 per
            failed direct debit. All fees set out in your credit contract before
            you commit.
          </p>
          <p className="m-0">
            All Rights Reserved ©2026 Faster Financial Group Pty Ltd (ABN: 42
            096 001 900). Lightspeed CashFaster Ventures Pty Ltd Australian
            Credit Licence 569825. Faster Financial Group Pty Ltd is ISO 27001
            Certified by Lloyd&apos;s Register for Information Security
            Management.
          </p>
        </div>
      </Container>
    </footer>
  );
}

// ─── Page export ──────────────────────────────────────────────────────────────

export default function FasterHome() {
  return (
    <div className="font-sans antialiased text-text-primary bg-bg-primary">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <WhySection />
      <FeesSection />
      <AppSection />
      <Footer />
    </div>
  );
}

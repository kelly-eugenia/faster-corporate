import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { fadeUp, pulse } from "../utils/animations";

import SEO from "../components/SEO";
import { useSEO } from "../utils/useSEO";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import Reviews from "../components/Reviews";
import LoanCalculator from "../components/LoanCalculator";
import FAQSection from "../components/FAQSection";

import { HOME_FAQS } from "../utils/faqs";

import HeroPhoto from "../assets/hero-sect.webp";
import TeamPhoto from "../assets/faster-team-values.jpg";
import CTAPhoto from "../assets/app.png";

import "../App.css";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const currency0 = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0,
});

// ─── Data ─────────────────────────────────────────────────────────────────────

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
    desc: "If approved, you'll receive a credit limit of up to $10,000 — the maximum you can draw at a time.",
  },
  {
    num: "03",
    icon: <path d="M12 5v14M5 12l7 7 7-7" />,
    title: "Draw when you need it",
    desc: "Transfer funds from your limit to your bank account — same business day, with a clear repayment schedule.",
  },
  {
    num: "04",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
      />
    ),
    title: "Repay & reuse",
    desc: "As you repay, your available balance refreshes. Draw again up to your limit — without a new application.",
  },
];

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
        Held by Lightspeed CashFaster Ventures Pty Ltd, Australian Credit
        Licence 569825. Bound by Chapter 3 of the{" "}
        <em>National Consumer Credit Protection Act 2009</em>, the same
        responsible-lending obligations that apply across Australian credit.
      </>
    ),
  },
  {
    title: "Independently security-certified",
    badge: "ISO 27001",
    body: "Audited and certified by Lloyd's Register for Information Security Management. Bank-grade encryption, real-time monitoring, multi-layered protection and documented incident-response apply to your personal data and account activity.",
  },
  {
    title: "Responsible-lending assessment, every application",
    badge: null,
    body: (
      <>
        Every application is reviewed against our lending criteria and your
        individual financial situation. If you're already in financial
        difficulty, we won't lend — and we'll point you to the{" "}
        <a
          href="https://ndh.org.au"
          className="text-primary-light font-semibold border-b border-border-default hover:border-primary-light transition-colors"
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

const APP_FEATURES = [
  {
    strong: "Apply in around 5 minutes.",
    text: " ID, residency and bank details captured securely.",
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const seo = useSEO("home");
  const navigate = useNavigate();

  const amount = useMotionValue(5000);
  const amountFormatted = useTransform(amount, (latest) =>
    currency0.format(latest),
  );

  useEffect(() => {
    const controls = animate(amount, 10000, { duration: 0.8, ease: "easeOut" });
    return () => controls.stop();
  }, [amount]);

  return (
    <>
      <SEO
        title={
          seo?.title ||
          "Faster.com.au | Flexible Line of Credit Up to $10,000 in Australia"
        }
        description={
          seo?.description ||
          "A revolving line of credit up to $10,000 you don't reapply for. Pay interest only on what you draw, calculated daily on the outstanding balance. Apply in minutes."
        }
        ogTitle={
          seo?.ogTitle ||
          "Faster.com.au | Flexible Line of Credit Up to $10,000 in Australia"
        }
        ogDescription={
          seo?.ogDescription ||
          "Draw, repay and reuse up to $10,000 — no reapplying. Interest only on what you've actually drawn. See if you're eligible."
        }
        canonicalUrl={seo?.canonicalUrl}
      />

      <div className="font-sans antialiased text-text-primary bg-bg-primary">
        <NavBar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden hero-padding bg-hero-gradient">
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="py-4 lg:pb-0 grid grid-cols-1 lg:grid-cols-[1.2fr_0.95fr] lg:text-left text-center justify-center content-center gap-14 items-center"
            >
              {/* Left */}
              <div>
                <Pill text="Credit, made clearer" variant="light" />

                <h1
                  className="text-[clamp(40px,5.2vw,68px)] leading-[1.05] tracking-[-0.02em] font-bold mt-[22px] mb-[18px] text-bg-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Access up to{" "}
                  <span className="inline-block w-[7.2ch] align-baseline text-left">
                    <motion.span className="bg-text-gradient bg-clip-text text-transparent font-[800] tabular-nums whitespace-nowrap">
                      {amountFormatted}
                    </motion.span>
                  </span>
                  with a flexible{" "}
                  <span className="bg-text-gradient bg-clip-text text-transparent italic font-[700]">
                    Line of Credit
                  </span>
                </h1>

                <p className="text-[16px] sm:text-[18px] text-bg-secondary/80 max-w-[52ch] mx-auto lg:mx-0 mb-4">
                  A revolving line of credit you don't have to reapply for.
                  Interest only on what you've actually drawn, calculated daily
                  on your outstanding balance.
                </p>

                {/* CTA */}
                <div className="flex flex-col max-w-sm mx-auto lg:mx-0 mb-9">
                  <motion.button
                    className="my-6 mb-4 inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold bg-primary text-bg-primary border border-transparent py-[11px] sm:py-[15px] text-base sm:text-xl shadow-btn-primary hover:bg-primary-light group cursor-pointer"
                    onClick={() => navigate("/apply")}
                    variants={pulse}
                    initial="initial"
                    animate="animate"
                  >
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
                  </motion.button>
                  <span className="text-[12.5px] text-border-default tracking-[0.02em]">
                    Takes 5 minutes · ID + bank details
                  </span>
                </div>

                {/* Trust strip */}
                <div
                  className="flex flex-wrap gap-3 justify-center lg:justify-start"
                  role="region"
                  aria-label="Trust signals"
                >
                  {/* Trustpilot */}
                  <div
                    className="inline-flex items-center gap-2.5 px-4 py-3 rounded-[12px] border border-bg-primary/10"
                    style={{
                      background: "rgba(252,253,255,0.06)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <div
                      className="inline-flex gap-px"
                      aria-label="4.4 out of 5 stars"
                    >
                      {Array.from({ length: 4 }).map((_, i) => (
                        <svg
                          key={i}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-[16px] h-[16px]"
                        >
                          <path d="M0 0h24v24H0z" fill="#00b67a" />
                          <path
                            d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
                            fill="#fff"
                          />
                        </svg>
                      ))}
                      <svg viewBox="0 0 24 24" className="w-[16px] h-[16px]">
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
                      <div className="font-bold text-[13px] text-bg-primary leading-none">
                        4.4 / 5
                      </div>
                      <div className="text-[11px] text-border-default/60 mt-0.5">
                        1,500+ Trustpilot reviews
                      </div>
                    </div>
                  </div>

                  {/* ISO 27001 */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-[12px] border border-bg-primary/10"
                    style={{
                      background: "rgba(252,253,255,0.06)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="size-6 mr-1 text-primary-light"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <div>
                      <div className="text-[13px] font-semibold text-bg-primary leading-none">
                        ISO 27001
                      </div>
                      <div className="text-[11px] text-border-default/60 mt-0.5">
                        Lloyd's Register
                      </div>
                    </div>
                  </div>

                  {/* ACL */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-[12px] border border-bg-primary/10"
                    style={{
                      background: "rgba(252,253,255,0.06)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="size-6 mr-1 text-primary-light"
                    >
                      <path d="M3 12l2 2 4-4M3 6h18M3 18h18" />
                    </svg>
                    <div>
                      <div className="text-[13px] font-semibold text-bg-primary leading-none">
                        ACL 569825
                      </div>
                      <div className="text-[11px] text-border-default/60 mt-0.5">
                        Aust. Credit Licence
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: hero photo */}
              <motion.div
                animate={{ y: [-10, 10] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className="relative flex justify-center"
                aria-hidden="true"
              >
                <img
                  src={HeroPhoto}
                  alt="Smiling customer enjoying Faster"
                  className="block w-auto h-full max-h-[580px]"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-padding bg-bg-primary"
        >
          <div className="text-center w-full max-w-[1440px] mx-auto px-6">
            <div className="max-w-[720px] mx-auto mb-8 sm:mb-12 md:mb-14">
              <Pill text="How it works" className="mb-[18px]" />
              <h2
                className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-[18px] text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Not a loan. A credit limit you control.
              </h2>
              <p className="text-[clamp(16px,3.5vw,18px)] text-muted-secondary m-0 leading-[1.6]">
                A Faster Line of Credit gives you an approved limit you can draw
                from when you need it. Repay, and the balance is ready to use
                again. No reapplying every time.
              </p>
            </div>

            <div className="text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mb-8">
              {HOW_STEPS.map((step) => (
                <div
                  key={step.num}
                  className="bg-bg-secondary border border-border-subtle rounded-card p-[24px_22px] relative transition-all duration-150 hover:border-border-default hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-full bg-primary text-bg-primary inline-flex items-center justify-center font-bold text-[13px] mb-4">
                    {step.num}
                  </div>
                  <div className="absolute top-[22px] right-[22px] text-primary-light/40">
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

            <Link to="/how-it-works" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </motion.section>

        {/* ── Why / About ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="about"
          className="py-[110px] bg-bg-secondary section-padding"
        >
          <div className="w-full max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
              {/* Left */}
              <div className="text-center lg:text-left">
                <Pill
                  text="About Faster.com.au · Why trust us"
                  variant="white"
                  className="mb-[18px]"
                />
                <h2
                  className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-[18px] text-text-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Trust is what you can verify yourself.
                </h2>
                <p className="mx-auto lg:mx-0 text-[clamp(16px,3.5vw,18px)] text-muted-primary leading-[1.6] lg:max-w-[52ch]">
                  Faster.com.au is an Australian digital credit provider. We
                  provide a{" "}
                  <strong className="text-text-primary font-semibold">
                    flexible Line of Credit
                  </strong>{" "}
                  — a pre-approved limit you draw from when you need it. Repay,
                  and the balance is ready to use again. Most importantly, we
                  run it against specific obligations you can check, not just
                  claims.
                </p>

                {/* Trust ledger */}
                <div className="text-left mt-7 border-t border-border-subtle">
                  {TRUST_ROWS.map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[28px_1fr] gap-3 sm:gap-4 py-[18px] border-b border-border-subtle items-start"
                    >
                      <span className="size-[24px] rounded-full bg-bg-primary border border-border-default text-primary inline-flex items-center justify-center mt-0.5 flex-shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="size-[16px]"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <div>
                        <h4 className="m-0 mb-1 text-[16px] font-bold text-text-primary tracking-[-0.005em]">
                          {row.title}
                          {row.badge && (
                            <span className="w-fit block sm:inline-block ml-0 mt-1 mb-2 sm:ml-3 sm:mt-0 text-[11px] font-semibold text-primary bg-bg-primary px-[7px] py-[2px] rounded-md tracking-[0.04em] align-[1px]">
                              {row.badge}
                            </span>
                          )}
                        </h4>
                        <p className="m-0 text-[14px] text-muted-secondary leading-[1.5]">
                          {row.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-[15px] mt-6 pb-0.5 border-b border-border-default hover:border-primary transition-colors"
                >
                  Learn more about us
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Right: team photo */}
              <div className="relative">
                <div
                  className="w-full aspect-[4/3] lg:aspect-[4/5] rounded-card-lg overflow-hidden"
                  style={{ boxShadow: "0 20px 50px -16px rgba(11,16,36,0.3)" }}
                >
                  <img
                    src={TeamPhoto}
                    alt="Faster is deeply invested in our customers"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Reviews sub-section */}
            <div className="relative mt-24 text-center">
              <div className="absolute top-[14px] left-1/2 h-px w-screen -translate-x-1/2 bg-border-default z-0" />
              <Pill
                text="What customers say"
                variant="white"
                className="relative mb-[18px] z-10"
              />
              <Reviews />
            </div>
          </div>
        </motion.section>

        {/* ── Calculator ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="fees"
          className="section-padding relative overflow-hidden bg-fees-gradient"
        >
          <div id="calculator" className="w-full max-w-[1440px] mx-auto px-6">
            <div className="text-center max-w-[88ch] mx-auto mb-8 sm:mb-12 md:mb-14">
              <Pill
                text="Try it on your numbers"
                variant="light"
                className="mb-[18px]"
              />
              <h2
                className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-bg-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                What it'd look like for you
              </h2>
              <p className="text-[clamp(16px,3.5vw,18px)] text-bg-secondary/70 m-0 leading-[1.6]">
                Interest at 47% p.a. on your outstanding balance is the only
                cost while you're borrowing. Everything is set out before you
                borrow.
              </p>
            </div>

            <div className="max-w-[880px] mx-auto">
              <LoanCalculator />
            </div>
          </div>
        </motion.section>

        {/* ── CTA ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="apply"
          className="section-padding bg-bg-primary overflow-hidden"
        >
          <div className="w-full max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-2 lg:gap-14 items-center rounded-card-lg px-8 sm:px-12 md:px-16 relative overflow-hidden bg-hero-gradient">
              {/* Left */}
              <div className="relative z-10 pt-12 md:py-16 text-center lg:text-left mx-auto lg:mx-0">
                <Pill
                  text="Get started in 5 minutes"
                  variant="light"
                  className="mb-[18px]"
                />
                <h2
                  className="text-[clamp(34px,4vw,50px)] leading-[1.05] tracking-[-0.025em] font-bold mb-4 text-bg-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Ready to get started?
                </h2>

                <div className="text-left grid gap-3 mt-8 mb-6">
                  {APP_FEATURES.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-[14.5px] text-bg-secondary/85"
                    >
                      <span className="w-6 h-6 rounded-full bg-primary-light/15 text-primary-light inline-flex items-center justify-center flex-shrink-0 mt-0.5">
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
                      <span className="text-bg-secondary">
                        <strong className="text-bg-primary font-semibold">
                          {feat.strong}
                        </strong>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/apply" className="btn btn-primary text-2xl group">
                  Apply Now
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="ml-1 transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>

                <div className="mt-[16px] pt-[22px] border-t border-bg-primary/10 max-w-[72ch] text-[13.5px] text-bg-secondary/70 leading-[1.55]">
                  <p className="mt-2 text-[13px] text-bg-secondary tracking-[0.01em]">
                    You'll need:{" "}
                    <strong>
                      Australian residency · government-issued ID · 90+ days of
                      income · a bank account in your name.
                    </strong>
                  </p>
                </div>
              </div>

              {/* Right: app UI mockup */}
              <div className="relative z-10 flex items-end justify-center">
                <img
                  src={CTAPhoto}
                  alt="Smiling customer enjoying Faster"
                  className="block w-auto h-full max-h-[600px] object-bottom"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── FAQ ── */}
        <section className="section-padding bg-bg-secondary">
          <div className="w-full max-w-[1440px] mx-auto px-6">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <Pill text="FAQ" variant="white" className="mb-[18px]" />
              <h2
                className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Customers frequently ask
              </h2>
              <p className="text-[clamp(16px,3.5vw,18px)] text-muted-secondary m-0 leading-[1.6]">
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
            <FAQSection faqs={HOME_FAQS} white />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

import SEO from "../components/SEO";
import { useSEO } from "../utils/useSEO";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import FAQSection from "../components/FAQSection";
import CTA from "../components/CTA";

import { ABOUT_FAQS } from "../utils/faqs";

import AboutPhoto from "../assets/about-faster.jpg";

import "../App.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const HERO_META = [
  { l: "What we offer", v: "One line-of-credit product" },
  { l: "Credit licence", v: "ACL 569825 (ASIC register)" },
  { l: "Security", v: "ISO 27001 certified" },
  { l: "Built & run in", v: "Australia" },
];

const PROMISE_CARDS: {
  fig: string;
  figSub?: string;
  title: string;
  body: React.ReactNode;
}[] = [
  {
    fig: "1",
    figSub: " cost",
    title: "Simple, by design",
    body: (
      <>
        While you're borrowing, interest at 47% p.a. on your outstanding balance
        is the only cost. No establishment fee, no monthly account fee, no
        redraw fee, no early-repayment penalty. A 20% fee applies only if a
        manual reassessment of your account is needed, never on your first loan.
        <div className="mt-2">
          <Link
            to="/fees"
            className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
          >
            See the fees →
          </Link>
        </div>
      </>
    ),
  },
  {
    fig: "0",
    figSub: " surprises",
    title: "Upfront, in writing",
    body: (
      <>
        Every cost is shown before you commit and set out in full in your credit
        contract. There&apos;s no &ldquo;additional charges may apply&rdquo;
        small print.
      </>
    ),
  },
  {
    fig: "1:1",
    title: "Responsible, every time",
    body: (
      <>
        Every application is individually assessed against your financial
        situation and our lending criteria. If a repayment wouldn&apos;t fit
        without hardship, we don&apos;t lend.
        <div className="mt-2">
          <Link
            to="/how-it-works#check"
            className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
          >
            What we check →
          </Link>
        </div>
      </>
    ),
  },
];

const REG_ROWS: {
  icon: React.ReactNode;
  title: string;
  num: string;
  body: React.ReactNode;
}[] = [
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    title: "Registered Australian credit provider",
    num: "ACL 569825",
    body: (
      <>
        Bound by the National Consumer Credit Protection Act 2009 — the
        responsible-lending regime that requires us to assess every application
        against your individual circumstances.{" "}
        <a
          href="https://connectonline.asic.gov.au/RegistrySearch/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          Verify on ASIC →
        </a>
      </>
    ),
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
      />
    ),

    title: "Clear, fair, accurate advertising",
    num: "ASIC RG 234",
    body: "We follow ASIC's Regulatory Guide 234 on advertising credit clearly and accurately, so the costs you see are presented in a way that's not misleading.",
  },
  {
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
    title: "Independently security-certified",
    num: "ISO 27001",
    body: "Our information-security management is audited and certified by Lloyd's Register. Covers encryption, access controls, monitoring and incident response for everything you share with us.",
  },
  {
    icon: (
      <path d="M9 12l2 2 4-4M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    ),
    title: "Compliant with Australian privacy law",
    num: "Privacy Act",
    body: "Your personal and financial information is handled under the Australian Privacy Principles. We collect only what we need to assess and operate your account — and never sell it.",
  },
];

const SEC_CARDS: {
  icon: React.ReactNode;
  title: string;
  body: string;
  tags?: string[];
}[] = [
  {
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    title: "Bank-grade verification",
    body: "Your identity is checked against government records, and your bank connection uses accredited, encrypted open-banking standards.",
  },
  {
    icon: (
      <>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    title: "Real-time monitoring",
    body: "Continuous monitoring helps detect unusual or suspicious activity on your account, with automated alerts and threat detection running around the clock.",
  },
  {
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
    title: "Multi-layered protection",
    body: "Encryption in transit and at rest, layered access controls, and segregated systems mean no single point of failure exposes your information.",
  },
  {
    icon: (
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
      />
    ),
    title: "Incident response & compliance",
    body: "Documented incident-response procedures and ongoing compliance reviews keep our controls aligned with our ISO 27001 certification and ASIC expectations.",
  },
  {
    icon: (
      <>
        <path d="M18 10h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2M6 10H4a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h2M8 12h8" />
        <rect x="6" y="6" width="12" height="12" rx="3" />
      </>
    ),
    title: "Secure cloud infrastructure",
    body: "We run on hardened, industry-standard cloud infrastructure designed to process applications safely and accurately — without trading off speed for security.",
  },
  {
    icon: (
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    ),
    title: "Customer safety & education",
    body: "We tell you how we'll contact you and what we'll never ask for — so you can spot anyone impersonating us. We'll never ask for your full banking password.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  const seo = useSEO("about");

  return (
    <>
      <SEO
        title={
          seo?.title ||
          "About Faster — Clear, Fair, and Flexible Credit for Australians | Faster.com.au"
        }
        description={
          seo?.description ||
          "Who Faster is, the regulatory obligations we're held to, and exactly how we protect the data you share with us. One product, fully disclosed."
        }
        ogTitle={seo?.ogTitle || "About Faster | Faster.com.au"}
        ogDescription={
          seo?.ogDescription ||
          "An Australian digital credit provider with one product — a short-term line of credit. Registered, responsible and independently security-certified."
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
            className="relative z-10 w-full max-w-[1440px] grid text-center lg:text-left justify-center lg:justify-start mx-auto px-8"
          >
            <div className="max-w-[880px]">
              <Pill text="About Faster" variant="light" className="mb-[22px]" />
              <h1
                className="text-[clamp(40px,5.2vw,68px)] leading-[1.0] tracking-[-0.025em] font-bold mb-[22px] text-bg-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Borrowing that&apos;s clear, fair, and{" "}
                <em className="italic font-medium bg-text-gradient bg-clip-text text-transparent">
                  makes sense
                </em>
                .
              </h1>
              <p className="text-[16px] sm:text-[18px] text-bg-secondary/80 max-w-[62ch] leading-[1.6] mb-[26px] mx-auto lg:mx-0">
                Faster is an Australian digital credit provider with one product
                — a short-term line of credit you draw from when you need it.
                This page is who we are, the obligations we&apos;re held to, and
                exactly how we protect the data you share with us.
              </p>

              <div className="flex flex-wrap gap-7 mt-8 pt-[26px] border-t border-bg-primary/12 text-center lg:text-left justify-center lg:justify-start">
                {HERO_META.map((item) => (
                  <div key={item.l}>
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-[#b8c4ff]/70 mb-1.5 font-semibold">
                      {item.l}
                    </span>
                    <span className="text-[16px] text-bg-primary font-semibold tracking-[-0.01em]">
                      {item.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── What we do ── */}
        <section id="what" className="section-padding bg-bg-primary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Pill text="What we do" className="mb-[18px]" />
                <h2
                  className="text-[clamp(30px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-5 text-text-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  A credit limit you control,{" "}
                  <span className="text-primary font-[700]">
                    draw when you need it
                  </span>
                  .
                </h2>
                <p className="text-[17px] text-muted-primary leading-[1.65] mb-4 max-w-[54ch]">
                  A Faster Line of Credit gives you an approved limit you can
                  draw from whenever you need to, up to $10,000.{" "}
                  <strong className="text-text-primary font-semibold">
                    It isn&apos;t a one-off lump sum like a personal loan, and
                    it isn&apos;t the open-ended habit-loop of a credit card.
                  </strong>
                </p>
                <p className="text-[17px] text-muted-primary leading-[1.65] mb-4 max-w-[54ch]">
                  Repay what you&apos;ve drawn and the balance is ready to use
                  again — no new application every time. You only pay interest
                  on the amount you&apos;ve actually drawn, for the days
                  it&apos;s outstanding.
                </p>

                <div className="flex flex-wrap gap-2.5 mt-6">
                  {["Draw", "Repay", "Reuse"].map((label, i) => (
                    <React.Fragment key={label}>
                      <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-bg-secondary border border-border-subtle rounded-[10px] text-[14px] font-semibold text-muted-primary">
                        <span className="text-[11px] font-semibold text-primary bg-bg-primary border border-bg-secondary w-[22px] h-[22px] rounded-full inline-flex items-center justify-center">
                          {i + 1}
                        </span>
                        {label}
                      </span>
                      {i < 2 && (
                        <span className="hidden sm:inline-flex items-center text-ink-light">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            className="w-4 h-4"
                          >
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>

              {/* Photo */}
              <div className="relative max-w-[460px] lg:max-w-none">
                <div
                  className="w-full aspect-[1/1] rounded-card-lg overflow-hidden"
                  style={{ boxShadow: "0 20px 50px -16px rgba(11,16,36,0.3)" }}
                >
                  <img
                    src={AboutPhoto}
                    alt="The Faster team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute bottom-[-22px] left-[-22px] bg-bg-primary border border-border-subtle rounded-card p-[16px_20px] max-w-[240px]"
                  style={{ boxShadow: "0 12px 30px -8px rgba(11,16,36,0.18)" }}
                >
                  <div className="text-[10px] uppercase tracking-[0.14em] text-muted-secondary font-semibold mb-1.5">
                    The product
                  </div>
                  <div className="text-[14.5px] text-text-primary font-semibold leading-[1.35]">
                    One revolving limit, up to{" "}
                    <strong className="text-primary">$10,000</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our promise ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="promise"
          className="section-padding bg-bg-secondary"
        >
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <Pill text="Our promise" variant="white" className="mb-[18px]" />
              <h2
                className="text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                We built Faster because we were tired of credit that felt
                confusing.
              </h2>
              <p className="text-[17px] text-muted-secondary m-0 leading-[1.65]">
                So instead of telling you we&apos;re &ldquo;simple, upfront and
                responsible&rdquo;, here&apos;s the specific thing behind each
                promise — the figure does the talking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PROMISE_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="bg-bg-primary border border-border-subtle rounded-card-lg p-[32px_30px] flex flex-col"
                >
                  <div className="text-[40px] font-bold text-primary tracking-[-0.02em] leading-none mb-1.5 tabular-nums">
                    {card.fig}
                    {card.figSub && (
                      <small className="text-[16px] text-muted-secondary font-medium">
                        {card.figSub}
                      </small>
                    )}
                  </div>
                  <h3 className="text-[18px] font-bold mb-2.5 text-text-primary tracking-[-0.01em]">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-muted-secondary m-0 leading-[1.55]">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── Registered & responsible ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="registered"
          className="section-padding bg-bg-primary"
        >
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
              <div>
                <Pill text="Registered & responsible" className="mb-[18px]" />
                <h2
                  className="text-[clamp(30px,3.6vw,42px)] leading-[1.05] tracking-[-0.025em] font-bold mb-5 text-text-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Trust is what you can verify yourself.
                </h2>
                <p className="text-[17px] text-muted-primary leading-[1.65] mb-4">
                  Faster is operated by{" "}
                  <strong className="text-text-primary font-semibold">
                    Faster Financial Pty Ltd
                  </strong>{" "}
                  (ABN 47 651 975 932), with credit provided under Australian
                  Credit Licence 569825 held by Lightspeed CashFaster Ventures
                  Pty Ltd. We&apos;re held to the responsible-lending
                  obligations that apply across Australian credit — and each one
                  is independently verifiable, not just a claim on a page.
                </p>
                <p className="text-[16px] text-muted-primary leading-[1.7] m-0">
                  If you want to confirm any of it,{" "}
                  <a
                    href="https://connectonline.asic.gov.au/RegistrySearch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
                  >
                    ASIC&apos;s professional register
                  </a>{" "}
                  lets you look up our credit licence by number.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {REG_ROWS.map((row) => (
                  <div
                    key={row.title}
                    className="grid grid-cols-[52px_1fr] gap-4 p-[22px_24px] bg-bg-secondary border border-border-subtle rounded-card items-start"
                  >
                    <div className="w-11 h-11 rounded-[12px] bg-bg-primary text-primary border border-bg-secondary inline-flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-[21px] h-[21px]"
                      >
                        {row.icon}
                      </svg>
                    </div>
                    <div>
                      <h4 className="m-0 mb-1 text-[15.5px] font-bold text-text-primary tracking-[-0.005em] flex items-baseline flex-wrap gap-2.5">
                        {row.title}
                        <span className="text-[11px] text-primary bg-bg-primary px-2 py-0.5 rounded tracking-[0.04em] font-semibold border border-border-subtle">
                          {row.num}
                        </span>
                      </h4>
                      <p className="m-0 text-[13.5px] text-muted-secondary leading-[1.55]">
                        {row.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Security ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="security"
          className="section-padding relative overflow-hidden bg-fees-gradient text-bg-primary"
        >
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="text-center max-w-[720px] mx-auto mb-14">
              <Pill text="Security" variant="light" className="mb-[18px]" />
              <h2
                className="text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-bg-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Security you can trust, tech you can rely on.
              </h2>
              <p className="text-[17px] text-bg-secondary/70 m-0 leading-[1.65]">
                As a digital-first credit provider, Faster is built on secure,
                industry-standard technology to protect your personal
                information, bank data, and account activity — at every step.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {SEC_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="bg-bg-primary/5 border border-bg-primary/10 rounded-card-lg p-[28px_26px] backdrop-blur-lg"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-[rgba(184,196,255,0.12)] border border-[rgba(184,196,255,0.2)] text-[#b8c4ff] inline-flex items-center justify-center mb-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-[19px] h-[19px]"
                    >
                      {card.icon}
                    </svg>
                  </div>
                  <h4 className="text-[17px] font-bold mb-2 text-bg-primary tracking-[-0.01em] leading-[1.3]">
                    {card.title}
                  </h4>
                  <p className="text-[14px] text-bg-secondary/70 m-0 leading-[1.65]">
                    {card.body}
                  </p>
                  {card.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10.5px] tracking-[0.04em] text-[#b8c4ff] bg-[rgba(184,196,255,0.08)] border border-[rgba(184,196,255,0.18)] px-2 py-[3px] rounded-[5px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Read-only band */}
            <div className="mt-6 bg-primary-light/[0.06] border border-primary-light/20 rounded-card-lg p-[32px_36px] grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-10 items-center">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-primary-light/10 border border-primary-light/25 text-primary-light inline-flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-[26px] h-[26px]"
                >
                  <path d="M3.28046,2.21962 L21.7802,20.7198 C22.0731,21.0127 22.0731,21.4875 21.7802,21.7804 C21.4873,22.0733 21.0125,22.0733 20.7196,21.7804 L14,15.0608 L9.0621,19.9987 C8.78522,20.2756 8.44089,20.4754 8.06312,20.5784 L2.94743,21.9736 C2.38756,22.1263 1.87383,21.6126 2.02652,21.0527 L3.42171,15.937 C3.52474,15.5593 3.72456,15.2149 4.00144,14.9381 L8.93944,10.0001 L2.21979,3.28027 C1.9269,2.98737 1.9269,2.5125 2.2198,2.21961 C2.51269,1.92672 2.98757,1.92672 3.28046,2.21962 Z M10.0001,11.0607 L5.0621,15.9987 C4.9928825,16.067925 4.93811,16.1498063 4.90056266,16.2395344 L4.86886,16.3317 L3.81901,20.1811 L7.66845,19.1313 C7.76289,19.105575 7.85106375,19.061625 7.92818297,19.0023609 L8.00144,18.9381 L12.9392,13.9999 L10.0001,11.0607 Z M15.9698,2.96973 C17.3672,1.57227 19.633,1.57227 21.0304,2.96973 C22.3779893,4.31728071 22.4261175,6.47219893 21.1747846,7.87741875 L21.0304,8.03039 L16.1207,12.9401 L15.0598,11.8793 L17.9393,8.99963 L15.0003,6.06063 L12.1207,8.94013 L11.0601,7.87943 L15.9698,2.96973 Z M17.0304,4.03039 L16.0603,4.99963 L18.9993,7.93963 L19.9698,6.96973 C20.7814,6.15805 20.7814,4.84206 19.9698,4.03039 C19.1581,3.21871 17.8421,3.21871 17.0304,4.03039 Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-[21px] font-bold m-0 mb-1.5 text-bg-primary tracking-[-0.015em]">
                  We can read your statements. We can never move your money.
                </h3>
                <p className="text-[14.5px] text-bg-secondary/75 m-0 leading-[1.65]">
                  When you connect your bank account, access is{" "}
                  <strong className="text-bg-primary">read-only</strong> — we
                  can see the transaction history we need to assess your
                  application, but we can never withdraw or move funds from your
                  account. Repayments only happen through the direct-debit
                  arrangement you authorise separately, on the schedule in your
                  contract.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Support + cross-link ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-padding bg-bg-primary"
        >
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Contact card */}
              <div className="bg-bg-secondary/80 border border-border-subtle rounded-card-lg p-[36px_38px] flex flex-col">
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold mb-3.5">
                  Need support?
                </div>
                <h3 className="text-[23px] font-bold tracking-[-0.015em] m-0 mb-2.5 text-text-primary">
                  Questions about your account? We&apos;re here to help.
                </h3>
                <p className="text-[15px] text-muted-secondary m-0 mb-[22px] leading-[1.55] max-w-[44ch]">
                  Email us anytime at{" "}
                  <a
                    href="mailto:support@faster.com.au"
                    className="text-primary font-semibold border-b border-border-default hover:border-primary transition-colors"
                  >
                    support@faster.com.au
                  </a>{" "}
                  — or start a chat with us during business hours.
                </p>
                <div className="mt-auto flex gap-3 flex-wrap">
                  <a
                    href="mailto:support@faster.com.au"
                    className="btn btn-ghost-light"
                  >
                    Email support
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.tidioChatApi) {
                        window.tidioChatApi.open();
                      }
                    }}
                    className="btn btn-ghost-light"
                  >
                    Start a chat
                  </a>
                </div>
                <div className="mt-[18px] pt-[18px] border-t border-border-default text-[13px] text-muted-secondary leading-[1.55]">
                  In financial difficulty? Call the National Debt Helpline on{" "}
                  <strong className="text-accent">1800 007 007</strong> — free,
                  independent and confidential.
                </div>
              </div>

              {/* Cross-link card */}
              <div
                className="border border-bg-secondary rounded-card-lg p-[36px_38px] flex flex-col"
                style={{
                  background:
                    "linear-gradient(135deg, #FCFDFF 0%, #EAEDF5 100%)",
                }}
              >
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold mb-3.5">
                  Next
                </div>
                <h3 className="text-[23px] font-bold tracking-[-0.015em] m-0 mb-2.5 text-text-primary">
                  See exactly how the product works.
                </h3>
                <p className="text-[15px] text-muted-secondary m-0 mb-[22px] leading-[1.55] max-w-[44ch]">
                  Every step from &ldquo;Apply Now&rdquo; to money in your
                  account — who reviews what, how long each part takes, and what
                  we check before we lend.
                </p>
                <div className="mt-auto flex gap-3 flex-wrap">
                  <Link to="/how-it-works" className="btn btn-primary group">
                    How it works
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
                  <Link to="/fees" className="btn btn-ghost-light">
                    See the fees
                  </Link>
                </div>
              </div>
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
            text="Now you've seen who we are."
            desc="One product, fully disclosed before you commit with a
                  same-day decision in most cases."
          />
        </motion.section>

        {/* ── FAQ ── */}
        <section className="section-padding bg-bg-secondary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="text-center mb-12">
              <Pill text="FAQ" variant="white" className="mb-[18px]" />
              <h2
                className="text-[clamp(34px,4vw,52px)] leading-[1.05] tracking-[-0.025em] font-bold text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Customers frequently ask
              </h2>
              <p className="text-[18px] text-muted-secondary m-0 leading-[1.55]">
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
            <FAQSection faqs={ABOUT_FAQS} white />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

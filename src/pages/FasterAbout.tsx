import { Link } from "react-router-dom";
import React from "react";

import SEO from "../components/SEO";
import { useSEO } from "../utils/useSEO";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import FAQSection from "../components/FAQSection";

import AboutWhatPhoto from "../assets/about-what.webp";

import "../App.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const HERO_META = [
  { l: "What we offer", v: "One line-of-credit product" },
  { l: "Licensed by", v: "ASIC · ACL 569825" },
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
    fig: "2",
    figSub: " fees",
    title: "Simple, by design",
    body: (
      <>
        A 20% one-time drawdown fee and 47% p.a. interest while you have a
        balance. No establishment fee, no monthly account fee, no redraw fee, no
        early-repayment penalty.{" "}
        <Link
          to="/fees"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          See every fee →
        </Link>
      </>
    ),
  },
  {
    fig: "0",
    figSub: " surprises",
    title: "Upfront, in writing",
    body: (
      <>
        Every cost — including the 221.36% representative APR — is shown before
        you commit and set out in your credit contract. There&apos;s no
        &ldquo;additional charges may apply&rdquo; small print.
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
        without hardship, we don&apos;t lend.{" "}
        <Link
          to="/how-it-works#check"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          What we check →
        </Link>
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
    icon: <path d="M3 12l3-3 4 4 5-5 6 6M14 8h7v7" />,
    title: "Clear, fair, accurate advertising",
    num: "ASIC RG 234",
    body: "We follow ASIC's Regulatory Guide 234 — including showing our 221.36% representative APR at equal prominence to our 47% p.a. rate, on every page that mentions either.",
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
    body: "Your identity is checked against government records, and your bank connection uses the same accredited, encrypted standards the banks themselves rely on.",
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
    tags: ["Threat detection", "Automated alerts"],
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
    icon: <path d="M21 12a9 9 0 1 1-9-9M21 3v6h-6" />,
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
    icon: <path d="M12 6v6l4 2M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />,
    title: "Customer safety & education",
    body: "We tell you how we'll contact you and what we'll never ask for — so you can spot anyone impersonating us. We'll never ask for your full banking password.",
  },
];

const ABOUT_FAQS = [
  {
    question: "Is Faster safe to use?",
    answer: (
      <>
        Yes. Faster is a registered Australian credit provider (
        <strong className="text-text-primary">ACL 569825</strong>), bound by the
        National Consumer Credit Protection Act and the Australian Privacy
        Principles. Our information security is independently certified to{" "}
        <strong className="text-text-primary">ISO 27001</strong> by Lloyd&apos;s
        Register, and we follow ASIC&apos;s RG 234 guidance on clear, fair
        advertising.
      </>
    ),
  },
  {
    question: "Can Faster move money from my bank account?",
    answer: (
      <>
        <strong className="text-text-primary">No.</strong> The bank connection
        used to assess your application is{" "}
        <strong className="text-text-primary">read-only</strong> — we can view
        transaction history, but we can never withdraw or transfer funds.
        Repayments happen only through the direct-debit arrangement you
        authorise separately, on the schedule set out in your contract.
      </>
    ),
  },
  {
    question: "How is my personal and financial information used?",
    answer: (
      <>
        Only to assess your application and operate your account, under the
        Australian Privacy Principles. We collect what we need — identity,
        income and expense history, credit information — and nothing we
        don&apos;t.{" "}
        <strong className="text-text-primary">
          We never sell or rent your data
        </strong>{" "}
        to marketers, affiliates or other lenders. Full detail is in our{" "}
        <a
          href="#"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          Privacy Policy
        </a>
        .
      </>
    ),
  },
  {
    question: "How will Faster contact me about security or account issues?",
    answer: (
      <>
        By email to the address on your account, and through secure messages
        once you&apos;re logged in.{" "}
        <strong className="text-text-primary">
          We&apos;ll never ask for your full banking password, card PIN, or
          one-time codes
        </strong>{" "}
        — by email, phone or text. If a message asking for those claims to be
        from Faster, it isn&apos;t us; forward it to{" "}
        <a
          href="mailto:security@faster.com.au"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          security@faster.com.au
        </a>
        .
      </>
    ),
  },
  {
    question: 'What does "responsible lending" actually mean here?',
    answer: (
      <>
        Before we lend, we have to be reasonably satisfied the repayments fit
        your situation without causing substantial hardship. That means looking
        at your income regularity and existing commitments — and declining if
        the numbers don&apos;t support it.{" "}
        <a
          href="/how-it-works#check"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          See exactly what we check →
        </a>
      </>
    ),
  },
  {
    question: "What if I can't make a repayment?",
    answer: (
      <>
        Contact us before your payment is due. We can arrange a hardship plan
        and waive late/dishonour fees while we sort it out. You can also call
        the{" "}
        <strong className="text-text-primary">
          National Debt Helpline on 1800 007 007
        </strong>{" "}
        for free, independent, confidential advice that has nothing to do with
        us.
      </>
    ),
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
          "Faster.com.au | About — clear, fair credit, built in Australia"
        }
        description={
          seo?.description ||
          "Who Faster is, the regulatory obligations we're held to, and exactly how we protect the data you share with us. One product, fully disclosed."
        }
        ogTitle={seo?.ogTitle || "Faster.com.au | About Faster"}
        ogDescription={
          seo?.ogDescription ||
          "An Australian digital credit provider with one product — a short-term line of credit. Registered, responsible and independently security-certified."
        }
        canonicalUrl={seo?.canonicalUrl}
      />

      <div className="font-sans antialiased text-text-primary bg-bg-primary">
        <NavBar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden section-padding py-[6em] sm:py-[7em] bg-hero-gradient">
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
            <div className="max-w-[880px]">
              <Pill text="About Faster" variant="light" className="mb-[22px]" />
              <h1
                className="text-[clamp(40px,5.4vw,70px)] leading-[1.0] tracking-[-0.025em] font-bold mb-[22px] text-bg-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Borrowing that&apos;s clear, fair, and{" "}
                <em className="italic font-medium bg-text-gradient bg-clip-text text-transparent">
                  makes sense
                </em>
                .
              </h1>
              <p className="text-[18px] text-bg-secondary/80 max-w-[62ch] leading-[1.6] mb-[26px]">
                Faster is an Australian digital credit provider with one product
                — a short-term line of credit you draw from when you need it.
                This page is who we are, the obligations we&apos;re held to, and
                exactly how we protect the data you share with us.
              </p>

              <div className="flex flex-wrap gap-7 mt-8 pt-[26px] border-t border-bg-primary/12">
                {HERO_META.map((item) => (
                  <div key={item.l}>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#b8c4ff]/70 mb-1.5 font-semibold">
                      {item.l}
                    </span>
                    <span className="text-[16px] text-bg-primary font-semibold tracking-[-0.01em]">
                      {item.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── What we do ── */}
        <section id="what" className="section-padding bg-bg-primary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
              <div>
                <Pill text="What we do" variant="white" className="mb-[18px]" />
                <h2
                  className="text-[clamp(30px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-5 text-text-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  A credit limit you control —{" "}
                  <span className="text-primary">draw when you need it</span>.
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

                {/* Draw → Repay → Reuse loop */}
                <div className="flex flex-wrap gap-2.5 mt-6">
                  {["Draw", "Repay", "Reuse"].map((label, i) => (
                    <React.Fragment key={label}>
                      <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-bg-secondary border border-border-subtle rounded-[10px] text-[14px] font-semibold text-muted-primary">
                        <span className="font-mono text-[11px] text-primary bg-bg-primary border border-bg-secondary w-[22px] h-[22px] rounded-full inline-flex items-center justify-center">
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
              </div>

              {/* Photo + stamp */}
              <div className="relative max-w-[460px] lg:max-w-none">
                <div
                  className="w-full aspect-[4/5] rounded-card-lg overflow-hidden"
                  style={{ boxShadow: "0 20px 50px -16px rgba(11,16,36,0.3)" }}
                >
                  <img
                    src={AboutWhatPhoto}
                    alt="A customer using the Faster app"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute bottom-[-22px] left-[-22px] bg-bg-primary border border-border-subtle rounded-card p-[16px_20px] max-w-[240px]"
                  style={{ boxShadow: "0 12px 30px -8px rgba(11,16,36,0.18)" }}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-secondary font-semibold mb-1.5">
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
        <section id="promise" className="section-padding bg-bg-secondary">
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
              <p className="text-[17px] text-muted-secondary m-0 leading-[1.55]">
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
                  <div className="font-mono text-[40px] font-bold text-primary tracking-[-0.02em] leading-none mb-1.5 tabular-nums">
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
        </section>

        {/* ── Registered & responsible ── */}
        <section id="registered" className="section-padding bg-bg-primary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
              <div>
                <Pill
                  text="Registered & responsible"
                  variant="white"
                  className="mb-[18px]"
                />
                <h2
                  className="text-[clamp(30px,3.6vw,42px)] leading-[1.05] tracking-[-0.025em] font-bold mb-5 text-text-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Trust is what you can verify yourself.
                </h2>
                <p className="text-[16px] text-muted-primary leading-[1.7] mb-4">
                  Faster is operated by{" "}
                  <strong className="text-text-primary font-semibold">
                    Lightspeed CashFaster Ventures Pty Ltd
                  </strong>{" "}
                  (ABN 42 096 001 900), a registered Australian credit provider.
                  We&apos;re held to the same core obligations the banks operate
                  under — and each one is independently verifiable, not just a
                  claim on a page.
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
                        <span className="font-mono text-[11px] text-primary bg-bg-primary px-2 py-0.5 rounded tracking-[0.04em] font-semibold">
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
        </section>

        {/* ── Security ── */}
        <section
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
              <p className="text-[17px] text-bg-secondary/70 m-0 leading-[1.55]">
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
                  <h4 className="text-[16.5px] font-bold mb-2 text-bg-primary tracking-[-0.01em] leading-[1.3]">
                    {card.title}
                  </h4>
                  <p className="text-[13.5px] text-bg-secondary/70 m-0 leading-[1.55]">
                    {card.body}
                  </p>
                  {card.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10.5px] tracking-[0.04em] text-[#b8c4ff] bg-[rgba(184,196,255,0.08)] border border-[rgba(184,196,255,0.18)] px-2 py-[3px] rounded-[5px]"
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
            <div className="mt-6 bg-[rgba(0,182,122,0.06)] border border-[rgba(0,182,122,0.2)] rounded-card-lg p-[32px_36px] grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-6 items-center">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-[rgba(0,182,122,0.12)] border border-[rgba(0,182,122,0.28)] text-[#4ade9e] inline-flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-[26px] h-[26px]"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <h3 className="text-[21px] font-bold m-0 mb-1.5 text-bg-primary tracking-[-0.015em]">
                  We can read your statements. We can never move your money.
                </h3>
                <p className="text-[14.5px] text-bg-secondary/75 m-0 leading-[1.6] max-w-[76ch]">
                  When you connect your bank account, access is{" "}
                  <strong className="text-bg-primary">read-only</strong> — we
                  can see the transaction history we need to assess your
                  application, but we can never withdraw, transfer, or move
                  funds from your account. Repayments only ever happen through
                  the direct-debit arrangement you authorise separately, on the
                  schedule in your contract.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="section-padding bg-bg-secondary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="text-center mb-12 max-w-[720px] mx-auto">
              <Pill
                text="Customers frequently ask"
                variant="white"
                className="mb-[18px]"
              />
              <h2
                className="text-[clamp(34px,4vw,52px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                About us &amp; keeping you safe.
              </h2>
              <p className="text-[17px] text-muted-secondary m-0 leading-[1.55]">
                Questions about how the product works and what it costs live on{" "}
                <Link
                  to="/how-it-works"
                  className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
                >
                  How it works
                </Link>{" "}
                and the{" "}
                <Link
                  to="/fees"
                  className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
                >
                  Fees page
                </Link>
                .
              </p>
            </div>

            <FAQSection faqs={ABOUT_FAQS} white />
          </div>
        </section>

        {/* ── Support + cross-link ── */}
        <section className="section-padding bg-bg-primary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Contact card */}
              <div className="bg-bg-secondary border border-border-subtle rounded-card-lg p-[36px_38px] flex flex-col">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold mb-3.5">
                  Need support?
                </div>
                <h3 className="text-[23px] font-bold tracking-[-0.015em] m-0 mb-2.5 text-text-primary">
                  Questions about your account? We&apos;re here to help.
                </h3>
                <p className="text-[15px] text-muted-secondary m-0 mb-[22px] leading-[1.55] max-w-[44ch]">
                  Email us anytime at{" "}
                  <a
                    href="mailto:support@faster.com.au"
                    className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
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
                  <a href="#" className="btn btn-ghost-light">
                    Start a chat
                  </a>
                </div>
                <div className="mt-[18px] pt-[18px] border-t border-border-subtle text-[13px] text-muted-secondary leading-[1.55]">
                  In financial difficulty? Call the National Debt Helpline on{" "}
                  <strong className="text-[#b87900]">1800 007 007</strong> —
                  free, independent and confidential.
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
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-secondary font-semibold mb-3.5">
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
        </section>

        {/* ── Final CTA ── */}
        <section
          id="apply"
          className="section-padding relative overflow-hidden bg-final-gradient"
        >
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="bg-bg-primary/[0.04] border border-bg-primary/10 rounded-card-lg p-8 md:p-[56px_64px] grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
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
                  Clear, fair, and built to protect you. Apply in about five
                  minutes.
                </h2>
                <p className="text-[17px] text-bg-secondary/72 mb-7 max-w-[46ch] leading-[1.55]">
                  One product, fully disclosed before you commit — with a
                  same-day decision in most cases.
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

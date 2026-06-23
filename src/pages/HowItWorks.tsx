import { Link } from "react-router-dom";
import React from "react";

import SEO from "../components/SEO";
import { useSEO } from "../utils/useSEO";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import FAQSection from "../components/FAQSection";

import HiwCheckPhoto from "../assets/responsible.png";

import "../App.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface TimelineStep {
  num: string;
  who: "you" | "us";
  title: string;
  time: string;
  lede: React.ReactNode;
  rows: { k: string; v: React.ReactNode }[];
  foot?: React.ReactNode;
}

const TIMELINE: TimelineStep[] = [
  {
    num: "01",
    who: "you",
    title: "Apply online",
    time: "~5 minutes",
    lede: "A single online form covering who you are, how you earn, and what you're already paying out. No document uploads at this stage — just the form.",
    rows: [
      {
        k: "You'll need",
        v: "Driver's licence or passport, your bank account details, employer / income details.",
      },
      {
        k: "No impact on",
        v: "Your credit score — we don't run a credit check at any point, so applying with us never affects your credit score.",
      },
    ],
  },
  {
    num: "02",
    who: "us",
    title: "ID + bank verification",
    time: "Instant — 2 minutes",
    lede: "We match your ID to government records and connect securely to your bank account to read 90 days of statements. You authorise this with your normal banking login — we never see your password.",
    rows: [
      {
        k: "How",
        v: (
          <>
            <strong className="text-text-primary font-semibold">
              Open-banking partner (CDR-accredited).
            </strong>{" "}
            Read-only access. We see incoming and outgoing transactions — never
            the ability to move money.
          </>
        ),
      },
      {
        k: "If something fails",
        v: "You'll be asked to retry or upload a PDF statement — no automatic decline.",
      },
    ],
  },
  {
    num: "03",
    who: "us",
    title: "A credit assessor reviews your application",
    time: "Same business day · usually <2h",
    lede: "Applications are reviewed by our credit team. They look at the same statements you authorised, check the numbers against our responsible-lending criteria, and make a call.",
    rows: [
      {
        k: "What they look at",
        v: "90 days of income regularity, your committed expenses, existing credit balances, and whether the proposed repayment fits without causing hardship.",
      },
      {
        k: "When they might contact you",
        v: "If something looks inconsistent — they'd rather ask for more verification through email than a wrong decline.",
      },
    ],
    foot: (
      <>
        We carry this obligation under our Australian Credit Licence (
        <a
          href="https://connectonline.asic.gov.au/RegistrySearch/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          ACL 569825
        </a>
        ) and the <em>National Consumer Credit Protection Act 2009</em>.
      </>
    ),
  },
  {
    num: "04",
    who: "us",
    title: "You get a decision",
    time: "Email + SMS · usually same day",
    lede: "One of three outcomes. We tell you which, why, and what your options are.",
    rows: [
      {
        k: "Approved",
        v: (
          <>
            You'll see your{" "}
            <strong className="text-text-primary font-semibold">
              approved limit
            </strong>{" "}
            (up to $10,000) and a draft credit contract with every fee already
            filled in for your specific limit.
          </>
        ),
      },
      {
        k: "Need more info",
        v: "Usually a payslip or an updated statement. The assessor names exactly what's missing.",
      },
      {
        k: "Declined",
        v: "We explain the reason and where to go next — including the National Debt Helpline if hardship is the issue.",
      },
      {
        k: "Limit smaller than asked",
        v: "If $5k doesn't fit your situation but $2k does, you'll be offered $2k — never silently approved at a higher figure.",
      },
    ],
  },
  {
    num: "05",
    who: "you",
    title: "Review the credit contract — every fee in writing",
    time: "Your time · no deadline",
    lede: (
      <>
        Before you accept, you see the full credit contract with the exact
        amounts: drawdown fee, daily interest rate, late fee, dishonour fee, and
        the representative APR for your limit. The same numbers from the{" "}
        <Link
          to="/fees"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          Fees page
        </Link>{" "}
        — recomputed for you.
      </>
    ),
    rows: [
      {
        k: "You can",
        v: "Print it, save it, sleep on it, decline it, or ask us a question before you decide.",
      },
      {
        k: "If you accept",
        v: "You sign electronically. The line of credit is then live — but no fees apply until you draw.",
      },
    ],
  },
  {
    num: "06",
    who: "you",
    title: "Your first drawdown",
    time: "Funds usually arrive the same business day",
    lede: "You choose how much to draw (any amount, up to your limit) and which bank account to send it to. The 20% one-time drawdown fee, calculated on your approved limit rather than your draw amount, is added to your balance at this moment.",
    rows: [
      {
        k: "Cut-off",
        v: (
          <>
            Drawdowns requested before{" "}
            <strong className="text-text-primary font-semibold">
              4:00pm AEST
            </strong>{" "}
            on a banking day usually arrive the same business day. After hours:
            next banking day.
          </>
        ),
      },
      {
        k: "Smaller draws",
        v: "You don't have to draw your full limit. Drawing $400 of a $1,000 limit means you only pay interest on $400.",
      },
    ],
    foot: (
      <>
        The 20% drawdown fee applies once per account, lifetime — not every time
        you draw. See the{" "}
        <Link
          to="/fees#anatomy"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          anatomy of each fee
        </Link>
        .
      </>
    ),
  },
];

const ONGOING_CARDS = [
  {
    icon: <path d="M21 12a9 9 0 1 1-9-9M21 3v6h-6" />,
    title: "Repay on your schedule",
    body: "Weekly, fortnightly or monthly direct debit from your nominated account. Your per-period amount is fixed — drawing more extends the term, not the payment.",
  },
  {
    icon: <path d="M12 5v14M5 12h14" />,
    title: "Re-draw without re-applying",
    body: "Once you've repaid against your limit, you can draw again — instantly, against the same limit, with no further 20% drawdown fee.",
  },
  {
    icon: <path d="M5 12l5 5L20 7" />,
    title: "Repay early, anytime — no penalty",
    body: "Pay extra, pay it off, or close the line entirely. You only pay interest for the days your balance was outstanding. Nothing else.",
  },
];

const CHECK_ITEMS = [
  {
    title: "Regular income, 90 days minimum",
    body: "Salary, wages, government payments, contracting income — we accept all of it, but it has to be a pattern, not a one-off.",
    source: "Bank read",
  },
  {
    title: "Committed expenses fit alongside the repayment",
    body: "Rent / mortgage, utilities, insurances, school fees, existing loan repayments. If the Faster repayment wouldn't leave room for those, we won't lend.",
    source: "Bank read",
  },
  {
    title: "No active hardship indicators",
    body: "Dishonour fees, gambling spikes, payday-loan rollovers, or a recent default. Any of these and we'll decline — and point you to free financial counselling.",
    source: "Bank read",
  },
  {
    title: "Identity matches government records",
    body: "Driver's licence, passport or Medicare card — checked against ASIC's Document Verification Service. Confirms you're you, prevents fraud against you.",
    source: "DVS",
  },
];

const FEE_SUMMARY_ROWS = [
  {
    k: "One-time drawdown fee",
    sub: "Charged once · first drawdown ever",
    v: "20%",
    vSub: "of limit",
  },
  {
    k: "Interest while in use",
    sub: "Daily, on outstanding balance · no compounding",
    v: "47%",
    vSub: "p.a.",
  },
];

const PROTECT_CARDS: {
  badge: string;
  title: string;
  body: string;
  linkLabel: string;
  href: string;
  external?: boolean;
  internal?: boolean;
  arrowKind: "external" | "right";
}[] = [
  {
    badge: "ACL 569825",
    title: "Responsible lending, every application",
    body: "Bound by Chapter 3 of the National Consumer Credit Protection Act 2009 — the responsible-lending obligations that apply across Australian credit. Our credit team reviews applications before we lend.",
    linkLabel: "Verify on ASIC",
    href: "https://connectonline.asic.gov.au/RegistrySearch/",
    external: true,
    arrowKind: "external",
  },
  {
    badge: "ISO 27001",
    title: "Your data is independently security-certified",
    body: "Audited and certified by Lloyd's Register for Information Security Management. Bank-grade encryption, real-time monitoring and documented incident-response apply to everything you share with us.",
    linkLabel: "How we keep it secure",
    href: "/about#security",
    internal: true,
    arrowKind: "right",
  },
  {
    badge: "AFCA member",
    title: "Independent dispute resolution",
    body: "If something goes wrong and we can't resolve it together, you can escalate — free of charge — to the Australian Financial Complaints Authority. Their decisions are binding on us.",
    linkLabel: "Visit AFCA",
    href: "https://www.afca.org.au",
    external: true,
    arrowKind: "external",
  },
  {
    badge: "Hardship",
    title: "Hardship arrangements — at no extra cost",
    body: "If your situation changes and you can't make a payment, contact us before it's due. Late and dishonour fees are waived while we agree a revised arrangement, and we'll reduce or pause payments where appropriate.",
    linkLabel: "Apply for hardship",
    href: "#",
    arrowKind: "right",
  },
  {
    badge: "RG 234",
    title: "Advertising at equal prominence",
    body: "Every page that shows our 47% p.a. interest rate also shows the 225.5% representative APR at the same prominence. No big-number-small-disclaimer. ASIC's advertising guidance, in practice.",
    linkLabel: "See the working",
    href: "/fees#apr",
    internal: true,
    arrowKind: "right",
  },
  {
    badge: "Free help",
    title: "National Debt Helpline — 1800 007 007",
    body: "If a Faster line of credit isn't right for you, or you're already struggling with other debt, the NDH offers free, independent, confidential financial counselling. We'll point you there ourselves where appropriate.",
    linkLabel: "Call NDH",
    href: "https://ndh.org.au",
    external: true,
    arrowKind: "external",
  },
];

const ELIG_ITEMS: { body: React.ReactNode; source: string }[] = [
  {
    body: (
      <>
        Australian resident,{" "}
        <strong className="text-text-primary font-semibold">
          18 years or older
        </strong>
      </>
    ),
    source: "Required",
  },
  {
    body: (
      <>
        A current{" "}
        <strong className="text-text-primary font-semibold">
          government-issued ID
        </strong>{" "}
        — driver's licence, passport or Medicare card
      </>
    ),
    source: "For DVS",
  },
  {
    body: (
      <>
        <strong className="text-text-primary font-semibold">
          90+ days of regular income
        </strong>{" "}
        credited to a bank account in your name
      </>
    ),
    source: "Verified via open banking",
  },
  {
    body: (
      <>
        An{" "}
        <strong className="text-text-primary font-semibold">
          Australian bank account
        </strong>{" "}
        in your own name to receive funds and direct-debit repayments
      </>
    ),
    source: "Required",
  },
  {
    body: (
      <>
        A working{" "}
        <strong className="text-text-primary font-semibold">
          Australian mobile number
        </strong>{" "}
        and email for verification and contract delivery
      </>
    ),
    source: "Required",
  },
];

const HIW_FAQS = [
  {
    question: "How long does the whole thing actually take?",
    answer: (
      <>
        Most applications complete the same business day. The form itself takes
        about 5 minutes; credit assessment is usually done within a couple of
        hours during business hours. Weekend and evening applications are slower
        because human review waits for the next business morning.
      </>
    ),
  },
  {
    question: "Why do you need to read my bank statements?",
    answer: (
      <>
        To meet our responsible-lending obligations under the NCCP Act. We have
        to be reasonably confident the repayment fits your situation — that
        means seeing income regularity and existing commitments. We use a
        CDR-accredited open-banking partner with{" "}
        <strong className="text-text-primary">read-only</strong> access. We can
        never move money out of your account.
      </>
    ),
  },
  {
    question: "Does applying hurt my credit score?",
    answer: (
      <>
        No. We don't run a credit check at any point in our process, so applying
        with us never leaves a footprint on your credit file and never affects
        your credit score.
      </>
    ),
  },
  {
    question: "Can I have more than one drawdown at once?",
    answer: (
      <>
        Yes — that's the point of a line of credit. As long as your outstanding
        balance plus the new draw stays within your approved limit, you can draw
        additional amounts whenever you need. Each subsequent draw doesn't
        trigger a new 20% drawdown fee (that's a once-per-account fee), only
        daily interest on the larger balance.
      </>
    ),
  },
  {
    question: "What if my income drops after I'm approved?",
    answer: (
      <>
        Contact us{" "}
        <strong className="text-text-primary">
          before your next payment is due
        </strong>
        . We can pause, reduce, or restructure payments under a hardship
        arrangement — and waive late/dishonour fees while we sort it out. You
        can also call the National Debt Helpline on{" "}
        <strong className="text-text-primary">1800 007 007</strong> for free,
        independent advice that has nothing to do with us.
      </>
    ),
  },
  {
    question: "Can I close my line of credit and walk away?",
    answer: (
      <>
        Yes, anytime — repay your outstanding balance in full, then ask us to
        close the account. No closeout fee, no exit fee, no minimum interest
        period. We retain your records for the period required by law (typically
        7 years for credit data) and that's it.
      </>
    ),
  },
  {
    question: "What if I'm declined — can I reapply?",
    answer: (
      <>
        You can reapply after{" "}
        <strong className="text-text-primary">90 days</strong>, which is also
        the window across which we'd see a meaningful change in your
        bank-statement history. Reapplying inside 90 days is unlikely to change
        the outcome. If hardship is the underlying reason, please use the NDH
        first.
      </>
    ),
  },
  {
    question:
      "Why does the same limit produce different repayment terms for different people?",
    answer: (
      <>
        The per-period repayment amount ($55 / $110 / $238.33 for weekly /
        fortnightly / monthly) is fixed for the product. What changes is the{" "}
        <strong className="text-text-primary">term</strong> — how many periods
        you'll be paying. Drawing more means a longer term, not a higher
        payment. You can always shorten it by paying extra.
      </>
    ),
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HowItWorks() {
  const seo = useSEO("how-it-works");

  return (
    <>
      <SEO
        title={
          seo?.title ||
          "How it works — apply to cash, step by step | Faster.com.au"
        }
        description={
          seo?.description ||
          "Every stage of a Faster Line of Credit — what you do, what we do, who reviews it, and how long each part actually takes. Real timing, including the slow bits."
        }
        ogTitle={seo?.ogTitle || "How it works | Faster.com.au"}
        ogDescription={
          seo?.ogDescription ||
          "From applying to repaid, see what we check, what happens when, your protections, and the fees, all in one place."
        }
        canonicalUrl={seo?.canonicalUrl}
      />

      <div className="font-sans antialiased text-text-primary bg-bg-primary">
        <NavBar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden hero-padding bg-hero-gradient">
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
              {/* Left */}
              <div>
                <Pill
                  text="How it works"
                  variant="light"
                  className="mb-[22px]"
                />
                <h1
                  className="text-[clamp(40px,5.2vw,68px)] leading-[1.0] tracking-[-0.025em] font-bold mb-[22px] text-bg-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  From apply to{" "}
                  <em className="italic font-medium bg-text-gradient bg-clip-text text-transparent">
                    cash in your bank
                  </em>
                  , step by step.
                </h1>
                <p className="text-[16px] sm:text-[18px] text-bg-secondary/80 max-w-[60ch] leading-[1.6]">
                  Every stage of a Faster Line of Credit — what you do, what we
                  do, and how long each part actually takes. Real timing,
                  including the slow bits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The flow timeline ── */}
        <section id="flow" className="section-padding bg-bg-primary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="text-center max-w-[760px] mx-auto mb-14">
              <Pill text="The end-to-end flow" className="mb-[18px]" />
              <h2
                className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Six steps to your first drawdown, then it keeps working.
              </h2>
              <p className="text-[17px] text-muted-secondary m-0 leading-[1.55]">
                Each step shows how long it takes and what happens behind the
                scenes. The first six steps get you to your first drawdown.
                After that, three ongoing things keep working for as long as you
                use the limit: repay, re-draw, and reuse.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute top-[26px] bottom-[26px] w-0.5 left-[23px] lg:left-[47px]"
                style={{
                  background:
                    "linear-gradient(180deg, #EAEDF5 0%, #EAEDF5 92%, transparent 100%)",
                }}
              />

              {TIMELINE.map((step) => (
                <div
                  key={step.num}
                  className="grid grid-cols-[48px_1fr] lg:grid-cols-[96px_1fr] gap-3.5 lg:gap-6 items-start py-[22px] relative"
                >
                  {/* Marker */}
                  <div className="relative flex flex-col items-center gap-1 lg:gap-2 z-10">
                    <div
                      className={`w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center font-bold text-[16px]
                        ${step.who === "you" ? "bg-primary text-bg-primary" : "bg-bg-primary text-primary"}`}
                      style={{
                        boxShadow: "0 0 0 6px #FCFDFF, 0 0 0 7px #EAEDF5",
                      }}
                    >
                      {step.num}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-bg-secondary border border-border-subtle rounded-card-lg p-[28px_30px] hover:border-bg-secondary transition-colors">
                    <div className="flex justify-between items-baseline gap-[18px] flex-wrap mb-3">
                      <h3 className="text-[22px] font-bold tracking-[-0.015em] m-0 text-text-primary leading-[1.2]">
                        {step.title}
                      </h3>
                      <span className="text-[11.5px] tracking-[0.04em] text-accent font-semibold bg-accent/[0.08] px-2.5 py-[5px] rounded-md whitespace-nowrap">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-[15.5px] text-muted-primary leading-[1.55] m-0 mb-[18px] max-w-[64ch]">
                      {step.lede}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-7 p-[18px_22px] bg-bg-primary border border-border-subtle rounded-card">
                      {step.rows.map((row) => (
                        <div key={row.k} className="flex flex-col gap-1">
                          <span className="text-[10px] uppercase tracking-[0.12em] text-muted-secondary font-semibold">
                            {row.k}
                          </span>
                          <span className="text-[13.5px] text-muted-primary leading-[1.5]">
                            {row.v}
                          </span>
                        </div>
                      ))}
                    </div>
                    {step.foot && (
                      <div className="mt-3.5 flex items-center gap-2 text-[13px] text-muted-secondary leading-[1.5]">
                        <span className="w-[18px] h-[18px] flex-shrink-0 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                            />
                          </svg>
                        </span>
                        <span>{step.foot}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Ongoing band */}
            <div
              className="mt-[60px] p-[38px_36px] border border-bg-secondary rounded-card-lg"
              style={{
                background: "linear-gradient(135deg, #EAEDF5 0%, #FCFDFF 100%)",
              }}
            >
              <div className="flex justify-between items-baseline flex-wrap gap-3 mb-[22px]">
                <h3 className="text-[24px] font-bold tracking-[-0.015em] m-0 text-text-primary">
                  Then, for as long as you use the limit:
                </h3>
                <span className="text-[11px] uppercase tracking-[0.14em] text-primary font-semibold">
                  07 · 08 · ongoing
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {ONGOING_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="bg-bg-primary border border-bg-secondary rounded-card p-[22px]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-bg-primary text-primary inline-flex items-center justify-center mb-3 border border-bg-secondary">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-4 h-4"
                      >
                        {card.icon}
                      </svg>
                    </div>
                    <h4 className="text-[16px] font-bold m-0 mb-1.5 text-text-primary tracking-[-0.005em]">
                      {card.title}
                    </h4>
                    <p className="text-[13.5px] text-muted-secondary m-0 leading-[1.5]">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── What we check ── */}
        <section id="check" className="section-padding bg-bg-secondary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-16 items-start">
              {/* Photo */}
              <div className="relative">
                <div
                  className="w-full bg-gradient-to-b from-transparent to-white aspect-[5/6] rounded-card-lg overflow-hidden"
                  style={{
                    boxShadow:
                      "0 1px 2px rgba(11,16,36,0.04), 0 8px 24px -8px rgba(11,16,36,0.08)",
                  }}
                >
                  <img
                    src={HiwCheckPhoto}
                    alt="A Faster credit assessor reviewing an application in Melbourne"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* List */}
              <div>
                <div className="mb-9">
                  <Pill
                    text="What we check"
                    variant="white"
                    className="mb-[18px]"
                  />
                  <h2
                    className="text-[clamp(28px,3.4vw,38px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-text-primary"
                    style={{ textWrap: "balance" } as React.CSSProperties}
                  >
                    Responsible lending, the way it's meant to work.
                  </h2>
                  <p className="text-[17px] text-muted-secondary m-0 leading-[1.55]">
                    The same checks every bank is obliged to make under the
                    National Consumer Credit Protection Act — but completed
                    inside hours, not weeks.
                  </p>
                </div>

                <div className="flex flex-col gap-3.5">
                  {CHECK_ITEMS.map((item) => (
                    <div
                      key={item.title}
                      className="grid grid-cols-[32px_1fr_auto] gap-4 bg-bg-primary border border-border-subtle rounded-card p-[20px_22px] items-start"
                    >
                      <span className="w-7 h-7 rounded-full bg-primary-light/[0.08] text-primary-light inline-flex items-center justify-center mt-0.5">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="w-3.5 h-3.5"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <div>
                        <h4 className="m-0 mb-1 text-[15.5px] font-bold text-text-primary tracking-[-0.005em]">
                          {item.title}
                        </h4>
                        <p className="m-0 text-[13.5px] text-muted-secondary leading-[1.5]">
                          {item.body}
                        </p>
                      </div>
                      <span className="text-[10.5px] tracking-[0.08em] text-ink-light font-semibold uppercase self-center whitespace-nowrap">
                        {item.source}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-[22px] p-[18px_22px] bg-bg-primary border border-dashed border-border-default rounded-card text-[13.5px] text-muted-primary leading-[1.6]">
                  <strong className="text-text-primary">
                    If we lend, we have to be confident you can repay{" "}
                    <em>without substantial hardship</em>.
                  </strong>{" "}
                  If the numbers don't support that, we decline — and recommend
                  the{" "}
                  <a
                    href="https://ndh.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
                  >
                    National Debt Helpline (1800 007 007)
                  </a>{" "}
                  for free, independent advice.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fees teaser ── */}
        <section
          id="fees-teaser"
          className="section-padding relative overflow-hidden bg-fees-gradient text-bg-primary"
        >
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-center">
              {/* Left */}
              <div>
                <Pill text="The cost" variant="light" className="mb-[18px]" />
                <h2
                  className="text-[clamp(30px,3.6vw,42px)] leading-[1.05] tracking-[-0.025em] font-bold mb-4 text-bg-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Two fees, one APR. Everything in writing before you commit.
                </h2>
                <p className="text-[16px] text-bg-secondary/70 mb-6 leading-[1.55] max-w-[44ch]">
                  You see these on the Fees page, and again — in dollar amounts
                  for your specific limit — in your credit contract before you
                  sign.
                </p>
                <Link to="/fees" className="btn btn-primary group">
                  See every fee, in detail
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

              {/* Summary card */}
              <div className="bg-bg-primary/5 border border-bg-primary/10 rounded-card-lg p-[28px] backdrop-blur-lg">
                {FEE_SUMMARY_ROWS.map((row) => (
                  <div
                    key={row.k}
                    className="grid grid-cols-[1fr_auto] gap-4 items-baseline py-4 border-b border-bg-primary/[0.08] last:border-b-0"
                  >
                    <div className="text-[14.5px] text-bg-secondary/85">
                      {row.k}
                      <small className="block text-[11.5px] text-bg-secondary/50 tracking-[0.04em] mt-1">
                        {row.sub}
                      </small>
                    </div>
                    <div className="text-[24px] font-bold tabular-nums text-[#b8c4ff] tracking-[-0.01em]">
                      {row.v}
                      <small className="text-[12px] text-[#b8c4ff]/60 font-semibold ml-1">
                        {row.vSub}
                      </small>
                    </div>
                  </div>
                ))}

                <div className="mt-4 p-[16px_18px] bg-accent/[0.08] border border-accent/20 rounded-[10px] flex justify-between items-baseline gap-4">
                  <span className="text-[11px] uppercase tracking-[0.12em] text-accent font-semibold">
                    Representative APR
                  </span>
                  <span className="text-[22px] font-bold text-accent tabular-nums tracking-[-0.01em]">
                    225.5%
                    <small className="text-[12px] text-accent/70 font-semibold ml-1">
                      p.a.
                    </small>
                  </span>
                </div>
                <div className="mt-[18px] text-[12.5px] text-bg-secondary/55 leading-[1.6]">
                  Based on a $450 limit drawn in full and repaid at $55/week
                  (about 11 weeks): $90 drawdown + $28.02 interest = $118.02
                  cost of credit. Total you repay (incl. $450 drawn): $568.02.
                  Different amounts and terms produce different APRs.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Your protections ── */}
        <section id="protect" className="section-padding bg-bg-secondary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="text-center max-w-[760px] mx-auto mb-14">
              <Pill
                text="Your protections"
                variant="white"
                className="mb-[18px]"
              />
              <h2
                className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                What you can rely on, in writing.
              </h2>
              <p className="text-[17px] text-muted-secondary m-0 leading-[1.55]">
                Every Faster customer is covered by these — they're not
                promises, they're regulated obligations we're bound by.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {PROTECT_CARDS.map((card) => {
                const arrow =
                  card.arrowKind === "external" ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="w-[11px] h-[11px]"
                    >
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="w-[11px] h-[11px]"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  );

                const linkClass =
                  "text-primary font-semibold text-[13.5px] mt-auto inline-flex items-center gap-1 border-b border-bg-secondary self-start hover:border-primary transition-colors";

                return (
                  <div
                    key={card.badge}
                    className="bg-bg-primary border border-border-subtle rounded-card p-[26px_24px] flex flex-col gap-3"
                  >
                    <span className="self-start text-[10.5px] uppercase tracking-[0.14em] font-semibold text-primary bg-bg-secondary border border-bg-secondary px-2.5 py-[5px] rounded-md">
                      {card.badge}
                    </span>
                    <h4 className="text-[17px] font-bold m-0 text-text-primary tracking-[-0.005em] leading-[1.3]">
                      {card.title}
                    </h4>
                    <p className="text-[13.5px] text-muted-secondary m-0 leading-[1.55]">
                      {card.body}
                    </p>
                    {card.internal ? (
                      <Link to={card.href} className={linkClass}>
                        {card.linkLabel}
                        {arrow}
                      </Link>
                    ) : (
                      <a
                        href={card.href}
                        className={linkClass}
                        {...(card.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {card.linkLabel}
                        {arrow}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Eligibility ── */}
        <section id="eligibility" className="section-padding bg-bg-primary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-center">
              <div>
                <Pill text="Eligibility" className="mb-[18px]" />
                <h2
                  className="text-[clamp(30px,3.6vw,42px)] leading-[1.05] tracking-[-0.025em] font-bold mb-4 text-text-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  What you need before you start.
                </h2>
                <p className="text-[16px] text-muted-secondary m-0 max-w-[44ch] leading-[1.55]">
                  Eligibility doesn't guarantee approval — that depends on the
                  responsible-lending assessment. But if you don't meet these,
                  the application won't proceed.
                </p>
              </div>

              <div>
                <div className="bg-bg-secondary border border-border-subtle rounded-card-lg px-7">
                  {ELIG_ITEMS.map((item, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[32px_1fr_auto] gap-4 items-center py-[18px] border-b border-border-subtle last:border-b-0"
                    >
                      <span className="w-6 h-6 rounded-full bg-primary-light/[0.08] text-primary-light inline-flex items-center justify-center">
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
                      <span className="text-[15px] text-muted-primary leading-[1.45]">
                        {item.body}
                      </span>
                      <span className="text-[11px] text-ink-light tracking-[0.04em] whitespace-nowrap hidden sm:inline">
                        {item.source}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-[22px] p-[18px_22px] bg-bg-secondary border border-dashed border-border-default rounded-card text-[13.5px] text-muted-primary leading-[1.55]">
                  <strong className="text-text-primary">
                    Who we can't lend to right now:
                  </strong>{" "}
                  if you're currently in financial hardship, have an unresolved
                  default in the past 12 months, are subject to a debt agreement
                  or bankruptcy, or your income is irregular enough that we
                  can't reasonably assess repayment capacity. In any of those
                  cases, please call the{" "}
                  <a
                    href="https://ndh.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
                  >
                    National Debt Helpline on 1800 007 007
                  </a>{" "}
                  — they're free, confidential, and not affiliated with us.
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
                  Now you've seen the steps. Apply in about five minutes.
                </h2>
                <p className="text-[17px] text-bg-secondary/80 mb-7 max-w-[46ch] leading-[1.55]">
                  You'll see the same flow — and the same fees — again in your
                  credit contract before you commit.
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
                      className="flex items-center gap-2.5 text-[13.5px] text-bg-secondary/80"
                    >
                      <span className="w-[22px] h-[22px] rounded-full bg-primary-light/15 text-primary-light inline-flex items-center justify-center flex-shrink-0">
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
                <div className="mt-3.5 text-[12.5px] text-bg-secondary/55">
                  Takes 5 minutes · No impact on credit score for pre-qual
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="section-padding bg-bg-secondary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="text-center mb-12 max-w-[760px] mx-auto">
              <Pill text="FAQ" variant="white" className="mb-[18px]" />
              <h2
                className="text-[clamp(34px,4vw,52px)] leading-[1.05] tracking-[-0.025em] font-bold mb-3.5 text-text-primary"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Customers frequently ask
              </h2>
              <p className="text-[18px] text-muted-secondary m-0 leading-[1.55]">
                If you don't see your question here, ask{" "}
                <a
                  href="mailto:support@faster.com.au"
                  className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
                >
                  support@faster.com.au
                </a>{" "}
                — we'll add it.
              </p>
            </div>

            <FAQSection faqs={HIW_FAQS} white />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

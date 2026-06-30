import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

import SEO from "../components/SEO";
import { useSEO } from "../utils/useSEO";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";

import "../App.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CHANNELS: {
  icon: React.ReactNode;
  title: string;
  body: string;
  linkLabel: string;
  href: string;
  internal?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}[] = [
  {
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    title: "Send us an email",
    body: "Reach our support team for account questions, fee enquiries, or anything else.",
    linkLabel: "support@faster.com.au",
    href: "mailto:support@faster.com.au",
  },
  {
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-9 8.4 9.5 9.5 0 0 1-3.9-.8L3 21l1.9-4.6A8.38 8.38 0 0 1 3.6 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 9 8.5z" />
    ),
    title: "Chat with us live",
    body: "Speak to our support team directly for quick answers while you're applying or logged in.",
    linkLabel: "Start a chat",
    href: "#",
    onClick: (e) => {
      e.preventDefault();
      if ((window as any).tidioChatApi) {
        (window as any).tidioChatApi.open();
      }
    },
  },
  {
    icon: (
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      />
    ),
    title: "Browse the FAQs",
    body: "Most questions about how Faster works, what it costs, and getting approved are answered here.",
    linkLabel: "Read the FAQs",
    href: "/faq",
    internal: true,
  },
];

const DETAIL_ROWS: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}[] = [
  {
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    label: "Email support",
    value: (
      <a
        href="mailto:support@faster.com.au"
        className="text-primary font-semibold border-b border-border-default hover:border-primary transition-colors"
      >
        support@faster.com.au
      </a>
    ),
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    label: "Support hours",
    value: (
      <>
        Available 24/7{" "}
        <span className="text-muted-secondary font-medium">
          · email anytime
        </span>
      </>
    ),
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Contact() {
  const seo = useSEO("contact");

  return (
    <>
      <SEO
        title={
          seo?.title ||
          "Contact Us — Support For Your Line of Credit | Faster.com.au"
        }
        description={
          seo?.description ||
          "Get help with your Faster account, repayments or fees. Email support@faster.com.au or live chat, available anytime for any enquiries."
        }
        ogTitle={
          seo?.ogTitle ||
          "Contact Us — Support For Your Line of Credit | Faster.com.au"
        }
        ogDescription={
          seo?.ogDescription ||
          "Email, live chat, or browse the FAQs. Real people, clear answers, within one business day — get in touch with our Faster team for any enquiries."
        }
        canonicalUrl={seo?.canonicalUrl}
      />

      <div className="font-sans antialiased text-text-primary bg-bg-primary">
        <NavBar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden hero-padding bg-hero-gradient text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10 w-full max-w-[760px] mx-auto px-8"
          >
            <Pill text="Get in touch" variant="light" className="mb-[22px]" />
            <h1
              className="text-[clamp(38px,5vw,62px)] leading-[1.02] tracking-[-0.025em] font-bold mb-5 text-bg-primary"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              We&apos;re here to{" "}
              <em className="italic font-[700] bg-text-gradient bg-clip-text text-transparent">
                help
              </em>
              .
            </h1>
            <p className="text-[16px] sm:text-[18px] text-bg-secondary/80 max-w-[56ch] mx-auto mb-12 sm:mb-8 lg:mb-0 leading-[1.6]">
              Whether you&apos;re looking for more information about our fees or
              need support with your account, we&apos;re just a message away.
            </p>
          </motion.div>
        </section>

        {/* ── Contact channels ── */}
        <section className="mb-4 md:mb-0 bg-bg-primary">
          <div className="w-full max-w-[1440px] mx-auto px-6 -mt-14 relative z-[5]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
              {CHANNELS.map((ch) => (
                <div className="bg-bg-primary border border-border-subtle rounded-card-lg p-[30px_30px_28px] flex flex-col shadow-card">
                  <div className="w-[46px] h-[46px] rounded-[12px] bg-bg-secondary text-primary border border-bg-secondary inline-flex items-center justify-center mb-5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-[22px] h-[22px]"
                    >
                      {ch.icon}
                    </svg>
                  </div>
                  <h3 className="text-[20px] font-bold m-0 mb-2 text-text-primary tracking-[-0.015em]">
                    {ch.title}
                  </h3>
                  <p className="text-[14.5px] text-muted-secondary m-0 mb-[22px] leading-[1.55]">
                    {ch.body}
                  </p>
                  {ch.internal ? (
                    <Link
                      key={ch.title}
                      to={ch.href}
                      className="group mt-auto inline-flex items-center gap-1 text-[15px] font-semibold text-primary border-b border-bg-secondary hover:border-primary transition-all w-fit"
                    >
                      {ch.linkLabel}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ) : (
                    <a
                      key={ch.title}
                      href={ch.href}
                      className="group mt-auto inline-flex items-center gap-1 text-[15px] font-semibold text-primary border-b border-bg-secondary hover:border-primary transition-all w-fit"
                      {...(ch.onClick ? { onClick: ch.onClick } : {})}
                    >
                      {ch.linkLabel}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What to expect + contact details ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-padding pt-24 bg-bg-primary"
        >
          <div className="w-full max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
              <div className="text-center lg:text-left">
                <Pill text="What to expect" className="mb-[18px]" />
                <h2
                  className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-[18px] text-text-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Real people, clear answers, no run-around.
                </h2>
                <p className="text-[clamp(16px,3.5vw,18px)] text-muted-primary leading-[1.6] mb-4">
                  Faster is built and operated in Australia, and our support
                  team is too. Email us anytime and we&apos;ll get back to you
                  within one business day — usually much sooner. For
                  account-specific questions, the fastest route is a secure
                  message once you&apos;re{" "}
                  <a
                    href="/login"
                    className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
                  >
                    logged in
                  </a>
                  .
                </p>
                <p className="text-[clamp(16px,3.5vw,18px)] text-muted-primary leading-[1.6] m-0">
                  Already a customer? Have your account email handy so we can
                  verify it&apos;s really you before discussing your account.
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  {DETAIL_ROWS.map((row) => (
                    <div
                      key={row.label}
                      className="w-full grid grid-cols-[48px_1fr] gap-4 p-[22px_24px] bg-bg-secondary border border-border-subtle rounded-card items-center"
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
                        <div className="text-[10.5px] uppercase tracking-[0.14em] text-muted-secondary font-semibold mb-1.5">
                          {row.label}
                        </div>
                        <div className="text-[15.5px] text-text-primary font-semibold leading-[1.4]">
                          {row.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Never-ask band */}
                <div className="mt-4 bg-bg-secondary border border-border-subtle rounded-card-lg p-[26px_28px] grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 items-start">
                  <div className="w-11 h-11 rounded-[12px] bg-bg-primary border border-bg-secondary text-primary inline-flex items-center justify-center flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-[22px] h-[22px]"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold m-0 mb-1.5 text-text-primary tracking-[-0.01em]">
                      How we&apos;ll contact you
                    </h4>
                    <p className="text-[13.5px] text-muted-primary m-0 leading-[1.6]">
                      We&apos;ll only ever email the address on your account.{" "}
                      <strong className="text-text-primary">
                        We&apos;ll never ask for your full banking password,
                        card PIN, or one-time codes.
                      </strong>{" "}
                      If a message claiming to be Faster asks for those, it
                      isn&apos;t us — forward it to{" "}
                      <a
                        href="mailto:support@faster.com.au"
                        className="text-primary font-semibold border-b border-border-default hover:border-primary transition-colors"
                      >
                        support@faster.com.au
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Hardship ── */}
          <div className="pt-10 sm:pt-12 md:pt-16 w-full max-w-[1440px] mx-auto px-6">
            <div className="rounded-card-lg p-8 lg:p-[40px_44px] grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-7 items-center border border-primary/30 bg-gradient-to-br from-accent/5 to-primary/15">
              <div className="w-14 h-14 rounded-[14px] bg-primary-light/10 border border-primary-light/40 text-primary inline-flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-[23px] font-bold m-0 mb-2 text-text-primary tracking-[-0.015em]">
                  Struggling with a repayment?
                </h3>
                <p className="text-[14.5px] text-muted-primary m-0 leading-[1.6] max-w-[64ch]">
                  Contact us{" "}
                  <strong className="text-primary">
                    before your payment is due
                  </strong>{" "}
                  and we&apos;ll work through a hardship plan with you — and
                  waive late and dishonour fees while we sort it out. You can
                  also get free, independent and confidential advice from the
                  National Debt Helpline.
                </p>
              </div>
              <div className="text-left lg:text-right">
                <div className="text-[10.5px] uppercase tracking-[0.14em] text-muted-secondary font-semibold mb-1.5">
                  National Debt Helpline
                </div>
                <div className="text-[22px] font-semibold text-text-primary tracking-[-0.01em] whitespace-nowrap">
                  1800 007 007
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── FAQ cross-link CTA ── */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-padding relative overflow-hidden bg-final-gradient"
        >
          <div className="w-full max-w-[1440px] mx-auto px-6">
            <div className="bg-bg-primary/[0.04] border border-bg-primary/10 rounded-card-lg p-8 lg:p-[48px_56px] grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-10 items-center">
              <div className="text-center lg:text-left">
                <Pill
                  text="Before you write"
                  variant="light"
                  className="mb-[18px]"
                />
                <h2
                  className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-4 text-bg-primary"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Your question may already be answered.
                </h2>
                <p className="text-[clamp(16px,3.5vw,18px)] mx-auto lg:mx-0 text-bg-secondary/80 max-w-[48ch] leading-[1.6]">
                  Our FAQ covers how the Line of Credit works, exactly what it
                  costs, getting approved, and how we keep your data safe.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <Link to="/faq" className="btn btn-primary group">
                  Browse FAQs
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
            </div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </>
  );
}

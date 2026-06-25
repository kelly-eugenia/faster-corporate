import { Link } from "react-router-dom";
import React, { useMemo, useState } from "react";

import SEO from "../components/SEO";
import { useSEO } from "../utils/useSEO";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import FAQSection from "../components/FAQSection";

import { type FaqEntry, FAQ_GROUPS } from "../utils/faqs";

import "../App.css";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FAQ() {
  const seo = useSEO("faq");

  const [activeTab, setActiveTab] = useState<string>("top");
  const [query, setQuery] = useState<string>("");

  const term = query.trim().toLowerCase();
  const searching = term.length > 0;

  // Not searching: just the active group's FAQs (with its heading).
  const activeGroup = useMemo(
    () => FAQ_GROUPS.find((g) => g.id === activeTab) ?? FAQ_GROUPS[0],
    [activeTab],
  );

  // Searching: a single flat list of every matching question across all
  // groups — no group headings.
  const searchResults = useMemo(() => {
    if (!searching) return [];
    const match = (f: FaqEntry) =>
      (f.question + " " + f.keywords).toLowerCase().includes(term);
    return FAQ_GROUPS.flatMap((g) => g.faqs).filter(match);
  }, [term, searching]);

  const totalMatches = searchResults.length;

  return (
    <>
      <SEO
        title={
          seo?.title ||
          "Faster.com.au | FAQ — clear answers on how Faster works"
        }
        description={
          seo?.description ||
          "Clear answers on how Faster works, what it costs, getting approved, and how we keep your information safe."
        }
        ogTitle={seo?.ogTitle || "Faster.com.au | Frequently asked questions"}
        ogDescription={
          seo?.ogDescription ||
          "Top questions, applying & approval, your Faster credit, and security & privacy — answered in one place."
        }
        canonicalUrl={seo?.canonicalUrl}
      />

      <div className="font-sans antialiased text-text-primary bg-bg-primary">
        <NavBar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden hero-padding bg-hero-gradient text-center">
          <div className="relative z-10 w-full max-w-[760px] mx-auto px-8">
            <Pill text="Support" variant="light" className="mb-[22px]" />
            <h1
              className="text-[clamp(38px,5vw,62px)] leading-[1.02] tracking-[-0.025em] font-bold mb-5 text-bg-primary"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Frequently asked questions
            </h1>
            <p className="text-[16px] sm:text-[18px] text-bg-secondary max-w-[56ch] mx-auto leading-[1.6] mb-8 sm:mb-10">
              Clear answers on how Faster works, what it costs, getting
              approved, and how we keep your information safe.
            </p>

            {/* Live search */}
            <div className="relative max-w-[520px] mx-auto">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute left-[17px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-bg-secondary/55 pointer-events-none"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions…"
                aria-label="Search FAQs"
                autoComplete="off"
                className="w-full text-[14px] sm:text-[15.5px] text-bg-primary bg-bg-primary/[0.07] border border-bg-primary/[0.18] rounded-[12px] py-[10px] sm:py-[12px] pr-[18px] pl-12 outline-none transition-colors placeholder:text-bg-secondary/50 focus:border-[rgba(125,155,255,0.7)] focus:bg-bg-primary/10"
              />
            </div>
          </div>
        </section>

        {/* ── FAQ body — tabs + groups ── */}
        <section className="py-8 md:py-12 mb-8 bg-bg-primary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            {/* Tabs (hidden in search mode) */}
            {!searching && (
              <div
                role="tablist"
                className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 max-w-[1080px] mx-auto"
              >
                {FAQ_GROUPS.map((g) => {
                  const isActive = g.id === activeTab;
                  return (
                    <button
                      key={g.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => {
                        setActiveTab(g.id);
                        setQuery("");
                      }}
                      className={`text-left rounded-card p-[18px_20px] flex flex-col gap-2.5 border transition-all
                        ${
                          isActive
                            ? "bg-primary border-primary shadow-lift -translate-y-0.5"
                            : "bg-bg-secondary border-border-subtle hover:bg-primary-light/10 hover:border-border-default"
                        }`}
                    >
                      <span
                        className={`w-9 h-9 rounded-[10px] inline-flex items-center justify-center border transition-colors
                          ${
                            isActive
                              ? "bg-bg-primary/[0.16] border-bg-primary/[0.24] text-bg-primary"
                              : "bg-bg-primary border-border-subtle text-muted-secondary"
                          }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-[18px] h-[18px]"
                        >
                          {g.icon}
                        </svg>
                      </span>
                      <span
                        className={`text-[18px] sm:text-[20px] font-bold tracking-[-0.01em] leading-[1.3] ${
                          isActive ? "text-bg-primary" : "text-text-primary"
                        }`}
                      >
                        {g.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Groups */}
            <div className="sm:mt-16 max-w-[1080px] mx-auto">
              {searching ? (
                totalMatches > 0 ? (
                  <div className="mt-11">
                    <div className="text-center mb-7">
                      <h2 className="text-[clamp(24px,2.6vw,32px)] leading-[1.1] tracking-[-0.02em] font-bold text-text-primary mb-1.5">
                        {totalMatches}{" "}
                        {totalMatches === 1 ? "result" : "results"}
                      </h2>
                      <p className="text-[16px] text-muted-secondary m-0 leading-[1.55]">
                        Matching &ldquo;{query.trim()}&rdquo; across all topics.
                      </p>
                    </div>
                    <FAQSection
                      faqs={searchResults.map(({ question, answer }) => ({
                        question,
                        answer,
                      }))}
                    />
                  </div>
                ) : (
                  <div className="text-center mt-11 text-[16px] text-muted-secondary leading-[1.6]">
                    No questions match{" "}
                    <strong className="text-text-primary">
                      &ldquo;{query.trim()}&rdquo;
                    </strong>
                    . Try a different word, or{" "}
                    <Link
                      to="/contact"
                      className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
                    >
                      contact us
                    </Link>
                    .
                  </div>
                )
              ) : (
                <div id={activeGroup.id} className="mt-11">
                  <div className="text-center mb-7">
                    <h2 className="text-[clamp(24px,2.6vw,32px)] leading-[1.1] tracking-[-0.02em] font-bold text-text-primary mb-1.5">
                      {activeGroup.label}
                    </h2>
                    <p className="text-[16px] text-muted-secondary m-0 leading-[1.55]">
                      {activeGroup.blurb}
                    </p>
                  </div>
                  <FAQSection
                    faqs={activeGroup.faqs.map(({ question, answer }) => ({
                      question,
                      answer,
                    }))}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Still have questions ── */}
        <section className="section-padding bg-bg-secondary">
          <div className="w-full max-w-[1440px] mx-auto px-8">
            <div className="bg-bg-primary border border-border-subtle rounded-card-lg p-8 lg:p-[40px_48px] grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-8 items-center">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-bg-secondary border border-bg-secondary text-primary inline-flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-[26px] h-[26px]"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <div>
                <h2 className="text-[24px] font-bold tracking-[-0.015em] m-0 mb-1.5 text-text-primary">
                  Still have unanswered questions?
                </h2>
                <p className="text-[15px] text-muted-secondary m-0 leading-[1.55]">
                  Email us anytime at{" "}
                  <a
                    href="mailto:support@faster.com.au"
                    className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
                  >
                    support@faster.com.au
                  </a>{" "}
                  — real people, clear answers, within one business day.
                </p>
              </div>
              <Link to="/contact" className="btn btn-primary group">
                Contact us
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
        </section>

        <Footer />
      </div>
    </>
  );
}

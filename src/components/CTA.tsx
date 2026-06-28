import { Link } from "react-router-dom";
import Pill from "../components/Pill";
import "../App.css";

type CTAProps = {
  text?: string;
  desc: string;
};

export default function CTA({ text, desc }: CTAProps) {
  return (
    <section className="section-padding relative overflow-hidden bg-final-gradient">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <div className="bg-bg-primary/[0.04] border border-bg-primary/10 rounded-card-lg p-8 md:p-[56px_64px] grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-7 lg:gap-10 items-center relative overflow-hidden">
          <div className="text-center lg:text-left">
            <Pill
              text="Ready when you are"
              variant="light"
              className="mb-[18px]"
            />
            <h2
              className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-4 text-bg-primary"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              {text} Apply in about five minutes.
            </h2>
            <p className="text-[clamp(16px,3.5vw,18px)] text-bg-secondary/80 mb-7 max-w-[46ch] leading-[1.6] mx-auto lg:mx-0">
              {desc}
            </p>
            <div className="mx-auto lg:mx-0 w-fit text-left grid grid-cols-2 gap-x-4 gap-y-3.5 md:gap-x-12 mt-[22px]">
              {[
                "Australian resident, 18+",
                "Government-issued ID",
                "90+ days of regular income",
                "Bank account in your name",
              ].map((req) => (
                <div
                  key={req}
                  className="flex items-start sm:items-center gap-2.5 text-[12px] sm:text-[13.5px] text-bg-secondary/80"
                >
                  <span className="size-[16px] sm:size-[22px] rounded-full bg-primary-light/15 text-primary-light inline-flex items-center justify-center flex-shrink-0">
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

          <div className="text-center lg:text-right">
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
  );
}

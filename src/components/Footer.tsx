import { Link } from "react-router-dom";
import Logo from "../assets/logo-white.svg";

const FOOTER_COLS = [
  {
    title: "Company",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About Us" },
      { to: "/contact", label: "Contact Us" },
      { to: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Product",
    links: [
      { to: "/how-it-works", label: "How It Works" },
      { to: "/fees", label: "Fees" },
      { to: "/calculator", label: "Calculator" },
      { to: "/apply", label: "Apply Now" },
    ],
  },
  {
    title: "Support & Legal",
    links: [
      { to: "/faq", label: "FAQs" },
      { to: "/credit-guide", label: "Credit Guide" },
      { to: "/terms-and-conditions", label: "Terms & Conditions" },
      { to: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer-gradient text-bg-primary py-16 border-t border-border-default">
      <div className="w-full max-w-[1440px] mx-auto px-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-white/[0.07]">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src={Logo}
                alt="Faster Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-[14px] text-bg-secondary/80 leading-[1.6] mt-[18px] mb-[18px] max-w-[36ch]">
              A revolving line of credit for short-term cashflow needs, built
              and operated in Australia.
            </p>
            <div className="flex gap-3 items-center flex-wrap">
              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/[0.04] border border-white/[0.08] rounded-[8px] text-[12px] text-white/70">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3.5 h-3.5 text-primary-light"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                ISO 27001
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white/[0.04] border border-white/[0.08] rounded-[8px] text-[12px] text-white/70">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3.5 h-3.5 text-primary-light"
                >
                  <path d="M3 12l2 2 4-4M3 6h18M3 18h18" />
                </svg>
                ACL 569825
              </span>
            </div>
          </div>

          {/* Nav cols */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-[0.14em] text-ink-light font-medium m-0 mb-[18px]">
                {col.title}
              </h4>
              <ul className="list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.label} className="mb-2.5">
                    <Link
                      to={link.to}
                      className="text-[14px] text-bg-secondary hover:text-bg-primary hover:font-bold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mid row */}
        <div className="py-7 border-b border-white/[0.07] flex justify-between items-center flex-wrap gap-5">
          <div className="flex gap-y-2 gap-x-6 flex-wrap">
            {[
              { to: "/terms-and-conditions", label: "Terms & Conditions" },
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/refund-policy", label: "Refund Policy" },
              { to: "/credit-guide", label: "Credit Guide" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[13.5px] text-bg-secondary hover:text-bg-primary hover:font-bold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="text-[12px] text-border-default">
            Need help with repayments? Call National Debt Helpline{" "}
            <strong className="text-accent">1800 007 007</strong> (free,
            confidential).
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="pt-6 text-[11.5px] leading-[1.7] tracking-[0.02em]">
          <p className="text-border-default/80">
            All Rights Reserved © 2026 Faster Financial Pty Ltd (ABN 47 651 975
            932). Lightspeed CashFaster Ventures Pty Ltd, Australian Credit
            Licence 569825. Faster Financial Pty Ltd is ISO 27001 Certified by
            Lloyd's Register for Information Security Management.
          </p>
          <p className="mt-4 text-border-default/80">
            <strong className="text-bg-secondary/90">Important:</strong>{" "}
            Borrowing money costs money. Other options may be available. Free
            financial counselling is available from the National Debt Helpline
            at{" "}
            <a
              href="ndh.org.au"
              className="text-bg-secondary underline hover:no-underline"
            >
              ndh.org.au
            </a>{" "}
            or by calling 1800 007 007. Visit{" "}
            <a
              href="moneysmart.gov.au"
              className="text-bg-secondary underline hover:no-underline"
            >
              moneysmart.gov.au
            </a>{" "}
            for free guidance on managing money. For Faster.com.au support, chat
            with us on-site or email{" "}
            <a
              href="mailto:support@faster.com.au"
              className="text-bg-secondary underline hover:no-underline"
            >
              support@faster.com.au
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

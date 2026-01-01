import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../assets/logo-white.svg";

const linkClass =
  "relative font-semibold text-bg-primary \
    after:content-[''] after:absolute after:right-0 after:-bottom-0.5 \
    after:h-[2px] after:w-0 after:bg-bg-primary \
    after:transition-all after:duration-300 \
    hover:after:w-full hover:after:left-0";

const xlLinkClass =
  "relative text-lg font-semibold text-bg-primary \
    after:content-[''] after:absolute after:right-0 after:-bottom-0.5 \
    after:h-[2px] after:w-0 after:bg-bg-primary \
    after:transition-all after:duration-300 \
    hover:after:w-full hover:after:left-0";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary to-primary">
      <div className="w-full mx-auto px-8 py-12 lg:py-16 lg:px-40 space-y-10">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          {/* Logo */}
          <div className="w-3/4 md:w-1/3 flex-shrink-0">
            <img
              src={Logo}
              alt="Faster Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          {/* Socials (mobile) */}
          <div className="sm:hidden flex gap-4 -mt-12">
            <a href="" className="text-bg-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </a>
            <a href="">
              <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </a>
            <a href="" className="text-primary hover:text-secondary">
              <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>
            <a href="" className="text-primary hover:text-secondary">
              <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Links */}
          <div className="w-full grid gap-12 lg:gap-48 sm:gap-24 grid-cols-2 sm:grid-cols-3 text-base text-left">
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-bg-secondary/70">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className={linkClass}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={linkClass}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/fees" className={linkClass}>
                    Fees
                  </Link>
                </li>
                <li>
                  <Link to="/security" className={linkClass}>
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className={linkClass}>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-bg-secondary/70">
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/contact" className={linkClass}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className={linkClass}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/calculator" className={linkClass}>
                    Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-bg-secondary/70">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/terms-and-conditions" className={linkClass}>
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className={linkClass}>
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className={linkClass}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/credit-guide" className={linkClass}>
                    Credit Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-bg-secondary/40" />

        <div className="space-y-6 text-xs text-gray-400">
          {/* Row: legal links left, socials right */}
          <div className="hidden sm:flex flex-col gap-6 md:flex-row md:items-center md:justify-between place-items-center">
            <div className="flex gap-10 text-center">
              <Link to="/terms-and-conditions" className={xlLinkClass}>
                Terms &amp; Conditions
              </Link>
              <Link to="/privacy-policy" className={xlLinkClass}>
                Privacy Policy
              </Link>
              <Link to="/refund-policy" className={xlLinkClass}>
                Refund Policy
              </Link>
            </div>
            {/* Socials */}
            <div className="flex gap-4">
              <a href="" className="text-bg-primary hover:text-bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </a>
              <a href="" className="text-primary hover:text-secondary">
                <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-bg-primary hover:[&>svg]:fill-bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </a>
              <a href="" className="text-primary hover:text-secondary">
                <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-bg-primary hover:[&>svg]:fill-bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </a>
              <a href="" className="text-primary hover:text-secondary">
                <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-bg-primary hover:[&>svg]:fill-bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Fine print */}
        <p className="text-sm text-bg-primary/70 max-w-4xl leading-relaxed text-left">
          All Rights Reserved ©2025 Faster Financial Group Pty Ltd (ABN: 42 096
          001 900). Lightspeed CashFaster Ventures Pty Ltd Australian Credit
          Licence 569825. Faster Financial Group Pty Ltd is ISO 27001 Certified
          by Lloyds Register for Information Security Management.
        </p>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../assets/logo-white.svg";

const linkClass =
  "relative font-semibold text-bg-primary \
    after:content-[''] after:absolute after:right-0 after:-bottom-0.5 \
    after:h-[2px] after:w-0 after:bg-bg-primary \
    after:transition-all after:duration-300 \
    hover:after:w-full hover:after:left-0";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary to-primary">
      <div className="w-full max-w-[2160px] mx-auto  py-12 lg:py-16 px-8 lg:px-40 space-y-10">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          {/* Logo */}
          <div className="w-full">
            <div className="flex-shrink-0">
              <a href="https://faster.com.au" target="_blank">
                <img
                  src={Logo}
                  alt="Faster Logo"
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>

            <div className="space-y-1 mt-8">
              <p className="text-base text-bg-secondary/80 leading-relaxed">
                <strong>Lightspeed CashFaster Ventures Pty Ltd</strong> · ABN 84
                667 709 597 · ACL 569825
              </p>
              <p className="text-base text-bg-secondary/80 leading-relaxed">
                <strong>Faster Financial Group Pty Ltd</strong> · ABN 42 096 001
                900 · AFCA Member
              </p>
              <p className="text-base text-bg-secondary/80 leading-relaxed">
                Suite 1, Level 1, 2 Collins St Melbourne VIC 3000
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="w-full grid gap-12 sm:gap-24 md:mr-8 lg:mr-16 grid-cols-2 text-base text-left md:justify-items-end">
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-bg-secondary/70">
                Fund
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="#how-it-works" className={linkClass}>
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="#about" className={linkClass}>
                    The Fund
                  </Link>
                </li>
                <li>
                  <Link to="#security" className={linkClass}>
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="#operator" className={linkClass}>
                    Operator
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-bg-secondary/70">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="https://faster.com.au"
                    className={linkClass}
                    target="_blank"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#register" className={linkClass}>
                    Register Interest
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-bg-secondary/40" />

        {/* Socials */}
        <div className="flex flex-row gap-8 place-items-center">
          <a
            href="https://faster.com.au"
            target="_blank"
            className="text-bg-primary hover:text-bg-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
            </svg>
          </a>
          <a
            href="mailto:support@faster.com.au"
            className="text-bg-primary hover:text-bg-secondary"
          >
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
          <a
            href="https://www.linkedin.com/company/fasterfinancial/"
            target="_blank"
            className="text-primary hover:text-secondary"
          >
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
          <a
            href="https://www.instagram.com/faster.com.au"
            target="_blank"
            className="text-primary hover:text-secondary"
          >
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

        {/* Fine print */}
        <p className="text-sm text-bg-primary/70 max-w-7xl leading-relaxed text-left">
          This website is for informational purposes only and does not
          constitute financial advice, a prospectus, or an offer to invest. The
          Faster Fixed Income Fund is available to sophisticated investors only
          as defined under section 708 of the Corporations Act 2001 (Cth).
          Investing involves risk, including the possible loss of capital. Past
          performance is not indicative of future results. <br /> <br />
          Lightspeed CashFaster Ventures Pty Ltd ACL 569825 · Faster Financial
          Group Pty Ltd ABN 42 096 001 900 · AFCA Member · © 2026 Faster
          Financial Group.
        </p>
      </div>
    </footer>
  );
}

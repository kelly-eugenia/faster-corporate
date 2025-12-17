import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import Collapsible from "../components/Collapsible";
import CTA from "../components/CTA";
import FAQSection from "../components/FAQSection";

import HeroPhoto from "../assets/trusted-security-reliable-tech.png";
import Banner from "../assets/secure.jpeg";
import RegisteredPhoto from "../assets/registered-2.png";
import CorePhoto from "../assets/core-security.png";

import "../App.css";

const features = [
  {
    header: "Real-Time Security Monitoring",
    text: (
      <>
        <p>
          We perform continuous monitoring to help detect unusual or suspicious
          activity on your account.
        </p>
        <p className="mt-8 font-medium">
          <span className="mr-2 text-primary font-bold">✓</span>Threat detection
          <span className="ml-8 mr-2 text-primary font-bold">✓</span>Automated
          alerts
        </p>
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
  },
  {
    header: "Multi-Layered Protection",
    text: (
      <>
        <p>
          Sensitive information is encrypted with strict access controls using
          industry-standard protocols.
        </p>
        <p className="mt-8 font-medium">
          <span className="mr-2 text-primary font-bold">✓</span>Encrypted data
          <span className="ml-8 mr-2 text-primary font-bold">✓</span>Secure
          access controls
        </p>
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
  },
  {
    header: "Bank-Grade Verification",
    text: (
      <>
        <p>
          We use accredited third-party bank connections with read-only access —
          we cannot move or manage your money.
        </p>
        <p className="mt-8 font-medium">
          <span className="mr-2 text-primary font-bold">✓</span>Secure bank
          connection
          <span className="ml-8 mr-2 text-primary font-bold">✓</span>Read-only
          access
        </p>
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
  {
    header: "Cloud-Based Security",
    text: (
      <>
        <p>
          We operate on trusted cloud infrastructure with built-in compliance,
          patching, and strong security.
        </p>
        <p className="mt-8 font-medium">
          <span className="mr-2 text-primary font-bold">✓</span>Protected
          infrastructure
          <span className="ml-8 mr-2 text-primary font-bold">✓</span>Scalable
          technology
        </p>
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
  },
  {
    header: "Incident Response & Compliance",
    text: (
      <>
        <p>
          We follow defined processes to identify and respond to potential
          security risks, aligned with Australian financial and privacy
          requirements.
        </p>
        <p className="mt-8 font-medium">
          <span className="mr-2 text-primary font-bold">✓</span>Continuous
          monitoring
          <span className="ml-8 mr-2 text-primary font-bold">✓</span>Regulatory
          alignment
        </p>
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
        />
      </svg>
    ),
  },
  {
    header: "Customer Safety & Education",
    text: (
      <>
        <p>
          We provide clear guidance to help you protect your account, and will
          contact you through official Faster channels for any security-related
          information.
        </p>
        <p className="mt-8 font-medium">
          <span className="mr-2 text-primary font-bold">✓</span>Protection
          guidance
          <span className="ml-8 mr-2 text-primary font-bold">✓</span>Proactive
          communication
        </p>
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
];
const leftFeatures = features.slice(0, 3);
const rightFeatures = features.slice(3, 6);

const securityFaqs = [
  {
    question: "Is Faster safe to use?",
    answer: (
      <>
        Yes — we use secure, industry-standard technology to protect your data,
        and all information is encrypted in transit and at rest. We also comply
        with Australian credit laws, privacy requirements, and
        responsible-lending regulations.
      </>
    ),
  },
  {
    question: "How is my personal and financial information used?",
    answer: (
      <>
        We use your information to assess your application, manage your Line of
        Credit, meet our legal obligations, and help keep your account secure.
        Full details are set out in our{" "}
        <a href="privacy-policy" className="hover:underline">
          Privacy Policy
        </a>{" "}
        and your credit contract.
      </>
    ),
  },
  {
    question: "Can Faster move money from my bank account?",
    answer: (
      <>
        When you connect your bank, the connection is read-only — we cannot move
        your money. Any repayments are made using the payment methods and
        authorities you agree to in your contract and account setup.
      </>
    ),
  },
  {
    question: "How will Faster contact me about security or account issues?",
    answer: (
      <>
        We’ll only contact you through official Faster channels. We’ll never ask
        you for your password or full card details over email or SMS.
      </>
    ),
  },
];

export default function Security() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-bg-primary px-12 py-6 mx-auto">
        <NavBar />
      </header>
      <div className="w-full lg:px-40 sm:px-12 mx-auto">
        {/* Hero */}
        <section className="grid lg:grid-cols-2 bg-gradient-to-tr from-primary to-secondary rounded-2xl px-8 sm:px-16 mb-12 gap-16 content-center lg:text-left sm:text-center">
          <div className="py-24 md:py-16 content-center">
            <Pill text="Advanced security" color="bg-primary" />
            <h1 className="my-8 text-6xl text-bg-primary">
              Security you can trust, tech you can rely on
            </h1>
            <p className="mb-8 text-bg-primary">
              As a digital-first credit provider, Faster is built on strong
              engineering foundations. We use secure, industry-standard
              technology to protect your personal information, bank data, and
              account activity.
            </p>
          </div>
          <div className="pt-8">
            <img
              className="bottom-0 object-cover h-full rounded-2xl"
              src={HeroPhoto}
              alt="Smiling customer enjoying simple, secure banking"
            />
          </div>
        </section>

        {/* Trustpilot */}
        <section className="lg:-mx-40 sm:-mx-12 mx-auto sm:px-12 lg:px-40 py-12 bg-bg-secondary py-8text-xl text-center text-bg-primary">
          <Pill text="What the people say" color="bg-primary" />
          <div
            className="trustpilot-widget mt-8"
            data-locale="en-US"
            data-template-id="54ad5defc6454f065c28af8b"
            data-businessunit-id="65b19266fd020b5cdce866e7"
            data-style-height="240px"
            data-style-width="100%"
            data-token="a19c9066-5a27-4aed-b43e-6129e09e819c"
            data-stars="1,2,3,4,5"
            data-review-languages="en"
          >
            <a
              href="https://www.trustpilot.com/review/cashfaster.com.au"
              target="_blank"
              rel="noopener"
            >
              Trustpilot
            </a>
          </div>
        </section>

        {/* Key features */}
        <section className="mb-12 px-8 sm:px-16 py-16 mb-12 gap-8 items-center">
          <div className="text-center">
            <h1 className="my-8 text-6xl">
              Built on secure, encrypted systems
            </h1>
            <p className="font-medium text-xl">
              We invest in secure infrastructure, encrypted data handling, and
              continuous monitoring to keep your information protected at all
              times. Our platform is designed to process applications safely,
              securely, and accurately — without compromising speed or
              usability.
            </p>
          </div>

          <div className="rounded-2xl relative overflow-hidden flex items-center justify-center py-8 mt-8">
            <img
              className="object-cover w-full h-96 rounded-3xl"
              src={Banner}
              alt="Smiling customer enjoying simple, secure banking"
            />
          </div>

          {/* Features */}
          <h1 className="my-12">Key features</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="flex flex-col gap-8">
              {leftFeatures.map((feature) => (
                <Collapsible
                  key={feature.header}
                  header={feature.header}
                  text={feature.text}
                  icon={feature.icon}
                />
              ))}
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-8">
              {rightFeatures.map((feature) => (
                <Collapsible
                  key={feature.header + "-right"}
                  header={feature.header}
                  text={feature.text}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </section>

        <hr className="border-t border-[#D4D6E5] lg:-mx-40 sm:-mx-12" />

        <h1 className="text-6xl text-center my-12 mt-24">Why trust Faster?</h1>
        {/* Regulation and compliance */}
        <section className="grid lg:grid-cols-2 bg-bg-secondary rounded-2xl px-8 sm:px-16 mb-12 gap-16 content-center ">
          <div className="px-8">
            <img
              className="bottom-0 object-cover h-full rounded-3xl"
              src={RegisteredPhoto}
              alt="Smiling customer enjoying simple, secure banking"
            />
          </div>
          <div className="lg:text-left sm:text-center py-24 md:py-16 content-center">
            <h1 className="my-8 text-6xl">Regulation and compliance</h1>
            <p>
              Faster.com.au is a registered credit provider in Australia and:
            </p>
            <ul className="list-inside text-lg font-medium text-text-primary">
              <li className="my-4 relative pl-8 list-none before:absolute before:left-0 before:content-['✓'] before:text-primary">
                Complies with Australian credit and privacy laws, including the
                National Consumer Credit Protection Act 2009
              </li>
              <li className="my-4 relative pl-8 list-none before:absolute before:left-0 before:content-['✓'] before:text-primary">
                Follows relevant ASIC expectations, including those set out in
                Regulatory Guide 234 on clear, fair and accurate communication
              </li>
            </ul>
          </div>
        </section>

        {/* Security */}
        <section className="grid lg:grid-cols-2 bg-bg-secondary rounded-2xl px-8 mb-24 gap-8 content-center ">
          <div className="rounded-2xl px-8 py-16 content-center lg:text-left sm:text-center">
            <h1 className="mt-12 my-8 text-6xl">Security at our core</h1>
            <p>
              You trust us with your information — and we take that
              responsibility seriously.
            </p>

            <div>
              <div className="flex gap-6 justify-start my-12">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-12 text-primary mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <h2>Expertise</h2>
                  <p>
                    Backed by an experienced team across tech, credit, security,
                    and compliance.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 justify-start my-12">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-12 text-primary mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                      clipRule="evenodd"
                    />
                    <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                  </svg>
                </span>
                <div>
                  <h2>Innovation</h2>
                  <p>
                    Our platform is continually improved to stay aligned with
                    industry best practices.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 justify-start my-12">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-12 text-primary mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                      clipRule="evenodd"
                    />
                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                  </svg>
                </span>
                <div>
                  <h2>Customer-First Design</h2>
                  <p>Privacy and safety are designed into every feature.</p>
                </div>
              </div>
            </div>
            <div className="flex gap-6 justify-start my-12">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-12 text-primary mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div>
                <h2>Commitment to Transparency</h2>
                <p>
                  Clear communication about how your data is used and stored
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl flex items-bottom justify-center px-8 lg:py-16 sm:pt-0 sm:pb-12">
            <img
              src={CorePhoto}
              alt="Faster website on phone and laptop"
              className="block w-full h-auto rounded-2xl"
            />
          </div>
        </section>

        {/* CTA */}
        <CTA />

        {/* FAQ */}
        <section className="py-24 md:py-12 mb-12 content-center">
          <h1 className="text-center mb-12">Customers frequently ask</h1>
          <FAQSection faqs={securityFaqs} />
        </section>
      </div>
      <Footer />
    </>
  );
}

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import Collapsible from "../components/Collapsible";
import CTA from "../components/CTA";

import Photo1 from "../assets/person-smiling.png";
import Photo2 from "../assets/man-smiling.png";
import Photo3 from "../assets/secure.jpeg";

import "../App.css";

const features = [
  {
    header: "Real-Time Security Monitoring",
    text: (
      <ul className="space-y-2">
        <li>
          <span className="mr-2">▶</span>
          <strong>Threat Detection:</strong> Our systems are monitored
          continuously to help identify unusual or suspicious behaviour on your
          account.
        </li>
        <li>
          <span className="mr-2">▶</span>
          <strong>Automated Alerts:</strong> If something doesn’t look right,
          our systems can flag it for review to help keep your account safe.
        </li>
      </ul>
    ),
  },
  {
    header: "Multi-Layered Protection",
    text: (
      <ul className="space-y-2">
        <li>
          <span className="mr-2">▶</span>
          <strong>Encrypted Data:</strong> All sensitive information is
          encrypted during transmission and storage using industry-standard
          security protocols.
        </li>
        <li>
          <span className="mr-2">▶</span>
          <strong>Secure Access Controls:</strong> Only authorised team members
          — under strict compliance requirements — can access essential
          operational systems.
        </li>
      </ul>
    ),
  },
  {
    header: "Bank-Grade Verification",
    text: (
      <ul className="space-y-2">
        <li>
          <span className="mr-2">▶</span>
          <strong>Secure Bank Connection:</strong> When you connect your bank
          for verification, we use accredited third-party technology designed
          for safety and privacy.
        </li>
        <li>
          <span className="mr-2">▶</span>
          <strong>Read-Only Access:</strong> We cannot move, touch or manage
          your money — your connection is strictly information-only.
        </li>
      </ul>
    ),
  },
  {
    header: "Cloud-Based Security",
    text: (
      <ul className="space-y-2">
        <li>
          <span className="mr-2">▶</span>
          <strong>Protected Infrastructure:</strong> We operate on trusted cloud
          platforms with built-in compliance, automated patching, and strong
          physical security protections.
        </li>
        <li>
          <span className="mr-2">▶</span>
          <strong>Scalable Technology:</strong> Our systems grow with demand
          while maintaining security, uptime and reliability.
        </li>
      </ul>
    ),
  },
  {
    header: "Incident Response & Compliance",
    text: (
      <ul className="space-y-2">
        <li>
          <span className="mr-2">▶</span>
          <strong>Continuous Monitoring:</strong> We follow strict processes
          designed to identify and respond to potential security risks.
        </li>
        <li>
          <span className="mr-2">▶</span>
          <strong>Regulatory Alignment:</strong> Our platform is developed in
          line with Australian financial regulations and privacy requirements.
        </li>
      </ul>
    ),
  },
  {
    header: "Customer Safety & Education",
    text: (
      <ul className="space-y-2">
        <li>
          <span className="mr-2">▶</span>
          <strong>Account Protection Guidance:</strong> We provide simple steps
          to help you keep your Faster account secure.
        </li>
        <li>
          <span className="mr-2">▶</span>
          <strong>Proactive Communication:</strong> We’ll always contact you
          through official Faster channels if we need to verify something about
          your account.
        </li>
      </ul>
    ),
  },
];
const leftFeatures = features.slice(0, 3);
const rightFeatures = features.slice(3, 6);

export default function Security() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-bg-primary px-12 py-6 mx-auto">
        <NavBar />
      </header>
      <div className="w-full lg:px-40 sm:px-12 mx-auto">
        {/* Hero */}
        <section className="grid lg:grid-cols-3 bg-gradient-to-br from-bg-secondary to-[#709FFF] rounded-2xl px-8 sm:px-16 mb-12 gap-12 content-center lg:text-left sm:text-center">
          <div className="py-24 md:py-16 col-span-1 lg:col-span-2">
            <Pill text="Advanced security" color="bg-primary" />
            <h1 className="my-8 text-6xl">
              Security you can trust, technology you can rely on
            </h1>
            <p>
              As a digital-first credit provider, Faster is built on strong
              engineering foundations. We use secure, industry-standard
              technology to protect your personal information, your bank data,
              and your account activity.
            </p>
          </div>
          <div className="pt-8">
            <img
              className="bottom-0 object-cover h-full rounded-3xl"
              src={Photo1}
              alt="Smiling customer enjoying simple, secure banking"
            />
          </div>
        </section>

        {/* Key features */}
        <section className="mb-12 px-8 sm:px-16 py-8 mb-12 gap-8 items-center">
          <div className="text-center">
            <h1 className="my-8 text-6xl">
              Built on secure, encrypted systems
            </h1>
            <p className="font-medium text-xl">
              We invest heavily in secure systems, encrypted data handling, and
              continuous monitoring to ensure your information stays protected
              at all times. Our platform is designed to process applications
              safely, securely, and accurately — without compromising speed or
              usability.
            </p>
          </div>

          <div className="rounded-2xl relative overflow-hidden flex items-center justify-center py-8 mt-8">
            <img
              className="object-cover w-full h-96 rounded-3xl"
              src={Photo3}
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
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="bg-bg-secondary lg:-mx-40 sm:-mx-12 mb-12 lg:px-40 sm:px-12">
          <div className="px-40 sm:px-12 py-12 mb-12 gap-8 items-center">
            <div className="mb-16 text-center">
              <h1 className="my-8 text-6xl">Why trust us?</h1>
              <p className="font-medium text-xl">
                You trust us with your information — and we take that
                responsibility seriously.
              </p>
            </div>

            <div className="mb-12 grid lg:grid-cols-2 gap-16 bg-bg-primary rounded-2xl p-8 content-center">
              <div className="bg-bg-secondary rounded-xl grid place-items-center size-auto text-text-primary"></div>
              <div className="py-12 px-8">
                <h2 className="mb-6">Expertise</h2>
                <p className="text-xl mt-8">
                  Faster is backed by a team with experience in tech, credit,
                  security and compliance. We build smart tools that make
                  borrowing safe, not complicated.
                </p>
              </div>
            </div>
            <div className="mb-12 grid lg:grid-cols-2 gap-16 bg-bg-primary rounded-2xl p-8 content-center">
              <div className="py-12 px-8">
                <h2 className="mb-6">Innovation</h2>
                <p className="text-xl mt-8">
                  As a technology-led company, we constantly refine and upgrade
                  our platform to stay aligned with industry best practice and
                  evolving security standards.
                </p>
              </div>
              <div className="bg-bg-secondary rounded-xl grid place-items-center size-auto text-text-primary"></div>
            </div>
            <div className="mb-12 grid lg:grid-cols-2 gap-16 bg-bg-primary rounded-2xl p-8 content-center">
              <div className="bg-bg-secondary rounded-xl grid place-items-center size-auto text-text-primary"></div>
              <div className="py-12 px-8">
                <h2 className="mb-6">Customer-First Design</h2>
                <p className="text-xl mt-8">
                  Your privacy and safety are central to how we operate. Every
                  feature — from bank verification to identity checks — is
                  designed to keep your information protected.
                </p>
              </div>
            </div>
            <div className="mb-12 grid lg:grid-cols-2 gap-16 bg-bg-primary rounded-2xl p-8 content-center">
              <div className="py-12 px-8">
                <h2 className="mb-6">Commitment to Transparency</h2>
                <p className="text-xl mt-8">
                  We communicate clearly about how your data is used and stored,
                  with no hidden practices or unauthorised access.
                </p>
              </div>
              <div className="bg-bg-secondary rounded-xl grid place-items-center size-auto text-text-primary"></div>
            </div>
          </div>
        </section>

        {/* Callout */}
        <section className="grid lg:grid-cols-2 px-8 sm:px-16 mb-12 gap-24 content-center ">
          <div className="pt-8 px-8 bg-bg-secondary rounded-2xl">
            <img
              className="bottom-0 object-cover h-full rounded-3xl"
              src={Photo2}
              alt="Smiling customer enjoying simple, secure banking"
            />
          </div>
          <div className="lg:text-left sm:text-center py-24 md:py-16">
            <Pill
              text="Security at the heart of our technology"
              color="bg-secondary"
            />
            <h1 className="mt-12 my-8">
              We’re a tech company at our core — and security is part of
              everything we build.
            </h1>
            <p className="text-xl mb-8">
              From application to repayment, every part of the Faster experience
              is designed with safety, accuracy and reliability in mind. If you
              ever have questions about how we protect your information, our
              team is here to help.
            </p>

            <div className="items-center gap-2 mt-8">
              <button className="btn-secondary mr-4">Contact Us</button>
              <button className="btn-primary">Learn more</button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA />
      </div>
      <Footer />
    </>
  );
}

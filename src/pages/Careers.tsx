import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

import SEO from "../components/SEO";
import { useSEO } from "../utils/useSEO";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";
import JobCard from "../components/JobCard";

import TeamPhoto from "../assets/career-team.jpg";
import BgPhoto from "../assets/background.svg";

import "../App.css";

const jobDesc = [
  {
    jobId: "dm001",
    role: "Digital Marketing Manager",
    desc: (
      <div className="text-lg space-y-4">
        <p className="font-bold text-2xl">About Faster</p>
        <p>
          Faster is a forward-thinking financial technology company dedicated to
          advancing credit inclusion by providing fair, swift, and transparent
          access to credit through its innovative online lending platform.
          Operating in Australia, New Zealand, the USA, Canada, and the United
          Kingdom, Faster offers tailored credit solutions to meet diverse
          consumer needs. With a deep understanding of consumer lending, the
          company leverages artificial intelligence, sophisticated underwriting,
          and a commitment to exceptional customer experience to efficiently
          provide thousands of personal loans each month.
        </p>
        <br />
        <p className="font-bold text-2xl">Role Description</p>
        <p>
          This is a full-time hybrid role for a Digital Marketing Manager
          located in Melbourne, VIC, with some work from home acceptable. The
          Digital Marketing Manager will be responsible for developing and
          executing social media marketing campaigns, generating leads,
          analysing web analytics, and driving overall digital marketing
          strategies. Daily tasks include monitoring the performance of digital
          marketing initiatives, optimising content for various platforms, and
          collaborating with cross-functional teams to enhance digital presence
          and effectiveness.
        </p>
        <br />
        <p className="font-bold text-2xl">Qualifications</p>
        <ul className="text-text-primary list-disc list-inside">
          <li>Social Media Marketing and Lead Generation skills</li>
          <li>
            Expertise in Digital Marketing and Marketing strategies (Knows how
            to execute and plan digital campaigns across Meta, Google & Tiktok)
          </li>
          <li>Proficiency in Web Analytics tools</li>
          <li>Strong attention to detail and analytical skills</li>
          <li>Excellent communication and teamwork abilities</li>
          <li>Bachelor's degree in Marketing, Business, or related field</li>
          <li>Experience in the financial technology industry is a plus</li>
        </ul>
      </div>
    ),
    type: "Full-time",
    location: "Hybrid - Melbourne, VIC",
    applyUrl: "https://www.linkedin.com/jobs/view/4324348669",
  },
];

const values = [
  {
    num: "01",
    title: "Customer first",
    desc: "We design credit solutions that help people stay in control — clear terms, no traps, no surprises.",
  },
  {
    num: "02",
    title: "Responsible by default",
    desc: "We follow both the rules and the intent behind them, aiming for lending that's sustainable and suitable.",
  },
  {
    num: "03",
    title: "Security and trust",
    desc: "We treat customer data with care. Security, privacy and reliability are built into everything we do.",
  },
  {
    num: "04",
    title: "Many disciplines, one team",
    desc: "Engineering, risk, design and operations work together to solve problems end-to-end as a single team.",
  },
];

const perks = [
  {
    title: "Make a meaningful difference",
    desc: "Your work directly shapes how people access and manage credit — for thousands of real Australians.",
    icon: (
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    ),
  },
  {
    title: "Tech at the core",
    desc: "From data-driven underwriting to digital experimentation, you'll work with modern tools and ideas.",
    icon: (
      <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
    ),
  },
  {
    title: "Inclusive and responsible",
    desc: "We care about inclusion and growth — and about responsible lending, transparency and security in equal measure.",
    icon: (
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
        clipRule="evenodd"
      />
    ),
  },
  {
    title: "Flexible work",
    desc: "Hybrid work that fits you — balancing focus time at home with collaboration in the office.",
    icon: (
      <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
    ),
  },
];

export default function Careers() {
  const seo = useSEO("careers");

  return (
    <>
      <SEO
        title={
          seo?.title ||
          "Careers at Faster — Build Fair, Fast Credit in Australia | Faster.com.au"
        }
        description={
          seo?.description ||
          "Join Faster and help build fair, fast credit for Australians. See open roles across tech, marketing and operations."
        }
        ogTitle={
          seo?.ogTitle ||
          "Careers at Faster — Build the Future of Fair, Fast Credit | Faster.com.au"
        }
        ogDescription={
          seo?.ogDescription ||
          "A data-driven Australian fintech shaping how people access credit. Flexible, hybrid work and meaningful impact. See open roles."
        }
        canonicalUrl={seo?.canonicalUrl}
      />

      <NavBar />

      <div className="w-full mx-auto">
        {/* Hero */}
        <section className="relative overflow-hidden hero-padding bg-hero-gradient text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10 w-full max-w-[760px] mx-auto px-8"
          >
            <Pill
              text="Work with Faster"
              variant="light"
              className="mb-[22px]"
            />
            <h1
              className="text-[clamp(38px,5vw,62px)] leading-[1.02] tracking-[-0.025em] font-bold mb-5 text-bg-primary"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Let's build the future of{" "}
              <em className="italic font-[700] bg-text-gradient bg-clip-text text-transparent">
                fair, fast
              </em>{" "}
              credit
            </h1>
            <p className="text-[16px] sm:text-[18px] text-bg-secondary leading-[1.6] mb-4 sm:mb-6">
              If you care about technology and responsible, fast lending, we'd
              love to meet you.
            </p>
            <Link to="/careers#open-roles" className="btn btn-primary group">
              View open roles
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
          </motion.div>
        </section>

        <section className="section-padding">
          <div className="w-full max-w-[1440px] px-6 mx-auto">
            {/* About Faster */}
            <section className="grid lg:grid-cols-2 gap-8 mb-2 lg:mb-6 items-stretch">
              {/* Left */}
              <div className="order-2 lg:order-1 rounded-2xl pb-6 pt-0 lg:pt-6 flex items-center justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden h-[240px] sm:h-[320px] md:h-[400px] lg:h-[520px]">
                  <img
                    src={TeamPhoto}
                    alt="The Faster team"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {/* Where-we-work stamp */}
                  <div className="absolute left-4 bottom-4 bg-secondary/85 backdrop-blur border border-bg-primary/15 rounded-xl px-4 py-3 text-bg-primary">
                    <div className="text-[10px] uppercase tracking-[0.14em] text-bg-secondary/60 mb-0.5">
                      Where we work
                    </div>
                    <div className="text-base font-semibold">
                      Melbourne, VIC · Hybrid
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="order-1 lg:order-2 rounded-2xl p-0 lg:px-10 lg:py-10 content-center lg:text-left text-center"
              >
                <Pill text="About the team" className="mb-[18px]" />
                <h1 className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mb-5 text-text-primary">
                  Who we are
                </h1>
                <p className="text-[clamp(16px,3.5vw,18px)] text-muted-primary mb-4 leading-[1.65]">
                  Faster is a forward-thinking financial technology company
                  dedicated to advancing credit inclusion – giving more people{" "}
                  <span className="text-primary font-bold">
                    fair, swift, and transparent access to credit.
                  </span>
                </p>
                <p className="text-[clamp(16px,3.5vw,18px)] text-muted-primary mb-4 leading-[1.65]">
                  We help thousands of Australians manage short-term cashflow
                  with a personal line of credit that's built to be clear, not
                  confusing. We're a small, multi-disciplinary team that ships
                  quickly and takes responsible lending seriously.
                </p>

                <Link to="/about" className="btn btn-primary group">
                  Learn more about us
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
              </motion.div>
            </section>

            {/* Values — numbered ledger */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="pt-8 md:pt-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-10 items-end mb-8 lg:mb-12 lg:text-left text-center">
                <div>
                  <Pill text="Our values" />
                  <h1 className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mt-6 text-text-primary">
                    What we believe in
                  </h1>
                </div>
              </div>

              <div className="border-t border-text-primary">
                {values.map((v) => (
                  <div
                    key={v.num}
                    className="grid grid-cols-[44px_1fr] sm:grid-cols-[70px_1fr] lg:grid-cols-[140px_1fr_1.1fr] gap-x-5 gap-y-3 lg:gap-4 pt-8 py-7 border-b border-bg-secondary items-center transition-colors hover:bg-bg-secondary"
                  >
                    <div className="text-4xl lg:text-5xl font-medium ml-2 text-primary tracking-tight leading-none">
                      {v.num}
                    </div>
                    <h3 className="text-2xl lg:text-[27px] font-bold tracking-tight text-text-primary">
                      {v.title}
                    </h3>
                    <p className="col-start-2 lg:col-start-3 text-[clamp(14px,3.5vw,16px)] md:text-xl text-muted-primary leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </section>

        {/* Why work here */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-padding content-center bg-cover bg-top"
          style={{ backgroundImage: `url(${BgPhoto})` }}
        >
          <div className="mb-8 sm:mb-12 md:mb-14 content-center text-center">
            <Pill text="So..." />
            <h1 className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mt-[18px] mb-5 text-text-primary">
              Why work here?
            </h1>
            <p className="text-[clamp(16px,3.5vw,18px)] text-muted-primary leading-[1.65]">
              Joining Faster means growing your career in a data-driven fintech
              shaping how people access credit.
            </p>
          </div>

          <div className="max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto">
            {/* MOBILE: swipeable carousel */}
            <div className="md:hidden px-6">
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
                {perks.map((perk) => (
                  <div
                    key={perk.title}
                    className="snap-start shrink-0 w-[80%] bg-bg-secondary rounded-2xl p-8 flex flex-col justify-start"
                  >
                    <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        {perk.icon}
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl mb-2">{perk.title}</h2>
                    <p>{perk.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP: 2-column grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 items-stretch">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="bg-bg-secondary rounded-2xl p-8 content-center"
                >
                  <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      {perk.icon}
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl">{perk.title}</h2>
                  <p>{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Open roles */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          id="open-roles"
          className="bg-bg-secondary section-padding gap-8 content-center"
        >
          <div className="w-full max-w-[1440px] px-6 mx-auto">
            <div className="text-center md:px-6 mb-8 sm:mb-12 md:mb-14">
              <Pill text="We're hiring" variant="white" />
              <h1 className="text-[clamp(32px,3.8vw,46px)] leading-[1.05] tracking-[-0.025em] font-bold mt-[18px] mb-5 text-text-primary">
                Open Roles
              </h1>
              <p className="text-[clamp(16px,3.5vw,18px)] max-w-[64ch] mx-auto text-muted-primary leading-[1.65] mb-4">
                We’re growing across multiple disciplines and are interested in
                people who care about fintech and doing credit the right way.
              </p>
            </div>

            <section className="space-y-4 mb-6">
              {jobDesc.map((job) => {
                return (
                  <JobCard
                    key={job.jobId}
                    jobId={job.jobId}
                    role={job.role}
                    type={job.type}
                    location={job.location}
                    applyUrl={job.applyUrl}
                  />
                );
              })}
            </section>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
}

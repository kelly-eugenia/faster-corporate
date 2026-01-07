import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import SEO from "../components/SEO";
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

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers at Faster — Build the Future of Fair, Fast Credit | Faster.com.au"
        description="Work with Faster and help shape how people access credit. We’re a data-driven fintech offering real impact, growth opportunities, and flexibility."
      />

      <NavBar />

      <div className="w-full mx-auto">
        {/* Hero */}
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 pt-16 md:pt-20 lg:pt-24 bg-gradient-to-b from-secondary to-primary">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.05,
            }}
            className="pt-12 sm:pt-16 py-8 md:py-24 gap-8 content-center text-center"
          >
            <Pill text="Work with Faster" color="bg-primary" />

            <h1 className="mt-8 sm:mt-8 lg:mt-12 my-4 md:my-8 text-4xl md:text-5xl lg:text-6xl text-bg-primary">
              Let's build the future of fair, fast credit
            </h1>
            <p className="my-4 md:my-8 px-6 sm:px-12 md:px-24 text-bg-secondary text-base sm:text-lg md:text-2xl font-medium">
              If you care about technology and responsible, fast lending,
              <br /> we’d love to meet you.
            </p>
            <Link
              to="/careers#open-roles"
              className="btn btn-primary-light text-base md:text-lg my-0 font-medium"
            >
              View Open Roles
            </Link>
          </motion.div>
        </section>

        <div className="xl:max-w-[1920px] mx-auto">
          <section className="px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-12">
            {/* About Faster */}
            <section className="grid lg:grid-cols-2 gap-8 mb-2 lg:mb-6 items-stretch">
              {/* Left */}
              <div className="order-2 lg:order-1 rounded-2xl pb-6 pt-0 lg:pt-6 flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden h-[240px] sm:h-[320px] md:h-[400px] lg:auto-h lg:h-auto">
                  <img
                    src={TeamPhoto}
                    alt="The Faster team"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Right */}
              <div className="order-1 lg:order-2 rounded-2xl px-8 py-0 lg:px-10 lg:py-10 content-center lg:text-left text-center">
                <Pill text="About the team" color="bg-secondary" />
                <h1 className="my-6 md:my-8 text-4xl sm:text-5xl lg:text-6xl">
                  Who we are
                </h1>
                <p className="text-lg md:text-xl my-4">
                  Faster is a forward-thinking financial technology company
                  dedicated to advancing credit inclusion – giving more people{" "}
                  <span className="text-primary font-bold">
                    fair, swift, and transparent access to credit.
                  </span>
                  <br />
                  <br />
                  We're proud to help thousands of customers manage short-term
                  cashflow with personal credit solutions that are built to be
                  clear, not confusing.
                </p>

                <Link
                  to="/about"
                  className="btn btn-primary text-base md:text-lg my-0 font-medium"
                >
                  Learn More
                </Link>
              </div>
            </section>

            {/* Values */}
            <section className="grid grid-cols-1 lg:grid-cols-3 rounded-2xl bg-gradient-to-t from-bg-primary to-bg-secondary lg:px-24 px-16 lg:pt-16 pt-12 mb-12 gap-4 lg:gap-16 content-top">
              <div className="lg:text-left text-center content-top">
                <Pill text="Our values" color="bg-primary" />
                <h1 className="my-6 md:my-8 text-4xl sm:text-5xl lg:text-6xl">
                  We believe in
                </h1>
              </div>

              <div className="col-span-1 lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-1">
                  {/* CARD 1 */}
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start text-center lg:text-left lg:justify-start">
                    <span className="flex items-center mx-auto lg:mx-0">
                      {/* icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-12 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    <div className="mx-auto lg:mx-0">
                      <h2 className="text-3xl sm:text-4xl">Customer first</h2>
                      <p>
                        We design credit solutions that help people stay in
                        control.
                      </p>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start text-center lg:text-left lg:justify-start">
                    <span className="flex items-center mx-auto lg:mx-0">
                      {/* icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-12 text-primary"
                      >
                        {" "}
                        <path
                          fillRule="evenodd"
                          d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                          clipRule="evenodd"
                        />{" "}
                      </svg>
                    </span>
                    <div className="mx-auto lg:mx-0">
                      <h2 className="text-3xl sm:text-4xl">
                        Responsible by default
                      </h2>
                      <p>
                        We follow both the rules and the intent behind them,
                        aiming for lending that is sustainable and suitable.
                      </p>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start text-center lg:text-left lg:justify-start">
                    <span className="flex items-center mx-auto lg:mx-0">
                      {/* icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-12 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div className="mx-auto lg:mx-0">
                      <h2 className="text-3xl sm:text-4xl">
                        Security and trust
                      </h2>
                      <p>
                        We treat customer data with care. Security, privacy and
                        reliability are built into everything we do.
                      </p>
                    </div>
                  </div>

                  {/* CARD 4 */}
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start text-center lg:text-left lg:justify-start">
                    <span className="flex items-center mx-auto lg:mx-0">
                      {/* icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-12 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                          clipRule="evenodd"
                        />
                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                      </svg>
                    </span>
                    <div className="mx-auto lg:mx-0">
                      <h2 className="text-3xl sm:text-4xl">
                        Many disciplines, one team
                      </h2>
                      <p>
                        All roles and divisions work together to solve problems
                        end-to-end as a single team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          {/* Why work here */}
          <section
            className="px-8 sm:px-12 lg:px-16 xl:px-40 py-12 lg:py-16 content-center bg-cover bg-top"
            style={{ backgroundImage: `url(${BgPhoto})` }}
          >
            <div className="rounded-2xl px-4 mb-10 md:mb-16 content-center text-center">
              <Pill text="So..." color="bg-secondary" />
              <h1 className="mt-6 my-4 md:my-8 text-4xl sm:text-5xl lg:text-6xl">
                Why work here?
              </h1>
              <p className="text-lg md:text-2xl">
                Joining Faster means growing your career in a data-driven
                fintech shaping how people access credit.
              </p>
            </div>

            <div className="max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto">
              {/* MOBILE: swipeable carousel */}
              <div className="md:hidden -mx-8 px-8">
                <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
                  {/* Card 1 */}
                  <div className="snap-start shrink-0 w-[80%] bg-bg-secondary rounded-2xl p-8 flex flex-col justify-start">
                    <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl mb-2">
                      Make a meaningful difference
                    </h2>
                    <p>
                      Your work directly shapes how people access and manage
                      credit across multiple countries.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="snap-start shrink-0 w-[80%] bg-bg-secondary rounded-2xl p-8 flex flex-col justify-start">
                    <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl mb-2">
                      Tech at the core
                    </h2>
                    <p>
                      From AI-driven underwriting to digital marketing and
                      experimentation, you’ll work with modern tools and ideas.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="snap-start shrink-0 w-[80%] bg-bg-secondary rounded-2xl p-8 flex flex-col justify-start">
                    <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl mb-2">
                      Inclusive and responsible
                    </h2>
                    <p>
                      We care about inclusion and growth, but we care just as
                      much about responsible lending, transparency and security.
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="snap-start shrink-0 w-[80%] bg-bg-secondary rounded-2xl p-8 flex flex-col justify-start">
                    <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl mb-2">Flexible work</h2>
                    <p>
                      Enjoy flexible, hybrid work that works best for you —
                      balancing focus time at home with collaboration in the
                      office.
                    </p>
                  </div>
                </div>
              </div>

              {/* DESKTOP: 2-column grid */}
              <div className="hidden md:grid md:grid-cols-2 gap-8 items-stretch">
                <div className="bg-bg-secondary rounded-2xl p-8 content-center">
                  <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                    {/* icon 1 */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl">
                    Make a meaningful difference
                  </h2>
                  <p>
                    Your work directly shapes how people access and manage
                    credit across multiple countries.
                  </p>
                </div>

                <div className="bg-bg-secondary rounded-2xl p-8 content-center">
                  <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                    {/* icon 2 */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl">Tech at the core</h2>
                  <p>
                    From AI-driven underwriting to digital marketing and
                    experimentation, you’ll work with modern tools and ideas.
                  </p>
                </div>

                <div className="bg-bg-secondary rounded-2xl p-8 content-center">
                  <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                    {/* icon 3 */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl">
                    Inclusive and responsible
                  </h2>
                  <p>
                    We care about inclusion and growth, but we care just as much
                    about responsible lending, transparency and security.
                  </p>
                </div>

                <div className="bg-bg-secondary rounded-2xl p-8 content-center">
                  <div className="bg-bg-primary rounded-xl grid place-items-center h-12 w-12 mb-6 text-primary">
                    {/* icon 4 */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl">Flexible work</h2>
                  <p>
                    Enjoy flexible, hybrid work that works best for you —
                    balancing focus time at home with collaboration in the
                    office.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Open roles */}
        <section
          id="open-roles"
          className=" bg-bg-secondary px-8 sm:px-12 lg:px-16 xl:px-40 py-8 md:py-16 gap-8 content-center"
        >
          <div className="xl:max-w-[1920px] mx-auto">
            <div className="text-center md:px-6 mb-12">
              <Pill text="We're hiring" color="bg-primary" />
              <h1 className="mt-6 my-4 md:my-8 text-4xl sm:text-5xl lg:text-6xl">
                Open Roles
              </h1>
              <p className="text-base md:text-xl">
                We’re growing across multiple disciplines and are interested in
                people who care about fintech and doing credit the right way.
              </p>
            </div>

            <section className="space-y-4 mb-12">
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
        </section>
      </div>
      <Footer />
    </>
  );
}

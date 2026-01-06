import { useParams, Link } from "react-router-dom";

import SEO from "../components/SEO";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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

export default function JobDesc() {
  const { jobId } = useParams<{ jobId: string }>();

  const job = jobId ? jobDesc.find((j) => j.jobId === jobId) : undefined;

  if (!job) {
    return (
      <>
        <NavBar />

        <div className="w-full lg:px-40 sm:px-12 mx-auto">
          <section className="py-24">
            <div className="py-6">
              <Link
                to="/careers#open-roles"
                className="text-lg font-medium text-text-primary/70 hover:text-primary"
              >
                ← Back to open roles
              </Link>
            </div>
            <p className="text-lg md:text-xl mt-12 text-text-primary">
              Job not found.
            </p>
          </section>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title="Careers at Faster — Build the Future of Fair, Fast Credit | Faster.com.au"
        description="Explore this role at Faster and see how you’ll help grow a fintech platform focused on fair credit, strong technology, and customer outcomes."
      />

      <NavBar />

      <div className="w-full mx-auto">
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 pt-16 sm:pt-24 lg:max-w-6xl md:max-w-full mx-auto">
          <div className="py-6">
            <Link
              to="/careers#open-roles"
              className="text-lg font-medium text-text-primary/70 hover:text-primary"
            >
              ← Back to open roles
            </Link>
          </div>
          <header className="bg-bg-secondary rounded-2xl p-6 sm:p-12 lg:p-16 mb-12">
            <div className="mt-6 mb-8 sm:mt-8 sm:mb-12">
              <h1 className="my-6 md:my-8 text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary">
                {job.role}
              </h1>
              <div className="space-y-4 mt-8">
                <div className="flex flex-wrap gap-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 md:size-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                        clipRule="evenodd"
                      />
                      <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                    </svg>
                  </span>
                  <span className="inline-flex items-center text-xl md:text-2xl font-medium">
                    {job.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 md:size-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="inline-flex items-center text-xl md:text-2xl font-medium">
                    {job.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 lg:pt-4 pb-4 lg:pb-2">
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[8px] text-center py-4 px-7 btn-primary text-base md:text-lg font-medium"
              >
                Apply for this role
              </a>
            </div>
          </header>

          <section className="max-w-6xl mb-6 md:mb-12">{job.desc}</section>

          <div className="mt-16 mb-24">
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-[8px] text-center py-4 px-7 btn-primary text-lg md:text-xl font-medium"
            >
              Apply for this role
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

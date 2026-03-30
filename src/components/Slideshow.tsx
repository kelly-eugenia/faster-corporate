import { useState, useEffect, useRef } from "react";
import Pill from "./Pill";

const cards = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "3+",
    subtitle: "Years Operating",
    body: "Not a startup. A live, operating lender with a growing loan book and consistent collections history spanning 3+ years.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        <path
          fillRule="evenodd"
          d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
          clipRule="evenodd"
        />
        <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
      </svg>
    ),
    title: "$15M+",
    subtitle: "Total Capital Deployed",
    body: "Over $15 million lent to Australian consumers. Loan-level performance data available to qualified investors on request.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
        <path
          fillRule="evenodd"
          d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
          clipRule="evenodd"
        />
        <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
      </svg>
    ),
    title: "ACL",
    subtitle: " 569825 — Licensed",
    body: "Fully regulated under the National Consumer Credit Protection Act. Compliant with all responsible lending obligations.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "AU",
    subtitle: "Only",
    body: "100% Australian borrowers. No offshore exposure. All loans originated, serviced, and collected domestically.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="M16.5 7.5h-9v9h9v-9Z" />
        <path
          fillRule="evenodd"
          d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "AI",
    subtitle: "Credit Decisioning",
    body: "Automated credit assessment with bureau data and bank statement analysis — consistent, improving credit quality over time.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
        <path
          fillRule="evenodd"
          d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "DD",
    subtitle: "Direct Debit Collections",
    body: "Automated direct debit collections via institutional payment infrastructure — predictable, bankable cash flows.",
  },
];

export default function Slideshow() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(1);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number | null>(null);

  // Responsive visible cards
  useEffect(() => {
    const calculateVisible = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.offsetWidth;

      if (width >= 1024) setVisible(3);
      else if (width >= 640) setVisible(2);
      else setVisible(1);
    };

    calculateVisible();
    window.addEventListener("resize", calculateVisible);
    return () => window.removeEventListener("resize", calculateVisible);
  }, []);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => i + 1); // no artificial cap here

  // Swipe
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;

    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 40) next();
    else if (diff < -40) prev();

    startX.current = null;
  };

  // Core logic: precise translate with clamp
  const getTranslateX = () => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return 0;

    const firstCard = track.children[0] as HTMLElement;
    if (!firstCard) return 0;

    // dynamic gap
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");

    const cardWidth = firstCard.offsetWidth;

    const rawTranslate = idx * (cardWidth + gap);

    // clamp so last card is never cut
    const maxTranslate = track.scrollWidth - container.offsetWidth;

    return Math.max(0, Math.min(rawTranslate, maxTranslate));
  };

  return (
    <div className="xl:max-w-[1920px] mx-auto bg-gradient-to-tr from-primary to-secondary rounded-2xl py-12 lg:py-16 mt-12 lg:mt-16 mb-12">
      {/* Header */}
      <div className="text-center px-8 sm:px-16">
        {" "}
        <Pill text="Track record" color="bg-primary" />{" "}
        <h1 className="mt-8 lg:mt-12 my-6 md:my-8 text-4xl sm:text-5xl lg:text-6xl text-bg-primary">
          {" "}
          3+ years live. Verifiable history.{" "}
        </h1>{" "}
        <p className="font-medium text-lg md:text-xl mb-8 text-bg-primary">
          {" "}
          Faster is not a concept — it's a live, operating lender with a real
          book, real customers, and 3+ years of real collections history
          available to qualified investors.{" "}
        </p>{" "}
      </div>

      {/* Slider */}
      <div className="relative flex items-center px-4 sm:px-12 mt-12 mb-6">
        {/* Left */}
        <button
          onClick={prev}
          disabled={idx === 0}
          className="z-10 p-0 size-10 sm:size-12 rounded-full bg-bg-primary hover:bg-bg-secondary shadow mr-4 disabled:opacity-30"
        >
          ←
        </button>

        {/* Viewport */}
        <div
          ref={containerRef}
          className="overflow-hidden flex-1"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${getTranslateX()}px)`,
            }}
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="
                  basis-full 
                  sm:basis-1/2 
                  lg:basis-1/3 
                  shrink-0
                  rounded-2xl p-8 text-left flex flex-col 
                  bg-bg-primary
                "
              >
                <div className="bg-bg-secondary rounded-xl grid place-items-center h-12 w-12 mb-6 text-secondary">
                  {c.icon}
                </div>
                <div>
                  <h1 className="font-[800] text-primary text-5xl mb-1">
                    {c.title}
                  </h1>
                  <h3 className="font-medium text-text-primary text-2xl mb-4">
                    {c.subtitle}
                  </h3>

                  <p className="text-base md:text-lg text-muted-primary">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <button
          onClick={next}
          disabled={idx >= cards.length - visible}
          className="z-10 p-0 size-10 sm:size-12 rounded-full bg-bg-primary hover:bg-bg-secondary shadow ml-4 disabled:opacity-30"
        >
          →
        </button>
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";
import { useTrustpilotStats } from "../hooks/useTrustpilotStats";

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (el: HTMLElement | null, clear: boolean) => void;
    };
  }
}

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { rating, reviewCount } = useTrustpilotStats();

  useEffect(() => {
    // If the script has loaded, tell it to (re)render this widget
    if (window.Trustpilot && containerRef.current) {
      window.Trustpilot.loadFromElement(containerRef.current, true);
    }
  }, []);

  return (
    <>
      <h2
        className="mt-3 text-[clamp(24px,3vw,32px)] leading-[1.05] tracking-[-0.02em] font-bold text-text-primary"
        style={{ textWrap: "balance" } as React.CSSProperties}
      >
        Rated {rating.toFixed(1)} / 5 by {reviewCount.toLocaleString()}+
        Australian borrowers.
      </h2>
      <div
        ref={containerRef}
        className="trustpilot-widget mt-8"
        data-locale="en-US"
        data-template-id="54ad5defc6454f065c28af8b"
        data-businessunit-id="65b19266fd020b5cdce866e7"
        data-style-height="240px"
        data-style-width="100%"
        data-token="a19c9066-5a27-4aed-b43e-6129e09e819c"
        data-stars="4,5"
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
    </>
  );
}

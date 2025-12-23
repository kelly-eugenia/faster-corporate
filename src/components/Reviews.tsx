import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (el: HTMLElement | null, clear: boolean) => void;
    };
  }
}

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // If the script has loaded, tell it to (re)render this widget
    if (window.Trustpilot && containerRef.current) {
      window.Trustpilot.loadFromElement(containerRef.current, true);
    }
  }, []);

  return (
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
  );
}

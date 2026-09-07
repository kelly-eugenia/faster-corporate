import { useEffect, useState } from "react";
import { client } from "../lib/contentful";

interface TrustpilotStats {
  rating: number;
  reviewCount: number;
}

// Fallback used until Contentful returns a value (or if the entry is
// missing/unreachable) so the heading never breaks or goes blank.
const FALLBACK_STATS: TrustpilotStats = {
  rating: 2.1,
  reviewCount: 1000,
};

export function useTrustpilotStats() {
  const [stats, setStats] = useState<TrustpilotStats>(FALLBACK_STATS);

  useEffect(() => {
    client
      .getEntries({
        content_type: "trustpilotStats",
        limit: 1,
      })
      .then((res) => {
        const entry = res.items[0]?.fields as any;
        if (
          typeof entry?.rating === "number" &&
          typeof entry?.reviewCount === "number"
        ) {
          setStats({
            rating: entry.rating,
            reviewCount: entry.reviewCount,
          });
        }
      })
      .catch(() => {
        // Keep the fallback stats on any Contentful error.
      });
  }, []);

  return stats;
}

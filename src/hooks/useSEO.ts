import { useEffect, useState } from "react";
import { client } from "../lib/contentful";

interface SEOData {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
}

export function useSEO(slug: string) {
  const [seo, setSEO] = useState<SEOData | null>(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "pageSeo",
        "fields.slug": slug,
        "fields.site": "faster",
        limit: 1,
      })
      .then((res) => {
        const entry = res.items[0]?.fields as any;
        if (entry) {
          setSEO({
            title: entry.title,
            description: entry.description,
            ogTitle: entry.ogTitle,
            ogDescription: entry.ogDescription,
            canonicalUrl: entry.canonicalUrl,
          });
        }
      });
  }, [slug]);

  return seo;
}

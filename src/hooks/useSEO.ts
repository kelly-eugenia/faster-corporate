import { useEffect, useState } from "react";
import { client } from "../lib/contentful";

interface SEOData {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
}

// Session-lifetime cache so revisiting a page (e.g. navigating away from FAQ
// and back) doesn't refetch its pageSeo entry from Contentful every time.
const seoCache = new Map<string, SEOData>();

// Fields are Short Text in Contentful today, but this guards against that
// ever silently changing (a Rich Text field returns a nested document
// object, which would otherwise stringify to "[object Object]" in a meta
// tag with no visible symptom) and against stray whitespace-only values.
function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function toSeoData(fields: unknown): SEOData | null {
  if (typeof fields !== "object" || fields === null) return null;
  const record = fields as Record<string, unknown>;
  const title = asString(record.title);
  if (!title) return null;
  return {
    title,
    description: asString(record.description),
    ogTitle: asString(record.ogTitle),
    ogDescription: asString(record.ogDescription),
    canonicalUrl: asString(record.canonicalUrl),
  };
}

export function useSEO(slug: string) {
  // Bumped only to force a re-render once a fetch resolves and populates
  // seoCache — the returned value itself always reads straight from the
  // cache below, so it's correct even if `slug` changes on a live instance.
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    if (seoCache.has(slug)) return;

    let cancelled = false;

    client
      .getEntries({
        content_type: "pageSeo",
        "fields.slug": slug,
        "fields.site": "faster",
        limit: 1,
      })
      .then((res) => {
        if (cancelled) return;
        const data = toSeoData(res.items[0]?.fields);
        if (data) {
          seoCache.set(slug, data);
          forceUpdate((n) => n + 1);
        }
      })
      .catch((err) => {
        console.error("useSEO: Contentful fetch failed", err);
        // Nothing cached — callers fall back to their hardcoded defaults.
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return seoCache.get(slug) ?? null;
}

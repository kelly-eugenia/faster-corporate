import { useEffect } from "react";

type SeoProps = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
  /** When true, tells search engines not to index this page (e.g. soft-404s,
   * loading/empty states). Links are still followed. Defaults to indexable. */
  noindex?: boolean;
};

const BASE_URL = "https://faster.com.au";

// Reused whenever a page/CMS entry doesn't supply its own description,
// so we never write an empty description
const DEFAULT_DESCRIPTION =
  "Faster.com.au is your go-to fast, flexible Line-of-Credit in Australia";

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.querySelector(
    `meta[${attr}="${key}"]`,
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setCanonical(url: string) {
  let el = document.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = url;
}

export default function SEO({
  title,
  description,
  ogTitle,
  ogDescription,
  canonicalUrl,
  noindex = false,
}: SeoProps) {
  useEffect(() => {
    // Title
    document.title = title;

    const desc = description ?? DEFAULT_DESCRIPTION;
    setMeta("name", "description", desc);

    // Canonical — always set, falling back to the current URL (without
    // query string/hash, pinned to the real canonical domain rather than
    // whatever host the visitor arrived on) when the caller/CMS doesn't
    // supply one, so a canonical tag is never missing.
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    const canonical = canonicalUrl || `${BASE_URL}${path}`;
    setCanonical(canonical);

    // OG tags
    setMeta("property", "og:title", ogTitle ?? title);
    setMeta("property", "og:description", ogDescription ?? desc);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:site_name", "Faster");
    setMeta("property", "og:locale", "en_AU");

    // Twitter Card tags (image is left to the static fallback in index.html —
    // there's no per-page image source yet)
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", ogTitle ?? title);
    setMeta("name", "twitter:description", ogDescription ?? desc);

    // Robots
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
  }, [title, description, ogTitle, ogDescription, canonicalUrl, noindex]);

  return null;
}

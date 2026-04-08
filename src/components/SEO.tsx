import { useEffect } from "react";

type SeoProps = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
};

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    const [attrName, attrVal] = selector
      .replace("meta[", "")
      .replace("]", "")
      .split("=")
      .map((s) => s.replace(/"/g, ""));
    el.setAttribute(attrName, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
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
}: SeoProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    if (description)
      setMeta('meta[name="description"]', "content", description);

    // OG tags
    setMeta('meta[property="og:title"]', "content", ogTitle ?? title);
    setMeta(
      'meta[property="og:description"]',
      "content",
      ogDescription ?? description ?? "",
    );
    setMeta('meta[property="og:type"]', "content", "website");

    // Canonical
    if (canonicalUrl) setCanonical(canonicalUrl);
  }, [title, description, ogTitle, ogDescription, canonicalUrl]);

  return null;
}

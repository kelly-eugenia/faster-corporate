// Generates dist/sitemap.xml as a build step.
//
// Static marketing/legal routes are hardcoded below. Job posting URLs
// (/careers/:jobId) are dynamic — sourced live from Contentful's
// `careersJob` content type (see src/hooks/useJobs.ts) — so they're fetched
// here rather than hand-maintained, keeping the sitemap in sync with
// whatever roles are actually open at build time.
//
// Must run AFTER `vite build`
import { writeFileSync, existsSync, readFileSync, mkdirSync } from "node:fs";
import { createClient } from "contentful";

const SITE_URL = "https://faster.com.au";

const STATIC_ROUTES = [
  "/",
  "/how-it-works",
  "/about",
  "/fees",
  "/careers",
  "/coming-soon",
  "/faq",
  "/contact",
  "/calculator",
  "/terms-and-conditions",
  "/privacy-policy",
  "/refund-policy",
  "/credit-guide",
];
// Intentionally excluded: "/home" (redirects to "/") and the "*" catch-all
// (NotFound — noindex'd, not a real canonical URL).

// Minimal .env loader for local/dev runs. On hosts where env vars are
// injected directly into the build process, .env won't exist and this is a
// no-op — Vite's own build step already relies on the same behaviour.
function loadDotEnv(path = ".env") {
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*?)\s*$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    if (process.env[key] !== undefined) continue;
    process.env[key] = rawValue.replace(/^(['"])(.*)\1$/, "$2");
  }
}
loadDotEnv();

// <loc> is XML character data, so a bare & or < is a fatal parse error and
// Search Console rejects the entire file — not just the offending entry.
// jobId is constrained at the Contentful end, but this function is generic
// over whatever paths it's handed, so the guard lives here rather than
// relying on every future caller being safe.
function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function getOpenJobUrls() {
  const space = process.env.VITE_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.VITE_CONTENTFUL_ACCESS_TOKEN;
  if (!space || !accessToken) {
    console.warn(
      "[sitemap] Missing Contentful credentials — skipping job postings.",
    );
    return [];
  }

  try {
    const client = createClient({ space, accessToken });
    const res = await client.getEntries({
      content_type: "careersJob",
      "fields.status": "open",
      // Contentful defaults to 100 and truncates silently past that.
      limit: 1000,
      // Only the fields this script actually needs.
      select: ["fields.jobId", "sys.updatedAt"],
    });

    // Mirror useJobs.ts's validation: only trust a genuine, non-empty
    // string jobId (Contentful could in principle hand back any shape).
    return res.items
      .map((item) => ({
        jobId:
          typeof item.fields?.jobId === "string"
            ? item.fields.jobId.trim()
            : "",
        updatedAt: item.sys?.updatedAt,
      }))
      .filter(({ jobId }) => jobId.length > 0)
      .map(({ jobId, updatedAt }) => ({
        path: `/careers/${jobId}`,
        // Real modification date, so lastmod is worth something. Google
        // discounts the signal entirely when it doesn't track real changes.
        lastmod: updatedAt ? updatedAt.slice(0, 10) : undefined,
      }));
  } catch (err) {
    console.warn(
      "[sitemap] Failed to fetch jobs from Contentful — skipping job postings.",
      err,
    );
    return [];
  }
}

function buildXml(entries) {
  const urls = entries
    .map(({ path, lastmod }) => {
      const loc = `    <loc>${escapeXml(SITE_URL + path)}</loc>`;
      // Static routes carry no lastmod: an absent value is better than one
      // that's stamped with the build date and therefore meaningless.
      const mod = lastmod
        ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>`
        : "";
      return `  <url>\n${loc}${mod}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

const jobUrls = await getOpenJobUrls();
const entries = [...STATIC_ROUTES.map((path) => ({ path })), ...jobUrls];

mkdirSync("dist", { recursive: true });
writeFileSync("dist/sitemap.xml", buildXml(entries));
console.log(
  `[sitemap] Wrote dist/sitemap.xml with ${entries.length} URLs ` +
    `(${STATIC_ROUTES.length} static, ${jobUrls.length} job postings).`,
);

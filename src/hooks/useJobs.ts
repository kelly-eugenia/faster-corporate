import { useEffect, useState } from "react";
import { client } from "../lib/contentful";

export interface Job {
  jobId: string;
  role: string;
  type: string;
  location: string;
  applyUrl: string;
  roleDescription: string;
  qualifications: string[];
  status: "open" | "closed";
  /** ISO timestamp the entry was created — used for JobPosting structured data. */
  postedAt: string;
}

// All of these are Short/Long Text fields in Contentful today, so the SDK
// already hands back plain strings — but nothing here is type-checked at
// compile time (fields/sys arrive as `any`), so a future field-type change,
// a missing field, or a stray non-string entry in `qualifications` would
// otherwise pass straight through. The last one isn't just a silent
// meta-tag issue like in useSEO — rendering a non-string qualification as a
// React child (JobDesc.tsx's `<li>{q}</li>`) would throw and take down the
// whole page.
function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((v): v is string => typeof v === "string")
    : [];
}

function toJob(fields: unknown, sys?: unknown): Job | null {
  if (typeof fields !== "object" || fields === null) return null;
  const record = fields as Record<string, unknown>;

  const jobId = asString(record.jobId);
  const role = asString(record.role);
  if (!jobId || !role) return null;

  const createdAt =
    typeof sys === "object" && sys !== null
      ? asString((sys as Record<string, unknown>).createdAt)
      : undefined;

  return {
    jobId,
    role,
    type: asString(record.type) ?? "",
    location: asString(record.location) ?? "",
    applyUrl: asString(record.applyUrl) ?? "",
    roleDescription: asString(record.roleDescription) ?? "",
    qualifications: asStringArray(record.qualifications),
    status: record.status === "closed" ? "closed" : "open",
    postedAt: createdAt ?? new Date().toISOString(),
  };
}

// All open roles, for the /careers list. Most recently posted first.
export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({
        content_type: "careersJob",
        "fields.status": "open",
        order: ["-sys.createdAt"],
      })
      .then((res) => {
        setJobs(
          res.items
            .map((item) => toJob(item.fields, item.sys))
            .filter(Boolean) as Job[],
        );
      })
      .catch(() => {
        // Keep jobs empty on any Contentful error rather than throwing.
        setJobs([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return { jobs, loading };
}

// A single role, for the /careers/:jobId detail page.
export function useJob(jobId: string) {
  const [job, setJob] = useState<Job | null>(null);
  // Lazy-initialized from the first render's jobId, so the "no jobId"
  // case never needs a synchronous setState inside the effect below.
  const [loading, setLoading] = useState(() => !!jobId);

  useEffect(() => {
    if (!jobId) return;

    client
      .getEntries({
        content_type: "careersJob",
        "fields.jobId": jobId,
        "fields.status": "open",
        limit: 1,
      })
      .then((res) => {
        setJob(toJob(res.items[0]?.fields, res.items[0]?.sys));
      })
      .catch(() => {
        setJob(null);
      })
      .finally(() => setLoading(false));
  }, [jobId]);

  return { job, loading };
}

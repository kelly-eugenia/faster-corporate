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
}

function toJob(fields: any): Job | null {
  if (!fields?.jobId || !fields?.role) return null;
  return {
    jobId: fields.jobId,
    role: fields.role,
    type: fields.type ?? "",
    location: fields.location ?? "",
    applyUrl: fields.applyUrl ?? "",
    roleDescription: fields.roleDescription ?? "",
    qualifications: Array.isArray(fields.qualifications)
      ? fields.qualifications
      : [],
    status: fields.status ?? "open",
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
          res.items.map((item) => toJob(item.fields)).filter(Boolean) as Job[],
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
        setJob(toJob(res.items[0]?.fields));
      })
      .catch(() => {
        setJob(null);
      })
      .finally(() => setLoading(false));
  }, [jobId]);

  return { job, loading };
}

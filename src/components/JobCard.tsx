type JobCardProps = {
  jobId: string;
  role: string;
  type: string;
  location: string;
  applyUrl: string;
};

export default function JobCard({
  jobId,
  role,
  type,
  location,
  applyUrl,
}: JobCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-secondary/20 bg-bg-primary p-8 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <a
          href={`/careers/${jobId}`}
          className="text-3xl font-semibold text-text-primary underline hover:text-primary"
        >
          {role}
        </a>
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="inline-flex items-center rounded-full bg-bg-secondary px-3 py-1 font-medium">
            {type}
          </span>
          <span className="inline-flex items-center font-medium">
            {location}
          </span>
        </div>
      </div>

      <button className="btn-primary">
        <a
          href={applyUrl}
          target="_blank"
          rel="noreferrer"
          className="text-bg-primary font-medium px-2"
        >
          Apply
        </a>
      </button>
    </div>
  );
}

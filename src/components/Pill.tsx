type PillVariant = "default" | "white" | "light";

interface PillProps {
  text: string;
  variant?: PillVariant;
  className?: string;
}

const variantClasses: Record<PillVariant, string> = {
  default: "text-primary bg-primary-light/5 border border-border-subtle",
  white: "text-primary-dark bg-bg-primary/70 border border-border-default",
  light: "bg-white/[0.08] border border-white/[0.16] text-white",
};

const iconClasses: Record<PillVariant, string> = {
  default: "text-primary",
  white: "text-primary",
  light: "text-primary-light",
};

export default function Pill({ text, variant = "default", className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[13px] font-medium tracking-[0.01em] ${variantClasses[variant]} ${className}`}
    >
      <span
        className={`inline-flex items-center justify-center rounded-full flex-shrink-0 ${iconClasses[variant]}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-[14px]"
        >
          <path
            fillRule="evenodd"
            d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      {text}
    </span>
  );
}

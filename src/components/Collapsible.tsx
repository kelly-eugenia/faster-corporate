import { useState, type ReactNode } from "react";

type CollapsibleItemProps = {
  header: string;
  text: ReactNode;
  icon: ReactNode;
};

export default function Collapsible({
  header,
  text,
  icon,
}: CollapsibleItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="self-start w-full rounded-3xl bg-bg-secondary hover:bg-primary/20 px-10 py-2">
      {/* Header row */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center gap-6 px-2 text-left"
      >
        {/* Icon */}
        <span className="flex h-9 w-9 items-center justify-center text-4xl font-bold text-primary">
          {icon}
        </span>

        <span className="text-2xl font-semibold text-text-primary md:text-3xl">
          {header}
        </span>
      </button>

      {/* Body */}
      <div
        className={`mt-3 overflow-hidden text-text-primary transition-all duration-300 ${
          open ? "opacity-100 mb-8" : "max-h-0 opacity-0 mb-0"
        }`}
      >
        <div className="text-xl leading-relaxed">{text}</div>
      </div>
    </div>
  );
}

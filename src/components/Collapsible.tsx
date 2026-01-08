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
    <div className="self-start w-full rounded-3xl bg-bg-secondary hover:bg-primary/20 px-6 py-0 md:px-8 lg:px-10 md:py-2">
      {/* Header row */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full place-content-start items-center gap-6 px-2 text-left"
      >
        {/* Icon */}
        <span className="flex size-8 md:size-9 items-center justify-center font-bold text-primary">
          {icon}
        </span>

        <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-primary">
          {header}
        </span>
      </button>

      {/* Body */}
      <div
        className={`mt-3 overflow-hidden text-text-primary transition-all duration-300 ${
          open ? "-mt-2 opacity-100 mb-8" : "max-h-0 opacity-0 mb-0"
        }`}
      >
        <div className="text-base md:text-lg lg:text-xl leading-relaxed">
          {text}
        </div>
      </div>
    </div>
  );
}

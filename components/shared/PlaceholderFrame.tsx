import { cn } from "@/lib/utils";

type PlaceholderFrameProps = {
  label?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4" | "21/9" | "screen";
  className?: string;
};

const ratioClass: Record<NonNullable<PlaceholderFrameProps["aspectRatio"]>, string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "21/9": "aspect-[21/9]",
  screen: "h-[60vh] sm:h-[75vh] lg:h-[85vh]",
};

export function PlaceholderFrame({
  label = "Image coming soon",
  aspectRatio = "16/9",
  className,
}: PlaceholderFrameProps) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-sm border border-line bg-paper-alt",
        ratioClass[aspectRatio],
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-line) 0, var(--color-line) 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />
      <span className="relative z-10 rounded-full border border-line bg-paper px-3 py-1 font-body text-xs uppercase tracking-wide text-ink-soft">
        {label}
      </span>
    </div>
  );
}

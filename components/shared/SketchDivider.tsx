import { cn } from "@/lib/utils";

/** A loose, hand-drawn horizontal rule — a doodled break between sections. */
export function SketchDivider({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      <svg
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        className="h-4 w-full text-line"
        aria-hidden="true"
      >
        <path
          d="M2 14 C 150 4, 260 20, 400 12 S 620 2, 760 14 S 980 22, 1120 8 S 1198 12, 1198 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

import { cn } from "@/lib/utils";

/** A straight, full-viewport-width rule marking a break between page sections. */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <hr
      className={cn(
        "relative left-1/2 w-screen -translate-x-1/2 border-0 border-t border-line",
        className,
      )}
    />
  );
}

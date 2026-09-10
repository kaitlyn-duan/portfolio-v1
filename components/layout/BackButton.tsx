import Link from "next/link";
import { cn } from "@/lib/utils";

export function BackButton({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Back to home"
      className={cn(
        "flex shrink-0 items-center justify-center bg-ink text-paper transition-colors hover:bg-accent-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-electric",
        className,
      )}
    >
      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
        <path
          d="M10 3L5 8l5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

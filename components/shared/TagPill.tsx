import { cn } from "@/lib/utils";

type TagPillProps = {
  children: React.ReactNode;
  className?: string;
};

export function TagPill({ children, className }: TagPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-paper px-2.5 py-1 font-mono text-xs uppercase tracking-wide text-ink-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}

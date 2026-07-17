import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {eyebrow ? (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-electric">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl uppercase tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

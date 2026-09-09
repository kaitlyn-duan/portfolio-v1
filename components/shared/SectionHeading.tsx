import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  icon?: React.ReactNode;
  className?: string;
};

export function SectionHeading({ eyebrow, title, icon, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {eyebrow ? (
        <span className="font-body text-sm italic tracking-normal text-accent-electric">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="flex items-center gap-3 font-display text-4xl uppercase tracking-tight text-ink sm:text-5xl">
        {icon}
        {title}
      </h2>
    </div>
  );
}

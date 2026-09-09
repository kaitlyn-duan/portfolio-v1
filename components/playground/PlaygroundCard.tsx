import { ScrollReveal } from "@/components/shared/ScrollReveal";

type PlaygroundCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function PlaygroundCard({ title, description, children }: PlaygroundCardProps) {
  return (
    <ScrollReveal>
      <div className="flex flex-col gap-6 border-t border-line pt-10">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-3xl uppercase tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="text-ink-soft">{description}</p>
        </div>
        {children}
      </div>
    </ScrollReveal>
  );
}

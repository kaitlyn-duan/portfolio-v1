import { SectionHeading } from "@/components/shared/SectionHeading";

export function PlaygroundIntro() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading eyebrow="Experiments" title="Playground" />
      <p className="text-ink-soft">
        small things i&rsquo;ve worked on in my free time :)
      </p>
    </div>
  );
}

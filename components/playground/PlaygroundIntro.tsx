import { SectionHeading } from "@/components/shared/SectionHeading";

export function PlaygroundIntro() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading eyebrow="Experiments" title="Playground" />
      <p className="max-w-xl text-ink-soft">
        A few small, self-contained experiments — no APIs, just code — exploring where hand-made
        marks and generative logic start to blur.
      </p>
    </div>
  );
}

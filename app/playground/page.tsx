import type { Metadata } from "next";
import { PlaygroundIntro } from "@/components/playground/PlaygroundIntro";
import { PlaygroundCard } from "@/components/playground/PlaygroundCard";
import { InkAndStatic } from "@/components/playground/experiments/InkAndStatic";
import { SketchSnapGrid } from "@/components/playground/experiments/SketchSnapGrid";
import { TaglineMachine } from "@/components/playground/experiments/TaglineMachine";

export const metadata: Metadata = {
  title: "Playground — Kaitlyn Duan",
};

export default function PlaygroundPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 py-16 sm:py-24">
      <PlaygroundIntro />

      <PlaygroundCard
        title="Ink & Static"
        description="Every stroke you draw spawns a jittered digital echo — hand-drawn and machine-generated marks, layered together."
      >
        <InkAndStatic />
      </PlaygroundCard>

      <PlaygroundCard
        title="Sketch / Snap Grid"
        description="Hover a cell to watch a hand-drawn squiggle snap into a crisp geometric shape."
      >
        <SketchSnapGrid />
      </PlaygroundCard>

      <PlaygroundCard
        title="Tagline Machine"
        description="A local word bank reshuffled into new stacked taglines — mimicking AI-generated copy, entirely client-side."
      >
        <TaglineMachine />
      </PlaygroundCard>
    </div>
  );
}

import type { Metadata } from "next";
import { PlaygroundIntro } from "@/components/playground/PlaygroundIntro";
import { PlaygroundCard } from "@/components/playground/PlaygroundCard";
import { InkAndStatic } from "@/components/playground/experiments/InkAndStatic";

export const metadata: Metadata = {
  title: "Playground — Kaitlyn Duan",
};

export default function PlaygroundPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 pb-16 pt-8 sm:pb-24 sm:pt-10">
      <PlaygroundIntro />

      <PlaygroundCard
        title="Ink & Static"
        description="Draw anything. A second line follows yours around, never quite landing where you put it."
      >
        <InkAndStatic />
      </PlaygroundCard>
    </div>
  );
}

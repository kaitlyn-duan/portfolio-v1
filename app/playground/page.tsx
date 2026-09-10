import type { Metadata } from "next";
import { PlaygroundIntro } from "@/components/playground/PlaygroundIntro";
import { PlaygroundCard } from "@/components/playground/PlaygroundCard";
import { InkAndStatic } from "@/components/playground/experiments/InkAndStatic";
import { DrawingGallery } from "@/components/playground/DrawingGallery";
import { drawings, logoDrawings, officialWork } from "@/lib/data/drawings";

export const metadata: Metadata = {
  title: "Playground — Kaitlyn Duan",
};

export default function PlaygroundPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-16 pt-8 sm:pb-24 sm:pt-10">
      <PlaygroundIntro />

      <PlaygroundCard
        title="Official Work"
        description="Pieces I worked on for Warframe at Digital Extremes. Click one for a closer look."
      >
        <DrawingGallery drawings={officialWork} />
      </PlaygroundCard>

      <PlaygroundCard
        title="Digital Drawings"
        description="Some of my digital art. Click a piece for a closer look."
      >
        <DrawingGallery drawings={drawings} />
      </PlaygroundCard>

      <PlaygroundCard
        title="Logo Drawings"
        description="Some of my logo work. Click a piece for a closer look."
      >
        <DrawingGallery drawings={logoDrawings} />
      </PlaygroundCard>

      <PlaygroundCard
        title="Draw Something"
        description="Draw anything on the canvas. A second line follows along with yours."
      >
        <InkAndStatic />
      </PlaygroundCard>
    </div>
  );
}

import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Timeline } from "@/components/about/Timeline";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { FounderStorySection } from "@/components/about/FounderStorySection";

export const metadata: Metadata = {
  title: "About — Kaitlyn Duan",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-20 px-6 py-16 sm:py-24">
      <AboutHero />
      <Timeline />
      <SkillsGrid />
      <FounderStorySection />
    </div>
  );
}

import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { FounderStorySection } from "@/components/about/FounderStorySection";
import { AboutOutro } from "@/components/about/AboutOutro";

export const metadata: Metadata = {
  title: "About — Kaitlyn Duan",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-20 px-6 pb-16 pt-8 sm:pb-24 sm:pt-10">
      <AboutHero />
      <AboutStory />
      <SkillsGrid />
      <FounderStorySection />
      <AboutOutro />
    </div>
  );
}

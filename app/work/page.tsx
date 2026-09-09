import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Work — Kaitlyn Duan",
};

export default function WorkPage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-8 sm:pb-24 sm:pt-10">
      <ScrollReveal>
        <SectionHeading eyebrow="Selected Work" title="All Projects" />
      </ScrollReveal>
      <ProjectGrid projects={projects} />
    </section>
  );
}

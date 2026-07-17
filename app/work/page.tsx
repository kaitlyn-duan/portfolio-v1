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
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:py-24">
      <ScrollReveal>
        <SectionHeading eyebrow="Selected Work" title="All Projects" />
      </ScrollReveal>
      <ProjectGrid projects={projects} />
    </section>
  );
}

import type { Project } from "@/lib/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const variantClassName = {
  grid: "grid grid-cols-1 gap-12 sm:grid-cols-2",
  stacked: "flex flex-col gap-16",
} as const;

export function ProjectGrid({
  projects,
  variant = "grid",
}: {
  projects: Project[];
  variant?: keyof typeof variantClassName;
}) {
  return (
    <ScrollReveal className={variantClassName[variant]}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </ScrollReveal>
  );
}

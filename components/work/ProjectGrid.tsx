import type { Project } from "@/lib/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
      {projects.map((project, i) => (
        <ScrollReveal key={project.slug} delay={i * 0.05}>
          <ProjectCard project={project} />
        </ScrollReveal>
      ))}
    </div>
  );
}

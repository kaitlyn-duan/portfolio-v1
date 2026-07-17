import type { Project } from "@/lib/data/projects";
import { PlaceholderFrame } from "@/components/shared/PlaceholderFrame";
import { TagPill } from "@/components/shared/TagPill";
import { MetricStat } from "@/components/work/case-study/MetricStat";

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <header className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-electric">
          {project.company}
        </span>
        <h1 className="font-display text-4xl uppercase leading-none tracking-tight text-ink sm:text-6xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-lg text-ink-soft">{project.oneLiner}</p>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          <TagPill>Role — {project.role}</TagPill>
          <TagPill>{project.duration}</TagPill>
          <TagPill>{project.season}</TagPill>
          {project.tags.map((tag) => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>
      </div>

      <PlaceholderFrame label={project.title} aspectRatio={project.heroAspectRatio} />

      <div className="flex flex-wrap gap-8 border-y border-line py-6">
        {project.metrics.map((metric) => (
          <MetricStat key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </div>
    </header>
  );
}

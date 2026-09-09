import type { Project } from "@/lib/data/projects";
import { PlaceholderFrame } from "@/components/shared/PlaceholderFrame";
import { FullBleed } from "@/components/shared/FullBleed";
import { MetricStat } from "@/components/work/case-study/MetricStat";
import { CaseStudyHero } from "@/components/work/case-study/CaseStudyHero";

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <header className="flex flex-col gap-10">
      <FullBleed>
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16">
          <CaseStudyHero
            title={project.title}
            timeframe={project.season}
            role={project.role}
            duration={project.duration}
            teamSize={project.teamSize}
            description={project.oneLiner}
          />
        </div>
      </FullBleed>

      <PlaceholderFrame label={project.title} aspectRatio={project.heroAspectRatio} />

      {project.metrics.length > 0 && (
        <div className="flex flex-wrap gap-8 border-y border-line py-6">
          {project.metrics.map((metric) => (
            <MetricStat key={metric.label} label={metric.label} value={metric.value} />
          ))}
        </div>
      )}
    </header>
  );
}

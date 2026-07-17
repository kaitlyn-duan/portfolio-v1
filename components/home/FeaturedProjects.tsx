import Link from "next/link";
import { featuredProjects } from "@/lib/data/projects";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function FeaturedProjects() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20">
      <ScrollReveal>
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Selected Work" title="Featured Projects" />
          <Link
            href="/work"
            className="font-mono text-sm uppercase tracking-wide text-ink-soft transition-colors hover:text-accent-electric"
          >
            See All
          </Link>
        </div>
      </ScrollReveal>

      <ProjectGrid projects={featuredProjects} />
    </section>
  );
}

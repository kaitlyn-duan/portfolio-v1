import Link from "next/link";
import type { Project } from "@/lib/data/projects";

export function NextProjectLink({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col gap-2 border-t border-line py-10"
    >
      <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
        Next Project
      </span>
      <span className="font-display text-3xl uppercase tracking-tight text-ink transition-colors group-hover:text-accent-electric sm:text-5xl">
        {project.title} →
      </span>
    </Link>
  );
}

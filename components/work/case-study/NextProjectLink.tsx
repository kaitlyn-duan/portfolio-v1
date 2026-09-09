import Link from "next/link";
import type { Project } from "@/lib/data/projects";

type NextProjectLinkProps = {
  project?: Project;
  href?: string;
  label?: string;
  eyebrow?: string;
};

export function NextProjectLink({ project, href, label, eyebrow }: NextProjectLinkProps) {
  const resolvedHref = href ?? (project ? `/work/${project.slug}` : "/");
  const resolvedLabel = label ?? project?.title ?? "Home";
  const resolvedEyebrow = eyebrow ?? (project ? "Next Project" : "Back to");

  return (
    <Link
      href={resolvedHref}
      className="group flex flex-col gap-2 border-t border-line py-10"
    >
      <span className="font-body text-sm italic tracking-normal text-ink-soft">
        {resolvedEyebrow}
      </span>
      <span className="font-display text-3xl uppercase tracking-tight text-ink transition-colors group-hover:text-accent-electric sm:text-5xl">
        {resolvedLabel} →
      </span>
    </Link>
  );
}

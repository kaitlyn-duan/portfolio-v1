import Link from "next/link";
import { featuredProjects } from "@/lib/data/projects";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";

const workIcon = (
  <svg
    viewBox="0 0 190 191"
    fill="none"
    aria-hidden="true"
    className="h-8 w-8 shrink-0 text-ink sm:h-9 sm:w-9"
  >
    <rect x="16" y="5" width="169" height="181" rx="35" stroke="currentColor" strokeWidth="10" />
    <rect x="16" y="5" width="139" height="181" rx="35" stroke="currentColor" strokeWidth="10" />
    <circle cx="58.5" cy="54.5" r="7.5" fill="currentColor" />
    <circle cx="58.5" cy="93.5" r="7.5" fill="currentColor" />
    <circle cx="58.5" cy="132.5" r="7.5" fill="currentColor" />
    <rect x="79" y="49" width="55" height="11" rx="5.5" fill="currentColor" />
    <rect x="79" y="88" width="55" height="11" rx="5.5" fill="currentColor" />
    <rect x="79" y="127" width="55" height="11" rx="5.5" fill="currentColor" />
    <rect y="47" width="31" height="15" rx="7.5" fill="currentColor" />
    <rect y="123" width="31" height="15" rx="7.5" fill="currentColor" />
  </svg>
);

export function FeaturedProjects() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 sm:py-28">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading eyebrow="Selected Work" title="Featured Projects" icon={workIcon} />
        <Link
          href="/work"
          className="font-body text-sm uppercase tracking-wide text-ink-soft transition-colors hover:text-accent-electric"
        >
          See All
        </Link>
      </div>

      <ProjectGrid projects={featuredProjects} variant="stacked" />
    </section>
  );
}

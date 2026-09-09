"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/data/projects";
import { PlaceholderFrame } from "@/components/shared/PlaceholderFrame";
import { TagPill } from "@/components/shared/TagPill";
import { cn } from "@/lib/utils";

const aspectRatioStyle: Record<Project["heroAspectRatio"], string> = {
  "16/9": "16/9",
  "4/3": "4/3",
  "1/1": "1/1",
  "3/4": "3/4",
};

export function ProjectCard({ project }: { project: Project }) {
  const thumbnail = project.thumbnail ? (
    <div
      className={cn(
        "relative mb-4 w-full overflow-hidden rounded-sm border border-line",
        !project.comingSoon && "transition-colors group-hover:border-accent-electric",
      )}
      style={{ aspectRatio: aspectRatioStyle[project.heroAspectRatio] }}
    >
      <img
        src={project.thumbnail}
        alt={project.comingSoon ? "" : project.title}
        // Scaled up so the blur does not feather the image away from its frame.
        className={cn("h-full w-full object-cover", project.comingSoon && "scale-110 blur-md")}
      />
      {project.comingSoon ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <TagPill>Coming Soon</TagPill>
        </div>
      ) : null}
    </div>
  ) : (
    <PlaceholderFrame
      label={project.title}
      aspectRatio={project.heroAspectRatio}
      className={cn(
        "mb-4",
        !project.comingSoon && "transition-colors group-hover:border-accent-electric",
      )}
    />
  );

  const details = (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-display text-2xl uppercase tracking-tight text-ink">
          {project.title}
        </h3>
      </div>
      <p className="text-sm text-ink-soft">{project.oneLiner}</p>
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <TagPill>Role &mdash; {project.role}</TagPill>
        <TagPill>{project.duration}</TagPill>
        <TagPill>{project.season}</TagPill>
        {project.tags.map((tag) => (
          <TagPill key={tag}>{tag}</TagPill>
        ))}
      </div>
    </div>
  );

  // Nothing to link to yet, so the card stays inert: no lift, no hover accent.
  if (project.comingSoon) {
    return (
      <div className="block">
        {thumbnail}
        {details}
      </div>
    );
  }

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <motion.div whileHover={{ y: -6, rotate: -0.5 }} transition={{ duration: 0.3 }}>
        {thumbnail}
        {details}
      </motion.div>
    </Link>
  );
}

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/data/projects";
import { PlaceholderFrame } from "@/components/shared/PlaceholderFrame";
import { TagPill } from "@/components/shared/TagPill";

const aspectRatioStyle: Record<Project["heroAspectRatio"], string> = {
  "16/9": "16/9",
  "4/3": "4/3",
  "1/1": "1/1",
  "3/4": "3/4",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <motion.div whileHover={{ y: -6, rotate: -0.5 }} transition={{ duration: 0.3 }}>
        {project.thumbnail ? (
          <div
            className="relative mb-4 w-full overflow-hidden rounded-sm border border-line transition-colors group-hover:border-accent-electric"
            style={{ aspectRatio: aspectRatioStyle[project.heroAspectRatio] }}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <PlaceholderFrame
            label={project.title}
            aspectRatio={project.heroAspectRatio}
            className="mb-4 transition-colors group-hover:border-accent-electric"
          />
        )}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-display text-2xl uppercase tracking-tight text-ink">
              {project.title}
            </h3>
          </div>
          <p className="text-sm text-ink-soft">{project.oneLiner}</p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <TagPill>Role — {project.role}</TagPill>
            <TagPill>{project.duration}</TagPill>
            <TagPill>{project.season}</TagPill>
            {project.tags.map((tag) => (
              <TagPill key={tag}>{tag}</TagPill>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

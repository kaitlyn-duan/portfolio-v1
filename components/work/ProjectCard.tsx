"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/data/projects";
import { PlaceholderFrame } from "@/components/shared/PlaceholderFrame";
import { TagPill } from "@/components/shared/TagPill";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <motion.div whileHover={{ y: -6, rotate: -0.5 }} transition={{ duration: 0.3 }}>
        <PlaceholderFrame
          label={project.title}
          aspectRatio={project.heroAspectRatio}
          className="mb-4 transition-colors group-hover:border-accent-electric"
        />
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
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

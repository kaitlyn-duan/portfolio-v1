import Link from "next/link";
import { experience } from "@/lib/data/experience";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { TagPill } from "@/components/shared/TagPill";

export function RecentExperienceList() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-10 sm:pb-28 sm:pt-12">
      <ScrollReveal>
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Timeline" title="Recent Experience" />
          <Link
            href="/about"
            className="font-body text-sm uppercase tracking-wide text-ink-soft transition-colors hover:text-accent-electric"
          >
            See All
          </Link>
        </div>
      </ScrollReveal>

      <div className="flex flex-col divide-y divide-line border-y border-line">
        {experience.map((entry, i) => (
          <ScrollReveal key={`${entry.company}-${entry.role}`} delay={i * 0.05}>
            <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-1">
                <p className="font-display text-xl uppercase tracking-tight text-ink">
                  {entry.role}
                </p>
                <p className="font-body text-sm italic tracking-normal text-ink-soft">
                  @ {entry.company}
                </p>
              </div>
              <TagPill>{entry.timeframe}</TagPill>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

import { experience } from "@/lib/data/experience";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { TagPill } from "@/components/shared/TagPill";

export function Timeline() {
  return (
    <section className="flex flex-col gap-10">
      <ScrollReveal>
        <SectionHeading eyebrow="Experience" title="Timeline" />
      </ScrollReveal>

      <div className="flex flex-col gap-12">
        {experience.map((entry, i) => (
          <ScrollReveal key={`${entry.company}-${entry.role}`} delay={i * 0.05}>
            <div className="flex flex-col gap-4 border-t border-line pt-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-display text-2xl uppercase tracking-tight text-ink">
                    {entry.role}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                    @ {entry.company}
                  </p>
                </div>
                <TagPill>{entry.timeframe}</TagPill>
              </div>
              <ul className="flex flex-col gap-2">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-ink-soft">
                    <span className="text-accent-electric">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

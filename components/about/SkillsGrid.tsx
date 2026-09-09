import { skills } from "@/lib/data/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { TagPill } from "@/components/shared/TagPill";

const columns = [
  { label: "Tools", items: skills.tools },
  { label: "Technologies", items: skills.technologies },
  { label: "Design", items: skills.design },
];

export function SkillsGrid() {
  return (
    <section className="flex flex-col gap-10">
      <ScrollReveal>
        <SectionHeading eyebrow="Toolkit" title="Skills" />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        {columns.map((column, i) => (
          <ScrollReveal key={column.label} delay={i * 0.05}>
            <div className="flex flex-col gap-4">
              <h3 className="font-body text-sm italic tracking-normal text-ink-soft">
                {column.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {column.items.map((item) => (
                  <TagPill key={item}>{item}</TagPill>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

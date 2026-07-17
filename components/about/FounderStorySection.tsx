import { experience } from "@/lib/data/experience";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { TapeSticker } from "@/components/shared/TapeSticker";
import { MetricStat } from "@/components/work/case-study/MetricStat";

const highlights = [
  { label: "ARR", value: "$6,000/mo" },
  { label: "Organic Search", value: "+60%" },
  { label: "Followers", value: "+500%" },
];

export function FounderStorySection() {
  const founderEntry = experience.find((entry) => entry.type === "founder");
  if (!founderEntry) return null;

  return (
    <section className="flex flex-col gap-8 border-t border-line pt-16">
      <ScrollReveal>
        <div className="flex flex-col items-start gap-6">
          <TapeSticker rotate={-2}>side quest: {founderEntry.company}</TapeSticker>
          <h2 className="max-w-2xl font-display text-3xl uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            Outside the internships, I built a business from scratch.
          </h2>
          <p className="max-w-2xl text-ink-soft">
            A self-developed storefront for custom prints, grown through a direct feedback
            community and data-driven marketing rather than ad spend.
          </p>
          <div className="flex flex-wrap gap-8 border-y border-line py-6">
            {highlights.map((metric) => (
              <MetricStat key={metric.label} label={metric.label} value={metric.value} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

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
          <h2 className="max-w-3xl font-display text-3xl uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            The art account grew up and got a storefront.
          </h2>
          <p className="max-w-3xl text-ink-soft">
            @awowogei_arts started as somewhere to put the drawings. It became a self-built shop
            for custom prints, grown through a Discord community I actually talk to and search
            data I actually read, rather than ad spend.
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

import { site } from "@/lib/data/site";
import { education } from "@/lib/data/experience";
import { PlaceholderFrame } from "@/components/shared/PlaceholderFrame";

export function AboutHero() {
  return (
    <section className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex max-w-xl flex-col gap-6">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-electric">
          About
        </span>
        <h1 className="font-display text-5xl uppercase leading-none tracking-tight text-ink sm:text-6xl">
          {site.name}
        </h1>
        <p className="text-lg text-ink-soft">
          A {site.role.toLowerCase()} studying at {education.school} — {education.program}.{" "}
          {education.detail}
        </p>
        <p className="font-handwritten text-2xl text-accent-red">
          &hellip;{site.tagline.toLowerCase()}&hellip;
        </p>
      </div>

      <PlaceholderFrame label="Portrait" aspectRatio="3/4" className="w-full max-w-xs" />
    </section>
  );
}

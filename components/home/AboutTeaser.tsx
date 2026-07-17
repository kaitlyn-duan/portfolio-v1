import Link from "next/link";
import { education } from "@/lib/data/experience";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { TapeSticker } from "@/components/shared/TapeSticker";

export function AboutTeaser() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-20">
      <ScrollReveal>
        <div className="flex flex-col gap-6 border-t border-line pt-12 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-2xl font-display text-3xl uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            A Product Designer studying statistics at {education.school}, minoring in economics —
            trying to design with data, not just around it.
          </p>
          <div className="flex flex-col items-start gap-4">
            <TapeSticker rotate={3}>{education.program}</TapeSticker>
            <Link
              href="/about"
              className="font-mono text-sm uppercase tracking-wide text-ink-soft transition-colors hover:text-accent-electric"
            >
              More about me →
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

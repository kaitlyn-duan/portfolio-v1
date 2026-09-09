import Link from "next/link";
import { basePath } from "@/lib/basePath";
import { education } from "@/lib/data/experience";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { TapeSticker } from "@/components/shared/TapeSticker";

export function AboutTeaser() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-24 pt-20 sm:pt-28">
      <ScrollReveal>
        <div className="flex flex-col gap-6 border-t border-line pt-12 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-3xl font-display text-3xl uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            A Product Designer studying statistics at {education.school}, minoring in economics —
            trying to design with data, not just around it.
          </p>
          <div className="flex flex-col items-start gap-4">
            <TapeSticker rotate={3}>{education.program}</TapeSticker>
            <Link
              href="/about"
              className="font-body text-sm uppercase tracking-wide text-ink-soft transition-colors hover:text-accent-electric"
            >
              More about me →
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Sticker slapped in the bottom corner, same hover moves as the ones on
          the about page. */}
      <ScrollReveal className="absolute bottom-2 right-6 hidden sm:block">
        <img
          src={`${basePath}/images/about-cat-sticker-4.png`}
          alt=""
          style={{ "--sticker-rotate": "5deg" } as React.CSSProperties}
          className="h-28 w-auto cat-sticker cat-sticker-hop"
        />
      </ScrollReveal>
    </section>
  );
}

import { basePath } from "@/lib/basePath";
import { cn } from "@/lib/utils";
import { site } from "@/lib/data/site";
import { education } from "@/lib/data/experience";

export function AboutHero() {
  return (
    <section className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex max-w-xl flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-body text-sm italic tracking-normal text-accent-electric">
            About
          </span>
          <h1 className="font-display text-5xl uppercase leading-none tracking-tight text-ink sm:text-6xl">
            {site.name}
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg text-ink-soft">
            A {site.role.toLowerCase()} studying {education.program} at {education.school}. I grew
            up in the arts, assumed I would end up somewhere technical, and found design sitting
            right between the two.
          </p>
          <a
            href="#story"
            className="inline-flex w-fit items-center gap-2 font-body font-semibold text-ink transition-colors hover:text-accent-electric"
          >
            Read my full story below
            <span aria-hidden="true">&darr;</span>
          </a>
        </div>

        <div className="flex items-end gap-3 self-start" aria-hidden="true">
          {[
            { src: `${basePath}/images/about-cat-sticker.png`, rotate: "-6deg", move: "cat-sticker-peek" },
            { src: `${basePath}/images/about-cat-sticker-2.png`, rotate: "3deg", move: "cat-sticker-hop" },
            { src: `${basePath}/images/about-cat-sticker-3.png`, rotate: "-2deg", move: "cat-sticker-wiggle" },
          ].map((sticker) => (
            <img
              key={sticker.src}
              src={sticker.src}
              alt=""
              style={{ "--sticker-rotate": sticker.rotate } as React.CSSProperties}
              className={cn("h-24 w-auto cat-sticker", sticker.move)}
            />
          ))}
        </div>
      </div>

      <img
        src={`${basePath}/images/about-portrait.jpg`}
        alt={`${site.name} seated by the window of a record and coffee shop, wearing a black cap and vest`}
        className="w-full max-w-xs rounded-xl border border-line/20 object-cover"
      />
    </section>
  );
}

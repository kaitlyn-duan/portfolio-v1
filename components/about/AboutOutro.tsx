import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { site } from "@/lib/data/site";

export function AboutOutro() {
  return (
    <section className="flex flex-col gap-8 border-t border-line pt-16">
      <ScrollReveal className="flex flex-col gap-6">
        <p className="max-w-3xl text-lg text-ink-soft">
          If any of that sounds like your kind of thing, I would love to hear from you.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex w-fit items-center gap-2 border-b-2 border-accent-electric pb-1 font-body font-semibold text-ink transition-colors hover:text-accent-electric"
        >
          Say hi
          <span aria-hidden="true">&rarr;</span>
        </a>
      </ScrollReveal>
    </section>
  );
}

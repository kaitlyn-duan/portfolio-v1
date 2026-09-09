import { site } from "@/lib/data/site";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ContactCta() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-24">
      <ScrollReveal>
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-4xl uppercase tracking-tight text-ink sm:text-6xl">
            Let&rsquo;s make something
            <span className="block text-accent-electric">worth sketching about.</span>
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 font-body text-sm uppercase tracking-wide text-paper transition-colors hover:bg-accent-red"
          >
            {site.email}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

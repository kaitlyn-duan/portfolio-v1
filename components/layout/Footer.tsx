import { Logo } from "@/components/layout/Logo";
import { site } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div className="flex flex-col items-start gap-2">
          <Logo className="h-12 sm:h-14" />
          <p className="font-body text-sm italic tracking-normal text-ink-soft">{site.role}</p>
        </div>

        <div className="flex flex-col gap-1 font-body text-sm text-ink-soft sm:items-end">
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent-electric">
            {site.email}
          </a>
          <a
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-electric"
          >
            View Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

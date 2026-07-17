import { site } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl uppercase tracking-tight text-ink">{site.name}</p>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">{site.role}</p>
        </div>

        <div className="flex flex-col gap-1 font-mono text-sm text-ink-soft sm:items-end">
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

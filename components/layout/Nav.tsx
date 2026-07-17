"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/playground", label: "Playground" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl uppercase tracking-tight text-ink">
          {site.name}
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-mono text-sm uppercase tracking-wide text-ink-soft transition-colors hover:text-ink",
                  active && "text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-mono text-sm uppercase tracking-wide text-ink-soft transition-colors hover:text-ink sm:inline"
          >
            Resume
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-ink px-4 py-2 font-mono text-sm uppercase tracking-wide text-paper transition-colors hover:bg-accent-red"
          >
            Let&rsquo;s Talk!
          </a>
        </div>
      </nav>

      <div className="flex items-center gap-6 border-t border-line px-6 py-2 sm:hidden">
        {links.map((link) => {
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-ink",
                active && "text-ink",
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}

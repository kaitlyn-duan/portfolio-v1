"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { AnimatedBackground } from "@/components/core/animated-background";
import { Logo } from "@/components/layout/Logo";
import { useScrolledPastThreshold } from "@/hooks/useScrollDirection";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/playground", label: "Playground" },
];

// Pages that swap this nav out for their own in-page section toolbar while scrolling.
const PAGES_WITH_SECTION_TOOLBAR = [
  "/work/panasonic-kds-ui",
  "/work/mythweave",
  "/work/warframe-referral-page",
];

export function Nav() {
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/$/, "") || "/";
  const hasSectionToolbar = PAGES_WITH_SECTION_TOOLBAR.includes(normalizedPathname);
  const scrolledPast = useScrolledPastThreshold(140);
  const visible = !hasSectionToolbar || !scrolledPast;

  const renderLinks = () => (
    <AnimatedBackground
      className="rounded-full bg-paper-alt"
      transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
      enableHover
    >
      {links.map((link) => {
        const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <Link
            key={link.href}
            data-id={link.href}
            href={link.href}
            className={cn(
              "rounded-full px-3 py-1.5 font-body text-sm tracking-wide text-ink-soft transition-colors duration-300 hover:text-ink",
              active && "text-ink",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </AnimatedBackground>
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 340, damping: 28 } }}
          exit={{ opacity: 0, y: -8, transition: { duration: 0.12, ease: "easeIn" } }}
          className="fixed inset-x-0 top-4 z-30 flex flex-col items-center gap-2 px-4 sm:top-6"
        >
          <nav className="flex w-full max-w-3xl items-center justify-between gap-4 rounded-full border border-line bg-paper/80 px-4 py-2 shadow-sm backdrop-blur-md sm:px-6 sm:py-3">
            <Link
              href="/"
              className="flex shrink-0 items-center"
              // Already home, so the route never changes and nothing would move:
              // scroll back to the top instead.
              onClick={(event) => {
                if (normalizedPathname !== "/") return;
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Logo />
            </Link>

            <div className="hidden sm:flex">{renderLinks()}</div>

            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              <a
                href={site.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden font-body text-sm tracking-wide text-ink-soft transition-colors hover:text-ink sm:inline"
              >
                Resume
              </a>
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-ink px-4 py-1.5 font-body text-xs tracking-wide text-paper transition-colors hover:bg-accent-red sm:text-sm"
              >
                Let&rsquo;s Talk!
              </a>
            </div>
          </nav>

          <div className="rounded-full border border-line bg-paper/80 px-2 py-1 shadow-sm backdrop-blur-md sm:hidden">
            {renderLinks()}
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

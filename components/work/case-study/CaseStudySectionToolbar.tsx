"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AnimatedBackground } from "@/components/core/animated-background";
import { useScrolledPastThreshold } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";

type SectionLink = { id: string; label: string };

export function CaseStudySectionToolbar({ sections }: { sections: SectionLink[] }) {
  const visible = useScrolledPastThreshold(140);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 340, damping: 28, delay: 0.12 },
          }}
          exit={{ opacity: 0, y: -8, transition: { duration: 0.12, ease: "easeIn" } }}
          className="fixed inset-x-0 top-4 z-40 flex justify-center px-4 sm:top-6"
        >
          <nav className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-ink bg-ink/95 px-2 py-2 shadow-lg backdrop-blur-md">
            <AnimatedBackground
              className="rounded-full bg-paper/15"
              transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
              defaultValue={activeId ?? undefined}
              onValueChange={(id) => {
                if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  data-id={section.id}
                  type="button"
                  className={cn(
                    "shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 font-body text-xs tracking-wide text-paper/60 transition-colors duration-300 hover:text-paper sm:text-sm",
                    activeId === section.id && "text-paper",
                  )}
                >
                  {section.label}
                </button>
              ))}
            </AnimatedBackground>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

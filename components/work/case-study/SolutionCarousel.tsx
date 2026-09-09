"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type SolutionSlide = {
  heading: string;
  copy: string;
  image: string;
  imageAlt: string;
};

const PEEK_OFFSET_PERCENT = 58;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {direction === "left" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

export function SolutionCarousel({ slides }: { slides: SolutionSlide[] }) {
  const [index, setIndex] = useState(0);
  const active = slides[index];
  const count = slides.length;

  const goTo = (next: number) => setIndex((next + count) % count);

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
      <div className="flex items-center gap-4 sm:gap-6 lg:w-[64%] lg:shrink-0">
        <button
          type="button"
          aria-label="Previous solution"
          onClick={() => goTo(index - 1)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink-soft hover:bg-paper-alt"
        >
          <ArrowIcon direction="left" />
        </button>

        <div className="relative h-[240px] flex-1 overflow-hidden sm:h-[340px] md:h-[400px]">
          {slides.map((slide, i) => {
            let delta = i - index;
            if (delta > count / 2) delta -= count;
            if (delta < -count / 2) delta += count;
            const isCenter = delta === 0;
            const isVisible = Math.abs(delta) <= 1;

            return (
              <motion.div
                key={slide.heading}
                className="absolute left-1/2 top-0 w-[90%] sm:w-[80%] lg:w-[76%]"
                style={{ zIndex: isCenter ? 3 : 1 }}
                initial={false}
                animate={{
                  x: `calc(-50% + ${delta * PEEK_OFFSET_PERCENT}%)`,
                  scale: isCenter ? 1 : 0.86,
                  opacity: isVisible ? (isCenter ? 1 : 0.5) : 0,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                onClick={() => !isCenter && goTo(i)}
              >
                <div
                  className={`relative overflow-hidden rounded-3xl bg-paper shadow-[0_16px_32px_rgba(0,0,0,0.18)] ${
                    isCenter ? "" : "cursor-pointer"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Next solution"
          onClick={() => goTo(index + 1)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink-soft hover:bg-paper-alt"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>

      <div className="flex flex-col gap-3 lg:flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.heading}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <p className="font-body font-semibold text-ink">{active.heading}</p>
            <p className="text-ink-soft">{active.copy}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

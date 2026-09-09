"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

// Each digit sits in a 1em window over a column of stacked digits. The column
// repeats 0-9 a few times so a digit can roll through a full cycle before it
// lands, and so an overshooting spring never runs past the end of the strip.
const CYCLES = 3;
const ITEM_COUNT = 10 * CYCLES;
const ITEM_PERCENT = 100 / ITEM_COUNT;
const LANDING_CYCLE = 10;

function RollingDigit({
  digit,
  delay,
  rolled,
}: {
  digit: number;
  delay: number;
  rolled: boolean;
}) {
  return (
    <span className="inline-block h-[1em] overflow-hidden leading-none">
      <motion.span
        className="flex flex-col"
        initial={{ y: 0 }}
        animate={{ y: rolled ? `-${(LANDING_CYCLE + digit) * ITEM_PERCENT}%` : 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 18, delay }}
      >
        {Array.from({ length: ITEM_COUNT }, (_, i) => (
          <span key={i} className="flex h-[1em] items-center justify-center leading-none">
            {i % 10}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export function RollingNumber({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const rolled = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  let digitIndex = 0;

  return (
    <span ref={ref} className={cn("inline-flex tabular-nums leading-none", className)}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="inline-flex">
        {value.split("").map((char, i) => {
          if (!/\d/.test(char)) {
            return (
              <span key={i} className="inline-block h-[1em] leading-none">
                {char}
              </span>
            );
          }

          const delay = digitIndex * 0.08;
          digitIndex += 1;

          return <RollingDigit key={i} digit={Number(char)} delay={delay} rolled={rolled} />;
        })}
      </span>
    </span>
  );
}

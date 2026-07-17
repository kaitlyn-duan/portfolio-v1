"use client";

import { motion } from "motion/react";
import { site } from "@/lib/data/site";
import { Marginalia } from "@/components/shared/Marginalia";

const headlineLines = ["PUSHING", "THE BOUNDS OF", "HUMAN DESIGN", "x AI"];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const line = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 overflow-hidden px-6 pb-20 pt-16 sm:pt-24">
      <Marginalia className="absolute right-8 top-6 hidden rotate-6 sm:block">
        still sketching, mostly by hand
      </Marginalia>

      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl"
      >
        {headlineLines.map((text, i) => (
          <motion.span
            key={text}
            variants={line}
            className={i === headlineLines.length - 1 ? "block text-accent-electric" : "block"}
          >
            {text}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col gap-2"
      >
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-ink-soft">
          {site.name} — {site.role}
        </p>
        <p className="font-handwritten text-2xl text-accent-red">
          &hellip;{site.tagline.toLowerCase()}&hellip;
        </p>
      </motion.div>
    </section>
  );
}

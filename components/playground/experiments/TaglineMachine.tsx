"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const verbs = ["SKETCHING", "PROTOTYPING", "REWIRING", "BLURRING", "REIMAGINING", "PUSHING"];
const subjects = [
  "HUMAN INTUITION",
  "THE BLANK PAGE",
  "USER BEHAVIOR",
  "HANDCRAFTED UI",
  "THE PIXEL GRID",
];
const connectors = ["AGAINST", "ALONGSIDE", "THROUGH", "WITH"];
const aiTerms = [
  "GENERATIVE NOISE",
  "THE ALGORITHM",
  "ARTIFICIAL INTUITION",
  "MACHINE JUDGMENT",
];

function randomOf(list: string[]) {
  return list[Math.floor(Math.random() * list.length)];
}

function generateTagline() {
  return [randomOf(verbs), randomOf(subjects), `${randomOf(connectors)} ${randomOf(aiTerms)}`];
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const line = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2 } },
};

const defaultTagline = ["PUSHING", "HUMAN INTUITION", "AGAINST GENERATIVE NOISE"];

export function TaglineMachine() {
  const [tagline, setTagline] = useState(defaultTagline);
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="flex min-h-32 flex-col"
        >
          {tagline.map((text) => (
            <motion.span
              key={text}
              variants={line}
              className="font-display text-2xl uppercase leading-tight tracking-tight text-ink sm:text-3xl"
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={() => {
          setTagline(generateTagline());
          setCount((c) => c + 1);
        }}
        className="w-fit rounded-full bg-ink px-4 py-2 font-mono text-xs uppercase tracking-wide text-paper transition-colors hover:bg-accent-electric"
      >
        Generate
      </button>
    </div>
  );
}

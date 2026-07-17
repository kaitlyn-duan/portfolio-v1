"use client";

import { useState } from "react";
import { motion } from "motion/react";

const CELL_COUNT = 12;

const squigglePaths = [
  "M6 24 Q14 8 22 24 T38 24",
  "M6 16 Q20 34 34 12 T38 30",
  "M8 30 Q18 6 28 26 Q32 34 36 20",
];

function SketchSnapCell({ index }: { index: number }) {
  const [hovered, setHovered] = useState(false);
  const squiggle = squigglePaths[index % squigglePaths.length];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex aspect-square items-center justify-center rounded-sm border border-line bg-paper-alt"
    >
      <motion.svg
        viewBox="0 0 44 40"
        className="absolute h-8 w-8 text-ink"
        animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 0.8 : 1 }}
        transition={{ duration: 0.25 }}
      >
        <path d={squiggle} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </motion.svg>

      <motion.div
        className="absolute h-5 w-5 rounded-full bg-accent-electric"
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.6, rotate: hovered ? 0 : -45 }}
        transition={{ duration: 0.25 }}
      />
    </div>
  );
}

export function SketchSnapGrid() {
  return (
    <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
      {Array.from({ length: CELL_COUNT }).map((_, i) => (
        <SketchSnapCell key={i} index={i} />
      ))}
    </div>
  );
}

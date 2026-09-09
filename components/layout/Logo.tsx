"use client";

import { motion } from "motion/react";
import { basePath } from "@/lib/basePath";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

// Percentages derived from measuring the brush's pixel bounds in the original
// combined artwork (Assets/Logo.png) against logo-text.png's own crop (2252x1106),
// accounting for the transparent padding inside logo-brush.png's 512x512 canvas.
const BRUSH_HEIGHT_PCT = 46.4;
const BRUSH_LEFT_PCT = 77.0;
const BRUSH_TOP_PCT = 55.1;

export function Logo({ className }: { className?: string }) {
  return (
    <motion.span
      className={cn("relative inline-block h-8 shrink-0 sm:h-9", className)}
      style={{ aspectRatio: "2252 / 1106" }}
      initial="rest"
      whileHover="hover"
    >
      <img
        src={`${basePath}/images/logo-text.png`}
        alt={site.name}
        className="absolute left-0 top-0 h-full w-full"
      />
      <motion.img
        src={`${basePath}/images/logo-brush.png`}
        alt=""
        aria-hidden="true"
        className="absolute"
        style={{
          height: `${BRUSH_HEIGHT_PCT}%`,
          left: `${BRUSH_LEFT_PCT}%`,
          top: `${BRUSH_TOP_PCT}%`,
          transformOrigin: "20% 80%",
        }}
        variants={{ rest: { rotate: 0 }, hover: { rotate: -22 } }}
        transition={{ type: "spring", stiffness: 380, damping: 20 }}
      />
    </motion.span>
  );
}

"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type MarginaliaProps = {
  children: React.ReactNode;
  className?: string;
};

/** Small looping hand-drawn annotation, absolutely positioned by the caller via className. */
export function Marginalia({ children, className }: MarginaliaProps) {
  return (
    <motion.span
      className={cn("pointer-events-none font-handwritten text-xl text-accent-red", className)}
      animate={{ rotate: [-4, 4, -4], y: [0, -4, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.span>
  );
}

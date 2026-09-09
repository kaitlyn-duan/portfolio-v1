"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const words = [
  { text: "create", font: "font-word-create" },
  { text: "design", font: "font-word-design" },
  { text: "iterate", font: "font-word-iterate" },
];

const ROTATE_INTERVAL = 2200;

export function RotatingWord({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const current = words[index];

  return (
    <span
      className="inline-block align-top"
      style={{ perspective: 600, lineHeight: 1 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current.text}
          initial={{ rotateX: -90, opacity: 0, filter: "blur(6px)" }}
          animate={{ rotateX: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ rotateX: 90, opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "50% 100%", display: "inline-block", lineHeight: 1 }}
          className={cn(current.font, className)}
        >
          {current.text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { basePath } from "@/lib/basePath";
import { Marginalia } from "@/components/shared/Marginalia";

const ALPHA_THRESHOLD = 10;

const headlineLines = ["Meaningful,", "playful &", "beautifully", "human."];
const accentFrom = 2;

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
  const [hovered, setHovered] = useState(false);
  const alphaCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const image = new Image();
    image.src = `${basePath}/images/hero-sketch-default.png`;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      canvas.getContext("2d")?.drawImage(image, 0, 0);
      alphaCanvasRef.current = canvas;
    };
  }, []);

  function handlePointerMove(e: React.MouseEvent<HTMLImageElement>) {
    const canvas = alphaCanvasRef.current;
    if (!canvas) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height);

    if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
      setHovered(false);
      return;
    }

    const alpha = canvas.getContext("2d")?.getImageData(x, y, 1, 1).data[3] ?? 0;
    setHovered(alpha > ALPHA_THRESHOLD);
  }

  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 overflow-hidden px-6 pb-12 pt-6 sm:pt-10">
      <div className="flex flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-8 sm:max-w-xs sm:shrink-0">
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
                className={
                  i >= accentFrom
                    ? "block whitespace-nowrap text-accent-electric"
                    : "block whitespace-nowrap"
                }
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
            <p className="whitespace-nowrap font-mono text-sm uppercase tracking-[0.2em] text-ink-soft">
              Kaitlyn Duan — Product Designer
            </p>
            <p className="whitespace-nowrap font-handwritten text-2xl text-accent-red">
              &hellip;pushing the bounds of human design x ai&hellip;
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative w-full self-center sm:max-w-3xl sm:flex-1 sm:self-end"
        >
          <Marginalia className="absolute right-[34%] top-[3%] rotate-6">
            still sketching with love
          </Marginalia>
          <img
            src={`${basePath}/images/${hovered ? "hero-sketch-hover.png" : "hero-sketch-default.png"}`}
            alt="Doodled sketch of a girl in glasses biting a pencil, mid-thought"
            className="h-auto w-full object-contain"
            onMouseMove={handlePointerMove}
            onMouseLeave={() => setHovered(false)}
          />
        </motion.div>
      </div>
    </section>
  );
}

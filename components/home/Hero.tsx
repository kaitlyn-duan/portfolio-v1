"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { basePath } from "@/lib/basePath";
import { RotatingWord } from "@/components/home/RotatingWord";

const ALPHA_THRESHOLD = 10;
const IMAGE_ROTATE_DEG = -2;
// Hero image is exported at a fixed 1452x1600 canvas; these percentages
// position each icon to line up with where it sits on the laptop screen.
const HERO_ASPECT_RATIO = "1452 / 1600";
const laptopIcons = [
  { name: "Figma", src: "figma.png", left: 55.5, top: 30.23, width: 12.4 },
  { name: "Photoshop", src: "photoshop.png", left: 71.43, top: 22.45, width: 12.51 },
  { name: "Slack", src: "slack.png", left: 91.19, top: 23.97, width: 10.37 },
];

const iconPop = {
  hidden: { opacity: 0, scale: 0.4, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.08, ease: [0.34, 1.56, 0.64, 1] as const },
  }),
};

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

    const img = e.currentTarget;
    // getBoundingClientRect() returns the axis-aligned box of the rotated
    // element, so map the pointer into the image's own unrotated local space
    // by rotating it back around the element's center before scaling to canvas pixels.
    const rect = img.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = (-IMAGE_ROTATE_DEG * Math.PI) / 180;

    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const localX = dx * Math.cos(angle) - dy * Math.sin(angle) + img.offsetWidth / 2;
    const localY = dx * Math.sin(angle) + dy * Math.cos(angle) + img.offsetHeight / 2;

    const x = Math.floor((localX / img.offsetWidth) * canvas.width);
    const y = Math.floor((localY / img.offsetHeight) * canvas.height);

    if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
      setHovered(false);
      return;
    }

    const alpha = canvas.getContext("2d")?.getImageData(x, y, 1, 1).data[3] ?? 0;
    setHovered(alpha > ALPHA_THRESHOLD);
  }

  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 overflow-hidden px-6 pb-20 pt-6 sm:pb-28 sm:pt-10">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-10">
        <div className="flex flex-col gap-8 sm:max-w-xs sm:shrink-0">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-display text-5xl uppercase leading-[0.95] tracking-tighter text-ink sm:text-7xl lg:text-8xl"
          >
            <motion.span variants={line} className="block whitespace-nowrap">
              Together,
            </motion.span>
            <motion.span variants={line} className="block whitespace-nowrap">
              we can
            </motion.span>
            <motion.span
              variants={line}
              className="block whitespace-nowrap normal-case tracking-normal text-accent-electric"
            >
              <RotatingWord />
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col gap-2"
          >
            <p className="whitespace-nowrap font-body text-sm uppercase tracking-[0.2em] text-ink-soft">
              Kaitlyn Duan — Product Designer
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative flex w-full justify-center sm:w-auto"
        >
          <div
            className="relative h-[300px] translate-x-4 sm:h-[360px] sm:translate-x-8 lg:h-[440px] lg:translate-x-12"
            style={{ aspectRatio: HERO_ASPECT_RATIO }}
          >
            <img
              src={`${basePath}/images/${hovered ? "hero-sketch-hover.png" : "hero-sketch-default.png"}`}
              alt="Doodled sketch of a girl with long dark hair in a hoodie, standing beside a laptop"
              className="absolute inset-0 h-full w-full object-contain"
              onMouseMove={handlePointerMove}
              onMouseLeave={() => setHovered(false)}
            />
            {laptopIcons.map((icon, i) => (
              <motion.img
                key={icon.name}
                src={`${basePath}/images/icons/${icon.src}`}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute"
                style={{ left: `${icon.left}%`, top: `${icon.top}%`, width: `${icon.width}%` }}
                variants={iconPop}
                custom={i}
                initial="hidden"
                animate={hovered ? "visible" : "hidden"}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

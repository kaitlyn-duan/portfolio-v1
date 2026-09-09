"use client";

import { motion, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

type HeroPhoto = { src: string; alt: string };

const SPRING: Transition = { type: "spring", stiffness: 340, damping: 14, mass: 0.6 };

function PhotoFrame({
  photo,
  className,
  rotate,
  zIndex,
}: {
  photo: HeroPhoto;
  className: string;
  rotate: number;
  zIndex: number;
}) {
  return (
    <motion.div
      className={cn(
        "absolute overflow-hidden rounded-md shadow-[0_14px_30px_rgba(0,0,0,0.22)]",
        className,
      )}
      style={{ rotate, zIndex, clipPath: "inset(0 0 15% 0)" }}
      whileHover={{
        y: -44,
        scale: 1.05,
        rotate: rotate * 0.3,
        zIndex: 10,
        clipPath: "inset(0 0 0% 0)",
      }}
      transition={SPRING}
    >
      <img src={photo.src} alt={photo.alt} className="block h-auto w-full" />
    </motion.div>
  );
}

export function HeroPhotoStack({ photos }: { photos: [HeroPhoto, HeroPhoto] }) {
  const [first, second] = photos;

  return (
    <div className="relative h-0 w-64">
      <PhotoFrame photo={first} className="left-0 top-2 w-36" rotate={-5} zIndex={1} />
      <PhotoFrame photo={second} className="left-16 top-0 w-44" rotate={11} zIndex={2} />
    </div>
  );
}

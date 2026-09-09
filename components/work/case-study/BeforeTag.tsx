"use client";

import { useEffect, useState } from "react";
import { basePath } from "@/lib/basePath";

const FRAMES = ["before-1.png", "before-2.png"];
const FRAME_DURATION_MS = 900;

export function BeforeTag({ className }: { className?: string }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFrame((f) => (f + 1) % FRAMES.length);
    }, FRAME_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <img
      src={`${basePath}/images/work/${FRAMES[frame]}`}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}

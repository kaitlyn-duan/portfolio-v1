"use client";

import { useEffect, useState } from "react";

/**
 * Tracks scroll direction past a threshold. Returns true once the user has
 * scrolled down past `threshold`, and flips back to false as soon as they
 * scroll up at all (or return above the threshold).
 */
export function useScrolledPastThreshold(threshold = 80) {
  const [pastThreshold, setPastThreshold] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      if (y > lastY && y > threshold) {
        setPastThreshold(true);
      } else if (y < lastY || y <= threshold) {
        setPastThreshold(false);
      }
      lastY = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return pastThreshold;
}

"use client";

import { InView } from "@/components/core/in-view";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function ScrollReveal({ children, className, delay = 0, id }: ScrollRevealProps) {
  return (
    <InView
      id={id}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      // Reveal as soon as any part of the block is on screen, so a section
      // title peeking in at the bottom never sits hidden. The extra 120px below
      // the viewport cancels out the 100px the block is shifted down while
      // hidden, since the observer measures the shifted position.
      viewOptions={{ once: true, margin: "0px 0px 120px 0px" }}
      transition={{ duration: 0.3, ease: "easeInOut", delay }}
    >
      {children}
    </InView>
  );
}

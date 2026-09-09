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
      viewOptions={{ once: true, margin: "0px 0px -200px 0px" }}
      transition={{ duration: 0.3, ease: "easeInOut", delay }}
    >
      {children}
    </InView>
  );
}

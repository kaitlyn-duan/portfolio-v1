"use client";

import {
  motion,
  useInView,
  type Transition,
  type UseInViewOptions,
  type Variants,
} from "motion/react";
import { useRef, type ElementType, type ReactNode } from "react";

type MarginType = UseInViewOptions["margin"];

export type InViewProps = {
  children: ReactNode;
  variants?: Variants;
  transition?: Transition;
  viewOptions?: {
    once?: boolean;
    margin?: MarginType;
    amount?: "some" | "all" | number;
  };
  as?: ElementType;
  className?: string;
  id?: string;
};

export function InView({
  children,
  variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  transition,
  viewOptions,
  as = "div",
  className,
  id,
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

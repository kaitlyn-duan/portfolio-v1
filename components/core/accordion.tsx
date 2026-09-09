"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, MotionConfig, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

type AccordionContextValue = {
  expandedValue: string | null;
  toggleItem: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion parts must be used within <Accordion>");
  return ctx;
}

const AccordionItemContext = createContext<string | null>(null);

function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  if (ctx === null) throw new Error("AccordionTrigger/AccordionContent must be used within <AccordionItem>");
  return ctx;
}

export type AccordionProps = {
  children: ReactNode;
  className?: string;
  transition?: Transition;
  defaultValue?: string;
};

export function Accordion({ children, className, transition, defaultValue }: AccordionProps) {
  const [expandedValue, setExpandedValue] = useState<string | null>(defaultValue ?? null);

  const toggleItem = (value: string) => {
    setExpandedValue((prev) => (prev === value ? null : value));
  };

  return (
    <MotionConfig transition={transition}>
      <AccordionContext.Provider value={{ expandedValue, toggleItem }}>
        <div className={className}>{children}</div>
      </AccordionContext.Provider>
    </MotionConfig>
  );
}

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={className}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function useAccordionItemState() {
  const { expandedValue } = useAccordionContext();
  const value = useAccordionItemContext();
  return expandedValue === value;
}

export function AccordionTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { toggleItem } = useAccordionContext();
  const value = useAccordionItemContext();
  const isExpanded = useAccordionItemState();

  return (
    <button
      type="button"
      onClick={() => toggleItem(value)}
      aria-expanded={isExpanded}
      className={cn("group", className)}
    >
      {children}
    </button>
  );
}

export function AccordionChevron({ className }: { className?: string }) {
  const isExpanded = useAccordionItemState();

  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: isExpanded ? 180 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </motion.svg>
  );
}

export function AccordionContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const isExpanded = useAccordionItemState();

  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className={cn("pt-2", className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

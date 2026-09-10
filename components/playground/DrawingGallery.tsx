"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { type Drawing, drawingSrc, drawingTileSrc } from "@/lib/data/drawings";

const EASE = [0.22, 1, 0.36, 1] as const;

// Lifted from the reference archive's tile hover: a soft spring that grows the
// tile 5%, tips it 2 degrees, and lets the shadow spread with it.
const TILE_SPRING = { type: "spring", bounce: 0.2, duration: 0.4 } as const;
const TILE_SHADOW = "0px 11px 40px -11px rgba(0, 0, 0, 0.18)";
const TILE_SHADOW_HOVER = "0px 11.55px 37px -11.55px rgba(0, 0, 0, 0.21)";

export function DrawingGallery({ drawings }: { drawings: Drawing[] }) {
  const [open, setOpen] = useState<Drawing | null>(null);
  const reduceMotion = useReducedMotion();
  const tileVariants = {
    rest: { rotate: 0, scale: 1, boxShadow: TILE_SHADOW },
    // Reduced motion keeps the shadow response but drops the tilt and grow.
    hover: reduceMotion
      ? { boxShadow: TILE_SHADOW_HOVER }
      : { rotate: 2, scale: 1.05, boxShadow: TILE_SHADOW_HOVER },
  };
  // The tile that opened the modal, so focus can go back to it on close.
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const close = useCallback(() => {
    setOpen(null);
    openerRef.current?.focus();
  }, []);

  return (
    <>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:grid-cols-4">
        {drawings.map((drawing) => (
          <li key={drawing.slug}>
            <motion.button
              type="button"
              initial="rest"
              animate="rest"
              whileHover="hover"
              onClick={(e) => {
                openerRef.current = e.currentTarget;
                setOpen(drawing);
              }}
              aria-haspopup="dialog"
              className="group flex w-full cursor-pointer flex-col items-center gap-4 text-center focus-visible:outline-none"
            >
              <motion.span
                variants={tileVariants}
                transition={TILE_SPRING}
                className="block aspect-square w-full overflow-hidden rounded-[15%] group-focus-visible:ring-2 group-focus-visible:ring-accent-electric group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-paper"
              >
                <img
                  src={drawingTileSrc(drawing)}
                  alt=""
                  width={720}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </motion.span>
              <span className="flex flex-col">
                <span className="text-ink">{drawing.title}</span>
                {drawing.date ? <span className="text-ink-soft">{drawing.date}</span> : null}
              </span>
            </motion.button>
          </li>
        ))}
      </ul>

      <DrawingModal drawing={open} onClose={close} />
    </>
  );
}

function DrawingModal({ drawing, onClose }: { drawing: Drawing | null; onClose: () => void }) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement | null>(null);
  // False during the server render and hydration, true once running in the browser.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    if (!drawing) return;

    // Lock page scroll, padding out the scrollbar's width so the page does not jump.
    const html = document.documentElement;
    const scrollbar = window.innerWidth - html.clientWidth;
    const prevOverflow = html.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    html.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbar}px`;

    closeRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      // The close button is the only control inside, so Tab stays on it.
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      html.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
    };
  }, [drawing, onClose]);

  // Portalled to <body>: the page wrappers animate transform and filter, which
  // would otherwise trap a fixed overlay inside them.
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {drawing ? (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgb(92_92_92/0.8)] p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawing-modal-title"
            className="relative flex max-h-full w-full flex-col overflow-y-auto rounded-2xl bg-white md:w-fit md:rounded-3xl md:flex-row md:overflow-hidden"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 4 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-center bg-paper-alt md:bg-transparent">
              <img
                src={drawingSrc(drawing)}
                alt={drawing.alt}
                width={drawing.width}
                height={drawing.height}
                // Sized by whichever limit it hits first, keeping the art uncropped.
                className="block h-auto max-h-[55vh] w-auto max-w-full md:max-h-[min(80vh,640px)] md:max-w-[min(calc(100vw-24rem),760px)]"
              />
            </div>

            <div className="flex w-full flex-col gap-5 p-8 md:w-80 md:shrink-0 md:p-12">
              <div className="flex flex-col pr-8">
                <h2 id="drawing-modal-title" className="text-xl text-ink">
                  {drawing.title}
                </h2>
                {drawing.date ? (
                  <p className="text-sm text-ink-soft">{drawing.date}</p>
                ) : null}
              </div>
              <p className="text-sm leading-relaxed text-ink">{drawing.description}</p>
              <p className="text-sm">
                <span className="text-ink">Type</span>{" "}
                <span className="text-ink-soft">{drawing.kind}</span>
              </p>
            </div>

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-paper-alt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-electric"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

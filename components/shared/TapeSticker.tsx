import { cn } from "@/lib/utils";

type TapeStickerProps = {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
};

/** Decorative sticky-note/tape wrapper with a fixed per-instance rotation. */
export function TapeSticker({ children, rotate = -3, className }: TapeStickerProps) {
  return (
    <div
      className={cn(
        "inline-block border border-line bg-paper-alt px-4 py-2 font-body text-sm uppercase tracking-wide text-ink shadow-sm",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}

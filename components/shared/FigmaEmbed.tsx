import { cn } from "@/lib/utils";

type FigmaEmbedProps = {
  url: string;
  title: string;
  aspectRatio?: "16/9" | "4/3" | "9/16";
  className?: string;
};

const ratioClass: Record<NonNullable<FigmaEmbedProps["aspectRatio"]>, string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "9/16": "aspect-[9/16]",
};

export function FigmaEmbed({ url, title, aspectRatio = "16/9", className }: FigmaEmbedProps) {
  const embedSrc = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-3xl border border-line bg-paper-alt shadow-[0_16px_32px_rgba(0,0,0,0.12)]",
        ratioClass[aspectRatio],
        className,
      )}
    >
      <iframe
        src={embedSrc}
        title={title}
        className="h-full w-full"
        allow="fullscreen"
        allowFullScreen
      />
    </div>
  );
}

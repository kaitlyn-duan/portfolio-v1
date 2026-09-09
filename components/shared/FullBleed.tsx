import { cn } from "@/lib/utils";

export function FullBleed({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={cn("relative left-1/2 w-screen -translate-x-1/2", className)}>
      {children}
    </div>
  );
}

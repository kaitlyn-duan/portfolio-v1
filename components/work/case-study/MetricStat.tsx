export function MetricStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-3xl text-accent-red sm:text-4xl">{value}</span>
      <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">{label}</span>
    </div>
  );
}

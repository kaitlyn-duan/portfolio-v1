export function MetricStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-3xl text-accent-red sm:text-4xl">{value}</span>
      <span className="font-body text-sm italic tracking-normal text-ink-soft">{label}</span>
    </div>
  );
}

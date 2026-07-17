export function OutcomeSection({ text }: { text: string }) {
  return (
    <section className="flex flex-col gap-3">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-red">
        The Outcome
      </span>
      <p className="max-w-2xl text-lg text-ink">{text}</p>
    </section>
  );
}

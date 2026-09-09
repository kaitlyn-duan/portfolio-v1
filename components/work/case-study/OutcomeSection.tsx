export function OutcomeSection({ text }: { text: string }) {
  return (
    <section className="flex flex-col gap-3">
      <span className="font-body text-sm italic tracking-normal text-accent-red">
        The Outcome
      </span>
      <p className="max-w-3xl text-lg text-ink">{text}</p>
    </section>
  );
}

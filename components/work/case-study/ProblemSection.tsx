export function ProblemSection({ text }: { text: string }) {
  return (
    <section className="flex flex-col gap-3">
      <span className="font-body text-sm italic tracking-normal text-accent-electric">
        The Problem
      </span>
      <p className="max-w-3xl text-lg text-ink">{text}</p>
    </section>
  );
}

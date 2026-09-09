import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-start gap-6 px-6 py-32 text-center sm:text-left">
      <span className="font-serif-italic italic text-2xl text-accent-red">page torn out...</span>
      <h1 className="font-display text-6xl uppercase tracking-tight text-ink sm:text-8xl">404</h1>
      <Link
        href="/"
        className="font-body text-sm uppercase tracking-wide text-ink-soft transition-colors hover:text-accent-electric"
      >
        Back to Home
      </Link>
    </div>
  );
}

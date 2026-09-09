import { HeroPhotoStack } from "@/components/work/case-study/HeroPhotoStack";

type HeroPhoto = { src: string; alt: string };

type CaseStudyHeroProps = {
  title: string;
  timeframe: string;
  role: string;
  duration: string;
  durationLabel?: string;
  teamSize?: string;
  software?: string;
  description?: string;
  images?: [HeroPhoto, HeroPhoto];
};

export function CaseStudyHero({
  title,
  timeframe,
  role,
  duration,
  durationLabel = "Duration",
  teamSize,
  software,
  description,
  images,
}: CaseStudyHeroProps) {
  const stats = [
    { label: "Main Role", value: role },
    { label: durationLabel, value: duration },
    ...(teamSize ? [{ label: "Team Size", value: teamSize }] : []),
    ...(software ? [{ label: "Software", value: software }] : []),
  ];

  return (
    <div className="relative flex flex-col gap-8 overflow-hidden rounded-[32px] bg-paper-alt p-6 sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <h1 className="max-w-2xl font-display text-3xl uppercase leading-none tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <span className="shrink-0 font-body text-sm text-ink-soft sm:text-base">{timeframe}</span>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-wrap gap-8 sm:flex-nowrap sm:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-body text-sm font-semibold text-ink">{stat.label}</span>
              <span className="font-body text-sm text-ink-soft">{stat.value}</span>
            </div>
          ))}
        </div>

        {description && !images ? (
          <p className="max-w-md font-body text-sm text-ink-soft sm:text-base">{description}</p>
        ) : null}
      </div>

      {images ? (
        <div className="absolute right-80 top-12 hidden lg:block">
          <HeroPhotoStack photos={images} />
        </div>
      ) : null}
    </div>
  );
}

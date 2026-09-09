import type { Metadata } from "next";
import { getProjectBySlug } from "@/lib/data/projects";
import { FullBleed } from "@/components/shared/FullBleed";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { NextProjectLink } from "@/components/work/case-study/NextProjectLink";
import { CaseStudyHero } from "@/components/work/case-study/CaseStudyHero";
import { CaseStudySectionToolbar } from "@/components/work/case-study/CaseStudySectionToolbar";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionChevron,
} from "@/components/core/accordion";
import { basePath } from "@/lib/basePath";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Teamfight Tactics: Mythweave — Kaitlyn Duan",
};

function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ScrollReveal id={id} className={cn("flex flex-col gap-8 scroll-mt-32", className)}>
      <div className="flex flex-col gap-2">
        <span className="font-body text-sm italic tracking-normal text-accent-electric">
          {eyebrow}
        </span>
        <h2 className="font-display text-4xl uppercase tracking-tight text-ink sm:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </ScrollReveal>
  );
}

function CaptionedImage({
  src,
  alt,
  caption,
  className,
  captionClassName,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  captionClassName?: string;
}) {
  return (
    <figure className={cn("flex flex-col gap-2", className)}>
      <img src={src} alt={alt} className="h-auto w-full rounded-xl border border-line/20" />
      <figcaption
        className={cn(
          "font-body text-sm italic tracking-normal text-ink-soft",
          captionClassName,
        )}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

const STRESS_TEST_LANGUAGES = [
  "english",
  "chinese",
  "irish",
  "russian",
  "arabic",
  "german",
  "lithuanian",
];

function StressTestCarousel() {
  const track = [...STRESS_TEST_LANGUAGES, ...STRESS_TEST_LANGUAGES];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-8 py-4">
        {track.map((language, index) => (
          <img
            key={`${language}-${index}`}
            src={`${basePath}/images/work/mythweave-stress-${language}.png`}
            alt={`The Flexible augment card localized into ${language}`}
            className="h-72 w-auto shrink-0 sm:h-80"
          />
        ))}
      </div>
    </div>
  );
}

const SECTION_LINKS = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "process", label: "Process" },
  { id: "result", label: "Result" },
  { id: "reflection", label: "Reflection" },
];

export default function MythweaveCaseStudy() {
  const nextProject = getProjectBySlug("warframe-referral-page");

  return (
    <article className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 pb-16 pt-8 sm:pb-24 sm:pt-10">
      <CaseStudySectionToolbar sections={SECTION_LINKS} />

      {/* Hero */}
      <ScrollReveal className="flex flex-col gap-8">
        <FullBleed>
          <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16">
            <CaseStudyHero
              title="TFT Design: Mythweave"
              timeframe="2026"
              role="Visual Designer"
              duration="Personal Project"
              durationLabel="Project Type"
              software="Figma, Photoshop"
              images={[
                {
                  src: `${basePath}/images/work/mythweave-hero-tft-love.png`,
                  alt: "Teamfight Tactics app splash art featuring a crowned Poro",
                },
                {
                  src: `${basePath}/images/work/mythweave-hero-poro.png`,
                  alt: "A cute Poro sticker illustration",
                },
              ]}
            />
          </div>
        </FullBleed>

        <FullBleed>
          <div
            className="relative flex w-full flex-col items-center gap-10 overflow-hidden px-6 py-16 sm:py-24 lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:px-16 lg:py-20"
            style={{
              background:
                "radial-gradient(circle at 50% 30%, #5c141c 0%, #2a0a10 55%, #12060a 100%)",
            }}
          >
            <div className="relative z-10 flex flex-col items-center gap-6 text-center lg:w-[18%] lg:shrink-0 lg:items-start lg:text-left">
              <img
                src={`${basePath}/images/work/mythweave-logo.png`}
                alt="Mythweave logo lockup for a speculative Teamfight Tactics set"
                className="h-auto w-full max-w-xl lg:max-w-none"
              />
              <p className="max-w-md font-body text-sm italic tracking-normal text-paper/70 sm:text-base">
                A speculative Teamfight Tactics set concept: a mythic card frame redesign for the
                game&rsquo;s Augment system.
              </p>
            </div>
            <div className="relative z-10 w-full max-w-xl lg:w-[45%] lg:max-w-none">
              <img
                src={`${basePath}/images/work/mythweave-hero-laptop.png`}
                alt="The Mythweave augment choice screen shown on a MacBook in a live match environment"
                className="h-auto w-full"
              />
            </div>
          </div>
        </FullBleed>
      </ScrollReveal>

      {/* Overview */}
      <Section id="overview" eyebrow="Context" title="Project Overview">
        <p className="text-lg text-ink-soft">
          For this project, I designed a custom TFT augment card system for{" "}
          <span className="text-ink">Mythweave</span>, focusing on silhouette, hierarchy,
          material, and thematic detail. The goal was to create cards that feel native to TFT
          while introducing a distinct visual language inspired by traditional ornament, clouds,
          and ceremonial forms.
        </p>
      </Section>

      {/* Visual Identity */}
      <Section id="research" eyebrow="Research" title="Visual Identity">
        <p className="text-lg text-ink-soft">
          Mythweave&rsquo;s look pulls from three of League&rsquo;s mythic skin lines, each
          reinterpreting East Asian myth and ceremony through a different lens: Mythmaker&rsquo;s
          folklore-costume energy, Shan Hai Scrolls&rsquo; bestiary elegance, and Immortal
          Journey&rsquo;s spirit-warrior motion. Together they shaped the ornament, silhouette,
          and color language behind the card frame.
        </p>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch">
          <div className="flex flex-1 flex-col gap-6">
            <CaptionedImage
              src={`${basePath}/images/work/mythweave-inspo-mythmaker.png`}
              alt="Mythmaker skin line splash art: oni-mask and flame-costume champions"
              caption="Inspiration: Mythmaker"
            />
            <CaptionedImage
              src={`${basePath}/images/work/mythweave-inspo-shan-hai-scrolls.png`}
              alt="Shan Hai Scrolls skin line splash art: champions reimagined as mythic beasts and guardians"
              caption="Inspiration: Shan Hai Scrolls"
            />
            <CaptionedImage
              src={`${basePath}/images/work/mythweave-inspo-mythmaker-ingame.png`}
              alt="Mythmaker skin line in-game model renders showing the red-and-gold festival costume details"
              caption="Inspiration: Mythmaker, in-game models"
            />
          </div>
          <figure className="flex flex-col gap-2 sm:w-2/5">
            <div className="flex-1 overflow-hidden rounded-xl border border-line/20">
              <img
                src={`${basePath}/images/work/mythweave-inspo-immortal-journey.png`}
                alt="Immortal Journey skin line splash art: spirit-warrior champion in motion with red ribbon motifs"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="font-body text-sm italic tracking-normal text-ink-soft">
              Inspiration: Immortal Journey
            </figcaption>
          </figure>
        </div>

        <p className="text-ink-soft">
          Before designing anything original, I pulled these references together into a single
          board of ornament patterns, past set art direction, and color studies, to work out what
          Mythweave should borrow and what it needed to do differently.
        </p>
        <CaptionedImage
          src={`${basePath}/images/work/mythweave-explorations.png`}
          alt="Moodboard of Lunar and mythic reference material: ornament patterns, past TFT set art, color palettes, and iconography"
          caption="Mood and reference board: ornament patterns, past set art direction, and color studies gathered before designing Mythweave's own frame."
        />

        <p className="font-body font-semibold text-ink">Auditing past sets</p>
        <p className="text-ink-soft">
          Before drawing anything, I pulled up how TFT had framed its augments across previous
          sets. The art direction is thrown out and rebuilt every set, so the frames share almost
          no ornament, palette, or silhouette with each other.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              src: `${basePath}/images/work/mythweave-past-set-augments-1.png`,
              alt: "A TFT augment selection screen in a gold and rose ornate frame, offering Preparation I, Band of Thieves, and On a Roll",
              caption: "Gold and rose, ornate scrollwork",
            },
            {
              src: `${basePath}/images/work/mythweave-past-set-augments-2.png`,
              alt: "A TFT augment selection screen in a purple crystal frame, offering Tons of Stats, Kahunahuna, and Exclusive Customization",
              caption: "Purple crystal, shard silhouette",
            },
            {
              src: `${basePath}/images/work/mythweave-past-set-augments-3.png`,
              alt: "A TFT augment selection screen in a green foliage frame, offering Worth the Wait, Calculated Loss, and Hustler",
              caption: "Green foliage, overgrown edges",
            },
          ].map((item) => (
            <figure key={item.src} className="flex flex-col gap-2">
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-[16/9] w-full rounded-xl border border-line/20 object-cover"
                loading="lazy"
              />
              <figcaption className="font-body text-sm italic tracking-normal text-ink-soft">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[2fr_3fr]">
          <CaptionedImage
            src={`${basePath}/images/work/mythweave-augment-anatomy.png`}
            alt="An augment card marked up with measurement guides: the icon occupies the top third and roughly the middle half of the width, and the text box fills the bottom two thirds"
            caption="Measuring the constant underneath the art direction."
          />
          <div className="flex flex-col gap-4">
            <p className="font-body font-semibold text-ink">What stays constant</p>
            <p className="text-ink-soft">
              What does not change is the proportion. Measured against each other, every set puts
              the icon in the top third of the card and the text box in the bottom two thirds, and
              the icon sits across roughly half the card&rsquo;s width.
            </p>
            <p className="text-ink-soft">
              That gave me the structure to design against: Mythweave could take its own ornament,
              palette, and silhouette as far as I wanted, as long as it hit those proportions and
              still read as a TFT augment at a glance.
            </p>
          </div>
        </div>
      </Section>

      {/* Card Design */}
      <Section id="process" eyebrow="Process" title="Designing the Card Frame">
        <p className="text-ink-soft">
          I started with quick thumbnails testing different crest silhouettes, from palace eaves
          to floral crowns to radiating fans, before narrowing toward a direction.
        </p>
        <CaptionedImage
          src={`${basePath}/images/work/mythweave-sketches-early.png`}
          alt="Early thumbnail sketches exploring four different card crest silhouettes, one labeled 'palace'"
          caption="Early exploration: testing crest silhouettes before committing to a direction."
        />
        <p className="text-ink-soft">
          From there I iterated on the frame more systematically, weighing East Asian
          traditional, heavenly, and Victorian ornament against each other under the
          &ldquo;Mythweave&rdquo; theme, before landing on the crane-and-cloud crest that carried
          into the final frame.
        </p>
        <CaptionedImage
          src={`${basePath}/images/work/mythweave-sketches-iterations.png`}
          alt="A sheet of card frame silhouette iterations with theme notes reading 'Myth Weave: east asian traditional + heavenly + victorian'"
          caption="Iterating on frame silhouette and ornament direction against the Mythweave theme."
        />
        <p className="text-ink-soft">
          The frame then went through two full digital passes. Between versions, I reworked the
          border scallop shape, tightened the crane-and-cloud crest, simplified the corner gem,
          and rebalanced the floral accents so they framed the content without competing with it.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <figure className="flex flex-col gap-2">
            <div className="flex aspect-[5/8] items-center justify-center overflow-hidden rounded-xl border border-line/20">
              <img
                src={`${basePath}/images/work/mythweave-card-v1.png`}
                alt="Mythweave augment card frame, first iteration, showing the Preparation I augment"
                className="h-full w-full object-contain"
              />
            </div>
            <figcaption className="font-body text-sm italic tracking-normal text-ink-soft">
              Version 1
            </figcaption>
          </figure>
          <figure className="flex flex-col gap-2">
            <div className="flex aspect-[5/8] items-center justify-center overflow-hidden rounded-xl border border-line/20">
              <img
                src={`${basePath}/images/work/mythweave-card-v2.png`}
                alt="Mythweave augment card frame, second iteration, showing the Preparation I augment with a refined border and crest"
                className="h-full w-full object-contain"
              />
            </div>
            <figcaption className="font-body text-sm italic tracking-normal text-ink-soft">
              Version 2: refined border, crest, and gem detailing
            </figcaption>
          </figure>
        </div>
        <figure className="flex w-full flex-col gap-2">
          <video
            src={`${basePath}/videos/mythweave-process.mov`}
            controls
            playsInline
            className="h-auto w-full rounded-xl border border-line/20"
          />
          <figcaption className="font-body text-sm italic tracking-normal text-ink-soft">
            The full design process, start to finish.
          </figcaption>
        </figure>
      </Section>

      <Section id="result" eyebrow="Result" title="Final Cards">
        <p className="text-ink-soft">
          The finished frame applied across augment tiers and content types, each carrying its
          own icon treatment and color weight while staying unmistakably part of the same set.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <CaptionedImage
            src={`${basePath}/images/work/mythweave-card-silver.png`}
            alt="Mythweave silver-tier augment card, Augmented Power"
            caption="Silver: Augmented Power"
            captionClassName="not-italic text-center"
          />
          <CaptionedImage
            src={`${basePath}/images/work/mythweave-card-gold.png`}
            alt="Mythweave gold-tier augment card, Arcane Viktor-y"
            caption="Gold: Arcane Viktor-y"
            captionClassName="not-italic text-center"
          />
          <CaptionedImage
            src={`${basePath}/images/work/mythweave-stress-english.png`}
            alt="Mythweave prismatic-tier augment card, Flexible"
            caption="Prismatic: Flexible"
            captionClassName="not-italic text-center"
          />
        </div>

        <p className="font-body font-semibold text-ink">Stress Test</p>
        <p className="text-ink-soft">
          TFT ships in more than a dozen languages, so I checked the frame against real
          localization strings, not just the English copy. Testing the same augment across
          English, Chinese, Irish, Russian, Arabic, German, and Lithuanian confirmed the text
          block could flex to very different line lengths and scripts, including right-to-left
          text, without breaking the frame&rsquo;s proportions.
        </p>
        <FullBleed>
          <StressTestCarousel />
        </FullBleed>

        <p className="font-body font-semibold text-ink">In the Game</p>
        <p className="text-ink-soft">
          To check how the frame would actually hold up in play, I mocked up the augment choice
          screen inside a live match environment, checking legibility, color contrast, and scale
          against real gameplay rather than an isolated card.
        </p>
        <FullBleed>
          <figure className="flex w-full flex-col gap-2">
            <img
              src={`${basePath}/images/work/mythweave-in-game-preview.png`}
              alt="Mythweave augment choice screen mocked up inside a live Teamfight Tactics match, showing the Baron's Lair, Flexible, and Belt Overflow augment cards"
              className="h-auto w-full"
            />
            <figcaption className="px-6 font-body text-sm italic tracking-normal text-ink-soft sm:px-10 lg:px-16">
              In-game mockup: the Mythweave augment choice screen during a match.
            </figcaption>
          </figure>
        </FullBleed>
      </Section>

      {/* Reflection */}
      <Section id="reflection" eyebrow="Reflection" title="What I'd Carry Forward">
        <Accordion
          className="flex w-full flex-col divide-y divide-line"
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <AccordionItem value="reference" className="py-4">
            <AccordionTrigger className="w-full text-left">
              <div className="flex items-center justify-between gap-4">
                <p className="font-body font-semibold text-ink">
                  Designing with reference, not from it
                </p>
                <AccordionChevron className="h-4 w-4 shrink-0 text-ink-soft" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-ink-soft">
                Pulling from three skin lines at once was useful for understanding what a
                finished frame needs to do, but the harder part was making Mythweave&rsquo;s
                version feel like its own thing rather than a collage of its influences.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="iteration" className="py-4">
            <AccordionTrigger className="w-full text-left">
              <div className="flex items-center justify-between gap-4">
                <p className="font-body font-semibold text-ink">
                  Small border details carry a lot of weight
                </p>
                <AccordionChevron className="h-4 w-4 shrink-0 text-ink-soft" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-ink-soft">
                The difference between the two frame versions comes down to a handful of small
                decisions: scallop shape, gem cut, how much space the crest takes up. Those are
                exactly the details that decide whether a card frame reads as finished or still
                in progress.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="proportion" className="py-4">
            <AccordionTrigger className="w-full text-left">
              <div className="flex items-center justify-between gap-4">
                <p className="font-body font-semibold text-ink">
                  Leave the text more room than the proportions demand
                </p>
                <AccordionChevron className="h-4 w-4 shrink-0 text-ink-soft" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-ink-soft">
                Holding to the one-third icon and two-thirds text split kept the card reading as a
                TFT augment, but the text box is where that cost me. Longer augment copy fills the
                box almost edge to edge, and the localized versions have even less slack. Next
                time I would give the text more breathing room from the start and let the icon
                give up part of its third, rather than treating the ratio as fixed.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      <NextProjectLink project={nextProject} />
    </article>
  );
}

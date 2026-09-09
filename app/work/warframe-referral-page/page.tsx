import type { Metadata } from "next";
import { FullBleed } from "@/components/shared/FullBleed";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { basePath } from "@/lib/basePath";
import { NextProjectLink } from "@/components/work/case-study/NextProjectLink";
import { RollingNumber } from "@/components/work/case-study/RollingNumber";
import { CaseStudyHero } from "@/components/work/case-study/CaseStudyHero";
import { CaseStudySectionToolbar } from "@/components/work/case-study/CaseStudySectionToolbar";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionChevron,
} from "@/components/core/accordion";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Warframe Referral Page — Kaitlyn Duan",
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

const FINAL_MOCKUPS = [
  {
    src: `${basePath}/images/work/warframe-final-desktop.png`,
    alt: "The shipped referral page on a laptop, showing the Linking Accounts section with in-game and account management instructions side by side",
  },
  {
    src: `${basePath}/images/work/warframe-final-mobile.png`,
    alt: "The shipped referral page on a phone, showing the Warframe hero art, the Refer A Friend lockup, and the login call to action",
  },
  {
    src: `${basePath}/images/work/warframe-final-desktop-2.png`,
    alt: "The Recruiter Rewards section on a laptop, with the Recruit 1 Tenno bundle and the items it contains",
  },
  {
    src: `${basePath}/images/work/warframe-final-mobile-2.png`,
    alt: "The Recruit Rewards section on a phone, listing the seven day affinity booster and classic color palette a new signup receives",
  },
  {
    src: `${basePath}/images/work/warframe-final-desktop-3.png`,
    alt: "The Even More Rewards section on a laptop, showing the clan rewards ring and the bonus platinum block",
  },
  {
    src: `${basePath}/images/work/warframe-final-mobile-3.png`,
    alt: "The Recruiter Rewards section on a phone, with the Recruit 1 Tenno bundle stacked above its item list",
  },
];

function FinalMockupCarousel() {
  const track = [...FINAL_MOCKUPS, ...FINAL_MOCKUPS];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee items-end gap-8 py-4">
        {track.map((mockup, index) => (
          <img
            key={`${mockup.src}-${index}`}
            src={mockup.src}
            alt={index < FINAL_MOCKUPS.length ? mockup.alt : ""}
            aria-hidden={index >= FINAL_MOCKUPS.length}
            className="h-72 w-auto shrink-0 sm:h-96 lg:h-[26rem]"
          />
        ))}
      </div>
    </div>
  );
}

const SECTION_LINKS = [
  { id: "overview", label: "Overview" },
  { id: "role", label: "Role" },
  { id: "process", label: "Process" },
  { id: "result", label: "Result" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
];

export default function WarframeReferralPageCaseStudy() {
  return (
    <article className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 pb-16 pt-8 sm:pb-24 sm:pt-10">
      <CaseStudySectionToolbar sections={SECTION_LINKS} />

      {/* Hero */}
      <ScrollReveal className="flex flex-col gap-8">
        <FullBleed>
          <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16">
            <CaseStudyHero
              title="Warframe Referral Page"
              timeframe="Digital Extremes, 2026"
              role="UI Designer"
              duration="Professional Project"
              durationLabel="Project Type"
              software="Figma"
            />
          </div>
        </FullBleed>

        <FullBleed>
          <img
            src={`${basePath}/images/work/warframe-hero.png`}
            alt="The redesigned Warframe referral page, showing the invite flow and reward tracking"
            className="h-auto w-full"
          />
        </FullBleed>
      </ScrollReveal>

      {/* Overview */}
      <Section id="overview" eyebrow="Context" title="Project Overview">
        <p className="text-lg text-ink-soft">
          At Digital Extremes, I redesigned the referral program page for Warframe: the flow
          players use to invite friends and track the rewards they earn for it. The existing page
          buried the program under generic marketing copy, so most players never found it, let
          alone used it.
        </p>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[2fr_3fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-3xl bg-paper p-6 shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
              <p className="text-ink-soft">
                The old referral page read like a marketing landing page: a wall of promotional
                copy with the actual referral link and reward tiers pushed far down the page.
                Players couldn&rsquo;t tell at a glance what they earned, how far along a referred
                friend was, or what to do next. The program went largely unused despite being one
                of the game&rsquo;s strongest growth levers.
              </p>
              <p className="border-l-2 border-accent-electric pl-4 font-display text-xl uppercase leading-snug tracking-tight text-ink">
                How might we turn a page players scroll past into a clear, actionable hub that
                shows them their referral link, their rewards, and their progress at a glance?
              </p>
            </div>
          </div>
          <figure className="relative flex w-full flex-col gap-3 overflow-visible">
            <div className="w-full overflow-hidden rounded-xl border border-line/20">
              <img
                src={`${basePath}/images/work/warframe-legacy.png`}
                alt="The old Warframe referral page, with long marketing copy pushing the referral link and reward tiers below the fold"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="font-body text-sm italic tracking-normal text-ink-soft">
              Old website
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* My Role */}
      <Section id="role" eyebrow="Context" title="My Role">
        <p className="w-full text-lg text-ink-soft">
          I was the only designer on this project and owned it end to end: framing the problem,
          wireframing the flow through four passes, designing the visual system and building it
          out as components, prototyping the interactions, and carrying it through stakeholder
          review to the version that shipped on warframe.com.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              src: `${basePath}/images/work/warframe-referral-link.png`,
              alt: "The referral code component: a single gold call-to-action button prompting players to log in to get their referral code",
              caption: "Referral link component",
            },
            {
              src: `${basePath}/images/work/warframe-rewards-tracker.png`,
              alt: "A reward tier card for recruiting two Tenno, showing the weapon art and the two weapon slots it unlocks",
              caption: "Rewards tracker",
            },
            {
              src: `${basePath}/images/work/warframe-page-layout.png`,
              alt: "The full referral page layout in greyscale, from the recruit header through reward tiers to the FAQ",
              caption: "Page layout",
            },
          ].map((item) => (
            <figure
              key={item.caption}
              className="flex flex-col overflow-hidden rounded-3xl bg-[#0f0f0f] shadow-[0_12px_28px_rgba(0,0,0,0.16)]"
            >
              <img src={item.src} alt={item.alt} className="h-auto w-full" />
              <figcaption className="flex justify-center px-4 py-4">
                <span className="rounded-full bg-white px-4 py-1.5 text-sm text-ink shadow-sm">
                  {item.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" eyebrow="Process" title="Designing the Flow">
        <p className="text-ink-soft">
          The page went through four wireframe passes. Across them the referral code moved up the
          page, the reward tiers gained room to say what they actually give, and the marketing
          copy that had buried the program kept getting cut. By the final pass the tier cards size
          to their content, so reward copy can change without breaking the layout, and the angled
          chevron bands carry the game&rsquo;s motif into the section transitions at the
          team&rsquo;s request.
        </p>
        <FullBleed className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-0">
          {[
            {
              src: `${basePath}/images/work/warframe-wireframe-v1.png`,
              alt: "First wireframe pass of the Warframe referral page: a marketing style hero with a log in button, two blocks of explanatory copy, then instant rewards, recruiter benefit tiers, and an FAQ",
              caption: "Pass 1",
            },
            {
              src: `${basePath}/images/work/warframe-wireframe-v2.png`,
              alt: "Second wireframe pass: the referral code field moved directly under the hero, followed by instant reward cards, a Get Loot tier row, and alternating text and image blocks",
              caption: "Pass 2",
            },
            {
              src: `${basePath}/images/work/warframe-wireframe-v3.png`,
              alt: "Third wireframe pass: a two column layout pairing the referral code with a list of what signups receive, and the first reward tier promoted to a wider feature card above the other three",
              caption: "Pass 3",
            },
            {
              src: `${basePath}/images/work/warframe-wireframe-final.png`,
              alt: "Final wireframe: a centered hero explaining the program, the referral code as a standalone banner beneath it, the Get Loot tiers, extra rewards with clan calls to action, and the FAQ",
              caption: "Final",
            },
          ].map((item) => (
            <figure key={item.src} className="flex flex-col gap-3">
              <figcaption className="text-center font-body text-sm tracking-normal text-ink-soft">
                {item.caption}
              </figcaption>
              <div className="relative aspect-[1/2] overflow-hidden border border-b-0 border-line/20 bg-white">
                <img src={item.src} alt={item.alt} className="w-full" loading="lazy" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-paper/0 via-paper/60 to-paper" />
              </div>
            </figure>
          ))}
        </FullBleed>

        {/* Lo-fi pass 1: asset left, copy top-right */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4 lg:order-2 lg:mt-[100px]">
            <h3 className="font-body font-semibold text-ink">First Visual Pass</h3>
            <p className="text-ink-soft">
              The first pass with real assets in. Warframe&rsquo;s own art and color turned the
              greyscale structure into something stakeholders could react to, and that is where
              the substantive feedback came in: which rewards needed more prominence, and how
              closely the section transitions should echo the in-game UI.
            </p>
          </div>
          <div className="relative lg:order-1">
            <figure className="aspect-[1920/4048] overflow-hidden border border-line/20 bg-white">
              <img
                src={`${basePath}/images/work/warframe-lofi-1.png`}
                alt="First visual pass of the referral page with real Warframe art in place: a hero of three Warframes behind the recruit headline, the referral code in a red banner, and reward tiers rendered with in-game item art"
                className="w-full"
                loading="lazy"
              />
            </figure>
            <img
              src={`${basePath}/images/work/warframe-component-recruit-4.png`}
              alt="The Recruit 4 Tenno reward card component, showing the Archwing weapon slots and Gravimag it unlocks"
              className="pointer-events-none absolute -bottom-32 -left-24 hidden w-[208px] rounded-xl shadow-[0_12px_28px_rgba(0,0,0,0.16)] xl:block"
              loading="lazy"
            />
          </div>
        </div>

        {/* Lo-fi pass 2: copy left, asset right, pulled up to overlap the pass above */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4 lg:mt-[180px]">
            <h3 className="font-body font-semibold text-ink">Motion and Components</h3>
            <p className="text-ink-soft">
              From there I built the page as components rather than flat frames, so the reward
              tiers, code banner, and section dividers could be restyled in one place. I added
              motion and prototyped the interactions here, which is where the behaviour in the
              final design was worked out.
            </p>
          </div>
          <div className="relative lg:-mt-[33rem]">
            <figure className="aspect-[1920/4048] overflow-hidden border border-line/20 bg-white">
              <img
                src={`${basePath}/images/work/warframe-lofi-2.png`}
                alt="Second visual pass: the signup rewards restyled as three centered icon columns, decorative bracket ornaments on the Even More Rewards heading, and refined section transitions"
                className="w-full"
                loading="lazy"
              />
            </figure>
            <img
              src={`${basePath}/images/work/warframe-component-clan-rewards.png`}
              alt="The clan rewards component, showing five rotating reward orbs arranged in a ring"
              className="pointer-events-none absolute -right-24 -top-36 hidden w-[224px] rounded-xl shadow-[0_12px_28px_rgba(0,0,0,0.16)] xl:block"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* Result */}
      <Section id="result" eyebrow="Result" title="Final Design">
        <p className="text-ink-soft">
          These are the final screens, currently shipped live on the Warframe website. The
          referral code now sits at the top of the page instead of below a wall of marketing
          copy, every reward tier states exactly what it gives, and the whole thing holds its
          hierarchy from desktop down to phone.
        </p>
        <a
          href="https://www.warframe.com/en/community/referral"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 border-b-2 border-accent-electric pb-1 font-body font-semibold text-ink transition-colors hover:text-accent-electric"
        >
          View the live page on warframe.com
          <span aria-hidden="true">&rarr;</span>
        </a>

        <FullBleed>
          <div className="mx-auto w-full px-6 lg:w-3/4 lg:px-0">
            <FinalMockupCarousel />
          </div>
        </FullBleed>
      </Section>

      {/* Impact */}
      <Section id="impact" eyebrow="Impact" title="What It Changed">
        <p className="text-ink-soft">
          The redesign shipped and replaced the referral page Warframe had been running. What
          changed is less that the page looks different and more that the program is usable:
          players can find their code, see what each tier actually gives, and share it from any
          device.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { value: "+23%", label: "Referral conversion" },
            { value: "-17%", label: "Funnel abandonment" },
            { value: "+31%", label: "CTA engagement" },
          ].map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <RollingNumber
                value={metric.value}
                className="font-display text-3xl text-accent-red sm:text-4xl"
              />
              <span className="font-body text-sm italic tracking-normal text-ink-soft">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              heading: "Shipped",
              copy: "Live on warframe.com as the referral program's page, replacing the one it had been running on.",
            },
            {
              heading: "Findable",
              copy: "The referral code sits under the hero rather than below a wall of marketing copy, so players reach it without hunting.",
            },
            {
              heading: "Maintainable",
              copy: "Reward tiers are components that size to their content, so the team can reword or add rewards without a redesign.",
            },
          ].map((item) => (
            <div key={item.heading} className="flex flex-col gap-2">
              <h3 className="font-body font-semibold text-ink">{item.heading}</h3>
              <p className="text-sm text-ink-soft">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Reflection */}
      <Section id="reflection" eyebrow="Reflection" title="What I'd Carry Forward">
        <Accordion
          className="flex w-full flex-col divide-y divide-line"
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {[
            {
              value: "balancing-feedback",
              title: "Balancing content, stakeholder feedback, and design decisions",
              copy: "One of the biggest challenges was balancing the amount of information stakeholders wanted to communicate with the need for a clear, focused user experience. I learned to evaluate feedback against user goals and project objectives, while still advocating for design choices that reduced complexity and improved clarity.",
            },
            {
              value: "established-system",
              title: "Working within an established visual system",
              copy: "Because the experience lived within Warframe.com, the design needed to feel distinct enough to support the referral program while still fitting naturally within the broader brand. I learned how to introduce new patterns and interactions without creating an experience that felt disconnected from the rest of the site.",
            },
            {
              value: "core-experience",
              title: "Iterating without losing the core experience",
              copy: "As the project evolved, new requirements and feedback introduced additional complexity. I learned to preserve the core user journey while adapting the design, rather than allowing each new request to gradually dilute the original experience.",
            },
          ].map((item) => (
            <AccordionItem key={item.value} value={item.value} className="py-4">
              <AccordionTrigger className="w-full text-left">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-body font-semibold text-ink">{item.title}</p>
                  <AccordionChevron className="h-4 w-4 shrink-0 text-ink-soft" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="pt-2 text-ink-soft">{item.copy}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <NextProjectLink href="/" eyebrow="Back to" label="Home" />
    </article>
  );
}

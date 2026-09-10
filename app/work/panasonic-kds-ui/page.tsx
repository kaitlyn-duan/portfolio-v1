import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/lib/data/projects";
import { PlaceholderFrame } from "@/components/shared/PlaceholderFrame";
import { FigmaEmbed } from "@/components/shared/FigmaEmbed";
import { FullBleed } from "@/components/shared/FullBleed";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { NextProjectLink } from "@/components/work/case-study/NextProjectLink";
import { CaseStudyHero } from "@/components/work/case-study/CaseStudyHero";
import { CaseStudySectionToolbar } from "@/components/work/case-study/CaseStudySectionToolbar";
import { BeforeTag } from "@/components/work/case-study/BeforeTag";
import { SolutionCarousel } from "@/components/work/case-study/SolutionCarousel";
import { ResearchMethodsDiagram } from "@/components/work/case-study/ResearchMethodsDiagram";
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
  title: "Panasonic Kitchen Display System Redesign — Kaitlyn Duan",
};

function assetVersion(publicRelativePath: string): string {
  try {
    const stat = fs.statSync(path.join(process.cwd(), "public", publicRelativePath));
    return String(stat.mtimeMs);
  } catch {
    return "0";
  }
}

function CaptionedImage({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={cn("flex flex-col gap-2", className)}>
      <img src={src} alt={alt} className="h-auto w-full rounded-xl" />
      <figcaption className="font-body text-sm italic tracking-normal text-ink-soft">
        {caption}
      </figcaption>
    </figure>
  );
}

function ConstraintList({ items, startAt = 1 }: { items: string[]; startAt?: number }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 rounded-full border border-line bg-paper py-2 pl-2 pr-5 shadow-sm"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-body text-[10px] text-paper">
            {String(startAt + index).padStart(2, "0")}
          </span>
          <span className="text-sm text-ink-soft">{item}</span>
        </div>
      ))}
    </div>
  );
}

function RoleShowcaseCard({
  image,
  alt,
  text,
}: {
  image?: string;
  alt: string;
  text: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl bg-[#3c69de] shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
      <div className="relative aspect-square overflow-hidden">
        {image ? (
          <img src={image} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center border-2 border-dashed border-paper/40"
            aria-hidden="true"
          >
            <span className="font-body text-[10px] uppercase tracking-wide text-paper/60">
              Image coming soon
            </span>
          </div>
        )}
      </div>
      <div className="flex justify-center px-4 py-4">
        <span className="rounded-full bg-white px-4 py-1.5 text-sm text-ink shadow-sm">{text}</span>
      </div>
    </div>
  );
}

function ResearchCard({
  image,
  photo,
  insightTitle,
  insight,
  implication,
}: {
  image: string;
  photo?: { src: string; alt: string };
  insightTitle: string;
  insight: string;
  implication: string;
}) {
  return (
    <div className="group relative h-[420px] overflow-hidden rounded-3xl bg-paper shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
      {photo ? (
        <img
          src={photo.src}
          alt={photo.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <PlaceholderFrame
          label={image}
          aspectRatio="4/3"
          className="absolute inset-0 h-full w-full rounded-none border-0"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 rounded-3xl bg-paper p-5">
        <div>
          <span className="font-body text-sm italic tracking-normal text-accent-electric">
            {insightTitle}
          </span>
          <p className="text-sm text-ink">{insight}</p>
        </div>
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="pt-1">
              <span className="font-body text-sm italic tracking-normal text-ink-soft">
                Design Implication
              </span>
              <p className="text-sm text-ink-soft">{implication}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type NoteSource = "Shadowing" | "Interview" | "Support tickets" | "Competitor audit";
type StatTone = "electric" | "amber" | "ink" | "red";

const STAT_TONE_STYLES: Record<
  StatTone,
  { bg: string; text: string; sub: string; bar: string; barActive: string; tag: string }
> = {
  electric: {
    bg: "bg-accent-electric",
    text: "text-paper",
    sub: "text-paper/70",
    bar: "bg-paper/25",
    barActive: "bg-paper/70",
    tag: "border-paper/40 text-paper/90",
  },
  red: {
    bg: "bg-accent-red",
    text: "text-paper",
    sub: "text-paper/70",
    bar: "bg-paper/25",
    barActive: "bg-paper/70",
    tag: "border-paper/40 text-paper/90",
  },
  amber: {
    bg: "bg-[#d97706]",
    text: "text-paper",
    sub: "text-paper/75",
    bar: "bg-paper/25",
    barActive: "bg-paper/70",
    tag: "border-paper/40 text-paper/90",
  },
  ink: {
    bg: "bg-ink",
    text: "text-paper",
    sub: "text-paper/60",
    bar: "bg-paper/20",
    barActive: "bg-paper/65",
    tag: "border-paper/30 text-paper/80",
  },
};

function MiniBarChart({
  bars,
  barClassName,
  barActiveClassName,
}: {
  bars: { height: number; active?: boolean }[];
  barClassName: string;
  barActiveClassName: string;
}) {
  return (
    <div className="flex h-14 items-end gap-1.5" aria-hidden="true">
      {bars.map((bar, index) => (
        <div
          key={index}
          className={cn("w-full rounded-sm", bar.active ? barActiveClassName : barClassName)}
          style={{ height: `${bar.height}%` }}
        />
      ))}
    </div>
  );
}

function StatCard({
  eyebrow,
  stat,
  copy,
  tone,
  bars,
  notes,
}: {
  eyebrow: string;
  stat: string;
  copy: string;
  tone: StatTone;
  bars: { height: number; active?: boolean }[];
  notes: { text: string; source: NoteSource }[];
}) {
  const t = STAT_TONE_STYLES[tone];
  return (
    <div
      className={cn(
        "group relative flex min-h-[360px] flex-col gap-5 overflow-hidden rounded-3xl p-6 shadow-[0_12px_28px_rgba(0,0,0,0.16)]",
        t.bg,
      )}
    >
      <span className={cn("font-body text-sm italic tracking-normal", t.sub)}>{eyebrow}</span>
      <span className={cn("font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl", t.text)}>
        {stat}
      </span>
      <p className={cn("text-sm", t.sub)}>{copy}</p>
      <MiniBarChart bars={bars} barClassName={t.bar} barActiveClassName={t.barActive} />
      <span
        className={cn(
          "w-fit rounded-full border px-3 py-1 font-body text-[10px] uppercase tracking-wide",
          t.tag,
        )}
      >
        Hover {notes.length} notes
      </span>

      <div
        className={cn(
          "absolute inset-0 flex translate-y-2 flex-col gap-3 p-6 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100",
          t.bg,
        )}
      >
        <span className={cn("font-body text-sm italic tracking-normal", t.sub)}>What we saw</span>
        <div className="flex flex-col gap-2 overflow-y-auto">
          {notes.map((note, index) => (
            <div
              key={index}
              className="rounded-lg border border-paper/25 bg-paper/10 px-3 py-2"
            >
              <span className={cn("block font-body text-[9px] uppercase tracking-wide", t.sub)}>
                {note.source}
              </span>
              <span className={cn("text-xs", t.text)}>{note.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  tone = "paper",
  wide = false,
  hideHeader = false,
  className,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  tone?: "paper" | "electric";
  wide?: boolean;
  hideHeader?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <ScrollReveal id={id} className={cn("flex flex-col gap-10 scroll-mt-32", className)}>
      {hideHeader ? null : (
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span
              className={cn(
                "font-body text-sm italic tracking-normal",
                tone === "electric" ? "text-paper/70" : "text-accent-electric",
              )}
            >
              {eyebrow}
            </span>
            <h2
              className={cn(
                "font-display text-4xl uppercase tracking-tight sm:text-5xl",
                tone === "electric" ? "text-paper" : "text-ink",
              )}
            >
              {title}
            </h2>
          </div>
        </div>
      )}
      {children}
    </ScrollReveal>
  );

  if (tone === "electric") {
    return (
      <FullBleed className="bg-accent-electric">
        <div className={cn("mx-auto w-full px-6 py-16 sm:py-20", wide ? "max-w-7xl" : "max-w-5xl")}>
          {inner}
        </div>
      </FullBleed>
    );
  }

  return inner;
}

const SECTION_LINKS = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "process", label: "Process" },
  { id: "solution", label: "Solution" },
  { id: "showcase", label: "Showcase" },
  { id: "reflection", label: "Reflection" },
];

export default function PanasonicKdsCaseStudy() {
  const nextProject = getProjectBySlug("mythweave");
  const flowerVersion = assetVersion("images/work/flower.png");
  const fixedLayoutVersion = assetVersion("images/work/research-fixed-layout.png");
  const ticketHierarchyVersion = assetVersion("images/work/role-ticket-hierarchy.png");
  const orderCardsVersion = assetVersion("images/work/role-order-cards.png");
  const alertStatesVersion = assetVersion("images/work/role-alert-states.png");
  const flowChartVersion = assetVersion("images/work/flow-chart.png");
  const wireframeVersion = assetVersion("images/work/wireframe-full-grid.png");
  const cardIterationsVersion = assetVersion("images/work/card-iterations.png");
  const boardIterationsVersion = assetVersion("images/work/kds-board-iterations.png");
  const researchFindingsBgVersion = assetVersion("images/work/research-findings-bg.jpg");
  const solutionConfigurableVersion = assetVersion("images/work/solution-configurable-templates.png");
  const solutionAlertStatesVersion = assetVersion("images/work/solution-alert-states.png");
  const solutionTicketHierarchyVersion = assetVersion("images/work/solution-ticket-hierarchy.png");

  return (
    <article className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 pb-16 pt-8 sm:pb-24 sm:pt-10">
      <CaseStudySectionToolbar sections={SECTION_LINKS} />

      {/* 1. Hero / Project Snapshot */}
      <ScrollReveal className="flex flex-col gap-8">
        <FullBleed>
          <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16">
            <CaseStudyHero
              title="Kitchen Display System Redesign"
              timeframe="Panasonic, 2025"
              role="Product Designer"
              duration="4 Months"
              teamSize="5 People"
              images={[
                {
                  src: `${basePath}/images/work/panasonic-hero-display-board.png`,
                  alt: "Configurable kitchen display board showing order-ready menu screens",
                },
                {
                  src: `${basePath}/images/work/panasonic-hero-research-notes.png`,
                  alt: "Sticky-note research board mapping ticket hierarchy and configuration ideas",
                },
              ]}
            />
          </div>
        </FullBleed>

        <FullBleed>
          <div className="relative aspect-[1920/918] w-full overflow-hidden">
            <img
              src={`${basePath}/images/work/panasonic-hero.png`}
              alt="Panasonic kitchen display system: order-ready views, ticket grid, and configuration screens"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </FullBleed>
      </ScrollReveal>

      {/* 2. Context + Challenge */}
      <Section id="overview" eyebrow="Context" title="Project Overview">
        <p className="text-lg text-ink-soft">
          Redesigned a configurable B2B kitchen display platform&rsquo;s order flow, card system,
          and alert states, replacing a rigid, non-customizable interface with one restaurant
          brands could configure to their own layout, theme, and workflow.
        </p>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[2fr_3fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-3xl bg-paper p-6 shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
              <p className="text-ink-soft">
                The existing kitchen display system used a single fixed layout that couldn&rsquo;t
                be adapted per restaurant, store, or workflow, which became a problem as the
                platform expanded to serve multiple brands with different card styles, color
                themes, and station setups. The interface was also dated and difficult for
                kitchen staff to parse quickly under pressure.
              </p>
              <p className="border-l-2 border-accent-electric pl-4 font-display text-xl uppercase leading-snug tracking-tight text-ink">
                How might we give kitchen staff a display that surfaces urgency and order details
                instantly, while letting each restaurant brand configure it to fit their own
                kitchen?
              </p>
            </div>
            <img
              src={`${basePath}/images/work/flower.png?v=${flowerVersion}`}
              alt=""
              aria-hidden="true"
              className="h-auto w-full"
            />
          </div>
          <div className="relative w-full overflow-visible">
            <BeforeTag className="pointer-events-none absolute -top-[75px] right-10 hidden w-[72px] sm:block" />
            <div className="w-full overflow-hidden rounded-xl border border-line/20">
              <img
                src={`${basePath}/images/work/panasonic-legacy.png`}
                alt="The old Panasonic kitchen display system: a single fixed dark-theme layout with no per-brand customization"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 3. My Role + Constraints */}
      <Section id="role" eyebrow="Context" title="My Role & Constraints">
        <div className="flex flex-col gap-3">
          <span className="font-body text-sm italic tracking-normal text-ink-soft">
            What I owned
          </span>
          <FullBleed>
            <div className="mx-auto w-full max-w-[69rem] px-6 sm:px-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <RoleShowcaseCard
                  image={`${basePath}/images/work/role-ticket-hierarchy.png?v=${ticketHierarchyVersion}`}
                  alt="A kitchen ticket card showing order number, timer, guest name, and grouped items with a combo callout"
                  text="Ticket information hierarchy"
                />
                <RoleShowcaseCard
                  image={`${basePath}/images/work/role-order-cards.png?v=${orderCardsVersion}`}
                  alt="A board of order cards across drive-thru and dine-in lanes, each showing status, timer, and items"
                  text="Kitchen display system flow"
                />
                <RoleShowcaseCard
                  image={`${basePath}/images/work/role-alert-states.png?v=${alertStatesVersion}`}
                  alt="Color-coded alert states: green for ready, yellow for warning, red for overdue, gray for in progress"
                  text="Alert-state design"
                />
              </div>
            </div>
          </FullBleed>
          <p className="font-body text-sm italic tracking-normal text-ink-soft">
            Work split: I owned everything above. My co-designer owned the login screen and the
            table (system) view.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-body text-sm italic tracking-normal text-ink-soft">
            Design constraints
          </span>
          <ConstraintList
            items={[
              "Touch-enabled display, TV-mounted in a working kitchen",
              "Needed to support per-brand customization, not a one-size-fits-all layout",
              "Client had an existing visual design guideline and required functionality we had to design within",
            ]}
          />
          <span className="pt-2 font-body text-sm italic tracking-normal text-ink-soft">
            Engineering / dev constraints
          </span>
          <ConstraintList
            startAt={4}
            items={[
              "Real-time order sync over unreliable in-store Wi-Fi, without losing or duplicating orders",
              "Built on the existing POS/ticketing API, so no backend data model changes",
              "Per-brand theming had to be config-driven (JSON), not per-brand code forks",
            ]}
          />
        </div>
      </Section>

      {/* 4. Understanding the Problem */}
      <Section id="research" eyebrow="Research" title="Understanding the Problem" wide>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <ResearchCard
            image="Fixed layout, every brand the same"
            photo={{
              src: `${basePath}/images/work/research-fixed-layout.png?v=${fixedLayoutVersion}`,
              alt: "The old kitchen display system mounted in a working kitchen, showing the same fixed layout regardless of brand",
            }}
            insightTitle="One layout for every brand"
            insight="Every restaurant saw the same fixed layout, no matter their kitchen's needs."
            implication="Designed a template configuration system letting admins set color scheme, logo, grid layout, card count, and header structure per brand, with a live preview."
          />
          <ResearchCard
            image="Urgency read from across the kitchen"
            photo={{
              src: `${basePath}/images/work/research-kitchen-staff.png`,
              alt: "A kitchen staff member assembling an order at the prep station",
            }}
            insightTitle="Urgency at a glance"
            insight="Staff needed to spot urgency (new, rush, special instruction, running late) from across the kitchen."
            implication="Designed distinct alert states using color and status badges rather than relying on text alone, so urgency reads instantly without close reading."
          />
          <ResearchCard
            image="Ticket hierarchy observations"
            photo={{
              src: `${basePath}/images/work/research-urgency-kitchen.png`,
              alt: "A kitchen staff member reaching up to read and tap the display mounted above their station",
            }}
            insightTitle="Too much to fit"
            insight="Readability came down to what appeared first, with a lot of information competing for one card."
            implication="Made deliberate hierarchy calls on ticket structure: what sits at the top (order #, time, status), and what order items/modifiers appear in."
          />
        </div>
        <div className="flex flex-col gap-4 pt-2">
          <p className="text-ink-soft">
            Research combined direct observation with staff interviews, since the biggest risks
            were things staff wouldn&rsquo;t think to mention unprompted, like reading a display
            from six feet away with wet gloves on.
          </p>
          <div className="flex flex-col gap-6">
            <ResearchMethodsDiagram />
          </div>
        </div>
      </Section>

      <FullBleed id="findings" className="scroll-mt-32 overflow-hidden border-y border-line">
        <img
          src={`${basePath}/images/work/research-findings-bg.jpg?v=${researchFindingsBgVersion}`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" aria-hidden="true" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16 sm:py-20">
          <div className="flex flex-col gap-2">
            <span className="font-body text-sm italic tracking-normal text-paper/70">
              Research
            </span>
            <h3 className="font-display text-2xl uppercase tracking-tight text-paper sm:text-3xl">
              What we found
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <StatCard
              eyebrow="Brand flexibility"
              stat="0 of 6"
              copy="brands shadowed could customize layout, color, or branding on the old system."
              tone="red"
              bars={[{ height: 60 }, { height: 60 }, { height: 60 }, { height: 60 }, { height: 60 }, { height: 60 }]}
              notes={[
                { text: "Every store used the identical grid, no matter their menu size", source: "Shadowing" },
                { text: "Managers wanted their own logo and colors on screen", source: "Interview" },
                { text: "Recurring request: “can we change the layout?”", source: "Support tickets" },
                { text: "Competing platforms support per-tenant theming", source: "Competitor audit" },
              ]}
            />
            <StatCard
              eyebrow="Missed urgency"
              stat="1 in 3"
              copy="rush tickets were caught late or missed entirely during shadowing sessions."
              tone="amber"
              bars={[
                { height: 75 },
                { height: 75 },
                { height: 35, active: true },
                { height: 75 },
                { height: 75 },
                { height: 35, active: true },
              ]}
              notes={[
                { text: "Staff read timers from six feet away, not up close", source: "Shadowing" },
                { text: "“My cooks need color, not more text.”", source: "Interview" },
                { text: "Rush orders were missed until someone called them out", source: "Shadowing" },
                { text: "Competitors lean on color-coded status, not labels", source: "Competitor audit" },
              ]}
            />
            <StatCard
              eyebrow="Ticket overflow"
              stat="42%"
              copy="of tickets observed had modifier text that wrapped, cut off, or needed scrolling."
              tone="ink"
              bars={[
                { height: 40 },
                { height: 85, active: true },
                { height: 40 },
                { height: 40 },
                { height: 85, active: true },
                { height: 40 },
                { height: 85, active: true },
              ]}
              notes={[
                { text: "Long modifier lists got cut off or wrapped awkwardly", source: "Shadowing" },
                { text: "Recurring complaint: “ticket info is confusing.”", source: "Support tickets" },
                { text: "Managers wanted order #, time, and status visible first", source: "Interview" },
                { text: "Competitors reserve the top of the card for essentials", source: "Competitor audit" },
              ]}
            />
          </div>
        </div>
      </FullBleed>

      {/* 5. Exploration + Key Decisions */}
      <Section id="process" eyebrow="Process" title="Exploration & Key Decisions">
        <FullBleed className="-mt-6 bg-paper">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-6 pb-14 sm:gap-16 sm:pb-16">
            <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
              <CaptionedImage
                src={`${basePath}/images/work/flow-chart.png?v=${flowChartVersion}`}
                alt="KDS flow chart: primary user flow, legend, timer and urgency logic, rush order priority, and key experience goals"
                caption="Primary flow chart"
                className="lg:w-3/5"
              />
              <div className="flex flex-col gap-4 lg:w-2/5">
                <p className="font-body font-semibold text-ink">Flows and wireframes</p>
                <p className="text-ink-soft">
                  Mapping how an order moves through the kitchen &mdash; from intake to handoff,
                  plus the timer logic driving urgency &mdash; shaped the wireframes and card
                  iterations that followed.
                </p>
              </div>
            </div>

            <CaptionedImage
              src={`${basePath}/images/work/wireframe-full-grid.png?v=${wireframeVersion}`}
              alt="Early wireframe comparing a fixed grid layout against a flexible flow layout, with notes on the card-state fields each ticket needed to carry: order number, items, name, priority, and type"
              caption="Grid vs. flow wireframes"
              className="w-full"
            />

            <div className="flex w-full flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="font-body font-semibold text-ink">Iterations</p>
                <p className="text-ink-soft sm:max-w-[50%]">
                  The ticket card and order board each went through several rounds, refining
                  hierarchy, timers, and legibility from across a working kitchen. Early passes
                  tried to surface every signal from the flow chart&rsquo;s timer and priority
                  logic directly on the card, then pared back to just what staff could read at a
                  glance.
                </p>
              </div>
              <img
                src={`${basePath}/images/work/card-iterations.png?v=${cardIterationsVersion}`}
                alt="Three card iterations side by side: an early light-theme card with a status badge and item list, a refined version with a timestamp row, and a final dark-theme card with a highlighted status, guest name, and Continue affordance"
                width={1411}
                height={343}
                className="mx-auto h-auto max-w-full rounded-xl"
              />
            </div>

            <img
              src={`${basePath}/images/work/kds-board-iterations.png?v=${boardIterationsVersion}`}
              alt="Three iterations of the kitchen order board layout, labeled Iteration 1 through Iteration 3"
              width={1445}
              height={400}
              className="mx-auto h-auto max-w-full"
            />
          </div>
        </FullBleed>
      </Section>

      {/* 6. The Solution */}
      <Section id="solution" eyebrow="Solution" title="The Solution">
        <FullBleed>
          <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10">
            <SolutionCarousel
              slides={[
                {
                  heading: "Configurable card & view templates",
                  copy: "Built a template system so admins can set color theme, logo, grid layout, card count, and header structure per restaurant brand, with a live preview before saving.",
                  image: `${basePath}/images/work/solution-configurable-templates.png?v=${solutionConfigurableVersion}`,
                  imageAlt: "The template configuration tool showing a live card preview alongside color, header, and layout settings",
                },
                {
                  heading: "Alert states that read at a glance",
                  copy: "Designed distinct visual treatments for new orders, rush orders, special instructions, and rushed items, using color and badges so urgency doesn't require reading item text.",
                  image: `${basePath}/images/work/solution-alert-states.png?v=${solutionAlertStatesVersion}`,
                  imageAlt: "Four ticket cards showing alert states: prepared, approaching threshold, attention required, and overdue",
                },
                {
                  heading: "Ticket information hierarchy",
                  copy: "Defined what appears at the top of a ticket and the order items display in, prioritizing what kitchen staff need first.",
                  image: `${basePath}/images/work/solution-ticket-hierarchy.png?v=${solutionTicketHierarchyVersion}`,
                  imageAlt: "An annotated ticket card labeling the order number, timer, status, guest header, items, and footer icons",
                },
              ]}
            />
          </div>
        </FullBleed>
      </Section>

      {/* 7. Prototype Showcase */}
      <Section id="showcase" eyebrow="Showcase" title="See the Screens">
        <p className="w-full text-ink-soft">
          Below is the shipped kitchen display, screen by screen. I designed and built every
          view in this walkthrough myself: the order board, the ticket states, and the template
          configuration tool.
        </p>
        <FigmaEmbed
          url="https://www.figma.com/proto/O7Q0as20B8oAgPGwn5StyS/PANASONIC?node-id=1407-26889&viewport=-1131%2C-370%2C0.21&t=lzOZfEODLnon3CeW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1407%3A26889&show-proto-sidebar=1&page-id=280%3A7683"
          title="Panasonic KDS screen showcase"
          aspectRatio="16/9"
        />
      </Section>

      {/* 9. Reflection */}
      <Section id="reflection" eyebrow="Reflection" title="What I'd Carry Forward">
        <Accordion
          className="flex w-full flex-col divide-y divide-line"
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <AccordionItem value="simplicity" className="py-4">
            <AccordionTrigger className="w-full text-left">
              <div className="flex items-center justify-between gap-4">
                <p className="font-body font-semibold text-ink">
                  Balancing configurability with simplicity
                </p>
                <AccordionChevron className="h-4 w-4 shrink-0 text-ink-soft" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-ink-soft">
                Making a highly configurable template system feel simple for non-technical
                restaurant admins turned out to be harder than designing the flexibility itself.
                Progressive disclosure ended up being the key: only surfacing the settings
                relevant to the task at hand kept the configuration flow approachable without
                cutting what brands could actually customize.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="alignment" className="py-4">
            <AccordionTrigger className="w-full text-left">
              <div className="flex items-center justify-between gap-4">
                <p className="font-body font-semibold text-ink">
                  Aligning across a cross-functional team
                </p>
                <AccordionChevron className="h-4 w-4 shrink-0 text-ink-soft" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-ink-soft">
                Every design decision had to hold up against real engineering constraints, like
                unreliable in-store Wi-Fi and a fixed POS data model, on top of
                Panasonic&rsquo;s existing visual guidelines. Regular syncs with engineering and
                the PM, backed by clear before/after documentation, kept the whole team moving
                in the same direction instead of relitigating decisions late.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="kitchen" className="py-4">
            <AccordionTrigger className="w-full text-left">
              <div className="flex items-center justify-between gap-4">
                <p className="font-body font-semibold text-ink">
                  Writing research questions broad enough to be surprised
                </p>
                <AccordionChevron className="h-4 w-4 shrink-0 text-ink-soft" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-ink-soft">
                The findings that mattered most weren&rsquo;t answers to questions I&rsquo;d
                planned to ask. They were things staff mentioned in passing while I was just
                watching them work. Leading with open, observational prompts instead of narrow
                ones like &ldquo;is this readable?&rdquo; is what surfaced details like reading a
                display from six feet away with wet gloves on, something a scripted interview
                would have missed entirely.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      <NextProjectLink project={nextProject} />
    </article>
  );
}

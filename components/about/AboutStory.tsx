import { basePath } from "@/lib/basePath";
import { HeroPhotoStack } from "@/components/work/case-study/HeroPhotoStack";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

function Beat({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-3xl font-body text-lg font-semibold text-ink">{children}</p>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <p className="max-w-3xl text-lg text-ink-soft">{children}</p>;
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-3xl font-serif-italic text-3xl italic text-accent-red sm:text-4xl">
      {children}
    </p>
  );
}

export function AboutStory() {
  return (
    <section id="story" className="relative flex scroll-mt-28 flex-col gap-10">
      {/* Framed pieces hung in the left margin. Only shown once the viewport is
          wide enough that they clear the text column. Each margin asset reveals
          on scroll like the text blocks do; the positioning lives on the reveal
          wrapper so its transform does not fight the image's own offset. */}
      <ScrollReveal className="pointer-events-none absolute left-[calc((100vw-848px)*-0.21)] top-[116px] hidden min-[1440px]:block">
        <img
          src={`${basePath}/images/about-art-clouds.png`}
          alt="A framed painting of two figures on a bench beneath a towering pink and blue cloud"
          className="w-[205px] max-w-none -translate-x-1/2"
        />
      </ScrollReveal>
      <ScrollReveal
        delay={0.08}
        className="pointer-events-none absolute left-[calc((100vw-848px)*-0.21+22.5px)] top-[289px] hidden min-[1440px]:block"
      >
        <img
          src={`${basePath}/images/about-art-vac-poster.png`}
          alt="A framed Visual Arts Council poster: an inked portrait with a hand over the face, washed in pale blue"
          className="w-[160px] max-w-none -translate-x-1/2"
        />
      </ScrollReveal>

      {/* Drawing tablet propped at the top of the right margin, kept tight to the
          text column so it reads as part of the paragraph block. */}
      <ScrollReveal className="pointer-events-none absolute left-[calc(100%+max((100vw-848px)*0.16,155px))] top-[104px] hidden min-[1500px]:block">
        <img
          src={`${basePath}/images/about-tablet.png`}
          alt="A drawing tablet with its stylus resting on the surface"
          className="w-[285px] max-w-none -translate-x-1/2 rotate-[-5deg]"
        />
      </ScrollReveal>

      {/* Bouquet in the bottom left, below the framed pieces. */}
      <ScrollReveal className="pointer-events-none absolute bottom-[-10px] left-[calc(max((100vw-848px)*0.22,170px)*-1)] hidden min-[1650px]:block">
        <img
          src={`${basePath}/images/about-flowers.png`}
          alt="A bouquet of lilies, roses and daisies tied with twine"
          className="w-[300px] max-w-none -translate-x-1/2 rotate-[-6deg]"
        />
      </ScrollReveal>

      {/* Photo stack in the right margin, hover-to-lift like the case study heroes. */}
      <ScrollReveal className="absolute left-[calc(100%+max((100vw-848px)*0.24,190px))] top-1/2 hidden min-[1650px]:block">
        <div className="-translate-x-1/2 -translate-y-1/2 scale-[1.26]">
          <HeroPhotoStack
            photos={[
              {
                src: `${basePath}/images/about-photo-sushi.jpg`,
                alt: "Holding a large tray of sushi in a car at night",
              },
              {
                src: `${basePath}/images/about-photo-ropes.jpg`,
                alt: "In a harness and helmet at an indoor ropes course",
              },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <SectionHeading eyebrow="Story" title="How I Got Here" />
      </ScrollReveal>

      <ScrollReveal className="flex flex-col gap-6">
        <Beat>I&rsquo;ve always liked making things look and feel good.</Beat>
        <Body>
          Growing up, I was into pretty much every creative thing I could get my hands on. I did
          ballet, piano, violin, traditional and digital art, plus sports like badminton,
          swimming, and figure skating.
        </Body>

        <Beat>At the same time, tech was always around me.</Beat>
        <Body>
          Most of my family works in IT, so I naturally assumed I&rsquo;d end up in software
          engineering or data. I studied math and liked the logic and problem-solving side of it.
        </Body>

        <Beat>Then my sister introduced me to design.</Beat>
        <Body>
          She started showing me cool websites and digital experiences, and I got hooked. I loved
          that design could be visual and creative, but still grounded in logic, systems, and how
          people actually use things.
        </Body>

        <Beat>It felt like I had finally found a place for both sides of me.</Beat>
        <Body>
          Design let me combine art with the way I already liked thinking about problems. What
          really keeps me interested is people, how they interact with things, what feels
          confusing, and what makes an experience just click.
        </Body>

        <Beat>Since then, I&rsquo;ve gotten to work across a few different kinds of projects.</Beat>
        <Body>
          I&rsquo;ve designed experiences for Warframe at Digital Extremes, worked at ITSP, built
          my own art business, Awowogei Arts, and now I&rsquo;m helping build Buzz Baby, an app
          for children and parents that&rsquo;s getting ready to launch.
        </Body>

        <Beat>Through all of it, I keep coming back to the same thing.</Beat>
        <Highlight>I like the space where creativity, technology, and logic overlap.</Highlight>
        <Body>
          I care a lot about storytelling, systems, and the little details that make something
          feel easy to use. I want my work to feel thoughtful without feeling complicated.
        </Body>

        <Body>
          Outside of design, I&rsquo;m usually gaming, travelling, or making something. I play
          League, Valorant, TFT, and whatever random game I&rsquo;m into that week. I also run a
          gaming YouTube channel. I also love travelling.
        </Body>

        <Beat>At the end of the day, I don&rsquo;t just want to make things that look good.</Beat>
        <Highlight>
          I want to make things that <strong className="font-semibold">feel good</strong>.
        </Highlight>
      </ScrollReveal>
    </section>
  );
}

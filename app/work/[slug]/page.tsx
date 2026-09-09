import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { CaseStudyHeader } from "@/components/work/case-study/CaseStudyHeader";
import { ProblemSection } from "@/components/work/case-study/ProblemSection";
import { ProcessSection } from "@/components/work/case-study/ProcessSection";
import { OutcomeSection } from "@/components/work/case-study/OutcomeSection";
import { NextProjectLink } from "@/components/work/case-study/NextProjectLink";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

// These slugs have their own bespoke pages under app/work/<slug>/page.tsx
const BESPOKE_SLUGS = ["panasonic-kds-ui", "mythweave", "warframe-referral-page"];
const genericTemplateSlugs = projects.filter((p) => !BESPOKE_SLUGS.includes(p.slug));

export function generateStaticParams() {
  return genericTemplateSlugs.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? `${project.title} — Kaitlyn Duan` : "Project Not Found" };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 pb-16 pt-8 sm:pb-24 sm:pt-10">
      <ScrollReveal>
        <CaseStudyHeader project={project} />
      </ScrollReveal>

      <div className="flex flex-col gap-12">
        <ScrollReveal>
          <ProblemSection text={project.problem} />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <ProcessSection text={project.process} />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <OutcomeSection text={project.outcome} />
        </ScrollReveal>
      </div>

      <NextProjectLink project={nextProject} />
    </article>
  );
}

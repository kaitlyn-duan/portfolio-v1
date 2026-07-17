import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { RecentExperienceList } from "@/components/home/RecentExperienceList";
import { ContactCta } from "@/components/home/ContactCta";
import { SketchDivider } from "@/components/shared/SketchDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SketchDivider />
      <FeaturedProjects />
      <AboutTeaser />
      <RecentExperienceList />
      <ContactCta />
    </>
  );
}

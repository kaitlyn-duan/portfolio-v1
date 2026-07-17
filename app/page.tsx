import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { RecentExperienceList } from "@/components/home/RecentExperienceList";
import { ContactCta } from "@/components/home/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutTeaser />
      <RecentExperienceList />
      <ContactCta />
    </>
  );
}

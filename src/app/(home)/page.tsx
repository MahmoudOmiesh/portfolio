import { About } from "./_components/about";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";
import { CTA } from "./_components/cta";
import { Experience } from "./_components/experience";

export default function HomePage() {
  return (
    <>
      <About />

      <Experience />

      <Projects />

      <Skills />

      <CTA />
    </>
  );
}

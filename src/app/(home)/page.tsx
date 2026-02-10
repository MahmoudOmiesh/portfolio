import { About } from "./_components/about";
import { Projects } from "./_components/projects";
import { CTA } from "./_components/cta";
import { Experience } from "./_components/experience";
import { Footer } from "~/components/footer";

export default function HomePage() {
  return (
    <>
      <About />

      <Experience />

      <Projects />

      <CTA />

      <Footer />
    </>
  );
}

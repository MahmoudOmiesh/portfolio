import { AuroraBackground } from "~/components/ui/aurora-background";
import { About } from "./_components/about";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";
import { CTA } from "./_components/cta";

export default function HomePage() {
  return (
    <div className="min-h-screen flex-1 space-y-14 pt-8 pb-24">
      <AuroraBackground className="absolute inset-x-0 top-0 -z-10 h-[80vh]" />

      <About />

      <Projects />

      <Skills />

      <CTA />
    </div>
  );
}

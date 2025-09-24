import { AuroraBackground } from "~/components/ui/aurora-background";
import { About } from "./-components/about";
import { Projects } from "./-components/projects";

export default function HomePage() {
  return (
    <div className="min-h-screen flex-1 space-y-14 py-8">
      <AuroraBackground className="absolute inset-x-0 top-0 -z-10 h-[80vh]" />

      <About />

      <Projects />
    </div>
  );
}

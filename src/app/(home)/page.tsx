import { AuroraBackground } from "~/components/ui/aurora-background";
import { About } from "./-components/about";

export default function HomePage() {
  return (
    <div className="min-h-screen flex-1 py-4">
      <AuroraBackground className="absolute inset-x-0 top-0 -z-10 h-[80vh]" />

      <About />
    </div>
  );
}

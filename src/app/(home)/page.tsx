import { AuroraBackground } from "~/components/ui/aurora-background";

export default function HomePage() {
  return (
    <div className="min-h-screen flex-1">
      <AuroraBackground className="absolute inset-x-0 top-0 h-[80vh]" />
    </div>
  );
}

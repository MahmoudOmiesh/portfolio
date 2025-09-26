import { VisualizerAbout } from "./-components/about";
import { VisualizerOverview } from "./-components/overview";
import { VisualizerCarousel } from "./-components/carousel";

export default function VisualizerPage() {
  return (
    <div className="min-h-screen flex-1 space-y-20 py-8">
      <VisualizerAbout />

      <VisualizerOverview />

      <VisualizerCarousel />
    </div>
  );
}

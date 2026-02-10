import { VisualizerAbout } from "./_components/about";
import { VisualizerOverview } from "./_components/overview";
import { VisualizerCarousel } from "./_components/carousel";
import { Footer } from "~/components/footer";

export default function VisualizerPage() {
  return (
    <>
      <VisualizerAbout />

      <VisualizerOverview />

      <VisualizerCarousel />

      <Footer />
    </>
  );
}

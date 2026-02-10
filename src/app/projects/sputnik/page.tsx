import { SputnikAbout } from "./_components/about";
import { SputnikOverview } from "./_components/overview";
import { SputnikCarousel } from "./_components/carousel";
import { SpuntikSpotlight } from "./_components/spotlight";
import { SputnikLessons } from "./_components/lessons";
import { Footer } from "~/components/footer";

export default function SputnikPage() {
  return (
    <>
      <SputnikAbout />

      <SputnikOverview />

      <SputnikCarousel />

      <SpuntikSpotlight />

      <SputnikLessons />

      <Footer />
    </>
  );
}

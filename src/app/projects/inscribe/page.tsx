import { InscribeAbout } from "./_components/about";
import { InscribeOverview } from "./_components/overview";
import { InscribeCarousel } from "./_components/carousel";
import { InscribeSpotlight } from "./_components/spotlight";
import { InscribeLessons } from "./_components/lessons";
import { Footer } from "~/components/footer";

export default function InscribePage() {
  return (
    <>
      <InscribeAbout />

      <InscribeOverview />

      <InscribeCarousel />

      <InscribeSpotlight />

      <InscribeLessons />

      <Footer />
    </>
  );
}

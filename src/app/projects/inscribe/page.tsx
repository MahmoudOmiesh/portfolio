import { InscribeAbout } from "./_components/about";
import { InscribeOverview } from "./_components/overview";
import { InscribeCarousel } from "./_components/carousel";
import { InscribeSpotlight } from "./_components/spotlight";
import { InscribeLessons } from "./_components/lessons";

import Image from "next/image";

export default function InscribePage() {
  return (
    <div className="min-h-screen flex-1 space-y-10 pt-8 pb-16 md:space-y-20">
      <InscribeAbout />

      <div className="group relative hidden aspect-[16/9] overflow-hidden rounded-sm shadow-2xl md:block dark:shadow-lg">
        <Image
          className="transition-transform group-hover:scale-107"
          src="/inscribe/landing-page.png"
          alt="Inscribe"
          fill
          priority
        />
      </div>

      <InscribeOverview />

      <InscribeCarousel />

      <InscribeSpotlight />

      <InscribeLessons />
    </div>
  );
}

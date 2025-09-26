import { InscribeAbout } from "./-components/about";
import { InscribeOverview } from "./-components/overview";
import { InscribeCarousel } from "./-components/carousel";
import { InscribeSpotlight } from "./-components/spotlight";
import { InscribeLessons } from "./-components/lessons";

import Image from "next/image";

export default function InscribePage() {
  return (
    <div className="min-h-screen flex-1 space-y-20 py-8">
      <InscribeAbout />

      <div className="group relative aspect-[16/9] overflow-hidden rounded-sm shadow-2xl dark:shadow-lg">
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

import { SputnikAbout } from "./-components/about";
import { SputnikOverview } from "./-components/overview";
import { SputnikCarousel } from "./-components/carousel";
import { SpuntikSpotlight } from "./-components/spotlight";
import { SputnikLessons } from "./-components/lessons";

import Image from "next/image";

export default function SputnikPage() {
  return (
    <div className="min-h-screen flex-1 space-y-10 pt-8 pb-16 md:space-y-20">
      <SputnikAbout />

      <div className="group relative hidden aspect-[16/9] overflow-hidden rounded-sm shadow-2xl md:block dark:shadow-lg">
        <Image
          src="/sputnik/landing-page.png"
          alt="Sputnik"
          fill
          className="transition-transform group-hover:scale-107"
        />
      </div>

      <SputnikOverview />

      <SputnikCarousel />

      <SpuntikSpotlight />

      <SputnikLessons />
    </div>
  );
}

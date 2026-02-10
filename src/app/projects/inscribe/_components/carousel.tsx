import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

import Image from "next/image";
import { Section } from "~/components/section";

const SCREENSHOTS = [
  "/inscribe/landing-page.png",
  "/inscribe/note.png",
  "/inscribe/note-favorite.png",
  "/inscribe/note-archive.png",
  "/inscribe/note-trash.png",
  "/inscribe/note-font.png",
  "/inscribe/note-search.png",
];

export function InscribeCarousel() {
  return (
    <Section>
      <h2 className="text-base font-bold tracking-tight text-slate-200 md:text-lg">
        Take a Peek
      </h2>
      <p className="text-muted-foreground mt-2 hidden text-sm md:block">
        Here are some screenshots of the project.
      </p>

      <div className="mt-8">
        <Carousel className="group w-full" opts={{ loop: true }}>
          <CarouselContent>
            {SCREENSHOTS.map((screenshot, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm border-2 border-slate-200/10 transition-colors group-hover:border-slate-200/20">
                  <Image
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    priority
                  />
                  <span className="text-muted-foreground absolute bottom-4 left-4 rounded-full bg-slate-900/60 px-2.5 py-0.5 text-xs backdrop-blur-sm">
                    {index + 1} / {SCREENSHOTS.length}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 opacity-0 transition-opacity group-hover:opacity-100" />
          <CarouselNext className="right-4 opacity-0 transition-opacity group-hover:opacity-100" />
        </Carousel>
      </div>
    </Section>
  );
}

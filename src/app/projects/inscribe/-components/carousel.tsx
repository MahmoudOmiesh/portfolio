import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

import Image from "next/image";

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
    <Card className="font-mono">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Take a Peek</CardTitle>
        <CardDescription>
          Here are some screenshots of the project.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel className="group w-full" opts={{ loop: true }}>
          <CarouselContent>
            {SCREENSHOTS.map((screenshot, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[16/9] border">
                  <Image
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    priority
                  />
                  <span className="text-muted-foreground bg-muted/40 absolute bottom-4 left-4 p-1 text-xs">
                    {index + 1} / {SCREENSHOTS.length}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100" />
          <CarouselNext className="right-4 opacity-0 group-hover:opacity-100" />
        </Carousel>
      </CardContent>
    </Card>
  );
}

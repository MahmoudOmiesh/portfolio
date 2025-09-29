"use client";

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

const VIDEOS = [
  { src: "/visualizer/bubble.mp4", name: "Bubble Sort" },
  { src: "/visualizer/selection.mp4", name: "Selection Sort" },
  { src: "/visualizer/insertion.mp4", name: "Insertion Sort" },
  { src: "/visualizer/merge.mp4", name: "Merge Sort" },
  { src: "/visualizer/quick.mp4", name: "Quick Sort" },
  { src: "/visualizer/heap.mp4", name: "Heap Sort" },
];

export function VisualizerCarousel() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl md:text-2xl">See it in Action</CardTitle>
        <CardDescription className="hidden md:block">
          Here are some examples of the app in action.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 md:px-6">
        <Carousel className="group w-full" opts={{ loop: true }}>
          <CarouselContent>
            {VIDEOS.map((video, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <video
                    src={video.src}
                    className="h-full w-full object-cover"
                    controls
                  />
                  <span className="text-foreground bg-muted/90 absolute top-2 left-2 p-1 text-xs">
                    {video.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 z-10 opacity-0 group-hover:opacity-100" />
          <CarouselNext className="right-4 opacity-0 group-hover:opacity-100" />
        </Carousel>
      </CardContent>
    </Card>
  );
}

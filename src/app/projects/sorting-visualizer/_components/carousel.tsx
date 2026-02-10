"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Section } from "~/components/section";

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
    <Section>
      <h2 className="text-base font-bold tracking-tight text-slate-200 md:text-lg">
        See it in Action
      </h2>
      <p className="text-muted-foreground mt-2 hidden text-sm md:block">
        Here are some examples of the app in action.
      </p>

      <div className="mt-8">
        <Carousel className="group w-full" opts={{ loop: true }}>
          <CarouselContent>
            {VIDEOS.map((video, index) => (
              <CarouselItem key={index}>
                <div className="relative overflow-hidden rounded-sm border-2 border-slate-200/10 transition-colors group-hover:border-slate-200/20">
                  <video
                    src={video.src}
                    className="h-full w-full object-cover"
                    controls
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300 backdrop-blur-sm">
                    {video.name}
                  </span>
                  <span className="text-muted-foreground absolute bottom-4 left-4 rounded-full bg-slate-900/60 px-2.5 py-0.5 text-xs backdrop-blur-sm">
                    {index + 1} / {VIDEOS.length}
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

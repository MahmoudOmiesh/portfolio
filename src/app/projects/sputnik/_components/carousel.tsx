import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

import Image from "next/image";
import { LockIcon } from "lucide-react";
import { Section } from "~/components/section";

const SCREENSHOTS = [
  {
    src: "/sputnik/landing-page.png",
    isAdminOnly: false,
  },
  {
    src: "/sputnik/landing-faq.png",
    isAdminOnly: false,
  },
  {
    src: "/sputnik/landing-why.png",
    isAdminOnly: false,
  },
  {
    src: "/sputnik/user-courses.png",
    isAdminOnly: false,
  },
  {
    src: "/sputnik/user-course.png",
    isAdminOnly: false,
  },
  {
    src: "/sputnik/user-orders.png",
    isAdminOnly: false,
  },
  {
    src: "/sputnik/user-checkout.png",
    isAdminOnly: false,
  },
  {
    src: "/sputnik/admin-courses.png",
    isAdminOnly: true,
  },
  {
    src: "/sputnik/admin-course-sections.png",
    isAdminOnly: true,
  },
  {
    src: "/sputnik/admin-course-students.png",
    isAdminOnly: true,
  },
  {
    src: "/sputnik/admin-orders.png",
    isAdminOnly: true,
  },
];

export function SputnikCarousel() {
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
                    src={screenshot.src}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    priority
                  />

                  {screenshot.isAdminOnly && (
                    <span className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300 backdrop-blur-sm">
                      <LockIcon className="size-3" />
                      Admin Only
                    </span>
                  )}
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

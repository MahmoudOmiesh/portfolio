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
import { Badge } from "~/components/ui/badge";
import { LockIcon } from "lucide-react";

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
            {SCREENSHOTS.map((screenshot, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[16/9] border">
                  <Image
                    src={screenshot.src}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    priority
                  />

                  {screenshot.isAdminOnly && (
                    <Badge className="absolute right-4 bottom-4">
                      <LockIcon />
                      Admin Only
                    </Badge>
                  )}
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

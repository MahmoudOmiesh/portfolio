import { ExternalLinkIcon } from "lucide-react";
import { CppIcon, QtIcon } from "~/components/tech-icons";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const TECHNOLOGIES = [
  {
    name: "C++",
    icon: CppIcon,
  },
  {
    name: "Qt",
    icon: QtIcon,
  },
];

export function VisualizerAbout() {
  return (
    <Card className="font-mono">
      <CardHeader className="gap-4">
        <div className="flex items-baseline justify-between">
          <CardTitle className="text-3xl">Sorting Visualizer</CardTitle>
          <Button variant="link" asChild className="group">
            <a
              href="https://github.com/MahmoudOmiesh/Sorting-Visualizer"
              target="_blank"
            >
              Source Code{" "}
              <ExternalLinkIcon className="size-4 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>
        <CardDescription className="text-base">
          I built this interactive desktop application in C++ using the Qt6
          framework to help people understand how different sorting algorithms
          actually work behind the scenes. The app visualizes six classic
          sorting algorithms (bubble sort, selection sort, insertion sort, merge
          sort, quick sort, and heap sort) by showing colorful bars that
          represent array elements being compared, swapped, and moved around in
          real-time.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">Technologies:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {TECHNOLOGIES.map((technology) => (
            <Badge variant="outline" key={technology.name}>
              <technology.icon /> {technology.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

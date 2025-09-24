import { ChevronsRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const PROJECTS = [
  {
    title: "Sputnik",
    description:
      "An online learning platform for kids I worked on during my internship at Sputnik Academy.",
    image: "/sputnik-landing-page.png",
  },
  {
    title: "Inscribe",
    description: "A local first note-taking app, with a custom text editor",
    image: "/inscribe-landing-page.png",
  },
  {
    title: "Sorting Visualizer",
    description:
      "A visualizer for popular sorting alogrithms, with step-by-step demonstrations.",
  },
];

export function Projects() {
  return (
    <Card className="rounded-0 animated-cat-container relative isolate gap-12 font-mono">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">
          What I&apos;ve been working on
        </CardTitle>
        <CardDescription className="mx-auto max-w-[60ch]">
          I like to always keep learning and building new things. Here are some
          of the projects I&apos;ve dedicated my time to.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {PROJECTS.map((project) => (
          <div key={project.title} className="grid grid-cols-2 gap-6">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
              className="border"
            />
            <div className="self-center">
              <p className="text-lg font-bold">{project.title}</p>
              <p className="mt-2">{project.description}</p>
              <Button variant="link" className="group mt-4 !pl-0">
                Learn More{" "}
                <ChevronsRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

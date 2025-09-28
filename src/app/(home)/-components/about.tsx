import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Github,
  Linkedin,
  FileText,
  MapPinIcon,
  Briefcase,
} from "lucide-react";
import AnimatedCat from "./animated-cat";
import { Badge } from "~/components/ui/badge";

export function About() {
  return (
    <Card className="rounded-0 animated-cat-container relative isolate gap-4">
      <CardHeader>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
          <div className="space-y-1">
            <CardTitle className="text-2xl font-bold md:text-3xl">
              Hello, I&apos;m Mahmoud
            </CardTitle>
            <div className="flex gap-2">
              <Badge variant="outline">
                <MapPinIcon /> Egypt
              </Badge>
              <Badge variant="outline">
                <Briefcase /> Open to Work
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="icon" variant="outline" asChild>
              <a href="https://github.com/MahmoudOmiesh" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button size="icon" variant="outline" asChild>
              <a href="https://linkedin.com/in/mahmoud-omiesh" target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button size="icon" variant="outline" asChild>
              <a href="/resume.pdf" target="_blank">
                <FileText className="h-4 w-4" />
                <span className="sr-only">Resume</span>
              </a>
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="grid md:grid-cols-[2fr_1fr]">
        <div className="space-y-4 text-sm md:text-base">
          <p>
            I am a computer science student who enjoys challenges that blend
            problem-solving with creativity. Programming hooked me for that
            reason, and I have grown through both personal projects and team
            experiences. I am still early in my journey, but I value learning as
            much as building, and I am excited to keep improving while
            contributing to teams where I can share ideas and learn from others.
          </p>
        </div>

        <div className="hidden justify-center md:flex">
          <AnimatedCat
            width={200}
            className="pointer-events-none scale-x-[-1]"
          />
        </div>
      </CardContent>
    </Card>
  );
}

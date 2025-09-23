import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Github, Linkedin, FileText, MapPinIcon } from "lucide-react";
import AnimatedCat from "./animated-cat";
import { Badge } from "~/components/ui/badge";

export function About() {
  return (
    <Card className="rounded-0 animated-cat-container relative isolate gap-4 font-mono">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-3xl font-bold">
              Hello, I&apos;m Mahmoud
            </CardTitle>
            <Badge variant="outline">
              <MapPinIcon /> Egypt
            </Badge>
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
        <div className="space-y-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            doloremque, id minima earum saepe ut nostrum mollitia perferendis
            quae eius tempora. Repellendus sapiente velit aperiam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            nemo, minus quidem expedita voluptates laboriosam.
          </p>
        </div>

        <div className="flex justify-center">
          <AnimatedCat
            width={200}
            className="pointer-events-none scale-x-[-1]"
          />
        </div>
      </CardContent>
    </Card>
  );
}

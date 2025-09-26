import { ExternalLinkIcon } from "lucide-react";
import {
  ReactIcon,
  ShadcnIcon,
  TailwindIcon,
  TypescriptIcon,
  TanstackRouterIcon,
  TanstackQueryIcon,
  ReactHookFormIcon,
  HonoIcon,
  PrismaIcon,
  PostgreSQLIcon,
  AWSIcon,
  PaymobIcon,
  MuxIcon,
} from "~/components/tech-icons";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const FRONTEND_TECHNOLOGIES = [
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "TypeScript",
    icon: TypescriptIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    name: "Shadcn UI",
    icon: ShadcnIcon,
  },
  {
    name: "Tanstack Router",
    icon: TanstackRouterIcon,
  },
  {
    name: "Tanstack Query",
    icon: TanstackQueryIcon,
  },
  {
    name: "React Hook Form",
    icon: ReactHookFormIcon,
  },
];

const BACKEND_TECHNOLOGIES = [
  {
    name: "Hono",
    icon: HonoIcon,
  },
  {
    name: "Prisma",
    icon: PrismaIcon,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQLIcon,
  },
  {
    name: "AWS",
    icon: AWSIcon,
  },
  {
    name: "Mux",
    icon: MuxIcon,
  },
  {
    name: "Paymob",
    icon: PaymobIcon,
  },
];

export function SputnikAbout() {
  return (
    <Card className="font-mono">
      <CardHeader className="gap-4">
        <div className="flex items-baseline justify-between">
          <CardTitle className="text-3xl">Sputnik</CardTitle>
          <Button variant="link" asChild className="group">
            <a href="https://github.com/abdalrahmanf2/sputnik" target="_blank">
              Source Code{" "}
              <ExternalLinkIcon className="size-4 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>
        <CardDescription className="text-base">
          Sputnik is a space-themed online learning platform for kids, I built
          this during my internship at Sputnik Academy alongside a team of 3
          other interns with React, Hono and TypeScript. This application
          required a lot of team work to create a seamless experience for the
          users, and allow the admins to manage the content easily.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">Technologies:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {FRONTEND_TECHNOLOGIES.concat(BACKEND_TECHNOLOGIES).map(
            (technology) => (
              <Badge variant="outline" key={technology.name}>
                <technology.icon /> {technology.name}
              </Badge>
            ),
          )}
        </div>
      </CardContent>
    </Card>
  );
}

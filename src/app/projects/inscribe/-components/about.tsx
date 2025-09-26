import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react";
import {
  ShadcnIcon,
  TailwindIcon,
  TypescriptIcon,
  TanstackQueryIcon,
  PrismaIcon,
  PostgreSQLIcon,
  NextjsIcon,
  FloatingUiIcon,
  TrpcIcon,
  BetterAuthIcon,
  DexieIcon,
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
    name: "Next.js",
    icon: NextjsIcon,
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
    name: "Tanstack Query",
    icon: TanstackQueryIcon,
  },
  {
    name: "Floating UI",
    icon: FloatingUiIcon,
  },
];

const BACKEND_TECHNOLOGIES = [
  {
    name: "tRPC",
    icon: TrpcIcon,
  },
  {
    name: "Dexie",
    icon: DexieIcon,
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
    name: "Better Auth",
    icon: BetterAuthIcon,
  },
];

export function InscribeAbout() {
  return (
    <Card className="font-mono">
      <CardHeader className="gap-4">
        <div className="flex items-baseline justify-between">
          <CardTitle className="text-3xl">Inscribe</CardTitle>
          <div className="space-x-2">
            <Button variant="link" asChild className="group">
              <a
                href="https://github.com/MahmoudOmiesh/Inscribe"
                target="_blank"
              >
                Source Code{" "}
                <ExternalLinkIcon className="size-4 transition-transform group-hover:-translate-y-0.5" />
              </a>
            </Button>

            <Button variant="link" asChild className="group">
              <a href="https://inscribe-notes.vercel.app/" target="_blank">
                Visit Website{" "}
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>
        <CardDescription className="text-base">
          Inscribe is a modern, local-first note-taking application with
          AI-powered writing assistance that I built as a solo personal project
          using Next.js, and tRPC. This application features a completely
          custom-built rich text editor from scratch, real-time sync
          capabilities, and integrated AI writing assistance.
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

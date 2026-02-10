import { ArrowUpRightIcon, ExternalLinkIcon } from "lucide-react";
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
import { Section } from "~/components/section";

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
    <Section>
      <div className="flex flex-col items-baseline justify-between gap-2 sm:flex-row">
        <a
          href="https://inscribe-notes.vercel.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="group"
        >
          <h1 className="flex items-baseline gap-1.5 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Inscribe
            <ExternalLinkIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
          </h1>
        </a>
        <a
          href="https://github.com/MahmoudOmiesh/Inscribe"
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-baseline gap-1.5 text-sm leading-tight font-semibold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Source Code
          <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
        </a>
      </div>

      <p className="text-muted-foreground mt-4 text-sm leading-relaxed md:text-base">
        Inscribe is a modern, local-first note-taking application with
        AI-powered writing assistance that I built as a solo personal project
        using Next.js, and tRPC. This application features a completely
        custom-built rich text editor from scratch, real-time sync capabilities,
        and integrated AI writing assistance.
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {FRONTEND_TECHNOLOGIES.concat(BACKEND_TECHNOLOGIES).map(
          (technology) => (
            <li key={technology.name}>
              <div className="flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                <technology.icon />
                {technology.name}
              </div>
            </li>
          ),
        )}
      </ul>
    </Section>
  );
}

import { ArrowUpRightIcon, ExternalLinkIcon } from "lucide-react";
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
import { Section } from "~/components/section";

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
    <Section>
      <div className="flex flex-col items-baseline justify-between gap-2 sm:flex-row">
        <a
          href="https://www.linkedin.com/company/sputnik-academy/"
          target="_blank"
          rel="noreferrer noopener"
          className="group"
        >
          <h1 className="flex items-baseline gap-1.5 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Sputnik
            <ExternalLinkIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
          </h1>
        </a>
        <a
          href="https://github.com/abdalrahmanf2/sputnik"
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-baseline gap-1.5 text-sm leading-tight font-semibold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Source Code
          <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
        </a>
      </div>

      <p className="text-muted-foreground mt-4 text-sm leading-relaxed md:text-base">
        Sputnik is a space-themed online learning platform for kids, I built
        this during my internship at Sputnik Academy alongside a team of 3 other
        interns with React, Hono and TypeScript. This application required a lot
        of team work to create a seamless experience for the users, and allow
        the admins to manage the content easily.
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

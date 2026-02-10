import { ArrowUpRightIcon, ExternalLinkIcon } from "lucide-react";
import { Section } from "~/components/section";

const EXPERIENCE: ExperienceItem[] = [
  {
    href: "https://upstatement.com",
    role: "Lead Engineer",
    company: "Upstatement",
    startDate: "2018",
    endDate: "2024",
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "AWS",
    ],
  },
  {
    href: "https://upstatement.com",
    role: "Lead Engineer",
    company: "Upstatement",
    startDate: "2018",
    endDate: "2024",
    description:
      "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "AWS",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="group/list space-y-12">
        {EXPERIENCE.map((experience) => (
          <li key={experience.href}>
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <a
          className="group/link inline-flex items-baseline gap-2 text-base leading-tight font-semibold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
        >
          View Full Résumé
          <ArrowUpRightIcon className="size-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" />
        </a>
      </div>
    </Section>
  );
}

interface ExperienceItem {
  href: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

function ExperienceItem({
  href,
  role,
  company,
  startDate,
  endDate,
  description,
  technologies,
}: ExperienceItem) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${role} at ${company} (opens in a new tab)`}
    >
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

        <header
          className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
          aria-label={`${startDate} to ${endDate}`}
        >
          {startDate} — {endDate}
        </header>

        <div className="z-10 sm:col-span-6">
          <h3 className="inline-flex items-baseline gap-1.5 text-base leading-tight font-medium text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300">
            {role} · {company}
            <ExternalLinkIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 motion-reduce:transition-none" />
          </h3>

          <p className="text-muted-foreground mt-2 text-sm leading-normal">
            {description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li key={technology}>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                  {technology}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}

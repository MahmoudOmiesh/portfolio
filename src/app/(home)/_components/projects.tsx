import { ChevronsRightIcon } from "lucide-react";
import Image from "next/image";
import { Section } from "~/components/section";

const PROJECTS: ProjectItem[] = [
  {
    href: "/projects/inscribe",
    title: "Inscribe",
    description: "A local first note-taking app, with a custom text editor",
    imageSrc: "/inscribe/landing-page.png",
    technologies: ["Next.js", "TypeScript", "tRPC", "Dexie"],
  },
  {
    href: "/projects/sorting-visualizer",
    title: "Sorting Visualizer",
    description:
      "A visualizer for popular sorting alogrithms, with step-by-step demonstrations.",
    imageSrc: "/visualizer/base.png",
    technologies: ["C++", "QT"],
  },
];

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ol className="group/list space-y-12">
        {PROJECTS.map((project) => (
          <li key={project.href}>
            <ProjectItem {...project} />
          </li>
        ))}
      </ol>
    </Section>
  );
}

interface ProjectItem {
  href: string;
  title: string;
  imageSrc: string;
  description: string;
  technologies: string[];
}

function ProjectItem({
  title,
  href,
  imageSrc,
  description,
  technologies,
}: ProjectItem) {
  return (
    <a href={href} aria-label={title}>
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

        <Image
          src={imageSrc}
          alt={title}
          className="z-10 mt-1 mb-2 aspect-video rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:col-span-2"
          width={200}
          height={48}
        />

        <div className="z-10 sm:col-span-6">
          <h3 className="inline-flex items-center gap-1.5 text-base leading-tight font-medium text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300">
            {title}
            <ChevronsRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transition-none" />
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

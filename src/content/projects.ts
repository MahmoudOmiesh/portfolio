import type { MDXContent } from "mdx/types";

import Inscribe from "./projects/inscribe.mdx";
import type { Cover } from "./work";

type Project = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  summary: string;
  cover: Cover;
  Content: MDXContent;
};

export const projects: Project[] = [
  {
    slug: "inscribe",
    title: "Inscribe",
    kind: "Personal project",
    year: "2025",
    summary: "A local-first note-taking app, with a custom text editor",
    cover: { src: "/inscribe/cover.webp", width: 2400, height: 1500 },
    Content: Inscribe,
  },
];

export const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));

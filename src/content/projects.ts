import type { MDXContent } from "mdx/types";

import Inscribe from "./projects/inscribe.mdx";
import type { Cover } from "./work";

export type Project = {
  title: string;
  kind: string;
  year: string;
  summary: string;
  cover: Cover;
  Content: MDXContent;
};

const registry = {
  inscribe: {
    title: "Inscribe",
    kind: "Personal project",
    year: "2025",
    summary: "A local-first note-taking app, with a custom text editor",
    cover: { src: "/inscribe/cover.webp", width: 2400, height: 1500 },
    Content: Inscribe,
  },
} satisfies Record<string, Project>;

export type ProjectSlug = keyof typeof registry;

export const projects: Record<ProjectSlug, Project> = registry;

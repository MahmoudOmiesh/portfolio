import type { MDXContent } from "mdx/types";

import Inscribe from "./projects/inscribe.mdx";

export type Project = {
  title: string;
  meta: string;
  card: { summary: string; technologies: string[]; cover: { src: string; width: number; height: number } };
  Content: MDXContent;
};

const registry = {
  inscribe: {
    title: "Inscribe",
    meta: "Personal project · 2025",
    card: {
      summary: "A local-first note-taking app, with a custom text editor",
      technologies: ["Next.js", "TypeScript", "tRPC", "Dexie"],
      cover: { src: "/inscribe/cover.webp", width: 2400, height: 1500 },
    },
    Content: Inscribe,
  },
} satisfies Record<string, Project>;

export type ProjectSlug = keyof typeof registry;

export const projects: Record<ProjectSlug, Project> = registry;

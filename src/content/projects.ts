import * as Inscribe from "./projects/inscribe.mdx";
import type { Article, Cover } from "./work";

type Project = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  summary: string;
  cover: Cover;
  article: Article;
};

export const projects: Project[] = [
  {
    slug: "inscribe",
    title: "Inscribe",
    kind: "Personal project",
    year: "2025",
    summary: "A local-first note-taking app, with a custom text editor",
    cover: { src: "/inscribe/cover.webp", width: 2400, height: 1500, phone: { zoom: 1.6, origin: "76% 30%" } },
    article: Inscribe,
  },
];

export const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));

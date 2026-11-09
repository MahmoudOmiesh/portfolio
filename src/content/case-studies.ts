import { projects } from "./projects";
import { jobs, type Cover } from "./work";

export type CaseStudy = {
  to: "/work/$slug" | "/projects/$slug";
  slug: string;
  title: string;
  cover: Cover;
};

export const caseStudies: CaseStudy[] = [
  ...jobs.flatMap((job) =>
    job.stories.map(({ slug, title, cover }): CaseStudy => ({ to: "/work/$slug", slug, title, cover })),
  ),
  ...projects.map(({ slug, title, cover }): CaseStudy => ({ to: "/projects/$slug", slug, title, cover })),
];

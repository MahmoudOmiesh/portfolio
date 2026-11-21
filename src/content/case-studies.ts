import { notFound } from "@tanstack/react-router";

import { profile } from "@/content/profile";
import { pageHead } from "@/seo";

import { projects } from "./projects";
import { jobs, type Cover } from "./work";

export type CaseStudy = {
  to: "/work/$slug" | "/projects/$slug";
  slug: string;
  path: string;
  title: string;
  cover: Cover;
  heading: string;
  details: string[];
  description: string;
};

export const caseStudies: CaseStudy[] = [
  ...jobs.flatMap((job) =>
    job.stories.map(({ slug, title, cover }): CaseStudy => ({
      to: "/work/$slug",
      slug,
      path: `/work/${slug}`,
      title,
      cover,
      heading: job.company,
      details: [job.role, job.location, job.period],
      description: job.description,
    })),
  ),
  ...projects.map(({ slug, title, cover, kind, year, summary }): CaseStudy => ({
    to: "/projects/$slug",
    slug,
    path: `/projects/${slug}`,
    title,
    cover,
    heading: kind,
    details: [year],
    description: summary,
  })),
];

export function findCaseStudy(to: CaseStudy["to"], slug: string) {
  const study = caseStudies.find((study) => study.to === to && study.slug === slug);

  if (!study) throw notFound();

  return study;
}

export const caseStudyHead = (study: CaseStudy | undefined) =>
  study ? pageHead(study.path, `${study.title} | ${profile.name}`, study.description) : {};

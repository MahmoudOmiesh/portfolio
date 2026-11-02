import { createFileRoute, notFound } from "@tanstack/react-router";

import { StoryArticle } from "@/components/work/story-article";
import { profile } from "@/content/profile";
import { projectsBySlug } from "@/content/projects";
import { pageHead } from "@/seo";

function findProject(slug: string) {
  const project = projectsBySlug.get(slug);

  if (!project) throw notFound();

  return project;
}

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => findProject(params.slug).slug,
  head: ({ loaderData }) => {
    if (!loaderData) return {};

    const { slug, title, summary } = findProject(loaderData);

    return pageHead(`/projects/${slug}`, `${title} | ${profile.name}`, summary);
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { title, kind, year, article } = findProject(Route.useLoaderData());

  return <StoryArticle title={title} heading={kind} details={[year]} article={article} />;
}

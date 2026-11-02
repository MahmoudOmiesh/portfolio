import { createFileRoute, notFound } from "@tanstack/react-router";

import { StoryArticle } from "@/components/work/story-article";
import { projectsBySlug } from "@/content/projects";

function findProject(slug: string) {
  const project = projectsBySlug.get(slug);

  if (!project) throw notFound();

  return project;
}

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => findProject(params.slug).slug,
  component: ProjectPage,
});

function ProjectPage() {
  const { title, kind, year, Content } = findProject(Route.useLoaderData());

  return <StoryArticle title={title} meta={`${kind}, ${year}.`} Content={Content} />;
}

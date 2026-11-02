import { createFileRoute, notFound } from "@tanstack/react-router";

import { StoryArticle } from "@/components/work/story-article";
import { projects, type ProjectSlug } from "@/content/projects";

export const Route = createFileRoute("/projects/$slug")({
  // Returns the slug rather than the project: loader data is serialized for hydration and projects hold components.
  loader: ({ params }) => {
    if (!Object.hasOwn(projects, params.slug)) throw notFound();
    return params.slug as ProjectSlug;
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { title, kind, year, Content } = projects[Route.useLoaderData()];

  return <StoryArticle title={title} meta={`${kind}, ${year}.`} Content={Content} />;
}

import { createFileRoute, notFound } from "@tanstack/react-router";

import { projects, type ProjectSlug } from "@/content/projects";

export const Route = createFileRoute("/projects/$slug")({
  // Returns the slug rather than the project: loader data is serialized for hydration and projects hold icon components.
  loader: ({ params }) => {
    if (!Object.hasOwn(projects, params.slug)) throw notFound();
    return params.slug as ProjectSlug;
  },
  component: ProjectPage,
});

function ProjectPage() {
  const project = projects[Route.useLoaderData()];
  return <h1 className="text-[28px] font-semibold tracking-tight">{project.title}</h1>;
}

import { createFileRoute, notFound } from "@tanstack/react-router";

import { StoryArticle } from "@/components/work/story-article";
import { stories, type StorySlug } from "@/content/work";

export const Route = createFileRoute("/work/$slug")({
  // Returns the slug rather than the story: loader data is serialized for hydration and stories hold components.
  loader: ({ params }) => {
    if (!Object.hasOwn(stories, params.slug)) throw notFound();
    return params.slug as StorySlug;
  },
  component: StoryPage,
});

function StoryPage() {
  const { title, company, role, location, period, Content } = stories[Route.useLoaderData()];

  return <StoryArticle title={title} meta={`${role} at ${company} · ${location} · ${period}`} Content={Content} />;
}

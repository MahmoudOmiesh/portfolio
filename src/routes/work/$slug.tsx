import { createFileRoute, notFound } from "@tanstack/react-router";

import { StoryArticle } from "@/components/work/story-article";
import { storiesBySlug } from "@/content/work";

function findStory(slug: string) {
  const entry = storiesBySlug.get(slug);

  if (!entry) throw notFound();

  return entry;
}

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => findStory(params.slug).story.slug,
  component: StoryPage,
});

function StoryPage() {
  const { story, job } = findStory(Route.useLoaderData());

  return (
    <StoryArticle
      title={story.title}
      meta={`${job.role} at ${job.company}. ${job.location}. ${job.period}.`}
      Content={story.Content}
    />
  );
}

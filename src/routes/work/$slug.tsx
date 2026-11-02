import { createFileRoute, notFound } from "@tanstack/react-router";

import { StoryArticle } from "@/components/work/story-article";
import { profile } from "@/content/profile";
import { storiesBySlug } from "@/content/work";
import { pageHead } from "@/seo";

function findStory(slug: string) {
  const entry = storiesBySlug.get(slug);

  if (!entry) throw notFound();

  return entry;
}

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => findStory(params.slug).story.slug,
  head: ({ loaderData }) => {
    if (!loaderData) return {};

    const { story, job } = findStory(loaderData);

    return pageHead(`/work/${story.slug}`, `${story.title} | ${profile.name}`, job.description);
  },
  component: StoryPage,
});

function StoryPage() {
  const { story, job } = findStory(Route.useLoaderData());

  return (
    <StoryArticle
      title={story.title}
      heading={job.company}
      details={[job.role, job.location, job.period]}
      article={story.article}
    />
  );
}

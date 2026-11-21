import { createFileRoute } from "@tanstack/react-router";

import { StoryArticle } from "@/components/work/story-article";
import { caseStudyHead, findCaseStudy } from "@/content/case-studies";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => findCaseStudy("/projects/$slug", params.slug),
  head: ({ loaderData }) => caseStudyHead(loaderData),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  return <StoryArticle study={Route.useLoaderData()} />;
}

import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeftIcon } from "lucide-react";

import { prose } from "@/components/work/prose";
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

  return (
    <article>
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon aria-hidden className="size-3.5" />
        Go Back
      </Link>

      <header className="mt-7">
        <h1 className="text-[28px] font-semibold tracking-[-0.02em]">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {role} at {company} · {location} · {period}
        </p>
      </header>

      <div className="mt-6 text-[15.5px] leading-[1.65] text-muted-foreground">
        <Content components={prose} />
      </div>
    </article>
  );
}

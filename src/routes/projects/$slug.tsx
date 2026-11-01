import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { cn } from "cn";
import { ArrowLeftIcon, ArrowUpRightIcon, ExternalLinkIcon, LockIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { StoryArticle } from "@/components/work/story-article";
import {
  projects,
  type Media,
  type OverviewItem,
  type Project,
  type ProjectSlug,
  type RichText,
  type SpotlightItem,
} from "@/content/projects";

export const Route = createFileRoute("/projects/$slug")({
  // Returns the slug rather than the project: loader data is serialized for hydration and projects hold components.
  loader: ({ params }) => {
    if (!Object.hasOwn(projects, params.slug)) throw notFound();
    return params.slug as ProjectSlug;
  },
  component: ProjectPage,
});

type ArchivedProject = Extract<Project, { kind: "archived" }>;

function ProjectPage() {
  const project = projects[Route.useLoaderData()];

  return project.kind === "story" ? (
    <StoryArticle title={project.title} meta={project.meta} Content={project.Content} />
  ) : (
    <ArchivedProjectPage project={project} />
  );
}

function ArchivedProjectPage({ project }: { project: ArchivedProject }) {
  return (
    <article>
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon aria-hidden className="size-3.5" />
        Go Back
      </Link>

      <ProjectHeader project={project} />

      {project.overview && (
        <Section label="Project Overview">
          <Rows items={project.overview} render={(item) => <OverviewRow item={item} />} />
        </Section>
      )}

      {project.gallery && (
        <Section label={project.gallery.heading}>
          <p className="-mt-2 mb-4 text-[14.5px] text-muted-foreground">{project.gallery.caption}</p>
          <Gallery title={project.title} media={project.gallery.media} />
        </Section>
      )}

      {project.spotlight && (
        <Section label="Spotlight">
          <p className="-mt-2 mb-2 text-[14.5px] leading-relaxed text-muted-foreground">{project.spotlight.intro}</p>
          <Rows items={project.spotlight.items} render={(item) => <SpotlightRow item={item} />} />
          <p className="mt-6 border-l-2 border-brand py-1 pl-4 text-[14.5px] leading-relaxed">
            <span className="font-medium">{project.spotlight.callout.label}</span> {project.spotlight.callout.text}
          </p>
        </Section>
      )}

      {project.lessons && (
        <Section label="Lessons Learned">
          <div className="space-y-4 text-[15px] leading-[1.65] text-muted-foreground">
            {project.lessons.map((block) =>
              typeof block === "string" ? <p key={block}>{block}</p> : <BulletList key={block.join()} items={block} />,
            )}
          </div>
        </Section>
      )}
    </article>
  );
}

function ProjectHeader({ project }: { project: ArchivedProject }) {
  return (
    <header className="mt-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h1 className="text-[28px] font-semibold tracking-[-0.02em]">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-baseline gap-1.5"
            >
              {project.title}
              <ExternalLinkIcon
                aria-hidden
                className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ) : (
            project.title
          )}
        </h1>
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 text-sm link-underline"
        >
          Source Code
          <ArrowUpRightIcon aria-hidden className="size-3.5" />
        </a>
      </div>
      <p className="mt-3 text-[15.5px] leading-[1.65] text-muted-foreground">{project.description}</p>
      <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.map((technology) => (
          <li key={technology.name}>
            <Badge variant="outline" className="h-6 gap-1.5 px-2.5 font-normal text-muted-foreground">
              <technology.icon />
              {technology.name}
            </Badge>
          </li>
        ))}
      </ul>
    </header>
  );
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="mb-4 section-label">{label}</h2>
      {children}
    </section>
  );
}

function Rows<T extends { title: string }>({ items, render }: { items: T[]; render: (item: T) => ReactNode }) {
  return (
    <ol>
      {items.map((item) => (
        <li
          key={item.title}
          className="grid gap-x-4 gap-y-1.5 border-t py-4 last:border-b min-[560px]:grid-cols-[124px_1fr]"
        >
          {render(item)}
        </li>
      ))}
    </ol>
  );
}

function OverviewRow({ item }: { item: OverviewItem }) {
  return (
    <>
      <p className="text-[13px] text-muted-foreground">{item.label}</p>
      <div>
        <h3 className="text-[15px] font-medium">{item.title}</h3>
        {item.body?.map((paragraph) => (
          <p key={paragraph} className="mt-1.5 text-[14.5px] leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
        {item.groups && (
          <div className="mt-4 grid gap-4 min-[560px]:grid-cols-2">
            {item.groups.map((group) => (
              <div key={group.heading}>
                <h4 className="text-[13px] font-medium">{group.heading}</h4>
                <BulletList items={group.items} className="mt-1.5 text-[14px]" />
              </div>
            ))}
          </div>
        )}
        {item.legend && (
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[13.5px] text-muted-foreground">
            {item.legend.map((entry) => (
              <li key={entry.label} className="flex items-center gap-2">
                <span aria-hidden className="size-2.5 rounded-xs" style={{ backgroundColor: entry.color }} />
                {entry.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

function SpotlightRow({ item }: { item: SpotlightItem }) {
  return (
    <>
      <p className="flex items-center gap-1.5 self-start text-[13px] text-muted-foreground">
        <item.icon aria-hidden className="size-3.5" />
        {item.label}
      </p>
      <div>
        <h3 className="text-[15px] font-medium">{item.title}</h3>
        <BulletList items={item.bullets} className="mt-2 text-[14.5px]" />
      </div>
    </>
  );
}

function BulletList({ items, className }: { items: RichText[]; className?: string }) {
  return (
    <ul className={cn("list-disc space-y-1 pl-4.5 leading-relaxed text-muted-foreground marker:text-faint", className)}>
      {items.map((item) => (
        <li key={item}>
          <Rich text={item} />
        </li>
      ))}
    </ul>
  );
}

function Rich({ text }: { text: RichText }) {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/).map((part, index) => {
    if (part.startsWith("`"))
      return (
        <code key={index} className="rounded-[5px] bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
          {part.slice(1, -1)}
        </code>
      );
    if (part.startsWith("**"))
      return (
        <strong key={index} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    return part;
  });
}

function Gallery({ title, media }: { title: string; media: Media[] }) {
  return (
    <Carousel opts={{ loop: true }} className="group/gallery" aria-label={title}>
      <CarouselContent>
        {media.map((item, index) => (
          <CarouselItem key={item.src}>
            <div className="relative overflow-hidden rounded-xl border bg-card">
              {item.kind === "image" ? (
                <img
                  src={item.src}
                  alt={`Screenshot ${index + 1}`}
                  width={item.width}
                  height={item.height}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="block h-auto w-full"
                />
              ) : (
                <video
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  controls
                  className="block h-auto w-full"
                />
              )}
              {item.kind === "video" && <Overlay className="top-3 left-3">{item.name}</Overlay>}
              {item.kind === "image" && item.adminOnly && (
                <Overlay className="right-3 bottom-3">
                  <LockIcon aria-hidden className="size-3" />
                  Admin Only
                </Overlay>
              )}
              <Overlay className="top-3 right-3 tabular-nums">
                {index + 1} / {media.length}
              </Overlay>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 opacity-0 transition-opacity group-focus-within/gallery:opacity-100 group-hover/gallery:opacity-100 max-[560px]:opacity-100" />
      <CarouselNext className="right-3 opacity-0 transition-opacity group-focus-within/gallery:opacity-100 group-hover/gallery:opacity-100 max-[560px]:opacity-100" />
    </Carousel>
  );
}

function Overlay({ className, children }: { className: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        "absolute inline-flex items-center gap-1.5 rounded-full border bg-background/80 px-2.5 py-0.5 text-xs text-foreground backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}

import { createFileRoute } from "@tanstack/react-router";

import { LocalTime } from "@/components/local-time";
import { NileScene } from "@/components/nile/nile-scene";
import { SocialLinks } from "@/components/social-links";
import { Tile } from "@/components/work/tile";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { jobs } from "@/content/work";
import { pageHead } from "@/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead("/", profile.meta.title, profile.meta.description),
  component: Home,
});

function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-5 sm:px-8 sm:pt-12">
      <header>
        <NileScene className="aspect-3/1 w-full rounded-xl object-cover max-sm:aspect-2/1 bg-muted [image-rendering:pixelated]" />
        <div className="mt-8 flex items-end justify-between gap-4 sm:mt-10">
          <div>
            <h1 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl">{profile.name}</h1>
            <p className="mt-1 text-muted-foreground">
              {profile.role} · <LocalTime />
            </p>
          </div>
          <SocialLinks className="-mr-2 flex gap-1" />
        </div>
        <p className="mt-6 max-w-xl text-xl text-pretty">{profile.about}</p>
      </header>

      <Section id="work" title="Work" list="ol">
        {jobs.map((job, jobIndex) => (
          <Row key={job.company} heading={job.company} details={[job.role, job.period]} description={job.description}>
            {job.stories.map((story, storyIndex) => (
              <Tile
                key={story.slug}
                to="/work/$slug"
                slug={story.slug}
                title={story.title}
                cover={story.cover}
                loading={jobIndex === 0 && storyIndex === 0 ? "eager" : "lazy"}
              />
            ))}
          </Row>
        ))}
      </Section>

      <Section id="projects" title="Projects" list="ul">
        {projects.map((project) => (
          <Row key={project.slug} heading={project.kind} details={[project.year]} description={project.summary}>
            <Tile to="/projects/$slug" slug={project.slug} title={project.title} cover={project.cover} />
          </Row>
        ))}
      </Section>
    </div>
  );
}

function Section({
  id,
  title,
  list: List,
  children,
}: {
  id: string;
  title: string;
  list: "ol" | "ul";
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="mt-24 mb-8 text-sm font-medium text-muted-foreground sm:mt-32 sm:mb-10">
        {title}
      </h2>
      <List className="flex flex-col gap-16 md:gap-24">{children}</List>
    </section>
  );
}

function Row({
  heading,
  details,
  description,
  children,
}: {
  heading: string;
  details: string[];
  description: string;
  children: React.ReactNode;
}) {
  return (
    <li className="grid gap-4 md:grid-cols-3 md:gap-8">
      <div>
        <h3 className="text-lg font-bold">{heading}</h3>
        <div className="text-sm text-muted-foreground tabular-nums">
          {details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </div>
        <p className="mt-4 max-w-sm text-base text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-col gap-10 md:col-span-2">{children}</div>
    </li>
  );
}

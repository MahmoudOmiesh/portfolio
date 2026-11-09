import { createFileRoute } from "@tanstack/react-router";

import { ProfileLinks } from "@/components/profile-links";
import { Separator } from "@/components/ui/separator";
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
    <div className="mx-auto max-w-5xl px-5 pt-8 sm:px-8 sm:pt-12">
      <header>
        <h1 className="text-6xl leading-none font-extrabold tracking-tighter sm:text-8xl lg:text-9xl">
          {profile.name.split(" ").map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </h1>
        <div className="mt-10 flex flex-col gap-5 text-lg lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <p className="max-w-md">{profile.about}</p>
          <ProfileLinks aria-label="Profiles" className="font-medium" />
        </div>
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

      <section aria-labelledby="cta" className="mt-28">
        <p id="cta" className="mb-3 text-lg text-muted-foreground">
          {profile.cta.text}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="text-5xl leading-none font-extrabold tracking-tighter underline decoration-brand decoration-4 underline-offset-8 sm:text-7xl"
        >
          {profile.cta.button}
        </a>
      </section>
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
      <h2 id={id} className="mt-28 mb-1 text-3xl font-extrabold tracking-tighter">
        {title}
      </h2>
      <List>{children}</List>
      <Separator />
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
    <li>
      <Separator />
      <div className="grid gap-6 py-10 md:grid-cols-3 md:gap-8">
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
      </div>
    </li>
  );
}

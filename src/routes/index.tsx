import { Link, createFileRoute } from "@tanstack/react-router";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ProfileLinks } from "@/components/profile-links";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { jobs, type Cover } from "@/content/work";

export const Route = createFileRoute("/")({ component: Home });

const titleClass = "text-4xl leading-tight font-bold tracking-tight transition-colors hover:text-brand";

const coverClass =
  "aspect-16/10 rounded-lg object-cover object-left-top outline -outline-offset-1 outline-black/10 dark:outline-white/10";

function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-12 sm:px-8 sm:pt-18">
      <header>
        <h1 className="text-6xl leading-none font-extrabold tracking-tighter sm:text-8xl lg:text-9xl">
          {profile.name.split(" ").map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </h1>
        <div className="mt-10 flex flex-col gap-5 text-lg md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-md space-y-2">
            {profile.about.map((paragraph, index) => (
              <p key={paragraph} className={index > 0 ? "text-muted-foreground" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
          <ProfileLinks aria-label="Profiles" className="font-medium" />
        </div>
      </header>

      <Section id="work" title="Work" list="ol">
        {jobs.map((job) => (
          <Row key={job.company} heading={job.company} details={[job.role, job.period]} description={job.description}>
            {job.stories.map((story) => (
              <Preview key={story.slug} cover={story.cover}>
                <Link to="/work/$slug" params={{ slug: story.slug }} className={titleClass}>
                  {story.title}
                </Link>
              </Preview>
            ))}
          </Row>
        ))}
      </Section>

      <Section id="projects" title="Projects" list="ul">
        {projects.map((project) => (
          <Row key={project.slug} heading={project.kind} details={[project.year]} description={project.summary}>
            <Preview cover={project.cover}>
              <Link to="/projects/$slug" params={{ slug: project.slug }} className={titleClass}>
                {project.title}
              </Link>
            </Preview>
          </Row>
        ))}
      </Section>

      <section aria-labelledby="cta" className="mt-30">
        <p id="cta" className="mb-3.5 text-lg text-muted-foreground">
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
      <div className="grid gap-3.5 py-7 md:grid-cols-3 md:gap-8">
        <div className="text-sm text-muted-foreground tabular-nums">
          <h3 className="text-lg font-bold text-foreground">{heading}</h3>
          {details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </div>
        <div className="flex flex-col items-start gap-1.5 md:col-span-2">
          {children}
          <p className="mt-2 max-w-xl text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
    </li>
  );
}

function Preview({ cover, children }: { cover: Cover; children: React.ReactElement }) {
  return (
    <>
      <HoverCard>
        <HoverCardTrigger
          delay={150}
          render={children}
          onPointerEnter={() => {
            new Image().src = cover.src;
          }}
        />
        <HoverCardContent
          side="left"
          align="start"
          alignOffset={0}
          sideOffset={16}
          className="hidden w-96 rounded-xl p-1 md:block"
        >
          <img src={cover.src} alt="" width={cover.width} height={cover.height} className={coverClass} />
        </HoverCardContent>
      </HoverCard>
      <img
        src={cover.src}
        alt=""
        width={cover.width}
        height={cover.height}
        loading="lazy"
        className={`${coverClass} mt-2 mb-4 w-full md:hidden`}
      />
    </>
  );
}

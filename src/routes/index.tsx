import { Link, createFileRoute } from "@tanstack/react-router";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ProfileLinks } from "@/components/profile-links";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { jobs, type Cover } from "@/content/work";

export const Route = createFileRoute("/")({ component: Home });

const titleClass = "text-4xl leading-tight font-bold tracking-tight transition-colors hover:text-brand";

const coverClass = "aspect-16/10 rounded-lg object-cover object-left-top";

function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-12 sm:px-8 sm:pt-16">
      <header>
        <h1 className="text-6xl leading-none font-extrabold tracking-tighter sm:text-8xl lg:text-9xl">
          {profile.name.split(" ").map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </h1>
        <div className="mt-10 flex flex-col gap-5 text-lg lg:flex-row lg:items-end lg:justify-between lg:gap-10">
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
              <Preview key={story.slug} to="/work/$slug" slug={story.slug} title={story.title} cover={story.cover} />
            ))}
          </Row>
        ))}
      </Section>

      <Section id="projects" title="Projects" list="ul">
        {projects.map((project) => (
          <Row key={project.slug} heading={project.kind} details={[project.year]} description={project.summary}>
            <Preview to="/projects/$slug" slug={project.slug} title={project.title} cover={project.cover} />
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
      <div className="grid gap-4 py-7 md:grid-cols-3 md:items-baseline md:gap-8">
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

function Preview({
  to,
  slug,
  title,
  cover,
}: {
  to: "/work/$slug" | "/projects/$slug";
  slug: string;
  title: string;
  cover: Cover;
}) {
  return (
    <>
      <HoverCard>
        <HoverCardTrigger
          delay={150}
          render={
            <Link to={to} params={{ slug }} className={titleClass}>
              {title}
            </Link>
          }
          onPointerEnter={() => {
            new Image().src = cover.src;
          }}
        />
        <HoverCardContent
          side="left"
          align="start"
          alignOffset={0}
          sideOffset={32}
          className="hidden w-72 rounded-xl p-1 lg:pointer-fine:block"
        >
          <img src={cover.src} alt="" width={cover.width} height={cover.height} className={coverClass} />
        </HoverCardContent>
      </HoverCard>
      <Link
        to={to}
        params={{ slug }}
        tabIndex={-1}
        aria-hidden
        className="mt-2 mb-4 block w-full rounded-lg lg:pointer-fine:hidden"
      >
        <img
          src={cover.src}
          alt=""
          width={cover.width}
          height={cover.height}
          loading="lazy"
          className={`${coverClass} image-outline block w-full`}
        />
      </Link>
    </>
  );
}

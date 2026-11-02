import { Link, createFileRoute } from "@tanstack/react-router";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { stories, type Cover } from "@/content/work";

export const Route = createFileRoute("/")({ component: Home });

// Prerendered at build time, so the server and a client in a later year can disagree; the build year wins.
const year = new Date().getFullYear();

const rowClass = "grid gap-3.5 py-7 md:grid-cols-3 md:gap-8";
const titleClass = "text-4xl leading-tight font-bold tracking-tight transition-colors hover:text-brand";
const coverClass =
  "aspect-16/10 rounded-lg object-cover object-left-top outline -outline-offset-1 outline-black/10 dark:outline-white/10";

function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-12 pb-16 sm:px-8 sm:pt-18">
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

      <section aria-labelledby="work">
        <h2 id="work" className="mt-28 mb-1 text-3xl font-extrabold tracking-tighter">
          Work
        </h2>
        <ol>
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`}>
              <Separator />
              <div className={rowClass}>
                <div className="text-sm text-muted-foreground tabular-nums">
                  <h3 className="text-lg font-bold text-foreground">{job.company}</h3>
                  <p>{job.role}</p>
                  <p>
                    {job.startDate} to {job.endDate}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-1.5 md:col-span-2">
                  {job.stories?.map((slug) => (
                    <Preview key={slug} cover={stories[slug].cover}>
                      <Link to="/work/$slug" params={{ slug }} className={titleClass}>
                        {stories[slug].title}
                      </Link>
                    </Preview>
                  ))}
                  <p className="mt-2 max-w-xl text-lg text-muted-foreground">{job.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <Separator />
      </section>

      <section aria-labelledby="projects">
        <h2 id="projects" className="mt-28 mb-1 text-3xl font-extrabold tracking-tighter">
          Projects
        </h2>
        <ul>
          {Object.entries(projects).map(([slug, project]) => (
            <li key={slug}>
              <Separator />
              <div className={rowClass}>
                <div className="text-sm text-muted-foreground tabular-nums">
                  <h3 className="text-lg font-bold text-foreground">{project.kind}</h3>
                  <p>{project.year}</p>
                </div>
                <div className="flex flex-col items-start gap-1.5 md:col-span-2">
                  <Preview cover={project.cover}>
                    <Link to="/projects/$slug" params={{ slug }} className={titleClass}>
                      {project.title}
                    </Link>
                  </Preview>
                  <p className="mt-2 max-w-xl text-lg text-muted-foreground">{project.summary}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Separator />
      </section>

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

      <footer className="mt-24 flex flex-wrap justify-between gap-3 text-sm text-muted-foreground">
        <p suppressHydrationWarning>
          &copy; {year} {profile.copyright}
        </p>
        <ProfileLinks aria-label="Footer" />
      </footer>
    </div>
  );
}

function ProfileLinks(props: React.ComponentProps<"nav">) {
  return (
    <nav {...props}>
      <ul className="flex gap-5">
        {profile.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer noopener" className="link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Touch screens can't hover, so below md the cover shows inline under the title instead of in the card.
function Preview({ cover, children }: { cover: Cover; children: React.ReactElement }) {
  return (
    <>
      <HoverCard>
        <HoverCardTrigger delay={150} render={children} />
        <HoverCardContent align="start" alignOffset={0} sideOffset={8} className="hidden w-96 rounded-xl p-1 md:block">
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

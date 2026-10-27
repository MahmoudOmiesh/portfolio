import { Link, createFileRoute } from "@tanstack/react-router";
import { cn } from "cn";
import { ArrowUpRightIcon, ChevronRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { experience, type Job } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <header className="flex items-center gap-3">
        <div
          aria-hidden
          className="grid size-9.5 shrink-0 place-items-center rounded-[10px] bg-foreground text-[13px] font-semibold tracking-[-0.02em] text-background"
        >
          MO
        </div>
        <div>
          <h1 className="text-[15.5px] font-medium">{profile.name}</h1>
          <p className="text-[15px] text-muted-foreground">{profile.role}</p>
        </div>
      </header>

      <section aria-label="About" className="mt-3.5 space-y-3.5 text-[15.5px] leading-[1.65] text-muted-foreground">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <nav aria-label="Profiles" className="mt-5.5 flex flex-wrap gap-x-4.5 gap-y-2 text-sm">
        {profile.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.newTab ? "_blank" : undefined}
            rel={link.newTab ? "noreferrer noopener" : undefined}
            className="link-underline"
          >
            {link.label}
            {link.href === profile.resume.href && <span aria-hidden> ↗</span>}
          </a>
        ))}
      </nav>

      <Projects />
      <Experience />
      <CallToAction />
    </>
  );
}

function Projects() {
  const featured = Object.entries(projects).flatMap(([slug, { title, card }]) => (card ? [{ slug, title, card }] : []));

  return (
    <section aria-labelledby="projects" className="mt-16">
      <h2 id="projects" className="mb-3 section-label">
        Projects
      </h2>
      <ul className="grid gap-x-3.5 gap-y-6 min-[560px]:grid-cols-2">
        {featured.map(({ slug, title, card }, index) => (
          <li key={slug}>
            <Link to="/projects/$slug" params={{ slug }} className="group block">
              <div className="overflow-hidden rounded-xl border bg-card transition-transform duration-200 group-hover:-translate-y-0.5">
                <img
                  src={card.cover.src}
                  alt={title}
                  width={card.cover.width}
                  height={card.cover.height}
                  loading={index === 0 ? "eager" : "lazy"}
                  className={cn(
                    "aspect-16/10 w-full object-cover object-top transition-[filter] duration-200",
                    card.cover.grayscale &&
                      "grayscale-100 contrast-90 group-hover:grayscale-0 group-hover:contrast-100 group-focus-visible:grayscale-0 group-focus-visible:contrast-100",
                  )}
                />
              </div>
              <h3 className="mt-2.5 text-[15px] font-medium">{title}</h3>
              <p className="mt-0.5 text-sm leading-[1.45] text-muted-foreground">{card.summary}</p>
              <p className="mt-1.5 text-[12.5px] text-muted-foreground">{card.technologies.join(" · ")}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <section aria-labelledby="experience" className="mt-16">
      <h2 id="experience" className="mb-3 section-label">
        Experience
      </h2>
      <ol>
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="border-t last:border-b">
            <JobRow job={job} />
          </li>
        ))}
      </ol>
      <a
        href={profile.resume.href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${profile.resume.label} (opens in a new tab)`}
        className="mt-5 inline-block text-sm link-underline"
      >
        {profile.resume.label}
        <span aria-hidden> ↗</span>
      </a>
    </section>
  );
}

function JobRow({ job }: { job: Job }) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="group grid w-full cursor-pointer grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 py-3 text-left min-[560px]:grid-cols-[124px_1fr]">
        <span className="text-[15px]">
          <span className="font-medium">{job.role}</span> <span className="text-muted-foreground">· {job.company}</span>
        </span>
        <span className="flex items-center gap-2 text-[13px] whitespace-nowrap text-muted-foreground tabular-nums min-[560px]:col-start-1 min-[560px]:row-start-1">
          <span aria-hidden>
            {job.startDate} — {job.endDate}
          </span>
          <span className="sr-only">
            {job.startDate} to {job.endDate}
          </span>
          <ChevronRightIcon
            aria-hidden
            className="size-3 shrink-0 text-faint transition-transform duration-200 group-data-panel-open:rotate-90"
          />
        </span>
        <span className="col-span-full text-[14.5px] leading-normal text-muted-foreground min-[560px]:col-start-2">
          {job.description}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent
        hiddenUntilFound
        className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0 min-[560px]:pl-35"
      >
        <ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
          {job.technologies.map((technology) => (
            <li key={technology}>
              <Badge variant="outline" className="font-normal text-muted-foreground">
                {technology}
              </Badge>
            </li>
          ))}
        </ul>
        {job.project && (
          <Link
            to="/projects/$slug"
            params={{ slug: job.project }}
            className="mt-3 mb-4 inline-flex items-center gap-1 text-sm link-underline"
          >
            {projects[job.project].title}
            <ChevronRightIcon aria-hidden className="size-3.5" />
          </Link>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
}

function CallToAction() {
  return (
    <section aria-labelledby="cta" className="mt-16 border-t pt-10">
      <h2 id="cta" className="text-[19px] font-semibold tracking-[-0.01em]">
        {profile.cta.heading}
      </h2>
      <p className="mt-1.5 max-w-[50ch] text-[15px] leading-relaxed text-pretty text-muted-foreground">
        {profile.cta.text}
      </p>
      <a href={`mailto:${profile.email}`} className={cn(buttonVariants({ size: "lg" }), "group/cta mt-5 px-3")}>
        {profile.cta.button}
        <ArrowUpRightIcon
          data-icon="inline-end"
          className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
        />
      </a>
    </section>
  );
}

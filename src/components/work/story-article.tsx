import { Link } from "@tanstack/react-router";
import { ArrowLeftIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { prose } from "@/components/work/prose";
import type { Article } from "@/content/work";

export function StoryArticle({
  title,
  heading,
  details,
  article: { default: Content, headings },
}: {
  title: string;
  heading: string;
  details: string[];
  article: Article;
}) {
  return (
    <article className="mx-auto max-w-5xl px-5 pt-12 sm:px-8 sm:pt-16">
      <Button
        variant="ghost"
        size="sm"
        nativeButton={false}
        render={<Link to="/" />}
        className="-ml-1.5 text-sm text-muted-foreground sm:-ml-6"
      >
        <ArrowLeftIcon data-icon="inline-start" />
        Back home
      </Button>

      <h1 className="mt-10 text-5xl leading-none font-extrabold tracking-tighter text-balance sm:text-7xl">{title}</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
        <aside className="text-sm text-muted-foreground md:sticky md:top-16 md:self-start">
          <p className="text-lg font-bold text-foreground">{heading}</p>
          {details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
          <SectionNav headings={headings} />
        </aside>

        <div className="text-lg text-foreground/80 md:col-span-2">
          <Content components={prose} />
        </div>
      </div>
    </article>
  );
}

function SectionNav({ headings }: { headings: Article["headings"] }) {
  const [active, setActive] = useState<string>();

  useEffect(() => {
    const elements = headings.flatMap(({ id }) => document.getElementById(id) ?? []);

    function update() {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;
      const passed = elements.filter((element) => element.getBoundingClientRect().top < window.innerHeight / 3);

      setActive((atBottom ? elements : passed).at(-1)?.id);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Sections" className="mt-8 hidden md:block">
      <ul className="space-y-2 border-l">
        {headings.map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              className="-ml-px block border-l-2 border-transparent pl-3 transition-colors hover:text-foreground aria-[current]:border-brand aria-[current]:text-foreground"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

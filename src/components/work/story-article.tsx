import { ChevronDownIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Separator } from "@/components/ui/separator";
import { prose } from "@/components/work/prose";
import { Tile } from "@/components/work/tile";
import { caseStudies } from "@/content/case-studies";
import type { Article } from "@/content/work";

export function StoryArticle({
  slug,
  title,
  heading,
  details,
  article: { default: Content, headings },
}: {
  slug: string;
  title: string;
  heading: string;
  details: string[];
  article: Article;
}) {
  const next = caseStudies[(caseStudies.findIndex((study) => study.slug === slug) + 1) % caseStudies.length];

  return (
    <article className="mx-auto max-w-5xl px-5 pt-8 sm:px-8 sm:pt-12">
      <h1 className="text-5xl leading-none font-extrabold tracking-tighter text-balance sm:text-7xl">{title}</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
        <aside className="text-sm text-muted-foreground md:sticky md:top-24 md:self-start">
          <p className="text-lg font-bold text-foreground">{heading}</p>
          {details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
          <SectionNav headings={headings} />
          <SectionMenu headings={headings} />
        </aside>

        <div className="text-lg text-foreground/80 md:col-span-2">
          <Content components={prose} />
        </div>
      </div>

      <Separator className="mt-24" />
      <nav aria-label="Next case study" className="grid gap-6 pt-10 md:grid-cols-3 md:gap-8">
        <p className="text-sm text-muted-foreground">Next</p>
        <div className="md:col-span-2">
          <Tile {...next} />
        </div>
      </nav>
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

function SectionMenu({ headings }: { headings: Article["headings"] }) {
  const ref = useRef<HTMLDetailsElement>(null);

  if (headings.length === 0) return null;

  return (
    <details ref={ref} className="group mt-6 border-y md:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3 [&::-webkit-details-marker]:hidden">
        Contents
        <ChevronDownIcon aria-hidden className="size-4 transition-transform group-open:rotate-180" />
      </summary>
      <ul className="space-y-2 pb-4">
        {headings.map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={() => {
                if (ref.current) ref.current.open = false;
              }}
              className="block transition-colors hover:text-foreground"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}

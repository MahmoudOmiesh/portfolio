import { Link } from "@tanstack/react-router";
import { ArrowLeftIcon } from "lucide-react";
import type { MDXContent } from "mdx/types";

import { Button } from "@/components/ui/button";
import { prose } from "@/components/work/prose";

export function StoryArticle({ title, meta, Content }: { title: string; meta: string; Content: MDXContent }) {
  return (
    <div className="px-5 pt-12 pb-40 sm:px-8 sm:pt-18">
      <article className="mx-auto max-w-2xl">
        {/* Pulled left so the label, not the icon, lines up with the column; phones have no margin to hang it in. */}
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

        <header className="mt-10">
          <h1 className="text-5xl leading-none font-extrabold tracking-tighter text-balance sm:text-7xl">{title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">{meta}</p>
        </header>

        <div className="mt-10 text-lg text-foreground/80">
          <Content components={prose} />
        </div>
      </article>
    </div>
  );
}

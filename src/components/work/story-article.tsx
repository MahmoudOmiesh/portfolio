import { Link } from "@tanstack/react-router";
import { ArrowLeftIcon } from "lucide-react";
import type { MDXContent } from "mdx/types";

import { prose } from "@/components/work/prose";

export function StoryArticle({ title, meta, Content }: { title: string; meta: string; Content: MDXContent }) {
  return (
    <article>
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon aria-hidden className="size-3.5" />
        Go Back
      </Link>

      <header className="mt-7">
        <h1 className="text-[28px] font-semibold tracking-[-0.02em]">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{meta}</p>
      </header>

      <div className="mt-6 text-[15.5px] leading-[1.65] text-muted-foreground">
        <Content components={prose} />
      </div>
    </article>
  );
}

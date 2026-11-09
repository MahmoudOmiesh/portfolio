import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";

import type { CaseStudy } from "@/content/case-studies";

export function Tile({ to, slug, title, cover, loading = "lazy" }: CaseStudy & { loading?: "eager" | "lazy" }) {
  return (
    <Link
      to={to}
      params={{ slug }}
      className="group block transition-transform duration-150 ease-out active:scale-[0.985]"
    >
      <div className="image-outline overflow-hidden rounded-lg">
        <div
          style={{ "--zoom": cover.phone?.zoom ?? 1, "--origin": cover.phone?.origin ?? "center" }}
          className="max-sm:origin-(--origin) max-sm:scale-(--zoom)"
        >
          <img
            src={cover.src}
            alt=""
            width={cover.width}
            height={cover.height}
            loading={loading}
            style={{ objectPosition: cover.position }}
            className="block aspect-16/10 w-full object-cover object-top transition-transform duration-200 ease-out group-hover:scale-[1.015] group-focus-visible:scale-[1.015]"
          />
        </div>
      </div>
      <h4
        style={{ viewTransitionName: `title-${slug}` }}
        className="mt-4 w-fit text-2xl text-pretty font-bold tracking-tight transition-colors group-hover:text-brand group-focus-visible:text-brand sm:text-3xl"
      >
        {title}
        <ArrowRightIcon
          aria-hidden
          className="ml-1.5 inline size-6 align-[-0.15em] text-muted-foreground transition-[color,translate] duration-200 ease-out group-hover:translate-x-1 group-hover:text-brand group-focus-visible:translate-x-1 group-focus-visible:text-brand"
        />
      </h4>
    </Link>
  );
}

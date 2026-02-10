"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./tech-icons";
import { cn } from "~/lib/utils";

const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
];
const DEFAULT_ACTIVE_HREF = NAV_LINKS[0]?.href ?? "";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    icon: GitHubIcon,
    href: "https://github.com/MahmoudOmiesh",
  },
  {
    label: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://linkedin.com/in/mahmoud-omiesh",
  },
];

export function Header() {
  const [activeHref, setActiveHref] = useState(DEFAULT_ACTIVE_HREF);
  const visibleSectionsRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const visibleSections = visibleSectionsRef.current;
    const sectionElements = NAV_LINKS.map((link) =>
      document.querySelector<HTMLElement>(link.href),
    ).filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = `#${entry.target.id}`;

          if (entry.isIntersecting) {
            visibleSections.set(sectionId, entry.intersectionRatio);
          } else {
            visibleSections.delete(sectionId);
          }
        });

        const [nextActiveHref] = [...visibleSections.entries()].sort(
          (a, b) => b[1] - a[1],
        )[0] ?? [DEFAULT_ACTIVE_HREF];

        setActiveHref(nextActiveHref);
      },
      {
        root: null,
        // Keep a thin activation band near the top of the viewport.
        rootMargin: "-15% 0px -75% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sectionElements.forEach((sectionElement) =>
      observer.observe(sectionElement),
    );

    return () => {
      observer.disconnect();
      visibleSections.clear();
    };
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          <Link href="/">Mahmoud Omiesh</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
          Full Stack Web Developer
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xs leading-normal">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
          ratione?
        </p>
        <nav className="hidden lg:block">
          <ul className="mt-16 w-max">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className={cn(
                    "group flex items-center gap-4 py-3",
                    activeHref === link.href && "active",
                  )}
                  href={link.href}
                >
                  <span className="h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 group-[.active]:w-16 group-[.active]:bg-slate-200"></span>
                  <span className="text-xs font-bold tracking-widest text-slate-500 uppercase group-hover:text-slate-200 group-focus-visible:text-slate-200 group-[.active]:text-slate-200">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="mt-8 flex items-center gap-5 lg:mt-0">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.href} className="shrink-0">
            <a
              className="text-muted-foreground block p-1 hover:text-slate-200"
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              title={link.label}
            >
              <span className="sr-only">{link.label}</span>
              <link.icon className="size-6" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

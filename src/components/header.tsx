"use client";

import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./tech-icons";

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
  return (
    <header className="sticky top-0 flex max-h-screen w-[48%] flex-col justify-between py-24">
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
        <ul className="mt-16 w-max">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                className="group flex items-center gap-4 py-3"
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
      </div>
      <ul className="flex items-center gap-5">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.href} className="shrink-0">
            <a
              className="block p-1 hover:text-slate-200"
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

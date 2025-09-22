"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Volume2Icon } from "lucide-react";
// import LastName from "../../public/last-name.mp3";
import { useSound } from "use-sound";

const HEADER_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export function Header() {
  const pathname = usePathname();

  const [play] = useSound("/last-name.mp3", {
    interrupt: true,
  });

  return (
    <header className="supports-[backdrop-filter]:bg-card/50 bg-card sticky top-2 z-50 mb-2 flex items-center justify-between border p-5 py-4 backdrop-blur">
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <Link
            href="/"
            className="text-primary relative font-mono text-xl font-bold"
          >
            Omiesh
          </Link>
        </TooltipTrigger>
        <TooltipContent
          arrow={false}
          side="bottom"
          align="center"
          sideOffset={8}
          className="bg-card text-card-foreground w-60 rounded-md border px-4 py-3"
          onClick={() => play()}
        >
          <div className="group text-center text-sm text-pretty">
            <p className="mx-auto flex w-fit cursor-pointer items-center gap-2 p-0.5 text-2xl font-bold">
              omiesh{" "}
              <span>
                <Volume2Icon className="group-hover:text-primary size-4 transition-colors" />
              </span>
            </p>
            <p>
              My last name,{" "}
              <span>
                &quot;
                <span className="text-primary font-sans" dir="rtl">
                  عميش
                </span>
                &quot;
              </span>
              , is an Arabic name.
            </p>

            <p className="mt-6">Click to hear me say it.</p>
          </div>
        </TooltipContent>
      </Tooltip>
      <div className="flex items-center gap-4">
        <nav>
          <ul className="flex items-center">
            {HEADER_LINKS.map((link) => (
              <li key={link.href}>
                <Button
                  variant="link"
                  size="sm"
                  className={cn(
                    "text-secondary-foreground",
                    pathname === link.href && "text-primary",
                  )}
                  asChild
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

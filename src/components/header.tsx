"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const HEADER_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="supports-[backdrop-filter]:bg-card/80 bg-card sticky top-2 z-50 mb-2 flex items-center justify-between border p-5 py-4 backdrop-blur">
      <Link href="/" className="text-primary relative text-xl font-semibold">
        omiesh
      </Link>
      <div className="flex items-center gap-4">
        <nav>
          <ul className="flex items-center">
            {HEADER_LINKS.map((link) => (
              <li key={link.href}>
                <Button
                  variant="link"
                  size="sm"
                  className={cn(
                    "text-card-foreground",
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

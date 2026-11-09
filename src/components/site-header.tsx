import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { anchorProps } from "@/components/profile-links";
import { profile } from "@/content/profile";

const links = profile.links.filter((link) => link.label === "Résumé" || link.label === "Email");
const [first, ...rest] = profile.name.split(" ");
const linkClass = "transition-colors hover:text-foreground";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function update() {
      setScrolled(window.scrollY > 0);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      data-scrolled={scrolled || undefined}
      style={{ viewTransitionName: "site-header" }}
      className="sticky top-0 z-10 border-b border-transparent bg-background transition-colors data-scrolled:border-border"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 text-sm sm:px-8">
        <Link to="/" className="font-bold">
          {first}
          <span className="max-sm:hidden"> {rest.join(" ")}</span>
        </Link>
        <nav aria-label="Site">
          <ul className="flex gap-4 text-muted-foreground sm:gap-6">
            <li>
              <Link to="/" hash="work" className={linkClass}>
                Work
              </Link>
            </li>
            <li>
              <Link to="/" hash="projects" className={linkClass}>
                Projects
              </Link>
            </li>
            {links.map((link) => (
              <li key={link.label}>
                <a {...anchorProps(link)} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

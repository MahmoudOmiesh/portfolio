import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { cn } from "cn";

import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/content/profile";

import appCss from "../styles.css?url";

const { title, description } = profile.meta;
// Prerendered at build time, so the server and a client in a later year can disagree; the build year wins.
const year = new Date().getFullYear();

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "color-scheme", content: "light dark" },
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: `${import.meta.env.VITE_SITE_URL}/opengraph-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  shellComponent: RootDocument,
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
  notFoundComponent: () => <Fallback heading="404" text="looks like you're lost" action="Take me home" />,
  errorComponent: () => (
    <Layout>
      <Fallback heading="Error" text="Something went wrong" action="Go Home" />
    </Layout>
  ),
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-svh max-w-160 flex-col px-6 pt-24 pb-18">
      <main className="flex-1">{children}</main>
      <footer className="mt-20 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 text-[13.5px] text-muted-foreground">
        <nav aria-label="Links" className="flex flex-wrap gap-x-4 gap-y-1">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.newTab ? "_blank" : undefined}
              rel={link.newTab ? "noreferrer noopener" : undefined}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p suppressHydrationWarning>
          &copy; {year} {profile.copyright}
        </p>
      </footer>
    </div>
  );
}

function Fallback({ heading, text, action }: { heading: string; text: string; action: string }) {
  return (
    <div className="flex flex-col items-start pt-16">
      <h1 className="text-[28px] font-semibold tracking-tight">{heading}</h1>
      <p className="mt-1.5 text-[15px] text-muted-foreground">{text}</p>
      <Link to="/" className={cn(buttonVariants(), "mt-6")}>
        {action}
      </Link>
    </div>
  );
}

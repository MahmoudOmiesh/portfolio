import { HeadContent, Link, Outlet, Scripts, createRootRoute, useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty";
import { profile } from "@/content/profile";

import ogImage from "../assets/opengraph-image.png?url";
import appCss from "../styles.css?url";

const { title, description } = profile.meta;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "color-scheme", content: "light dark" },
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: profile.name },
      { property: "og:image", content: `${profile.url}${ogImage}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
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
  const pathname = useLocation({ select: (location) => location.pathname });
  const main = useRef<HTMLElement>(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (pathname === previousPath.current) return;
    previousPath.current = pathname;
    main.current?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="fixed top-2 left-2 z-50 -translate-y-16 rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background focus:translate-y-0"
      >
        Skip to content
      </a>
      <main ref={main} id="main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

function Fallback({ heading, text, action }: { heading: string; text: string; action: string }) {
  return (
    <Empty className="py-32">
      <EmptyHeader>
        <EmptyTitle>
          <h1 className="text-5xl leading-none font-extrabold tracking-tighter sm:text-7xl">{heading}</h1>
        </EmptyTitle>
        <EmptyDescription className="text-lg">{text}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button nativeButton={false} render={<Link to="/" />}>
          {action}
        </Button>
      </EmptyContent>
    </Empty>
  );
}

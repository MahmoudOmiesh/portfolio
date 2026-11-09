import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";

import { ProfileIcons } from "@/components/profile-links";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty";
import { profile } from "@/content/profile";

import appCss from "../styles.css?url";

const { title, description } = profile.meta;
const year = new Date().getFullYear();

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
      { property: "og:image", content: `${profile.url}/opengraph-image.png` },
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
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="fixed top-2 left-2 z-50 -translate-y-16 rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <footer className="mx-auto mt-24 flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-5 pb-16 text-sm text-muted-foreground sm:px-8">
        <p suppressHydrationWarning>
          &copy; {year} {profile.copyright}
        </p>
        <ProfileIcons aria-label="Footer" />
      </footer>
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

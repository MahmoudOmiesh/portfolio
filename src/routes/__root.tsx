import { HeadContent, Link, Scripts, createRootRoute } from "@tanstack/react-router";
import { cn } from "cn";

import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/content/profile";

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
  notFoundComponent: () => <Fallback heading="404" text="looks like you're lost" action="Take me home" />,
  errorComponent: () => <Fallback heading="Error" text="Something went wrong" action="Go Home" />,
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

function Fallback({ heading, text, action }: { heading: string; text: string; action: string }) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start px-5 pt-16 sm:px-8">
      <h1 className="text-[28px] font-semibold tracking-tight">{heading}</h1>
      <p className="mt-1.5 text-[15px] text-muted-foreground">{text}</p>
      <Link to="/" className={cn(buttonVariants(), "mt-6")}>
        {action}
      </Link>
    </div>
  );
}

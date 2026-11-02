import { cn } from "cn";
import { ArrowRightIcon } from "lucide-react";
import type { MDXComponents } from "mdx/types";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type Step = { title: string; note?: string };

function Flow({ label, steps }: { label: string; steps: Step[] }) {
  return (
    <figure className="my-10">
      <figcaption className="mb-3 text-sm text-muted-foreground">{label}</figcaption>
      <ol className="grid auto-cols-fr gap-6 sm:grid-flow-col">
        {steps.map((step, index) => (
          <li key={step.title} className="relative">
            {index > 0 && (
              <ArrowRightIcon
                aria-hidden
                className="absolute -top-5 left-1/2 size-3.5 -translate-x-1/2 rotate-90 text-muted-foreground sm:top-1/2 sm:-left-5 sm:translate-x-0 sm:-translate-y-1/2 sm:rotate-0"
              />
            )}
            <Card size="sm" className="h-full">
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
                {step.note && <CardDescription>{step.note}</CardDescription>}
              </CardHeader>
            </Card>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function Screens({
  src,
  alt,
  width,
  height,
  caption,
  narrow,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  narrow?: boolean;
}) {
  return (
    <figure className={cn("my-10", !narrow && "lg:-mx-24")}>
      <Dialog>
        <DialogTrigger className={cn("block w-full cursor-zoom-in rounded-lg", narrow && "mx-auto max-w-64")}>
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            className="block h-auto w-full rounded-lg outline -outline-offset-1 outline-black/10 dark:outline-white/10"
          />
        </DialogTrigger>
        <DialogContent className="pointer-events-none inset-4 flex w-auto max-w-none translate-none items-center justify-center bg-transparent p-0 ring-0 *:pointer-events-auto sm:inset-8 sm:max-w-none">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <img
            src={src}
            alt=""
            width={width}
            height={height}
            className="size-auto max-h-full max-w-full rounded-lg object-contain outline -outline-offset-1 outline-black/10 dark:outline-white/10"
          />
        </DialogContent>
      </Dialog>
      <figcaption className={cn("mt-3 text-sm text-muted-foreground", narrow ? "text-center" : "lg:mx-24")}>
        {caption}
      </figcaption>
    </figure>
  );
}

export const prose: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2 className="mt-16 mb-2 text-3xl font-extrabold tracking-tighter text-balance text-foreground" {...props}>
      {children}
    </h2>
  ),
  p: (props) => <p className="mt-5 first:mt-0" {...props} />,
  ul: (props) => <ul className="mt-5 list-disc space-y-2.5 pl-5 marker:text-brand" {...props} />,
  ol: (props) => <ol className="mt-5 list-decimal space-y-2.5 pl-5 marker:text-brand" {...props} />,
  li: ({ className, ...props }) => <li className={cn("pl-1 [&>ol]:mt-2.5", className)} {...props} />,
  strong: (props) => <strong className="font-bold text-foreground" {...props} />,
  code: (props) => (
    <code className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-base text-foreground" {...props} />
  ),
  a: ({ href = "", children, ...props }) => (
    <a
      href={href}
      {...(!href.startsWith("/") && { target: "_blank", rel: "noreferrer noopener" })}
      className="link text-foreground"
      {...props}
    >
      {children}
    </a>
  ),
  Flow,
  Screens,
};

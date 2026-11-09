import { cn } from "cn";
import { ArrowRightIcon, Maximize2Icon, ZoomInIcon, ZoomOutIcon } from "lucide-react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import type { MDXComponents } from "mdx/types";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
  const trigger = useRef<HTMLButtonElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState<string>();
  const image = useRef<HTMLImageElement>(null);
  const [zoomed, setZoomed] = useState<number>();

  function zoom(x: number, y: number) {
    const fitted = image.current?.getBoundingClientRect().width ?? 0;

    flushSync(() =>
      setZoomed(zoomed ? undefined : Math.min(width, Math.max(width / window.devicePixelRatio, fitted * 2))),
    );

    const view = scroller.current;

    if (zoomed || !view) return;
    view.scrollTo(x * view.scrollWidth - view.clientWidth / 2, y * view.scrollHeight - view.clientHeight / 2);
  }

  return (
    <figure className="my-10">
      <Dialog
        onOpenChange={(open) => {
          if (!open || !trigger.current) return;
          const box = trigger.current.getBoundingClientRect();
          setOrigin(`${box.left + box.width / 2}px ${box.top + box.height / 2}px`);
          setZoomed(undefined);
        }}
      >
        <div
          className={cn(
            "group relative transition-transform duration-150 ease-out has-active:scale-[0.985]",
            narrow && "mx-auto max-w-64",
          )}
        >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            className="image-outline block h-auto w-full rounded-lg"
          />
          <DialogTrigger
            ref={trigger}
            aria-label={`Enlarge: ${caption}`}
            className="absolute inset-0 cursor-zoom-in rounded-lg"
          >
            <span className="absolute top-2 right-2 grid size-8 place-items-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-has-focus-visible:opacity-100 pointer-coarse:opacity-100">
              <Maximize2Icon aria-hidden className="size-4" />
            </span>
          </DialogTrigger>
        </div>
        <DialogContent
          style={{ transformOrigin: origin }}
          className="pointer-events-none inset-0 flex w-auto max-w-none translate-none flex-col justify-center gap-3 rounded-none bg-transparent p-4 pt-12 text-white ring-0 duration-200 ease-out *:pointer-events-auto data-open:zoom-in-50 data-closed:zoom-out-50 sm:max-w-none sm:p-8 sm:pt-12"
        >
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <div ref={scroller} className={cn("flex min-h-0 rounded-lg", zoomed ? "overflow-auto" : "overflow-hidden")}>
            <img
              src={src}
              alt=""
              role="presentation"
              ref={image}
              style={{ width: zoomed }}
              width={width}
              height={height}
              onClick={(event) => {
                const box = event.currentTarget.getBoundingClientRect();
                zoom((event.clientX - box.left) / box.width, (event.clientY - box.top) / box.height);
              }}
              className={cn(
                "image-outline m-auto block rounded-lg",
                zoomed ? "max-w-none cursor-zoom-out" : "size-auto max-h-full max-w-full cursor-zoom-in object-contain",
              )}
            />
          </div>
          <DialogDescription className="mx-auto max-w-prose text-center text-sm text-white/70">
            {caption}
          </DialogDescription>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={zoomed ? "Zoom out" : "Zoom in"}
            onClick={() => zoom(0.5, 0.5)}
            className="absolute top-2 right-11"
          >
            {zoomed ? <ZoomOutIcon /> : <ZoomInIcon />}
          </Button>
        </DialogContent>
      </Dialog>
      <figcaption className={cn("mt-3 text-sm text-muted-foreground", narrow && "text-center")}>{caption}</figcaption>
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
  ol: (props) => <ol className="mt-5 list-decimal space-y-2.5 pl-5 marker:text-brand marker:normal-nums" {...props} />,
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

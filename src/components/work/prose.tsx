import { cn } from "cn";
import { ArrowRightIcon } from "lucide-react";
import type { MDXComponents } from "mdx/types";

type Step = { title: string; note?: string };

function Flow({ label, steps }: { label: string; steps: Step[] }) {
  return (
    <figure className="my-6">
      <figcaption className="mb-2.5 text-[13px] text-muted-foreground">{label}</figcaption>
      <ol className="grid auto-cols-fr gap-6 min-[560px]:grid-flow-col">
        {steps.map((step, index) => (
          <li key={step.title} className="relative rounded-lg border bg-card px-3 py-2.5">
            {index > 0 && (
              <ArrowRightIcon
                aria-hidden
                className="absolute -top-5 left-1/2 size-3.5 -translate-x-1/2 rotate-90 text-faint min-[560px]:top-1/2 min-[560px]:-left-5 min-[560px]:translate-x-0 min-[560px]:-translate-y-1/2 min-[560px]:rotate-0"
              />
            )}
            <p className="text-[13.5px] font-medium">{step.title}</p>
            {step.note && <p className="mt-0.5 text-[12.5px] leading-snug text-muted-foreground">{step.note}</p>}
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
  /** A single phone screen would be far too tall at the full column width. */
  narrow?: boolean;
}) {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={cn("block h-auto w-full", narrow && "mx-auto max-w-65")}
      />
      <figcaption className="mt-3 text-center text-[13px] text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

export const prose: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2 className="mt-14 mb-3 text-[19px] font-semibold tracking-[-0.01em] text-foreground" {...props}>
      {children}
    </h2>
  ),
  p: (props) => <p className="mt-4 first:mt-0" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-4.5 marker:text-faint" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-5 marker:text-faint" {...props} />,
  li: ({ className, ...props }) => <li className={cn("pl-1 [&>ol]:mt-2", className)} {...props} />,
  strong: (props) => <strong className="font-medium text-foreground" {...props} />,
  code: (props) => (
    <code className="rounded-[5px] bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground" {...props} />
  ),
  a: ({ href = "", children, ...props }) => (
    <a
      href={href}
      {...(!href.startsWith("/") && { target: "_blank", rel: "noreferrer noopener" })}
      className="link-underline"
      {...props}
    >
      {children}
    </a>
  ),
  Flow,
  Screens,
};

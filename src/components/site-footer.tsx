import { cn } from "cn";
import { useState } from "react";

import { EnvelopeField } from "@/components/envelope-field";
import { SocialLinks } from "@/components/social-links";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/content/profile";

const year = new Date().getFullYear();

export function SiteFooter() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="mx-auto mt-32 w-full max-w-5xl px-5 pb-10 sm:mt-40 sm:px-8">
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr]">
        <div>
          <h2 className="text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl">{profile.cta}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{profile.email}</p>
          <a
            href={`mailto:${profile.email}`}
            onPointerEnter={() => setOpen(true)}
            onPointerLeave={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            className={cn(
              buttonVariants(),
              "mt-6 h-10 rounded-full bg-brand px-5 text-[0.9375rem] text-background hover:bg-brand/85",
            )}
          >
            Email me
          </a>
        </div>
        <EnvelopeField open={open} className="h-52 w-full text-foreground max-md:hidden" />
      </div>
      <div className="mt-16 flex items-center justify-between gap-4 text-sm text-muted-foreground sm:mt-20">
        <p suppressHydrationWarning>
          &copy; {year} {profile.copyright}
        </p>
        <SocialLinks className="-mr-2 flex gap-1" />
      </div>
    </footer>
  );
}

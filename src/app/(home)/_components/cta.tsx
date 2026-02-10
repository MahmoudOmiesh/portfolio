import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Section } from "~/components/section";

export function CTA() {
  return (
    <Section className="relative">
      <div className="absolute -inset-4 -z-10">
        <div className="size-full">
          {/* Diagonal Fade Grid Background - Top Right */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        linear-gradient(to right, color-mix(in oklab, var(--color-muted-foreground) 10%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in oklab, var(--color-muted-foreground) 10%, transparent) 1px, transparent 1px)
      `,
              backgroundSize: "30px 30px",
              WebkitMaskImage:
                "radial-gradient(ellipse 50% 80% at 100% 0%, #000 50%, transparent 90%)",
              maskImage:
                "radial-gradient(ellipse 50% 80% at 100% 0%, #000 50%, transparent 90%)",
            }}
          />
        </div>
      </div>

      <h3 className="text-xxl font-bold md:text-2xl">
        Let&apos;s Build Something Together
      </h3>
      <p className="text-muted-foreground mt-2 max-w-[50ch] text-sm text-pretty">
        Feel free to contact me if you have any questions or want to work
        together.
      </p>

      <Button className="group mt-8" size="lg" asChild>
        <a href="mailto:mahmoud.a.omiesh@gmail.com" target="_blank">
          Contact Me{" "}
          <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Button>
    </Section>
  );
}

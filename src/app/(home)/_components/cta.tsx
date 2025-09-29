import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export function CTA() {
  return (
    <Card className="p-0">
      <CardContent className="p-8">
        <h3 className="text-xxl font-bold md:text-2xl">
          Let&apos;s Build Something Together
        </h3>
        <p className="mt-2 max-w-[50ch] text-sm text-pretty">
          Feel free to contact me if you have any questions or want to work
          together.
        </p>

        <Button className="group mt-8" size="lg" asChild>
          <a href="mailto:mahmoud.a.omiesh@gmail.com" target="_blank">
            Contact Me{" "}
            <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

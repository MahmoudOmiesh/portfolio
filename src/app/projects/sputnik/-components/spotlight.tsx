import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { LockIcon, User2Icon } from "lucide-react";

export function SpuntikSpotlight() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Spotlight</CardTitle>
        <CardDescription>
          What I&apos;m most proud of in this project is the end-to-end video
          pipeline built using Mux.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-8">
          <div>
            <Badge variant="outline">
              <LockIcon className="text-primary" />
              Admin Experience
            </Badge>
            <h3 className="mt-1 text-base font-semibold md:text-lg">
              End-to-End Video Pipeline
            </h3>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li>
                • <code className="bg-muted px-1 py-0.5 text-xs">UpChunk</code>{" "}
                streaming uploads with live progress & cancel support
              </li>
              <li>
                • Backend manages upload intents with{" "}
                <code className="bg-muted px-1 py-0.5 text-xs">
                  passthroughId
                </code>{" "}
                tracking
              </li>
              <li>
                • Signed webhook listener verifies Mux events automatically
              </li>
              <li>
                • Asset lifecycle:{" "}
                <span className="text-primary font-medium">
                  waiting → uploaded → ready
                </span>
              </li>
              <li>• Auto-stores assetId, playbackId, duration & thumbnails</li>
            </ul>
          </div>

          <div>
            <Badge variant="outline">
              <User2Icon className="text-primary" />
              Student Experience
            </Badge>
            <h3 className="mt-1 text-base font-semibold md:text-lg">
              Secure Video Streaming
            </h3>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li>• Short-lived signed playback tokens per request</li>
              <li>• Private lessons stay locked down securely</li>
              <li>• Smooth streaming via Mux infrastructure</li>
              <li>• Production-grade experience for learners</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border-primary/10 mt-4 rounded-lg border p-4">
          <p className="text-muted-foreground text-sm">
            <span className="text-primary font-semibold">
              What it delivers:
            </span>{" "}
            Everything stays secure while providing a fast, smooth experience
            for both admins and students.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

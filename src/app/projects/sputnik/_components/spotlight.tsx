import { LockIcon, User2Icon } from "lucide-react";
import { Section } from "~/components/section";
import { FrostedHover } from "~/components/frosted-hover";

export function SpuntikSpotlight() {
  return (
    <Section>
      <h2 className="text-base font-bold tracking-tight text-slate-200 md:text-lg">
        Spotlight
      </h2>
      <p className="text-muted-foreground mt-2 text-sm leading-normal">
        What I&apos;m most proud of in this project is the end-to-end video
        pipeline built using Mux.
      </p>

      <div className="group/list mt-8 space-y-8">
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
          <FrostedHover />

          <header className="z-10 mt-1 mb-2 sm:col-span-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
              <LockIcon className="size-3" />
              Admin
            </span>
          </header>

          <div className="z-10 sm:col-span-6">
            <h3 className="text-base leading-tight font-medium text-slate-200">
              End-to-End Video Pipeline
            </h3>
            <ul className="text-muted-foreground mt-4 space-y-1.5 text-sm">
              <li>
                •{" "}
                <code className="rounded bg-slate-800/80 px-1.5 py-0.5 text-xs text-teal-300">
                  UpChunk
                </code>{" "}
                streaming uploads with live progress & cancel support
              </li>
              <li>
                • Backend manages upload intents with{" "}
                <code className="rounded bg-slate-800/80 px-1.5 py-0.5 text-xs text-teal-300">
                  passthroughId
                </code>{" "}
                tracking
              </li>
              <li>
                • Signed webhook listener verifies Mux events automatically
              </li>
              <li>
                • Asset lifecycle:{" "}
                <span className="font-medium text-teal-300">
                  waiting → uploaded → ready
                </span>
              </li>
              <li>• Auto-stores assetId, playbackId, duration & thumbnails</li>
            </ul>
          </div>
        </div>

        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
          <FrostedHover />

          <header className="z-10 mt-1 mb-2 sm:col-span-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
              <User2Icon className="size-3" />
              Student
            </span>
          </header>

          <div className="z-10 sm:col-span-6">
            <h3 className="text-base leading-tight font-medium text-slate-200">
              Secure Video Streaming
            </h3>
            <ul className="text-muted-foreground mt-4 space-y-1.5 text-sm">
              <li>• Short-lived signed playback tokens per request</li>
              <li>• Private lessons stay locked down securely</li>
              <li>• Smooth streaming via Mux infrastructure</li>
              <li>• Production-grade experience for learners</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-md border border-teal-400/10 bg-teal-400/5 p-4">
        <p className="text-muted-foreground text-sm">
          <span className="font-semibold text-teal-300">What it delivers:</span>{" "}
          Everything stays secure while providing a fast, smooth experience for
          both admins and students.
        </p>
      </div>
    </Section>
  );
}

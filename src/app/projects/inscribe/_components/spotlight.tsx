import { CloudDownloadIcon, RefreshCwIcon } from "lucide-react";
import { Section } from "~/components/section";

export function InscribeSpotlight() {
  return (
    <Section>
      <h2 className="text-base font-bold tracking-tight text-slate-200 md:text-lg">
        Spotlight
      </h2>
      <p className="text-muted-foreground mt-2 text-sm leading-normal">
        Don&apos;t get me wrong, I really like the custom rich text editor I
        built from scratch, but honestly what I want to talk about is the sync
        system.
      </p>

      <div className="group/list mt-8 space-y-8">
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

          <header className="z-10 mt-1 mb-2 sm:col-span-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
              <CloudDownloadIcon className="size-3" />
              Offline-First
            </span>
          </header>

          <div className="z-10 sm:col-span-6">
            <h3 className="text-base leading-tight font-medium text-slate-200">
              Local-First Architecture
            </h3>
            <ul className="text-muted-foreground mt-4 space-y-1.5 text-sm">
              <li>
                • Data lives primarily on the device, with server as a backup
              </li>
              <li>
                • Every user action gets queued as an operation in IndexedDB
              </li>
              <li>
                • The sync system never blocks you waiting for network requests
                - you&apos;re always productive even when offline
              </li>
              <li>
                • Pending operations are synced in the background when
                you&apos;re online
              </li>
              <li>• Failed operations are retried automatically</li>
            </ul>
          </div>
        </div>

        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

          <header className="z-10 mt-1 mb-2 sm:col-span-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
              <RefreshCwIcon className="size-3" />
              Real-Time Sync
            </span>
          </header>

          <div className="z-10 sm:col-span-6">
            <h3 className="text-base leading-tight font-medium text-slate-200">
              Multi-Device Harmony
            </h3>
            <ul className="text-muted-foreground mt-4 space-y-1.5 text-sm">
              <li>
                • Incremental sync only pulls changes from the server since last
                successful sync
              </li>
              <li>
                • Last-write-wins approach keeps things simple but effective
              </li>
              <li>
                • Real-time updates through{" "}
                <code className="rounded bg-slate-800/80 px-1.5 py-0.5 text-xs text-teal-300">
                  tRPC
                </code>{" "}
                using server-sent events (SSE)
              </li>
              <li>
                • A mutation status store to tell you when changes are syncing
              </li>
              <li>
                • Remote updates are merged with local state, preserving any
                user actions made during sync even if incoming data conflicts
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-md border border-teal-400/10 bg-teal-400/5 p-4">
        <p className="text-muted-foreground text-sm">
          <span className="font-semibold text-teal-300">Why this matters:</span>{" "}
          Most apps break when you go offline or have slow connections. This
          architecture ensures you can always work productively, no matter the
          situation and your data is always in sync.
        </p>
      </div>
    </Section>
  );
}

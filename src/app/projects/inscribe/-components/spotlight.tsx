import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { CloudDownloadIcon, DatabaseIcon, RefreshCwIcon } from "lucide-react";

export function InscribeSpotlight() {
  return (
    <Card className="font-mono">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Spotlight</CardTitle>
        <CardDescription>
          Don&apos;t get me wrong, I really like the custom rich text editor I
          built from scratch, but honestly what I want to talk about is the sync
          system.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-8">
          <div>
            <Badge variant="outline">
              <CloudDownloadIcon className="text-primary" />
              Offline-First
            </Badge>
            <h3 className="mt-1 text-base font-semibold md:text-lg">
              Local-First Architecture
            </h3>
            <ul className="mt-4 space-y-1.5 text-sm">
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

          <div>
            <Badge variant="outline">
              <RefreshCwIcon className="text-primary" />
              Real-Time Sync
            </Badge>
            <h3 className="mt-1 text-base font-semibold md:text-lg">
              Multi-Device Harmony
            </h3>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li>
                • Incremental sync only pulls changes from the server since last
                successful sync
              </li>
              <li>
                • Last-write-wins approach keeps things simple but effective
              </li>
              <li>
                • Real-time updates through{" "}
                <code className="bg-muted rounded px-1 text-xs">tRPC</code>{" "}
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

        <div className="bg-primary/5 border-primary/10 mt-4 rounded-lg border p-4">
          <p className="text-muted-foreground text-sm">
            <span className="text-primary font-semibold">
              Why this matters:
            </span>{" "}
            Most apps break when you go offline or have slow connections. This
            architecture ensures you can always work productively, no matter the
            situation and your data is always in sync.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

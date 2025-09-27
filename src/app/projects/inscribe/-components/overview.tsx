import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

export function InscribeOverview() {
  return (
    <Card className="font-mono">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Project Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Badge variant="outline">
            Phase{" "}
            <span className="bg-primary text-primary-foreground grid size-4.5 place-items-center font-bold">
              1
            </span>
          </Badge>
          <h3 className="mt-1 text-base font-semibold md:text-lg">
            Building the Rich Text Editor
          </h3>
          <p className="text-muted-foreground mt-3 text-sm">
            I decided to build a completely custom rich text editor instead of
            using existing solutions just for fun (it wasn&apos;t fun).
            It&apos;s built with a transaction-based architecture and custom
            input handling to intercept browser events.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-5 text-sm md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="text-muted-foreground font-medium">
                Rich Formatting
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• All standard formatting (bold, italic, etc.)</li>
                <li>• Semantic structure (headings, quotes, etc.)</li>
                <li>
                  • Unordered lists, ordered lists, and checklists all with
                  support for nesting items
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-muted-foreground font-medium">
                Interactive Features
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Floating toolbar on text selection</li>
                <li>
                  • Context handle{" "}
                  <code className="bg-muted px-1 py-0.5 text-xs">⠿</code> when
                  hovering near blocks
                </li>
                <li>
                  • Command menu with{" "}
                  <code className="bg-muted px-1 py-0.5 text-xs">/</code>{" "}
                </li>
                <li>
                  • Emoji picker with{" "}
                  <code className="bg-muted px-1 py-0.5 text-xs">:</code>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-border/50 my-8 border-t" />

        <div>
          <Badge variant="outline">
            Phase{" "}
            <span className="bg-primary text-primary-foreground grid size-4.5 place-items-center font-bold">
              2
            </span>
          </Badge>
          <h3 className="mt-1 text-base font-semibold md:text-lg">
            Creating the Local-First Note App
          </h3>
          <p className="text-muted-foreground mt-3 text-sm">
            I Built a proper note-taking app around the editor that works
            offline-first with IndexedDB (with Dexie). The sync system tracks
            changes and syncs them in the background when you&apos;re online.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-5 text-sm md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="text-muted-foreground font-medium">
                Organization & Functionality
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Folders with custom emojis</li>
                <li>• Favorites, archive, and trash</li>
                <li>• Full-text search indexing</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-muted-foreground font-medium">
                Other Features
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• AI writing assistant with real-time streaming</li>
                <li>• Background sync with operation queue</li>
                <li>• Export to clean Markdown or styled HTML</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { Section } from "~/components/section";
import { FrostedHover } from "~/components/frosted-hover";

export function InscribeOverview() {
  return (
    <Section>
      <h2 className="text-base font-bold tracking-tight text-slate-200 md:text-lg">
        Project Overview
      </h2>

      <ol className="group/list mt-8 space-y-12">
        <li>
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
            <FrostedHover />

            <header className="z-10 mt-1 mb-2 sm:col-span-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                Phase 1
              </span>
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="text-base leading-tight font-medium text-slate-200">
                Building the Rich Text Editor
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-normal">
                I decided to build a completely custom rich text editor instead
                of using existing solutions just for fun (it wasn&apos;t fun).
                It&apos;s built with a transaction-based architecture and custom
                input handling to intercept browser events.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    Rich Formatting
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• All standard formatting (bold, italic, etc.)</li>
                    <li>• Semantic structure (headings, quotes, etc.)</li>
                    <li>
                      • Unordered lists, ordered lists, and checklists all with
                      support for nesting items
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    Interactive Features
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Floating toolbar on text selection</li>
                    <li>
                      • Context handle{" "}
                      <code className="rounded bg-slate-800/80 px-1.5 py-0.5 text-xs text-teal-300">
                        ⠿
                      </code>{" "}
                      when hovering near blocks
                    </li>
                    <li>
                      • Command menu with{" "}
                      <code className="rounded bg-slate-800/80 px-1.5 py-0.5 text-xs text-teal-300">
                        /
                      </code>{" "}
                    </li>
                    <li>
                      • Emoji picker with{" "}
                      <code className="rounded bg-slate-800/80 px-1.5 py-0.5 text-xs text-teal-300">
                        :
                      </code>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
            <FrostedHover />

            <header className="z-10 mt-1 mb-2 sm:col-span-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                Phase 2
              </span>
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="text-base leading-tight font-medium text-slate-200">
                Creating the Local-First Note App
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-normal">
                I Built a proper note-taking app around the editor that works
                offline-first with IndexedDB (with Dexie). The sync system
                tracks changes and syncs them in the background when you&apos;re
                online.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    Organization & Functionality
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Folders with custom emojis</li>
                    <li>• Favorites, archive, and trash</li>
                    <li>• Full-text search indexing</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    Other Features
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• AI writing assistant with real-time streaming</li>
                    <li>• Background sync with operation queue</li>
                    <li>• Export to clean Markdown or styled HTML</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </Section>
  );
}

import { FrostedHover } from "~/components/frosted-hover";
import { Section } from "~/components/section";

export function VisualizerOverview() {
  return (
    <Section>
      <h2 className="text-base font-bold tracking-tight text-slate-200 md:text-lg">
        Project Overview
      </h2>

      <div className="group/list mt-8 space-y-12">
        {/* Core Algorithms & Interactive Controls */}
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
          <FrostedHover />

          <header className="z-10 mt-1 mb-2 sm:col-span-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
              Algorithms
            </span>
          </header>

          <div className="z-10 sm:col-span-6">
            <h3 className="text-base leading-tight font-medium text-slate-200">
              Core Algorithms & Visualization
            </h3>

            <div className="mt-5 grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Implemented Algorithms
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Bubble Sort</li>
                  <li>• Selection Sort</li>
                  <li>• Insertion Sort</li>
                  <li>• Merge Sort</li>
                  <li>• Quick Sort</li>
                  <li>• Heap Sort</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Interactive Controls
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Scalable element count (hundreds of data points)</li>
                  <li>• Adjustable animation speed</li>
                  <li>• Start, stop, and shuffle functionality</li>
                  <li>
                    • Each bar represents an array element with height
                    corresponding to its value
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Feedback System */}
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
          <FrostedHover />

          <header className="z-10 mt-1 mb-2 sm:col-span-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
              Visual
            </span>
          </header>

          <div className="z-10 sm:col-span-6">
            <h3 className="text-base leading-tight font-medium text-slate-200">
              Visual Feedback System
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-normal">
              The application leverages Qt&apos;s powerful graphics framework to
              represent individual array elements as dynamic bars that update in
              real-time during sorting operations, with color-coded indicators.
            </p>

            <ul className="mt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="size-3 rounded-sm bg-green-500"></span>
                <span className="text-muted-foreground">
                  active comparisons
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-3 rounded-sm bg-red-500"></span>
                <span className="text-muted-foreground">element swaps</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-3 rounded-sm bg-purple-500"></span>
                <span className="text-muted-foreground">pivot points</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Architecture */}
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
          <FrostedHover />

          <header className="z-10 mt-1 mb-2 sm:col-span-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
              Architecture
            </span>
          </header>

          <div className="z-10 sm:col-span-6">
            <h3 className="text-base leading-tight font-medium text-slate-200">
              Architecture
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-normal">
              The codebase follows a clean separation of concerns with a main
              sorter class handling UI and graphics operations, while a
              dedicated visualizer worker class implements the core sorting
              algorithms.
            </p>
            <p className="text-muted-foreground mt-4 text-sm leading-normal">
              The application uses multi-threading to maintain UI responsiveness
              during intensive sorting operations. The main thread manages
              graphics rendering and user interface interactions, while sorting
              algorithms execute on a separate worker thread, preventing UI
              blocking and ensuring smooth real-time visualization.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

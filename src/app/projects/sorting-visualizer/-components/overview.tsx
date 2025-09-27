import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function VisualizerOverview() {
  return (
    <Card className="font-mono">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Project Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-base font-semibold md:text-lg">
              Core Algorithms & Visualization
            </h3>
            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="text-muted-foreground font-medium">
                  Implemented Algorithms
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>• Bubble Sort</li>
                  <li>• Selection Sort</li>
                  <li>• Insertion Sort</li>
                  <li>• Merge Sort</li>
                  <li>• Quick Sort</li>
                  <li>• Heap Sort</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-muted-foreground font-medium">
                  Interactive Controls
                </h4>
                <ul className="space-y-1 text-sm">
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

          <div className="border-border/50 my-8 border-t" />

          <div>
            <h3 className="mb-3 text-base font-semibold md:text-lg">
              Visual Feedback System
            </h3>
            <p className="text-sm leading-relaxed">
              The application leverages Qt&apos;s powerful graphics framework to
              represent individual array elements as dynamic bars that update in
              real-time during sorting operations, with color-coded indicators.
            </p>

            <ul className="mt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="size-3 bg-green-500"></span>
                active comparisons
              </li>
              <li className="flex items-center gap-2">
                <span className="size-3 bg-red-500"></span>
                element swaps
              </li>
              <li className="flex items-center gap-2">
                <span className="size-3 bg-purple-500"></span>
                pivot points
              </li>
            </ul>
          </div>

          <div className="border-border/50 my-8 border-t" />

          <div>
            <h3 className="mb-3 text-base font-semibold md:text-lg">
              Architecture
            </h3>
            <p className="text-sm leading-relaxed">
              The codebase follows a clean separation of concerns with a main
              sorter class handling UI and graphics operations, while a
              dedicated visualizer worker class implements the core sorting
              algorithms.
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              The application uses multi-threading to maintain UI responsiveness
              during intensive sorting operations. The main thread manages
              graphics rendering and user interface interactions, while sorting
              algorithms execute on a separate worker thread, preventing UI
              blocking and ensuring smooth real-time visualization.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

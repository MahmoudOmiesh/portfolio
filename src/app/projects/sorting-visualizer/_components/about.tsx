import { ArrowUpRightIcon } from "lucide-react";
import { CppIcon, QtIcon } from "~/components/tech-icons";
import { Section } from "~/components/section";

const TECHNOLOGIES = [
  {
    name: "C++",
    icon: CppIcon,
  },
  {
    name: "Qt",
    icon: QtIcon,
  },
];

export function VisualizerAbout() {
  return (
    <Section>
      <div className="flex flex-col items-baseline justify-between gap-2 sm:flex-row">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Sorting Visualizer
        </h1>
        <a
          href="https://github.com/MahmoudOmiesh/Sorting-Visualizer"
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-baseline gap-1.5 text-sm leading-tight font-semibold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Source Code
          <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
        </a>
      </div>

      <p className="text-muted-foreground mt-4 text-sm leading-relaxed md:text-base">
        I built this interactive desktop application in C++ using the Qt6
        framework to help people understand how different sorting algorithms
        actually work behind the scenes. The app visualizes six classic sorting
        algorithms (bubble sort, selection sort, insertion sort, merge sort,
        quick sort, and heap sort) by showing colorful bars that represent array
        elements being compared, swapped, and moved around in real-time.
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {TECHNOLOGIES.map((technology) => (
          <li key={technology.name}>
            <div className="flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
              <technology.icon />
              {technology.name}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

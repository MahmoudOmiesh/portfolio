import { cn } from "~/lib/utils";

export function FrostedHover({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-700/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg",
        className,
      )}
    ></div>
  );
}

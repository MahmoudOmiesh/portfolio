import { cn } from "~/lib/utils";

export function MaxWidthWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

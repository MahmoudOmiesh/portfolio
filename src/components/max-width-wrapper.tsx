import { cn } from "~/lib/utils";

export function MaxWidthWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-2", className)}>
      {children}
    </div>
  );
}

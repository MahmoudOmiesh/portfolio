import { cn } from "~/lib/utils";
import { StickySectionLabel } from "./sticky-section-label";

export function Section({
  id,
  label,
  className,
  children,
}: {
  id?: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24",
        className,
      )}
      aria-label={label}
    >
      {label && <StickySectionLabel label={label} />}

      <div>{children}</div>
    </section>
  );
}

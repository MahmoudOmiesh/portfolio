import "react";

declare global {
  const __BUILD_YEAR__: number;
}

declare module "react" {
  interface CSSProperties {
    [property: `--${string}`]: string | number | undefined;
  }
}

"use client";

import { cn } from "~/lib/utils";
import React from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "transition-bg relative flex flex-col items-center justify-center",
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg,#5e81ac_10%,#8fbcbb_15%,#88c0d0_20%,#b48ead_25%,#81a1c1_30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,#2e3440_0%,#3b4252_7%,transparent_10%,transparent_12%,#434c5e_16%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,#eceff4_0%,#e5e9f0_7%,transparent_10%,transparent_12%,#d8dee9_16%)",

            "--blue-300": "#8fbcbb", // Nord7 - Frost
            "--blue-400": "#81a1c1", // Nord9 - Frost
            "--blue-500": "#5e81ac", // Nord10 - Frost
            "--teal-300": "#88c0d0", // Nord8 - Frost
            "--violet-200": "#b48ead", // Nord15 - Aurora
            "--polar-night-0": "#2e3440", // Nord0
            "--polar-night-1": "#3b4252", // Nord1
            "--polar-night-2": "#434c5e", // Nord2
            "--snow-storm-4": "#d8dee9", // Nord4
            "--snow-storm-5": "#e5e9f0", // Nord5
            "--snow-storm-6": "#eceff4", // Nord6
            "--black": "#2e3440",
            "--white": "#eceff4",
            "--transparent": "transparent",
          } as React.CSSProperties
        }
      >
        <div
          //   Nord-themed aurora effect
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--blue-300)_15%,var(--teal-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--polar-night-0)_0%,var(--polar-night-1)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--polar-night-2)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--snow-storm-6)_0%,var(--snow-storm-5)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--snow-storm-4)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
          )}
        ></div>
      </div>
    </div>
  );
};

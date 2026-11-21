import { ease, useCanvas, type Frame } from "@/components/canvas";
import { localHour } from "@/components/local-time";

import { drawScene, height, width } from "./scene";

const turn = (from: number, to: number) => ((to - from + 36) % 24) - 12;

function hourUnder(fraction: number) {
  if (fraction < 0.08) return 6 - ((0.08 - fraction) / 0.08) * 2;

  if (fraction > 0.92) return 18 + ((fraction - 0.92) / 0.08) * 2;

  return 6 + (Math.acos((0.5 - fraction) / 0.42) / Math.PI) * 12;
}

function paintNile(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  const image = context.createImageData(width, height);
  let hour = localHour();
  let drawn = -Infinity;

  function scrubbed(pointer: Frame<undefined>["pointer"]) {
    if (!pointer) return undefined;

    const visible = Math.min(1, canvas.clientWidth / canvas.clientHeight / (width / height));

    return hourUnder(0.5 + (pointer.x / canvas.clientWidth - 0.5) * visible);
  }

  return {
    frame({ now, elapsed, pointer }: Frame<undefined>) {
      const gap = turn(hour, scrubbed(pointer) ?? localHour());

      if (Math.abs(gap) <= 0.01 && now - drawn < 80) return;
      hour = (hour + gap * ease(elapsed, 180) + 24) % 24;
      drawn = now;
      drawScene(image.data, hour, (performance.timeOrigin + now) / 1000);
      context.putImageData(image, 0, 0);
    },
  };
}

export function NileScene({ className }: { className?: string }) {
  const ref = useCanvas(paintNile, undefined);

  return <canvas ref={ref} width={width} height={height} aria-hidden className={className} />;
}

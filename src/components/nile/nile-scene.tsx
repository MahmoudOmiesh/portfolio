import { useCanvas } from "@/components/canvas";
import { localHour } from "@/components/local-time";

import { drawScene, height, width } from "./scene";

const turn = (from: number, to: number) => ((to - from + 36) % 24) - 12;

function hourUnder(fraction: number) {
  if (fraction < 0.08) return 6 - ((0.08 - fraction) / 0.08) * 2;

  if (fraction > 0.92) return 18 + ((fraction - 0.92) / 0.08) * 2;

  return 6 + (Math.acos((0.5 - fraction) / 0.42) / Math.PI) * 12;
}

function paintNile(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, still: boolean) {
  const image = context.createImageData(width, height);
  let hour = localHour();
  let scrub: number | undefined;
  let last = 0;

  function draw(now: number) {
    const gap = turn(hour, scrub ?? localHour());

    hour = still ? hour + gap : (hour + gap * (1 - Math.exp(-Math.min(64, now - last) / 180)) + 24) % 24;
    last = now;
    drawScene(image.data, hour, still ? 0 : Date.now() / 1000);
    context.putImageData(image, 0, 0);
  }

  function move(event: PointerEvent) {
    const box = canvas.getBoundingClientRect();
    const visible = Math.min(1, box.width / box.height / (width / height));

    scrub = hourUnder(0.5 + ((event.clientX - box.left) / box.width - 0.5) * visible);

    if (still) draw(performance.now());
  }

  function leave() {
    scrub = undefined;

    if (still) draw(performance.now());
  }

  canvas.addEventListener("pointermove", move);
  canvas.addEventListener("pointerleave", leave);
  const minute = still ? setInterval(() => draw(performance.now()), 60_000) : undefined;

  return {
    frame(now: number) {
      if (Math.abs(turn(hour, scrub ?? localHour())) > 0.01 || now - last >= 80) draw(now);
    },
    dispose() {
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
      clearInterval(minute);
    },
  };
}

export function NileScene({ className }: { className?: string }) {
  const { ref } = useCanvas(paintNile);

  return <canvas ref={ref} width={width} height={height} aria-hidden className={className} />;
}

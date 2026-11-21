import { useCallback, useEffect, useRef, type RefObject } from "react";

import { threshold, useCanvas } from "@/components/canvas";

const cell = 7;

const envelope = [
  "XXXXXXXXXXXXXXXXX",
  "XX.............XX",
  "X.X...........X.X",
  "X..X.........X..X",
  "X...X.......X...X",
  "X....X.....X....X",
  "X.....X...X.....X",
  "X......X.X......X",
  "X.......X.......X",
  "X...............X",
  "X...............X",
  "XXXXXXXXXXXXXXXXX",
];

const radius = Math.hypot(envelope[0].length, envelope.length) / 2;

function paintEnvelope(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  still: boolean,
  target: RefObject<number>,
) {
  const pointer = { x: -Infinity, y: -Infinity };
  let columns = 0;
  let rows = 0;
  let levels = new Float32Array();
  let glow = new Float32Array();
  let gathered = 0;
  let last = 0;

  function envelopeCell(x: number, y: number) {
    const left = Math.floor((columns - envelope[0].length) / 2);
    const row = envelope[y - Math.floor((rows - envelope.length) / 2)];

    if (!row || x < left || x >= left + row.length) return "outside";

    return row[x - left] === "X" ? "line" : "body";
  }

  function frame(now: number) {
    const style = getComputedStyle(canvas);
    const brand = style.getPropertyValue("--brand").trim();
    const box = canvas.getBoundingClientRect();
    const px = (pointer.x - box.left) / cell;
    const py = (pointer.y - box.top) / cell;
    const t = still ? 0 : now / 4000;
    const elapsed = Math.min(64, now - last);
    const ease = (duration: number) => (still ? 1 : 1 - Math.exp(-elapsed / duration));
    const fade = still ? 0 : Math.exp(-elapsed / 140);

    last = now;
    gathered += (target.current - gathered) * ease(160);
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < rows; y++)
      for (let x = 0; x < columns; x++) {
        const index = y * columns + x;
        const kind = envelopeCell(x, y);
        const delay = Math.min(1, Math.hypot(x - columns / 2, y - rows / 2) / radius);
        const want = kind !== "outside" && gathered > delay * 0.8 + 0.1 ? 1 : 0;

        const wave =
          (Math.sin(x * 0.18 + t * 1.3) + Math.sin(y * 0.22 - t) + Math.sin((x + y) * 0.1 + t * 0.7)) / 6 + 0.5;

        const near = still ? 0 : Math.max(0, 1 - Math.hypot(x - px, y - py) / 3.5);

        levels[index] += (want - levels[index]) * ease(90);
        glow[index] = Math.max(near, glow[index] * fade);

        const level = levels[index];
        const inset = 1 - glow[index] * 0.5;
        const dot = wave > threshold(x, y) * 1.1 + 0.2;

        const layers = [
          [style.color, (dot ? 0.1 + wave * 0.15 : 0) * (1 - level) * (1 - gathered * 0.5)],
          [brand, kind === "line" ? level : level * 0.14],
          [brand, glow[index] * 0.55],
        ] as const;

        for (const [fill, alpha] of layers) {
          if (alpha < 0.005) continue;
          context.fillStyle = fill;
          context.globalAlpha = Math.min(1, alpha);
          context.fillRect(x * cell + inset, y * cell + inset, cell - inset * 2, cell - inset * 2);
        }
      }
  }

  function resize() {
    const ratio = window.devicePixelRatio;

    columns = Math.floor(canvas.clientWidth / cell);
    rows = Math.floor(canvas.clientHeight / cell);
    canvas.width = Math.round(canvas.clientWidth * ratio);
    canvas.height = Math.round(canvas.clientHeight * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    levels = new Float32Array(columns * rows);
    glow = new Float32Array(columns * rows);
    frame(performance.now());
  }

  function move(event: PointerEvent) {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }

  function leave() {
    pointer.x = pointer.y = -Infinity;
  }

  const resizer = new ResizeObserver(resize);

  resizer.observe(canvas);
  canvas.addEventListener("pointermove", move);
  canvas.addEventListener("pointerleave", leave);

  return {
    frame,
    dispose() {
      resizer.disconnect();
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
    },
  };
}

export function EnvelopeField({ open, className }: { open: boolean; className?: string }) {
  const target = useRef(0);

  const { ref, redraw } = useCanvas(
    useCallback(
      (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, still: boolean) =>
        paintEnvelope(canvas, context, still, target),
      [],
    ),
  );

  useEffect(() => {
    target.current = open ? 1 : 0;
    redraw();
  }, [open, redraw]);

  return <canvas ref={ref} aria-hidden className={className} />;
}

import { ease, useCanvas, type Frame } from "@/components/canvas";
import { threshold } from "@/components/dither";

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

function paintEnvelope(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  let columns = 0;
  let rows = 0;
  let levels = new Float32Array();
  let glow = new Float32Array();
  let gathered = 0;

  function envelopeCell(x: number, y: number) {
    const left = Math.floor((columns - envelope[0].length) / 2);
    const row = envelope[y - Math.floor((rows - envelope.length) / 2)];

    if (!row || x < left || x >= left + row.length) return "outside";

    return row[x - left] === "X" ? "line" : "body";
  }

  function frame({ now, elapsed, pointer, props: open }: Frame<boolean>) {
    const style = getComputedStyle(canvas);
    const brand = style.getPropertyValue("--brand").trim();
    const px = (pointer?.x ?? -Infinity) / cell;
    const py = (pointer?.y ?? -Infinity) / cell;
    const t = now / 4000;
    const fade = 1 - ease(elapsed, 140);

    gathered += ((open ? 1 : 0) - gathered) * ease(elapsed, 160);
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < rows; y++)
      for (let x = 0; x < columns; x++) {
        const index = y * columns + x;
        const kind = envelopeCell(x, y);
        const delay = Math.min(1, Math.hypot(x - columns / 2, y - rows / 2) / radius);
        const want = kind !== "outside" && gathered > delay * 0.8 + 0.1 ? 1 : 0;

        const wave =
          (Math.sin(x * 0.18 + t * 1.3) + Math.sin(y * 0.22 - t) + Math.sin((x + y) * 0.1 + t * 0.7)) / 6 + 0.5;

        const near = Math.max(0, 1 - Math.hypot(x - px, y - py) / 3.5);

        levels[index] += (want - levels[index]) * ease(elapsed, 90);
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
  }

  return { frame, resize };
}

export function EnvelopeField({ open, className }: { open: boolean; className?: string }) {
  const ref = useCanvas(paintEnvelope, open);

  return <canvas ref={ref} aria-hidden className={className} />;
}

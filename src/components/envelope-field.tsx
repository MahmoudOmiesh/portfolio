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
const [outside, body, line] = [0, 1, 2];

function paintEnvelope(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  let columns = 0;
  let rows = 0;
  let parts = new Uint8Array();
  let delay = new Float32Array();
  let levels = new Float32Array();
  let glow = new Float32Array();
  let ink = new Float32Array();
  let tint = new Float32Array();
  let gathered = 0;

  function fill(color: string, alphas: Float32Array) {
    context.fillStyle = color;

    for (let index = 0; index < alphas.length; index++) {
      if (alphas[index] < 0.005) continue;
      const inset = 1 - glow[index] * 0.5;

      context.globalAlpha = Math.min(1, alphas[index]);
      context.fillRect(
        (index % columns) * cell + inset,
        Math.floor(index / columns) * cell + inset,
        cell - inset * 2,
        cell - inset * 2,
      );
    }
  }

  function frame({ now, elapsed, pointer, props: open }: Frame<boolean>) {
    const style = getComputedStyle(canvas);
    const px = (pointer?.x ?? -Infinity) / cell;
    const py = (pointer?.y ?? -Infinity) / cell;
    const t = now / 4000;
    const fade = 1 - ease(elapsed, 140);
    const settle = ease(elapsed, 90);

    gathered += ((open ? 1 : 0) - gathered) * ease(elapsed, 160);

    for (let y = 0; y < rows; y++)
      for (let x = 0; x < columns; x++) {
        const index = y * columns + x;
        const want = parts[index] !== outside && gathered > delay[index] * 0.8 + 0.1 ? 1 : 0;

        const wave =
          (Math.sin(x * 0.18 + t * 1.3) + Math.sin(y * 0.22 - t) + Math.sin((x + y) * 0.1 + t * 0.7)) / 6 + 0.5;

        const near = Math.max(0, 1 - Math.hypot(x - px, y - py) / 3.5);

        levels[index] += (want - levels[index]) * settle;
        glow[index] = Math.max(near, glow[index] * fade);

        const level = levels[index];
        const outline = Math.min(1, parts[index] === line ? level : level * 0.14);
        const dot = wave > threshold(x, y) * 1.1 + 0.2;

        ink[index] = (dot ? 0.1 + wave * 0.15 : 0) * (1 - level) * (1 - gathered * 0.5);
        tint[index] = 1 - (1 - outline) * (1 - glow[index] * 0.55);
      }

    context.clearRect(0, 0, canvas.width, canvas.height);
    fill(style.color, ink);
    fill(style.getPropertyValue("--brand").trim(), tint);
  }

  function resize() {
    const ratio = window.devicePixelRatio;

    columns = Math.floor(canvas.clientWidth / cell);
    rows = Math.floor(canvas.clientHeight / cell);
    canvas.width = Math.round(canvas.clientWidth * ratio);
    canvas.height = Math.round(canvas.clientHeight * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    parts = new Uint8Array(columns * rows);
    delay = new Float32Array(columns * rows);
    levels = new Float32Array(columns * rows);
    glow = new Float32Array(columns * rows);
    ink = new Float32Array(columns * rows);
    tint = new Float32Array(columns * rows);

    const left = Math.floor((columns - envelope[0].length) / 2);
    const top = Math.floor((rows - envelope.length) / 2);

    for (let y = 0; y < rows; y++)
      for (let x = 0; x < columns; x++) {
        const index = y * columns + x;
        const mark = envelope[y - top]?.[x - left];

        parts[index] = mark === "X" ? line : mark === "." ? body : outside;
        delay[index] = Math.min(1, Math.hypot(x - columns / 2, y - rows / 2) / radius);
      }
  }

  return { frame, resize };
}

export function EnvelopeField({ open, className }: { open: boolean; className?: string }) {
  const ref = useCanvas(paintEnvelope, open);

  return <canvas ref={ref} aria-hidden className={className} />;
}

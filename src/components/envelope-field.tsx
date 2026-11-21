import { useEffect, useRef } from "react";

const cell = 7;
const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((value) => (value + 0.5) / 16);

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

export function EnvelopeField({ open, className }: { open: boolean; className?: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const target = useRef(0);
  const redraw = useRef(() => {});

  useEffect(() => {
    target.current = open ? 1 : 0;
    redraw.current();
  }, [open]);

  useEffect(() => {
    const element = canvas.current;
    const context = element?.getContext("2d");

    if (!element || !context) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -Infinity, y: -Infinity };
    let columns = 0;
    let rows = 0;
    let levels = new Float32Array();
    let glow = new Float32Array();
    let gathered = 0;
    let frame = 0;
    let last = 0;

    function envelopeCell(x: number, y: number) {
      const left = Math.floor((columns - envelope[0].length) / 2);
      const top = Math.floor((rows - envelope.length) / 2);
      const row = envelope[y - top];

      if (!row || x < left || x >= left + row.length) return "outside";

      return row[x - left] === "X" ? "line" : "body";
    }

    function draw(now: number) {
      if (!element || !context) return;
      const style = getComputedStyle(element);
      const brand = style.getPropertyValue("--brand").trim();
      const { color } = style;
      const box = element.getBoundingClientRect();
      const px = (pointer.x - box.left) / cell;
      const py = (pointer.y - box.top) / cell;
      const t = still ? 0 : now / 4000;
      const elapsed = Math.min(64, now - last);
      const ease = (duration: number) => (still ? 1 : 1 - Math.exp(-elapsed / duration));
      const fade = still ? 0 : Math.exp(-elapsed / 140);
      const radius = Math.hypot(envelope[0].length, envelope.length) / 2;

      last = now;
      gathered += (target.current - gathered) * ease(160);
      context.clearRect(0, 0, element.width, element.height);

      for (let y = 0; y < rows; y++)
        for (let x = 0; x < columns; x++) {
          const index = y * columns + x;
          const kind = envelopeCell(x, y);
          const delay = Math.min(1, Math.hypot(x - columns / 2, y - rows / 2) / radius);
          const want = kind !== "outside" && gathered > delay * 0.8 + 0.1 ? 1 : 0;

          const wave =
            (Math.sin(x * 0.18 + t * 1.3) + Math.sin(y * 0.22 - t) + Math.sin((x + y) * 0.1 + t * 0.7)) / 6 + 0.5;

          const near = Math.max(0, 1 - Math.hypot(x - px, y - py) / 3.5);

          levels[index] += (want - levels[index]) * ease(90);
          glow[index] = Math.max(near * (still ? 0 : 1), glow[index] * fade);

          const level = levels[index];
          const lift = glow[index];
          const inset = 1 - lift * 0.5;
          const size = cell - inset * 2;
          const dot = wave > bayer[(y & 3) * 4 + (x & 3)] * 1.1 + 0.2;
          const field = (dot ? 0.1 + wave * 0.15 : 0) * (1 - level) * (1 - gathered * 0.5);

          const layers = [
            [color, field],
            [brand, kind === "line" ? level : level * 0.14],
            [brand, lift * 0.55],
          ] as const;

          for (const [fill, alpha] of layers) {
            if (alpha < 0.005) continue;
            context.fillStyle = fill;
            context.globalAlpha = Math.min(1, alpha);
            context.fillRect(x * cell + inset, y * cell + inset, size, size);
          }
        }
    }

    function loop(now: number) {
      draw(now);
      frame = requestAnimationFrame(loop);
    }

    function resize() {
      if (!element || !context) return;
      const ratio = window.devicePixelRatio;

      columns = Math.floor(element.clientWidth / cell);
      rows = Math.floor(element.clientHeight / cell);
      element.width = Math.round(element.clientWidth * ratio);
      element.height = Math.round(element.clientHeight * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      levels = new Float32Array(columns * rows);
      glow = new Float32Array(columns * rows);
      draw(performance.now());
    }

    redraw.current = () => {
      if (still) draw(0);
    };

    function move(event: PointerEvent) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    }

    function leave() {
      pointer.x = pointer.y = -Infinity;
    }

    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", leave);

    const resizer = new ResizeObserver(resize);

    resizer.observe(element);

    const observer = new IntersectionObserver((entries) => {
      cancelAnimationFrame(frame);

      if (entries.at(-1)?.isIntersecting && !still) frame = requestAnimationFrame(loop);
    });

    observer.observe(element);

    return () => {
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", leave);
      resizer.disconnect();
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvas} aria-hidden className={className} />;
}

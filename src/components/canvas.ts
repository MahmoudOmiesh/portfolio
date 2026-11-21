import { useCallback, useEffect, useRef } from "react";

const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((value) => (value + 0.5) / 16);

export const threshold = (x: number, y: number) => bayer[(y & 3) * 4 + (x & 3)];

type Painter = { frame: (now: number) => void; dispose?: () => void };

export function useCanvas(
  setup: (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, still: boolean) => Painter,
) {
  const ref = useRef<HTMLCanvasElement>(null);
  const paint = useRef<(now: number) => void>(undefined);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { frame, dispose } = setup(canvas, context, still);
    let handle = 0;

    function loop(now: number) {
      frame(now);
      handle = requestAnimationFrame(loop);
    }

    const observer = new IntersectionObserver((entries) => {
      cancelAnimationFrame(handle);

      if (entries.at(-1)?.isIntersecting && !still) handle = requestAnimationFrame(loop);
    });

    paint.current = frame;
    frame(performance.now());
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(handle);
      dispose?.();
    };
  }, [setup]);

  const redraw = useCallback(() => paint.current?.(performance.now()), []);

  return { ref, redraw };
}
